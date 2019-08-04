<template>
      <div>
          EDITABLE EMPLOYEE {{ employeeId }}
      </div>
</template>

<script>

import EmployeesService from '../../api/employeesService';

export default {
    props: {
        employeeId: {
            type: String,
            default: null
        }
    },
  data(){
    return {
      search: '',
    }
  },
}
</script>
