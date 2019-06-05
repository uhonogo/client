<template>
	<section class="builder">
		<router-link class="btn position-top-left" to="/"><i class="fas fa-angle-double-left"></i> back</router-link>
		<div class="row h-100 m-0">
			<div class="col-6 bg-dark h-100 pt-5">
				<div class="builder_result rounded-custom shadow-black-lg">
					<img class="card_bg" :src="CARD_BG" alt="">
					<img class="card_logo" :src="CARD_LOGO" alt="">
				</div>
				<div class="builder_parametters mt-5">
					<form>
						<add_text 
							v-for="(text_add, textId) in add_text__textToAdd"
							:key="textId"
							:text_to_add="{ name: text_add.name, default: text_add.default }" />
					</form>
				</div>
			</div>
			<div class="col-6 pt-5">
				<user_upload :uploads_title="uploads">
					<add_files/>
				</user_upload>
				<add_image>
					<add_files/>
				</add_image>
				<image_mod
						v-for="(image_add, imageId) in add_image__textToAdd"
						:key="imageId"
						:image_to_add="{ id: imageId, title: image_add.title, image_list }"/>
			</div>
		</div>

	</section>
</template>

<script>
import axios from "axios"
import { mapGetters } from 'vuex'
import add_text from "@/components/builder__add_text"
import image_mod from "@/components/builder__image_modification"
import user_upload from "@/components/builder__user_uploads"
import add_image from "@/components/builder__image_add"
import add_files from "@/components/builder__uploadButton"

export default {
  components: {
    add_text,
	image_mod,
	user_upload,
	add_image,
	add_files
  },
  data() {
    return {
	  text: "<b>name</b>",
	  uploads: 'your uploads',
      add_text__textToAdd: [
        {
          name: "Company",
          default: "Your company"
        },
        {
          name: "Title",
          default: "Your title"
        },
        {
          name: "Phone",
          default: "+123 450 45 78"
        },
        {
          name: "Email",
          default: "mail_axample@mail.com"
        }
      ],
      add_image__textToAdd: [
        {
		  title: "logo",
        },
        {
		  title: "background",
        }
      ]
    }
  },
  computed: {
	image_list() {
	  return this.$store.getters.NAME
	},
	...mapGetters([ 'CARD_LOGO', 'CARD_BG' ])
  },
  methods: {
	add_new () {

	}
  },
  mounted () {
	this.image_list
  }
}
</script>