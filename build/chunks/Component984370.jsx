/** Chunk was on 11868 **/
/** chunk id: 984370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => P,
  Z: () => h
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

function A(e) {
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
async function P(e) {
  if (!e && (0, p.isMac)() && p.isPlatformEmbedded) {
    var t, n, r;
    let e = null != (r = await (null == (t = (n = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? true : t.call(n))) ? r : "Maximize";
    "Minimize" === e ? N.ZP.minimize() : "Maximize" === e && N.ZP.maximize()
  }
}

function C(e) {
  let {
    children: t,
    className: n,
    channelId: o,
    channelType: c,
    guildId: p,
    innerClassname: N,
    transparent: A = false,
    showToolbar: g = true,
    toolbar: C,
    mobileToolbar: D,
    "aria-label": y,
    "aria-labelledby": h,
    scrollable: b,
    role: U,
    hideSearch: M,
    showDivider: v,
    disableDoubleClick: Z
  } = e, L = null == o || (0, m.AB)(o) ? null : o, k = (0, l.e7)([O.Z], () => O.Z.isInChannel(L) || false), j = (0, l.e7)([s.Z], () => null != L && s.Z.getParticipantsListOpen(L)), {
    enabled: x,
    inInbox: F
  } = d.Z.useExperiment({
    location: "HeaderBar"
  }), {
    hasParticipantsPanel: G
  } = (0, u.Z)({
    location: "HeaderBar"
  }), V = (0, E.$)({
    location: "HeaderBar"
  });
  return (0, r.jsx)(f.ZP, {
    className: n,
    innerClassName: N,
    toolbar: function() {
      if (null == C) return null;
      let e = null != o && !M && !V;
      return i.tq ? D : (0, r.jsxs)(r.Fragment, {
        children: [C, e && !(0, m.AB)(o) ? (0, r.jsx)(I.Z, {
          guildId: p,
          channelId: o,
          className: R.search
        }, null != p ? p : o) : null, v && (0, r.jsx)(f.ZP.Divider, {}), x && !F ? (0, r.jsx)(_.Z, {}) : null, G && k && null != L && !j && c === S.d4z.GROUP_DM && (0, r.jsxs)("div", {
          className: R.controlButtonWrapper,
          children: [(0, r.jsx)(f.ZP.Divider, {}), (0, r.jsx)(T.Z, {
            onClick: () => a.Z.toggleParticipantsList(L, !j)
          })]
        })]
      })
    }(),
    transparent: A,
    showToolbar: g,
    onDoubleClick: () => P(Z),
    "aria-label": y,
    "aria-labelledby": h,
    role: U,
    scrollable: b,
    children: t
  })
}

function D(e) {
  let {
    children: t,
    className: n,
    "aria-label": i,
    "aria-labelledby": l,
    role: a,
    disableDoubleClick: o
  } = e;
  return (0, r.jsx)(f.ZP, {
    className: n,
    onDoubleClick: () => P(o),
    "aria-label": i,
    "aria-labelledby": l,
    role: a,
    children: t
  })
}

function y(e) {
  var {
    isAuthenticated: t = true
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["isAuthenticated"]);
  let {
    analyticsLocations: i
  } = (0, c.ZP)(o.Z.HEADER_BAR);
  return (0, r.jsx)(c.Gt, {
    value: i,
    children: t ? (0, r.jsx)(C, g(A({}, n), {
      className: n.className
    })) : (0, r.jsx)(D, g(A({}, n), {
      className: n.className
    }))
  })
}
y.Title = Chunk665149.ZP.Title, y.Icon = Chunk665149.ZP.Icon, y.ChannelIcon = Chunk665149.ZP.ChannelIcon, y.Divider = Chunk665149.ZP.Divider, y.Caret = Chunk665149.ZP.Caret;
let h = y