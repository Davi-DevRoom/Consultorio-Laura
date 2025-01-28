export default function initDropdownMenu(){
    const MENUBUTTON = document.querySelector('[data-menu="menu-button"]');
    const MENULIST =document.querySelector('[data-menu="list"]');
    const eventos = ['click'];

    function outsideClick(element, events, callback){
        const html = document.documentElement;
        const outside = 'data-outside';
    
        if(!element.hasAttribute(outside)){
            events.forEach(userEvent => {
                setTimeout(() =>{
                    html.addEventListener(userEvent, handleOutsideClick);
                })
            })
            element.setAttribute(outside, '');
        }
    
        function handleOutsideClick(event){
            if(!element.contains(event.target)){
                element.removeAttribute(outside);
                events.forEach(userEvent => {
                    html.removeEventListener(userEvent, handleOutsideClick);
                })
                callback();
            }
        }
        
    }

    function openMenu(event){
        MENULIST.classList.add('active');
        MENUBUTTON.classList.add('active');
        outsideClick(MENULIST, eventos, ()=>{
            MENUBUTTON.classList.remove('active');
            MENULIST.classList.remove('active');
        })
    }
    
    eventos.forEach((evento)=>{
        MENUBUTTON.addEventListener(evento, openMenu);
    });
    

}