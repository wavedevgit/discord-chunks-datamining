/** Chunk was on web.js **/
/** chunk id: 41558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk258253 = require("./258253.js"),
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
    className: s.header,
    children: [(0, r.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "text-strong",
      children: t
    }), null != n && null != i && (0, r.jsx)(o.P3F, {
      className: s.viewMore,
      onClick: i,
      "aria-label": a.intl.formatToPlainString(a.t["bj/2kV"], {
        title: t
      }),
      children: (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-brand",
        children: 0 === n ? a.intl.format(a.t.gVw57p, {}) : a.intl.string(a.t.nPGLFQ)
      })
    })]
  })
}
c.buttonTypes = l, c.Loading = function() {
  let e = Chunk473749.useMemo(() => ({
    width: "".concat(10 + 20 * Math.random(), "%")
  }), []);
  return (0, Chunk54381.jsx)("div", {
    className: Chunk258253.loadingHeader,
    style: module,
    children: (0, Chunk54381.jsx)(Chunk481060.Text, {
      className: Chunk258253.hidden,
      variant: "text-md/medium",
      color: "text-strong",
      children: "_"
    })
  })
}