# Assignment 3

## Technical problems

I had none technical problems during installation.<br/>
I installed mongodb following the tutorial for linux installation.

## Verify Integrity of MongoDB Packages

![VerifyIntegrity](https://github.com/andreasgarvik/dat250-assignment-experiments/blob/master/images/verifyintegrity.png)

## Experiment 1

![CrudMongodb](https://github.com/andreasgarvik/dat250-assignment-experiments/blob/master/images/crudmongodb.png)

![BulkMongodb](https://github.com/andreasgarvik/dat250-assignment-experiments/blob/master/images/bulkmongodb.png)

## Experiment 2

MapReduce from the tutorial:

![AggregationExample](https://github.com/andreasgarvik/dat250-assignment-experiments/blob/master/images/aggregationexample.png)

My own MapReduce, finding how many oranges each customer bought:

```javascript
var mapOranges = function () {
	var countOranges = 0
	for (var i = 0; i < this.items.length; i++) {
		if (this.items[i].sku === 'oranges') {
			countOranges += this.items[i].qty
		}
	}
	emit(this.cust_id, countOranges)
}

var reduceOranges = function (keyCustId, valuesOranges) {
	return Array.sum(valuesOranges)
}

db.orders.mapReduce(mapOranges, reduceOranges, { out: 'count_oranges' })
db.count_oranges.find()
```

And its result:

![AggregationExample](https://github.com/andreasgarvik/dat250-assignment-experiments/blob/master/images/aggregationexample.png)
