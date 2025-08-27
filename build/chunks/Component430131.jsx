/** Chunk was on web.js **/
/** chunk id: 430131, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk52597 = require("./52597.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk473385 = require("./473385.js");

function f(e) {
  let {
    errors: t,
    pendingNick: n,
    currentNick: f,
    username: _,
    guild: p
  } = e, h = null != n ? n : f, m = (0, i.e7)([s.Z], () => s.Z.can(c.Plq.CHANGE_NICKNAME, p) || s.Z.can(c.Plq.MANAGE_NICKNAMES, p));

  function g(e) {
    (0, l.wi)(e, f)
  }
  return (0, r.jsxs)(o.Z, {
    title: u.intl.string(u.t.me1lRk),
    errors: t,
    children: [(0, r.jsx)(a.oil, {
      value: null != h ? h : "",
      placeholder: _,
      maxLength: c.l$U,
      onChange: g,
      disabled: !m
    }), !m && (0, r.jsx)(a.R94, {
      className: d.nicknameDisabled,
      type: a.R94.Types.DESCRIPTION,
      children: u.intl.string(u.t.gzjxQk)
    })]
  })
}