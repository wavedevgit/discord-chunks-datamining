/** Chunk was on 30243 **/
/** chunk id: 985184, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Gt: () => b,
  ZP: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk95398 = require("./95398.jsx"),
  Chunk936141 = require("./936141.js"),
  Chunk197653 = require("./197653.jsx"),
  Chunk821618 = require("./821618.js");
let d = {
    isInContainer: true
  },
  p = Chunk647438.createContext({
    isInContainer: false
  });

function f(e) {
  let {
    children: t
  } = e;
  return (0, n.jsx)(p.Provider, {
    value: d,
    children: t
  })
}

function b() {
  let {
    isInContainer: e
  } = Chunk647438.useContext(p);
  return module
}

function m(e) {
  let {
    components: t,
    accentColor: r,
    spoiler: i,
    renderComponents: d
  } = e, [p, b] = l.useState(i), m = e => (0, n.jsx)(s.am.AutoMeasuredNestedContainer, {
    children: l => (0, n.jsx)("div", {
      ref: l,
      className: o()(u.container, {
        [u.isHidden]: e,
        [u.withAccentColor]: null != r
      }),
      style: {
        "--__accent-color": r
      },
      children: (0, n.jsx)(f, {
        children: d(t)
      })
    })
  });
  return null == t || 0 === t.length ? null : i ? (0, n.jsx)(a.ZP, {
    type: a.ZP.Types.ATTACHMENT,
    reason: c.wk.SPOILER,
    obscured: p,
    onToggleObscurity: () => b(e => !e),
    children: e => m(e)
  }) : m(false)
}