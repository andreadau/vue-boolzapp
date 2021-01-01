let vm = new Vue({
    el: "#app",
    data: {
      contact: [
          {
              name : "Michele",
              avatar: "_5",
              visible: true,
              messages: [
                  {
                      date: "10/01/2020 15:30:55",
                      text: "Hai portato a spasso il cane?",
                      status: "sended",
                      dropdown: false
                  },
                  {
                      date: "10/01/2020 15:50:00",
                      text: "Ricordati di dargli da mangiare",
                      status: "sended",
                      dropdown: false
                  },
                  {
                      date: "10/01/2020 16:15:22",
                      text: "Tutto fatto!",
                      status: "received",
                      dropdown: false
                  },
                ]
            },
            {
                name : "Fabio",
                avatar: "_2",
                visible: false,
                messages: [
                  {
                      date: "20/03/2020 16:30:00",
                      text: "Ciao come stai?",
                      status: "sended",
                      dropdown: false
                  },
                  {
                      date: "20/03/2020 16:30:55",
                      text: "Bene, grazie! Stasera ci vediamo?",
                      status: "received",
                      dropdown: false
                  },
                  {
                      date: "20/03/2020 16:35:00",
                      text: "Mi piacerebbe ma devo andare a fare la spesa.",
                      status: "sended",
                      dropdown: false
                  },
                ]
            },
            {
                name : "Samuele",
                avatar: "_3",
                visible: false,
                messages: [
                    {
                        date: "28/03/2020 10:10:40",
                        text: "La Marianna va in campagna",
                        status: "received",
                        dropdown: false

                    },
                    {
                        date: "28/03/2020 10:20:10",
                        text: "Sicuro di non aver sbagliato chat",
                        status: "sended",
                        dropdown: false

                    },
                    {
                        date: "28/03/2020 16:15:22",
                        text: "Ah scusa!",
                        status: "received",
                        dropdown: false

                    },
                ],
            },
            {
                name : "Luisa",
                avatar: "_6",
                visible: false,
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Lo sai che ha aperto una nuova pizzeria?",
                        status: "sended",
                        dropdown: false
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        text: "Si, ma preferirei andare al cinema",
                        status: "received",
                        dropdown: false
                    },
                ]
            },
        ],
        invioMessaggio: "",
        timestamp: "",
        search: "",
    },
    created() {
        this.whatTime();
    },
    methods: {
        isVisible(index){
            this.contact.forEach(element => {
                if (element.visible === true) {
                    element.visible = false;
                }
            });
            this.filteredProfile[index].visible = true;
        },
        whatTime(){
            const time = new Date().toLocaleString();
            this.timestamp = time;
        },
        addMessage(){
            this.whatTime()
            this.contact.forEach(element=> {
                if (element.visible === true) {
                    element.messages.push({
                        date: this.timestamp,
                        text: this.invioMessaggio,
                        status: "sended",
                        dropdown: false
                    });
                    setTimeout(function(){
                        this.whatTime()
                        element.messages.push({
                            date: this.timestamp,
                            text: "ok!",
                            status: "received",
                            dropdown: false
                        });
                    }.bind(this),1000);
                };
                });
            this.invioMessaggio = "";
        },
        showDropdown(index,i){
            if (this.contact[index].messages[i].dropdown === true) {
                this.contact[index].messages[i].dropdown = false;
              } else {
                this.contact[index].messages[i].dropdown = true;
              }
        },
        deleteMessage(index,i){
            this.contact[index].messages.splice(i,1);
        }
    },
    computed: {
        filteredProfile(){
            return this.contact.filter((contatti) =>{
                return contatti.name.toLowerCase().match(this.search.toLowerCase());
            });
        }
    }

});