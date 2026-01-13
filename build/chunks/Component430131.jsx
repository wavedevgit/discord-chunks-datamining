/** Chunk was on web.js **/
/** chunk id: 430131, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk612659 = require("./612659.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk235433 = require("./235433.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk52597 = require("./52597.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk362117 = require("./362117.js");

function m(e) {
  let {
    errors: t,
    pendingNick: n,
    currentNick: m,
    username: h,
    user: g,
    guild: E
  } = e, b = null != n ? n : m, y = (0, i.e7)([c.Z], () => c.Z.can(d.Plq.CHANGE_NICKNAME, E) || c.Z.can(d.Plq.MANAGE_NICKNAMES, E)), O = (0, o.m)(f.PremiumTypes.TIER_2);

  function v(e) {
    (0, u.wi)(e, m)
  }
  return (0, r.jsxs)(s.Z, {
    title: p.intl.string(p.t.me1lRk),
    errors: t,
    children: [(0, r.jsx)(a.oil, {
      value: null != b ? b : "",
      placeholder: h,
      maxLength: d.l$U,
      onChange: v,
      disabled: !y,
      helperText: y ? true : p.intl.string(p.t.gzjxQi)
    }), O && (0, r.jsx)(l.Z, {
      user: g,
      guildId: E.id,
      className: _.displayNameStylesSection
    })]
  })
}