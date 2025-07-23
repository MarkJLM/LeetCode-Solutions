/* You are given an integer eventTime denoting the duration of an event, where the event occurs from time t = 0 to time t = eventTime.
You are also given two integer arrays startTime and endTime, each of length n. These represent the start and end time of n non-overlapping meetings, where the ith meeting occurs during the time [startTime[i], endTime[i]].
You can reschedule at most k meetings by moving their start time while maintaining the same duration, to maximize the longest continuous period of free time during the event.
The relative order of all the meetings should stay the same and they should remain non-overlapping.
Return the maximum amount of free time possible after rearranging the meetings.
Note that the meetings can not be rescheduled to a time outside the event. */
/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function(eventTime, k, startTime, endTime) {
    var free = 0;
    var breaks = [startTime[0]];
    var output = 0;
    for (var i = 0; i < startTime.length-1; i ++) {
        breaks.push(startTime[i+1] - endTime[i]);
    }
    breaks.push(eventTime - endTime[startTime.length-1]);
    for (var i = 0; i < k+1; i ++) {
        free += breaks[i];
    }
    for (var i = 0; i < breaks.length-k-1; i ++) {
        if (free > output) {
            output = free;
        }
        free = free + breaks[i+k+1] - breaks[i];
    }
    if (free > output) {
        output = free;
    }
    return output;
};
