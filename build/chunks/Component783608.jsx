/** Chunk was on web.js **/
/** chunk id: 783608, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk6646 = require("./6646.js"),
  l = function(e) {
    return e[e.VIEW_MORE = 0] = "VIEW_MORE", e[e.VIEW_LESS = 1] = "VIEW_LESS", e
  }(l || {});

function c(e) {
  let {
    title: t,
    buttonType: n,
    onClickViewButton: i
  } = e;
  return (0, r.jsxs)("div", {
    className: o.wx,
    children: [(0, r.jsx)(a.Text, {
      variant: "text-md/medium",
      color: "text-strong",
      children: t
    }), null != n && null != i && (0, r.jsx)(a.DUT, {
      className: o.Vc,
      onClick: i,
      "aria-label": s.intl.formatToPlainString(s.t["bj/2kV"], {
        title: t
      }),
      children: (0, r.jsx)(a.Text, {
        variant: "text-md/medium",
        color: "text-brand",
        children: 0 === n ? s.intl.format(s.t.gVw57p, {}) : s.intl.string(s.t.nPGLFQ)
      })
    })]
  })
}
c.buttonTypes = l, c.Loading = function() {
  let e = i.useMemo(() => ({
    width: "".concat(10 + 20 * Math.random(), "%")
  }), []);
  return (0, r.jsx)("div", {
    className: o.uH,
    style: e,
    children: (0, r.jsx)(a.Text, {
      className: o.R,
      variant: "text-md/medium",
      color: "text-strong",
      children: "_"
    })
  })
}