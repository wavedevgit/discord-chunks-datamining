/** Chunk was on 86974 **/
/** chunk id: 251889, original params: t,n,a (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk460181 = require("./460181.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk858215 = require("./858215.js");

function m(t) {
  let {
    transitionState: n,
    onClose: a
  } = t, m = () => (null == a || a(), Promise.resolve());
  e.useEffect(() => {
    (0, l.GN)("success", .1)
  }, []);
  let [d] = e.useState(() => (() => {
    let t = [o.intl.format(o.t.ZAbzbA, {}), o.intl.format(o.t.WXVqdT, {}), o.intl.format(o.t.BxG87N, {}), o.intl.format(o.t.pWZvZk, {}), o.intl.format(o.t["/UhvyQ"], {}), o.intl.format(o.t.XrRGpI, {}), o.intl.format(o.t.SN3QDR, {})];
    return t[Math.floor(Math.random() * t.length)]
  })());
  return (0, i.jsx)(r.Modal, {
    transitionState: n,
    title: o.intl.string(o.t["62E+tw"]),
    actions: [{
      text: o.intl.string(o.t.cpT0Cq),
      onClick: m,
      variant: "primary"
    }],
    onClose: m,
    children: (0, i.jsx)("div", {
      className: c.modalContent,
      children: (0, i.jsxs)(s.Text, {
        className: c.submitText,
        variant: "text-sm/normal",
        children: [o.intl.string(o.t["4z1Tq0"]), (0, i.jsx)("br", {}), d]
      })
    })
  })
}