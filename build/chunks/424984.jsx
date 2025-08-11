/** Chunk was on 67544 **/
/** chunk id: 424984, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => u,
  Z: () => l
});
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk144931 = require("./144931.jsx"),
  Chunk543856 = require("./543856.js");

function l(e) {
  let {
    className: t,
    children: n
  } = e;
  return <div className={o()(c.toolbar, t)}>{n}</div>
}

function u(e) {
  let {
    iconSrc: t,
    title: n,
    onClick: s
  } = e;
  return <a.ua7 text={n}>{e => {
      var o, a;
      return (0, r.jsx)(i.Z, (o = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, e), a = a = {
        onClick: s,
        className: c.toolbarButton,
        children: (0, r.jsx)("img", {
          className: c.icon,
          src: t,
          alt: n
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e))
      }), o))
    }}</a.ua7>
}