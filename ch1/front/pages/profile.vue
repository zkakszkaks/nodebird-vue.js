<template>
  <div>
    <v-container>
      <v-card style="margin-bottom: 20px;">
        <v-container>
          <v-subheader>내 프로필</v-subheader>
          <v-form>
            <v-text-field>
              label="닉네임"
              required
            </v-text-field>
            <v-btn color="blue">수정</v-btn>
          </v-form>
        </v-container>

      </v-card>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>팔로윙</v-subheader>
          <follow-list />
        </v-container>
      </v-card>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>팔로워</v-subheader>
          <follow-list />
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  import FollowList from '~/components/FollowList';
  export default {
    components: {
      FollowList,
    },
    //layout: 'admin', // admin.vue 레이아웃을 사용 하겠다.
    data() {
      return {
        name: 'Nuxt.js',
      }
    },
    head() {
      return {
        title: '프로필'
      }
    },
  }
</script>

<style>
</style>