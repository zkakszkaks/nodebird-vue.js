<template>
  <v-app>
    <nav>
      <v-toolbar dark color="green">
        <v-toolbar-title>
          <nuxt-link to="/">NodeBird</nuxt-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-text-field label="검색" hide-details prepend-icon="mdi-magnify" :style="{ display: 'flex', alignItems: 'center'}"/>
          <v-btn text nuxt to ="/profile">
            <div>프로필</div>
          </v-btn>
          <v-btn text nuxt to="/signup">
            <div>회원가입</div>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </nav>
    <v-row no-gutters>
      <v-col cols="12" md="4"><!-- xs 대신 cols가 xs(모바일) 역할을 합니다 xs 쓰지 마세요 -->
        <login-form />
      </v-col>
      <v-col cols="12" md="8">
        <nuxt />
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
  import LoginForm from '~/components/LoginForm';

  export default {
    components: {
      LoginForm,
    }
  }
</script>

<style>
  a {
    display: inline-block;
    text-decoration: none;
    color: inherit
  };
</style>