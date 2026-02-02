/** Chunk was on 65442 **/
/** chunk id: 146423, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk713517 = require("./713517.js"),
  Chunk607123 = require("./607123.jsx"),
  Chunk72939 = require("./72939.js");

function d(e) {
  let {
    sku: t,
    user: r,
    children: l,
    cardStyle: d,
    skuPreviewStyle: f,
    disableHoverOrFocus: h,
    onHoverOrFocusChange: m,
    onClick: g,
    options: I
  } = e, p = i.useRef(null), {
    isHoveringOrFocusing: S
  } = (0, u.A)(p), O = i.useRef(m);
  return i.useEffect(() => {
    O.current = m
  }, [m]), i.useEffect(() => {
    var e;
    null == (e = O.current) || e.call(O, S)
  }, [S]), (0, n.jsxs)(a.DUT, {
    innerRef: p,
    className: s()(c.N, d),
    onClick: g,
    children: [(0, n.jsx)(a.AC4, {
      children: (0, n.jsx)(a.H, {
        children: t.name
      })
    }), (0, n.jsx)("div", {
      className: s()(c.e, f),
      children: (0, n.jsx)(o.Ay, {
        sku: t,
        isFocused: !h && S,
        user: r,
        options: I
      })
    }), l]
  })
}