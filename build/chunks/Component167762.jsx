/** Chunk was on 29709 **/
/** chunk id: 167762, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Or: () => en,
  r1: () => et,
  sG: () => Y
}), require("./388685.js"), require("./539854.js"), require("./642613.js");
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk907331 = require("./907331.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk278323 = require("./278323.js"),
  Chunk493683 = require("./493683.js"),
  Chunk239091 = require("./239091.js"),
  Chunk194359 = require("./194359.js"),
  Chunk724757 = require("./724757.js"),
  Chunk620662 = require("./620662.js"),
  Chunk420660 = require("./420660.js"),
  Chunk326255 = require("./326255.js"),
  Chunk956221 = require("./956221.js"),
  Chunk771173 = require("./771173.jsx"),
  Chunk297781 = require("./297781.jsx"),
  Chunk82295 = require("./82295.jsx"),
  Chunk554300 = require("./554300.jsx"),
  Chunk558602 = require("./558602.js"),
  Chunk567409 = require("./567409.js"),
  Chunk887413 = require("./887413.jsx"),
  Chunk373662 = require("./373662.jsx"),
  Chunk850020 = require("./850020.js"),
  Chunk886118 = require("./886118.js"),
  Chunk301801 = require("./301801.js"),
  Chunk752048 = require("./752048.js"),
  Chunk518950 = require("./518950.js"),
  Chunk456077 = require("./456077.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk885110 = require("./885110.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk823379 = require("./823379.js"),
  Chunk151459 = require("./151459.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk580297 = require("./580297.js");

function V(e) {
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

function J(e, t) {
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

function Q(e, t) {
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
}
let K = Chunk481060.EFr.SIZE_32,
  B = [Chunk297781.OV, Chunk297781.wO, Chunk297781.f, Chunk297781.v1, Chunk297781.pQ];
var Y = ((i = {}).USER_CONTEXT_MENU = "user_context_menu", i.OPEN_DIRECT_MESSAGE = "open_direct_message", i.SEND_FRIEND_REQUEST = "send_friend_request", i.SEND_ACTIVITY_INVITE = "send_activity_invite", i.ASK_TO_JOIN = "ask_to_join", i.DECLINE_FRIEND_REQUEST = "decline_friend_request", i.ACCEPT_FRIEND_REQUEST = "accept_friend_request", i.CANCEL_FRIEND_REQUEST = "cancel_friend_request", i.OPEN_FRIEND_MODAL = "open_friend_modal", i.OPEN_SETTINGS_MODAL = "open_settings_modal", i.SEARCH_FRIENDS = "search_friends", i);
let X = Chunk647438.memo(e => {
  let {
    user: t,
    activities: i = [],
    gameProfileEntry: a,
    index: u,
    closeParentPopout: y,
    isSuggestion: E,
    relationshipType: j,
    appContext: w,
    nickname: k,
    onAction: T,
    onFriendVisible: U
  } = e, F = t.id, {
    avatarDecorationSrc: L,
    avatarSrc: M,
    eventHandlers: q
  } = (0, x.Z)({
    userId: F,
    size: K,
    animateOnHover: true,
    guildId: null
  }), Q = (0, s.JA)("".concat(u)), [Y, X] = l.useState(false), [$, ee] = l.useState({}), et = i.filter(e => e.type === W.IIU.PLAYING && (0, m.Z)(e, W.xjy.JOIN)), en = (0, c.Wu)([R.Z], () => R.Z.getActivities().filter(e => e.type === W.IIU.PLAYING && (0, m.Z)(e, W.xjy.JOIN))), {
    voiceChannel: ei
  } = (0, b.Z)({
    userId: t.id
  }), er = (0, Z.K)({
    user: t
  }), {
    status: el,
    applicationStream: ea,
    isMobile: es,
    newStatus: eo
  } = (0, c.cj)([G.Z, D.Z], () => {
    let e = G.Z.getStatus(t.id),
      n = D.Z.getAnyStreamForUser(t.id),
      r = G.Z.isMobileOnline(t.id),
      l = (0, O.Z)(i) ? W.Skl.STREAMING : e;
    return {
      status: e,
      applicationStream: n,
      isMobile: r,
      newStatus: l
    }
  }, [t.id, i]), ec = en.length > 0, eu = l.useCallback(e => {
    null == U || U(F, e, ec)
  }, [U, F, ec]), ed = (0, o.O)(eu), ef = l.useCallback(() => {
    X(true)
  }, []), ep = l.useCallback(() => {
    X(false)
  }, []), eg = l.useCallback(() => {
    if (null != a) {
      let e = a.traits,
        t = J(V({}, a), {
          traits: e.slice(0, 3)
        });
      return (0, r.jsx)(_.Gk, {
        location: _.Gt.FRIENDS_POPOUT,
        className: H.badgesContainer,
        children: B.map((e, n) => (0, r.jsx)(e, {
          entry: t
        }, n))
      })
    }
    if (!(0, N.Z)({
        activities: i,
        status: el,
        applicationStream: ea,
        voiceChannel: ei
      })) return null;
    let e = !(0, I.Z)({
      activity: null == i ? true : i.find(e => {
        let {
          type: t
        } = e;
        return t === W.IIU.CUSTOM_STATUS
      }),
      user: t
    });
    return (0, r.jsx)(v.Z, {
      location: "FriendsPopout",
      user: t,
      activities: i,
      applicationStream: ea,
      voiceChannel: ei,
      animateEmoji: false,
      hideEmoji: e,
      hasQuest: false
    })
  }, [t, i, el, ea, ei, a]), eh = l.useCallback(e => {
    null == T || T("user_context_menu", t.id), (0, g.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("69220")]).then(n.bind(n, 881351));
      return n => (0, r.jsx)(e, J(V({}, n), {
        user: t,
        appContext: w
      }))
    })
  }, [t, w, T]), ey = l.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null == T || T("open_direct_message", t.id), (0, P.i)(w, true), p.Z.openPrivateChannel({
      recipientIds: t.id
    }), null != y && y()
  }, [t.id, y, w, T]), em = l.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null == T || T("send_friend_request", t.id), h.Z.addRelationship({
      userId: t.id,
      context: {
        location: "friends-popout"
      }
    })
  }, [t.id, T]), eO = l.useCallback(async (e, n) => {
    if (e.preventDefault(), e.stopPropagation(), null != n.application_id && "" !== n.application_id && !$[n.application_id]) try {
      ee(e => J(V({}, e), {
        [n.application_id]: true
      })), await f.Z.sendActivityInviteUser({
        type: W.mFx.JOIN,
        userId: t.id,
        activity: n,
        location: W.Sbl.FRIENDS_POPOUT
      }), null == T || T("send_activity_invite", t.id), ee(e => J(V({}, e), {
        [n.application_id]: false
      }))
    } finally {
      ee(e => J(V({}, e), {
        [n.application_id]: false
      }))
    }
  }, [T, $, t.id]), eN = l.useCallback(async (e, n) => {
    if (e.preventDefault(), e.stopPropagation(), null != n.application_id && "" !== n.application_id && !$[n.application_id]) try {
      ee(e => J(V({}, e), {
        [n.application_id]: true
      })), await f.Z.sendActivityInviteUser({
        type: W.mFx.JOIN_REQUEST,
        userId: t.id,
        activity: n,
        location: W.Sbl.FRIENDS_POPOUT
      }), null == T || T("ask_to_join", t.id), ee(e => J(V({}, e), {
        [n.application_id]: false
      }))
    } finally {
      ee(e => J(V({}, e), {
        [n.application_id]: false
      }))
    }
  }, [T, $, t.id]);
  return (0, r.jsx)(A.Z, {
    targetElementRef: ed,
    user: t,
    position: "left",
    spacing: 16,
    children: (e, n) => {
      var i;
      let {
        isShown: l
      } = n;
      return (0, r.jsxs)("div", {
        className: H.row,
        ref: ed,
        children: [(0, r.jsx)(S.Z, V({
          innerClassName: H.rowInner,
          onContextMenu: eh,
          onMouseEnter: ef,
          onMouseLeave: ep,
          avatar: (0, r.jsx)(d.qEK, J(V({}, q), {
            size: K,
            src: M,
            isMobile: es,
            isTyping: false,
            status: eo,
            className: H.avatar,
            "aria-label": t.username,
            statusTooltip: true,
            avatarDecoration: L
          })),
          name: (0, r.jsx)("span", {
            className: H.username,
            children: null != (i = null != k ? k : t.globalName) ? i : t.username
          }),
          subText: eg(),
          selected: l,
          nameplate: er,
          hovered: Y
        }, e, Q)), (0, r.jsxs)(C.ZP, {
          className: H.hoverBar,
          children: [j === W.OGo.PENDING_INCOMING ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(C.sF, {
              label: z.intl.string(z.t.MMlhsr),
              icon: d.dz2,
              onClick: e => {
                e.preventDefault(), e.stopPropagation(), h.Z.addRelationship({
                  userId: t.id,
                  context: {
                    location: "friends-popout"
                  }
                }), null == T || T("accept_friend_request", t.id)
              }
            }), (0, r.jsx)(C.sF, {
              label: z.intl.string(z.t.ytCpKs),
              icon: d.Dio,
              onClick: e => {
                e.preventDefault(), e.stopPropagation(), h.Z.removeRelationship(t.id, {
                  location: "friends-popout"
                }), null == T || T("decline_friend_request", t.id)
              }
            })]
          }) : j === W.OGo.PENDING_OUTGOING ? (0, r.jsx)(C.sF, {
            label: z.intl.string(z.t["bTfA//"]),
            icon: d.iHX,
            onClick: e => {
              e.preventDefault(), e.stopPropagation(), h.Z.cancelFriendRequest(t.id, {
                location: "friends-popout"
              }), null == T || T("cancel_friend_request", t.id)
            }
          }) : E ? (0, r.jsx)(C.sF, {
            label: z.intl.string(z.t.w5uwoI),
            icon: d.oLu,
            onClick: em
          }) : null, (0, r.jsxs)(r.Fragment, {
            children: [et.map(e => (0, r.jsx)(C.sF, {
              label: $[e.application_id] ? z.intl.string(z.t["8BEiNn"]) : z.intl.string(z.t.OKsSCR),
              icon: $[e.application_id] ? d.dz2 : d.V9,
              onClick: t => eN(t, e)
            }, e.application_id)), en.map(e => {
              var n;
              return (0, r.jsx)(C.sF, {
                label: $[e.application_id] ? z.intl.string(z.t["8BEiNn"]) : z.intl.formatToPlainString(z.t["KHLo+F"], {
                  channel: null != (n = t.globalName) ? n : t.username,
                  game: e.name
                }),
                icon: $[e.application_id] ? d.dz2 : d.ejJ,
                onClick: t => eO(t, e)
              }, e.application_id)
            })]
          }), j !== W.OGo.PENDING_INCOMING && j !== W.OGo.PENDING_OUTGOING && (0, r.jsx)(C.sF, {
            label: z.intl.string(z.t["g33r/P"]),
            icon: d.kBi,
            onClick: ey
          }), (0, r.jsx)(C.sF, {
            label: z.intl.string(z.t["UKOtz+"]),
            icon: d.xhG,
            onClick: eh
          })]
        })]
      })
    }
  })
});
X.displayName = "FriendRow";
let $ = {
  searchType: Chunk886118.S.FUZZY,
  searchStringGenerator: function(e) {
    let {
      user: t,
      activities: n,
      nickname: i
    } = e;
    return [t.username, t.globalName, i, ...n.map(e => e.name)].filter(M.lm)
  },
  sortType: Chunk886118.E.JARO_WINKLER,
  throttleMs: 100
};

function ee(e, t) {
  let [n, i] = l.useState(t), r = l.useCallback(() => i(t), [t]);
  return (0, k.BO)(e, t, i, $), [n, r]
}
let et = Chunk647438.memo(function(e) {
  let {
    containerClassName: t,
    listClassName: i,
    closePopout: o,
    renderHeader: f,
    onAction: p,
    onFriendVisible: h,
    autoFocus: m = false,
    appContext: O = W.IlC.APP
  } = e, [N, b] = l.useState([3, 0]), v = l.useRef(null), _ = (0, y.Z)("friends-popout", v), S = function() {
    let e = (0, c.Wu)([U.Z, F.default, G.Z], () => {
        let e = [];
        for (let [t, n] of U.Z.getMutableRelationships().entries()) {
          if (n !== W.OGo.PENDING_INCOMING && n !== W.OGo.PENDING_OUTGOING) continue;
          let i = F.default.getUser(t);
          if (null != i) {
            let r = U.Z.getSince(t),
              l = null != r ? new Date(r).getTime() : 0;
            e.push({
              user: i,
              activities: G.Z.getActivities(t),
              timestamp: l,
              nickname: U.Z.getNickname(t),
              relationshipType: n
            })
          }
        }
        return e.sort((e, t) => t.timestamp - e.timestamp), e
      }),
      t = (0, c.Wu)([T.Z, F.default, G.Z, U.Z, L.Z], () => {
        let e = T.Z.getUserAffinitiesMap(),
          t = [];
        for (let [n, i] of e.entries()) {
          let e = U.Z.getRelationshipType(n);
          if (U.Z.isFriend(n) || i.communicationProbability <= .1634 || e === W.OGo.PENDING_INCOMING || e === W.OGo.PENDING_OUTGOING) continue;
          let r = F.default.getUser(n);
          if (null != r) {
            let e = G.Z.getActivities(n),
              l = L.Z.getVoiceStateForUser(n),
              a = (null == l ? true : l.channelId) != null;
            t.push({
              user: r,
              activities: e,
              affinity: i.communicationProbability,
              hasActivity: e.length > 0 || a,
              nickname: U.Z.getNickname(n)
            })
          }
        }
        return t.sort((e, t) => {
          let n = 1e3 * !!e.hasActivity + e.affinity;
          return 1e3 * !!t.hasActivity + t.affinity - n
        })
      }, []),
      n = function() {
        let e = (0, c.e7)([R.Z], () => R.Z.getPrimaryActivity()),
          t = null == e ? true : e.application_id,
          n = (0, j.N)(t);
        return (0, c.cj)([U.Z, F.default, G.Z, L.Z], () => {
          let i = (null == e ? true : e.name) != null && null != t,
            r = {
              activities: [],
              sameActivity: [],
              online: [],
              offline: []
            },
            l = new Map;
          for (let e of (i && null != t && null != n && n.length > 0 && n.forEach(e => {
              let t = e.author_id;
              if (!U.Z.isFriend(t)) return;
              let n = F.default.getUser(t);
              null != n && l.set(t, {
                user: n,
                activities: [],
                gameProfileEntry: e,
                nickname: U.Z.getNickname(t)
              })
            }), U.Z.getFriendIDs())) {
            let n = F.default.getUser(e);
            if (null == n) continue;
            let a = G.Z.getStatus(e),
              s = G.Z.getActivities(e),
              o = U.Z.getNickname(e),
              c = L.Z.getVoiceStateForUser(e),
              u = (null == c ? true : c.channelId) != null,
              d = s.filter(e => e.type === W.IIU.PLAYING || e.type === W.IIU.LISTENING || e.type === W.IIU.WATCHING || e.type === W.IIU.STREAMING),
              f = d.filter(e => e.application_id === t),
              p = i && f.length > 0,
              g = {
                user: n,
                activities: p ? f : d,
                nickname: o
              };
            p ? (r.sameActivity.push(g), l.delete(e)) : d.length > 0 ? r.activities.push(g) : u ? r.activities.push(J(V({}, g), {
              activities: s
            })) : a === W.Skl.ONLINE || a === W.Skl.IDLE || a === W.Skl.DND ? r.online.push(g) : r.offline.push(g)
          }
          let a = (e, t) => {
            var n, i;
            let r = (null != (n = e.user.globalName) ? n : e.user.username).toLowerCase(),
              l = (null != (i = t.user.globalName) ? i : t.user.username).toLowerCase();
            return r.localeCompare(l)
          };
          if (r.sameActivity.sort(a), l.size > 0) {
            let e = Array.from(l.values()).sort(a);
            r.sameActivity.push(...e)
          }
          return r.activities.sort(a), r.online.sort(a), r.offline.sort(a), r
        }, [n, e, t])
      }(),
      i = (0, c.e7)([R.Z], () => R.Z.getPrimaryActivity());
    return l.useMemo(() => {
      var r;
      return {
        friendRequests: e,
        suggestions: t,
        activities: n.activities,
        sameActivity: n.sameActivity,
        online: n.online,
        offline: n.offline,
        currentActivityName: null != (r = null == i ? true : i.name) ? r : ""
      }
    }, [e, t, n, i])
  }(), I = function(e) {
    let [t, n] = l.useState(""), [i, r] = ee(t, e.friendRequests), [a, s] = ee(t, e.suggestions), [o, c] = ee(t, e.sameActivity), [u, d] = ee(t, e.activities), [f, p] = ee(t, e.online), [g, h] = ee(t, e.offline), y = l.useCallback(() => {
      n(""), r(), s(), c(), d(), p(), h()
    }, [r, s, c, d, p, h]);
    return {
      friendRequests: i,
      suggestions: a,
      sameActivity: o,
      activities: u,
      online: f,
      offline: g,
      currentActivityName: e.currentActivityName,
      searchQuery: t,
      setSearchQuery: n,
      clearSearch: y
    }
  }(S), {
    searchQuery: P,
    setSearchQuery: C,
    clearSearch: Z
  } = I, w = Q(I, ["searchQuery", "setSearchQuery", "clearSearch"]), k = l.useCallback(e => {
    b(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
  }, []), x = l.useCallback((0, a.debounce)(() => {
    null == p || p("search_friends")
  }, 1e3, {
    leading: true,
    trailing: false
  }), [p]), A = l.useCallback(e => {
    var t;
    C(e), x(), null == (t = v.current) || t.scrollToTop()
  }, [C, x]), D = l.useCallback(() => {
    var e;
    Z(), x(), null == (e = v.current) || e.scrollToTop()
  }, [Z, x]), M = l.useCallback(e => {
    (0, g.jW)(e, async () => {
      let {
        default: e
      } = await n.e("23087").then(n.bind(n, 29131));
      return t => (0, r.jsx)(e, J(V({}, t), {
        onClose: o
      }))
    }), null == p || p("open_settings_modal")
  }, [o, p]), K = l.useCallback(() => {
    (0, d.ZDy)(async () => {
      let {
        default: e
      } = await n.e("49078").then(n.bind(n, 539725));
      return t => (0, r.jsx)(e, V({}, t))
    }), null == p || p("open_friend_modal")
  }, [p]), B = l.useCallback(e => {
    let {
      section: t
    } = e, n = "", i = 0;
    switch (t) {
      case 0:
        n = z.intl.string(z.t.fyA115), i = w.friendRequests.length;
        break;
      case 1:
        n = S.currentActivityName, i = w.sameActivity.length;
        break;
      case 3:
        n = z.intl.string(z.t.qm9dSj), i = w.suggestions.length;
        break;
      case 2:
        n = z.intl.string(z.t.TxqPQR), i = w.activities.length;
        break;
      case 4:
        n = z.intl.string(z.t.WbGtnH), i = w.online.length;
        break;
      case 5:
        n = z.intl.string(z.t.Vv0abJ), i = w.offline.length
    }
    let l = (3 === t || 0 === t) && i > 3,
      a = N.includes(t);
    return (0, r.jsxs)(E.Z, {
      className: H.section,
      children: [(0, r.jsx)(d.nn4, {
        children: z.intl.format(z.t.Uaqbke, {
          title: n,
          count: i
        })
      }), (0, r.jsxs)(d.P3F, {
        onClick: () => l && k(t),
        "aria-hidden": true,
        className: l ? H.sectionCollapsible : true,
        children: [n, " — ", i, l ? a ? (0, r.jsx)(d.Fbu, {
          size: "md",
          color: "currentColor",
          className: H.chevronIcon
        }) : (0, r.jsx)(d.CJ0, {
          size: "md",
          color: "currentColor",
          className: H.chevronIcon
        }) : null]
      })]
    })
  }, [S.currentActivityName, w.friendRequests.length, w.sameActivity.length, w.suggestions.length, w.activities.length, w.online.length, w.offline.length, N, k]), Y = l.useCallback(e => {
    let t;
    return null == (t = 0 === e.section ? w.friendRequests[e.row] : 1 === e.section ? w.sameActivity[e.row] : 3 === e.section ? w.suggestions[e.row] : 2 === e.section ? w.activities[e.row] : 4 === e.section ? w.online[e.row] : w.offline[e.row]) || null == t.user ? null : (0, r.jsx)(X, J(V({}, t), {
      index: e.row,
      closeParentPopout: o,
      isSuggestion: 3 === e.section,
      appContext: O,
      onAction: p,
      onFriendVisible: h
    }), "".concat(e.section, ":").concat(t.user.id))
  }, [w, o, O, p, h]), {
    showSuggestions: $
  } = (0, q.Z)(), et = l.useMemo(() => {
    let e = $ ? N.includes(3) ? Math.min(3, w.suggestions.length) : w.suggestions.length : 0;
    return [N.includes(0) ? Math.min(3, w.friendRequests.length) : w.friendRequests.length, w.sameActivity.length, w.activities.length, e, w.online.length, w.offline.length]
  }, [w, N, $]), en = Object.values(w).every(e => 0 === e.length);
  return (0, r.jsxs)("div", {
    className: t,
    children: [null != f ? (0, r.jsx)("div", {
      className: H.header,
      children: f()
    }) : (0, r.jsxs)("div", {
      className: H.header,
      children: [(0, r.jsx)(d.Heading, {
        variant: "heading-lg/semibold",
        children: z.intl.string(z.t.TdEu5X)
      }), (0, r.jsxs)("div", {
        className: H.controlButtons,
        children: [(0, r.jsx)(u.u, {
          text: z.intl.string(z.t.w5uwoI),
          children: (0, r.jsx)(d.hU, {
            "aria-label": z.intl.string(z.t.w5uwoI),
            size: "sm",
            variant: "secondary",
            icon: d.oLu,
            onClick: K
          })
        }), (0, r.jsx)(u.u, {
          text: z.intl.string(z.t["3D5yo/"]),
          children: (0, r.jsx)(d.hU, {
            "aria-label": z.intl.string(z.t["3D5yo/"]),
            size: "sm",
            variant: "secondary",
            icon: d.xhG,
            onClick: M
          })
        })]
      })]
    }), (0, r.jsx)("div", {
      className: H.searchContainer,
      children: (0, r.jsx)(d.E1j, {
        query: P,
        onChange: A,
        onClear: D,
        placeholder: z.intl.string(z.t["5h0QOP"]),
        autoFocus: m
      })
    }), en ? (0, r.jsx)("div", {
      className: H.emptyStateContainer,
      children: (0, r.jsx)(d.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: z.intl.string(z.t["7sW4h1"])
      })
    }) : (0, r.jsx)(s.bG, {
      navigator: _,
      children: (0, r.jsx)(s.SJ, {
        children: e => {
          var {
            ref: t,
            role: n
          } = e, l = Q(e, ["ref", "role"]);
          return (0, r.jsx)(d.Wdt, {
            children: e => (0, r.jsx)(d.aVo, V({
              innerRole: n,
              innerAriaLabel: z.intl.string(z.t.TdEu5X),
              ref: e => {
                var n;
                v.current = e, t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null
              },
              className: i,
              sectionHeight: 40,
              rowHeight: 42,
              sidebarHeight: 0,
              renderSection: B,
              renderRow: Y,
              sections: et,
              paddingTop: 4,
              paddingBottom: 4
            }, l, e))
          })
        }
      })
    })]
  })
});

function en(e) {
  let {
    onOpen: t,
    onClose: n,
    children: i,
    popoutPosition: a,
    popoutAlign: s
  } = e, [o, c] = l.useState(false), u = l.useRef(null), f = l.useCallback(() => {
    c(false), null == n || n()
  }, [n]), p = l.useCallback(() => {
    c(e => {
      let i = !e;
      return i ? null == t || t() : null == n || n(), i
    })
  }, [n, t]), g = l.useCallback(() => (0, r.jsx)(et, {
    containerClassName: H.container,
    listClassName: H.list,
    closePopout: f,
    autoFocus: true
  }), [f]);
  return (0, r.jsx)(d.yRy, {
    targetElementRef: u,
    animation: d.yRy.Animation.NONE,
    position: a,
    align: s,
    autoInvert: false,
    shouldShow: o,
    onRequestClose: f,
    renderPopout: g,
    ignoreModalClicks: true,
    clickTrap: true,
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return i(p, n, e, u)
    }
  })
}