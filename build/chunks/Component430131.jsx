/** Chunk was on web.js **/
/** chunk id: 430131, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594928 = require("./594928.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk235433 = require("./235433.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk52597 = require("./52597.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk473385 = require("./473385.js");

function p(e) {
  let {
    errors: t,
    pendingNick: n,
    currentNick: p,
    username: h,
    user: m,
    guild: g
  } = e, E = null != n ? n : p, b = (0, i.e7)([c.Z], () => c.Z.can(d.Plq.CHANGE_NICKNAME, g) || c.Z.can(d.Plq.MANAGE_NICKNAMES, g)), {
    enabled: y
  } = o.wL.useConfig({
    location: "NicknameSection"
  });

  function O(e) {
    (0, u.wi)(e, p)
  }
  return (0, r.jsxs)(s.Z, {
    title: f.intl.string(f.t.me1lRk),
    errors: t,
    children: [(0, r.jsx)(a.oil, {
      value: null != E ? E : "",
      placeholder: h,
      maxLength: d.l$U,
      onChange: O,
      disabled: !b
    }), !b && (0, r.jsx)(a.R94, {
      className: _.nicknameDisabled,
      type: a.R94.Types.DESCRIPTION,
      children: f.intl.string(f.t.gzjxQk)
    }), y && (0, r.jsx)(l.Z, {
      user: m,
      guildId: g.id,
      className: _.displayNameStylesSection
    })]
  })
}