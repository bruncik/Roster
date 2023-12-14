export default function countDuration(start, end) {


    const startDate = new Date(`1970-01-01T${start}:00Z`);
    const endDate = new Date(`1970-01-01T${end}:00Z`);

    var duration = endDate - startDate;

    if (duration < 0) {
        duration += 24 * 60 * 60 * 1000;
    }

    return duration;
}