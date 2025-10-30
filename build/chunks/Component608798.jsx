/** Chunk was on web.js **/
/** chunk id: 608798, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk658722 = require("./658722.js"),
  a = require.n(Chunk658722),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk402235 = require("./402235.js"),
  Chunk485386 = require("./485386.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk592234 = require("./592234.js");
let h = function(e) {
  let {
    className: t,
    guild: n,
    roleStyle: i,
    roleFilter: o,
    onSelect: h,
    onClose: m
  } = e, g = (0, l.e7)([d.Z], () => d.Z.getSortedRoles(n.id)), E = (0, u.ZP)(n.id, null), b = e => s()(g).filter(o).filter(t => a()(e.toLowerCase(), t.name.toLowerCase())).value();
  return (0, r.jsx)(c.DBG, {
    className: t,
    value: new Set,
    onChange: h,
    placeholder: _.intl.string(_.t.XPGZXP),
    "aria-label": _.intl.string(_.t.ljnBlo),
    onClose: m,
    children: e => b(e).map(e => {
      var t, n;
      return (0, r.jsxs)(c.lo1, {
        value: e.id,
        children: ["dot" === i ? (0, r.jsx)(c.FhE, {
          className: p.popoutRoleDot,
          color: null != (t = e.colorString) ? t : f.Pbq,
          colors: E ? e.colorStrings : null,
          background: false,
          tooltip: false
        }) : (0, r.jsx)(c.xko, {
          className: p.popoutRoleCircle,
          color: null != (n = e.colorString) ? n : f.Pbq,
          colors: E ? e.colorStrings : null
        }), (0, r.jsx)(c.lo1.Label, {
          children: e.name
        })]
      }, e.id)
    })
  })
}