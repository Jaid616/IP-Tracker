const btn = document.querySelector(".circlebtn");
const ipadd = document.getElementById("ipaddress");
const address = document.getElementById("address");
const timezone = document.getElementById("timezone");
const isp = document.getElementById("isp");
const map = document.getElementById("map");
const error = document.getElementById("error")

const showdata = () => {
  const textvalue = document.getElementById("hh").value;

  fetch(`https://ipapi.co/${textvalue}/json/`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
         error.innerHTML = " ";
      if (data.error == true) {
        ipadd.innerHTML = `Can't Fetch Data From Server`;
        address.innerHTML = `Can't Fetch Data From Server`;
        isp.innerHTML = `Can't Fetch Data From Server`;
        timezone.innerHTML = `Can't Fetch Data From Server`;
        map.innerHTML = ` `;
      } else {
        ipadd.innerHTML = `${data.ip.split(":").join(": ")}`;
        address.innerHTML = `${data.city} ${data.country_name} ${data.postal}`;
        isp.innerHTML = data.org;
        timezone.innerHTML = `UTC :  ${data.timezone}`;
        map.innerHTML = ` <iframe src="//maps.google.com/maps?q=${data.latitude},${data.longitude}&output=embed" width="100%" height="450"  ></iframe>`;
      }
    })

    .catch((err) => {
         error.innerHTML = ` ${err}`;
    });
};

btn.addEventListener("click", showdata);

showdata();