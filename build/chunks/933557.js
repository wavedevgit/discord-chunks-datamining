/** Chunk was on web.js **/
/** chunk id: 933557, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F6: () => _,
  ZP: () => g,
  cO: () => p,
  le: () => m,
  mA: () => h,
  on: () => f,
  pT: () => d
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk442837 = require("./442837.js"),
  Chunk353926 = require("./353926.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n) {
  let r = e.map(t.getUser).filter(s.lm).map(e => {
    var t;
    return null != (t = n.getNickname(e.id)) ? t : l.ZP.getName(e)
  });
  return r.length > 0 ? r.join(", ") : u.intl.formatToPlainString(u.t["9Uk8PF"], {
    name: l.ZP.getName(t.getCurrentUser())
  })
}

function f(e, t, n) {
  return d(e.recipients, t, n)
}

function p(e) {
  return (0, r.e7)([o.default, a.Z], () => null != e && e.isMultiUserDM() ? f(e, o.default, a.Z) : null)
}

function _(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] && arguments[3],
    i = arguments.length > 4 && true !== arguments[4] && arguments[4];
  switch (e.type) {
    case c.d4z.DM:
      var a;
      let [o] = e.recipients.map(t.getUser).filter(s.lm);
      if (null == o) return "???";
      if (o.isProvisional && null != o.globalName) return o.globalName;
      let u = n.getNickname(o.id),
        d = null != (a = null != u ? u : l.ZP.getName(o)) ? a : "???";
      return r ? "@".concat(d) : d;
    case c.d4z.GROUP_DM:
      if ("" !== e.name) return e.name;
      return f(e, t, n);
    case c.d4z.GUILD_ANNOUNCEMENT:
    case c.d4z.GUILD_TEXT:
    case c.d4z.GUILD_FORUM:
    case c.d4z.GUILD_MEDIA:
      if (r) return "#".concat(e.name);
      return e.name;
    case c.d4z.PUBLIC_THREAD:
    case c.d4z.PRIVATE_THREAD:
    case c.d4z.ANNOUNCEMENT_THREAD:
    case c.d4z.GUILD_VOICE:
    case c.d4z.GUILD_STAGE_VOICE:
    case c.d4z.GUILD_CATEGORY:
      if (i) return '#"'.concat(m(e.name), '"');
      if (r && e.isThread()) return '"'.concat(e.name, '"');
      return e.name;
    default:
      return e.name
  }
}

function m(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
}

function h(e) {
  return e.replace(/\\"/g, '"').replace(/\\\\/g, "\\")
}

function g(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return (0, r.e7)([o.default, i.Z, a.Z], () => null == e ? null : _(e, o.default, a.Z, t))
}