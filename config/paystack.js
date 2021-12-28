// live key: sk_live_78c61fbc6cc4c0ec0166eb74a973e76f0d8b9430
// test key: sk_test_8606fb60b8be8acdc849deb8837e1c43caeb8511
const paystack = (request) => {
    const MySecretKey = 'Bearer sk_test_8606fb60b8be8acdc849deb8837e1c43caeb8511';
    //replace the secret key with that from your paystack account
    const initializePayment = (form, mycallback) => {
        const options = {
            url : 'https://api.paystack.co/transaction/initialize',
            headers : {
                authorization: MySecretKey,
                'content-type': 'application/json',
                'cache-control': 'no-cache'    
            },
            form
        }
        const callback = (error, response, body) => {
            return mycallback(error, body)
        }
        request.post(options, callback)
    }

    const verifyPayment = (ref, mycallback) => {
        
        const options = {
            url : 'https://api.paystack.co/transaction/verify/'+encodeURIComponent(ref),
            headers : {
                authorization: MySecretKey,
                'content-type': 'application/json',
                'cache-control': 'no-cache'    
            }
        }
        const callback = (error, response, body) => {
            
            return mycallback(error, body)

        }
        request(options, callback)
    }
   
    return {initializePayment, verifyPayment};
}

module.exports = paystack;