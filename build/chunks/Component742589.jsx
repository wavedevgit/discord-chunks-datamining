/** Chunk was on 32502 **/
/** chunk id: 742589, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _,
  I: () => C
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

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function C(e) {
  if (!e && (0, m.isMac)() && m.isPlatformEmbedded) {
    var t, n, i;
    let e = null != (t = await (null == (n = (i = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? true : n.call(i))) ? t : "Maximize";
    "Minimize" === e ? A.Ay.minimize() : "Maximize" === e && A.Ay.maximize()
  }
}

function v(e) {
  let {
    children: t,
    className: n,
    channelId: a,
    channelType: o,
    guildId: m,
    innerClassname: A,
    transparent: S = false,
    hidden: f = false,
    toolbar: v,
    mobileToolbar: y,
    "aria-label": T,
    "aria-labelledby": _,
    scrollable: N,
    role: I,
    hideSearch: P,
    showDivider: R,
    disableDoubleClick: L
  } = e, G = null == a || (0, O.jq)(a) ? null : a, D = (0, s.bG)([p.A], () => p.A.isInChannel(G) || false), k = (0, s.bG)([c.A], () => null != G && c.A.getParticipantsListOpen(G)), {
    enabled: w,
    inInbox: V
  } = u.A.useExperiment({
    location: "HeaderBar"
  }), {
    hasParticipantsPanel: M
  } = (0, d.A)({
    location: "HeaderBar"
  });
  return (0, i.jsx)(b.Ay, {
    className: n,
    innerClassName: A,
    toolbar: function() {
      if (null == v) return null;
      let e = null != a && !P;
      return l.Fr ? y : (0, i.jsxs)(i.Fragment, {
        children: [v, e && !(0, O.jq)(a) ? (0, i.jsx)(g.Ay, {
          guildId: m,
          channelId: a,
          className: E.$P
        }, null != m ? m : a) : null, R && (0, i.jsx)(b.Ay.Divider, {}), w && !V ? (0, i.jsx)(h.A, {}) : null, M && D && null != G && !k && o === j.rbe.GROUP_DM && (0, i.jsxs)("div", {
          className: E.pc,
          children: [(0, i.jsx)(b.Ay.Divider, {}), (0, i.jsx)(x.A, {
            onClick: () => r.A.toggleParticipantsList(G, !k)
          })]
        })]
      })
    }(),
    transparent: S,
    hidden: f,
    onDoubleClick: () => C(L),
    "aria-label": T,
    "aria-labelledby": _,
    role: I,
    scrollable: N,
    children: t
  })
}

function y(e) {
  let {
    children: t,
    className: n,
    "aria-label": l,
    "aria-labelledby": s,
    role: r,
    disableDoubleClick: a
  } = e;
  return (0, i.jsx)(b.Ay, {
    className: n,
    onDoubleClick: () => C(a),
    "aria-label": l,
    "aria-labelledby": s,
    role: r,
    children: t
  })
}

function T(e) {
  let {
    isAuthenticated: t = true
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, i, l, s = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) i = n[l], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
      return s
    }
    if (s = function(e, t) {
        if (null == e) return {};
        var n, i, l = {},
          s = Object.getOwnPropertyNames(e);
        for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) i = n[l], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
    return s
  }(e, ["isAuthenticated"]), {
    analyticsLocations: l
  } = (0, o.Ay)(a.A.HEADER_BAR);
  return (0, i.jsx)(o.f5, {
    value: l,
    children: t ? (0, i.jsx)(v, f(S({}, n), {
      className: n.className
    })) : (0, i.jsx)(y, f(S({}, n), {
      className: n.className
    }))
  })
}
T.Title = Chunk58736.Ay.Title, T.Icon = Chunk58736.Ay.Icon, T.ChannelIcon = Chunk58736.Ay.ChannelIcon, T.Divider = Chunk58736.Ay.Divider, T.Caret = Chunk58736.Ay.Caret;
let _ = T