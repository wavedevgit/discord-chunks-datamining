/** Chunk was on web.js **/
/** chunk id: 984370, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => R,
  Z: () => x
}), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk475179 = require("./475179.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk358221 = require("./358221.js"),
  Chunk185935 = require("./185935.js"),
  Chunk2818 = require("./2818.js"),
  Chunk954551 = require("./954551.jsx"),
  Chunk819439 = require("./819439.js"),
  Chunk208450 = require("./208450.jsx"),
  Chunk975146 = require("./975146.jsx"),
  Chunk979651 = require("./979651.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk979905 = require("./979905.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = N(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
async function R(e) {
  if (!e && (0, g.isMac)() && g.isPlatformEmbedded) {
    var t, n, r;
    let e = null != (r = await (null == (t = (n = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? true : t.call(n))) ? r : "Maximize";
    "Minimize" === e ? E.ZP.minimize() : "Maximize" === e && E.ZP.maximize()
  }
}

function P(e) {
  let {
    children: t,
    className: n,
    channelId: s,
    channelType: l,
    guildId: g,
    innerClassname: E,
    transparent: I = false,
    hidden: S = false,
    toolbar: T,
    mobileToolbar: A,
    "aria-label": C,
    "aria-labelledby": N,
    scrollable: P,
    role: w,
    hideSearch: D,
    showDivider: x,
    disableDoubleClick: L
  } = e, j = null == s || (0, O.AB)(s) ? null : s, M = (0, a.e7)([m.Z], () => m.Z.isInChannel(j) || false), k = (0, a.e7)([c.Z], () => null != j && c.Z.getParticipantsListOpen(j)), {
    enabled: U,
    inInbox: G
  } = d.Z.useExperiment({
    location: "HeaderBar"
  }), {
    hasParticipantsPanel: B
  } = (0, u.Z)({
    location: "HeaderBar"
  }), Z = (0, _.$)({
    location: "HeaderBar"
  });

  function F() {
    if (null == T) return null;
    let e = null != s && !D && !Z;
    return i.tq ? A : (0, r.jsxs)(r.Fragment, {
      children: [T, e && !(0, O.AB)(s) ? (0, r.jsx)(p.Z, {
        guildId: g,
        channelId: s,
        className: v.search
      }, null != g ? g : s) : null, x && (0, r.jsx)(b.ZP.Divider, {}), U && !G ? (0, r.jsx)(f.Z, {}) : null, B && M && null != j && !k && l === y.d4z.GROUP_DM && (0, r.jsxs)("div", {
        className: v.controlButtonWrapper,
        children: [(0, r.jsx)(b.ZP.Divider, {}), (0, r.jsx)(h.Z, {
          onClick: () => o.Z.toggleParticipantsList(j, !k)
        })]
      })]
    })
  }
  return (0, r.jsx)(b.ZP, {
    className: n,
    innerClassName: E,
    toolbar: F(),
    transparent: I,
    hidden: S,
    onDoubleClick: () => R(L),
    "aria-label": C,
    "aria-labelledby": N,
    role: w,
    scrollable: P,
    children: t
  })
}

function w(e) {
  let {
    children: t,
    className: n,
    "aria-label": i,
    "aria-labelledby": a,
    role: o,
    disableDoubleClick: s
  } = e;
  return (0, r.jsx)(b.ZP, {
    className: n,
    onDoubleClick: () => R(s),
    "aria-label": i,
    "aria-labelledby": a,
    role: o,
    children: t
  })
}

function D(e) {
  var {
    isAuthenticated: t = true
  } = e, n = C(e, ["isAuthenticated"]);
  let {
    analyticsLocations: i
  } = (0, l.ZP)(s.Z.HEADER_BAR);
  return (0, r.jsx)(l.Gt, {
    value: i,
    children: t ? (0, r.jsx)(P, A(S({}, n), {
      className: n.className
    })) : (0, r.jsx)(w, A(S({}, n), {
      className: n.className
    }))
  })
}
D.Title = Chunk665149.ZP.Title, D.Icon = Chunk665149.ZP.Icon, D.ChannelIcon = Chunk665149.ZP.ChannelIcon, D.Divider = Chunk665149.ZP.Divider, D.Caret = Chunk665149.ZP.Caret;
let x = D