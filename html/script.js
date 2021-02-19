window.addEventListener('message', function (event) {
	if (event.data.action == "setValue"){
		if (event.data.key == "job"){
			setJobIcon(event.data.icon)
			}
		setValue(event.data.key, event.data.value)
		}
	switch (event.data.action) {
        case 'updateStatusHud':
            $("body").css("display", event.data.show ? "block" : "none");
            $("#boxSetHealth").css("width", event.data.health + "%");
            $("#boxSetArmour").css("width", event.data.armour + "%");

            widthHeightSplit(event.data.hunger, $("#boxSetHunger"));
            widthHeightSplit(event.data.thirst, $("#boxSetThirst"));
            widthHeightSplit(event.data.oxygen, $("#boxSetOxygen"));
    }
});

function setJobIcon(value){
	$('#job img').attr('src', 'img/'+value+'.png')
}

function setValue(key, value){
	$('#'+key+' span').html(value)

}

function widthHeightSplit(value, ele) {
    let height = 80;
    let eleHeight = (value / 100) * height;
    let leftOverHeight = height - eleHeight;

    ele.css("height", eleHeight + "px");
    ele.css("top", leftOverHeight + "px");
};
