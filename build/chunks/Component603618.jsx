/** Chunk was on 50751 **/
/** chunk id: 603618, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => er,
  lE: () => ei,
  lX: () => en
}), require("./388685.js"), require("./539854.js"), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk661869 = require("./661869.js"),
  Chunk876215 = require("./876215.js"),
  Chunk884439 = require("./884439.js"),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk278323 = require("./278323.js"),
  Chunk24124 = require("./24124.js"),
  Chunk493683 = require("./493683.js"),
  Chunk13245 = require("./13245.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk620662 = require("./620662.js"),
  Chunk835473 = require("./835473.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk297781 = require("./297781.jsx"),
  Chunk656709 = require("./656709.js"),
  Chunk692701 = require("./692701.js"),
  Chunk887413 = require("./887413.jsx"),
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
  Chunk5192 = require("./5192.js"),
  Chunk709054 = require("./709054.js"),
  Chunk444295 = require("./444295.js"),
  Chunk388627 = require("./388627.js"),
  Chunk981631 = require("./981631.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk847121 = require("./847121.js");

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
  let t, {
      entry: n,
      currentUserActivity: l,
      idx: a,
      variant: s
    } = e,
    c = (0, d.e7)([L.default], () => L.default.getUser(n.author_id)),
    [u, m] = r.useState("unsent"),
    [O, v] = r.useState(false);
  r.useEffect(() => {
    if ("sent" === u) {
      let e = setTimeout(() => v(true), 2e3);
      return () => clearTimeout(e)
    }
  }, [u]);
  let b = null != l && (0, E.Z)(l, F.xjy.JOIN),
    _ = async e => {
      if (null != c && "unsent" === u) {
        e.stopPropagation();
        try {
          if (m("sending"), b) await f.Z.sendActivityInviteUser({
            type: F.mFx.JOIN,
            userId: c.id,
            activity: l,
            location: F.Sbl.UNLOCKED_OVERLAY
          });
          else {
            var t;
            let e = await g.Z.getOrEnsurePrivateChannel(c.id),
              i = null != (t = A.Z.getChannel(e)) ? t : null;
            o()(null != i, "Send channel must be defined"), (0, Z.uL)(F.Z5c.CHANNEL(i.guild_id, i.id)), (0, C.i)(F.IlC.OVERLAY, true), true === n.extra.fake_inventory_item ? await (0, x.k)({
              channel: i,
              content: B.intl.formatToPlainString(B.t.UVBA9g, {
                gameName: n.extra.game_name
              }),
              whenReady: true,
              doNotNotifyOnError: false,
              location: H.dy.OVERLAY
            }) : await (0, x.p)({
              channel: i,
              content: B.intl.string(B.t.DwAcMz),
              entry: n,
              whenReady: true,
              doNotNotifyOnError: false,
              location: H.dy.OVERLAY
            })
          }
          y.Z.track(F.rMx.OVERLAY_GAME_INVITE_SENT, {
            target_user_id: c.id,
            target_content_entry_id: n.id,
            target_index: a
          }), (0, W.Ws)(F.Odu.ACTIVITY, {
            type: W.Qu.INVITE,
            value: W.bk.INVITE_SENT,
            userId: c.id
          }), m("sent")
        } catch (e) {
          m("unsent")
        }
      }
    }, S = async () => {
      var e;
      if (null == c) return;
      let t = await g.Z.getOrEnsurePrivateChannel(c.id),
        n = null != (e = A.Z.getChannel(t)) ? e : null;
      o()(null != n, "Send channel must be defined"), (0, Z.uL)(F.Z5c.CHANNEL(n.guild_id, n.id)), (0, C.i)(F.IlC.OVERLAY, true), (0, W.Ws)(F.Odu.ACTIVITY, {
        type: W.Qu.REDIRECT,
        value: W.bk.CHAT,
        userId: c.id
      })
    }, I = b ? B.intl.string(B.t["3fRySx"]) : B.intl.string(B.t.XHxDIV);
  return t = "sent" === u ? O ? p.kBi : p.kSu : b ? p.ejJ : p.Uuj, (0, i.jsx)(h.u, {
    text: I,
    "aria-label": I,
    children: (0, i.jsx)(p.hU, {
      icon: t,
      "aria-label": I,
      loading: "sending" === u,
      onClick: O ? S : _,
      variant: "subtle" === s ? "icon-only" : "secondary",
      size: "sm"
    })
  })
}

function J(e) {
  var t;
  let {
    entry: n,
    currentUserActivity: l,
    variant: o
  } = e, a = (0, d.e7)([L.default], () => L.default.getUser(n.author_id)), s = null != (t = null == l ? true : l.application_id) ? t : n.extra.application_id, c = (0, d.e7)([D.Z], () => null != a ? D.Z.getApplicationActivity(a.id, s) : null, [s, a]), [u, m] = r.useState("unsent");
  if (!(null != c && (0, E.Z)(c, F.xjy.JOIN))) return null;
  let g = async e => {
    if (null != a && "unsent" === u) {
      e.stopPropagation();
      try {
        m("sending"), await f.Z.sendActivityInviteUser({
          type: F.mFx.JOIN_REQUEST,
          userId: a.id,
          activity: c,
          location: F.Sbl.UNLOCKED_OVERLAY
        }), (0, W.Ws)(F.Odu.ACTIVITY, {
          type: W.Qu.INVITE,
          value: W.bk.JOIN_REQUEST_SENT,
          userId: a.id
        }), m("sent")
      } catch (e) {
        m("unsent")
      }
    }
  }, y = B.intl.string(B.t.OKsSCR);
  return (0, i.jsx)(h.u, {
    text: y,
    "aria-label": y,
    children: (0, i.jsx)(p.hU, {
      icon: "sent" === u ? p.kSu : p.V9,
      "aria-label": y,
      loading: "sending" === u,
      onClick: g,
      variant: "subtle" === o ? "icon-only" : "secondary",
      size: "sm"
    })
  })
}

function q(e) {
  let {
    entry: t,
    currentUserActivity: n,
    idx: r,
    variant: l
  } = e, o = (0, d.e7)([L.default], () => L.default.getUser(t.author_id)), a = (0, d.e7)([P.Z], () => null != o ? P.Z.getAnyStreamForUser(o.id) : null, [o]), {
    isMobileOnline: s,
    status: c
  } = (0, d.cj)([D.Z], () => null == o ? {
    isMobileOnline: true,
    status: true
  } : {
    isMobileOnline: D.Z.isMobileOnline(o.id),
    status: D.Z.getStatus(o.id)
  }, [o]);
  return null == o ? null : (0, i.jsxs)("div", {
    className: Y.row,
    children: [(0, i.jsx)(O.Z, {
      className: Y.avatar,
      user: o,
      isMobile: s,
      status: c
    }), (0, i.jsxs)("div", {
      className: Y.details,
      children: [(0, i.jsxs)("div", {
        className: Y.usernameWrapper,
        children: [(0, i.jsx)(p.Text, {
          className: Y.username,
          variant: "text-md/medium",
          color: "text-strong",
          children: V.ZP.getName(true, true, o)
        }), null != a && (0, i.jsx)(_.ZP, {
          className: Y.liveIndicator
        })]
      }), (0, i.jsx)(S.Gk, {
        location: S.Gt.OVERLAY,
        className: Y.badgesContainer,
        children: [S.OV, S.wO, S.f, S.v1, S.pQ].map((e, n) => (0, i.jsx)(e, {
          entry: t
        }, "entry-".concat(n)))
      })]
    }), (0, i.jsxs)("div", {
      className: Y.inviteButtons,
      children: [(0, i.jsx)(J, {
        entry: t,
        currentUserActivity: n,
        idx: r,
        variant: l
      }), (0, i.jsx)(X, {
        entry: t,
        currentUserActivity: n,
        idx: r,
        variant: l
      })]
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
    hideHeader: o = false,
    variant: a = "default"
  } = e, s = (0, W.ee)(() => $(t), [t]), u = (0, W.ee)(() => new Set(Array.from($(t)).filter(e => {
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
      return t === c.N.IS_LIVE
    })
  })), [t]), d = (0, W.ee)(() => new Set(t.map(e => e.id)), [t]);
  return (r.useEffect(() => {
    (0, W.zi)(F.Odu.ACTIVITY, {
      locked: z.default.isInstanceLocked(),
      shownUserIds: Array.from(s),
      liveUserIds: Array.from(u),
      contentInventoryIds: Array.from(d)
    })
  }, [s, u, d]), 0 === t.length) ? null : (0, i.jsxs)("div", {
    className: l,
    children: [!o && (0, i.jsx)("div", {
      className: Y.contentInventoryHeader,
      children: (0, i.jsx)(p.Text, {
        variant: "text-xs/medium",
        color: "subtle" === a ? "text-subtle" : "text-default",
        tag: "div",
        children: B.intl.string(B.t.y9eo7a)
      })
    }), t.map((e, t) => (0, i.jsx)(q, {
      idx: t,
      entry: e,
      currentUserActivity: n,
      variant: a
    }, t))]
  })
}

function et(e) {
  let {
    gamingId: t,
    maxUserShowCount: n,
    userAffinityThresholdV2: i = .0029
  } = e, l = (0, I.Z)(t);
  (0, v.ZP)(() => {
    (0, N._)()
  });
  let o = (0, d.e7)([k.Z], () => null == t ? null : k.Z.getApplicationActivity(t), [t]),
    u = (0, d.Wu)([M.Z, R.Z, w.Z], () => {
      if (null == t) return [];
      let e = M.Z.nowPlayingCards,
        n = {
          v2: i
        };
      return e.reduce((e, n) => {
        if (n.type !== F.GOo.USER) return e;
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
        }(w.Z.getUserAffinity(t), i, n)
      })
    }, [t, i]);
  return (0, v.ZP)(() => (j.L(), () => j.v())), {
    entries: r.useMemo(() => {
      let e = l.filter(e => !u.some(t => t.activityUser.id === e.author_id)),
        t = [...u.map(e => (function(e) {
          var t, n, i, r, l, o, u;
          let d = null != (l = null == (n = e.activity) || null == (t = n.timestamps) ? true : t.start) ? l : Date.now();
          return {
            id: U.default.fromTimestamp(d),
            author_id: e.activityUser.id,
            extra: {
              type: "played_game_extra",
              game_name: null != (o = null == (i = e.activity) ? true : i.name) ? o : e.game.name,
              application_id: null != (u = null == (r = e.activity) ? true : r.application_id) ? u : e.game.id,
              fake_inventory_item: true
            },
            content_type: s.s.PLAYED_GAME,
            author_type: a.i.USER,
            participants: e.playingMembers.map(e => e.id),
            traits: [{
              type: c.N.IS_LIVE,
              is_live: true
            }]
          }
        })(e)), ...e];
      return null != n ? t.slice(0, n) : t
    }, [l, u, n]),
    currentUserActivity: o
  }
}

function en(e) {
  let t = et(e);
  return (0, i.jsx)(ee, K(Q({}, t), {
    className: e.className,
    variant: e.variant
  }))
}

function ei(e) {
  let {
    activity: t,
    currentUser: n,
    showInviteButton: r = true
  } = e, l = null != t && (0, E.Z)(t, F.xjy.JOIN), o = (0, b.q)(null == t ? true : t.application_id), a = null != o && (0, u.yE)(o.flags, F.udG.EMBEDDED);
  return null == t || null == n ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(T.Z, {
      className: Y.activityCard,
      activity: t,
      user: n,
      currentUser: n,
      appContext: F.IlC.OVERLAY
    }), l && !a && r ? (0, i.jsx)("div", {
      className: Y.inviteFriendsButton,
      children: (0, i.jsx)(p.Button, {
        text: B.intl.string(B.t["6Qgrev"]),
        size: "sm",
        variant: "secondary",
        onClick: () => {
          (0, m.h7)(t, false, F.IlC.POPOUT), (0, W.Ws)(F.Odu.ACTIVITY, {
            type: W.Qu.INVITE,
            value: W.bk.PANEL_OPENED
          })
        }
      })
    }) : null]
  })
}

function er(e) {
  let {
    locked: t
  } = e, n = (0, G.II)(), r = null == n ? true : n.id, l = null == n ? true : n.altId, o = (0, I.Z)(r), a = (0, d.e7)([L.default], () => L.default.getCurrentUser()), s = null != l ? l : r, c = (0, d.e7)([k.Z], () => null == s ? null : k.Z.getApplicationActivity(s), [s]);
  (0, v.ZP)(() => (j.L(), () => j.v()));
  let u = et({
    gamingId: s,
    userAffinityThresholdV2: .00145,
    maxUserShowCount: 12
  });
  return t || 0 === o.length && null == c ? null : (0, i.jsxs)("div", {
    className: Y.container,
    children: [(0, i.jsx)(ei, {
      activity: c,
      currentUser: a
    }), (0, i.jsx)(ee, K(Q({}, u), {
      className: Y.contentInventoryContainer,
      hideHeader: true
    }))]
  })
}