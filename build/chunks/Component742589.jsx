/** Chunk was on 46673 **/
/** chunk id: 742589, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => D,
  I: () => m
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

function P(e) {
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

function y(e, t) {
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
async function m(e) {
  if (!e && (0, I.isMac)() && I.isPlatformEmbedded) {
    var t, n, r;
    let e = null != (t = await (null == (n = (r = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? true : n.call(r))) ? t : "Maximize";
    "Minimize" === e ? O.Ay.minimize() : "Maximize" === e && O.Ay.maximize()
  }
}

function f(e) {
  let {
    children: t,
    className: n,
    channelId: o,
    channelType: s,
    guildId: I,
    innerClassname: O,
    transparent: P = false,
    hidden: y = false,
    toolbar: f,
    mobileToolbar: C,
    "aria-label": g,
    "aria-labelledby": D,
    scrollable: h,
    role: b,
    hideSearch: U,
    showDivider: M,
    disableDoubleClick: j
  } = e, v = null == o || (0, R.jq)(o) ? null : o, k = (0, l.bG)([T.A], () => T.A.isInChannel(v) || false), L = (0, l.bG)([c.A], () => null != v && c.A.getParticipantsListOpen(v)), {
    enabled: x,
    inInbox: G
  } = E.A.useExperiment({
    location: "HeaderBar"
  }), {
    hasParticipantsPanel: w
  } = (0, u.A)({
    location: "HeaderBar"
  });
  return (0, r.jsx)(N.Ay, {
    className: n,
    innerClassName: O,
    toolbar: function() {
      if (null == f) return null;
      let e = null != o && !U;
      return i.Fr ? C : (0, r.jsxs)(r.Fragment, {
        children: [f, e && !(0, R.jq)(o) ? (0, r.jsx)(_.Ay, {
          guildId: I,
          channelId: o,
          className: S.$P
        }, null != I ? I : o) : null, M && (0, r.jsx)(N.Ay.Divider, {}), x && !G ? (0, r.jsx)(d.A, {}) : null, w && k && null != v && !L && s === p.rbe.GROUP_DM && (0, r.jsxs)("div", {
          className: S.pc,
          children: [(0, r.jsx)(N.Ay.Divider, {}), (0, r.jsx)(A.A, {
            onClick: () => a.A.toggleParticipantsList(v, !L)
          })]
        })]
      })
    }(),
    transparent: P,
    hidden: y,
    onDoubleClick: () => m(j),
    "aria-label": g,
    "aria-labelledby": D,
    role: b,
    scrollable: h,
    children: t
  })
}

function C(e) {
  let {
    children: t,
    className: n,
    "aria-label": i,
    "aria-labelledby": l,
    role: a,
    disableDoubleClick: o
  } = e;
  return (0, r.jsx)(N.Ay, {
    className: n,
    onDoubleClick: () => m(o),
    "aria-label": i,
    "aria-labelledby": l,
    role: a,
    children: t
  })
}

function g(e) {
  let {
    isAuthenticated: t = true
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["isAuthenticated"]), {
    analyticsLocations: i
  } = (0, s.Ay)(o.A.HEADER_BAR);
  return (0, r.jsx)(s.f5, {
    value: i,
    children: t ? (0, r.jsx)(f, y(P({}, n), {
      className: n.className
    })) : (0, r.jsx)(C, y(P({}, n), {
      className: n.className
    }))
  })
}
g.Title = Chunk58736.Ay.Title, g.Icon = Chunk58736.Ay.Icon, g.ChannelIcon = Chunk58736.Ay.ChannelIcon, g.Divider = Chunk58736.Ay.Divider, g.Caret = Chunk58736.Ay.Caret;
let D = g