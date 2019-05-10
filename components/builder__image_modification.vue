<template>
	<div class="group mb-3">
		<div class="collapse_button position-top-right"
			 @click="image_hide_show ()">
			<i v-if="!content" class="fas fa-angle-down"></i>
			<i v-else class="fas fa-minus"></i>
		</div>
		<div class="group_title" :class="{ 'border-bottom border-grey': !content }">
			<h3 class="d-inline-block">{{ image_to_add.title }}</h3>
			<div class="group_image_button d-inline-block ml-3">
				<i class="fas fa-exchange-alt"></i>
			</div>
		</div>
		<transition name="opacity">
			<div v-if="content" class="group_image">
				<div class="image_wrap">
					<img :src="image_to_add.image_src" alt="">
				</div>
				<div class="group_image_coordinate mt-3">
					<form class="form">
						<add_text 
							v-for="(text_add, textId) in add_text__textToAdd"
							:key="textId"
							:text_to_add="{ name: text_add.name, default: text_add.default }" />
					</form>
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
      image__id: 0,
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
        return (this.content = true);
      } else {
        return (this.content = false);
      }
    }
  },
  methods: {
    image_hide_show() {
      this.content = !this.content;
      this.image__id = 2;
    }
  },
  created() {
    this.if_first;
  }
};
</script>
