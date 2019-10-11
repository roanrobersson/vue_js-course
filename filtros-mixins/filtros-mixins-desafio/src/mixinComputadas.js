export default {
    computed: {
        strComputada1: function() {
            return this.str1.replace(/ /g, ', ');
        },
        strComputada2: function() {
            let array = this.str2.split(' ');
            array.forEach(function(value, index, array){
                array[index] = array[index].concat(' (' + value.length + ') ')
            })
            return array.join(' ');
        },
    },
}