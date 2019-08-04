<template>
      <div class="edit-employee-container">
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >

            <v-text-field
                v-model="personData.identifier"
                label="Identifier"
                disabled
            />

            <v-text-field
                v-model="personData.first_Name"
                :counter="15"
                label="First Name"
                required
                :rules="nameRules"
            />

            <v-text-field
                v-model="personData.last_Name"
                :counter="15"
                label="Last Name"
                :rules="nameRules"
                required
            />

            <v-text-field
                v-model="personData.email"
                label="Email"
                :rules="emailRules"
                required
            />

            <v-select
                v-model="personData.departments"
                :items="$store.state.departments"
                label="Departments"
                item-text="description"
                multiple
                return-object
            />
            <v-select
                v-model="personData.isDeleted"
                label="isDeleted"
                :items="[{ label: 'Active', value: false }, { label: 'Deleted', value: true }]"
                item-text="label"
                required
            />

            <v-btn
                color="success"
                @click="updateClickHandler"
            >
                Update
            </v-btn>
        </v-form>
      </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: {
        employeeId: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            personData: {
                first_Name: '',
                last_Name: '',
                identifier: '',
                isDeleted: '',
                email: '',
                departments: []
            },
            nameRules: [
                v => !!v || 'Field is required',
                v => (v && v.length <= 10) || 'Must be less than 10 characters',
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
        }
    },
    beforeMount() {
        const personData = this.$store.state.employees.find(emplo => emplo.identifier === this.employeeId)
        const personDepartments = personData.employeeDepartments.map(e => ({...e, description: e.employeeDepartment.description}))
        this.personData = Object.assign({}, personData, { departments: personDepartments })
    },
    methods: {
        ...mapActions([
            'updatePersonDetails'
        ]),
        updateClickHandler() {
            if (this.$refs.form.validate()) {
                this.updatePersonDetails(this.personData)
            } else {
                // not valid
            }
        },
    },
    computed: {
    }
}
</script>

<style lang="scss" scoped>
    .edit-employee-container {
        padding-top: 15px;
    }
</style>

