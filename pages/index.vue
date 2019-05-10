<template>
	<header class="start-page">

		<div class="header_image position-XY-center">
			<div class="header_image_wrap"
				v-for="(image, imageID) in header_content.image"
				:key="imageID"
				:class="image.class">
				<img :src="image.img_part" alt="">
			</div>
		</div>

		<div class="star_button position-XY-center shadow-large">
			<router-link to="/builder"><i class="fas fa-play"></i></router-link>
		</div>

		<div class="logo position-bottom-right">
			<img :src="header_content.logo" alt="heder-logo">
		</div>

	</header>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      header_content: {
        text: " <b>name</b> ",
        image: [
          {
            class: "bottom-left",
            img_part: "/static/header_1.svg"
          },
          {
            class: "top-right",
            img_part: "/static/header_2.svg"
          }
        ],
        logo: "/static/logo.svg"
      }
    };
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>