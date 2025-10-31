/** Chunk was on web.js **/
/** chunk id: 681837, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk506802 = require("./506802.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk320582 = require("./320582.js"),
  Chunk621853 = require("./621853.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk862131 = require("./862131.js");

function _(e) {
  let {
    userId: t,
    size: n = "xs"
  } = e, _ = (0, l.ML)(t), p = (0, l.vh)(t), h = (0, i.e7)([c.Z], () => {
    var e;
    return null == (e = c.Z.getUserProfile(t)) ? true : e.fetchError
  });
  return _.length > 0 || p.length > 0 || null == h ? null : (0, r.jsx)(o.jS, {
    className: f.container,
    text: d.intl.string(d.t.p3Q9Y2),
    delay: u.vB,
    children: (0, r.jsx)(s.Mgn, {
      size: n,
      color: a.Z.colors.STATUS_WARNING.css
    })
  })
}