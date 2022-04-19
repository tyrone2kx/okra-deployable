# Getting Started with Okra Widget

- Extract the Okra Widget folder in the root of your application.
- Import okra.js in any page you wish to use the widget.

### `<script src="okra.js"></script>`

- Create a new instance of Okra and initialize it by passing valid configuration options.

### `
    const options = {
	key: "1308hf301h83f1iweg0jhe",
	env: "production",
	token: "qwdnoufe3180u814001408jf",
	country: "NG",
	payment: true,
	charge: {
		amount: 100000,
		currency: "ngn"
        }
    };
    const client = new Okra.create();
    client.open(options)`

