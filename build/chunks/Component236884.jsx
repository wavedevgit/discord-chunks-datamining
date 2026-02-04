/** Chunk was on 7685 **/
/** chunk id: 236884, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => et
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk172218 = require("./172218.js"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk960076 = require("./960076.js"),
  Chunk566903 = require("./566903.js"),
  Chunk397244 = require("./397244.js"),
  Chunk714114 = require("./714114.js"),
  Chunk729551 = require("./729551.jsx"),
  Chunk864436 = require("./864436.jsx"),
  Chunk835072 = require("./835072.jsx"),
  Chunk87664 = require("./87664.js"),
  Chunk47167 = require("./47167.js"),
  Chunk506326 = require("./506326.jsx"),
  Chunk490427 = require("./490427.js"),
  Chunk609425 = require("./609425.js"),
  Chunk922301 = require("./922301.js"),
  Chunk750112 = require("./750112.jsx"),
  Chunk769015 = require("./769015.jsx"),
  Chunk834757 = require("./834757.js"),
  Chunk145497 = require("./145497.jsx"),
  Chunk534400 = require("./534400.jsx"),
  Chunk854627 = require("./854627.js"),
  Chunk10862 = require("./10862.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk290863 = require("./290863.js"),
  Chunk309010 = require("./309010.js"),
  Chunk461213 = require("./461213.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk914853 = require("./914853.js"),
  Chunk1404 = require("./1404.jsx"),
  Chunk578093 = require("./578093.jsx"),
  Chunk20796 = require("./20796.jsx"),
  Chunk67103 = require("./67103.js"),
  Chunk576420 = require("./576420.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk783346 = require("./783346.js");

function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function X(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Q = Chunk397927._3J.SIZE_32,
  Z = [Chunk506326.iq, Chunk506326.tR, Chunk506326.K7, Chunk506326.sp, Chunk506326.MK];

function q(e) {
  let t, {
      channel: n,
      textVariant: s,
      activities: o,
      applicationStream: c
    } = e,
    h = (0, a.bG)([U.default], () => U.default.getCurrentUser()),
    g = (0, u.S31)(W.clD.ONLINE),
    f = (0, E.Ay)(n),
    A = (0, a.bG)([j.A], () => j.A.getGuild(n.getGuildId())),
    y = null == A ? true : A.name;
  (0, m.A)(null == h ? true : h.id);
  let S = (null == c ? true : c.discoverable) !== false ? c : null,
    v = (0, N.AO)(S),
    O = n.isDM() || n.isGroupDM(),
    b = r.useMemo(() => {
      var e;
      return (0, i.uniqWith)(null != (e = null == o ? true : o.filter(e => {
        let {
          type: t,
          name: n
        } = e;
        return t !== W.$pd.CUSTOM_STATUS && t !== W.$pd.HANG_STATUS && n !== (null == v ? true : v.name)
      })) ? e : [], (e, t) => null != e.application_id && null != t.application_id && e.application_id === t.application_id || null != e.name && null != t.name && e.name === t.name)
    }, [o, null == v ? true : v.name]),
    _ = null == b ? true : b[0];
  return (0, l.jsxs)("div", {
    className: B.fE,
    children: [(t = (null == b ? true : b.length) > 0, (0, l.jsxs)("div", {
      className: B._9,
      children: [!t && !O && null != A && (0, l.jsxs)("div", {
        className: B.j1,
        children: [(0, l.jsx)(T.Ay, {
          guild: A,
          iconSize: 14
        }), (0, l.jsx)(u.Text, {
          className: B.J5,
          variant: s,
          color: "currentColor",
          lineClamp: 1,
          children: y
        }), (0, l.jsx)(u._BQ, {
          size: "xxs",
          color: "currentColor"
        })]
      }), (0, l.jsx)(x.A, {
        size: "custom",
        color: g,
        channel: n,
        className: B.WT
      }), (0, l.jsx)(u.Text, {
        variant: s,
        color: "currentColor",
        lineClamp: 1,
        className: B.Qo,
        children: f
      })]
    })), (() => {
      if (null == _) return null;
      let {
        text: e
      } = (0, d.A)(_, false), t = (0, I.f)(_);
      return null == e && null == t ? null : (0, l.jsxs)("div", {
        className: B._9,
        children: [null != t ? (0, l.jsx)(p.A, {
          icon: t,
          className: B.WT
        }) : true, null != e ? (0, l.jsx)(u.Text, {
          variant: s,
          color: "text-status-online",
          lineClamp: 1,
          children: e
        }) : true]
      })
    })()]
  })
}

function J(e) {
  let {
    user: t,
    activities: n,
    gameProfileEntry: i,
    relationshipType: o,
    isSuggestion: u,
    appContext: d,
    onPrimaryAction: p,
    onContextMenu: I,
    onFriendVisible: m,
    friendGroupId: E
  } = e, S = t.id, {
    avatarDecorationSrc: v,
    avatarSrc: O,
    eventHandlers: b
  } = (0, C.A)({
    userId: S,
    size: Q,
    animateOnHover: true,
    guildId: null
  }), N = r.useMemo(() => {
    let e = null != E ? E : "no-group",
      t = null != o ? o : "no-relationship";
    return "friends-widget-friend-row:".concat(S, ":").concat(e, ":").concat(t, ":").concat(u ? "suggestion" : "not-suggestion")
  }, [E, u, o, S]), T = (0, a.yK)([R.A], () => R.A.getActivities().filter(e => e.type === W.$pd.PLAYING && null != e.application_id)), {
    voiceChannel: _
  } = (0, g.A)({
    userId: t.id
  }), {
    status: x,
    applicationStream: M,
    isMobile: j,
    newStatus: P
  } = (0, a.cf)([w.A, D.A], () => {
    let e = w.A.getStatus(t.id),
      l = D.A.getAnyStreamForUser(t.id),
      r = w.A.isMobileOnline(t.id),
      i = (0, c.A)(null != n ? n : []) ? W.clD.STREAMING : e;
    return {
      status: e,
      applicationStream: l,
      isMobile: r,
      newStatus: i
    }
  }, [t.id, n]), U = T.length > 0, G = r.useCallback(e => {
    null == m || m(S, e, U)
  }, [m, S, U]), L = (0, s.K)(G), k = r.useCallback(() => {
    if (null != i) {
      let e = i.traits,
        t = X(K({}, i), {
          traits: e.slice(0, 3)
        });
      return (0, l.jsx)(A.mG, {
        location: A.N5.FRIENDS_POPOUT,
        className: B.cV,
        children: Z.map((e, n) => (0, l.jsx)(e, {
          entry: t
        }, n))
      })
    }
    if ((0, h.A)({
        activities: n,
        status: x,
        applicationStream: M,
        voiceChannel: _
      })) {
      let e = !(0, y.A)({
        activity: null == n ? true : n.find(e => {
          let {
            type: t
          } = e;
          return t === W.$pd.CUSTOM_STATUS
        }),
        user: t
      });
      return (null == n ? true : n.find(e => {
        let {
          type: t
        } = e;
        return t === W.$pd.PLAYING
      })) == null && null != _ ? (0, l.jsx)(q, {
        channel: _,
        textVariant: "text-xs/medium",
        activities: null != n ? n : [],
        applicationStream: M
      }) : (0, l.jsx)(f.A, {
        user: t,
        activities: n,
        applicationStream: M,
        voiceChannel: _,
        animateEmoji: false,
        hideEmoji: e,
        hasQuest: false
      })
    }
    return null
  }, [t, n, x, M, _, i]);
  return {
    avatarDecorationSrc: v,
    avatarSrc: O,
    eventHandlers: b,
    listItemId: N,
    intersectionRef: L,
    isMobile: j,
    newStatus: P,
    status: x,
    renderSubtext: k,
    renderUserContextMenu: r.useCallback(e => {
      null == I || I({
        type: H.K.FRIEND_ROW,
        event: e,
        user: t,
        friendGroupId: E
      })
    }, [E, I, t])
  }
}
let $ = Chunk64700.memo(e => {
  let {
    user: t,
    activities: n = [],
    gameProfileEntry: i,
    closeParentPopout: s,
    appContext: c,
    nickname: d,
    onPrimaryAction: h,
    onContextMenu: g,
    onFriendVisible: f,
    friendGroupId: p,
    shouldHighlightIfRecentlyAdded: I,
    relationshipType: m,
    isSuggestion: E
  } = e, {
    avatarDecorationSrc: A,
    avatarSrc: y,
    eventHandlers: N,
    listItemId: T,
    intersectionRef: C,
    isMobile: x,
    newStatus: D,
    status: j,
    renderSubtext: w,
    renderUserContextMenu: R
  } = J({
    user: t,
    activities: n,
    gameProfileEntry: i,
    relationshipType: m,
    isSuggestion: E,
    appContext: c,
    onPrimaryAction: h,
    onContextMenu: g,
    onFriendVisible: f,
    friendGroupId: p
  }), {
    guildId: U,
    channelId: Z
  } = (0, a.cf)([P.A, M.A], () => {
    var e, t;
    let n = null != (e = P.A.getVoiceChannelId()) ? e : P.A.getChannelId();
    return {
      guildId: null != n ? null == (t = M.A.getChannel(n)) ? true : t.guild_id : null,
      channelId: n
    }
  }), q = (0, S.A)({
    userId: t.id,
    guildId: U
  }), $ = G.Ay.useName(U, Z, t), ee = r.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null == h || h({
      type: H.c.OPEN_DIRECT_MESSAGE,
      userId: t.id
    }), null == s || s()
  }, [s, h, t.id]), et = n.some(e => {
    let {
      type: t
    } = e;
    return t === W.$pd.PLAYING
  }), en = j !== W.clD.ONLINE && j !== W.clD.IDLE && j !== W.clD.DND, el = (0, Y.A2)(t.id), er = r.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null == h || h({
      type: H.c.OPEN_FRIEND_MODAL,
      userId: t.id,
      guildId: null != U ? U : true,
      channelId: null != Z ? Z : true
    })
  }, [Z, U, h, t.id]);
  return (0, l.jsx)(k.D, {
    listItemId: T,
    outerRef: C,
    isVisuallyOffline: en,
    recentlyAddedTimestampMs: I ? el : null,
    onClick: ee,
    onContextMenu: R,
    avatar: (0, l.jsx)(u.euF, X(K({}, N), {
      size: Q,
      src: y,
      isMobile: x,
      isTyping: false,
      status: D,
      className: B.my,
      "aria-label": t.username,
      statusTooltip: true,
      avatarDecoration: A
    })),
    primaryText: (0, l.jsxs)("div", {
      className: B.QV,
      children: [(0, l.jsx)(O.A, {
        userName: $,
        displayNameStyles: q,
        effectDisplayType: v.G.STATIC,
        textClassName: B.Xh
      }), (0, l.jsx)(_.Ay, {
        userId: t.id,
        disableGuildProfile: true
      })]
    }),
    secondaryText: w(),
    rightActions: e => e ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(o.m_, {
        text: z.intl.string(z.t.iXAna6),
        "aria-label": z.intl.string(z.t.iXAna6),
        children: (0, l.jsx)(u.K0, {
          icon: u.rMq,
          "aria-label": z.intl.string(z.t.iXAna6),
          size: "sm",
          variant: "icon-only",
          onClick: er
        })
      }), (0, l.jsx)(F.j, {
        tab: L.x.FRIENDS,
        targetId: t.id
      })]
    }) : et ? (0, l.jsx)("div", {
      className: B.im,
      children: (0, l.jsx)(V.B, {
        activities: n,
        gameProfileEntry: i,
        gameIconSize: b.M.SMALL,
        platformIconSizePx: 24
      })
    }) : null
  })
});
$.displayName = "FriendListRow";
let ee = Chunk64700.memo(e => {
  let {
    user: t,
    activities: n = [],
    gameProfileEntry: i,
    relationshipType: s,
    isSuggestion: a,
    appContext: c,
    nickname: d,
    onPrimaryAction: h,
    onContextMenu: g,
    onFriendVisible: f,
    friendGroupId: p
  } = e, {
    avatarDecorationSrc: I,
    avatarSrc: m,
    eventHandlers: E,
    listItemId: A,
    intersectionRef: y,
    isMobile: N,
    newStatus: T,
    status: _,
    renderSubtext: C,
    renderUserContextMenu: x
  } = J({
    user: t,
    activities: n,
    gameProfileEntry: i,
    relationshipType: s,
    isSuggestion: a,
    appContext: c,
    onPrimaryAction: h,
    onContextMenu: g,
    onFriendVisible: f,
    friendGroupId: p
  }), D = (0, S.A)({
    userId: t.id,
    guildId: null
  }), M = G.Ay.useName(null, null, t), [j, w] = r.useState(false), P = r.useRef(null), R = r.useCallback(() => {
    w(true), null != P.current && clearTimeout(P.current), P.current = setTimeout(() => {
      w(false), P.current = null
    }, 2e3)
  }, []);
  r.useEffect(() => () => {
    null != P.current && clearTimeout(P.current)
  }, []);
  let U = r.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), null == h || h({
        type: H.c.OPEN_DIRECT_MESSAGE,
        userId: t.id
      })
    }, [h, t.id]),
    L = r.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), j || (R(), null == h || h({
        type: H.c.ACCEPT_FRIEND_REQUEST,
        userId: t.id
      }))
    }, [t.id, h, j, R]),
    F = r.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), j || (R(), null == h || h({
        type: H.c.DECLINE_FRIEND_REQUEST,
        userId: t.id
      }))
    }, [t.id, h, j, R]),
    Y = r.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), j || (R(), null == h || h({
        type: H.c.CANCEL_FRIEND_REQUEST,
        userId: t.id
      }))
    }, [t.id, h, j, R]),
    Z = r.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), j || (R(), null == h || h({
        type: H.c.SEND_FRIEND_REQUEST,
        userId: t.id
      }))
    }, [t.id, h, j, R]),
    q = n.some(e => {
      let {
        type: t
      } = e;
      return t === W.$pd.PLAYING
    }),
    $ = _ !== W.clD.ONLINE && _ !== W.clD.IDLE && _ !== W.clD.DND;
  return (0, l.jsx)(k.D, {
    listItemId: A,
    outerRef: y,
    isVisuallyOffline: $,
    onClick: U,
    onContextMenu: x,
    avatar: (0, l.jsx)(u.euF, X(K({}, E), {
      size: Q,
      src: m,
      isMobile: N,
      isTyping: false,
      status: T,
      className: B.my,
      "aria-label": t.username,
      statusTooltip: true,
      avatarDecoration: I
    })),
    primaryText: (0, l.jsx)(O.A, {
      userName: M,
      displayNameStyles: D,
      effectDisplayType: v.G.PLAIN,
      textClassName: B.Xh
    }),
    secondaryText: C(),
    rightActions: () => (0, l.jsxs)(l.Fragment, {
      children: [q ? (0, l.jsx)("div", {
        className: B.im,
        children: (0, l.jsx)(V.B, {
          activities: n,
          gameProfileEntry: i,
          gameIconSize: b.M.XSMALL,
          platformIconSizePx: 20
        })
      }) : null, s === W.eA$.PENDING_INCOMING ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(o.m_, {
          text: z.intl.string(z.t.MMlhsr),
          children: (0, l.jsx)(u.K0, {
            "aria-label": z.intl.string(z.t.MMlhsr),
            size: "sm",
            variant: "secondary",
            icon: u.A9s,
            onClick: L,
            disabled: j
          })
        }), (0, l.jsx)(o.m_, {
          text: z.intl.string(z.t.ytCpKs),
          children: (0, l.jsx)(u.K0, {
            "aria-label": z.intl.string(z.t.ytCpKs),
            size: "sm",
            variant: "secondary",
            icon: u.PGe,
            onClick: F,
            disabled: j
          })
        })]
      }) : s === W.eA$.PENDING_OUTGOING ? (0, l.jsx)(o.m_, {
        text: z.intl.string(z.t["bTfA//"]),
        children: (0, l.jsx)(u.K0, {
          "aria-label": z.intl.string(z.t["bTfA//"]),
          size: "sm",
          variant: "secondary",
          icon: u.lI8,
          onClick: Y,
          disabled: j
        })
      }) : a ? (0, l.jsx)(o.m_, {
        text: z.intl.string(z.t.w5uwoI),
        children: (0, l.jsx)(u.K0, {
          "aria-label": z.intl.string(z.t.w5uwoI),
          size: "sm",
          variant: "secondary",
          icon: u.Rvf,
          onClick: Z,
          disabled: j
        })
      }) : null]
    })
  })
});
ee.displayName = "FriendRequestRow";
let et = Chunk64700.memo(e => "friend_request" === function(e) {
  let {
    relationshipType: t,
    isSuggestion: n
  } = e;
  return t === W.eA$.PENDING_INCOMING || t === W.eA$.PENDING_OUTGOING || n ? "friend_request" : "friend"
}(e) ? (0, l.jsx)(ee, K({}, e)) : (0, l.jsx)($, K({}, e)));
et.displayName = "FriendRow"