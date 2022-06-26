# react-navbar-menu

---

Powered by BigYusufff. Check some of my awesome projects out https://yusuflateef.vercel.app/

[![NPM version][npm-image]][npm-url] [![dumi](https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square)](https://github.com/umijs/dumi) [![build status][github-actions-image]][github-actions-url] [![Test coverage][coveralls-image]][coveralls-url] [![Dependencies][david-image]][david-url] [![DevDependencies][david-dev-image]][david-dev-url] [![npm download][download-image]][download-url] [![bundle size][bundlephobia-image]][bundlephobia-url]

[npm-image]: http://img.shields.io/npm/v/react-navbar-menu.svg?style=flat-square
[npm-url]: http://npmjs.org/package/react-navbar-menu
[github-actions-image]: https://github.com/BigYusuf/menu-lib/workflows/CI/badge.svg
[github-actions-url]: https://github.com/BigYusuf/menu-lib/actions
[circleci-image]: https://img.shields.io/circleci/BigYusuf/menu-lib/master?style=flat-square
[circleci-url]: https://circleci.com/gh/react-component/menu
[coveralls-image]: https://img.shields.io/coveralls/react-component/menu.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/menu?branch=master
[david-url]: https://david-dm.org/react-component/menu
[david-image]: https://david-dm.org/BigYusuf/menu-lib/status.svg?style=flat-square
[david-dev-url]: https://david-dm.org/react-component/menu?type=dev
[david-dev-image]: https://david-dm.org/BigYusuf/menu-lib/dev-status.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/react-navbar-menu.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-navbar-menu
[bundlephobia-url]: https://bundlephobia.com/result?p=react-navbar-menu
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/react-navbar-menu

## Install

[![react-navbar-menu](https://nodei.co/npm/react-navbar-menu.png)](https://npmjs.org/package/react-navbar-menu)

## Usage

### With linear-gradient

```js
import React from 'react'
import { Navbar } from 'react-navbar-menu'

const Header = () => {
    return (
        <div>
            <Navbar IconColor={'yellow'} MenuNumber={4} Center={true} Position={'bottom'}
                url1={'#home'}icon1={"bx bx-home-alt"} 
                url2={'#aboutme'}icon2={"bx bx-book-alt"} 
                url3={'/contact'}icon3={"bx bx-user"} 
                url4={'#skills'}icon4={"bx bx-pin"} 
                backgroundColor={"#151c28"} degree={`to bottom`} 
                gradcolor1={'#a595e9'} gradcolor2={'#a595e933'}/>
   
        </div>
    )
}

export default Header
```

### Without linear-gradient (with ActiveColor)

```js
import React from 'react'
import { Navbar } from 'react-navbar-menu'

const Header = () => {
    return (
        <div>
            <Navbar IconColor={'yellow'} MenuNumber={4} Position={'bottom'}
                url1={'#home'}icon1={"bx bx-home-alt"} Center={true} 
                url2={'#aboutme'}icon2={"bx bx-book-alt"} 
                url3={'/contact'}icon3={"bx bx-user"} 
                url4={'#skills'}icon4={"bx bx-pin"} 
                backgroundColor={"#151c28"} activeColor={'#a595e9'} />
   
        </div>
    )
}

export default Header
```

## Compatibility

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| --- | --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

### General Props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>Position</td>
            <td>String</td>
            <th>"Top"</th>
            <td>Specify the position of the component. "Top" or "top" or "Bottom"</td>
        </tr>
        <tr>
            <td>Center</td>
            <td>Boolean</td>
            <th>false</th>
            <td>Choose to center the compenent true or false</td>
        </tr>
        <tr>
            <td>borderRadius</td>
            <td>Number</td>
            <th>64</th>
            <td>{Optional} Specify the border-radius</td>
        </tr>
        <tr>
            <td>Width</td>
            <td>Number</td>
            <th></th>
            <td>{Optional} Specify the width of component</td>
        </tr>
        <tr>
            <td>backgroundColor</td>
            <td>String</td>
            <th>""</th>
            <td>Specify the background color for the menu/ navbar menu e.g. "blue","#a595e9"</td>
        </tr>
    </tbody>
</table>


### Menu Items Props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>MenuNumber</td>
          <td>Number</td>
          <td></td>
          <td>The MenuNumber denotes 'how many menu-items you want. Although Maximum is 5 and minimum is 1'</td>
        </tr>
        <tr>
          <td>Font</td>
          <td>Number</td>
          <td></td>
          <td>{optional}Specify the font-size. As the icons increase and decrease, Height will adjust automatically but Width will need to be adjusted maually</td>
        </tr>
        <tr>
            <td>IconColor</td>
            <td>String</td>
            <th>""</th>
            <td>Specify the color for the menu items/ navbar menu items e.g. "blue","#a595e9"</td>
        </tr>
        <tr>
            <td>activeColor</td>
            <td>String</td>
            <th>""</th>
            <td>Specify the background color for the active menu items/ navbar menu items e.g. "blue","#a595e9"</td>
        </tr>
        <tr>
            <td>activeIconColor</td>
            <td>String</td>
            <th>""</th>
            <td>Specify the color for the menu item/ navbar menu item e.g. "blue","#a595e9"</td>
        </tr>
        <tr>
            <td>degree</td>
            <td>String</td>
            <th>""</th>
            <td>{Optional} This is part of linear-gradient(degree, gradcolor1,gradcolor2), this will inturn overwrite activeColor and become the active background color. Specify the direction of background color for the active menu item/ navbar menu items e.g. "to left", "to right", "to bottom left" etc.</td>
        </tr>
        <tr>
            <td>gradcolor1</td>
            <td>String</td>
            <th>""</th>
            <td>{Optional} This is part of linear-gradient(degree, gradcolor1,gradcolor2), this will inturn overwrite activeColor and become the active background color. Specify the direction of background color for the active menu item/ navbar menu items e.g. "blue" etc.</td>
        </tr>
        <tr>
            <td>gradcolor2</td>
            <td>String</td>
            <th>""</th>
            <td>{Optional} This is part of linear-gradient(degree, gradcolor1,gradcolor2), this will inturn overwrite activeColor and become the active background color. Specify the direction of background color for the active menu item/ navbar menu items e.g. "green" etc.</td>
        </tr>
        <tr>
            <td>icon1, icon2... icon5</td>
            <td>String</td>
            <th>""</th>
            <td>Specify the name of the icon for each specific icon number(icon1, icon2) for the menu item/ navbar menu items. e.g. "bx bx-home", "fa fa-house" etc.</td>
        </tr>
        <tr>
            <td>url1, url2... url5</td>
            <td>String</td>
            <th>""</th>
            <td>Specify the name of the url for each specific url number(url1, url2) for the menu item/ navbar menu items. e.g. "/", "#contact" etc.</td>
        </tr>
    </tbody>
</table>


## Installation

```npm
  npm install react-navbar-menu
```

## More Info

https://yusuflateefblog.vercel.app/post/react-navbar-menu

## Code Installation

```npm
  npm install
```

## License

react-navbar-menu is released under the MIT license.