<template>
  <Layout>
      <EditableEmployee v-if="selectedEmployeeId" :employee-id="selectedEmployeeId" />
      <EmployeeList v-else/>
  </Layout>
</template>

<script>

import Layout from '../../components/Layout';
import EmployeeList from '../../components/employees/employeeList';
import EditableEmployee from '../../components/employees/editableEmployee';
import EmployeesService from '../../api/employeesService';

export default {
  async asyncData ({ $axios, params, store }) {
    // each of these should be in action
    if (!(store.state.employees.length && store.state.departments.length)) {
      EmployeesService.$axios = $axios
      var employeesList = await EmployeesService.getListOfEmployees()
      store.dispatch('employee', employeesList.results)

      var employeeDepartments = await EmployeesService.getEmployeeDepartments()
      store.dispatch('departments', employeeDepartments.results)
    }
  },
  middleware: 'authenticated',
  components: {
    Layout, EmployeeList, EditableEmployee
  },
  data() {
    return {
      selectedEmployeeId: this.$route.params.id
    }
  },
}
</script>
