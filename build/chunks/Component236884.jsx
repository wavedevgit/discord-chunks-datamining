/** Chunk was on 71447 **/
/** chunk id: 236884, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ea
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk172218 = require("./172218.js"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk49229 = require("./49229.js"),
  Chunk833349 = require("./833349.js"),
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
  Chunk657331 = require("./657331.js"),
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
  Chunk472204 = require("./472204.js"),
  Chunk576420 = require("./576420.js"),
  Chunk876891 = require("./876891.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk783346 = require("./783346.js");

function q(e) {
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

function $(e, t) {
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
let ee = Chunk397927._3J.SIZE_32,
  et = [Chunk506326.iq, Chunk506326.tR, Chunk506326.K7, Chunk506326.sp, Chunk506326.MK];

function en(e) {
  let t, {
      channel: n,
      textVariant: a,
      activities: o,
      applicationStream: c
    } = e,
    d = (0, s.bG)([G.default], () => G.default.getCurrentUser()),
    h = (0, u.S31)(X.clD.ONLINE),
    f = (0, b.Ay)(n),
    g = (0, s.bG)([k.A], () => k.A.getGuild(n.getGuildId())),
    m = null == g ? true : g.name;
  (0, v.A)(null == d ? true : d.id);
  let E = (null == c ? true : c.discoverable) !== false ? c : null,
    O = (0, j.AO)(E),
    x = n.isDM() || n.isGroupDM(),
    _ = r.useMemo(() => {
      var e;
      return (0, l.uniqWith)(null != (e = null == o ? true : o.filter(e => {
        let {
          type: t,
          name: n
        } = e;
        return t !== X.$pd.CUSTOM_STATUS && t !== X.$pd.HANG_STATUS && n !== (null == O ? true : O.name)
      })) ? e : [], (e, t) => null != e.application_id && null != t.application_id && e.application_id === t.application_id || null != e.name && null != t.name && e.name === t.name)
    }, [o, null == O ? true : O.name]),
    S = null == _ ? true : _[0];
  return (0, i.jsxs)("div", {
    className: Q.fE,
    children: [(t = (null == _ ? true : _.length) > 0, (0, i.jsxs)("div", {
      className: Q._9,
      children: [!t && !x && null != g && (0, i.jsxs)("div", {
        className: Q.j1,
        children: [(0, i.jsx)(T.Ay, {
          guild: g,
          iconSize: 14
        }), (0, i.jsx)(u.Text, {
          className: Q.J5,
          variant: a,
          color: "currentColor",
          lineClamp: 1,
          children: m
        }), (0, i.jsx)(u._BQ, {
          size: "xxs",
          color: "currentColor"
        })]
      }), (0, i.jsx)(P.A, {
        size: "custom",
        color: h,
        channel: n,
        className: Q.WT
      }), (0, i.jsx)(u.Text, {
        variant: a,
        color: "currentColor",
        lineClamp: 1,
        className: Q.Qo,
        children: f
      })]
    })), (() => {
      if (null == S) return null;
      let {
        text: e
      } = (0, p.A)(S, false), t = (0, A.f)(S);
      return null == e && null == t ? null : (0, i.jsxs)("div", {
        className: Q._9,
        children: [null != t ? (0, i.jsx)(y.A, {
          icon: t,
          className: Q.WT
        }) : true, null != e ? (0, i.jsx)(u.Text, {
          variant: a,
          color: "text-status-online",
          lineClamp: 1,
          children: e
        }) : true]
      })
    })()]
  })
}

function ei(e) {
  let {
    user: t,
    activities: n,
    gameProfileEntry: l,
    relationshipType: o,
    isSuggestion: u,
    appContext: c,
    onAction: p,
    onFriendVisible: y,
    friendGroupId: A
  } = e, v = t.id, {
    avatarDecorationSrc: b,
    avatarSrc: x,
    eventHandlers: _
  } = (0, N.A)({
    userId: v,
    size: ee,
    animateOnHover: true,
    guildId: null
  }), S = r.useMemo(() => {
    let e = null != A ? A : "no-group",
      t = null != o ? o : "no-relationship";
    return "friends-widget-friend-row:".concat(v, ":").concat(e, ":").concat(t, ":").concat(u ? "suggestion" : "not-suggestion")
  }, [A, u, o, v]), I = (0, s.yK)([U.A], () => U.A.getActivities().filter(e => e.type === X.$pd.PLAYING && (0, d.A)(e, X.jUm.JOIN))), {
    voiceChannel: j
  } = (0, g.A)({
    userId: t.id
  }), {
    status: T,
    applicationStream: C,
    isMobile: w,
    newStatus: P
  } = (0, s.cf)([M.A, D.A], () => {
    let e = M.A.getStatus(t.id),
      i = D.A.getAnyStreamForUser(t.id),
      r = M.A.isMobileOnline(t.id),
      l = (0, h.A)(null != n ? n : []) ? X.clD.STREAMING : e;
    return {
      status: e,
      applicationStream: i,
      isMobile: r,
      newStatus: l
    }
  }, [t.id, n]), R = I.length > 0, k = r.useCallback(e => {
    null == y || y(v, e, R)
  }, [y, v, R]), L = (0, a.K)(k), G = r.useCallback(() => {
    if (null != l) {
      let e = l.traits,
        t = $(q({}, l), {
          traits: e.slice(0, 3)
        });
      return (0, i.jsx)(E.mG, {
        location: E.N5.FRIENDS_POPOUT,
        className: Q.cV,
        children: et.map((e, n) => (0, i.jsx)(e, {
          entry: t
        }, n))
      })
    }
    if ((0, f.A)({
        activities: n,
        status: T,
        applicationStream: C,
        voiceChannel: j
      })) {
      let e = !(0, O.A)({
        activity: null == n ? true : n.find(e => {
          let {
            type: t
          } = e;
          return t === X.$pd.CUSTOM_STATUS
        }),
        user: t
      });
      return (null == n ? true : n.find(e => {
        let {
          type: t
        } = e;
        return t === X.$pd.PLAYING
      })) == null && null != j ? (0, i.jsx)(en, {
        channel: j,
        textVariant: "text-xs/medium",
        activities: null != n ? n : [],
        applicationStream: C
      }) : (0, i.jsx)(m.A, {
        user: t,
        activities: n,
        applicationStream: C,
        voiceChannel: j,
        animateEmoji: false,
        hideEmoji: e,
        hasQuest: false
      })
    }
    return null
  }, [t, n, T, C, j, l]);
  return {
    avatarDecorationSrc: b,
    avatarSrc: x,
    eventHandlers: _,
    listItemId: S,
    intersectionRef: L,
    isMobile: w,
    newStatus: P,
    status: T,
    renderSubtext: G,
    renderUserContextMenu: (0, Z.l2)({
      user: t,
      appContext: c,
      friendGroupId: A,
      onUserContextMenuOpened: () => {
        null == p || p(K.x.USER_CONTEXT_MENU, t.id)
      },
      onMessageUser: () => {
        null == p || p(K.x.OPEN_DIRECT_MESSAGE, t.id)
      }
    })
  }
}
let er = Chunk64700.memo(e => {
  let {
    user: t,
    activities: n = [],
    gameProfileEntry: l,
    closeParentPopout: a,
    appContext: c,
    nickname: d,
    onAction: h,
    onFriendVisible: p,
    friendGroupId: f,
    shouldHighlightIfRecentlyAdded: g,
    relationshipType: m,
    isSuggestion: y
  } = e, {
    avatarDecorationSrc: A,
    avatarSrc: v,
    eventHandlers: b,
    listItemId: E,
    intersectionRef: O,
    isMobile: j,
    newStatus: T,
    status: N,
    renderSubtext: P,
    renderUserContextMenu: D
  } = ei({
    user: t,
    activities: n,
    gameProfileEntry: l,
    relationshipType: m,
    isSuggestion: y,
    appContext: c,
    onAction: h,
    onFriendVisible: p,
    friendGroupId: f
  }), {
    guildId: k,
    channelId: M
  } = (0, s.cf)([L.A, R.A], () => {
    var e, t;
    let n = null != (e = L.A.getVoiceChannelId()) ? e : L.A.getChannelId();
    return {
      guildId: null != n ? null == (t = R.A.getChannel(n)) ? true : t.guild_id : null,
      channelId: n
    }
  }), U = (0, x.A)({
    userId: t.id,
    guildId: k
  }), G = V.Ay.useName(k, M, t), Z = (0, W.ZD)({
    userId: t.id,
    onAction: h,
    closeParentPopout: a
  }), et = n.some(e => {
    let {
      type: t
    } = e;
    return t === X.$pd.PLAYING
  }), en = N !== X.clD.ONLINE && N !== X.clD.IDLE && N !== X.clD.DND, er = (0, B.A2)(t.id), el = r.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null == h || h(K.x.OPEN_FRIEND_MODAL, t.id), (0, w.openUserProfileModal)({
      userId: t.id,
      guildId: k,
      channelId: M,
      appContext: c
    })
  }, [c, M, k, h, t.id]);
  return (0, i.jsx)(F.D, {
    listItemId: E,
    outerRef: O,
    isVisuallyOffline: en,
    recentlyAddedTimestampMs: g ? er : null,
    onClick: Z,
    onContextMenu: D,
    avatar: (0, i.jsx)(u.euF, $(q({}, b), {
      size: ee,
      src: v,
      isMobile: j,
      isTyping: false,
      status: T,
      className: Q.my,
      "aria-label": t.username,
      statusTooltip: true,
      avatarDecoration: A
    })),
    primaryText: (0, i.jsxs)("div", {
      className: Q.QV,
      children: [(0, i.jsx)(S.A, {
        userName: G,
        displayNameStyles: U,
        effectDisplayType: _.G.STATIC,
        textClassName: Q.Xh
      }), (0, i.jsx)(C.Ay, {
        userId: t.id,
        disableGuildProfile: true
      })]
    }),
    secondaryText: P(),
    rightActions: e => e ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(o.m_, {
        text: J.intl.string(J.t.iXAna6),
        "aria-label": J.intl.string(J.t.iXAna6),
        children: (0, i.jsx)(u.K0, {
          icon: u.rMq,
          "aria-label": J.intl.string(J.t.iXAna6),
          size: "sm",
          variant: "icon-only",
          onClick: el
        })
      }), (0, i.jsx)(H.j, {
        tab: z.x.FRIENDS,
        targetId: t.id
      })]
    }) : et ? (0, i.jsx)("div", {
      className: Q.im,
      children: (0, i.jsx)(Y.B, {
        activities: n,
        gameProfileEntry: l,
        gameIconSize: I.M.SMALL,
        platformIconSizePx: 24
      })
    }) : null
  })
});
er.displayName = "FriendListRow";
let el = Chunk64700.memo(e => {
  let {
    user: t,
    activities: n = [],
    gameProfileEntry: l,
    relationshipType: a,
    isSuggestion: s,
    appContext: d,
    nickname: h,
    onAction: p,
    onFriendVisible: f,
    friendGroupId: g
  } = e, [m, y] = r.useState(null), A = r.useRef(false), {
    avatarDecorationSrc: v,
    avatarSrc: b,
    eventHandlers: E,
    listItemId: O,
    intersectionRef: j,
    isMobile: T,
    newStatus: C,
    status: N,
    renderSubtext: w,
    renderUserContextMenu: P
  } = ei({
    user: t,
    activities: n,
    gameProfileEntry: l,
    relationshipType: a,
    isSuggestion: s,
    appContext: d,
    onAction: p,
    onFriendVisible: f,
    friendGroupId: g
  }), D = (0, x.A)({
    userId: t.id,
    guildId: null
  }), R = V.Ay.useName(null, null, t), k = r.useCallback(async (e, t) => {
    if (!A.current) {
      A.current = true, y(e);
      try {
        await t()
      } finally {
        A.current = false, y(null)
      }
    }
  }, []), M = (0, W.ZD)({
    userId: t.id,
    onAction: p
  }), L = r.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null == p || p(K.x.ACCEPT_FRIEND_REQUEST, t.id), k("accept", () => c.A.addRelationship({
      userId: t.id,
      context: {
        location: "friends-popout"
      }
    }))
  }, [t.id, p, k]), U = r.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null == p || p(K.x.DECLINE_FRIEND_REQUEST, t.id), k("decline", () => c.A.removeRelationship(t.id, {
      location: "friends-popout"
    }))
  }, [t.id, p, k]), G = r.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null == p || p(K.x.CANCEL_FRIEND_REQUEST, t.id), k("cancel", () => c.A.cancelFriendRequest(t.id, {
      location: "friends-popout"
    }))
  }, [t.id, p, k]), z = r.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null == p || p(K.x.SEND_FRIEND_REQUEST, t.id), k("send", () => c.A.addRelationship({
      userId: t.id,
      context: {
        location: "friends-popout"
      }
    }))
  }, [t.id, p, k]), H = n.some(e => {
    let {
      type: t
    } = e;
    return t === X.$pd.PLAYING
  }), B = N !== X.clD.ONLINE && N !== X.clD.IDLE && N !== X.clD.DND;
  return (0, i.jsx)(F.D, {
    listItemId: O,
    outerRef: j,
    isVisuallyOffline: B,
    onClick: M,
    onContextMenu: P,
    avatar: (0, i.jsx)(u.euF, $(q({}, E), {
      size: ee,
      src: b,
      isMobile: T,
      isTyping: false,
      status: C,
      className: Q.my,
      "aria-label": t.username,
      statusTooltip: true,
      avatarDecoration: v
    })),
    primaryText: (0, i.jsx)(S.A, {
      userName: R,
      displayNameStyles: D,
      effectDisplayType: _.G.PLAIN,
      textClassName: Q.Xh
    }),
    secondaryText: w(),
    rightActions: () => {
      let e;
      return (0, i.jsxs)(i.Fragment, {
        children: [H ? (0, i.jsx)("div", {
          className: Q.im,
          children: (0, i.jsx)(Y.B, {
            activities: n,
            gameProfileEntry: l,
            gameIconSize: I.M.XSMALL,
            platformIconSizePx: 20
          })
        }) : null, (e = null != m, a === X.eA$.PENDING_INCOMING ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(o.m_, {
            text: J.intl.string(J.t.MMlhsr),
            children: (0, i.jsx)(u.K0, {
              "aria-label": J.intl.string(J.t.MMlhsr),
              size: "sm",
              variant: "secondary",
              icon: u.A9s,
              onClick: L,
              disabled: e
            })
          }), (0, i.jsx)(o.m_, {
            text: J.intl.string(J.t.ytCpKs),
            children: (0, i.jsx)(u.K0, {
              "aria-label": J.intl.string(J.t.ytCpKs),
              size: "sm",
              variant: "secondary",
              icon: u.PGe,
              onClick: U,
              disabled: e
            })
          })]
        }) : a === X.eA$.PENDING_OUTGOING ? (0, i.jsx)(o.m_, {
          text: J.intl.string(J.t["bTfA//"]),
          children: (0, i.jsx)(u.K0, {
            "aria-label": J.intl.string(J.t["bTfA//"]),
            size: "sm",
            variant: "secondary",
            icon: u.lI8,
            onClick: G,
            disabled: e
          })
        }) : s ? (0, i.jsx)(o.m_, {
          text: J.intl.string(J.t.w5uwoI),
          children: (0, i.jsx)(u.K0, {
            "aria-label": J.intl.string(J.t.w5uwoI),
            size: "sm",
            variant: "secondary",
            icon: u.Rvf,
            onClick: z,
            disabled: e
          })
        }) : null)]
      })
    }
  })
});
el.displayName = "FriendRequestRow";
let ea = Chunk64700.memo(e => "friend_request" === function(e) {
  let {
    relationshipType: t,
    isSuggestion: n
  } = e;
  return t === X.eA$.PENDING_INCOMING || t === X.eA$.PENDING_OUTGOING || n ? "friend_request" : "friend"
}(e) ? (0, i.jsx)(el, q({}, e)) : (0, i.jsx)(er, q({}, e)));
ea.displayName = "FriendRow"