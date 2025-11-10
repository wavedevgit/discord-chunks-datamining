/** Chunk was on web.js **/
/** chunk id: 430131, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594928 = require("./594928.js"),
  Chunk612659 = require("./612659.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk235433 = require("./235433.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk52597 = require("./52597.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk473385 = require("./473385.js");

function m(e) {
  let {
    errors: t,
    pendingNick: n,
    currentNick: m,
    username: g,
    user: E,
    guild: b
  } = e, y = null != n ? n : m, O = (0, i.e7)([u.Z], () => u.Z.can(f.Plq.CHANGE_NICKNAME, b) || u.Z.can(f.Plq.MANAGE_NICKNAMES, b)), v = (0, s.m)(_.PremiumTypes.TIER_2), I = (0, o.cL)({
    location: "NicknameSection"
  });

  function S(e) {
    (0, d.wi)(e, m)
  }
  return (0, r.jsxs)(l.Z, {
    title: p.intl.string(p.t.me1lRk),
    errors: t,
    children: [(0, r.jsx)(a.oil, {
      value: null != y ? y : "",
      placeholder: g,
      maxLength: f.l$U,
      onChange: S,
      disabled: !O,
      helperText: O ? true : p.intl.string(p.t.gzjxQi)
    }), !O && (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      className: h.nicknameDisabled,
      children: p.intl.string(p.t.gzjxQi)
    }), I && v && (0, r.jsx)(c.Z, {
      user: E,
      guildId: b.id,
      className: h.displayNameStylesSection
    })]
  })
}