/** Chunk was on web.js **/
/** chunk id: 400916, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk240864 = require("./240864.js"),
  Chunk613810 = require("./613810.jsx"),
  Chunk596211 = require("./596211.jsx"),
  Chunk388032 = require("./388032.jsx");

function _(e) {
  var t, n, i, _;
  let {
    guildId: p,
    productId: h
  } = e, m = (0, a.e7)([c.Z], () => c.Z.getGuildProduct(h)), g = (null != (_ = null == m || null == (t = m.attachments) ? true : t.length) ? _ : 0) > 1, E = null == m || null == (i = m.attachments) || null == (n = i[0]) ? true : n.id;

  function b() {
    u.Z.open({
      guildId: p,
      productId: h
    })
  }
  return g ? (0, r.jsx)(s.zx, {
    text: f.intl.string(f.t.UyuiUF),
    icon: l.d4D,
    iconPosition: "end",
    onClick: b
  }) : (o()(null != E, "No attachment"), (0, r.jsx)(d.Z, {
    text: f.intl.string(f.t.t9bE9f),
    icon: l._8t,
    iconPosition: "end",
    guildId: p,
    productId: h,
    attachmentId: E
  }))
}