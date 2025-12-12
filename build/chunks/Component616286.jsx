/** Chunk was on 40184 **/
/** chunk id: 616286, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => j
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
  let t = (0, s.e7)([m.Z], () => !(0, o.isEmpty)(m.Z.getTypingUsers(e)), [e]),
    n = (0, s.e7)([h.Z], () => h.Z.getVoiceChannelId() === e, [e]),
    {
      unreadCount: i,
      mentionCount: r
    } = (0, s.cj)([f.ZP], () => ({
      unreadCount: f.ZP.getUnreadCount(e),
      mentionCount: f.ZP.getMentionCount(e)
    }), [e]);
  return {
    unreadCount: i,
    mentionCount: r,
    voiceChannelIsSelected: n,
    isTyping: t
  }
}

function E(e) {
  let {
    className: t,
    channelId: n
  } = e, {
    unreadCount: r,
    mentionCount: l,
    isTyping: a,
    voiceChannelIsSelected: o
  } = x(n);
  return (0, i.jsx)(C.Z, {
    className: t,
    unreadCount: r,
    mentionCount: l,
    isTyping: a,
    canBadge: o
  })
}

function j(e) {
  let t;
  var {
    channelId: n,
    className: l,
    showingClassName: o,
    onClick: f,
    inPopout: h,
    showRequestToSpeakSidebar: m,
    toggleRequestToSpeakSidebar: C
  } = e, j = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        l = Object.keys(e);
      for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["channelId", "className", "showingClassName", "onClick", "inPopout", "showRequestToSpeakSidebar", "toggleRequestToSpeakSidebar"]);
  let {
    parentAnalyticsLocation: S
  } = (0, u.ZP)(), {
    disabled: _
  } = j, P = r.useRef(null), I = (0, s.e7)([d.Z], () => d.Z.getChatOpen(n), [n]), {
    isShowing: Z,
    unreadCount: T,
    mentionCount: N
  } = function(e) {
    let {
      unreadCount: t,
      mentionCount: n,
      isTyping: i
    } = x(e), [l, a] = r.useState(false);
    return r.useEffect(() => {
      a(t > 0);
      let e = setTimeout(() => {
        a(false)
      }, b.z);
      return () => {
        clearTimeout(e), a(false)
      }
    }, [t]), {
      isShowing: l || n > 0 || i,
      unreadCount: t,
      mentionCount: n
    }
  }(n), A = r.useCallback(() => {
    (0, p.v)(S, p.d.CHAT, !I), null == f || f(), !I && m && (null == C || C()), c.Z.updateChatOpen(n, !I)
  }, [n, I, f, m, C, S]), w = r.useCallback(e => {
    let {
      className: t
    } = e;
    return (0, i.jsx)(E, {
      className: t,
      channelId: n
    })
  }, [n]), M = r.useCallback(() => {
    var e;
    null == (e = P.current) || e.focus()
  }, []);
  (0, g.yp)({
    event: v.CkL.FOCUS_CHAT_BUTTON,
    handler: _ ? null : M
  });
  let [R, L] = r.useState(false), D = r.useCallback(() => {
    h && L(true)
  }, [h]);
  (0, g.yp)({
    event: v.CkL.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP,
    handler: D
  }), r.useEffect(() => {
    let e;
    return R && (e = setTimeout(() => {
      L(false)
    }, 3e3)), () => {
      clearTimeout(e)
    }
  }, [R]);
  let k = [t = h && _ ? O.intl.string(O.t.DPgc5h) : I ? O.intl.string(O.t.nthdxB) : O.intl.string(O.t["5KxXrK"])];
  return N > 0 && k.push(O.intl.formatToPlainString(O.t["3l1GOx"], {
    mentionCount: N
  })), T > 0 && k.push(O.intl.string(O.t.x5zAGZ)), (0, i.jsx)(y.Z, function(e) {
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
  }({
    buttonRef: P,
    onClick: A,
    label: t,
    "aria-label": k.join(", "),
    iconComponent: w,
    tooltipPosition: "bottom",
    wrapperClassName: a()(l, null != o && {
      [o]: Z
    }),
    forceTooltipOpen: R
  }, j))
}