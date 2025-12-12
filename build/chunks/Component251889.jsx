/** Chunk was on 86974 **/
/** chunk id: 251889, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk460181 = require("./460181.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk842144 = require("./842144.js");

function c(t) {
  let {
    transitionState: n,
    onClose: i
  } = t, c = () => (null == i || i(), Promise.resolve());
  e.useEffect(() => {
    (0, l.GN)("success", .1)
  }, []);
  let [u] = e.useState(() => (() => {
    let t = [o.intl.format(o.t.ZAbzbA, {}), o.intl.format(o.t.WXVqdT, {}), o.intl.format(o.t.BxG87N, {}), o.intl.format(o.t.pWZvZk, {}), o.intl.format(o.t["/UhvyQ"], {}), o.intl.format(o.t.XrRGpI, {}), o.intl.format(o.t.SN3QDR, {})];
    return t[Math.floor(Math.random() * t.length)]
  })());
  return (0, a.jsx)(r.Modal, {
    transitionState: n,
    title: o.intl.string(o.t["62E+tw"]),
    actions: [{
      text: o.intl.string(o.t.cpT0Cq),
      onClick: c,
      variant: "primary"
    }],
    onClose: c,
    children: (0, a.jsx)("div", {
      className: m.modalContent,
      children: (0, a.jsxs)(s.Text, {
        className: m.submitText,
        variant: "text-sm/normal",
        children: [o.intl.string(o.t["4z1Tq0"]), (0, a.jsx)("br", {}), u]
      })
    })
  })
}