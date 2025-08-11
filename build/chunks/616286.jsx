/** Chunk was on web.js **/
/** chunk id: 616286, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => R
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk475179 = require("./475179.js"),
  Chunk906732 = require("./906732.js"),
  Chunk358221 = require("./358221.js"),
  Chunk522651 = require("./522651.js"),
  Chunk306680 = require("./306680.js"),
  Chunk944486 = require("./944486.js"),
  Chunk111583 = require("./111583.js"),
  Chunk459273 = require("./459273.jsx"),
  Chunk880831 = require("./880831.js"),
  Chunk774168 = require("./774168.js"),
  Chunk871499 = require("./871499.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

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

function T(e, t) {
  if (null == e) return {};
  var n, r, i = S(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function A(e) {
  let t = (0, l.e7)([h.Z], () => !(0, s.isEmpty)(h.Z.getTypingUsers(e)), [e]),
    n = (0, l.e7)([p.Z], () => p.Z.getVoiceChannelId() === e, [e]),
    {
      unreadCount: r,
      mentionCount: i
    } = (0, l.cj)([_.ZP], () => ({
      unreadCount: _.ZP.getUnreadCount(e),
      mentionCount: _.ZP.getMentionCount(e)
    }), [e]);
  return {
    unreadCount: r,
    mentionCount: i,
    voiceChannelIsSelected: n,
    isTyping: t
  }
}

function N(e) {
  let {
    unreadCount: t,
    mentionCount: n,
    isTyping: r
  } = A(e), [o, a] = i.useState(false);
  return i.useEffect(() => {
    a(t > 0);
    let e = setTimeout(() => {
      a(false)
    }, g.z);
    return () => {
      clearTimeout(e), a(false)
    }
  }, [t]), {
    isShowing: o || n > 0 || r,
    unreadCount: t,
    mentionCount: n
  }
}

function C(e) {
  let {
    className: t,
    channelId: n
  } = e, {
    unreadCount: i,
    mentionCount: o,
    isTyping: a,
    voiceChannelIsSelected: s
  } = A(n);
  return <E.Z className={t} unreadCount={i} mentionCount={o} isTyping={a} canBadge={s} />
}

function R(e) {
  let t;
  var {
    channelId: n,
    className: o,
    showingClassName: s,
    onClick: _,
    inPopout: p,
    showRequestToSpeakSidebar: h,
    toggleRequestToSpeakSidebar: g
  } = e, E = T(e, ["channelId", "className", "showingClassName", "onClick", "inPopout", "showRequestToSpeakSidebar", "toggleRequestToSpeakSidebar"]);
  let {
    parentAnalyticsLocation: v
  } = (0, u.ZP)(), {
    disabled: S
  } = E, A = i.useRef(null), R = (0, l.e7)([d.Z], () => d.Z.getChatOpen(n), [n]), {
    isShowing: P,
    unreadCount: w,
    mentionCount: D
  } = N(n), L = i.useCallback(() => {
    (0, f.v)(v, f.d.CHAT, !R), null == _ || _(), !R && h && (null == g || g()), c.Z.updateChatOpen(n, !R)
  }, [n, R, _, h, g, v]), x = i.useCallback(e => {
    let {
      className: t
    } = e;
    return <C className={t} channelId={n} />
  }, [n]), M = i.useCallback(() => {
    var e;
    null == (e = A.current) || e.focus()
  }, []);
  (0, m.yp)({
    event: y.CkL.FOCUS_CHAT_BUTTON,
    handler: S ? null : M
  });
  let [k, j] = i.useState(false), U = i.useCallback(() => {
    p && j(true)
  }, [p]);
  (0, m.yp)({
    event: y.CkL.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP,
    handler: U
  }), i.useEffect(() => {
    let e;
    return k && (e = setTimeout(() => {
      j(false)
    }, 3e3)), () => {
      clearTimeout(e)
    }
  }, [k]);
  let G = [t = p && S ? O.intl.string(O.t.DPgc5u) : R ? O.intl.string(O.t.nthdxM) : O.intl.string(O.t["5KxXrK"])];
  return D > 0 && G.push(O.intl.formatToPlainString(O.t["3l1GOz"], {
    mentionCount: D
  })), w > 0 && G.push(O.intl.string(O.t.x5zAGR)), <b.Z{...I({
    buttonRef: A,
    onClick: L,
    label: t,
    "aria-label": G.join(", "),
    iconComponent: x,
    tooltipPosition: "bottom",
    wrapperClassName: a()(o, null != s && {
      [s]: P
    }),
    forceTooltipOpen: k
  }, E)} />
}