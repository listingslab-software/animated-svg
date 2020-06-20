
# Animated SVG

Knowledge/experience in the following will help, but an open mind is enough

- JavaScript
- React.js
- Scalable Vector Graphics
- Sketch

## Use in existing project

We started off by creating a brand new React App using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html). The theory being that if the entire animation component can be copy and pasted into such an app, it will be easy to drop it into any existing React app

Just copy the entire **AnimatedSVG** folder to your project (it can go anywhere) and include it wherever you like in this kind of way

```javascript
  <React.Fragment>
    <AnimatedSVG options={{
    	display: 'responsive', // || fixed
    	width: '100%',
    }} />
  </React.Fragment>
```

## Options

All options are optional except the options prop itself. What the hell does 
that mean? It just means that if you don't pass the **<AnimatedSVG />** an 
options prop, then the component simply return null with a console log. No 
PropTypes, No typing because this is JavaScript and and that stuff is boring

### Style

[/src/AnimatedSVG/other/animated-svg.css](./src/AnimatedSVG/other/animated-svg.css)

Importing vanilla CSS into the component is the simplest way we can think of to 
add the style AnimatedSVG needs, not the best. 
You can implement these styles in whichever way suits you. 

And sometimes we have used inline jss kind of styles as a quick and 
dirty way of being able to apply styles conditionally when needed

```javascript
<div 
    className={ display === `fixed` ? `displayFixed` : `displayResponsive` }
    style={{ 
        width: display === `fixed` ? width : `100%`,
        height,
    }}>
```
