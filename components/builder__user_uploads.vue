<template>
	<div class="builder__user_upload">
		<h3 class="title">{{ uploads_title + ' (' + string_OR_not +')' }}</h3>
		<v-layout align-center justify-center row fill-height>
			<div v-if="string_OR_not > 1" v-for="(image, imageID) in name" :key="imageID" class="builder__user_upload__images m-2">
				<div class="close_button position-top-right" @click="removeImage(image.id)">
					<i class="far fa-times-circle"></i>
				</div>
				<img :src="image" alt="">
			</div>
			<div v-if="string_OR_not == 1" class="builder__user_upload__images m-2">
				<div class="close_button position-top-right" @click="removeImage(image.id)">
					<i class="far fa-times-circle"></i>
				</div>
				<img :src="name" alt="">
			</div>
			<slot></slot>
		</v-layout>
	</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
// import addFiles from './bulder__uploadButton'
export default {
  components: {
    Carousel,
	Slide,
  },
  props: {
    uploads_title: {
      type: String,
      required: true
    }
  },
  methods: {
	removeImage (index) {
	  this.$store.dispatch('REMOVE_IMAGE__FROM_NAME', index)
	}
  },
  computed: {
	name() {
		return this.$store.getters.NAME;
	},
	string_OR_not() {
		if( typeof this.name === 'string' ) {
			return 1
		} else {
			return this.name.length
		}
	}
  }
};
</script>
