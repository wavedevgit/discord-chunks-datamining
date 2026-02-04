/** Chunk was on web.js **/
/** chunk id: 146423, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk713517 = require("./713517.js"),
  Chunk607123 = require("./607123.jsx"),
  Chunk72939 = require("./72939.js");

function d(e) {
  let {
    sku: t,
    user: n,
    children: a,
    cardStyle: d,
    skuPreviewStyle: f,
    disableHoverOrFocus: p,
    onHoverOrFocusChange: _,
    onClick: h,
    options: m
  } = e, g = i.useRef(null), {
    isHoveringOrFocusing: E
  } = (0, l.A)(g), y = i.useRef(_);
  return i.useEffect(() => {
    y.current = _
  }, [_]), i.useEffect(() => {
    var e;
    null == (e = y.current) || e.call(y, E)
  }, [E]), (0, r.jsxs)(s.DUT, {
    innerRef: g,
    className: o()(u.N, d),
    onClick: h,
    children: [(0, r.jsx)(s.AC4, {
      children: (0, r.jsx)(s.H, {
        children: t.name
      })
    }), (0, r.jsx)("div", {
      className: o()(u.e, f),
      children: (0, r.jsx)(c.Ay, {
        sku: t,
        isFocused: !p && E,
        user: n,
        options: m
      })
    }), a]
  })
}