<template>
	<div class="builder__user_upload">
		<h3 class="title">{{ uploads_title }}</h3>
		<v-layout align-center justify-center row fill-height>
			<div v-for="(image, imageID) in name" :key="imageID" class="builder__user_upload__images m-2">
				<div class="close_button position-top-right" @click="removeImage(imageID)">
					<i class="far fa-times-circle"></i>
				</div>
				<img :src="image" alt="">
			</div>
			<v-btn @click="chooseFiles" fab dark depressed small color="light-blue lighten-2">
				<i class="fas fa-plus"></i>
			</v-btn>
			<input id="fileUpload" type="file" ref="file" multiple @change="onFileSelected" hidden>
		</v-layout>
	</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide
  },
  props: {
    uploads_title: {
      type: String,
      required: true
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
	removeImage (index) {
	//   this.name.splice(index, 1)
	  this.$store.commit('REMOVE_IMAGE__FROM_NAME', index)
	}
  },
  watch: {
    name() {
      this.$localStorage.set('image', JSON.stringify(this.name))
    }
  },
  computed: {
	name() {
		return this.$store.getters.NAME;
	},
	getImage() {
		this.$store.commit('INITIALISE')
	}
  }
};
</script>
