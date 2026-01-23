/** Chunk was on web.js **/
/** chunk id: 889460, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk846293 = require("./846293.js"),
  Chunk843472 = require("./843472.js"),
  Chunk855687 = require("./855687.js"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk711014 = require("./711014.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function b(e, t, n) {
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
      b(e, t, n[t])
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

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = "max_uses",
  S = "User Invite Context Menu",
  T = "context_menu";

function C(e, t) {
  o.A.ensurePrivateChannel(e).then(e => {
    null != d.A.getChannel(e) && c.A.sendInvite(e, t, T, {
      source: E.PE1.GUILD_CONTEXT_MENU
    })
  })
}

function N(e) {
  let {
    user: t,
    guildId: n,
    onAction: o
  } = e, c = (0, a.bG)([g.default], () => g.default.getCurrentUser(), []), d = (0, a.yK)([m.Ay, p.A, _.A], () => {
    let e = m.Ay.getFlattenedGuildIds(),
      t = [];
    return e.forEach(e => {
      let r = p.A.getGuild(e);
      null != r && (0, u.K)(_.A, r) && r.id !== n && t.push(r)
    }), t
  }, [n]), [b, v] = i.useState({});

  function T(e, t) {
    let n = f.Ay.getDefaultChannel(e.id, true, E.xBc.CREATE_INSTANT_INVITE);
    if (null != n) {
      if (v(A(O({}, b), {
          [e.id]: true
        })), !_.A.can(E.xBc.CREATE_INSTANT_INVITE, e) && null != e.vanityURLCode) return void C(t, e.vanityURLCode);
      l.Ay.createInvite(n.id, {
        [I]: 1,
        unique: true
      }, S).then(e => C(t, e.code))
    }
  }
  return (null == c ? true : c.id) === t.id || t.bot || 0 === d.length || h.A.isBlockedOrIgnored(t.id) ? null : (0, r.jsx)(s.Drp, {
    id: "invite-to-server",
    label: y.intl.string(y.t.Sd8Ixw),
    children: d.map(e => b[e.id] ? (0, r.jsx)(s.Drp, {
      id: e.id,
      disabled: true,
      label: y.intl.string(y.t.PuLLzP)
    }, e.id) : (0, r.jsx)(s.Drp, {
      id: e.id,
      label: e.name,
      action: () => {
        null == o || o(), T(e, t.id)
      }
    }, e.id))
  })
}