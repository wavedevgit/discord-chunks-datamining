/** Chunk was on web.js **/
/** chunk id: 789267, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let t = null != e.call ? e.call.duration : null;
  return null != t ? t.humanize() : null
}

function l(e) {
  let {
    message: t,
    compact: l,
    missed: c,
    joinable: u,
    usernameHook: d,
    onClickJoinCall: f
  } = e, _ = (0, i.ZP)(t), p = _.nick, h = d(_), m = s(t);
  return c ? (0, r.jsx)(o.Z, {
    icon: n(154239),
    timestamp: t.timestamp,
    compact: l,
    children: null != m ? a.intl.format(a.t.AcqBmJ, {
      username: p,
      usernameHook: h,
      callDuration: m
    }) : a.intl.format(a.t["43phHx"], {
      username: p,
      usernameHook: h
    })
  }) : (0, r.jsxs)(o.Z, {
    icon: n(344163),
    timestamp: t.timestamp,
    compact: l,
    children: [null != m ? a.intl.format(a.t["7TeC1N"], {
      username: p,
      usernameHook: h,
      callDuration: m
    }) : a.intl.format(a.t.LuB5RE, {
      username: p,
      usernameHook: h
    }), u ? (0, r.jsx)(o.Z.Action, {
      onClick: f,
      children: a.intl.string(a.t.oa9mvb)
    }) : null]
  })
}