/** Chunk was on web.js **/
/** chunk id: 608798, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk640856 = require("./640856.js");
let m = function(e) {
  let {
    className: t,
    guild: n,
    roleStyle: i,
    roleFilter: o,
    onSelect: m,
    onClose: h
  } = e, g = (0, l.e7)([d.Z], () => d.Z.getSortedRoles(n.id)), E = (0, u.ZP)(n.id, null), b = e => s()(g).filter(o).filter(t => a()(e.toLowerCase(), t.name.toLowerCase())).value();
  return (0, r.jsx)(c.DBG, {
    className: t,
    value: new Set,
    onChange: m,
    placeholder: p.intl.string(p.t.XPGZXP),
    "aria-label": p.intl.string(p.t.ljnBlo),
    onClose: h,
    children: e => b(e).map(e => {
      var t, n;
      return (0, r.jsxs)(c.lo1, {
        value: e.id,
        children: ["dot" === i ? (0, r.jsx)(c.FhE, {
          className: _.popoutRoleDot,
          color: null != (t = e.colorString) ? t : f.Pbq,
          colors: E ? e.colorStrings : null,
          background: false,
          tooltip: false
        }) : (0, r.jsx)(c.xko, {
          className: _.popoutRoleCircle,
          color: null != (n = e.colorString) ? n : f.Pbq,
          colors: E ? e.colorStrings : null
        }), (0, r.jsx)(c.lo1.Label, {
          children: e.name
        })]
      }, e.id)
    })
  })
}