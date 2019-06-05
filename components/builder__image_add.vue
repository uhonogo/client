<template>
	<transition name="fade_top">
		<div v-if="selectedFile.length !== 0" class="selectedImage_form position-XY-center">
			<div class="close_button position-top-right" @click="REMOVE_UPLOADS">
				<i class="fas fa-window-close"></i>
			</div>tetet
			<v-layout align-center justify-center row fill-height>
				<div v-for="(upload, uploadID) in selectedFile" :key="uploadID" class="upload_image">
					<div class="close_button position-top-right" @click="removeImage(uploadID)">
						<i class="far fa-times-circle"></i>
					</div>
					<img :src="upload" alt="">
				</div>
				<slot></slot>
			</v-layout>
			<v-layout align-center justify-center row fill-height class="mt-5">
				<v-btn @click="onUpload" dark large color="error">
					upload
					<i class=" ml-3 fas fa-cloud-upload-alt"></i>
				</v-btn>
			</v-layout>
		</div>
	</transition>
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
    onUpload() {
	  this.$store.commit('ADD_IMAGE')

	  this.$store.commit('INITIALISE_IMAGES')
	  
	  this.$store.commit('REMOVE_UPLOADS')
	},
	REMOVE_UPLOADS() {
	  this.$store.commit('REMOVE_UPLOADS')
	},
	removeImage( index ) {
		console.log(index)
		this.$store.commit('REMOVE_IMAGE__FROM_UPLOADS', index)
	}
  }
}
</script>


