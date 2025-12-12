/** Chunk was on web.js **/
/** chunk id: 189432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => O
});
var Chunk622822 = require("./622822.js"),
  Chunk100527 = require("./100527.js"),
  Chunk982168 = require("./982168.js"),
  Chunk703656 = require("./703656.js"),
  Chunk6025 = require("./6025.js"),
  Chunk897473 = require("./897473.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk944486 = require("./944486.js"),
  Chunk545408 = require("./545408.js"),
  Chunk189357 = require("./189357.js"),
  Chunk50493 = require("./50493.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e, t, n) {
  var g, b, O;
  let v, S = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {
    modViewPanel: _.k.INFO
  };
  if (!(0, p.Y)(e)) return Promise.resolve();
  let I = null != (g = S.modViewPanel) ? g : _.k.INFO,
    T = null != (b = S.sourceLocation) ? b : i.Z.MEMBER_SAFETY_PAGE,
    C = d.Z.getCurrentlySelectedChannelId(),
    A = null != C ? c.Z.getChannel(C) : null;
  if (n !== h.oC.MEMBER_SAFETY && (null == A || A.getGuildId() !== e)) {
    let t = u.ZP.getDefaultChannel(e);
    null == t || (0, r.Y3)(t) || (0, a.uL)(m.Z5c.CHANNEL(e, t.id))
  }
  let N = n;
  return (0, o.H0)(N, t) && (v = N), (0, f.q)(e, t, I, T), s.Z.openGuildSidebar({
    guildId: e,
    baseChannelId: n,
    sidebarType: l.jL.GUILD_MEMBER_MOD_VIEW,
    details: y(E({
      type: l.Ff.GUILD_MEMBER_MOD_VIEW,
      userId: t,
      guildId: e
    }, S), {
      modViewPanel: null != (O = S.modViewPanel) ? O : _.k.INFO,
      moderatorReportId: v
    })
  })
}