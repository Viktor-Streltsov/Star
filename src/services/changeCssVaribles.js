/*
Формат CSS-переменной:
--theme-default-УникальноеИмя # дефолтная переменная
--theme-light-УникальноеИмя   # для "light"
--theme-dark-УникальноеИмя    # для "dark"
--theme-neitral-УникальноеИмя # для "neitral"
*/

export const changeCssVaribles = theme => {
    const root = document.querySelector(':root');

    // root.style.setProperty('--theme-default-header', `var(--them-${theme}-header)`);
    // root.style.setProperty('--theme-default-bgimage', `var(--them-${theme}-bgimage)`);

    const cssVaribles = ['header', 'bgimage'];
    cssVaribles.forEach(element => {
        root.style.setProperty(
            `--theme-default-${element}`,
            `var(--them-${theme}-${element})`
        );
    })

}