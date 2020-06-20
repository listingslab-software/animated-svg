
# Animated SVG

![Animated SVG Logo](https://animated-svg.web.app/logo192.png)

> Solid framework for creating animated vector graphics to use in any JavaScript App

Animation on the web. Oh dear. What a nest of vipers that has always been. 
From the ridiculous **Skip Intro** button in the late 90's to the current 
micro animations we see in Mobile Apps in 2020.

As the concept that users wanted the internet to be like TV was disproved, 
the use of animation in web applications became a bit 
[bogan](https://en.wikipedia.org/wiki/Bogan)

None of the techniques exemplified here are new. In fact they go back 20 years. 
There is no under the hood magic or anything. Just a solid platform for creating 
really cool animated vector graphics which can be used in any JavaScript app.

## Before you start

Knowledge/experience in the following will help, but an open mind is enough

- JavaScript
- React
- Scalable Vector Graphics
- Sketch

## React Component 

This implemention is in React. We started off by creating a brand new React App using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html). The theory being that if the entire animation component can be copy and pasted into such an app, it will be easy to drop it into any existing React app

Just copy the entire **AnimatedSVG** folder to your project (it can go anywhere) and include it wherever you like in this kind of way

```javascript
  <React.Fragment>
    <AnimatedSVG options={{
        display: 'responsive', // || fixed
        width: '100%',
    }} />
  </React.Fragment>
```

## Options prop

Options are passed into **<AnimatedSVG />** via a prop called options.
Options are all optional but the options prop itself is not. 
What TF does that mean? It just means that if you don't pass the 
**<AnimatedSVG />** an options prop, then the component simply return null with a console log. 
No PropTypes, No typing because this is JavaScript and and that stuff is boring

__example__

```javascript
options={{
    display: 'fixed', // responsive || fixed
    width: 800,
    height: 450,
}}
```

| option  | default      | values                    |
|---------|--------------|------------------------------------|
| display | 'responsive' | fixed \|\| responsive              |
| width   | null         | If fixed, width should be a number |
| height  | 450          | must be a number                   | 


### CCS & Style

The golden rule is to use as little CSS as possible and to make those styles 
as easy to find and change as possible.

Importing vanilla CSS into the component is the simplest way we can think of to 
add the style AnimatedSVG needs, not the best. You can implement these styles 
in whichever way suits 

__example__

[/src/AnimatedSVG/other/animated-svg.css](./src/AnimatedSVG/other/animated-svg.css)

Sometimes we use an inline jss kind of pattern as a quick and 
dirty way of being able to apply styles conditionally when needed

```javascript
<div 
    className={ display === `fixed` ? `displayFixed` : `displayResponsive` }
    style={{ 
        width: display === `fixed` ? width : `100%`,
        height,
    }}>
```

