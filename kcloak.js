	<script>
		let x = klingonCloak("info","listservenyc.com");

		function klingonCloak(a,b) {
			return a + "@" + b;
		}

		document.getElementById("email-text").innerHTML = x;
	</script>