/** Chunk was on web.js **/
/** chunk id: 710631, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk447543 = require("./447543.js"),
  Chunk904245 = require("./904245.js"),
  Chunk159300 = require("./159300.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk771845 = require("./771845.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = "max_uses",
  T = "User Invite Context Menu",
  C = "context_menu";

function A(e, t) {
  s.Z.ensurePrivateChannel(e).then(e => {
    null != d.Z.getChannel(e) && c.Z.sendInvite(e, t, C, {
      source: E.t4x.GUILD_CONTEXT_MENU
    })
  })
}

function N(e) {
  let {
    user: t,
    guildId: n,
    onAction: s
  } = e, c = (0, o.e7)([g.default], () => g.default.getCurrentUser(), []), d = (0, o.Wu)([h.ZP, p.Z, _.Z], () => {
    let e = h.ZP.getFlattenedGuildIds(),
      t = [];
    return e.forEach(e => {
      let r = p.Z.getGuild(e);
      null != r && (0, u.b)(_.Z, r) && r.id !== n && t.push(r)
    }), t
  }, [n]), [y, v] = i.useState({});

  function C(e, t) {
    let n = f.ZP.getDefaultChannel(e.id, true, E.Plq.CREATE_INSTANT_INVITE);
    if (null != n) {
      if (v(S(O({}, y), {
          [e.id]: true
        })), !_.Z.can(E.Plq.CREATE_INSTANT_INVITE, e) && null != e.vanityURLCode) return void A(t, e.vanityURLCode);
      l.ZP.createInvite(n.id, {
        [I]: 1,
        unique: true
      }, T).then(e => A(t, e.code))
    }
  }
  return (null == c ? true : c.id) === t.id || t.bot || 0 === d.length || m.Z.isBlockedOrIgnored(t.id) ? null : (0, r.jsx)(a.sNh, {
    id: "invite-to-server",
    label: b.intl.string(b.t.Sd8Ixw),
    children: d.map(e => y[e.id] ? (0, r.jsx)(a.sNh, {
      id: e.id,
      disabled: true,
      label: b.intl.string(b.t.PuLLzP)
    }, e.id) : (0, r.jsx)(a.sNh, {
      id: e.id,
      label: e.name,
      action: () => {
        null == s || s(), C(e, t.id)
      }
    }, e.id))
  })
}