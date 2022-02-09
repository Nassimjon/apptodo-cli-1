const app = {
  data() {
    return {
      items: [
        {
          id: 1,
          body: "hi nassim",
          likes: 21,
          avatar: `https://avatars.dicebear.com/api/male/1.svg`,
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          id: 2,
          body: "hello world",
          likes: 31,
          avatar: `https://avatars.dicebear.com/api/male/2.svg`,
          date: new Date(Date.now()).toLocaleString(),
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      this.items.push({
        id: Math.round(Math.random() * 30),
        avatar: `https://avatars.dicebear.com/api/male/${Date.now()}.svg`,
        body: this.item,
        date: new Date(Date.now()).toLocaleString(),
      });
      
      //reset item
      this.item = "";
    }
  },
};

Vue.createApp(app).mount('#app');