/** Chunk was on 86142 **/
/** chunk id: 663572, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk611010 = require("./611010.js"),
  Chunk95701 = require("./95701.js"),
  Chunk427157 = require("./427157.js"),
  Chunk860689 = require("./860689.js"),
  Chunk949155 = require("./949155.jsx"),
  Chunk131929 = require("./131929.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk140030 = require("./140030.js");

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

function g(e, t) {
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

function m(e) {
  let {
    invite: t,
    onAcceptInvite: n,
    disableUser: m = false
  } = e;
  if (null == t) return null;
  let A = null != t.guild ? (0, o.DY)(t.guild) : null,
    x = null != t.channel ? (0, l.OY)(t.channel) : null,
    _ = null != t.target_application ? new s.Ay(t.target_application) : null,
    E = m || null == t.inviter ? null : new a.A(t.inviter),
    b = !(null != t.approximate_member_count && t.approximate_member_count > c.FC || null != A && A.features.has(d.GuildFeatures.COMMUNITY)) && null != E && (0, c.B_)(t),
    v = (e => {
      let {
        state: t
      } = e;
      switch (t) {
        case d.elq.ACCEPTING:
        case d.elq.APP_OPENING:
          returntrue;
        default:
          returnfalse
      }
    })(t),
    j = {
      invite: t,
      user: E,
      guild: A,
      channel: x,
      application: _
    };
  return (0, c.Fk)(t) ? (0, r.jsx)(u.A, {
    invite: t,
    channel: x,
    isSubmitting: v,
    onAcceptInvite: n
  }) : (0, r.jsxs)("div", {
    className: f.kL,
    children: [(0, r.jsx)(c.zN, {
      application: _,
      guild: A,
      user: b || (0, c.PX)(t) ? E : null
    }), (0, c.PX)(t) ? null : (0, r.jsx)(c.ji, g(p({}, j), {
      showBigUserIcon: b
    })), (0, r.jsx)(c.TZ, g(p({}, j), {
      showBigUserIcon: b
    })), (0, r.jsx)(c.IK, p({}, j)), (0, r.jsx)("div", {
      className: f.xG,
      children: (0, r.jsx)(i.Button, {
        variant: "primary",
        size: "md",
        text: h.intl.string(h.t.ohMvm1),
        onClick: n,
        loading: v,
        fullWidth: true
      })
    })]
  })
}