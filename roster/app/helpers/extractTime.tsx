export default function extractTime(str) {

    if (str === '.') {
        return ['00', '00', '00', '00']
    }

    //let start = str.split(' ')[0];
    //let end = str.split(' ')[2];
    let [start, end] = str.split('-');
    let before, after = '';
    let beforeEnd, afterEnd = '';

    if (str.includes('F') || str.includes('f')) {
        end = '11';
    }

    if (start.indexOf(':') !== -1) {        // if (start.includes('F')) ?? vs start.indexOf
        [before, after] = start.split(':');
        // Do something with `before` and`after`
    }
    else {
        before = start;
        after = '00';
    }

    if (end.indexOf(':') !== -1) {        // if (start.includes('F')) ?? vs start.indexOf
        [beforeEnd, afterEnd] = end.split(':');
        // Do something with `before` and`after`
    }
    else {
        beforeEnd = end;
        afterEnd = '00';
    }
    //start = start + ':00';
    //end = end + ':00';

    console.log(start, end, '----', before, after, '--', beforeEnd, afterEnd);
    return [before.padStart(2, '0'), after.padStart(2, '0'), beforeEnd.padStart(2, '0'), afterEnd.padStart(2, '0')];
}