<template>
    <div class="cardContent">
        <detail-dialog/>
        <v-data-table
            dense
            :headers="headers"
            :items="records"
            @click:row="showDetail"
            no-data-text="No scheduled events yet">
        </v-data-table>
    </div>
</template>
<script>
import DetailDialog from '../components/DetailDialog.vue';
export default {
  components: { DetailDialog },
    name:'LicencesInSystem',
    data: ()=>({
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
            },
            {
                text:'Product count',
                align:'',
                sortable: false,
                value:'productCount'
            }
        ],
        records:[]
    }),
    mounted(){
        let self = this;

        self.$store.commit('setDialog',false);
        self.getRecords();
    },
    methods:{
        getRecords(){
            let self = this;

            self.$store.dispatch('licences/getAll').then(reponse=>{
                self.proccessRecords(reponse.data);
            })
        },
        proccessRecords(data){
            let self = this;

            data.forEach(element => {
                self.records.push(element);
            });
        },
        showDetail(obj){
            let self = this;

            self.$store.commit('setDetailId',obj.id);
            self.$store.commit('setDialog',true);
        }
    }
}
</script>