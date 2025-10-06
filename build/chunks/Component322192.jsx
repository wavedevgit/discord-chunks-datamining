/** Chunk was on web.js **/
/** chunk id: 322192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk468194 = require("./468194.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk601964 = require("./601964.js"),
  Chunk914788 = require("./914788.js"),
  Chunk792258 = require("./792258.jsx"),
  Chunk517382 = require("./517382.js");
let d = e => {
  let {
    guildId: t
  } = e, n = (0, a.e7)([l.Z], () => l.Z.getGuild(t));
  if (true === n) return null;
  let {
    name: d
  } = n, f = (0, s.EB)(n, 40, true), _ = null, p = 10;
  return null == n.icon && null != d && (_ = (0, i.Zg)(d), p = (0, c.o)(_)), (0, r.jsx)("div", {
    className: u.container,
    children: (0, r.jsxs)("div", {
      style: {
        fontSize: p
      },
      children: [null != _ ? (0, r.jsx)("div", {
        className: u.guildAvatar,
        "aria-hidden": true,
        children: _
      }) : null, null != f ? (0, r.jsx)(o.qEK, {
        src: f,
        size: o.EFr.SIZE_40,
        "aria-hidden": true
      }) : null]
    })
  })
}