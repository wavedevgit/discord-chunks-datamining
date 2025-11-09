/** Chunk was on 54844 **/
/** chunk id: 15667, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk392711 = require("./392711.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk68468 = require("./68468.js"),
  Chunk644778 = require("./644778.js");
let c = e => {
  let t = (0, i.flatMap)(e.history, e => {
    var t;
    let {
      destination: [n],
      multiSelect: r
    } = e, i = [null, null], l = Object.values(null != (t = null == r ? true : r.state) ? t : {});
    return l.length > 0 && (i[0] = l.join(", ")), "" !== n && (i[1] = n), i
  }).filter(e => null != e);
  return 0 === t.length ? null : (0, r.jsxs)("div", {
    className: o.container,
    children: [(0, r.jsx)(l.Heading, {
      className: o.breadcrumbsHeader,
      color: "header-secondary",
      variant: "heading-sm/semibold",
      children: e.isModeratorReport ? a.intl.string(s.default["6mx/DP"]) : a.intl.string(a.t["+3V9Tp"])
    }), t.map((e, t) => (0, r.jsxs)("div", {
      className: o.breadcrumbContainer,
      children: [(0, r.jsx)("div", {
        className: o.breadcrumbDot
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        className: o.breadcrumbText,
        children: e
      })]
    }, "".concat(e, "+").concat(t)))]
  })
}