let arr2 = [1, 2, 3, 0, 4, 5, 6];

const countToExceed10 = arr2.reduce((acc, num) => {
	if (acc.sum + num > 10) {
		return { count: acc.count, sum: acc.sum + num };
	}
	return { count: acc.count + 1, sum: acc.sum + num };
}, { count: 0, sum: 0 });

console.log(`It's necessary to add so many elements that their total number is more than 10:`, countToExceed10.count);