/** Chunk was on 27978 **/
/** chunk id: 617730, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk973616 = require("./973616.js"),
  Chunk131704 = require("./131704.js"),
  Chunk598077 = require("./598077.js"),
  Chunk411198 = require("./411198.js"),
  Chunk230224 = require("./230224.jsx"),
  Chunk258356 = require("./258356.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk292660 = require("./292660.js");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e) {
  let {
    invite: t,
    onAcceptInvite: n,
    disableUser: f = false
  } = e;
  if (null == t) return null;
  let _ = null != t.guild ? (0, o.Qs)(t.guild) : null,
    x = null != t.channel ? (0, l.jD)(t.channel) : null,
    E = null != t.target_application ? new s.ZP(t.target_application) : null,
    v = f || null == t.inviter ? null : new a.Z(t.inviter),
    j = !(null != t.approximate_member_count && t.approximate_member_count > c.mx || null != _ && _.features.has(d.GuildFeatures.COMMUNITY)) && null != v && (0, c.WT)(t),
    b = (e => {
      let {
        state: t
      } = e;
      switch (t) {
        case d.r2o.ACCEPTING:
        case d.r2o.APP_OPENING:
          returntrue;
        default:
          returnfalse
      }
    })(t),
    I = {
      invite: t,
      user: v,
      guild: _,
      channel: x,
      application: E
    };
  return (0, c.JI)(t) ? (0, r.jsx)(u.Z, {
    invite: t,
    channel: x,
    isSubmitting: b,
    onAcceptInvite: n
  }) : (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)(c.GB, {
      application: E,
      guild: _,
      user: j || (0, c.X7)(t) ? v : null
    }), (0, c.X7)(t) ? null : (0, r.jsx)(c.jq, m(p({}, I), {
      showBigUserIcon: j
    })), (0, r.jsx)(c.UM, m(p({}, I), {
      showBigUserIcon: j
    })), (0, r.jsx)(c.V6, p({}, I)), (0, r.jsx)(i.zx, {
      onClick: n,
      submitting: b,
      className: g.acceptButton,
      children: h.intl.string(h.t.ohMvm1)
    })]
  })
}