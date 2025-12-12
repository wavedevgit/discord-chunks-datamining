/** Chunk was on web.js **/
/** chunk id: 753972, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk768581 = require("./768581.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk474500 = require("./474500.js");

function u(e) {
  let {
    application: t,
    src: n,
    className: o,
    size: u,
    botIconFirst: d,
    fallbackAvatar: f,
    rendersPlaceholder: p = false
  } = e, _ = i.useMemo(() => null != t ? s.ZP.getApplicationIconURL({
    id: t.id,
    icon: t.icon,
    bot: t.bot,
    size: u,
    botIconFirst: d,
    fallbackAvatar: f
  }) : n, [t, n, u, d, f]);
  return null == _ ? p ? (0, r.jsx)("div", {
    className: a()(c.icon, c.placeholder, o)
  }) : null : (0, r.jsx)("img", {
    className: a()(c.icon, o),
    alt: l.intl.string(l.t.X4IxWL),
    src: _,
    "aria-hidden": true,
    draggable: false
  })
}