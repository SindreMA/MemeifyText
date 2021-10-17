<template>
  <q-page class="MainWindow" >
    <q-input v-model="text" stack-label="Text input" />
    <h5>{{ToCoolText(text)}}</h5>
    <img src="https://cdn.discordapp.com/attachments/293322254727512065/547001780483915786/unknown.png" alt="" srcset="">
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      text: ""
    }
  },
  methods: {
    ToCoolText(input) {
      var result = ""
      var split = input.split(" ")

      for (let i = 0; i < split.length; i++) {
        const word = split[i];

        var newWord = ""

        for (let o = 0; o < word.length; o++) {
          var letter = word[o];

          if (this.isOdd(o)) {
           letter = letter.toUpperCase()
          }
          newWord += letter
        }
        if (word.startsWith(':') && word.endsWith(':')) newWord = word
        result += newWord + " "


      }
      return result
    },
    isOdd(n) {
   return Math.abs(n % 2) == 1;
}
  },

}
</script>
<style>
.MainWindow {
  padding: 10%;
}
</style>

