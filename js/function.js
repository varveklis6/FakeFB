"use strict";

function renderFeed( list ) {
    if ( Array.isArray(list) === false ) {
        return console.error('feeda turi sudaryt sarasas (array) postu objektu (objects)');
        
    }

    for ( let i=0; i < list.length; i++ ) {
        renderPost( list[i] );
        
    }

    return;
}
function renderPost( data ) {
    let HTML = `<div class= "post">
                   ${renderPostHeader(data)}
                   ${renderPostContent(data.content)}
                   ${renderPostfooter()}
                    </div>`;

    document.getElementById('feed').innerHTML+=HTML;
    return;
    
}

function renderPostHeader( data) {
    return `<header> 
                <a href="#" class="user-img"> 
                <img src="./img/users/${data.author.img}" alt="user photo">
                </a>
                <div class="texts">
                     <div class="author">
                        <a href="#"> ${data.author.name} ${data.author.surname} </a>
                      </div>   
                      <span class="time"> ${data.time} </span>  
                </div>
                <i class="fa fa-ellipsis-h"></i>
            </header>`;
}
function renderPostContent() {
    return '<div lass="content"> POST CONTENT</div>';
}
function renderPostfooter() {
    return '<footer> POST FOOTER</footer>';
}