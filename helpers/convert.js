function toRupiah(num){
  const str = num.toString().split('').reverse()
  const result = []

  for(let i = 0; i < str.length; i++){
      result.push(str[i])

      if( (i + 1) % 3 === 0 && i !== str.length-1){
          result.push('.')
      }
  }
  return `Rp. ${result.reverse().join('')}`
}

module.exports = toRupiah