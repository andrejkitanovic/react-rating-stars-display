# React Stars Display
Simple to use **React Stars** package which can display fractioned stars

## Example
Example for 3.6 Stars with default fill
![alt Stars Example](https://i.ibb.co/Xzk4V2R/Screenshot-2020-10-21-at-22-40-06.png)

## Installation
Install the package using yarn or npm:

```bash
npm i react-stars-display
```
OR
```bash
yarn add react-stars-display
```

##  Usage
```javascript
<Stars
stars={2.4}
size={15} //optional
spacing={2} //optional
fill='#ea9c46' //optional
/>
```

## Properties
prop | default | type | description 
---------- | -------- | ------- | ----------
stars | required | number | Number of active stars
size | 15px | number (px) | Size of stars
spacing | 1px | number (px) | Spacing between the stars
fill | '#ea9c46' | string (color) | Color of filled stars