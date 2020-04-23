class Convert{
  static toRupiah(money){
      return (money).toLocaleString('id-ID', {
          style: 'currency',
          currency: 'IDR',
      });
  }
}

module.exports = Convert;