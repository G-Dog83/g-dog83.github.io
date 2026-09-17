document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
	dropdown.addEventListener("pointerenter", () => {
		dropdown.open = true;
	});

	dropdown.addEventListener("pointerleave", () => {
		if (!dropdown.matches(":focus-within")) {
			dropdown.open = false;
		}
	});

	dropdown.addEventListener("focusin", () => {
		dropdown.open = true;
	});

	dropdown.addEventListener("focusout", (event) => {
		if (
			!dropdown.contains(event.relatedTarget) &&
			!dropdown.matches(":hover")
		) {
			dropdown.open = false;
		}
	});
});
