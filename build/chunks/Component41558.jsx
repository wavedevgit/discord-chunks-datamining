/** Chunk was on 35755 **/
/** chunk id: 41558, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var l, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk302702 = require("./302702.js"),
  c = ((l = c || {})[l.VIEW_MORE = 0] = "VIEW_MORE", l[l.VIEW_LESS = 1] = "VIEW_LESS", l);

function u(e) {
  let {
    title: t,
    buttonType: n,
    onClickViewButton: l
  } = e;
  return (0, i.jsxs)("div", {
    className: s.header,
    children: [(0, i.jsx)(a.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      children: t
    }), null != n && null != l && (0, i.jsx)(a.P3F, {
      className: s.viewMore,
      onClick: l,
      "aria-label": o.intl.formatToPlainString(o.t["bj/2kZ"], {
        title: t
      }),
      children: (0, i.jsx)(a.Text, {
        variant: "text-md/medium",
        color: "text-brand",
        children: 0 === n ? o.intl.format(o.t.gVw57u, {}) : o.intl.string(o.t.nPGLFR)
      })
    })]
  })
}
u.buttonTypes = c, u.Loading = function() {
  let e = Chunk647438.useMemo(() => ({
    width: "".concat(10 + 20 * Math.random(), "%")
  }), []);
  return (0, Chunk951288.jsx)("div", {
    className: Chunk302702.loadingHeader,
    style: module,
    children: (0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk302702.hidden,
      variant: "text-md/medium",
      color: "header-primary",
      children: "_"
    })
  })
}