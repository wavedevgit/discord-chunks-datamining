/** Chunk was on 78662 **/
/** chunk id: 949391, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  default: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668274 = require("./668274.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk241209 = require("./241209.jsx"),
  Chunk807693 = require("./807693.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk648441 = require("./648441.js");

function E(n) {
  var e;
  let {
    eulaId: t,
    transitionState: E,
    onClose: g
  } = n, m = (0, r.e7)([c.Z], () => c.Z.getEULA(t));
  i.useEffect(() => {
    (0, d.N)(t)
  }, [t]);
  let f = null != (e = null == m ? true : m.name) ? e : u.intl.string(u.t.ZTNur7),
    h = null != m ? (0, a.jsx)(o.Z, {
      children: m.content,
      className: p.markdown
    }) : (0, a.jsx)(s.$jN, {
      className: p.spinner
    });
  return (0, a.jsxs)(s.Y0X, {
    "data-migration-pending": true,
    transitionState: E,
    size: s.CgR.SMALL,
    "aria-label": f,
    parentComponent: "EULA",
    children: [(0, a.jsxs)(s.xBx, {
      "data-migration-pending": true,
      justify: l.Z.Justify.BETWEEN,
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: f
      }), (0, a.jsx)(s.olH, {
        "data-migration-pending": true,
        onClick: g
      })]
    }), (0, a.jsx)(s.hzk, {
      "data-migration-pending": true,
      children: h
    })]
  })
}