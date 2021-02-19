// will need to add to this later, allows others to query via npm library
// though that's not too important right now
const swipeData = require('.'); // common js
// or

// query and log resolved results
swipeData.masterchef.pools({ block: 11223344 }).then(pools => console.log(pools));

swipeData.timelock.allTxs({ minTimestamp: 1605239738, maxTimestamp: 1608239738 }).then(txs => console.log(txs));
swipeData.bar.user({ user_address: '0x6684977bbed67e101bb80fc07fccfba655c0a64f' }).then(user => console.log(user));

swipeData.exchange.observePairs().subscribe({ next: pairs => console.log(pairs), error: err => console.log(err) });

swipeData.timeseries(
	{ blocks: [11407623, 11507623, 11607623], target: swipeData.exchange.pair },
	{ pair_address: '0x795065dCc9f64b5614C407a6EFDC400DA6221FB0' },
);
