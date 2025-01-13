function description(id) {

    $('html, body').animate({
        'scrollTop': $("#feature").position().top
    });

    if (id == "Cockroach") {
        $("#DescCockroch").show();
        $("#DescBedBug").hide();
        $("#DescAntiDengue").hide();
        $("#DescTermite").hide();
        $("#DescWoodBorer").hide();
        $("#DescBird").hide();
        $("#DescRat").hide();
        $("#DescCovid").hide();
    }
    else if (id == "BedBug") {
        $("#DescCockroch").hide();
        $("#DescBedBug").show();
        $("#DescAntiDengue").hide();
        $("#DescTermite").hide();
        $("#DescWoodBorer").hide();
        $("#DescBird").hide();
        $("#DescRat").hide();
        $("#DescCovid").hide();
    }
    else if (id == "AntiDengue") {
        $("#DescCockroch").hide();
        $("#DescBedBug").hide();
        $("#DescAntiDengue").show();
        $("#DescTermite").hide();
        $("#DescWoodBorer").hide();
        $("#DescBird").hide();
        $("#DescRat").hide();
        $("#DescCovid").hide();
    }
    else if (id == "Termite") {
        $("#DescCockroch").hide();
        $("#DescBedBug").hide();
        $("#DescAntiDengue").hide();
        $("#DescTermite").show();
        $("#DescWoodBorer").hide();
        $("#DescBird").hide();
        $("#DescCovid").hide();
    }
    else if (id == "WoodBorer") {
        $("#DescCockroch").hide();
        $("#DescBedBug").hide();
        $("#DescAntiDengue").hide();
        $("#DescTermite").hide();
        $("#DescWoodBorer").show();
        $("#DescBird").hide();
        $("#DescRat").hide();
        $("#DescCovid").hide();
    }
    else if (id == "BirdNet") {
        $("#DescCockroch").hide();
        $("#DescBedBug").hide();
        $("#DescAntiDengue").hide();
        $("#DescTermite").hide();
        $("#DescWoodBorer").hide();
        $("#DescBird").show();
        $("#DescRat").hide();
        $("#DescCovid").hide();
    }
    else if (id == "Rat") {
        $("#DescCockroch").hide();
        $("#DescBedBug").hide();
        $("#DescAntiDengue").hide();
        $("#DescTermite").hide();
        $("#DescWoodBorer").hide();
        $("#DescBird").hide();
        $("#DescRat").show();
        $("#DescCovid").hide();
    }
    else if (id == "covid") {
        $("#DescCockroch").hide();
        $("#DescBedBug").hide();
        $("#DescAntiDengue").hide();
        $("#DescTermite").hide();
        $("#DescWoodBorer").hide();
        $("#DescBird").hide();
        $("#DescRat").hide();
        $("#DescCovid").show();
    }

}