<template>
	<div class="group row mb-3 justify-content-between">
		<label for="input">{{ text_to_add.name + ':' }}</label>
		<input id="input" type="text" :placeholder="text_to_add.default">
	</div>
</template>

<script>
export default {
  props: {
    text_to_add: {
      type: Object,
      required: true
    }
  }
}
</script>
