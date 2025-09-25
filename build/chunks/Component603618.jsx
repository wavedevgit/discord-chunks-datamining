/** Chunk was on 50751 **/
/** chunk id: 603618, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => er,
  lE: () => ei,
  lX: () => en
}), require("./388685.js"), require("./539854.js"), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk661869 = require("./661869.js"),
  Chunk876215 = require("./876215.js"),
  Chunk884439 = require("./884439.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk278323 = require("./278323.js"),
  Chunk24124 = require("./24124.js"),
  Chunk493683 = require("./493683.js"),
  Chunk13245 = require("./13245.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk549879 = require("./549879.jsx"),
  Chunk620662 = require("./620662.js"),
  Chunk835473 = require("./835473.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk297781 = require("./297781.jsx"),
  Chunk656709 = require("./656709.js"),
  Chunk692701 = require("./692701.js"),
  Chunk225559 = require("./225559.js"),
  Chunk703656 = require("./703656.js"),
  Chunk93127 = require("./93127.js"),
  Chunk752048 = require("./752048.js"),
  Chunk409057 = require("./409057.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk293273 = require("./293273.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk801077 = require("./801077.js"),
  Chunk237997 = require("./237997.js"),
  Chunk630388 = require("./630388.js"),
  Chunk5192 = require("./5192.js"),
  Chunk709054 = require("./709054.js"),
  Chunk444295 = require("./444295.js"),
  Chunk388627 = require("./388627.js"),
  Chunk981631 = require("./981631.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk988486 = require("./988486.js");

function Q(e) {
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

function K(e, t) {
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

function X(e) {
  let {
    entry: t,
    currentUserActivity: n,
    idx: l
  } = e, a = (0, c.e7)([k.default], () => k.default.getUser(t.author_id)), [s, u] = r.useState("unsent"), [f, y] = r.useState(false);
  r.useEffect(() => {
    if ("sent" === s) {
      let e = setTimeout(() => y(true), 2e3);
      return () => clearTimeout(e)
    }
  }, [s]);
  let O = null != n && (0, v.Z)(n, H.xjy.JOIN),
    S = async e => {
      if (null != a && "unsent" === s) {
        e.stopPropagation();
        try {
          if (u("sending"), O) await h.Z.sendActivityInviteUser({
            type: H.mFx.JOIN,
            userId: a.id,
            activity: n,
            location: H.Sbl.UNLOCKED_OVERLAY
          });
          else {
            var i;
            let e = await m.Z.getOrEnsurePrivateChannel(a.id),
              n = null != (i = P.Z.getChannel(e)) ? i : null;
            o()(null != n, "Send channel must be defined"), (0, Z.uL)(H.Z5c.CHANNEL(n.guild_id, n.id)), (0, E.i)(H.IlC.OVERLAY, true), true === t.extra.fake_inventory_item ? await (0, j.k)({
              channel: n,
              content: Y.intl.formatToPlainString(Y.t.UVBA9v, {
                gameName: t.extra.game_name
              }),
              whenReady: true,
              doNotNotifyOnError: false,
              location: F.dy.OVERLAY
            }) : await (0, j.p)({
              channel: n,
              content: Y.intl.string(Y.t.DwAcMz),
              entry: t,
              whenReady: true,
              doNotNotifyOnError: false,
              location: F.dy.OVERLAY
            })
          }
          g.Z.track(H.rMx.OVERLAY_GAME_INVITE_SENT, {
            target_user_id: a.id,
            target_content_entry_id: t.id,
            target_index: l
          }), (0, W.Ws)(H.Odu.ACTIVITY, {
            type: W.Qu.INVITE,
            value: W.bk.INVITE_SENT,
            userId: a.id
          }), u("sent")
        } catch (e) {
          u("unsent")
        }
      }
    }, b = async () => {
      var e;
      if (null == a) return;
      let t = await m.Z.getOrEnsurePrivateChannel(a.id),
        n = null != (e = P.Z.getChannel(t)) ? e : null;
      o()(null != n, "Send channel must be defined"), (0, Z.uL)(H.Z5c.CHANNEL(n.guild_id, n.id)), (0, E.i)(H.IlC.OVERLAY, true), (0, W.Ws)(H.Odu.ACTIVITY, {
        type: W.Qu.REDIRECT,
        value: W.bk.CHAT,
        userId: a.id
      })
    }, x = O ? Y.intl.string(Y.t["3fRyS0"]) : Y.intl.string(Y.t.XHxDIS), I = O ? (0, i.jsx)(p.ejJ, {
      color: "currentColor",
      size: "sm"
    }) : (0, i.jsx)(p.Uuj, {
      color: "currentColor",
      size: "sm"
    });
  return (0, i.jsx)(p.ua7, {
    text: x,
    "aria-label": x,
    children: e => (0, i.jsx)(d.zx, K(Q({}, e), {
      submitting: "sending" === s,
      onClick: f ? b : S,
      className: B.inviteButton,
      wrapperClassName: B.inviteButtonWrapper,
      innerClassName: B.inviteButtonInner,
      color: d.Tt.TRANSPARENT,
      look: d.iL.FILLED,
      size: d.Ph.ICON,
      grow: false,
      children: "sent" === s ? f ? (0, i.jsx)(p.kBi, {
        color: "currentColor",
        size: "sm"
      }) : (0, i.jsx)(p.kSu, {
        color: "currentColor",
        size: "sm"
      }) : I
    }))
  })
}

function q(e) {
  var t;
  let {
    entry: n,
    currentUserActivity: l
  } = e, o = (0, c.e7)([k.default], () => k.default.getUser(n.author_id)), a = null != (t = null == l ? true : l.application_id) ? t : n.extra.application_id, s = (0, c.e7)([A.Z], () => null != o ? A.Z.getApplicationActivity(o.id, a) : null, [a, o]), [u, f] = r.useState("unsent");
  if (!(null != s && (0, v.Z)(s, H.xjy.JOIN))) return null;
  let m = async e => {
    if (null != o && "unsent" === u) {
      e.stopPropagation();
      try {
        f("sending"), await h.Z.sendActivityInviteUser({
          type: H.mFx.JOIN_REQUEST,
          userId: o.id,
          activity: s,
          location: H.Sbl.UNLOCKED_OVERLAY
        }), (0, W.Ws)(H.Odu.ACTIVITY, {
          type: W.Qu.INVITE,
          value: W.bk.JOIN_REQUEST_SENT,
          userId: o.id
        }), f("sent")
      } catch (e) {
        f("unsent")
      }
    }
  }, g = Y.intl.string(Y.t.OKsSCQ);
  return (0, i.jsx)(p.ua7, {
    text: g,
    "aria-label": g,
    children: e => (0, i.jsx)(d.zx, K(Q({}, e), {
      submitting: "sending" === u,
      onClick: m,
      className: B.inviteButton,
      wrapperClassName: B.inviteButtonWrapper,
      innerClassName: B.inviteButtonInner,
      color: d.Tt.TRANSPARENT,
      look: d.iL.FILLED,
      size: d.Ph.ICON,
      grow: false,
      children: "sent" === u ? (0, i.jsx)(p.kSu, {
        color: "currentColor",
        size: "sm"
      }) : (0, i.jsx)(p.V9, {
        color: "currentColor",
        size: "sm"
      })
    }))
  })
}

function J(e) {
  let {
    entry: t,
    currentUserActivity: n,
    idx: r
  } = e, l = (0, c.e7)([k.default], () => k.default.getUser(t.author_id)), o = (0, c.e7)([_.Z], () => null != l ? _.Z.getAnyStreamForUser(l.id) : null, [l]), {
    isMobileOnline: a,
    status: s
  } = (0, c.cj)([A.Z], () => null == l ? {
    isMobileOnline: true,
    status: true
  } : {
    isMobileOnline: A.Z.isMobileOnline(l.id),
    status: A.Z.getStatus(l.id)
  }, [l]);
  return null == l ? null : (0, i.jsxs)("div", {
    className: B.row,
    children: [(0, i.jsx)(y.Z, {
      className: B.avatar,
      user: l,
      isMobile: a,
      status: s
    }), (0, i.jsxs)("div", {
      className: B.details,
      children: [(0, i.jsxs)("div", {
        className: B.usernameWrapper,
        children: [(0, i.jsx)(p.Text, {
          className: B.username,
          variant: "text-md/medium",
          color: "header-primary",
          children: z.ZP.getName(true, true, l)
        }), null != o && (0, i.jsx)(b.ZP, {
          className: B.liveIndicator
        })]
      }), (0, i.jsx)(x.Gk, {
        location: x.Gt.OVERLAY,
        className: B.badgesContainer,
        children: [x.OV, x.wO, x.f, x.v1, x.pQ].map((e, n) => (0, i.jsx)(e, {
          entry: t
        }, "entry-".concat(n)))
      })]
    }), (0, i.jsx)(q, {
      entry: t,
      currentUserActivity: n,
      idx: r
    }), (0, i.jsx)(X, {
      entry: t,
      currentUserActivity: n,
      idx: r
    })]
  })
}

function $(e) {
  return new Set(e.map(e => e.author_id))
}

function ee(e) {
  let {
    entries: t,
    currentUserActivity: n,
    className: l,
    hideHeader: o = false
  } = e, a = (0, W.ee)(() => $(t), [t]), s = (0, W.ee)(() => new Set(Array.from($(t)).filter(e => {
    let n = t.find(t => {
      let {
        author_id: n
      } = t;
      return e === n
    });
    return null != n && n.traits.find(e => {
      let {
        type: t
      } = e;
      return t === u.N.IS_LIVE
    })
  })), [t]), c = (0, W.ee)(() => new Set(t.map(e => e.id)), [t]);
  return (r.useEffect(() => {
    (0, W.zi)(H.Odu.ACTIVITY, {
      locked: M.default.isInstanceLocked(),
      shownUserIds: Array.from(a),
      liveUserIds: Array.from(s),
      contentInventoryIds: Array.from(c)
    })
  }, [a, s, c]), 0 === t.length) ? null : (0, i.jsxs)("div", {
    className: l,
    children: [!o && (0, i.jsx)("div", {
      className: B.contentInventoryHeader,
      children: (0, i.jsx)(p.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        tag: "div",
        children: Y.intl.string(Y.t.y9eo7e)
      })
    }), t.map((e, t) => (0, i.jsx)(J, {
      idx: t,
      entry: e,
      currentUserActivity: n
    }, t))]
  })
}

function et(e) {
  let {
    gamingId: t,
    maxUserShowCount: n,
    userAffinityThresholdV2: i = .0029
  } = e, l = (0, I.Z)(t, "useLiveActivityRows");
  (0, O.ZP)(() => {
    (0, w._)()
  });
  let o = (0, c.e7)([D.Z], () => null == t ? null : D.Z.getApplicationActivity(t), [t]),
    d = (0, c.Wu)([L.Z, R.Z, N.Z], () => {
      if (null == t) return [];
      let e = L.Z.nowPlayingCards,
        n = {
          v2: i
        };
      return e.reduce((e, n) => {
        if (n.type !== H.GOo.USER) return e;
        let i = n.party.currentActivities;
        if (0 === i.length) return e;
        for (let n of i) n.game.id === t && null != n.activity && e.push(n);
        return e
      }, []).filter(e => {
        let t = e.activityUser.id,
          i = R.Z.isFriend(t);
        return function(e, t, n) {
          let {
            v2: i
          } = n;
          if (null == e) return t;
          let {
            communicationProbability: r,
            dmProbability: l,
            serverMessageProbability: o,
            vcProbability: a
          } = e;
          switch (true) {
            case r > i:
            case l > i:
            case o > i:
            case a > i:
              returntrue;
            default:
              return t
          }
        }(N.Z.getUserAffinity(t), i, n)
      })
    }, [t, i]);
  return (0, O.ZP)(() => (C.L(), () => C.v())), {
    entries: r.useMemo(() => {
      let e = l.filter(e => !d.some(t => t.activityUser.id === e.author_id)),
        t = [...d.map(e => (function(e) {
          var t, n, i, r, l, o, c;
          let d = null != (l = null == (n = e.activity) || null == (t = n.timestamps) ? true : t.start) ? l : Date.now();
          return {
            id: U.default.fromTimestamp(d),
            author_id: e.activityUser.id,
            extra: {
              type: "played_game_extra",
              game_name: null != (o = null == (i = e.activity) ? true : i.name) ? o : e.game.name,
              application_id: null != (c = null == (r = e.activity) ? true : r.application_id) ? c : e.game.id,
              fake_inventory_item: true
            },
            content_type: s.s.PLAYED_GAME,
            author_type: a.i.USER,
            participants: e.playingMembers.map(e => e.id),
            traits: [{
              type: u.N.IS_LIVE,
              is_live: true
            }]
          }
        })(e)), ...e];
      return null != n ? t.slice(0, n) : t
    }, [l, d, n]),
    currentUserActivity: o
  }
}

function en(e) {
  let t = et(e);
  return (0, i.jsx)(ee, K(Q({}, t), {
    className: e.className
  }))
}

function ei(e) {
  let {
    activity: t,
    currentUser: n,
    showInviteButton: r = true
  } = e, l = null != t && (0, v.Z)(t, H.xjy.JOIN), o = (0, S.q)(null == t ? true : t.application_id), a = null != o && (0, V.yE)(o.flags, H.udG.EMBEDDED);
  return null == t || null == n ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(T.Z, {
      className: B.activityCard,
      activity: t,
      user: n,
      currentUser: n,
      appContext: H.IlC.OVERLAY
    }), l && !a && r ? (0, i.jsx)(d.zx, {
      className: B.inviteFriendsButton,
      onClick: () => {
        (0, f.h7)(t, false, H.IlC.POPOUT), (0, W.Ws)(H.Odu.ACTIVITY, {
          type: W.Qu.INVITE,
          value: W.bk.PANEL_OPENED
        })
      },
      size: d.Ph.SMALL,
      color: d.Tt.PRIMARY,
      children: Y.intl.string(Y.t["6Qgren"])
    }) : null]
  })
}

function er(e) {
  let {
    locked: t
  } = e, n = (0, G.II)(), r = null == n ? true : n.id, l = null == n ? true : n.altId, o = (0, I.Z)(r, "ActivityWidget"), a = (0, c.e7)([k.default], () => k.default.getCurrentUser()), s = null != l ? l : r, u = (0, c.e7)([D.Z], () => null == s ? null : D.Z.getApplicationActivity(s), [s]);
  (0, O.ZP)(() => (C.L(), () => C.v()));
  let d = et({
    gamingId: s,
    userAffinityThresholdV2: .00145,
    maxUserShowCount: 12
  });
  return t || 0 === o.length && null == u ? null : (0, i.jsxs)("div", {
    className: B.container,
    children: [(0, i.jsx)(ei, {
      activity: u,
      currentUser: a
    }), (0, i.jsx)(ee, K(Q({}, d), {
      className: B.contentInventoryContainer,
      hideHeader: true
    }))]
  })
}