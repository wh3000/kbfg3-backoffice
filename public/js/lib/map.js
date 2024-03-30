let markers = [];
const activeClass = "active";
const pins = [
	{
		location: "North America",
		name: "미국",
		address: "미국미국미국",
		tel: "408-536-2800",
		fax: "408-537-6000",
		lat: 37.33078,
		long: -121.892357,
		link: 'https://www.google.co.kr/maps/place/%EB%AF%B8%EA%B5%AD/@37.2755586,-104.6573965,5z/data=!3m1!4b1!4m6!3m5!1s0x54eab584e432360b:0x1c3bb99243deb742!8m2!3d37.09024!4d-95.712891!16zL20vMDljN3cw',
	},
	{
		location: "Asia",
		name: "중국",
		address: "중국중국중국",
		tel: "+86 10-5865 7700",
		fax: "+86 10-5865 7701",
		lat: 39.937967,
		long: 116.417592,
		link: 'https://www.google.co.kr/maps/place/%EC%A4%91%EA%B5%AD/@34.4552172,86.0778173,4z/data=!4m15!1m8!3m7!1s0x31508e64e5c642c1:0x951daa7c349f366f!2z7KSR6rWt!3b1!8m2!3d35.86166!4d104.195397!16zL20vMGQwNXcz!3m5!1s0x31508e64e5c642c1:0x951daa7c349f366f!8m2!3d35.86166!4d104.195397!16zL20vMGQwNXcz',
	},
	{
		location: "Asia",
		name: "인도네시아",
		address: "인도네시아인도네시아인도네시아",
		tel: "+86 10-5865 7700",
		fax: "+86 10-5865 7701",
		lat: -4.285966641049133,
		long: 121.61468996646009,
		link: 'https://www.google.co.kr/maps/place/%EC%9D%B8%EB%8F%84%EB%84%A4%EC%8B%9C%EC%95%84/@-2.3932675,108.8493852,5z/data=!3m1!4b1!4m6!3m5!1s0x2c4c07d7496404b7:0xe37b4de71badf485!8m2!3d-0.789275!4d113.921327!16zL20vMDNyeW4',
	},
];

// 초기 화면 값 seoul
const center = {
	lat: 37.5642135,
	lng: 127.0016985,
};

function initMap() {
	const map = new google.maps.Map(document.getElementById("map"), {
		center,
		zoom: 3,
	});

	createMarkers(map);
	showLocations();
}

function createMarkers(map) {
	const infowindow = new google.maps.InfoWindow();
	const markerIcon = {
		url: "/images/map/pin.svg",
		scaledSize: new google.maps.Size(40, 40),
	};

	for (let i = 0; i < pins.length; i++) {
		const marker = new google.maps.Marker({
			position: {
				lat: pins[i].lat,
				lng: pins[i].long,
			},
			map,
			icon: markerIcon,
			animation: google.maps.Animation.DROP,
		});

		markers.push(marker);

		google.maps.event.addListener(marker, "click", function () {
			infowindow.setContent(createInfoWindowContent(pins[i]));
			map.setCenter(marker.getPosition());
			infowindow.open(map, marker);
			const targetLocation = document.querySelector(
				`[data-index="${i}"]`
			);

			if (document.querySelector(".location.active")) {
				document
					.querySelector(".location.active")
					.classList.remove(activeClass);
			}
			targetLocation.classList.add(activeClass);
			scroll({
				top: targetLocation.offsetTop,
				behavior: "smooth",
			});
		});
	}
}

function createInfoWindowContent(pin) {
	let phoneString = "";
	let faxString = "";
	let latLongString = "";
	let addressString = "";
	let lacationString = "";

	if (pin.tel) {
		phoneString = `
			<p class="d-flex align-items-center">
				<img class="me-2" width="24" height="24" src="/images/map/modal-tel.svg" alt="">
				${pin.tel}
			</p>
		`;
	}

	if (pin.fax) {
		faxString = `
			<p class="d-flex align-items-center">
				<img class="me-2" width="24" height="24" src="/images/map/modal-fax.svg" alt="">
				${pin.fax}
			</p>
		`;
	}

	if (pin.lat && pin.long) {
		latLongString = `
			<p class="d-flex align-items-center">
				<img class="me-2" width="24" height="24" src="/images/map/modal-lat-long.svg" alt="">
				${pin.lat}, ${pin.long}
			</p>
		`;
	}

	if (pin.address) {
		addressString = `
			<p class="d-flex">
				<img class="me-2" width="24" height="24" src="/images/map/modal-pin.svg" alt="">
				${pin.address}
			</p>
		`;
	}

	if (pin.link) {
		lacationString = `
			<p class="d-flex">
				<a href="${pin.link}" target="_blank">링크</a>
			</p>
		`;
	}

	const contentString = `
		<h3 class="fs-4 text">${pin.name}</h3>
		<hr>
		${phoneString}
		${faxString}
		${latLongString}
		${addressString}
		${lacationString}
	`;

	return contentString;
}

function showLocations() {
	const locations = document.querySelectorAll(".location");

	locations.forEach((location) => {
		location.addEventListener("click", function (e) {
			e.preventDefault();
			if (document.querySelector(".location.active")) {
				document
					.querySelector(".location.active")
					.classList.remove(activeClass);
			}
			location.classList.add(activeClass);
			scroll({
				top: document.getElementById("map").offsetTop,
				behavior: "smooth",
			});
			new google.maps.event.trigger(markers[this.dataset.index], "click");
		});
	});
}
