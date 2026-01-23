/** Chunk was on web.js **/
/** chunk id: 742589, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => D,
  I: () => N
}), require("./747238.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk367513 = require("./367513.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk313961 = require("./313961.js"),
  Chunk261718 = require("./261718.js"),
  Chunk966597 = require("./966597.js"),
  Chunk922281 = require("./922281.jsx"),
  Chunk907745 = require("./907745.jsx"),
  Chunk772475 = require("./772475.jsx"),
  Chunk977997 = require("./977997.js"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk892513 = require("./892513.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
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

function I(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = C(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
async function N(e) {
  if (!e && (0, m.isMac)() && m.isPlatformEmbedded) {
    var t, n, r;
    let e = null != (t = await (null == (n = (r = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? true : n.call(r))) ? t : "Maximize";
    "Minimize" === e ? g.Ay.minimize() : "Maximize" === e && g.Ay.maximize()
  }
}

function w(e) {
  let {
    children: t,
    className: n,
    channelId: o,
    channelType: l,
    guildId: m,
    innerClassname: g,
    transparent: v = false,
    hidden: A = false,
    toolbar: I,
    mobileToolbar: S,
    "aria-label": T,
    "aria-labelledby": C,
    scrollable: w,
    role: R,
    hideSearch: P,
    showDivider: D,
    disableDoubleClick: x
  } = e, L = null == o || (0, b.jq)(o) ? null : o, j = (0, a.bG)([h.A], () => h.A.isInChannel(L) || false), M = (0, a.bG)([c.A], () => null != L && c.A.getParticipantsListOpen(L)), {
    enabled: k,
    inInbox: U
  } = d.A.useExperiment({
    location: "HeaderBar"
  }), {
    hasParticipantsPanel: G
  } = (0, u.A)({
    location: "HeaderBar"
  });

  function V() {
    if (null == I) return null;
    let e = null != o && !P;
    return i.Fr ? S : (0, r.jsxs)(r.Fragment, {
      children: [I, e && !(0, b.jq)(o) ? (0, r.jsx)(p.Ay, {
        guildId: m,
        channelId: o,
        className: O.$P
      }, null != m ? m : o) : null, D && (0, r.jsx)(E.Ay.Divider, {}), k && !U ? (0, r.jsx)(f.A, {}) : null, G && j && null != L && !M && l === y.rbe.GROUP_DM && (0, r.jsxs)("div", {
        className: O.pc,
        children: [(0, r.jsx)(E.Ay.Divider, {}), (0, r.jsx)(_.A, {
          onClick: () => s.A.toggleParticipantsList(L, !M)
        })]
      })]
    })
  }
  return (0, r.jsx)(E.Ay, {
    className: n,
    innerClassName: g,
    toolbar: V(),
    transparent: v,
    hidden: A,
    onDoubleClick: () => N(x),
    "aria-label": T,
    "aria-labelledby": C,
    role: R,
    scrollable: w,
    children: t
  })
}

function R(e) {
  let {
    children: t,
    className: n,
    "aria-label": i,
    "aria-labelledby": a,
    role: s,
    disableDoubleClick: o
  } = e;
  return (0, r.jsx)(E.Ay, {
    className: n,
    onDoubleClick: () => N(o),
    "aria-label": i,
    "aria-labelledby": a,
    role: s,
    children: t
  })
}

function P(e) {
  let {
    isAuthenticated: t = true
  } = e, n = T(e, ["isAuthenticated"]), {
    analyticsLocations: i
  } = (0, l.Ay)(o.A.HEADER_BAR);
  return (0, r.jsx)(l.f5, {
    value: i,
    children: t ? (0, r.jsx)(w, S(A({}, n), {
      className: n.className
    })) : (0, r.jsx)(R, S(A({}, n), {
      className: n.className
    }))
  })
}
P.Title = Chunk58736.Ay.Title, P.Icon = Chunk58736.Ay.Icon, P.ChannelIcon = Chunk58736.Ay.ChannelIcon, P.Divider = Chunk58736.Ay.Divider, P.Caret = Chunk58736.Ay.Caret;
let D = P