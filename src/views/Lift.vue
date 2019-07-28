<template>
  <div class="about">
    <h1>Лифт № {{elevator.id}}</h1>

    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-date"></i> Общая информация
        </span>

        <el-row>
          <el-col :span="12">
            <DataRow label="Режим работы">Нормальная работа</DataRow>
            <DataRow label="Состояние лифта">Движение кабины вверх</DataRow>
          </el-col>
          <el-col :span="12">
            
          </el-col>
        </el-row>
        <hr />
        <el-row>
          <el-col :span="12">
            <DataRow label="Производитель">{{elevator.model.creator}}</DataRow>
            <DataRow label="Модель">{{elevator.model.name}}</DataRow>
            <DataRow label="Акт ввода в эксплуатацию">Н-65013</DataRow>
          </el-col>
          <el-col :span="12">
            <DataRow label="Адрес объекта">{{elevator.address}}</DataRow>
          </el-col>
        </el-row>
      </el-tab-pane>

    <el-tab-pane label="Режим работы"></el-tab-pane>
    <el-tab-pane label="Состояние"></el-tab-pane>
    <el-tab-pane label="Документация"></el-tab-pane>

      <el-tab-pane label="Журнал">
        <div class="block">
            <ul v-for="item in events">
                <li :type="item.eventCode.charAt(0) === 'D' ?
                    'danger':
                    (item.eventCode.charAt(0) === 'E' ? 'warning': '')
                ">
                    {{ item.createdAt }} | {{ item.eventCode }}
                </li>
            </ul>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import DataRow from "@/components/dataRow.vue";

const data = require("../data/_data.json");
const elevator = data._elevators[0];
const events = data._events.filter(e => e.elevatorId === elevator.id);

console.log(elevator);

export default {
  data() {
    return {
      elevator,
      events,
      DataRow: (key, val) => {
        return `
            <el-row>
              <el-col :span="8">
                <div class="grid-content bg-purple">${key}</div>
              </el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple-light">${val}</div>
              </el-col>
            </el-row>
        `;
      }
    };
  },
  components: {
    DataRow
  },
  methods: {
    addressFormatter(row, column) {
      return row.address;
    },
    modelFormatter(row, column) {
      const { name, creator } = row.model_id;
      return `${name} (${creator})`;
    }
  }
};
</script>
