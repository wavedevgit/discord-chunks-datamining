/** Chunk was on web.js **/
/** chunk id: 400916, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk671533 = require("./671533.jsx"),
  Chunk240864 = require("./240864.js"),
  Chunk613810 = require("./613810.jsx"),
  Chunk596211 = require("./596211.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk914388 = require("./914388.js");

function h(e) {
  var t, n, i, h;
  let {
    guildId: m,
    productId: g
  } = e, E = (0, o.e7)([u.Z], () => u.Z.getGuildProduct(g)), b = (null != (h = null == E || null == (t = E.attachments) ? true : t.length) ? h : 0) > 1, y = null == E || null == (i = E.attachments) || null == (n = i[0]) ? true : n.id;

  function O() {
    d.Z.open({
      guildId: m,
      productId: g
    })
  }
  return b ? (0, r.jsxs)(s.zx, {
    onClick: O,
    innerClassName: p.textWithIcon,
    children: [(0, r.jsx)("div", {
      children: _.intl.string(_.t.UyuiUF)
    }), (0, r.jsx)(l.LZC, {
      size: 8,
      horizontal: true
    }), (0, r.jsx)(c.Z, {
      width: 16,
      height: 16,
      direction: c.Z.Directions.RIGHT
    })]
  }) : (a()(null != y, "No attachment"), (0, r.jsxs)(f.Z, {
    guildId: m,
    productId: g,
    attachmentId: y,
    innerClassName: p.textWithIcon,
    children: [(0, r.jsx)("div", {
      children: _.intl.string(_.t.t9bE9f)
    }), (0, r.jsx)(l.LZC, {
      size: 8,
      horizontal: true
    }), (0, r.jsx)(l._8t, {
      size: "xs",
      color: "currentColor"
    })]
  }))
}