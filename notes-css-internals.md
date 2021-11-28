# How CSS works

After parsing CSS Object Model (CSSOM) is built.
DOM and CSSOM are rendered together (visual formatting model).

## style cascade



Resolve conflicts between style declarations by:



### importance

1. User !important declarations (like browser font size changed by user)

2. Author !important declarations

3. Author declarations

4. User declarations

5. Default browser declarations



### specificity

1. inline

2. ids

3. classes, pseudo-classes like :hover, attribute

4. elements, pseudo-elements



Most specific selector wins. Better to make styles more specific than use !important.

Do not rely on order. But add own stylesheets last after 3rd party styles.


### order

last declaration overrides previous

## Box Sizing

* without `box-sizing: border-box;` padding and border are added to the box.
* with `box-sizing: border-box;` padding and border are included in the box.

## Box types
* `display:block` block-box takes 100% of parent width, is stacked vertically
* `display:inline` inline-box occupies only content-space
  * no height/width
  * only horizontal padding and margins
* `display:inline-block` inline-box occupies only content-space
  * but padding/margin as usual

## Positioning schemes
* position: relative
* float: left/right
* position: absolute/fixed

## Layers / stacking context
* z-index: 1-99
* filter or other elements create stacking order

### BEM 
* block__element--modifier Class-Naming scheme
  * block is a standalone reusable component - NOT display:block box
  * element is not reusable - just an element inside a block
  * modifier is a variant of an element like btn--round

### 7-1 folders
* base/
* components
* layout
* pages
* themes
* abstracts
* vendors

import them all into one big SCSS
