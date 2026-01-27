/** Chunk was on 20941 **/
/** chunk id: 182417, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Aq: () => p,
  Ay: () => h,
  pt: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
  Chunk615300 = require("./615300.js"),
  Chunk397927 = require("./397927.js"),
  Chunk475743 = require("./475743.js"),
  Chunk532294 = require("./532294.js"),
  Chunk415813 = require("./415813.js");
let f = {
    duration: 800,
    easing: Chunk615300.A.Easing.bezier(.4, 0, 0, 1)
  },
  p = Chunk64700.createContext(null);

function h(e) {
  let {
    activeSlide: t,
    children: n,
    className: a,
    slideClassName: o
  } = e, h = (0, u.A)(t), b = l.useMemo(() => {
    let e = {};
    return l.Children.forEach(n, t => {
      e[t.props.id] = t.props.children
    }), e
  }, [...n]), g = t === d.P7.WELCOME && (null == h || h === d.P7.WELCOME), x = (0, c.pnh)(t, {
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
    config: f
  });
  return (0, r.jsx)(p.Provider, {
    value: x,
    children: (0, r.jsx)("div", {
      className: a,
      children: x((e, t, n) => {
        let {
          key: l
        } = n;
        return (0, r.jsx)(s.animated.div, {
          className: i()(m.M, o),
          style: e,
          children: b[t]
        }, l)
      })
    })
  })
}