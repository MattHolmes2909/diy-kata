const reachDestination = (distance, speed) => {
    const time = distance / speed;
    const round = (Math.round(time * 2) / 2).toFixed(1)
    return 'I should be there in ' + round  + ' hours.' 
};

module.exports = reachDestination;
