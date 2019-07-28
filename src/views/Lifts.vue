<template>
  <div class="about">
    <h1>Лифты</h1>
    
    Модель
    <el-select placeholder="">
      <el-option label="ЛП – 0626 ЭМ" value="1"></el-option>
      <el-option label="Протон-4" value="1"></el-option>
      <el-option label="ЛПА-1" value="1"></el-option>
      <el-option label="Протон" value="1"></el-option>
      <el-option label="ПП-0411Щ" value="1"></el-option>
      <el-option label="ЛП – 0416 ЭМ" value="1"></el-option>
      <el-option label="ЛП-3" value="1"></el-option>
      <el-option label="Model 4" value="1"></el-option>
      <el-option label="ПП-0471Щ" value="1"></el-option>
      <el-option label="Протон-М" value="1"></el-option>
    </el-select>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
    Производитель
    <el-select placeholder="">
      <el-option label="ЛП – 0626 ЭМ" value="1"></el-option>
      <el-option label="Протон-4" value="1"></el-option>
      <el-option label="ЛПА-1" value="1"></el-option>
      <el-option label="Протон" value="1"></el-option>
      <el-option label="ПП-0411Щ" value="1"></el-option>
      <el-option label="ЛП – 0416 ЭМ" value="1"></el-option>
      <el-option label="ЛП-3" value="1"></el-option>
      <el-option label="Model 4" value="1"></el-option>
      <el-option label="ПП-0471Щ" value="1"></el-option>
      <el-option label="Протон-М" value="1"></el-option>
    </el-select>

    <br />
    <br />
    <el-table
      :data="elevators"
      :default-sort="{prop: 'start_date', order: 'descending'}"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="start_date" label="Дата ввода в эксплуатацию" sortable width="122"></el-table-column>
      <el-table-column prop="model" label="Модель" :formatter="modelFormatter" sortable></el-table-column>
      <el-table-column prop="controlStationId" label="СУЛ" width="180" sortable></el-table-column>
      <el-table-column prop="address" label="Адрес" :formatter="addressFormatter"></el-table-column>
      <el-table-column prop="id" label="Id" width="80" :formatter="idFormatter"></el-table-column>
    </el-table>
  </div>
</template>

<style>
.el-table .warning-row > td {
  background: rgb(252, 134, 3) !important;
  color: #fff;
}

.el-table tr td:nth-child(2) {
  font-weight: bold;
}
.el-table .danger-row > td {
  background: rgb(238, 95, 52) !important;
  color: #fff;
}
</style>

<script>
const elevators = require("../data/_data.json")._elevators;

export default {
  data() {
    console.log([...new Set(elevators.map(el => el.model.name))]);

    return {
      elevators,
      models: [
        "ЛП – 0626 ЭМ",
        '"Протон-4"',
        "ЛПА-1",
        '"Протон"',
        "ПП-0411Щ",
        "ЛП – 0416 ЭМ",
        "ЛП-3",
        "Model 4",
        "ПП-0471Щ",
        '"Протон-М"',
        "ПП 0601Щ",
        "ПП-1011Щ",
        "ЛГО-0520К",
        "ЛПА М6"
      ],
      m: [...new Set(elevators.map(el => el.model.name))]
    };
  },
  methods: {
    addressFormatter(row, column) {
      return row.address;
    },
    modelFormatter(row, column) {
      const { name, creator } = row.model;
      return `${name} (${creator})`;
    },
    idFormatter(row, column) {
      return <router-link to="/lift/123">{row.id}</router-link>;
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 0) {
        return "danger-row";
      } else if (rowIndex >= 1 && rowIndex <= 2) {
        return "warning-row";
      }
      return "";
    }
  }
};
</script>
