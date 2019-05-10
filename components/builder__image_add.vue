<template>
	<div class="selectedImage_form">
		<v-layout align-center justify-center row fill-height>
			<div v-for="(upload, uploadID) in selectedFile" :key="uploadID" class="upload_image">
				<img :src="upload" alt="">
			</div>
		</v-layout>
		<v-layout align-center justify-center row fill-height>
			<v-btn @click="chooseFiles" fab dark depressed small color="light-blue lighten-2">
				<i class="fas fa-plus"></i>
			</v-btn>
			<input id="fileUpload" type="file" ref="file" multiple @change="onFileSelected" hidden>
			<v-btn @click="onUpload" dark large color="error">
				upload
				<i class=" ml-3 fas fa-cloud-upload-alt"></i>
			</v-btn>
		</v-layout>
	</div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      name: [],
    }
  },
  computed: {
	selectedFile () {
	  return this.$store.getters.UPLOADS
	}
  },
  methods: {
	chooseFiles() {
      document.getElementById("fileUpload").click()
    },
    onFileSelected(evt) {
	  var fileInput = document.querySelector("input[type=file]")
	  
      for (var i = 0; i < fileInput.files.length; i++) {
        var reader = new FileReader()
        reader.onload = readerEvent => {
		  this.$store.commit('UPDATE', readerEvent.target.result )
        }
        reader.readAsDataURL(fileInput.files[i])
	  }
    },
    onUpload() {
	  this.$store.commit('ADD_IMAGE')

	  this.$store.commit('INITIALISE')
	  
	  this.$store.commit('REMOVE_UPLOADS')
    }
  }
}
</script>


