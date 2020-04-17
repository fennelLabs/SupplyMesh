<template>
  <div>
    <b-form style="padding-bottom: 15px;" @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Hospital Name:"
        label-for="input-1"
        description="Specify which hospital you are requesting supplies for."
      >
        <b-form-input
          id="input-1"
          v-model="form.hospital_name"
          required
          placeholder="Enter Hospital Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Supply Description:"
        label-for="input-2"
      >
        <b-form-textarea
          id="textarea"
          v-model="form.description"
          placeholder="Enter a description..."
          required
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Type of Medical Supply:"
        label-for="input-3"
      >
        <b-form-select
          id="input-3"
          v-model="form.supply"
          :options="supplies"
          required
        ></b-form-select>
        <b-img
          v-if="form.supply"
          :src="url"
          fluid
          alt="Responsive image"
          style="margin-top: 15px;"
          rounded
          center
        ></b-img>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        hospital_name: '',
        description: '',
        supply: null
      },
      supplies: [
        { text: 'Select One', value: null },
        'Surgical Masks',
        'N95 Masks',
        'Laytex Gloves',
        'Hazmat Suits'
      ],
      show: true,
      supplysrc: {
        'Surgical Masks': '../img/facemask.jpg',
        'N95 Masks': '../img/m95mask.jpg',
        'Laytex Gloves': '../img/medicalgloves.jpg',
        'Hazmat Suits': '../img/cdcsuit.jpg'
      }
    }
  },
  computed: {
    url() {
      return this.supplysrc[this.form.supply]
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.hospital_name = ''
      this.form.description = ''
      this.form.supply = null
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
