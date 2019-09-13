//link to question https://app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ/solutions?solutionId=bHjCR8s7uNPM58sPJ

function shapeArea(n) {
    if (n === 1)
        return 1
    else
        return (n*2) + (n-2)*2 + shapeArea(n-1)
}

