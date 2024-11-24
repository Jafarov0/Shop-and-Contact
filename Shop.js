$(document).ready(function () {
    const $rangeInput = $("#price-range");
    const $priceValue = $("#price-value");
  
    $rangeInput.on("input", function () {
      $priceValue.text(`Price: $0 — $${$(this).val()}`)
    })

    $('.bi-cart-plus').click(function(e){
      e.preventDefault()
      $('.basket-mom').css({
        display:'block'
      })
      $('.bi-x-circle').css({
        display:'block'
      })
    })

    $('.bi-x-circle').click(function(){
      $('.basket-mom').hide()
    })

    $('.img11').click(function(){
      $('.bImg01').css({
        display:'block'
      })
      localStorage.setItem("bImg01Visible", "true");
    })
    $('.bir').click(function(){
      $('.bImg01').css({
        display:'none'
      })
      localStorage.setItem("bImg01Visible", "false");
    })

    const bImg01Visible = localStorage.getItem("bImg01Visible");
    if (bImg01Visible === "true") {
        $('.bImg01').css({ display: 'block' });
    } else {
        $('.bImg01').css({ display: 'none' });
    }

    $('.img12').click(function(){
      $('.bImg02').css({
        display:'block'
      })
      localStorage.setItem("bImg01Visible2", "true");
    })
    $('.iki').click(function(){
      $('.bImg02').css({
        display:'none'
      })
      localStorage.setItem("bImg01Visible2", "false");
    })

    const bImg01Visible2 = localStorage.getItem("bImg01Visible2");
    if (bImg01Visible2 === "true") {
        $('.bImg02').css({ display: 'block' });
    } else {
        $('.bImg02').css({ display: 'none' });
    }


    $('.img13').click(function(){
      $('.bImg03').css({
        display:'block'
      })
      localStorage.setItem("bImg01Visible3", "true");
    })
    $('.uc').click(function(){
      $('.bImg03').css({
        display:'none'
      })
      localStorage.setItem("bImg01Visible3", "false");
    })

    const bImg01Visible3 = localStorage.getItem("bImg01Visible3");
    if (bImg01Visible3 === "true") {
        $('.bImg03').css({ display: 'block' });
    } else {
        $('.bImg03').css({ display: 'none' });
    }


    $('.img14').click(function(){
      $('.bImg04').css({
        display:'block'
      })
      localStorage.setItem("bImg01Visible4", "true");
    })
    $('.dord').click(function(){
      $('.bImg04').css({
        display:'none'
      })
      localStorage.setItem("bImg01Visible4", "false");
    })

    const bImg01Visible4 = localStorage.getItem("bImg01Visible4");
    if (bImg01Visible4 === "true") {
        $('.bImg04').css({ display: 'block' });
    } else {
        $('.bImg04').css({ display: 'none' });
    }


    $('.img15').click(function(){
      $('.bImg05').css({
        display:'block'
      })
      localStorage.setItem("bImg01Visible5", "true");
    })
    $('.bes').click(function(){
      $('.bImg05').css({
        display:'none'
      })
      localStorage.setItem("bImg01Visible5", "false");
    })

    const bImg01Visible5 = localStorage.getItem("bImg01Visible5");
    if (bImg01Visible5 === "true") {
        $('.bImg05').css({ display: 'block' });
    } else {
        $('.bImg05').css({ display: 'none' });
    }


    $('.img16').click(function(){
      $('.bImg06').css({
        display:'block'
      })
      localStorage.setItem("bImg01Visible6", "true");
    })
    $('.alti').click(function(){
      $('.bImg06').css({
        display:'none'
      })
      localStorage.setItem("bImg01Visible6", "false");
    })

    const bImg01Visible6 = localStorage.getItem("bImg01Visible6");
    if (bImg01Visible6 === "true") {
        $('.bImg06').css({ display: 'block' });
    } else {
        $('.bImg06').css({ display: 'none' });
    }


    $('.img17').click(function(){
      $('.bImg07').css({
        display:'block'
      })
      localStorage.setItem("bImg01Visible7", "true");
    })
    $('.yeddi').click(function(){
      $('.bImg07').css({
        display:'none'
      })
      localStorage.setItem("bImg01Visible7", "false");
    })

    const bImg01Visible7 = localStorage.getItem("bImg01Visible7");
    if (bImg01Visible7 === "true") {
        $('.bImg07').css({ display: 'block' });
    } else {
        $('.bImg07').css({ display: 'none' });
    }

  
    $('.img18').click(function(){
      $('.bImg08').css({
        display:'block'
      })
      localStorage.setItem("bImg01Visible8", "true");
    })
    $('.sekkiz').click(function(){
      $('.bImg08').css({
        display:'none'
      })
      localStorage.setItem("bImg01Visible8", "false");
    })

    const bImg01Visible8 = localStorage.getItem("bImg01Visible8");
    if (bImg01Visible8 === "true") {
        $('.bImg08').css({ display: 'block' });
    } else {
        $('.bImg08').css({ display: 'none' });
    }

    $('.bi-list').click(function(){
       $(this).hide()
       $('.bi-x-square').css({
        display:'block'
       })
       $('.menuB').css({
        display:'block',
        display: 'flex',
        justifyContent: 'space-around', 
        alignItems: 'center'
       })
    })
    $('.bi-x-square').click(function(){
      $(this).hide()
      $('.bi-list').show()
      $('.menuB').hide()
    })


  })