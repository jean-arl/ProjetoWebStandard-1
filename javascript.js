$(function(){

    $(".vitrine-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true,
    });

    $(".vitrine-slider").on('afterChange', function(){
        $("#camiseta-name").text($(".slick-center").data("name"));
        var camisetaPrice = parseFloat($(".slick-center").data("price")).toLocaleStringt("pt-BR", {style:"currency", currency:"BRL", minimumFractionDigits: 2});
        $("#camiseta-price").text(camisetaPrice);

    });
})