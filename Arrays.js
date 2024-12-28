const nemo = ['nemo'];

const characters = ['Marlin', 'Dory', 'Gill', 'Bloat', 'Peach', 'Gurgle', 'Deb', 'Bubbles', 'Nigel', 'Crush', 'Squirt', 'Bruce', 'Anchor', 'Chum', 'Nemo'];

const large = new Array(10000).fill('nemo');

function findNemo(arrayname,array){
    let t0 = performance.now();
    for (let i=0;i<array.length;i++){
        if(array[i] === 'nemo'){
            // console.log('Found Nemo');
        }
    }
    let t1 = performance.now();
    console.log('Call to find Nemo using array ' + arrayname + 'took ' + (t1-t0) + ' milliseconds');
}
findNemo('nemo',nemo);
findNemo('characters',characters);
findNemo('large',large);