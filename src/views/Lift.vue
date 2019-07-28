<template>
  <div class="about">
    <h1>Лифт #1278056</h1>



  <el-table
    :data="elevators"
    :default-sort = "{prop: 'start_date', order: 'descending'}"
    style="width: 100%">
    <el-table-column
      prop="start_date"
      label="Дата ввода в эксплуатацию"
      sortable>
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address"
      :formatter="formatter">
    </el-table-column>
  </el-table>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        elevators: [{
          id: '1',
          start_date: '2016-05-03',
          name: 'Tom',
          address: 'ЦАО, р-н Пресненский, ул. Заморёнова, д. 27'
        }, {
          start_date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          start_date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          start_date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    }
  }
</script>
