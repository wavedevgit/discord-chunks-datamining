/** Chunk was on web.js **/
/** chunk id: 829468, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk809206 = require("./809206.js"),
  Chunk594174 = require("./594174.js"),
  Chunk580130 = require("./580130.js"),
  Chunk515970 = require("./515970.js"),
  Chunk5888 = require("./5888.js"),
  Chunk639949 = require("./639949.jsx"),
  Chunk391876 = require("./391876.jsx"),
  Chunk638398 = require("./638398.js"),
  Chunk388032 = require("./388032.jsx");

function _(e) {
  var t, n;
  let {
    className: _,
    textSize: h = 18
  } = e, m = (0, i.e7)([o.default], () => o.default.getCurrentUser()), {
    avatarDecoration: g
  } = (0, i.e7)([c.Z], () => c.Z.getCheckpointData()), E = (0, i.Wu)([s.Z], () => {
    if ((null == g ? true : g.skuId) == null) return [];
    let e = s.Z.getForSku(null == g ? true : g.skuId);
    return null != e ? [...e] : []
  }), b = null != (n = null == m || null == (t = m.avatarDecoration) ? true : t.skuId) ? n : null, y = null != b && b === (null == g ? true : g.skuId), O = null != E[0], v = () => {
    O || (0, l._Z)()
  }, S = async () => {
    O && !y && await (0, a.Mn)({
      avatarDecoration: g
    })
  };
  return (0, r.jsx)(u.Z, {
    disabled: y,
    onClick: O ? y ? true : S : v,
    className: _,
    children: (0, r.jsx)(d.Z, {
      variant: "eyebrow",
      style: {
        fontSize: h
      },
      children: O ? y ? p.intl.string(p.t["h+WsPb"]) : p.intl.string(p.t.MAS7uK) : p.intl.string(f.default.mDxM7m)
    })
  })
}