/** Chunk was on web.js **/
/** chunk id: 225055, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => m,
  sc: () => p,
  xS: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
  Chunk748780 = require("./748780.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk612776 = require("./612776.js"),
  Chunk433080 = require("./433080.js");
let p = {
    duration: 800,
    easing: Chunk748780.Z.Easing.bezier(.4, 0, 0, 1)
  },
  _ = Chunk473749.createContext(null);

function m(e) {
  let {
    activeSlide: t,
    children: n,
    className: o,
    slideClassName: l
  } = e, m = (0, u.Z)(t), h = i.useMemo(() => {
    let e = {};
    return i.Children.forEach(n, t => {
      e[t.props.id] = t.props.children
    }), e
  }, [...n]), g = t === d.yD.WELCOME && (null == m || m === d.yD.WELCOME), E = (0, c.Yzy)(t, {
    from: g ? {
      transform: "translate3d(0, 0px, 0)",
      opacity: 1,
      backgroundScale: 1,
      backgroundY: 0
    } : {
      transform: "translate3d(0, 200px, 0)",
      opacity: false,
      backgroundScale: .5,
      backgroundY: 0
    },
    enter: {
      transform: "translate3d(0, 0px, 0)",
      opacity: 1,
      backgroundScale: 1,
      backgroundY: 0
    },
    leave: {
      transform: "translate3d(0, -400px, 0)",
      opacity: false,
      backgroundScale: 1,
      backgroundY: false
    },
    config: p
  });
  return (0, r.jsx)(_.Provider, {
    value: E,
    children: (0, r.jsx)("div", {
      className: o,
      children: E((e, t, n) => {
        let {
          key: i
        } = n;
        return (0, r.jsx)(s.animated.div, {
          className: a()(f.slide, l),
          style: e,
          children: h[t]
        }, i)
      })
    })
  })
}