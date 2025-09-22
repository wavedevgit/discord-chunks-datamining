/** Chunk was on 62987 **/
/** chunk id: 616286, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => O
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk475179 = require("./475179.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk358221 = require("./358221.js"),
  Chunk522651 = require("./522651.js"),
  Chunk306680 = require("./306680.js"),
  Chunk944486 = require("./944486.js"),
  Chunk111583 = require("./111583.js"),
  Chunk459273 = require("./459273.jsx"),
  Chunk880831 = require("./880831.jsx"),
  Chunk774168 = require("./774168.jsx"),
  Chunk871499 = require("./871499.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function x(e) {
  let t = (0, s.e7)([m.Z], () => !(0, o.isEmpty)(m.Z.getTypingUsers(e)), [e]),
    n = (0, s.e7)([f.Z], () => f.Z.getVoiceChannelId() === e, [e]),
    {
      unreadCount: r,
      mentionCount: i
    } = (0, s.cj)([h.ZP], () => ({
      unreadCount: h.ZP.getUnreadCount(e),
      mentionCount: h.ZP.getMentionCount(e)
    }), [e]);
  return {
    unreadCount: r,
    mentionCount: i,
    voiceChannelIsSelected: n,
    isTyping: t
  }
}

function j(e) {
  let {
    className: t,
    channelId: n
  } = e, {
    unreadCount: i,
    mentionCount: l,
    isTyping: a,
    voiceChannelIsSelected: o
  } = x(n);
  return (0, r.jsx)(y.Z, {
    className: t,
    unreadCount: i,
    mentionCount: l,
    isTyping: a,
    canBadge: o
  })
}

function O(e) {
  let t;
  var {
    channelId: n,
    className: l,
    showingClassName: o,
    onClick: h,
    inPopout: f,
    showRequestToSpeakSidebar: m,
    toggleRequestToSpeakSidebar: y
  } = e, O = function(e, t) {
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
  }(e, ["channelId", "className", "showingClassName", "onClick", "inPopout", "showRequestToSpeakSidebar", "toggleRequestToSpeakSidebar"]);
  let {
    parentAnalyticsLocation: E
  } = (0, u.ZP)(), {
    disabled: S
  } = O, I = i.useRef(null), P = (0, s.e7)([d.Z], () => d.Z.getChatOpen(n), [n]), {
    isShowing: Z,
    unreadCount: T,
    mentionCount: N
  } = function(e) {
    let {
      unreadCount: t,
      mentionCount: n,
      isTyping: r
    } = x(e), [l, a] = i.useState(false);
    return i.useEffect(() => {
      a(t > 0);
      let e = setTimeout(() => {
        a(false)
      }, b.z);
      return () => {
        clearTimeout(e), a(false)
      }
    }, [t]), {
      isShowing: l || n > 0 || r,
      unreadCount: t,
      mentionCount: n
    }
  }(n), A = i.useCallback(() => {
    (0, p.v)(E, p.d.CHAT, !P), null == h || h(), !P && m && (null == y || y()), c.Z.updateChatOpen(n, !P)
  }, [n, P, h, m, y, E]), w = i.useCallback(e => {
    let {
      className: t
    } = e;
    return (0, r.jsx)(j, {
      className: t,
      channelId: n
    })
  }, [n]), R = i.useCallback(() => {
    var e;
    null == (e = I.current) || e.focus()
  }, []);
  (0, g.yp)({
    event: C.CkL.FOCUS_CHAT_BUTTON,
    handler: S ? null : R
  });
  let [M, D] = i.useState(false), k = i.useCallback(() => {
    f && D(true)
  }, [f]);
  (0, g.yp)({
    event: C.CkL.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP,
    handler: k
  }), i.useEffect(() => {
    let e;
    return M && (e = setTimeout(() => {
      D(false)
    }, 3e3)), () => {
      clearTimeout(e)
    }
  }, [M]);
  let L = [t = f && S ? v.intl.string(v.t.DPgc5u) : P ? v.intl.string(v.t.nthdxM) : v.intl.string(v.t["5KxXrK"])];
  return N > 0 && L.push(v.intl.formatToPlainString(v.t["3l1GOz"], {
    mentionCount: N
  })), T > 0 && L.push(v.intl.string(v.t.x5zAGR)), (0, r.jsx)(_.Z, function(e) {
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
  }({
    buttonRef: I,
    onClick: A,
    label: t,
    "aria-label": L.join(", "),
    iconComponent: w,
    tooltipPosition: "bottom",
    wrapperClassName: a()(l, null != o && {
      [o]: Z
    }),
    forceTooltipOpen: M
  }, O))
}