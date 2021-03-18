<template>
    <v-dialog
        v-model="dialog"
        persistent
        >
        <v-card>
            <div class="cardContent">
            <card-title>Licence {{name}}</card-title>

            <v-card-text>

                <p>Hash: {{hash}}</p>
                <spacer/>
                <p>Salt: {{salt}}</p>
                
                    <v-data-table
                        dense
                        :headers="headers"
                        :items="records"
                        no-data-text="No data">
                    </v-data-table>
                
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="close"
                >
                    Close
                </v-btn>
            </v-card-actions>
            </div>
        </v-card>
    </v-dialog>
</template>
<script>
/*eslint-disable*/
import {mapState} from 'vuex';
export default {
    name:'DetailDialog',
    computed:{
        ...mapState({
            Dialog: state => state.dialog,
            Id: state => state.detailId
        }),
        dialog:{
            get(){
                return this.Dialog;
            },
            set(){
            }
        },
    },
    data: ()=>({
        name:'',
        hash:'',
        salt:'',
        headers:[
            {
                text:'Id',
                align:'',
                sortable: false,
                value:'id'
            },
            {
                text:'Name',
                align:'',
                sortable: false,
                value:'name'
            }
        ],
        records:[]
    }),
    watch:{
        dialog(value){
            if (value) {
                this.getRecords();
            }
        }
    },
    methods:{
        getRecords(){
            let self = this;

            self.$store.dispatch('licences/getDetail',{id:self.Id}).then(reponse=>{
                self.proccessRecords(reponse.data);
            })
        },
        proccessRecords(data){
            let self = this;

            self.name = data.name;
            self.hash = data.hash;
            self.salt = data.salt;
            self.records = [];
            data.products.forEach(element => {
                self.records.push(element);
            });
        },
        close(){
            let self = this;

            self.$store.commit('setDialog',false);
        }
    }

}
</script>