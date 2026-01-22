/** Chunk was on 46636 **/
/** chunk id: 726079, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Zz: () => ec,
  lD: () => ed,
  xQ: () => er
}), require("./896048.js"), require("./321073.js"), require("./638769.js"), require("./733351.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk172218 = require("./172218.js"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308368 = require("./308368.js"),
  Chunk308528 = require("./308528.js"),
  Chunk442433 = require("./442433.js"),
  Chunk49229 = require("./49229.js"),
  Chunk928039 = require("./928039.js"),
  Chunk833349 = require("./833349.js"),
  Chunk960076 = require("./960076.js"),
  Chunk397244 = require("./397244.js"),
  Chunk714114 = require("./714114.js"),
  Chunk729551 = require("./729551.jsx"),
  Chunk506326 = require("./506326.jsx"),
  Chunk485947 = require("./485947.jsx"),
  Chunk193663 = require("./193663.jsx"),
  Chunk490427 = require("./490427.js"),
  Chunk545059 = require("./545059.js"),
  Chunk205184 = require("./205184.js"),
  Chunk474397 = require("./474397.jsx"),
  Chunk194085 = require("./194085.jsx"),
  Chunk111864 = require("./111864.js"),
  Chunk379078 = require("./379078.js"),
  Chunk704554 = require("./704554.js"),
  Chunk21119 = require("./21119.js"),
  Chunk854627 = require("./854627.js"),
  Chunk342296 = require("./342296.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk290863 = require("./290863.js"),
  Chunk994500 = require("./994500.js"),
  Chunk461213 = require("./461213.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk403362 = require("./403362.js"),
  Chunk348417 = require("./348417.js"),
  Chunk548922 = require("./548922.js"),
  Chunk857438 = require("./857438.js"),
  Chunk256077 = require("./256077.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk760799 = require("./760799.js");

function Z(e) {
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

function X(e, t) {
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

function ee(e, t) {
  if (null == e) return {};
  var n, r, i, l = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }
  if (l = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.getOwnPropertyNames(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      return i
    }(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
  return l
}
let et = Chunk397927._3J.SIZE_32,
  en = [Chunk506326.iq, Chunk506326.tR, Chunk506326.K7, Chunk506326.sp, Chunk506326.MK];
var er = ((r = {}).USER_CONTEXT_MENU = "user_context_menu", r.OPEN_DIRECT_MESSAGE = "open_direct_message", r.SEND_FRIEND_REQUEST = "send_friend_request", r.SEND_ACTIVITY_INVITE = "send_activity_invite", r.ASK_TO_JOIN = "ask_to_join", r.DECLINE_FRIEND_REQUEST = "decline_friend_request", r.ACCEPT_FRIEND_REQUEST = "accept_friend_request", r.CANCEL_FRIEND_REQUEST = "cancel_friend_request", r.OPEN_FRIEND_MODAL = "open_friend_modal", r.OPEN_SETTINGS_MODAL = "open_settings_modal", r.SEARCH_FRIENDS = "search_friends", r);
let ei = Chunk64700.memo(e => {
  let {
    user: t,
    activities: r = [],
    gameProfileEntry: s,
    index: o,
    closeParentPopout: a,
    isSuggestion: p,
    relationshipType: E,
    appContext: b,
    nickname: T,
    onAction: j,
    onFriendVisible: w,
    friendGroupId: G,
    onGroupHover: U,
    onGroupHoverRemove: M,
    isDragDisabled: V = false
  } = e, K = t.id, {
    avatarDecorationSrc: Q,
    avatarSrc: z,
    eventHandlers: B
  } = (0, x.A)({
    userId: K,
    size: et,
    animateOnHover: true,
    guildId: null
  }), Y = (0, u.rm)("".concat(o)), [ee, er] = l.useState(false), [ei, el] = l.useState({}), {
    isDragging: es,
    drag: eo
  } = (0, H.YB)(K, G, V), {
    drop: ea
  } = (0, H.dx)(V), eu = null == G, {
    isOver: ec,
    drop: ed
  } = (0, H.Bw)(null != G ? G : "", K, V);
  l.useEffect(() => {
    if (null != G && ec) return null == U || U(G, K), () => {
      null == M || M(G, K)
    }
  }, [ec, G, K, U, M]);
  let ep = r.filter(e => e.type === $.$pd.PLAYING && (0, A.A)(e, $.jUm.JOIN)),
    eg = (0, d.yK)([q.A], () => q.A.getActivities().filter(e => e.type === $.$pd.PLAYING && (0, A.A)(e, $.jUm.JOIN))),
    {
      voiceChannel: ef
    } = (0, v.A)({
      userId: t.id
    }),
    eh = (0, C.r)({
      user: t
    }),
    {
      status: em,
      applicationStream: eO,
      isMobile: eE,
      newStatus: eA
    } = (0, d.cf)([L.A, F.A], () => {
      let e = L.A.getStatus(t.id),
        n = F.A.getAnyStreamForUser(t.id),
        i = L.A.isMobileOnline(t.id),
        l = (0, y.A)(r) ? $.clD.STREAMING : e;
      return {
        status: e,
        applicationStream: n,
        isMobile: i,
        newStatus: l
      }
    }, [t.id, r]),
    ey = eg.length > 0,
    eN = l.useCallback(e => {
      null == w || w(K, e, ey)
    }, [w, K, ey]),
    ev = (0, c.K)(eN),
    eI = l.useCallback(() => {
      er(true)
    }, []),
    eS = l.useCallback(() => {
      er(false)
    }, []),
    eb = l.useCallback(() => {
      if (null != s) {
        let e = s.traits,
          t = X(Z({}, s), {
            traits: e.slice(0, 3)
          });
        return (0, i.jsx)(S.mG, {
          location: S.N5.FRIENDS_POPOUT,
          className: J.cV,
          children: en.map((e, n) => (0, i.jsx)(e, {
            entry: t
          }, n))
        })
      }
      if (!(0, N.A)({
          activities: r,
          status: em,
          applicationStream: eO,
          voiceChannel: ef
        })) return null;
      let e = !(0, D.A)({
        activity: null == r ? true : r.find(e => {
          let {
            type: t
          } = e;
          return t === $.$pd.CUSTOM_STATUS
        }),
        user: t
      });
      return (0, i.jsx)(I.A, {
        user: t,
        activities: r,
        applicationStream: eO,
        voiceChannel: ef,
        animateEmoji: false,
        hideEmoji: e,
        hasQuest: false
      })
    }, [t, r, em, eO, ef, s]),
    e_ = l.useCallback(e => {
      null == j || j("user_context_menu", t.id), (0, m.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("32418"), n.e("99871")]).then(n.bind(n, 668569));
        return n => (0, i.jsx)(e, X(Z({}, n), {
          user: t,
          appContext: b,
          friendGroupId: G
        }))
      })
    }, [t, b, j, G]),
    eD = l.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), null == j || j("open_direct_message", t.id), (0, P.A)(b, true), h.A.openPrivateChannel({
        recipientIds: t.id
      }), null != a && a()
    }, [t.id, a, b, j]),
    eT = l.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), null == j || j("send_friend_request", t.id), O.A.addRelationship({
        userId: t.id,
        context: {
          location: "friends-popout"
        }
      })
    }, [t.id, j]),
    ej = l.useCallback(async (e, n) => {
      if (e.preventDefault(), e.stopPropagation(), null != n.application_id && "" !== n.application_id && !ei[n.application_id]) try {
        el(e => X(Z({}, e), {
          [n.application_id]: true
        })), await f.A.sendActivityInviteUser({
          type: $.xL.JOIN,
          userId: t.id,
          activity: n,
          location: $.ThZ.FRIENDS_POPOUT
        }), null == j || j("send_activity_invite", t.id), el(e => X(Z({}, e), {
          [n.application_id]: false
        }))
      } finally {
        el(e => X(Z({}, e), {
          [n.application_id]: false
        }))
      }
    }, [j, ei, t.id]),
    eP = l.useCallback(async (e, n) => {
      if (e.preventDefault(), e.stopPropagation(), null != n.application_id && "" !== n.application_id && !ei[n.application_id]) try {
        el(e => X(Z({}, e), {
          [n.application_id]: true
        })), await f.A.sendActivityInviteUser({
          type: $.xL.JOIN_REQUEST,
          userId: t.id,
          activity: n,
          location: $.ThZ.FRIENDS_POPOUT
        }), null == j || j("ask_to_join", t.id), el(e => X(Z({}, e), {
          [n.application_id]: false
        }))
      } finally {
        el(e => X(Z({}, e), {
          [n.application_id]: false
        }))
      }
    }, [j, ei, t.id]);
  return (0, i.jsx)(k.A, {
    targetElementRef: ev,
    user: t,
    position: "left",
    spacing: 16,
    children: (e, n) => {
      var r;
      let {
        isShown: l
      } = n;
      return (0, i.jsxs)("div", {
        className: J.nM,
        ref: e => {
          ev.current = e, eu && null != ea && ea(e), eu || null == ed || ed(e)
        },
        style: {
          opacity: es ? .5 : 1
        },
        children: [(0, i.jsx)("div", {
          ref: e => eo(e),
          children: (0, i.jsx)(_.A, Z({
            innerClassName: J.bL,
            onContextMenu: e_,
            onMouseEnter: eI,
            onMouseLeave: eS,
            avatar: (0, i.jsx)(g.euF, X(Z({}, B), {
              size: et,
              src: z,
              isMobile: eE,
              isTyping: false,
              status: eA,
              className: J.my,
              "aria-label": t.username,
              statusTooltip: true,
              avatarDecoration: Q
            })),
            name: (0, i.jsx)("span", {
              className: J.Xh,
              children: null != (r = null != T ? T : t.globalName) ? r : t.username
            }),
            subText: eb(),
            selected: l,
            nameplate: eh,
            hovered: ee
          }, e, Y))
        }), (0, i.jsxs)(R.Ay, {
          className: J.S3,
          children: [E === $.eA$.PENDING_INCOMING ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(R.qv, {
              label: W.intl.string(W.t.MMlhsr),
              icon: g.A9s,
              onClick: e => {
                e.preventDefault(), e.stopPropagation(), O.A.addRelationship({
                  userId: t.id,
                  context: {
                    location: "friends-popout"
                  }
                }), null == j || j("accept_friend_request", t.id)
              }
            }), (0, i.jsx)(R.qv, {
              label: W.intl.string(W.t.ytCpKs),
              icon: g.PGe,
              onClick: e => {
                e.preventDefault(), e.stopPropagation(), O.A.removeRelationship(t.id, {
                  location: "friends-popout"
                }), null == j || j("decline_friend_request", t.id)
              }
            })]
          }) : E === $.eA$.PENDING_OUTGOING ? (0, i.jsx)(R.qv, {
            label: W.intl.string(W.t["bTfA//"]),
            icon: g.lI8,
            onClick: e => {
              e.preventDefault(), e.stopPropagation(), O.A.cancelFriendRequest(t.id, {
                location: "friends-popout"
              }), null == j || j("cancel_friend_request", t.id)
            }
          }) : p ? (0, i.jsx)(R.qv, {
            label: W.intl.string(W.t.w5uwoI),
            icon: g.Rvf,
            onClick: eT
          }) : null, (0, i.jsxs)(i.Fragment, {
            children: [ep.map(e => (0, i.jsx)(R.qv, {
              label: ei[e.application_id] ? W.intl.string(W.t["8BEiNn"]) : W.intl.string(W.t.OKsSCR),
              icon: ei[e.application_id] ? g.A9s : g.E7M,
              onClick: t => eP(t, e)
            }, e.application_id)), eg.map(e => {
              var n;
              return (0, i.jsx)(R.qv, {
                label: ei[e.application_id] ? W.intl.string(W.t["8BEiNn"]) : W.intl.formatToPlainString(W.t["KHLo+F"], {
                  channel: null != (n = t.globalName) ? n : t.username,
                  game: e.name
                }),
                icon: ei[e.application_id] ? g.A9s : g.DpX,
                onClick: t => ej(t, e)
              }, e.application_id)
            })]
          }), E !== $.eA$.PENDING_INCOMING && E !== $.eA$.PENDING_OUTGOING && (0, i.jsx)(R.qv, {
            label: W.intl.string(W.t["g33r/P"]),
            icon: g.oyn,
            onClick: eD
          }), (0, i.jsx)(R.qv, {
            label: W.intl.string(W.t["UKOtz+"]),
            icon: g.jNK,
            onClick: e_
          })]
        })]
      })
    }
  })
});

function el(e) {
  let {
    groupId: t,
    groupName: r,
    displayText: s,
    isCollapsed: a,
    canCollapse: u,
    onToggle: c,
    position: d,
    onReorder: p,
    isHovered: f,
    isDragDisabled: h = false
  } = e, {
    isOver: O,
    drop: E
  } = (0, H.pD)(t, h), {
    isDragging: A,
    dragSourcePosition: y,
    drag: N,
    drop: v
  } = (0, H.al)(t, d, p, h), I = l.useCallback(e => {
    (0, m.L3)(e, async () => {
      let {
        default: e
      } = await n.e("97717").then(n.bind(n, 607956));
      return n => (0, i.jsx)(e, X(Z({}, n), {
        groupId: t,
        groupName: r
      }))
    })
  }, [t, r]), S = l.useCallback(e => {
    E(e), v(e), N(e)
  }, [E, v, N]);
  return (0, i.jsx)(b.A, {
    className: o()(J.uW, {
      [J.Ke]: O || null != y && y !== d || f,
      [J.cB]: A
    }),
    children: (0, i.jsx)("div", {
      ref: S,
      onContextMenu: I,
      children: (0, i.jsxs)(g.DUT, {
        onClick: () => u && c(),
        "aria-hidden": true,
        className: u ? J.Ws : true,
        children: [s, u ? a ? (0, i.jsx)(g._BQ, {
          size: "md",
          color: "currentColor",
          className: J.t4
        }) : (0, i.jsx)(g.abt, {
          size: "md",
          color: "currentColor",
          className: J.t4
        }) : null]
      })
    })
  })
}

function es(e) {
  let {
    displayText: t,
    isCollapsed: n,
    canCollapse: r,
    onToggle: l
  } = e, {
    isOver: s,
    drop: o
  } = (0, H.dx)();
  return (0, i.jsx)(b.A, {
    className: J.uW,
    children: (0, i.jsx)("div", {
      ref: o,
      style: {
        backgroundColor: s ? "var(--interactive-background-hover)" : true,
        transition: "background-color 0.1s"
      },
      children: (0, i.jsxs)(g.DUT, {
        onClick: () => r && l(),
        "aria-hidden": true,
        className: r ? J.Ws : true,
        children: [t, r ? n ? (0, i.jsx)(g._BQ, {
          size: "md",
          color: "currentColor",
          className: J.t4
        }) : (0, i.jsx)(g.abt, {
          size: "md",
          color: "currentColor",
          className: J.t4
        }) : null]
      })
    })
  })
}

function eo(e) {
  let {
    user: t,
    activities: n,
    nickname: r
  } = e;
  return [t.username, t.globalName, r, ...n.map(e => e.name)].filter(Q.Vq)
}
ei.displayName = "FriendRow";
let ea = {
  searchType: Chunk379078.n.FUZZY,
  searchStringGenerator: eo,
  sortType: Chunk379078.r.JARO_WINKLER,
  throttleMs: 100
};

function eu(e, t) {
  let [n, r] = l.useState(t), i = l.useCallback(() => r(t), [t]);
  return (0, G.RT)(e, t, r, ea), [n, i]
}
let ec = Chunk64700.memo(function(e) {
  let t, r, s, o, c, f, h, O, {
      containerClassName: A,
      listClassName: y,
      closePopout: N,
      renderHeader: v,
      onAction: I,
      onFriendVisible: S,
      autoFocus: b = false,
      appContext: _ = $.BRT.APP
    } = e,
    D = (t = (0, B.y)(), r = (0, d.yK)([M.A, V.default, L.A], () => {
      let e = [];
      for (let [t, n] of M.A.getMutableRelationships().entries()) {
        if (n !== $.eA$.PENDING_INCOMING && n !== $.eA$.PENDING_OUTGOING) continue;
        let r = V.default.getUser(t);
        if (null != r) {
          let i = M.A.getSince(t),
            l = null != i ? new Date(i).getTime() : 0;
          e.push({
            user: r,
            activities: L.A.getActivities(t),
            timestamp: l,
            nickname: M.A.getNickname(t),
            relationshipType: n
          })
        }
      }
      return e.sort((e, t) => t.timestamp - e.timestamp), e
    }), s = (0, d.yK)([U.A, V.default, L.A, M.A, K.A], () => {
      let e = U.A.getUserAffinitiesMap(),
        t = [];
      for (let [n, r] of e.entries()) {
        let e = M.A.getRelationshipType(n);
        if (M.A.isFriend(n) || r.communicationProbability <= .1634 || e === $.eA$.PENDING_INCOMING || e === $.eA$.PENDING_OUTGOING) continue;
        let i = V.default.getUser(n);
        if (null != i) {
          let e = L.A.getActivities(n),
            l = K.A.getVoiceStateForUser(n),
            s = (null == l ? true : l.channelId) != null;
          t.push({
            user: i,
            activities: e,
            affinity: r.communicationProbability,
            hasActivity: e.length > 0 || s,
            nickname: M.A.getNickname(n)
          })
        }
      }
      return t.sort((e, t) => {
        let n = 1e3 * !!e.hasActivity + e.affinity;
        return 1e3 * !!t.hasActivity + t.affinity - n
      })
    }, []), c = null == (o = (0, d.bG)([q.A], () => q.A.getPrimaryActivity())) ? true : o.application_id, f = (0, j.s)(c), h = (0, d.cf)([M.A, V.default, L.A, K.A], () => {
      let e = (null == o ? true : o.name) != null && null != c,
        t = {
          activities: [],
          sameActivity: [],
          online: [],
          offline: []
        },
        n = new Map;
      for (let r of (e && null != c && null != f && f.length > 0 && f.forEach(e => {
          let t = e.author_id;
          if (!M.A.isFriend(t)) return;
          let r = V.default.getUser(t);
          null != r && n.set(t, {
            user: r,
            activities: [],
            gameProfileEntry: e,
            nickname: M.A.getNickname(t)
          })
        }), M.A.getFriendIDs())) {
        let i = V.default.getUser(r);
        if (null == i) continue;
        let l = L.A.getStatus(r),
          s = L.A.getActivities(r),
          o = M.A.getNickname(r),
          a = K.A.getVoiceStateForUser(r),
          u = (null == a ? true : a.channelId) != null,
          d = s.filter(e => e.type === $.$pd.PLAYING || e.type === $.$pd.LISTENING || e.type === $.$pd.WATCHING || e.type === $.$pd.STREAMING),
          p = d.filter(e => e.application_id === c),
          g = e && p.length > 0,
          f = {
            user: i,
            activities: g ? p : d,
            nickname: o
          };
        g ? (t.sameActivity.push(f), n.delete(r)) : d.length > 0 ? t.activities.push(f) : u ? t.activities.push(X(Z({}, f), {
          activities: s
        })) : l === $.clD.ONLINE || l === $.clD.IDLE || l === $.clD.DND ? t.online.push(f) : t.offline.push(f)
      }
      let r = (e, t) => {
        var n, r;
        let i = (null != (n = e.user.globalName) ? n : e.user.username).toLowerCase(),
          l = (null != (r = t.user.globalName) ? r : t.user.username).toLowerCase();
        return i.localeCompare(l)
      };
      if (t.sameActivity.sort(r), n.size > 0) {
        let e = Array.from(n.values()).sort(r);
        t.sameActivity.push(...e)
      }
      return t.activities.sort(r), t.online.sort(r), t.offline.sort(r), t
    }, [f, o, c]), O = (0, d.bG)([q.A], () => q.A.getPrimaryActivity()), l.useMemo(() => {
      var e;
      return {
        groups: t,
        friendRequests: r,
        suggestions: s,
        activities: h.activities,
        sameActivity: h.sameActivity,
        online: h.online,
        offline: h.offline,
        currentActivityName: null != (e = null == O ? true : O.name) ? e : ""
      }
    }, [t, r, s, h, O])),
    P = function(e) {
      let [t, n] = l.useState(""), [r, i] = eu(t, e.friendRequests), [s, o] = eu(t, e.suggestions), [a, u] = eu(t, e.sameActivity), [c, d] = eu(t, e.activities), [p, g] = eu(t, e.online), [f, h] = eu(t, e.offline), m = l.useMemo(() => {
        if ("" === t.trim()) return e.groups;
        let n = t.toLowerCase();
        return e.groups.map(e => {
          let t = e.users.filter(e => eo(e).some(e => null != e && e.toLowerCase().includes(n)));
          return X(Z({}, e), {
            users: t
          })
        }).filter(e => e.users.length > 0)
      }, [t, e.groups]), O = l.useCallback(() => {
        n(""), i(), o(), u(), d(), g(), h()
      }, [i, o, u, d, g, h]);
      return {
        groups: m,
        friendRequests: r,
        suggestions: s,
        sameActivity: a,
        activities: c,
        online: p,
        offline: f,
        currentActivityName: e.currentActivityName,
        searchQuery: t,
        setSearchQuery: n,
        clearSearch: O
      }
    }(D),
    {
      searchQuery: R,
      setSearchQuery: C,
      clearSearch: w
    } = P,
    G = ee(P, ["searchQuery", "setSearchQuery", "clearSearch"]),
    x = R.trim().length > 0,
    k = l.useMemo(() => {
      let e = G.groups.length;
      return {
        FRIEND_REQUESTS: 0,
        SAME_ACTIVITY: e + 1,
        ACTIVITIES: e + 2,
        SUGGESTIONS: e + 3,
        ONLINE: e + 4,
        OFFLINE: e + 5
      }
    }, [G.groups.length]),
    [F, Q] = l.useState([k.FRIEND_REQUESTS]),
    {
      hoveredGroupId: H,
      handleGroupHover: et,
      handleGroupHoverRemove: en
    } = (0, Y.p)();
  l.useEffect(() => {
    let e = Array.from({
      length: G.groups.length
    }, (e, t) => t + 1);
    Q(t => [...t, ...e])
  }, []);
  let er = l.useRef(null),
    ea = (0, E.A)("friends-popout", er),
    ec = l.useCallback(e => {
      Q(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
    }, []),
    ed = l.useCallback(e => {
      if (2 !== e.length) return;
      let [t, n] = e, r = G.groups.map(e => e.id), i = r.indexOf(t), l = r.indexOf(n);
      if (false === i || false === l) return;
      let s = [...r];
      s.splice(i, 1), s.splice(l, 0, t), T.A.reorderGroups(s)
    }, [G.groups]),
    ep = l.useCallback((0, a.debounce)(() => {
      null == I || I("search_friends")
    }, 1e3, {
      leading: true,
      trailing: false
    }), [I]),
    eg = l.useCallback(e => {
      var t;
      C(e), ep(), null == (t = er.current) || t.scrollToTop()
    }, [C, ep]),
    ef = l.useCallback(() => {
      var e;
      w(), ep(), null == (e = er.current) || e.scrollToTop()
    }, [w, ep]),
    eh = l.useCallback(e => {
      (0, m.L3)(e, async () => {
        let {
          default: e
        } = await n.e("83253").then(n.bind(n, 337588));
        return t => (0, i.jsx)(e, X(Z({}, t), {
          onClose: N
        }))
      }), null == I || I("open_settings_modal")
    }, [N, I]),
    em = l.useCallback(() => {
      (0, g.mMO)(async () => {
        let {
          default: e
        } = await n.e("27084").then(n.bind(n, 662183));
        return t => (0, i.jsx)(e, Z({}, t))
      }), null == I || I("open_friend_modal")
    }, [I]),
    eO = l.useCallback(e => {
      var t;
      let {
        section: n
      } = e, r = "", l = 0, s = false, o = "", a = null;
      if (n > k.FRIEND_REQUESTS && n < k.SAME_ACTIVITY) {
        if (null != (a = G.groups[n - 1])) {
          let e = a.users.filter(e => {
              let t = L.A.getStatus(e.user.id);
              return t === $.clD.ONLINE || t === $.clD.IDLE || t === $.clD.DND
            }).length,
            t = a.users.length;
          r = a.name, l = t, o = "".concat(r, " — ").concat(e, "/").concat(t, " online"), 0 === e && 0 === t && (o = "".concat(r, " — 0 online")), s = true
        }
      } else switch (n) {
        case k.FRIEND_REQUESTS:
          r = W.intl.string(W.t.fyA115), l = G.friendRequests.length, o = "".concat(r, " — ").concat(l);
          break;
        case k.SAME_ACTIVITY:
          r = D.currentActivityName, l = G.sameActivity.length, o = "".concat(r, " — ").concat(l);
          break;
        case k.SUGGESTIONS:
          r = W.intl.string(W.t.qm9dSj), l = G.suggestions.length, o = "".concat(r, " — ").concat(l);
          break;
        case k.ACTIVITIES:
          r = W.intl.string(W.t.TxqPQR), l = G.activities.length, o = "".concat(r, " — ").concat(l);
          break;
        case k.ONLINE:
          r = W.intl.string(W.t.WbGtnH), l = G.online.length, o = "".concat(r, " — ").concat(l);
          break;
        case k.OFFLINE:
          r = W.intl.string(W.t.Vv0abJ), l = G.offline.length, o = "".concat(r, " — ").concat(l)
      }
      let u = s || (n === k.SUGGESTIONS || n === k.FRIEND_REQUESTS) && l > 3,
        c = F.includes(n);
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(g.AC4, {
          children: W.intl.format(W.t.Uaqbke, {
            title: r,
            count: l
          })
        }), s ? (0, i.jsx)(el, {
          groupId: null != (t = null == a ? true : a.id) ? t : "",
          groupName: r,
          displayText: o,
          isCollapsed: c,
          canCollapse: u,
          onToggle: () => ec(n),
          position: n,
          onReorder: ed,
          isHovered: H === (null == a ? true : a.id),
          isDragDisabled: x
        }) : (0, i.jsx)(es, {
          displayText: o,
          isCollapsed: c,
          canCollapse: u,
          onToggle: () => ec(n)
        })]
      })
    }, [k, D.currentActivityName, G.groups, G.friendRequests.length, G.sameActivity.length, G.suggestions.length, G.activities.length, G.online.length, G.offline.length, F, ec, ed, H, x]),
    eE = l.useCallback(e => {
      let t, n;
      if (e.section > k.FRIEND_REQUESTS && e.section < k.SAME_ACTIVITY) {
        let r = G.groups[e.section - 1];
        if (null != r) {
          let i = F.includes(e.section) ? r.users.filter(e => {
            let t = L.A.getStatus(e.user.id);
            return t === $.clD.ONLINE || t === $.clD.IDLE || t === $.clD.DND
          }) : r.users;
          if (0 === i.length) return null;
          t = i[e.row], n = r.id
        }
      } else t = e.section === k.FRIEND_REQUESTS ? G.friendRequests[e.row] : e.section === k.SAME_ACTIVITY ? G.sameActivity[e.row] : e.section === k.SUGGESTIONS ? G.suggestions[e.row] : e.section === k.ACTIVITIES ? G.activities[e.row] : e.section === k.ONLINE ? G.online[e.row] : G.offline[e.row];
      return null == t || null == t.user ? null : (0, i.jsx)(ei, X(Z({}, t), {
        index: e.row,
        closeParentPopout: N,
        isSuggestion: e.section === k.SUGGESTIONS,
        appContext: _,
        onAction: I,
        onFriendVisible: S,
        friendGroupId: n,
        onGroupHover: et,
        onGroupHoverRemove: en,
        isDragDisabled: x
      }), "".concat(e.section, ":").concat(t.user.id))
    }, [k, G, F, N, _, I, S, et, en, x]),
    {
      showSuggestions: eA
    } = (0, z.A)(),
    ey = l.useMemo(() => {
      let e = [],
        t = F.includes(k.FRIEND_REQUESTS) ? Math.min(3, G.friendRequests.length) : G.friendRequests.length;
      e.push(t);
      for (let t = 0; t < G.groups.length; t++) {
        let n = G.groups[t],
          r = F.includes(t + 1) ? n.users.filter(e => {
            let t = L.A.getStatus(e.user.id);
            return t === $.clD.ONLINE || t === $.clD.IDLE || t === $.clD.DND
          }).length : n.users.length;
        e.push(Math.max(r, 1))
      }
      let n = eA ? F.includes(k.SUGGESTIONS) ? Math.min(3, G.suggestions.length) : G.suggestions.length : 0;
      return e.push(G.sameActivity.length, G.activities.length, n, G.online.length, G.offline.length), e
    }, [k, G, F, eA]),
    eN = Object.values(G).every(e => 0 === e.length);
  return (0, i.jsxs)("div", {
    className: A,
    children: [null != v ? (0, i.jsx)("div", {
      className: J.wx,
      children: v()
    }) : (0, i.jsxs)("div", {
      className: J.wx,
      children: [(0, i.jsx)(g.Heading, {
        variant: "heading-lg/semibold",
        children: W.intl.string(W.t.TdEu5X)
      }), (0, i.jsxs)("div", {
        className: J.xv,
        children: [(0, i.jsx)(p.m_, {
          text: W.intl.string(W.t.w5uwoI),
          children: (0, i.jsx)(g.K0, {
            "aria-label": W.intl.string(W.t.w5uwoI),
            size: "sm",
            variant: "secondary",
            icon: g.Rvf,
            onClick: em
          })
        }), (0, i.jsx)(p.m_, {
          text: W.intl.string(W.t["3D5yo/"]),
          children: (0, i.jsx)(g.K0, {
            "aria-label": W.intl.string(W.t["3D5yo/"]),
            size: "sm",
            variant: "secondary",
            icon: g.jNK,
            onClick: eh
          })
        })]
      })]
    }), (0, i.jsx)("div", {
      className: J.MT,
      children: (0, i.jsx)(g.IWV, {
        query: R,
        onChange: eg,
        onClear: ef,
        placeholder: W.intl.string(W.t["5h0QOP"]),
        autoFocus: b
      })
    }), eN ? (0, i.jsx)("div", {
      className: J.y7,
      children: (0, i.jsx)(g.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: W.intl.string(W.t["7sW4h1"])
      })
    }) : (0, i.jsx)(u.hD, {
      navigator: ea,
      children: (0, i.jsx)(u.PR, {
        children: e => {
          let {
            ref: t,
            role: n
          } = e, r = ee(e, ["ref", "role"]);
          return (0, i.jsx)(g.skg, {
            children: e => (0, i.jsx)(g.B8B, Z({
              innerRole: n,
              innerAriaLabel: W.intl.string(W.t.TdEu5X),
              ref: e => {
                var n;
                er.current = e, t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null
              },
              className: y,
              sectionHeight: 40,
              rowHeight: 42,
              sidebarHeight: 0,
              renderSection: eO,
              renderRow: eE,
              sections: ey,
              paddingTop: 4,
              paddingBottom: 4
            }, r, e))
          })
        }
      })
    })]
  })
});

function ed(e) {
  let {
    onOpen: t,
    onClose: n,
    children: r,
    popoutPosition: s,
    popoutAlign: o
  } = e, [a, u] = l.useState(false), c = l.useRef(null), d = l.useCallback(() => {
    u(false), null == n || n()
  }, [n]), p = l.useCallback(() => {
    u(e => {
      let r = !e;
      return r ? null == t || t() : null == n || n(), r
    })
  }, [n, t]), f = l.useCallback(() => (0, i.jsx)(ec, {
    containerClassName: J.kL,
    listClassName: J.p_,
    closePopout: d,
    autoFocus: true
  }), [d]);
  return (0, i.jsx)(g.YNO, {
    targetElementRef: c,
    animation: g.YNO.Animation.NONE,
    position: s,
    align: o,
    autoInvert: false,
    shouldShow: a,
    onRequestClose: d,
    renderPopout: f,
    ignoreModalClicks: true,
    clickTrap: true,
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return r(p, n, e, c)
    }
  })
}