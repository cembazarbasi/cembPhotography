function initPayPalButton() {
    paypal.Buttons({
      style: {
        shape: 'rect',
        color: 'silver',
        layout: 'vertical',
        label: 'paypal',
        
      },    
  
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{"amount":{"item_name":"Yosemite Valley 03", "print_size":"20``x 30``", "currency_code":"USD","value":165.00, }}]
        });
      },
  
      onApprove: function(data, actions) {
        return actions.order.capture().then(function(orderData) {
          
          // Full available details
          console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
  
          // Show a success message within this page, for example:
          const element = document.getElementById('paypal-button-container');
          element.innerHTML = '';
          element.innerHTML = '<h3>Thank you for your payment!</h3>';
  
          // Or go to another URL:  actions.redirect('thank_you.html');
          
        });
      },
  
      onError: function(err) {
        console.log(err);
      }
    }).render('#paypal-button-container');
  }
  initPayPalButton();