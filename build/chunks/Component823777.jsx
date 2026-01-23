/** Chunk was on 36058 **/
/** chunk id: 823777, original params: t,n,a (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk400492 = require("./400492.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk237905 = require("./237905.js");

function m(t) {
  let {
    transitionState: n,
    onClose: a
  } = t, m = () => (null == a || a(), Promise.resolve());
  i.useEffect(() => {
    (0, l.Ak)("success", .1)
  }, []);
  let [d] = i.useState(() => {
    let t;
    return (t = [o.intl.format(o.t.ZAbzbA, {}), o.intl.format(o.t.WXVqdT, {}), o.intl.format(o.t.BxG87N, {}), o.intl.format(o.t.pWZvZk, {}), o.intl.format(o.t["/UhvyQ"], {}), o.intl.format(o.t.XrRGpI, {}), o.intl.format(o.t.SN3QDR, {})])[Math.floor(Math.random() * t.length)]
  });
  return (0, r.jsx)(e.Modal, {
    transitionState: n,
    title: o.intl.string(o.t["62E+tw"]),
    actions: [{
      text: o.intl.string(o.t.cpT0Cq),
      onClick: m,
      variant: "primary"
    }],
    onClose: m,
    children: (0, r.jsx)("div", {
      className: c.jE,
      children: (0, r.jsxs)(s.Text, {
        className: c.KP,
        variant: "text-sm/normal",
        children: [o.intl.string(o.t["4z1Tq0"]), (0, r.jsx)("br", {}), d]
      })
    })
  })
}