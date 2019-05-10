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
  data() {
    return {
	  look:[]
    };
  },
  methods: {
	  removeImage (index) {
		this.name.splice(index, 1)
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
  },
  mounted () {
    this.$store.commit('INITIALISE')
  }
};
</script>
