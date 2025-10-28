/** Chunk was on 78662 **/
/** chunk id: 949391, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668274 = require("./668274.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk241209 = require("./241209.jsx"),
  Chunk807693 = require("./807693.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk608981 = require("./608981.js");

function f(e) {
  var t;
  let {
    eulaId: r,
    transitionState: f,
    onClose: h
  } = e, g = (0, a.e7)([u.Z], () => u.Z.getEULA(r));
  l.useEffect(() => {
    (0, c.N)(r)
  }, [r]);
  let b = null != (t = null == g ? true : g.name) ? t : d.intl.string(d.t.ZTNur7),
    m = null != g ? (0, n.jsx)(s.Z, {
      children: g.content,
      className: p.markdown
    }) : (0, n.jsx)(o.$jN, {
      className: p.spinner
    });
  return (0, n.jsxs)(o.Y0X, {
    transitionState: f,
    size: o.CgR.SMALL,
    "aria-label": b,
    parentComponent: "EULA",
    children: [(0, n.jsxs)(o.xBx, {
      justify: i.Z.Justify.BETWEEN,
      children: [(0, n.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        children: b
      }), (0, n.jsx)(o.olH, {
        onClick: h
      })]
    }), (0, n.jsx)(o.hzk, {
      children: m
    })]
  })
}