<template>
  <div class="sm:p-4">
    <section class="grid gap-4 container mx-auto">
      <form>
        <div class="todo-input">
          <label for="first_name">Descrição da tarefa</label>

          <div class="flex">
            <input type="text" class="rounded-l-lg" placeholder="Buscar meu filho na escola..." v-model="value_new_todo" required>
            <button
                @click.stop.prevent="add_width_todolist" class="button-right">
             <b class="text-lg">
               <img class="img-icon" src="../../assets/images/add.svg" alt="add-icon">
             </b>
            </button>
          </div>
        </div>

        <ul class="py-1 text-sm text-green-200 font-bold mt-2" aria-labelledby="dropdown-button">
          <template v-for="item in list_todo" :key="item" v-if="list_todo.length !== 0">
            <todo-item :value="item" @remove-todo="remove_todo_item" />
          </template>

          <li class="h-40 text-lg" v-else>
            <div class="w-full flex items-center h-full justify-center rounded-lg bg-gray-300">
              <h1 class="text-green-800">
                <span>Não a tarefas em andamento</span>
              </h1>
            </div>
          </li>
        </ul>
      </form>
    </section>
  </div>
</template>

<script lang="ts" type="application/javascript" src="./home.ts"/>

<style lang="css" type="text/css" src="./home.css"/>
