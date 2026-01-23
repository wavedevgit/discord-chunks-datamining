/** Chunk was on 97492 **/
/** chunk id: 977851, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => x
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk367513 = require("./367513.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk313961 = require("./313961.js"),
  Chunk384059 = require("./384059.js"),
  Chunk222823 = require("./222823.js"),
  Chunk309010 = require("./309010.js"),
  Chunk741961 = require("./741961.js"),
  Chunk234320 = require("./234320.jsx"),
  Chunk20465 = require("./20465.jsx"),
  Chunk108460 = require("./108460.jsx"),
  Chunk709562 = require("./709562.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function j(e) {
  let t = (0, o.bG)([g.A], () => !(0, a.isEmpty)(g.A.getTypingUsers(e)), [e]),
    n = (0, o.bG)([f.A], () => f.A.getVoiceChannelId() === e, [e]),
    {
      unreadCount: r,
      mentionCount: l
    } = (0, o.cf)([h.Ay], () => ({
      unreadCount: h.Ay.getUnreadCount(e),
      mentionCount: h.Ay.getMentionCount(e)
    }), [e]);
  return {
    unreadCount: r,
    mentionCount: l,
    voiceChannelIsSelected: n,
    isTyping: t
  }
}

function v(e) {
  let {
    className: t,
    channelId: n
  } = e, {
    unreadCount: l,
    mentionCount: i,
    isTyping: s,
    voiceChannelIsSelected: a
  } = j(n);
  return (0, r.jsx)(A.A, {
    className: t,
    unreadCount: l,
    mentionCount: i,
    isTyping: s,
    canBadge: a
  })
}

function x(e) {
  let t, {
      channelId: n,
      className: i,
      showingClassName: a,
      onClick: h,
      inPopout: f,
      showRequestToSpeakSidebar: g,
      toggleRequestToSpeakSidebar: A
    } = e,
    x = function(e, t) {
      if (null == e) return {};
      var n, r, l, i = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
      }
      if (i = function(e, t) {
          if (null == e) return {};
          var n, r, l = {},
            i = Object.getOwnPropertyNames(e);
          for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
          return l
        }(e, t), Object.getOwnPropertySymbols)
        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }(e, ["channelId", "className", "showingClassName", "onClick", "inPopout", "showRequestToSpeakSidebar", "toggleRequestToSpeakSidebar"]),
    {
      parentAnalyticsLocation: E
    } = (0, u.Ay)(),
    {
      disabled: C
    } = x,
    S = l.useRef(null),
    I = (0, o.bG)([d.A], () => d.A.getChatOpen(n), [n]),
    {
      isShowing: N,
      unreadCount: T,
      mentionCount: P
    } = function(e) {
      let {
        unreadCount: t,
        mentionCount: n,
        isTyping: r
      } = j(e), [i, s] = l.useState(false);
      return l.useEffect(() => {
        s(t > 0);
        let e = setTimeout(() => {
          s(false)
        }, b.R);
        return () => {
          clearTimeout(e), s(false)
        }
      }, [t]), {
        isShowing: i || n > 0 || r,
        unreadCount: t,
        mentionCount: n
      }
    }(n),
    w = l.useCallback(() => {
      (0, p.X)(E, p.O.CHAT, !I), null == h || h(), !I && g && (null == A || A()), c.A.updateChatOpen(n, !I)
    }, [n, I, h, g, A, E]),
    R = l.useCallback(e => {
      let {
        className: t
      } = e;
      return (0, r.jsx)(v, {
        className: t,
        channelId: n
      })
    }, [n]),
    D = l.useCallback(() => {
      var e;
      null == (e = S.current) || e.focus()
    }, []);
  (0, m.Vo)({
    event: _.jej.FOCUS_CHAT_BUTTON,
    handler: C ? null : D
  });
  let [M, L] = l.useState(false), k = l.useCallback(() => {
    f && L(true)
  }, [f]);
  (0, m.Vo)({
    event: _.jej.SHOW_TEXT_IN_VOICE_POPOUT_COMING_SOON_TIP,
    handler: k
  }), l.useEffect(() => {
    let e;
    return M && (e = setTimeout(() => {
      L(false)
    }, 3e3)), () => {
      clearTimeout(e)
    }
  }, [M]);
  let G = [t = f && C ? O.intl.string(O.t.DPgc5h) : I ? O.intl.string(O.t.nthdxB) : O.intl.string(O.t["5KxXrK"])];
  return P > 0 && G.push(O.intl.formatToPlainString(O.t["3l1GOx"], {
    mentionCount: P
  })), T > 0 && G.push(O.intl.string(O.t.x5zAGZ)), (0, r.jsx)(y.A, function(e) {
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
    buttonRef: S,
    onClick: w,
    label: t,
    "aria-label": G.join(", "),
    iconComponent: R,
    tooltipPosition: "bottom",
    wrapperClassName: s()(i, null != a && {
      [a]: N
    }),
    forceTooltipOpen: M
  }, x))
}