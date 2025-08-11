/** Chunk was on web.js **/
/** chunk id: 753972, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk768581 = require("./768581.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk870017 = require("./870017.js");

function u(e) {
  let {
    application: t,
    src: n,
    className: o,
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
    className: a()(c.icon, c.placeholder, o)
  }) : null : (0, r.jsx)("img", {
    className: a()(c.icon, o),
    alt: l.intl.string(l.t.X4IxWF),
    src: p,
    "aria-hidden": true,
    draggable: false
  })
}