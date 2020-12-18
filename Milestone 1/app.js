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
                      date: "10/01/2020 15:30:55",
                      text: "'Ricordati di dargli da mangiare'",
                      status: "sended"
                  },
                  {
                      date: "10/01/2020 15:30:55",
                      text: "Hai portato a spasso il cane?",
                      status: "received"
                  },
                ]
            },
            {
                name : "Fabio",
                avatar: "_2",
                visible: true,
                messages: [
                  {
                      date: "10/01/2020 15:30:55",
                      text: "Ciao come stai?",
                      status: "sended"
                  },
                  {
                      date: "10/01/2020 15:30:55",
                      text: "Bene, grazie! Stasera ci vediamo?",
                      status: "received"
                  },
                  {
                      date: "10/01/2020 15:30:55",
                      text: "Mi piacerebbe ma devo andare a fare la spesa.?",
                      status: "sended"
                  },
                ]
            },
            {
                name : "Samuele",
                avatar: "_3",
                visible: true,
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "La Marianna va in campagna",
                        status: "received"
                    },
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Sicuro di non aver sbagliato chat",
                        status: "sended"
                    },
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Ah scusa!",
                        status: "received"
                    },
                ],
            },
            {
                name : "Luisa",
                avatar: "_6",
                visible: true,
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Lo sai che ha aperto una nuova pizzeria?",
                        status: "sended"
                    },
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Si, ma preferirei andare al cinema",
                        status: "received"
                    },
                ]
            },
        ]
    },

});