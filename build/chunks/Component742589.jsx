/** Chunk was on 72450 **/
/** chunk id: 742589, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => w,
  I: () => v
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

function _(e) {
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

function y(e, t) {
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
async function v(e) {
  if (!e && (0, E.isMac)() && E.isPlatformEmbedded) {
    var t, n, i;
    let e = null != (t = await (null == (n = (i = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) ? true : n.call(i))) ? t : "Maximize";
    "Minimize" === e ? O.Ay.minimize() : "Maximize" === e && O.Ay.maximize()
  }
}

function S(e) {
  let {
    children: t,
    className: n,
    channelId: o,
    channelType: a,
    guildId: E,
    innerClassname: O,
    transparent: _ = false,
    hidden: y = false,
    toolbar: S,
    mobileToolbar: R,
    "aria-label": L,
    "aria-labelledby": w,
    scrollable: I,
    role: j,
    hideSearch: N,
    showDivider: T,
    disableDoubleClick: x
  } = e, k = null == o || (0, b.jq)(o) ? null : o, P = (0, l.bG)([g.A], () => g.A.isInChannel(k) || false), D = (0, l.bG)([c.A], () => null != k && c.A.getParticipantsListOpen(k)), {
    enabled: U,
    inInbox: M
  } = d.A.useExperiment({
    location: "HeaderBar"
  }), {
    hasParticipantsPanel: V
  } = (0, u.A)({
    location: "HeaderBar"
  });
  return (0, i.jsx)(m.Ay, {
    className: n,
    innerClassName: O,
    toolbar: function() {
      if (null == S) return null;
      let e = null != o && !N;
      return r.Fr ? R : (0, i.jsxs)(i.Fragment, {
        children: [S, e && !(0, b.jq)(o) ? (0, i.jsx)(p.Ay, {
          guildId: E,
          channelId: o,
          className: A.$P
        }, null != E ? E : o) : null, T && (0, i.jsx)(m.Ay.Divider, {}), U && !M ? (0, i.jsx)(h.A, {}) : null, V && P && null != k && !D && a === f.rbe.GROUP_DM && (0, i.jsxs)("div", {
          className: A.pc,
          children: [(0, i.jsx)(m.Ay.Divider, {}), (0, i.jsx)(C.A, {
            onClick: () => s.A.toggleParticipantsList(k, !D)
          })]
        })]
      })
    }(),
    transparent: _,
    hidden: y,
    onDoubleClick: () => v(x),
    "aria-label": L,
    "aria-labelledby": w,
    role: j,
    scrollable: I,
    children: t
  })
}

function R(e) {
  let {
    children: t,
    className: n,
    "aria-label": r,
    "aria-labelledby": l,
    role: s,
    disableDoubleClick: o
  } = e;
  return (0, i.jsx)(m.Ay, {
    className: n,
    onDoubleClick: () => v(o),
    "aria-label": r,
    "aria-labelledby": l,
    role: s,
    children: t
  })
}

function L(e) {
  let {
    isAuthenticated: t = true
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, i, r, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, i, r = {},
          l = Object.getOwnPropertyNames(e);
        for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
        return r
      }(e, t), Object.getOwnPropertySymbols)
      for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
    return l
  }(e, ["isAuthenticated"]), {
    analyticsLocations: r
  } = (0, a.Ay)(o.A.HEADER_BAR);
  return (0, i.jsx)(a.f5, {
    value: r,
    children: t ? (0, i.jsx)(S, y(_({}, n), {
      className: n.className
    })) : (0, i.jsx)(R, y(_({}, n), {
      className: n.className
    }))
  })
}
L.Title = Chunk58736.Ay.Title, L.Icon = Chunk58736.Ay.Icon, L.ChannelIcon = Chunk58736.Ay.ChannelIcon, L.Divider = Chunk58736.Ay.Divider, L.Caret = Chunk58736.Ay.Caret;
let w = L