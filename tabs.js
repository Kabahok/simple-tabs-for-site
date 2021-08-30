const tabs = () => {
    function tabsContent(contentSelector, btnWrapSelector, btnSelector, activeClass, display='block') {
        let tabsContent = document.querySelectorAll(contentSelector),
            btnWrap = document.querySelector(btnWrapSelector),
            btns = document.querySelectorAll(btnSelector);
        function hideTabs(a) {
            for (let i = a; i < tabsContent.length; i++) {
                tabsContent[i].classList.remove('show');
                tabsContent[i].classList.add('hide');
                if(btns[i].classList.contains(activeClass)) {
                    btns[i].classList.remove(activeClass);
                }
            }
        }
        hideTabs(1);

        function showTab(b) {
            if(tabsContent[b].classList.contains('hide')) {
                tabsContent[b].classList.remove('hide');
                tabsContent[b].classList.add('show');
            }
        }

        btnWrap.addEventListener('click', function (event) {
            let target = event.target;

            if(target && target.classList.contains(btnSelector.replace(/\./, '')) ||
             target.parentNode.classList.contains(btnSelector.replace(/\./, ''))) {
                for (let i = 0; i < btns.length; i++) {
                    if(target == btns[i] || target.parentNode == btns[i]) {
                        hideTabs(0);
                        showTab(i);
                        btns[i].classList.add(activeClass);
                    }
                }
            }
        });

    }
    tabsContent('.glazing_content', '.glazing_slider', '.glazing_block');
    tabsContent('.dec_item', '.decoration_slider', '.dec_btn', 'after_click');
    tabsContent('.big_img > img', '.balcon_icons', '.balcon_icons_img', 'do_image_more');

};

export default tabs;