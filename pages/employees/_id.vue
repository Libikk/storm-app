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

export default {
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
