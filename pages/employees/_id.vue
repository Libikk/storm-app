<template>
  <Layout>
      <EditableEmployee v-if="selectedEmployeeId" :employee-id="selectedEmployeeId"/>
      <EmployeeList v-else/>
  </Layout>
</template>

<script>

import Layout from '../../components/Layout';
import EmployeeList from '../../components/employees/employeeList';
import EditableEmployee from '../../components/employees/editableEmployee';
import EmployeesService from '../../api/employeesService';

export default {
  async asyncData ({ $axios, store }) {
    EmployeesService.$axios = $axios
    var data = await EmployeesService.getListOfEmployees()
    store.commit('setEmployees', data.results)
  },
  middleware: 'authenticated',
  components: {
    Layout, EmployeeList, EditableEmployee
  },
  data(){
    return {
      selectedEmployeeId: this.$route.params.id
    }
  },
}
</script>
