/** Chunk was on 60118 **/
/** chunk id: 146423, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk713517 = require("./713517.js"),
  Chunk607123 = require("./607123.jsx"),
  Chunk72939 = require("./72939.js");

function d(e) {
  let {
    sku: t,
    user: n,
    children: i,
    cardStyle: d,
    skuPreviewStyle: f,
    disableHoverOrFocus: p,
    onHoverOrFocusChange: g,
    onClick: m
  } = e, b = l.useRef(null), {
    isHoveringOrFocusing: y
  } = (0, s.A)(b), O = l.useRef(g);
  return l.useEffect(() => {
    O.current = g
  }, [g]), l.useEffect(() => {
    var e;
    null == (e = O.current) || e.call(O, y)
  }, [y]), (0, r.jsxs)(o.DUT, {
    innerRef: b,
    className: a()(u.N, d),
    onClick: m,
    children: [(0, r.jsx)(o.AC4, {
      children: (0, r.jsx)(o.H, {
        children: t.name
      })
    }), (0, r.jsx)("div", {
      className: a()(u.e, f),
      children: (0, r.jsx)(c.Ay, {
        sku: t,
        isFocused: !p && y,
        user: n
      })
    }), i]
  })
}