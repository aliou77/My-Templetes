$(document).ready(function(){
    
    /**
     * class for tabs fonctionnality
     */
    class Tabs extends HTMLElement{

        // function qui sera appeler lorsque l'element sera connecter au DOM
        connectedCallback(){
            $(this).attr("role", "tab")
            const tabs = $(this).children('a')
            const hash = window.location.hash.replace('#', '')
            let currentTab = tabs[0]

            // NB: avec la boucle for l'index est en string et la recuperation des elements ne fonctinne pas
            // tres bien, on rencontre des errors
            // il faut utiliser foreach qui met l'index en entier
            tabs.each((i, tab) => { // (index, item)
                const id = tab.getAttribute("href").replace('#', '')
                const tabpanel = document.getElementById(id)

                if(hash == id){
                    currentTab = tab // sera = au tab contenu dans le hash
                }
                $(tab).attr("aria-selected", "false")
                $(tab).attr("tabindex", "-1")
                $(tab).attr("aria-controls", id)
                $(tab).attr("id", "tab-"+ id);
                $(tabpanel).attr("role", "tabpabel");
                $(tabpanel).attr("aria-labelledby", "tab-"+ id);
                $(tabpanel).attr("hidden","hidden");
                $(tabpanel).attr("tabindex", "0");

                // gestion de la navigation avec les touches arrow
                $(tab).keyup((e) => { 
                    let index = null
                    if(e.key === "ArrowRight"){
                        index = i == tabs.length -1 ? 0 : i + 1
                    }else if(e.key === "ArrowLeft"){
                        index = i == 0 ? tabs.length -1 : i - 1
                    }else if(e.key === "Home"){ // pour aller au debut
                        index = 0
                    }else if(e.key === "End"){ // pour aller a la fin
                        index = tabs.length -1
                    }
                    if(index !== null){
                        this.activate(tabs[index])
                        tabs[index].focus()
                    }
                    
                });
                // activation d'un element
                $(tab).click((e)=>{
                    e.preventDefault()
                    this.activate(tab)
                })
            });

            this.activate(currentTab, false)
        }

        /**
         * @param {HTMLElement} tab
         * @param {Boolean} changeHash
         */
        activate(tab, changeHash = true){
            const currentTab = document.querySelector('[aria-selected="true"]')
            // il desactive l'ongle actif avant le click
            if(currentTab !== null){
                const tabpanel = $('#'+ $(currentTab).attr('aria-controls'))
                // console.log(tabpanel)
                $(currentTab).attr("aria-selected", "false")
                $(currentTab).attr("tabindex", "-1")
                $(tabpanel).attr("hidden", "hidden");
            }

            // avant d'activer celui sur le quel on a cliker
            const id = tab.getAttribute("href").replace('#', '')
            const tabpanel = document.getElementById(id)
            $(tab).attr("aria-selected", "true");
            $(tab).attr("tabindex", "0");
            $(tabpanel).removeAttr("hidden");

            // gestion de l'url
            // window.location.hash = id // => cette methode effectue un scroll a chaque modificatio du hash
            // on utilisera 
            if(changeHash){
                // evite d'uploader le hash des le chargement de la page, ca se fera selement
                // lorsqu'on navigue sur un onglet
                window.history.replaceState({}, '', '#'+id)
            }
        }

        
    }
    // creation d'un element html personaliser
    customElements.define('nav-tabs', Tabs);

    // ---------------------------------------- //

    /**
     * class for projects fonctionnalties
     * 
     */

    class Wanna{

        /**
         * create a accordion fonctionnality
         * @param {array} accordions 
         */
        createAccordion(accordions){
            $.each(accordions, function (i, acc) { 
                $(acc).on("click", function(){
                    this.classList.toggle("active");
                    $(this).parent().next().fadeToggle()
                })
            });
        }

        /**
         * change color accordion onClick
         */
        changeAccordionColor(items){
            $.each(items, function(i, item){
                $(item).on("click", function(){
                    $(this).toggleClass("active")
                })
            })
        }

        /**
         * hide and show the chat slide menu
         */
        hideAndShowSlideMenu(button, slideMenu){
            $(button).on("click", function(){
                const navWidht = $("nav").width()
                // console.log(navWidht)
                $(slideMenu).toggleClass("active")

                if($(this).children("svg").hasClass("fa-arrow-left")){
                    $(this).children("svg").removeClass("fa-arrow-left").addClass("fa-arrow-right")
                    $("main .user-chat").css("position", "fixed")
                    $("main .user-chat").css("top", "0")
                    $("main .user-chat").css("right", "-"+ Math.ceil(navWidht))
                    $("main .user-chat").css("height",  "100vh")

                }else{
                    $(this).children("svg").removeClass("fa-arrow-right").addClass("fa-arrow-left")
                    $("main .user-chat").css("position", "")
                }
            })
        }

        /**
         * create a dropdown
         */
        createDropdown(btn, item){
            $(btn).on("click", (e)=>{
                $(item).toggleClass("active")
            })
        }
    }

    const w = new Wanna();
    w.createAccordion($(".parameter #accordion"))
    w.changeAccordionColor($(".parameter .button-accordion"))
    w.hideAndShowSlideMenu($("#tab .show-hide-arrow"), $("main .chat-slide-menu"))
    w.createDropdown($("#btn-dropdown"), $("#dropdown"))
});