/** Chunk was on 39048 **/
/** chunk id: 660834, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ay: () => x,
  N8: () => h,
  Q$: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk134413 = require("./134413.js"),
  Chunk221950 = require("./221950.js"),
  Chunk179534 = require("./179534.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk118856 = require("./118856.js");

function f(e) {
  if (null == e) returnfalse;
  let t = e.features.has(g.GuildFeatures.COMMUNITY),
    n = e.features.has(g.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  return t || n
}

function h() {
  let e = u.A.getProps().guild;
  null != e && (f(e) ? (d.A.close(), (0, o.aZ)(e.id)) : d.A.open(e.id, g.BEX.MEMBERS))
}

function b() {
  let e = f((0, l.bG)([u.A], () => u.A.getProps().guild, []));
  return (0, r.jsxs)("div", {
    className: p.q,
    children: [(0, r.jsx)("div", {
      children: m.intl.string(m.t["9Oq93m"])
    }), e && (0, r.jsx)(s.tfB, {
      size: "xs",
      color: "currentColor",
      className: p.w
    })]
  })
}

function x() {
  var e;
  let {
    guild: t
  } = (0, l.bG)([u.A], () => u.A.getProps(), [], i.isEqual), n = null != (e = null == t ? true : t.id) ? e : g.dJq;
  return (0, a.fw)(n) ? (0, r.jsx)(c.A, {
    guildId: n
  }) : null
}