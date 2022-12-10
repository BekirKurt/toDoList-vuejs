const app = Vue.createApp({
  data() {
    return {
      girilenDeger: "",
      toDos: [],
      isThereWarn: false,
      warning: "Boş giremezseniz",
    };
  },
  methods: {
    ekle() {
      if (this.girilenDeger != "") {
        this.toDos.push({
          title: this.girilenDeger,
          done: false,
        });
        this.isThereWarn = false;
        this.girilenDeger = "";
      } else {
        this.isThereWarn = true;
      }
      const toDos = this.toDos;
      localStorage.setItem("todo", JSON.stringify(toDos));
      const initToDos = localStorage.getItem("todo");
      const items = JSON.parse(initToDos ? initToDos : "[]");
      this.toDos = items;
    },
    sil(index) {
      this.toDos.splice(index, 1);
      const toDos = this.toDos;
      localStorage.setItem("todo", JSON.stringify(toDos));
    },
    ciz(index) {
      this.toDos[index].done = !this.toDos[index].done;
      const toDos = this.toDos;
      localStorage.setItem("todo", JSON.stringify(toDos));
    },
    secilenleriSil() {
      let i = 0;
      var yeniDizi = [];
      while (i < this.toDos.length) {
        if (!this.toDos[i].done) {
          yeniDizi.push(this.toDos[i]);
        } else {
          // console.log(this.toDos[i].title);
        }
        i++;
      }
      this.toDos = yeniDizi;
      const toDos = this.toDos;
      localStorage.setItem("todo", JSON.stringify(toDos));
    },
  },
  mounted() {
    const initToDos = localStorage.getItem("todo");
    const items = JSON.parse(initToDos ? initToDos : "[]");
    this.toDos = items;
  },
  watch: {
    toDos: {
      handler() {
        const toDos = this.toDos;
        localStorage.setItem("todo", JSON.stringify(toDos));
      },
    },
  },
});

app.mount("#app");
