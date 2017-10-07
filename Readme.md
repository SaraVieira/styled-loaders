# Styled Loaders

<!-- [![npm](https://img.shields.io/npm/dt/express.svg)](https://www.npmjs.com/package/styled-loaders) -->
[![Build Status](https://travis-ci.org/SaraVieira/styled-loaders.svg?branch=master)](https://travis-ci.org/SaraVieira/styled-loaders)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm version](https://badge.fury.io/js/styled-loaders.svg)](https://badge.fury.io/js/styled-loaders)

## [Demo](https://styled-loaders.now.sh/)

Loaders Built with Preact and Styled Components ready for your next project because no one deserves to have to writes loadings all the time.

Credits and inspiration also belong heavily to the awesome work at  [SpinkKit](http://tobiasahlin.com/spinkit/)

As I work on more projects over time more and more loaders will be added here.

## Usage

```js
import { h } from 'preact'
import { Cube } from 'styled-loaders'

const Page = ({ loading }) =>
    <main>
        { loading ?
            <Cube/>
            : 'Your Content'
        }
    </main>

```
### With Props

```js
import { h } from 'preact'
import { Block } from 'styled-loaders'

const Page = ({ loading }) =>
    <main>
        { loading ?
            <Block color="red" size="60px" duration="5s" />
            : 'Your Content'
        }
    </main>

```

### Loaders

* Block
![Block](https://media.giphy.com/media/l378dJlRt7fvGHyfK/giphy.gif)
    * Props
        * color	- Background of the spinner default is #333
        * duration - Animation duration default is 1.2s
        * size - Size of the spinner default is 40px

* Circular
![Circular](https://media.giphy.com/media/l378y26cIAwgAVt4s/giphy.gif)
    * Props
        * color	- Background of the spinner default is #333
        * size - Size of the spinner default is 40px

* Cube
![Cube](https://media.giphy.com/media/3ov9jExQcWP6KTX1FS/giphy.gif)
    * Props
        * color	- Background of the spinner default is #333
        * size - Size of the spinner default is 40px
        * cubeSize - Size of the each cube default is 15
        * duration - Animation duration default is 1.2s

* CubeGrid
![CubeGrid](https://media.giphy.com/media/3ov9k9cASC7gCxpuLu/giphy.gif)
    * Props
        * color	- Background of the spinner default is #333
        * size - Size of the spinner default is 40px

* DotScale
![DotScale](https://media.giphy.com/media/l378c6525UOkzozVS/giphy.gif)
    * Props
        * color	- Background of the spinner default is #333
        * duration - Animation duration default is 1.2s
        * size - Size of the spinner default is 40px
        * dotSize - Size of the dots default is 18px

* Pulsate
![Pulsate](https://media.giphy.com/media/l378ar9YphdtfvkYg/giphy.gif)
    * Props
        * color	- Background of the spinner default is #333
        * duration - Animation duration default is 1.2s
        * size - Size of the spinner default is 40px

* RotateScale
![RotateScale](https://media.giphy.com/media/l378kTgu2VkGC8kyk/giphy.gif)
    * Props
        * color	- Background of the spinner default is #333
        * duration - Animation duration default is 1.2s
        * size - Size of the spinner default is 40px

* Scale
![Scale](https://media.giphy.com/media/l378mCuj3oh3HwMjm/giphy.gif)
    * Props
        * color	- Background of the spinner default is #333
        * duration - Animation duration default is 1.2s
        * size - Size of the spinner default is 40px

* Stretch
![Stretch](https://media.giphy.com/media/3ov9jHpaSIMfW0p19m/giphy.gif)
    * Props
        * color	- Background of the spinner default is #333
        * duration - Animation duration default is 1.2s
        * size - Size of the spinner default is 40px
        * rectWidth - Width of each rectangle default is 6px


## License

MIT (2017 - Sara Vieira)
