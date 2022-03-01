var ProductModule = (function(){

    // Product array
    let products = [
        {id: 1, brand: "purple iphone", price: 5.50, amount: 0, subTotal : 0},
        {id: 2, brand: "black iphone", price: 4.25, amount: 0, subTotal : 0},
        {id: 3, brand: "blue iphone", price: 10.00, amount: 0, subTotal : 0},
        {id: 4,brand: "pink iphone", price: 8.75, amount: 0, subTotal : 0}
    ];

    // Grabbing the elements which are we will show details on the screen
    const infoTotal = document.getElementById('total');

    // Adding the product price to the value on the screen
    var addProduct = function(id) {
        --id;
        products[id].amount += 1;
        products[id].subTotal =   products[id].amount *  products[id].price;
        updateChartData();
        updateTableData();
    };

    // Clear variables on the screen
    var clear = function(){
        infoTotal.setAttribute('value', 0);
        products.forEach((item) =>{
            item.amount = 0;
            item.subTotal = 0;
        });
        updateChartData();
        updateTableData();
    };

    var updateChartData = function(){
        $('#cartData li').remove();
        products.forEach((item) =>{
            if(item.amount !== 0)
            {
                $('#cartData').append("<li>"+ item.amount + ' ' +  item.brand +"</li>");
            }
        });
    }

    var updateTableData = function(){
        let total = 0;

        products.forEach((item) =>{

            let numberOfItem = $("#" + item.id).parent().next().next();
            let subTotalOfItem = $("#" + item.id).parent().next().next().next();

            numberOfItem.text(item.amount);
            subTotalOfItem.text(item.subTotal);

            total += item.subTotal;
        });

        infoTotal.setAttribute('value', total);

    }

    // Public functions
    return {
        addProduct: addProduct,
        clear: clear
    };

})();
