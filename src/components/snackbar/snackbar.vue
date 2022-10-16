<template>
  <div v-show="store.is_open"
       class="snackbar"
       :class="store.class_component"
       style="height: 48px; min-width: 300px; max-width: 100%">
    <b class="text-white" v-text="store.message"/>
  </div>
</template>

<script src="./snackbar.ts" lang="ts"/>

<style src="./snackbar.css" lang="css" type="text/css"/>
