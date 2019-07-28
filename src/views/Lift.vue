<template>
  <div class="about">
    <h1>Лифты</h1>

    <el-table
      :data="elevators"
      :default-sort="{prop: 'start_date', order: 'descending'}"
      style="width: 100%"
    >
      <el-table-column prop="start_date" label="Дата ввода в эксплуатацию" sortable width="240"></el-table-column>
      <el-table-column prop="model_id" label="Модель" :formatter="modelFormatter" sortable></el-table-column>
      <el-table-column prop="controlStationId" label="СУЛ" width="240" sortable></el-table-column>
      <el-table-column prop="address" label="Address" :formatter="addressFormatter"></el-table-column>
    </el-table>
  </div>
</template>

<script>
const elevators = require("../data/_data.json")._elevators;

export default {
  data() {
    return {elevators};
  },
  methods: {
    addressFormatter(row, column) {
      return row.address;
    },
    modelFormatter(row, column) {
        const {name, creator} = row.model_id;
        return `${name} (${creator})`;
    }
  }
};
</script>
