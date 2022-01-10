document.getElementById('box-1').addEventListener('mouseover',()=>{
    document.getElementById('bar-1').style.transform='rotate(45deg)';
    document.getElementById('bar-1').style.left='7%';
    document.getElementById('bar-4').style.transform='rotate(-45deg)';
    document.getElementById('bar-4').style.left='40%';
    document.getElementById('bar-2').style.width='0%';
    document.getElementById('bar-5').style.width='0%';
    document.getElementById('bar-3').style.transform='rotate(-45deg)';
    document.getElementById('bar-3').style.left='7%';
    document.getElementById('bar-6').style.transform='rotate(45deg)';
    document.getElementById('bar-6').style.left='40%';

    document.getElementById('bar-1').style.transition='all 0.5s ease';
    document.getElementById('bar-2').style.transition='all 0.5s ease';
    document.getElementById('bar-3').style.transition='all 0.5s ease';
    document.getElementById('bar-4').style.transition='all 0.5s ease';
    document.getElementById('bar-5').style.transition='all 0.5s ease';
    document.getElementById('bar-6').style.transition='all 0.5s ease';

})

document.getElementById('box-1').addEventListener('mouseout',()=>{
    document.getElementById('bar-1').style.transform='rotate(0deg)';
    document.getElementById('bar-1').style.left='25%';
    document.getElementById('bar-4').style.transform='rotate(0deg)';
    document.getElementById('bar-4').style.left='25%';
    document.getElementById('bar-2').style.width='50%';
    document.getElementById('bar-5').style.width='50%';
    document.getElementById('bar-3').style.transform='rotate(0deg)';
    document.getElementById('bar-3').style.left='25%';
    document.getElementById('bar-6').style.transform='rotate(0deg)';
    document.getElementById('bar-6').style.left='25%';

    document.getElementById('bar-1').style.transition='all 0.5s ease';
    document.getElementById('bar-2').style.transition='all 0.5s ease';
    document.getElementById('bar-3').style.transition='all 0.5s ease';
    document.getElementById('bar-4').style.transition='all 0.5s ease';
    document.getElementById('bar-5').style.transition='all 0.5s ease';
    document.getElementById('bar-6').style.transition='all 0.5s ease';

})


document.getElementById('box-2').addEventListener('mouseover',()=>{
    document.querySelector('.bars2:nth-child(1)').style.transform='rotate(50deg)';
    document.querySelector('.bars2:nth-child(2)').style.transform='rotate(-40deg)';
    document.querySelector('.bars2:nth-child(3)').style.transform='rotate(50deg)';

    document.querySelector('.bars2:nth-child(1)').style.transition='all 0.5s ease';
    document.querySelector('.bars2:nth-child(2)').style.transition='all 0.5s ease';
    document.querySelector('.bars2:nth-child(3)').style.transition='all 0.5s ease';
})

document.getElementById('box-2').addEventListener('mouseout',()=>{
    document.querySelector('.bars2:nth-child(1)').style.transform='rotate(0deg)';
    document.querySelector('.bars2:nth-child(2)').style.transform='rotate(0deg)';
    document.querySelector('.bars2:nth-child(3)').style.transform='rotate(0deg)';

    document.querySelector('.bars2:nth-child(1)').style.transition='all 0.5s ease';
    document.querySelector('.bars2:nth-child(2)').style.transition='all 0.5s ease';
    document.querySelector('.bars2:nth-child(3)').style.transition='all 0.5s ease';
})