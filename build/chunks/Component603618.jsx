/** Chunk was on 50751 **/
/** chunk id: 603618, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => el,
  lE: () => er,
  lX: () => ei
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
  Chunk755721 = require("./755721.js"),
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

function K(e) {
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

function X(e, t) {
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

function J(e) {
  let {
    entry: t,
    currentUserActivity: n,
    idx: l,
    variant: a
  } = e, s = (0, d.e7)([M.default], () => M.default.getUser(t.author_id)), [c, u] = r.useState("unsent"), [g, v] = r.useState(false);
  r.useEffect(() => {
    if ("sent" === c) {
      let e = setTimeout(() => v(true), 2e3);
      return () => clearTimeout(e)
    }
  }, [c]);
  let E = null != n && (0, b.Z)(n, B.xjy.JOIN),
    _ = async e => {
      if (null != s && "unsent" === c) {
        e.stopPropagation();
        try {
          if (u("sending"), E) await m.Z.sendActivityInviteUser({
            type: B.mFx.JOIN,
            userId: s.id,
            activity: n,
            location: B.Sbl.UNLOCKED_OVERLAY
          });
          else {
            var i;
            let e = await y.Z.getOrEnsurePrivateChannel(s.id),
              n = null != (i = k.Z.getChannel(e)) ? i : null;
            o()(null != n, "Send channel must be defined"), (0, Z.uL)(B.Z5c.CHANNEL(n.guild_id, n.id)), (0, j.i)(B.IlC.OVERLAY, true), true === t.extra.fake_inventory_item ? await (0, I.k)({
              channel: n,
              content: Y.intl.formatToPlainString(Y.t.UVBA9g, {
                gameName: t.extra.game_name
              }),
              whenReady: true,
              doNotNotifyOnError: false,
              location: H.dy.OVERLAY
            }) : await (0, I.p)({
              channel: n,
              content: Y.intl.string(Y.t.DwAcMz),
              entry: t,
              whenReady: true,
              doNotNotifyOnError: false,
              location: H.dy.OVERLAY
            })
          }
          O.Z.track(B.rMx.OVERLAY_GAME_INVITE_SENT, {
            target_user_id: s.id,
            target_content_entry_id: t.id,
            target_index: l
          }), (0, G.Ws)(B.Odu.ACTIVITY, {
            type: G.Qu.INVITE,
            value: G.bk.INVITE_SENT,
            userId: s.id
          }), u("sent")
        } catch (e) {
          u("unsent")
        }
      }
    }, S = async () => {
      var e;
      if (null == s) return;
      let t = await y.Z.getOrEnsurePrivateChannel(s.id),
        n = null != (e = k.Z.getChannel(t)) ? e : null;
      o()(null != n, "Send channel must be defined"), (0, Z.uL)(B.Z5c.CHANNEL(n.guild_id, n.id)), (0, j.i)(B.IlC.OVERLAY, true), (0, G.Ws)(B.Odu.ACTIVITY, {
        type: G.Qu.REDIRECT,
        value: G.bk.CHAT,
        userId: s.id
      })
    }, x = "subtle" === a ? f.TVs.colors.ICON_SECONDARY : "currentColor", C = E ? Y.intl.string(Y.t["3fRySx"]) : Y.intl.string(Y.t.XHxDIV), N = E ? (0, i.jsx)(f.ejJ, {
      color: x,
      size: "sm"
    }) : (0, i.jsx)(f.Uuj, {
      color: x,
      size: "sm"
    });
  return (0, i.jsx)(h.u, {
    text: C,
    "aria-label": C,
    children: (0, i.jsx)(p.zx, {
      submitting: "sending" === c,
      onClick: g ? S : _,
      className: "subtle" === a ? Q.inviteButtonSubtle : Q.inviteButton,
      wrapperClassName: Q.inviteButtonWrapper,
      innerClassName: Q.inviteButtonInner,
      color: p.Tt.TRANSPARENT,
      look: "subtle" === a ? p.iL.BLANK : p.iL.FILLED,
      size: p.Ph.ICON,
      grow: false,
      children: "sent" === c ? g ? (0, i.jsx)(f.kBi, {
        color: x,
        size: "sm"
      }) : (0, i.jsx)(f.kSu, {
        color: x,
        size: "sm"
      }) : N
    })
  })
}

function q(e) {
  var t;
  let {
    entry: n,
    currentUserActivity: l,
    variant: o
  } = e, a = (0, d.e7)([M.default], () => M.default.getUser(n.author_id)), s = null != (t = null == l ? true : l.application_id) ? t : n.extra.application_id, c = (0, d.e7)([R.Z], () => null != a ? R.Z.getApplicationActivity(a.id, s) : null, [s, a]), [u, g] = r.useState("unsent");
  if (!(null != c && (0, b.Z)(c, B.xjy.JOIN))) return null;
  let y = async e => {
    if (null != a && "unsent" === u) {
      e.stopPropagation();
      try {
        g("sending"), await m.Z.sendActivityInviteUser({
          type: B.mFx.JOIN_REQUEST,
          userId: a.id,
          activity: c,
          location: B.Sbl.UNLOCKED_OVERLAY
        }), (0, G.Ws)(B.Odu.ACTIVITY, {
          type: G.Qu.INVITE,
          value: G.bk.JOIN_REQUEST_SENT,
          userId: a.id
        }), g("sent")
      } catch (e) {
        g("unsent")
      }
    }
  }, O = "subtle" === o ? f.TVs.colors.ICON_SECONDARY : "currentColor", v = Y.intl.string(Y.t.OKsSCR);
  return (0, i.jsx)(h.u, {
    text: v,
    "aria-label": v,
    children: (0, i.jsx)(p.zx, {
      submitting: "sending" === u,
      onClick: y,
      className: "subtle" === o ? Q.inviteButtonSubtle : Q.inviteButton,
      wrapperClassName: Q.inviteButtonWrapper,
      innerClassName: Q.inviteButtonInner,
      color: p.Tt.TRANSPARENT,
      look: "subtle" === o ? p.iL.BLANK : p.iL.FILLED,
      size: p.Ph.ICON,
      grow: false,
      children: "sent" === u ? (0, i.jsx)(f.kSu, {
        color: O,
        size: "sm"
      }) : (0, i.jsx)(f.V9, {
        color: O,
        size: "sm"
      })
    })
  })
}

function $(e) {
  let {
    entry: t,
    currentUserActivity: n,
    idx: r,
    variant: l
  } = e, o = (0, d.e7)([M.default], () => M.default.getUser(t.author_id)), a = (0, d.e7)([A.Z], () => null != o ? A.Z.getAnyStreamForUser(o.id) : null, [o]), {
    isMobileOnline: s,
    status: c
  } = (0, d.cj)([R.Z], () => null == o ? {
    isMobileOnline: true,
    status: true
  } : {
    isMobileOnline: R.Z.isMobileOnline(o.id),
    status: R.Z.getStatus(o.id)
  }, [o]);
  return null == o ? null : (0, i.jsxs)("div", {
    className: Q.row,
    children: [(0, i.jsx)(v.Z, {
      className: Q.avatar,
      user: o,
      isMobile: s,
      status: c
    }), (0, i.jsxs)("div", {
      className: Q.details,
      children: [(0, i.jsxs)("div", {
        className: Q.usernameWrapper,
        children: [(0, i.jsx)(f.Text, {
          className: Q.username,
          variant: "text-md/medium",
          color: "header-primary",
          children: U.ZP.getName(true, true, o)
        }), null != a && (0, i.jsx)(S.ZP, {
          className: Q.liveIndicator
        })]
      }), (0, i.jsx)(x.Gk, {
        location: x.Gt.OVERLAY,
        className: Q.badgesContainer,
        children: [x.OV, x.wO, x.f, x.v1, x.pQ].map((e, n) => (0, i.jsx)(e, {
          entry: t
        }, "entry-".concat(n)))
      })]
    }), (0, i.jsx)(q, {
      entry: t,
      currentUserActivity: n,
      idx: r,
      variant: l
    }), (0, i.jsx)(J, {
      entry: t,
      currentUserActivity: n,
      idx: r,
      variant: l
    })]
  })
}

function ee(e) {
  return new Set(e.map(e => e.author_id))
}

function et(e) {
  let {
    entries: t,
    currentUserActivity: n,
    className: l,
    hideHeader: o = false,
    variant: a = "default"
  } = e, s = (0, G.ee)(() => ee(t), [t]), u = (0, G.ee)(() => new Set(Array.from(ee(t)).filter(e => {
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
  })), [t]), d = (0, G.ee)(() => new Set(t.map(e => e.id)), [t]);
  return (r.useEffect(() => {
    (0, G.zi)(B.Odu.ACTIVITY, {
      locked: V.default.isInstanceLocked(),
      shownUserIds: Array.from(s),
      liveUserIds: Array.from(u),
      contentInventoryIds: Array.from(d)
    })
  }, [s, u, d]), 0 === t.length) ? null : (0, i.jsxs)("div", {
    className: l,
    children: [!o && (0, i.jsx)("div", {
      className: Q.contentInventoryHeader,
      children: (0, i.jsx)(f.Text, {
        variant: "text-xs/medium",
        color: "subtle" === a ? "text-secondary" : "header-secondary",
        tag: "div",
        children: Y.intl.string(Y.t.y9eo7a)
      })
    }), t.map((e, t) => (0, i.jsx)($, {
      idx: t,
      entry: e,
      currentUserActivity: n,
      variant: a
    }, t))]
  })
}

function en(e) {
  let {
    gamingId: t,
    maxUserShowCount: n,
    userAffinityThresholdV2: i = .0029
  } = e, l = (0, C.Z)(t);
  (0, E.ZP)(() => {
    (0, w._)()
  });
  let o = (0, d.e7)([D.Z], () => null == t ? null : D.Z.getApplicationActivity(t), [t]),
    u = (0, d.Wu)([z.Z, L.Z, T.Z], () => {
      if (null == t) return [];
      let e = z.Z.nowPlayingCards,
        n = {
          v2: i
        };
      return e.reduce((e, n) => {
        if (n.type !== B.GOo.USER) return e;
        let i = n.party.currentActivities;
        if (0 === i.length) return e;
        for (let n of i) n.game.id === t && null != n.activity && e.push(n);
        return e
      }, []).filter(e => {
        let t = e.activityUser.id,
          i = L.Z.isFriend(t);
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
        }(T.Z.getUserAffinity(t), i, n)
      })
    }, [t, i]);
  return (0, E.ZP)(() => (N.L(), () => N.v())), {
    entries: r.useMemo(() => {
      let e = l.filter(e => !u.some(t => t.activityUser.id === e.author_id)),
        t = [...u.map(e => (function(e) {
          var t, n, i, r, l, o, u;
          let d = null != (l = null == (n = e.activity) || null == (t = n.timestamps) ? true : t.start) ? l : Date.now();
          return {
            id: W.default.fromTimestamp(d),
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

function ei(e) {
  let t = en(e);
  return (0, i.jsx)(et, X(K({}, t), {
    className: e.className,
    variant: e.variant
  }))
}

function er(e) {
  let {
    activity: t,
    currentUser: n,
    showInviteButton: r = true
  } = e, l = null != t && (0, b.Z)(t, B.xjy.JOIN), o = (0, _.q)(null == t ? true : t.application_id), a = null != o && (0, u.yE)(o.flags, B.udG.EMBEDDED);
  return null == t || null == n ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(P.Z, {
      className: Q.activityCard,
      activity: t,
      user: n,
      currentUser: n,
      appContext: B.IlC.OVERLAY
    }), l && !a && r ? (0, i.jsx)(p.zx, {
      className: Q.inviteFriendsButton,
      onClick: () => {
        (0, g.h7)(t, false, B.IlC.POPOUT), (0, G.Ws)(B.Odu.ACTIVITY, {
          type: G.Qu.INVITE,
          value: G.bk.PANEL_OPENED
        })
      },
      size: p.Ph.SMALL,
      color: p.Tt.PRIMARY,
      children: Y.intl.string(Y.t["6Qgrev"])
    }) : null]
  })
}

function el(e) {
  let {
    locked: t
  } = e, n = (0, F.II)(), r = null == n ? true : n.id, l = null == n ? true : n.altId, o = (0, C.Z)(r), a = (0, d.e7)([M.default], () => M.default.getCurrentUser()), s = null != l ? l : r, c = (0, d.e7)([D.Z], () => null == s ? null : D.Z.getApplicationActivity(s), [s]);
  (0, E.ZP)(() => (N.L(), () => N.v()));
  let u = en({
    gamingId: s,
    userAffinityThresholdV2: .00145,
    maxUserShowCount: 12
  });
  return t || 0 === o.length && null == c ? null : (0, i.jsxs)("div", {
    className: Q.container,
    children: [(0, i.jsx)(er, {
      activity: c,
      currentUser: a
    }), (0, i.jsx)(et, X(K({}, u), {
      className: Q.contentInventoryContainer,
      hideHeader: true
    }))]
  })
}