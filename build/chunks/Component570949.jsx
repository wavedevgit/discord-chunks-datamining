/** Chunk was on web.js **/
/** chunk id: 570949, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => p,
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk276022 = require("./276022.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk914010 = require("./914010.js"),
  Chunk499254 = require("./499254.js"),
  Chunk827498 = require("./827498.js"),
  Chunk314734 = require("./314734.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  var t;
  let {
    application: n
  } = e, r = null != (t = c.Z.getGuildId()) ? t : true, a = () => {
    (0, i.Mr3)(f.e9), (0, u.y)(d.ti.DISMISSED)
  };
  return (0, s.Z)({
    application: n,
    guildId: r,
    onItemClick: a
  })
}

function h(e) {
  let {
    application: t,
    onSelect: n
  } = e, s = l.Sb.useSetting(), c = (0, o.Z)({
    id: t.id,
    label: _.intl.string(_.t["+NP/b2"])
  }), u = p({
    application: t
  });
  return (0, r.jsxs)(i.v2r, {
    navId: "activity-shelf-item-context",
    onClose: a.Zy,
    "aria-label": _.intl.string(_.t.WkcHT9),
    onSelect: n,
    children: [null != u && (0, r.jsx)(i.kSQ, {
      children: u
    }, "manage-app-actions"), s && (0, r.jsx)(i.kSQ, {
      children: c
    }, "developer-actions")]
  })
}