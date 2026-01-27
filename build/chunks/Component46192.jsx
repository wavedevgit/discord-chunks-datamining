/** Chunk was on 20941 **/
/** chunk id: 46192, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk631670 = require("./631670.js"),
  Chunk287809 = require("./287809.js"),
  Chunk469778 = require("./469778.js"),
  Chunk796104 = require("./796104.js"),
  Chunk719718 = require("./719718.js"),
  Chunk612082 = require("./612082.jsx"),
  Chunk877272 = require("./877272.jsx"),
  Chunk622865 = require("./622865.js"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  var t, n;
  let {
    className: p,
    textSize: h = 18
  } = e, b = (0, l.bG)([i.default], () => i.default.getCurrentUser()), {
    avatarDecoration: g
  } = (0, l.bG)([c.A], () => c.A.getCheckpointData()), x = (0, l.yK)([s.A], () => {
    if ((null == g ? true : g.skuId) == null) return [];
    let e = s.A.getForSku(null == g ? true : g.skuId);
    return null != e ? [...e] : []
  }), y = null != (t = null == b || null == (n = b.avatarDecoration) ? true : n.skuId) ? t : null, v = null != y && y === (null == g ? true : g.skuId), j = null != x[0], C = async () => {
    j && !v && await (0, a.yu)({
      avatarDecoration: g
    })
  };
  return (0, r.jsx)(u.A, {
    disabled: v,
    onClick: j ? v ? true : C : () => {
      j || (0, o.qm)()
    },
    className: p,
    children: (0, r.jsx)(d.A, {
      variant: "eyebrow",
      style: {
        fontSize: h
      },
      children: j ? v ? f.intl.string(f.t["h+WsPb"]) : f.intl.string(f.t.MAS7uK) : f.intl.string(m.default.mDxM7m)
    })
  })
}