/** Chunk was on 54844 **/
/** chunk id: 15667, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk392711 = require("./392711.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk792389 = require("./792389.js"),
  Chunk22959 = require("./22959.js");
let d = e => {
  let t = (0, l.flatMap)(e.history, e => {
    var t;
    let {
      destination: [n],
      multiSelect: r
    } = e, l = [null, null], i = Object.values(null != (t = null == r ? true : r.state) ? t : {});
    return i.length > 0 && (l[0] = i.join(", ")), "" !== n && (l[1] = n), l
  }).filter(e => null != e);
  return 0 === t.length ? null : (0, r.jsxs)("div", {
    className: o.container,
    children: [(0, r.jsx)(i.Heading, {
      className: o.breadcrumbsHeader,
      color: "text-default",
      variant: "heading-sm/semibold",
      children: e.isModeratorReport ? a.intl.string(s.default["6mx/DP"]) : a.intl.string(a.t["+3V9Tp"])
    }), t.map((e, t) => (0, r.jsxs)("div", {
      className: o.breadcrumbContainer,
      children: [(0, r.jsx)("div", {
        className: o.breadcrumbDot
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        className: o.breadcrumbText,
        children: e
      })]
    }, "".concat(e, "+").concat(t)))]
  })
}