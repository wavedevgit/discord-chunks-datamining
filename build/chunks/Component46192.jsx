/** Chunk was on web.js **/
/** chunk id: 46192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
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

function _(e) {
  var t, n;
  let {
    className: _,
    textSize: h = 18
  } = e, m = (0, i.bG)([s.default], () => s.default.getCurrentUser()), {
    avatarDecoration: g
  } = (0, i.bG)([c.A], () => c.A.getCheckpointData()), E = (0, i.yK)([o.A], () => {
    if ((null == g ? true : g.skuId) == null) return [];
    let e = o.A.getForSku(null == g ? true : g.skuId);
    return null != e ? [...e] : []
  }), b = null != (t = null == m || null == (n = m.avatarDecoration) ? true : n.skuId) ? t : null, y = null != b && b === (null == g ? true : g.skuId), O = null != E[0], A = () => {
    O || (0, l.qm)()
  }, v = async () => {
    O && !y && await (0, a.yu)({
      avatarDecoration: g
    })
  };
  return (0, r.jsx)(u.A, {
    disabled: y,
    onClick: O ? y ? true : v : A,
    className: _,
    children: (0, r.jsx)(d.A, {
      variant: "eyebrow",
      style: {
        fontSize: h
      },
      children: O ? y ? p.intl.string(p.t["h+WsPb"]) : p.intl.string(p.t.MAS7uK) : p.intl.string(f.default.mDxM7m)
    })
  })
}