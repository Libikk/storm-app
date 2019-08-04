<template>
  <Layout>
      <div>
        <v-card>
          <v-card-title>
            Employees
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              label="Search..."
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
              :headers="headers"
              :items="employeeList"
              :items-per-page="5"
              :loading="isLoading"
              loading-text="Loading... Please wait"
            >
            <template v-slot:item.employeeDepartments="{ item }">
              <ul>
                <li v-for="sinlgDep in item.employeeDepartments" :key="sinlgDep.departmentId">
                    {{ sinlgDep.employeeDepartment.description }}
                </li>
              </ul>
            </template>
          </v-data-table>
          </v-card>
      </div>
  </Layout>
</template>

<script>

import Layout from '../components/Layout';
import EmployeesService from '../api/employeesService';

export default {
  middleware: 'authenticated',
  components: {
    Layout
  },
  mounted() {
    if (!this.$store.state.employees.length) {
        // to do: move this to store init
        this.isLoading = true
        EmployeesService.getListOfEmployees()
          .then(res => {
            console.log('res: ', res);
            this.$store.commit('setEmployees', res.results)
          })
          .finally(() => (this.isLoading = false))
    }
  },
  methods: {
    renderDepartments(departments) {
      return departments.map(e => e.employeeDepartment.description)
    },
    getFieldStringValue(propertyName, propertyValue) {
      var convertedValue
      if (propertyName === 'isDeleted') {
        convertedValue = propertyValue ? 'Active' : 'Deleted'
      }
      if (propertyName === 'employeeDepartments') {
        convertedValue = propertyValue.reduce((acc, nextDep) => `${acc} ${nextDep.employeeDepartment.description}`, '')
      }
      return String(convertedValue || propertyValue)
    },
  },
  data: () => ({
    search: '',
    isLoading: false,
    headers: [
      { text: 'Identifier',  value: 'identifier' },
      { text: 'Name', value: 'name' },
      { text: 'Email', value: 'email' },
      { text: 'Created at', value: 'createdDate' },
      { text: 'Departments', value: 'employeeDepartments' },
      { text: 'Status', value: 'isDeleted' },
    ],
  }),
  computed: {
    filteredEmployees() {
      return this.$store.state.employees.filter(singleEmp => {
        if (this.search) {
            return this.headers.reduce((acc, nextCol) => {
              const propertyName = nextCol.value
              const fieldValue = this.getFieldStringValue(propertyName, singleEmp[nextCol.value]).toLowerCase()
              return acc || fieldValue.includes(this.search);
            }, false)
        }
        return true
      })
    },
    employeeList() {
      return this.filteredEmployees.map((singleEmployee) => ({
        ...singleEmployee,
        name: `${singleEmployee.first_Name} ${singleEmployee.last_Name}`,
        isDeleted: this.getFieldStringValue('isDeleted', singleEmployee.isDeleted)
      }))
    }
  },
}
</script>
