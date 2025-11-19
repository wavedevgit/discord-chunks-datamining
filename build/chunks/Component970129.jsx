/** Chunk was on 384 **/
/** chunk id: 970129, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => d,
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk496675 = require("./496675.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n) {
  let r = (0, l.e7)([o.Z], () => !o.Z.isRoleHigher(e, t, n), [e, t, n]);
  return i.useMemo(() => r && n.id === (null == t ? true : t.id), [r, n, t]) ? c.intl.string(c.t.PQylOR) : r ? c.intl.string(c.t.UGIjx9) : null
}

function u(e) {
  let {
    className: t,
    tooltipText: n,
    width: i = 16,
    height: l = 16
  } = e;
  return (0, r.jsx)(a.u, {
    text: n,
    children: (0, r.jsx)("div", {
      className: t,
      children: (0, r.jsx)(s.mBM, {
        size: "custom",
        color: "currentColor",
        width: i,
        height: l
      })
    })
  })
}