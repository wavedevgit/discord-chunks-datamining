/** Chunk was on 36058 **/
/** chunk id: 823777, original params: t,r,n (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk400492 = require("./400492.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk237905 = require("./237905.js");

function d(t) {
  let {
    transitionState: r,
    onClose: n
  } = t, d = () => (null == n || n(), Promise.resolve());
  a.useEffect(() => {
    (0, l.Ak)("success", .1)
  }, []);
  let [f] = a.useState(() => {
    let t;
    return (t = [o.intl.format(o.t.ZAbzbA, {}), o.intl.format(o.t.WXVqdT, {}), o.intl.format(o.t.BxG87N, {}), o.intl.format(o.t.pWZvZk, {}), o.intl.format(o.t["/UhvyQ"], {}), o.intl.format(o.t.XrRGpI, {}), o.intl.format(o.t.SN3QDR, {})])[Math.floor(Math.random() * t.length)]
  });
  return (0, i.jsx)(e.Modal, {
    transitionState: r,
    title: o.intl.string(o.t["62E+tw"]),
    actions: [{
      text: o.intl.string(o.t.cpT0Cq),
      onClick: d,
      variant: "primary"
    }],
    onClose: d,
    children: (0, i.jsx)("div", {
      className: c.jE,
      children: (0, i.jsxs)(s.Text, {
        className: c.KP,
        variant: "text-sm/normal",
        children: [o.intl.string(o.t["4z1Tq0"]), (0, i.jsx)("br", {}), f]
      })
    })
  })
}