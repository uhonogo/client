<template>
	<div>
		<v-btn @click="chooseFiles" fab dark depressed small color="light-blue lighten-2">
			<i class="fas fa-plus"></i>
		</v-btn>
		<input id="fileUpload" type="file" ref="file" multiple @change="onFileSelected" hidden>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
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
		},
	}
</script>

<style lang="scss" scoped>

</style>