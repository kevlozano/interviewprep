// link to question: https://app.codesignal.com/interview-practice/task/pMvymcahZ8dY4g75q/description

function firstDuplicate(a) {
    let i = 0;
    let j = 0;
    for (i; i < a.length; i++) {
        index = Math.abs(a[i]);
        if (a[index - 1] < 0) 
            return index;
        a[index - 1] *= -1;
    }
    return -1;
}
