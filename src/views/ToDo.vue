<script>
import {mapActions, mapState} from 'pinia';
import d$todo from '@/store/todo';

import ArgonInput from "@/components/ArgonInput.vue";
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import ArgonButton from "@/components/ArgonButton.vue";

export default {
    name: 'ToDo',
    data: () => ({
      input: {
        name:'',
        description: '',
        category:'',
      },
    }),
    components: {
      ArgonInput,
      ArgonSwitch,
      ArgonButton,
    },
    computed: {
        ...mapState(d$todo, ['g$list']),
    },
    methods: {
        ...mapActions(d$todo, ['a$list','a$add','a$del','a$update']),
        async getList() {
            try {
                await this.a$list();
            }   catch (e) {
                console.error('methods getList error', e);
            }
        },
        async addList() {
            try {
                await this.a$add({ ...this.input });
                this.$router.go(this.$router.currentRoute)
            } catch (e) {
                console.error('methods addList error', e);
            }
        },
        async delList() {
            try {
                const {id}=this.input;
                await this.a$del(id);
                this.$router.go(this.$router.currentRoute)
            } catch (e) {
                console.error('methods addList error', e);
            }
        },
        async UptList() {
        const dataId = this.input.id;
        console.log(dataId);
        try {
          await this.a$update(
            {
              name: this.input.name,
              description: this.input.description,
            },
            dataId
          );
          this.$router.go(this.$router.currentRoute);
        } catch (error) {
          console.error("method updatelist error", error);
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
                <p v-for="(item, index) in g$list" :key="index">{{item.id}}</p>
              </td>
              <td>
                <p v-for="(item, index) in g$list" :key="index">{{item.createdAt}}</p>
              </td>
              <td class="align-middle text-center text-sm">
                <p v-for="(item, index) in g$list" :key="index">{{item.name}}</p>
              </td>
              <td class="align-middle text-center">
                <p v-for="(item, index) in g$list" :key="index">{{item.status}}</p>
              </td>
              <td class="align-middle text-center">
                <p v-for="(item, index) in g$list" :key="index">{{item.description}}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="page-header min-vh-65">
        <div class="container">
            <div class="row">
                <div class="card mx-auto col-xl-9 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
                    <div class="card-plain">
                        <div class="pb-0 card-header text-start">
                            <h4 class="font-weight-bolder text-center">Add ToDo</h4>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="addList">
                                <div class="mb-3">
                                    <label for="name" class="fs-6" >Name</label>
                                    <argon-input v-model="input.name" type="text" name="name" size="lg" />
                                </div>
                                <div class="mb-3">
                                <label for="description" class="fs-6" >Description</label>
                                    <argon-input v-model="input.description" type="text" name="description" size="lg" />
                                </div>
                                <div class="text-center">
                                    <argon-button class="mt-4" variant="gradient" color="success" fullWidth size="lg"
                                        type="submit">
                                        Submit
                                    </argon-button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="card mx-auto col-xl-9 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
                    <div class="card-plain">
                        <div class="pb-0 card-header text-start">
                            <h4 class="font-weight-bolder text-center">Del ToDo</h4>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="delList">
                                <div class="mb-3">
                                    <label for="category" class="fs-6" >Select ID</label>
                                    <argon-input v-model="input.id" type="text" name="id" size="lg" />
                                </div>
                                <div class="text-center">
                                    <argon-button class="mt-4" variant="gradient" color="success" fullWidth size="lg"
                                        type="submit">
                                        Delete Data
                                    </argon-button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="card mx-auto col-xl-9 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
                    <div class="card-plain">
                        <div class="pb-0 card-header text-start">
                            <h4 class="font-weight-bolder text-center">Update ToDo</h4>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="UptList">
                                <div class="mb-3">
                                    <label for="category" class="fs-6" >Select ID</label>
                                    <argon-input v-model="input.id" type="text" name="id" size="lg" />
                                </div>
                                <div class="mb-3">
                                    <label for="name" class="fs-6" >Name</label>
                                    <argon-input v-model="input.name" type="text" name="name" size="lg" />
                                </div>
                                <div class="mb-3">
                                <label for="description" class="fs-6" >Description</label>
                                    <argon-input v-model="input.description" type="text" name="description" size="lg" />
                                </div>
                                <div class="text-center">
                                    <argon-button class="mt-4" variant="gradient" color="success" fullWidth size="lg"
                                        type="submit">
                                        Submit
                                    </argon-button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>