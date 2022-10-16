<template>
  <li class="mb-1.5">
    <div>

      <fieldset class="bg-gray-800 inline-flex py-2 px-4 w-full rounded-lg flex items-center justify-between">
        <span v-text="value"/>

        <button @click.stop.prevent="remove_item(value)">
          <img src="../../assets/images/delete.svg" alt="delete-icon" class="w-6">
        </button>
      </fieldset>
    </div>
  </li>
</template>

<script src="./todo-item.ts" lang="ts" type="application/javascript"/>
