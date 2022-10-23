<script>
import {mapActions, mapState} from 'pinia';
import d$auth from '@/store/auth';

export default {
    name: 'user',
    computed: {
        ...mapState(d$auth, ['g$user']),
    },
    methods: {
        ...mapActions(d$auth, ['a$list']),
        async getList() {
            try {
                await this.a$list();
            }   catch (e) {
                console.error('methods getList error', e);
            }
        },
    },
    async created() {
        await this.getList();
    },
};
</script>
<template>
    <div class="card">
    <div class="card-header pb-0">
      <h6>Data ToDo</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ID</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >Create At</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Name</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Status</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p v-for="(item, index) in g$user" :key="index">{{item}}</p>
              </td>
              <td>
                <p v-for="(item, index) in g$user" :key="index">{{item}}</p>
              </td>
              <td class="align-middle text-center text-sm">
                <p v-for="(item, index) in g$user" :key="index">{{item}}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>