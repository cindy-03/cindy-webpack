class AlertService {

    constructor() {

        this.error = document.querySelector('#error');
    }

    tampilkanErroorPenjumlahan = (input, angka) => {

        const hasil = input.reduce((pesan, nilai, index) => {

         if (cekInputValid(angka[index])) {

            return pesan + '';

         } else {

            return pesan = '${nlai} itu bukan angka';
         }

        }, 'Silahkan masukkan angka yang benar: ');
            
    }
}