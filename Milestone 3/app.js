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
                      status: "sended"
                  },
                  {
                      date: "10/01/2020 15:50:00",
                      text: "Ricordati di dargli da mangiare",
                      status: "sended"
                  },
                  {
                      date: "10/01/2020 16:15:22",
                      text: "Tutto fatto!",
                      status: "received"
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
                      status: "sended"
                  },
                  {
                      date: "20/03/2020 16:30:55",
                      text: "Bene, grazie! Stasera ci vediamo?",
                      status: "received"
                  },
                  {
                      date: "20/03/2020 16:35:00",
                      text: "Mi piacerebbe ma devo andare a fare la spesa.",
                      status: "sended"
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
                        status: "received"
                    },
                    {
                        date: "28/03/2020 10:20:10",
                        text: "Sicuro di non aver sbagliato chat",
                        status: "sended"
                    },
                    {
                        date: "28/03/2020 16:15:22",
                        text: "Ah scusa!",
                        status: "received"
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
                        status: "sended"
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        text: "Si, ma preferirei andare al cinema",
                        status: "received"
                    },
                ]
            },
        ],
        invioMessaggio: "",
        timestamp: ""
    },
    created() {
        this.whatTime();
    },
    methods: {
        isVisible(index){
            this.contact.forEach(element => {
                if (element.visible) {
                    element.visible = false;
                }
            });
            this.contact[index].visible = true;
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
                        status: "sended"
                    });
                    setTimeout(function(){
                        this.whatTime()
                        element.messages.push({
                            date: this.timestamp,
                            text: "ok!",
                            status: "received",
                        });
                    }.bind(this),1000);
                };
                });
            this.invioMessaggio = "";
        },
    }

});