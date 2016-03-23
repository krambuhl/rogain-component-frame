# rogain-component-frame

Alias and create inline variables.

```html
<Frame friend={@attrs.name} intro="My friend's name is">
    <div>{intro} {friend}</div>
</Frame>
```

```html
<Friend name="Buckle" />
```

```html
<div>My friend's name is Buckle</div>
```

## Install 

With [npm](https://www.npmjs.com) do:

```
npm install rogain-component-frame
```

## License

MIT