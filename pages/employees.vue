<template>
  <Layout>
      <div>
         <v-data-table
            :headers="headers"
            :items="employeeList"
            :items-per-page="5"
            :search="search"
          >
          <template v-slot:item.employeeDepartments="{ item }">
            <ul>
              <li v-for="sinlgDep in item.employeeDepartments" :key="sinlgDep.departmentId">
                  {{ sinlgDep.employeeDepartment.description }}
              </li>
            </ul>
          </template>
          </v-data-table>
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
  asyncData ({ req, res, store }) {
    if (!store.state.employees.length) {
        EmployeesService.getListOfEmployees()
          .then(res => store.commit('setEmployees', res.results))
    }
  },
  methods: {
    renderDepartments(departments) {
      return departments.map(e => e.employeeDepartment.description)
    }
  },
  data: () => ({
    search: '',
    headers: [
      {
        text: 'Id',
        align: 'left',
        sortable: false,
        value: 'id',
      },
      { text: 'Name', value: 'name' },
      { text: 'Email', value: 'email' },
      { text: 'Created at', value: 'createdDate' },
      { text: 'Departments', value: 'employeeDepartments' },
      { text: 'Status', value: 'isDeleted' },
    ],
  }),
  computed: {
    employeeList() {
      return this.$store.state.employees.map((singleEmployee) => ({
        ...singleEmployee,
        name: `${singleEmployee.first_Name} ${singleEmployee.last_Name}`,
        isDeleted: singleEmployee.isDeleted ? 'Active' : 'Deleted',
      }))
    }
  },
}
</script>
