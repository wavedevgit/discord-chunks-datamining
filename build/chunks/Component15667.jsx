/** Chunk was on 40276 **/
/** chunk id: 15667, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk392711 = require("./392711.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk764295 = require("./764295.js"),
  Chunk158168 = require("./158168.js");
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
    className: s.container,
    children: [(0, r.jsx)(l.X6q, {
      className: s.breadcrumbsHeader,
      color: "header-secondary",
      variant: "heading-sm/semibold",
      children: e.isModeratorReport ? a.intl.string(o.default["6mx/DA"]) : a.intl.string(a.t["+3V9Tk"])
    }), t.map((e, t) => (0, r.jsxs)("div", {
      className: s.breadcrumbContainer,
      children: [(0, r.jsx)("div", {
        className: s.breadcrumbDot
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        className: s.breadcrumbText,
        children: e
      })]
    }, "".concat(e, "+").concat(t)))]
  })
}