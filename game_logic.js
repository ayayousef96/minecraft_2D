
function change_visibility(el, hide) {
    el.style.visibility = hide ? 'hidden' : 'visible';
}


function maker(material, rowStart , rowEnd, columnStart, columnEnd,boxes_obj) {
    for (let row = rowStart; row <= rowEnd; row++) {
        for (let column = columnStart; column <= columnEnd; column++) {
            boxes_obj[`${row}.${column}`].classList.add(material);
        }
    }
}



function world_creator(game_grid,index,boxes_obj) { 
    
    for (let row =1; row <= 25; row++) {
        for (let column = 1; column <= 25; column++) {
            let box = document.createElement('div');
            box.classList.add('box');
            game_grid.appendChild(box);
            box.style.gridColumn = column;
            box.style.gridRow = row;
            
            boxes_obj[`${row}.${column}`] = box;
            index++;
        }
    }
}

function updateInventory() {
    
}

function collect_item(event , boxes_obj) {
   
        
       
}

function collect(event) {
   
}



function put_item(event) {
    
}

//short cut to remove listeners
function removeOtherEventListeners(game_grid) {
    game_grid.removeEventListener('click', collectMaterial)
    game_grid.removeEventListener('click', putMaterial)
}

function background_Reset() {
    
}



function main(){
    const instruction_box = document.querySelector('.instructions-box');
    
    const instruction_btn = document.querySelector('.instruction-btn');
    const start_btn = document.querySelector('.start-btn');
    const open_screen = document.querySelector('.open-screen');
    const day_screen = document.querySelector('.day-screen');
    const game_grid = document.querySelector('.game-grid');
    let index = 0;
    const boxes_obj = {};
    /*tools */
    const tool_box =document.querySelector('.tool-box--right-side')
    const axe = document.querySelector('.axe');
    const picaxe = document.querySelector('.picaxe');
    const shovel = document.querySelector('.shovel');
    const materialObj = {
        'axe': ['leaves', 'wood'],
        'picaxe': ['rock'],
        'shovel': ['soil', 'grass']
    }
    const grassInventory = document.querySelector('.inventory .grass');
    const rockInventory = document.querySelector('.inventory .rock');
    const soilInventory = document.querySelector('.inventory .soil');
    const leavesInventory = document.querySelector('.inventory .leaves');
    const woodInventory = document.querySelector('.inventory .wood');

    instruction_btn.addEventListener('click', () => {
        change_visibility(instruction_box, false);
    });

    start_btn.addEventListener('click',()=>{
        change_visibility(open_screen,true);
        change_visibility(day_screen,false);
        change_visibility(instruction_box, true);
        change_visibility(tool_box,false);
    })


    world_creator(game_grid,index,boxes_obj);
    maker('soil', 20, 25, 1, 25,boxes_obj);
    maker('grass',19,19,1,25,boxes_obj);
    maker('wood',15,18,15,15,boxes_obj);
    /*making tree 1*/
    maker('wood',15,18,15,15,boxes_obj);
    maker('leaves',14,14,12,18,boxes_obj);
    maker('leaves',13,13,13,17,boxes_obj);
    maker('leaves',12,12,14,16,boxes_obj);
    maker('leaves',11,11,15,15,boxes_obj);

    /*tree 2 */
    maker('leaves',18,18,22,25,boxes_obj);
    maker('leaves',17,17,23,24,boxes_obj);


    /*making clouds */
    maker('cloud',6,6,6,8,boxes_obj);
    maker('cloud',5,5,7,9,boxes_obj);
    maker('cloud',4,4,20,22,boxes_obj);
    maker('cloud',3,3,19,21,boxes_obj);

    maker('stone',16,18,6,6,boxes_obj);
    maker('stone',17,18,8,8,boxes_obj);
    maker('stone',18,18,4,4,boxes_obj);

    const inventory = {};
    let material;
    let tool;
    let currentMaterial;
    let amount;

    
       
}
main();

 