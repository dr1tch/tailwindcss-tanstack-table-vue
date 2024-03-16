<template>
  <table class="w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Name
        </th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Title
        </th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Email
        </th>
        <th scope="col"wider">
          Name
        </th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-5 class="px-600 uppercase tracking-wider">
          Title
        </th> py-3 text-left text-xs font
        <th scope="col" class="-medium text-graypx-6 py--500 uppercase tracking-wider3 text-left text-xs font-medium text-gray-5">
          Role00 uppercase tracking
        </th>

               Email
        </tr>
   th>
        < </thead>
th scope="col" class="px-6    <tbody class="bg-white py-3 text- divide-y divide-gray-200">left text-xs font-medium text-gray-500 uppercase tracking-wider
      <tr v-for="user in users">
          Role
        </th>
     " </tr>
    :key="user. </thead>
email">
        <td class="px-6 py-4 whites    <tbody classpace-nowrap">="bg-white
          <div class="text-sm divide-y divide-gray font-medium text--200">
      <tr vgray-900">{{ user.name }}</div>
-for="user in        users" </td>
        :key="user. <td class="pxemail">
        <td class="px-6 py-4 whites-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-500">{{ user.title }}</div>
       pace-nowrap">
          <div class="text-sm font-medium text-gray-900 </td>
       ">{{ user.name }}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-gray-500">{{ user.title }}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap <td class="px-6 py-4 whitespace-nowrap">
          <div">
          <div class="text-sm class="text-sm text text-gray-50-gray-500">{{ user.email0">{{ user.email }}</div>
        </td>
        <td class="px-6 py-4 whitespace-now }}</div>
rap">
          <span        </td>
 class="px        <td class="-2px-6 py- inline4 whitespace-nowrap">
          <-flexspan class="px-2 inline-flex text text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            {{ user.role }}
          </span>
        </td>
      </tr>
    </tbody>
  </table-xs leading-5 font-sem>
</template>