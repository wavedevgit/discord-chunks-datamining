/** Chunk was on web.js **/
/** chunk id: 753972, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk768581 = require("./768581.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk474500 = require("./474500.js");

function u(e) {
  let {
    application: t,
    src: n,
    className: a,
    size: u,
    botIconFirst: d,
    fallbackAvatar: f,
    rendersPlaceholder: _ = false
  } = e, p = i.useMemo(() => null != t ? s.ZP.getApplicationIconURL({
    id: t.id,
    icon: t.icon,
    bot: t.bot,
    size: u,
    botIconFirst: d,
    fallbackAvatar: f
  }) : n, [t, n, u, d, f]);
  return null == p ? _ ? (0, r.jsx)("div", {
    className: o()(c.icon, c.placeholder, a)
  }) : null : (0, r.jsx)("img", {
    className: o()(c.icon, a),
    alt: l.intl.string(l.t.X4IxWL),
    src: p,
    "aria-hidden": true,
    draggable: false
  })
}