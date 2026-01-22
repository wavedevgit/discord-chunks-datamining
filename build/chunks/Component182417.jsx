/** Chunk was on web.js **/
/** chunk id: 182417, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Aq: () => _,
  Ay: () => h,
  pt: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk615300 = require("./615300.js"),
  Chunk397927 = require("./397927.js"),
  Chunk475743 = require("./475743.js"),
  Chunk532294 = require("./532294.js"),
  Chunk415813 = require("./415813.js");
let p = {
    duration: 800,
    easing: Chunk615300.A.Easing.bezier(.4, 0, 0, 1)
  },
  _ = Chunk64700.createContext(null);

function h(e) {
  let {
    activeSlide: t,
    children: n,
    className: a,
    slideClassName: l
  } = e, h = (0, u.A)(t), m = i.useMemo(() => {
    let e = {};
    return i.Children.forEach(n, t => {
      e[t.props.id] = t.props.children
    }), e
  }, [...n]), g = t === d.P7.WELCOME && (null == h || h === d.P7.WELCOME), E = (0, c.pnh)(t, {
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
      className: a,
      children: E((e, t, n) => {
        let {
          key: i
        } = n;
        return (0, r.jsx)(o.animated.div, {
          className: s()(f.M, l),
          style: e,
          children: m[t]
        }, i)
      })
    })
  })
}