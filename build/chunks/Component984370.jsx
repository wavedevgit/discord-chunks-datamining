/** Chunk was on web.js **/
/** chunk id: 984370, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => N,
  Z: () => D
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
  Chunk208450 = require("./208450.jsx"),
  Chunk975146 = require("./975146.jsx"),
  Chunk979651 = require("./979651.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk477962 = require("./477962.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = C(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
async function N(e) {
  if (!e && (0, m.isMac)() && m.isPlatformEmbedded) {
    var t, n, r;
    let e = null != (r = await (null == (t = (n = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? true : t.call(n))) ? r : "Maximize";
    "Minimize" === e ? g.ZP.minimize() : "Maximize" === e && g.ZP.maximize()
  }
}

function R(e) {
  let {
    children: t,
    className: n,
    channelId: s,
    channelType: l,
    guildId: m,
    innerClassname: g,
    transparent: v = false,
    hidden: I = false,
    toolbar: S,
    mobileToolbar: T,
    "aria-label": A,
    "aria-labelledby": C,
    scrollable: R,
    role: P,
    hideSearch: w,
    showDivider: D,
    disableDoubleClick: x
  } = e, L = null == s || (0, y.AB)(s) ? null : s, M = (0, a.e7)([h.Z], () => h.Z.isInChannel(L) || false), j = (0, a.e7)([c.Z], () => null != L && c.Z.getParticipantsListOpen(L)), {
    enabled: k,
    inInbox: U
  } = d.Z.useExperiment({
    location: "HeaderBar"
  }), {
    hasParticipantsPanel: G
  } = (0, u.Z)({
    location: "HeaderBar"
  });

  function B() {
    if (null == S) return null;
    let e = null != s && !w;
    return i.tq ? T : (0, r.jsxs)(r.Fragment, {
      children: [S, e && !(0, y.AB)(s) ? (0, r.jsx)(_.ZP, {
        guildId: m,
        channelId: s,
        className: O.search
      }, null != m ? m : s) : null, D && (0, r.jsx)(E.ZP.Divider, {}), k && !U ? (0, r.jsx)(f.Z, {}) : null, G && M && null != L && !j && l === b.d4z.GROUP_DM && (0, r.jsxs)("div", {
        className: O.controlButtonWrapper,
        children: [(0, r.jsx)(E.ZP.Divider, {}), (0, r.jsx)(p.Z, {
          onClick: () => o.Z.toggleParticipantsList(L, !j)
        })]
      })]
    })
  }
  return (0, r.jsx)(E.ZP, {
    className: n,
    innerClassName: g,
    toolbar: B(),
    transparent: v,
    hidden: I,
    onDoubleClick: () => N(x),
    "aria-label": A,
    "aria-labelledby": C,
    role: P,
    scrollable: R,
    children: t
  })
}

function P(e) {
  let {
    children: t,
    className: n,
    "aria-label": i,
    "aria-labelledby": a,
    role: o,
    disableDoubleClick: s
  } = e;
  return (0, r.jsx)(E.ZP, {
    className: n,
    onDoubleClick: () => N(s),
    "aria-label": i,
    "aria-labelledby": a,
    role: o,
    children: t
  })
}

function w(e) {
  var {
    isAuthenticated: t = true
  } = e, n = A(e, ["isAuthenticated"]);
  let {
    analyticsLocations: i
  } = (0, l.ZP)(s.Z.HEADER_BAR);
  return (0, r.jsx)(l.Gt, {
    value: i,
    children: t ? (0, r.jsx)(R, T(I({}, n), {
      className: n.className
    })) : (0, r.jsx)(P, T(I({}, n), {
      className: n.className
    }))
  })
}
w.Title = Chunk665149.ZP.Title, w.Icon = Chunk665149.ZP.Icon, w.ChannelIcon = Chunk665149.ZP.ChannelIcon, w.Divider = Chunk665149.ZP.Divider, w.Caret = Chunk665149.ZP.Caret;
let D = w