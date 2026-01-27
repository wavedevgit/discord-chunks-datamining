/** Chunk was on web.js **/
/** chunk id: 717048, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk486020 = require("./486020.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk921010 = require("./921010.js");

function u(e) {
  let {
    application: t,
    src: n,
    className: a,
    size: u,
    botIconFirst: d,
    fallbackAvatar: f,
    rendersPlaceholder: p = false
  } = e, _ = i.useMemo(() => null != t ? s.Ay.getApplicationIconURL({
    id: t.id,
    icon: t.icon,
    bot: t.bot,
    size: u,
    botIconFirst: d,
    fallbackAvatar: f
  }) : n, [t, n, u, d, f]);
  return null == _ ? p ? (0, r.jsx)("div", {
    className: o()(c.K, c.q, a)
  }) : null : (0, r.jsx)("img", {
    className: o()(c.K, a),
    alt: l.intl.string(l.t.X4IxWL),
    src: _,
    "aria-hidden": true,
    draggable: false
  })
}