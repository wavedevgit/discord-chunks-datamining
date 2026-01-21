/** Chunk was on 82124 **/
/** chunk id: 616286, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => E
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  let t = (0, s.e7)([g.Z], () => !(0, o.isEmpty)(g.Z.getTypingUsers(e)), [e]),
    n = (0, s.e7)([h.Z], () => h.Z.getVoiceChannelId() === e, [e]),
    {
      unreadCount: r,
      mentionCount: i
    } = (0, s.cj)([f.ZP], () => ({
      unreadCount: f.ZP.getUnreadCount(e),
      mentionCount: f.ZP.getMentionCount(e)
    }), [e]);
  return {
    unreadCount: r,
    mentionCount: i,
    voiceChannelIsSelected: n,
    isTyping: t
  }
}

function C(e) {
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

function E(e) {
  let t;
  var {
    channelId: n,
    className: l,
    showingClassName: o,
    onClick: f,
    inPopout: h,
    showRequestToSpeakSidebar: g,
    toggleRequestToSpeakSidebar: y
  } = e, E = function(e, t) {
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
    parentAnalyticsLocation: S
  } = (0, u.ZP)(), {
    disabled: _
  } = E, I = i.useRef(null), P = (0, s.e7)([d.Z], () => d.Z.getChatOpen(n), [n]), {
    isShowing: Z,
    unreadCount: N,
    mentionCount: T
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
    (0, p.v)(S, p.d.CHAT, !P), null == f || f(), !P && g && (null == y || y()), c.Z.updateChatOpen(n, !P)
  }, [n, P, f, g, y, S]), w = i.useCallback(e => {
    let {
      className: t
    } = e;
    return (0, r.jsx)(C, {
      className: t,
      channelId: n
    })
  }, [n]), R = i.useCallback(() => {
    var e;
    null == (e = I.current) || e.focus()
  }, []);
  (0, m.yp)({
    event: O.CkL.FOCUS_CHAT_BUTTON,
    handler: _ ? null : R
  });
  let [D, M] = i.useState(false), k = i.useCallback(() => {
    h && M(true)
  }, [h]);
  (0, m.yp)({
    event: O.CkL.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP,
    handler: k
  }), i.useEffect(() => {
    let e;
    return D && (e = setTimeout(() => {
      M(false)
    }, 3e3)), () => {
      clearTimeout(e)
    }
  }, [D]);
  let L = [t = h && _ ? j.intl.string(j.t.DPgc5h) : P ? j.intl.string(j.t.nthdxB) : j.intl.string(j.t["5KxXrK"])];
  return T > 0 && L.push(j.intl.formatToPlainString(j.t["3l1GOx"], {
    mentionCount: T
  })), N > 0 && L.push(j.intl.string(j.t.x5zAGZ)), (0, r.jsx)(v.Z, function(e) {
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
    forceTooltipOpen: D
  }, E))
}