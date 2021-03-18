<template>
    <v-form class="cardContent">
        <v-text-field
            v-model="licenceName"
            dense
            outlined>
        </v-text-field>
        <v-file-input
            label="Xml file"
            outlined
            dense
            v-model="fileInput"
            accept=".xml">
        </v-file-input>
        <v-btn
            @click="submit">
            Submit
        </v-btn>
    </v-form>
</template>
<script>
export default {
    name:'NewLicence',
    data: ()=>({
        licenceName: 'Name',
        xml:null,
        fileInput:null
    }),
    methods:{
        submit(){
            let self = this;

            self.readXML();
            self.$store.dispatch('licences/saveEntry', {name:self.licenceName,xml:self.xml}).then(response=>{
                console.log(response);
            })

        },

        readXML(){
            let self = this;

            var reader = new FileReader();
            reader.readAsText(self.fileInput);
            reader.onload = ()=>{
                self.xml = reader.result;
            }
        }
    }
}
</script>