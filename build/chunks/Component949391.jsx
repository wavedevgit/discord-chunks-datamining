/** Chunk was on 78662 **/
/** chunk id: 949391, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => p
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
  Chunk269438 = require("./269438.js");

function p(e) {
  var n;
  let {
    eulaId: t,
    transitionState: p,
    onClose: f
  } = e, h = (0, a.e7)([d.Z], () => d.Z.getEULA(t));
  i.useEffect(() => {
    (0, l.N)(t)
  }, [t]);
  let S = null != (n = null == h ? true : h.name) ? n : u.intl.string(u.t.ZTNur7),
    j = null != h ? (0, r.jsx)(c.Z, {
      children: h.content,
      className: E.markdown
    }) : (0, r.jsx)(s.$jN, {
      className: E.spinner
    });
  return (0, r.jsxs)(s.Y0X, {
    transitionState: p,
    size: s.CgR.SMALL,
    "aria-label": S,
    parentComponent: "EULA",
    children: [(0, r.jsxs)(s.xBx, {
      justify: o.Z.Justify.BETWEEN,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: S
      }), (0, r.jsx)(s.olH, {
        onClick: f
      })]
    }), (0, r.jsx)(s.hzk, {
      children: j
    })]
  })
}