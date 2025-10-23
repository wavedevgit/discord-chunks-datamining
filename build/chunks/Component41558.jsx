/** Chunk was on 35755 **/
/** chunk id: 41558, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk258253 = require("./258253.js"),
  c = ((i = c || {})[i.VIEW_MORE = 0] = "VIEW_MORE", i[i.VIEW_LESS = 1] = "VIEW_LESS", i);

function u(e) {
  let {
    title: t,
    buttonType: n,
    onClickViewButton: i
  } = e;
  return (0, l.jsxs)("div", {
    className: s.header,
    children: [(0, l.jsx)(a.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      children: t
    }), null != n && null != i && (0, l.jsx)(a.P3F, {
      className: s.viewMore,
      onClick: i,
      "aria-label": o.intl.formatToPlainString(o.t["bj/2kV"], {
        title: t
      }),
      children: (0, l.jsx)(a.Text, {
        variant: "text-md/medium",
        color: "text-brand",
        children: 0 === n ? o.intl.format(o.t.gVw57p, {}) : o.intl.string(o.t.nPGLFQ)
      })
    })]
  })
}
u.buttonTypes = c, u.Loading = function() {
  let e = Chunk647438.useMemo(() => ({
    width: "".concat(10 + 20 * Math.random(), "%")
  }), []);
  return (0, Chunk951288.jsx)("div", {
    className: Chunk258253.loadingHeader,
    style: module,
    children: (0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk258253.hidden,
      variant: "text-md/medium",
      color: "header-primary",
      children: "_"
    })
  })
}