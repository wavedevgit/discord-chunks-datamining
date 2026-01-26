/** Chunk was on 71447 **/
/** chunk id: 547463, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => er,
  ru: () => en,
  vr: () => ei
}), require("./896048.js"), require("./321073.js"), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk6161 = require("./6161.js"),
  Chunk681154 = require("./681154.js"),
  Chunk974690 = require("./974690.js"),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk308368 = require("./308368.js"),
  Chunk298990 = require("./298990.js"),
  Chunk308528 = require("./308528.js"),
  Chunk684013 = require("./684013.js"),
  Chunk730134 = require("./730134.jsx"),
  Chunk964486 = require("./964486.js"),
  Chunk833349 = require("./833349.js"),
  Chunk429913 = require("./429913.js"),
  Chunk402216 = require("./402216.jsx"),
  Chunk506326 = require("./506326.jsx"),
  Chunk428249 = require("./428249.js"),
  Chunk661908 = require("./661908.js"),
  Chunk474397 = require("./474397.jsx"),
  Chunk279877 = require("./279877.js"),
  Chunk976860 = require("./976860.js"),
  Chunk219271 = require("./219271.js"),
  Chunk21119 = require("./21119.js"),
  Chunk712785 = require("./712785.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk734057 = require("./734057.js"),
  Chunk375492 = require("./375492.js"),
  Chunk290863 = require("./290863.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk943577 = require("./943577.js"),
  Chunk256415 = require("./256415.js"),
  Chunk562153 = require("./562153.js"),
  Chunk661191 = require("./661191.js"),
  Chunk810412 = require("./810412.js"),
  Chunk243612 = require("./243612.js"),
  Chunk652215 = require("./652215.js"),
  Chunk381941 = require("./381941.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk72007 = require("./72007.js");

function B(e) {
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

function Q(e) {
  let t, {
      entry: n,
      currentUserActivity: l,
      idx: o,
      variant: s
    } = e,
    c = (0, d.bG)([M.default], () => M.default.getUser(n.author_id)),
    [u, m] = r.useState("unsent"),
    [A, O] = r.useState(false);
  r.useEffect(() => {
    if ("sent" === u) {
      let e = setTimeout(() => O(true), 2e3);
      return () => clearTimeout(e)
    }
  }, [u]);
  let v = null != l && (0, E.A)(l, F.jUm.JOIN),
    b = async e => {
      if (null != c && "unsent" === u) {
        e.stopPropagation();
        try {
          if (m("sending"), v) await f.A.sendActivityInviteUser({
            type: F.xL.JOIN,
            userId: c.id,
            activity: l,
            location: F.ThZ.UNLOCKED_OVERLAY
          });
          else {
            var t;
            let e = await g.A.getOrEnsurePrivateChannel(c.id),
              i = null != (t = D.A.getChannel(e)) ? t : null;
            a()(null != i, "Send channel must be defined"), (0, w.pX)(F.BVt.CHANNEL(i.guild_id, i.id)), (0, I.A)(F.BRT.OVERLAY, true), true === n.extra.fake_inventory_item ? await (0, x.J)({
              channel: i,
              content: Z.intl.formatToPlainString(Z.t.UVBA9g, {
                gameName: n.extra.game_name
              }),
              whenReady: true,
              doNotNotifyOnError: false,
              location: K.Hx.OVERLAY
            }) : await (0, x.d)({
              channel: i,
              content: Z.intl.string(Z.t.DwAcMz),
              entry: n,
              whenReady: true,
              doNotNotifyOnError: false,
              location: K.Hx.OVERLAY
            })
          }
          y.A.track(F.HAw.OVERLAY_GAME_INVITE_SENT, {
            target_user_id: c.id,
            target_content_entry_id: n.id,
            target_index: o
          }), (0, H.YX)(F.uss.ACTIVITY, {
            type: H.Z5.INVITE,
            value: H.IP.INVITE_SENT,
            userId: c.id
          }), m("sent")
        } catch (e) {
          m("unsent")
        }
      }
    }, S = async () => {
      var e;
      if (null == c) return;
      let t = await g.A.getOrEnsurePrivateChannel(c.id),
        n = null != (e = D.A.getChannel(t)) ? e : null;
      a()(null != n, "Send channel must be defined"), (0, w.pX)(F.BVt.CHANNEL(n.guild_id, n.id)), (0, I.A)(F.BRT.OVERLAY, true), (0, H.YX)(F.uss.ACTIVITY, {
        type: H.Z5.REDIRECT,
        value: H.IP.CHAT,
        userId: c.id
      })
    }, j = v ? Z.intl.string(Z.t["3fRySx"]) : Z.intl.string(Z.t.XHxDIV);
  return t = "sent" === u ? A ? h.oyn : h.BNr : v ? h.DpX : h.lX7, (0, i.jsx)(p.m, {
    text: j,
    "aria-label": j,
    children: (0, i.jsx)(h.K0, {
      icon: t,
      "aria-label": j,
      loading: "sending" === u,
      onClick: A ? S : b,
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
    variant: a
  } = e, o = (0, d.bG)([M.default], () => M.default.getUser(n.author_id)), s = null != (t = null == l ? true : l.application_id) ? t : n.extra.application_id, c = (0, d.bG)([L.A], () => null != o ? L.A.getApplicationActivity(o.id, s) : null, [s, o]), [u, m] = r.useState("unsent");
  if (!(null != c && (0, E.A)(c, F.jUm.JOIN))) return null;
  let g = async e => {
    if (null != o && "unsent" === u) {
      e.stopPropagation();
      try {
        m("sending"), await f.A.sendActivityInviteUser({
          type: F.xL.JOIN_REQUEST,
          userId: o.id,
          activity: c,
          location: F.ThZ.UNLOCKED_OVERLAY
        }), (0, H.YX)(F.uss.ACTIVITY, {
          type: H.Z5.INVITE,
          value: H.IP.JOIN_REQUEST_SENT,
          userId: o.id
        }), m("sent")
      } catch (e) {
        m("unsent")
      }
    }
  }, y = Z.intl.string(Z.t.OKsSCR);
  return (0, i.jsx)(p.m, {
    text: y,
    "aria-label": y,
    children: (0, i.jsx)(h.K0, {
      icon: "sent" === u ? h.BNr : h.E7M,
      "aria-label": y,
      loading: "sending" === u,
      onClick: g,
      variant: "subtle" === a ? "icon-only" : "secondary",
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
  } = e, a = (0, d.bG)([M.default], () => M.default.getUser(t.author_id)), o = (0, d.bG)([P.A], () => null != a ? P.A.getAnyStreamForUser(a.id) : null, [a]), {
    isMobileOnline: s,
    status: c
  } = (0, d.cf)([L.A], () => null == a ? {
    isMobileOnline: true,
    status: true
  } : {
    isMobileOnline: L.A.isMobileOnline(a.id),
    status: L.A.getStatus(a.id)
  }, [a]);
  return null == a ? null : (0, i.jsxs)("div", {
    className: W.nM,
    children: [(0, i.jsx)(A.A, {
      className: W.my,
      user: a,
      isMobile: s,
      status: c
    }), (0, i.jsxs)("div", {
      className: W.zH,
      children: [(0, i.jsxs)("div", {
        className: W.Yn,
        children: [(0, i.jsx)(h.Text, {
          className: W.Xh,
          variant: "text-md/medium",
          color: "text-strong",
          children: z.Ay.getName(true, true, a)
        }), null != o && (0, i.jsx)(b.Ay, {
          className: W.Ok
        })]
      }), (0, i.jsx)(S.mG, {
        location: S.N5.OVERLAY,
        className: W.cV,
        children: [S.iq, S.tR, S.K7, S.sp, S.MK].map((e, n) => (0, i.jsx)(e, {
          entry: t
        }, "entry-".concat(n)))
      })]
    }), (0, i.jsxs)("div", {
      className: W.nB,
      children: [(0, i.jsx)(J, {
        entry: t,
        currentUserActivity: n,
        idx: r,
        variant: l
      }), (0, i.jsx)(Q, {
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
    hideHeader: a = false,
    variant: o = "default"
  } = e, s = (0, H.Dk)(() => $(t), [t]), u = (0, H.Dk)(() => new Set(Array.from($(t)).filter(e => {
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
      return t === c.K.IS_LIVE
    })
  })), [t]), d = (0, H.Dk)(() => new Set(t.map(e => e.id)), [t]);
  return (r.useEffect(() => {
    (0, H.Y)(F.uss.ACTIVITY, {
      locked: U.default.isInstanceLocked(),
      shownUserIds: Array.from(s),
      liveUserIds: Array.from(u),
      contentInventoryIds: Array.from(d)
    })
  }, [s, u, d]), 0 === t.length) ? null : (0, i.jsxs)("div", {
    className: l,
    children: [!a && (0, i.jsx)("div", {
      className: W.v4,
      children: (0, i.jsx)(h.Text, {
        variant: "text-xs/medium",
        color: "subtle" === o ? "text-subtle" : "text-default",
        tag: "div",
        children: Z.intl.string(Z.t.y9eo7a)
      })
    }), t.map((e, t) => (0, i.jsx)(q, {
      idx: t,
      entry: e,
      currentUserActivity: n,
      variant: o
    }, t))]
  })
}

function et(e) {
  let {
    gamingId: t,
    maxUserShowCount: n,
    userAffinityThresholdV2: i = .0029
  } = e, l = (0, j.A)(t);
  (0, O.Ay)(() => {
    (0, T.u)()
  });
  let a = (0, d.bG)([R.A], () => null == t ? null : R.A.getApplicationActivity(t), [t]),
    u = (0, d.yK)([V.A, k.A, C.A], () => {
      if (null == t) return [];
      let e = V.A.nowPlayingCards,
        n = {
          v2: i
        };
      return e.reduce((e, n) => {
        if (n.type !== F.ZzC.USER) return e;
        let i = n.party.currentActivities;
        if (0 === i.length) return e;
        for (let n of i) n.game.id === t && null != n.activity && e.push(n);
        return e
      }, []).filter(e => {
        let t = e.activityUser.id,
          i = k.A.isFriend(t);
        return function(e, t, n) {
          let {
            v2: i
          } = n;
          if (null == e) return t;
          let {
            communicationProbability: r,
            dmProbability: l,
            serverMessageProbability: a,
            vcProbability: o
          } = e;
          switch (true) {
            case r > i:
            case l > i:
            case a > i:
            case o > i:
              returntrue;
            default:
              return t
          }
        }(C.A.getUserAffinity(t), i, n)
      })
    }, [t, i]);
  return (0, O.Ay)(() => (N.O(), () => N.v())), {
    entries: r.useMemo(() => {
      let e = l.filter(e => !u.some(t => t.activityUser.id === e.author_id)),
        t = [...u.map(e => {
          var t, n, i, r, l, a, u;
          let d;
          return d = null != (t = null == (l = e.activity) || null == (r = l.timestamps) ? true : r.start) ? t : Date.now(), {
            id: G.default.fromTimestamp(d),
            author_id: e.activityUser.id,
            extra: {
              type: "played_game_extra",
              game_name: null != (n = null == (a = e.activity) ? true : a.name) ? n : e.game.name,
              application_id: null != (i = null == (u = e.activity) ? true : u.application_id) ? i : e.game.id,
              fake_inventory_item: true
            },
            content_type: s.ContentInventoryEntryType.PLAYED_GAME,
            author_type: o.ContentInventoryAuthorType.USER,
            participants: e.playingMembers.map(e => e.id),
            traits: [{
              type: c.K.IS_LIVE,
              is_live: true
            }]
          }
        }), ...e];
      return null != n ? t.slice(0, n) : t
    }, [l, u, n]),
    currentUserActivity: a
  }
}

function en(e) {
  let t = et(e);
  return (0, i.jsx)(ee, X(B({}, t), {
    className: e.className,
    variant: e.variant
  }))
}

function ei(e) {
  let {
    activity: t,
    currentUser: n,
    showInviteButton: r = true
  } = e, l = null != t && (0, E.A)(t, F.jUm.JOIN), a = (0, v.h)(null == t ? true : t.application_id), o = null != a && (0, u.Lt)(a.flags, F.gfo.EMBEDDED);
  return null == t || null == n ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(_.A, {
      className: W.M4,
      activity: t,
      user: n,
      currentUser: n,
      appContext: F.BRT.OVERLAY
    }), l && !o && r ? (0, i.jsx)("div", {
      className: W.DJ,
      children: (0, i.jsx)(h.Button, {
        text: Z.intl.string(Z.t["6Qgrev"]),
        size: "sm",
        variant: "secondary",
        onClick: () => {
          (0, m.qf)(t, false, F.BRT.POPOUT), (0, H.YX)(F.uss.ACTIVITY, {
            type: H.Z5.INVITE,
            value: H.IP.PANEL_OPENED
          })
        }
      })
    }) : null]
  })
}

function er(e) {
  let {
    locked: t
  } = e, n = (0, Y.b4)(), r = null == n ? true : n.id, l = null == n ? true : n.altId, a = (0, j.A)(r), o = (0, d.bG)([M.default], () => M.default.getCurrentUser()), s = null != l ? l : r, c = (0, d.bG)([R.A], () => null == s ? null : R.A.getApplicationActivity(s), [s]);
  (0, O.Ay)(() => (N.O(), () => N.v()));
  let u = et({
    gamingId: s,
    userAffinityThresholdV2: .00145,
    maxUserShowCount: 12
  });
  return t || 0 === a.length && null == c ? null : (0, i.jsxs)("div", {
    className: W.kL,
    children: [(0, i.jsx)(ei, {
      activity: c,
      currentUser: o
    }), (0, i.jsx)(ee, X(B({}, u), {
      className: W.l_,
      hideHeader: true
    }))]
  })
}