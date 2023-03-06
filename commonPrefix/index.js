const words = ["flower", "flower", "flower"];



var longestCommonPrefix = function(strs) {
    for(i = 0; i < strs.length; i++){
         const currentPrefix = strs[i].substring(0, 2);
         if(i < strs.length - 1){
            const nextPrefix = strs[i + 1].substring(0, 2);
            if(currentPrefix == nextPrefix){
                return currentPrefix
            }

         }
         if(i == strs.length - 1){
            return ''
         }
    }
};

longestCommonPrefix(words)

// Metodo con forEach (necesito mas control sobre la iteracion)
// let prefix = []
// arrStr.forEach((palabra) => {
//     prefix.push(palabra[0] + palabra[1])
//     console.log(prefix)
// })
