<template>
	<div class="group mb-3">
		<div class="collapse_button position-top-right"
			 @click="image_hide_show ()">
			<i v-if="!content" class="fas fa-angle-down"></i>
			<i v-else class="fas fa-minus"></i>
		</div>
		<div class="group_title" :class="{ 'border-bottom border-grey': !content }">
			<h3 class="d-inline-block">{{ image_to_add.title }}</h3>
			<div class="group_image_button d-inline-block ml-3" @click="changeImage">
				<i class="fas fa-exchange-alt"></i>
			</div>
		</div>

		<transition name="opacity">
			<div v-if="content" class="group_image">
				<v-layout align-center justify-center row fill-height class="pt-5">
					<v-flex xs v-if="currentImage" class="image_wrap" :class="{ blured: !Show_image_list }">
						<img :src="currentImage" alt="">
					</v-flex>
				</v-layout>
				<div v-if="!Show_image_list && content" class="group_image_list position-XY-center">
					<div class="close_button position-top-right" @click="changeImage">
						<i class="far fa-times-circle"></i>
					</div>
					<div v-for="(image, imageID) in image_to_add.image_list" :key="imageID" class="image">
						<img :src="image" @click="selectImage(image), cardLogoSelect(image, image_to_add.title)" alt="">
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import add_text from "@/components/builder__add_text";

export default {
  props: {
    image_to_add: {
      type: Object,
      required: true
    }
  },
  components: {
    add_text
  },
  data() {
    return {
	  content: false,
	  Show_image_list: true,
	  image__id: 0,
	//   currentImage: null,
      add_text__textToAdd: [
        {
          name: "X",
          default: 0
        },
        {
          name: "Y",
          default: 0
        }
      ]
    };
  },
  computed: {
    if_first() {
      var cur_id = this.image_to_add.id - this.image__id;

      if (cur_id == 0) {
		this.Show_image_list = !this.Show_image_list
		return this.content = true
      } else {
		this.Show_image_list = false
		return this.content = false
      }
	},
	currentImage () {
	  var title = this.image_to_add.title
	  if (title == "background") {
		return this.$store.getters.CARD_BG
	  } else if (title == "logo") {
		return this.$store.getters.CARD_LOGO
	  }
	}
  },
  methods: {
    image_hide_show() {
      this.content = !this.content;
      this.image__id = 2;
	},
	selectImage(image) {
	  this.currentImage = image
	  this.Show_image_list = !this.Show_image_list
	},
	changeImage() {
	  this.Show_image_list = !this.Show_image_list
	},
	cardLogoSelect ( image, dir_name ) {
		if ( dir_name.toLowerCase() == 'logo' ) {
			this.$store.dispatch('SELECT_CARD_LOGO', image)
		} else {
			this.$store.dispatch('SELECT_CARD_BG', image)
		}
	},
  },
  created() {
	this.if_first
  },

};
</script>
