<template>
  <v-container>
    <v-card>
      <v-form>
        <v-container>
          <v-text-field
            label="이메일"
            type="email"
            required
          />
          <v-text-field
            label="비밀번호"
            type="password"
            required
          />
          <v-btn color="green" type="submit">로그인</v-btn>
          <v-btn>회원가입</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
  export default {

  }
</script>

<style>
</style>