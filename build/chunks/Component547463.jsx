/** Chunk was on 71447 **/
/** chunk id: 547463, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => er,
  ru: () => en
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

function Z(e) {
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
  let t, {
      entry: n,
      currentUserActivity: l,
      idx: s,
      variant: o
    } = e,
    u = (0, d.bG)([L.default], () => L.default.getUser(n.author_id)),
    [c, g] = r.useState("unsent"),
    [A, v] = r.useState(false);
  r.useEffect(() => {
    if ("sent" === c) {
      let e = setTimeout(() => v(true), 2e3);
      return () => clearTimeout(e)
    }
  }, [c]);
  let E = null != l && (0, b.A)(l, Y.jUm.JOIN),
    O = async e => {
      if (null != u && "unsent" === c) {
        e.stopPropagation();
        try {
          if (g("sending"), E) await f.A.sendActivityInviteUser({
            type: Y.xL.JOIN,
            userId: u.id,
            activity: l,
            location: Y.ThZ.UNLOCKED_OVERLAY
          });
          else {
            var t;
            let e = await m.A.getOrEnsurePrivateChannel(u.id),
              i = null != (t = D.A.getChannel(e)) ? t : null;
            a()(null != i, "Send channel must be defined"), (0, T.pX)(Y.BVt.CHANNEL(i.guild_id, i.id)), (0, I.A)(Y.BRT.OVERLAY, true), true === n.extra.fake_inventory_item ? await (0, _.J)({
              channel: i,
              content: W.intl.formatToPlainString(W.t.UVBA9g, {
                gameName: n.extra.game_name
              }),
              whenReady: true,
              doNotNotifyOnError: false,
              location: K.Hx.OVERLAY
            }) : await (0, _.d)({
              channel: i,
              content: W.intl.string(W.t.DwAcMz),
              entry: n,
              whenReady: true,
              doNotNotifyOnError: false,
              location: K.Hx.OVERLAY
            })
          }
          y.A.track(Y.HAw.OVERLAY_GAME_INVITE_SENT, {
            target_user_id: u.id,
            target_content_entry_id: n.id,
            target_index: s
          }), (0, F.YX)(Y.uss.ACTIVITY, {
            type: F.Z5.INVITE,
            value: F.IP.INVITE_SENT,
            userId: u.id
          }), g("sent")
        } catch (e) {
          g("unsent")
        }
      }
    }, x = async () => {
      var e;
      if (null == u) return;
      let t = await m.A.getOrEnsurePrivateChannel(u.id),
        n = null != (e = D.A.getChannel(t)) ? e : null;
      a()(null != n, "Send channel must be defined"), (0, T.pX)(Y.BVt.CHANNEL(n.guild_id, n.id)), (0, I.A)(Y.BRT.OVERLAY, true), (0, F.YX)(Y.uss.ACTIVITY, {
        type: F.Z5.REDIRECT,
        value: F.IP.CHAT,
        userId: u.id
      })
    }, S = E ? W.intl.string(W.t["3fRySx"]) : W.intl.string(W.t.XHxDIV);
  return t = "sent" === c ? A ? p.oyn : p.BNr : E ? p.DpX : p.lX7, (0, i.jsx)(h.m, {
    text: S,
    "aria-label": S,
    children: (0, i.jsx)(p.K0, {
      icon: t,
      "aria-label": S,
      loading: "sending" === c,
      onClick: A ? x : O,
      variant: "subtle" === o ? "icon-only" : "secondary",
      size: "sm"
    })
  })
}

function Q(e) {
  var t;
  let {
    entry: n,
    currentUserActivity: l,
    variant: a
  } = e, s = (0, d.bG)([L.default], () => L.default.getUser(n.author_id)), o = null != (t = null == l ? true : l.application_id) ? t : n.extra.application_id, u = (0, d.bG)([k.A], () => null != s ? k.A.getApplicationActivity(s.id, o) : null, [o, s]), [c, g] = r.useState("unsent");
  if (!(null != u && (0, b.A)(u, Y.jUm.JOIN))) return null;
  let m = async e => {
    if (null != s && "unsent" === c) {
      e.stopPropagation();
      try {
        g("sending"), await f.A.sendActivityInviteUser({
          type: Y.xL.JOIN_REQUEST,
          userId: s.id,
          activity: u,
          location: Y.ThZ.UNLOCKED_OVERLAY
        }), (0, F.YX)(Y.uss.ACTIVITY, {
          type: F.Z5.INVITE,
          value: F.IP.JOIN_REQUEST_SENT,
          userId: s.id
        }), g("sent")
      } catch (e) {
        g("unsent")
      }
    }
  }, y = W.intl.string(W.t.OKsSCR);
  return (0, i.jsx)(h.m, {
    text: y,
    "aria-label": y,
    children: (0, i.jsx)(p.K0, {
      icon: "sent" === c ? p.BNr : p.E7M,
      "aria-label": y,
      loading: "sending" === c,
      onClick: m,
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
  } = e, a = (0, d.bG)([L.default], () => L.default.getUser(t.author_id)), s = (0, d.bG)([P.A], () => null != a ? P.A.getAnyStreamForUser(a.id) : null, [a]), {
    isMobileOnline: o,
    status: u
  } = (0, d.cf)([k.A], () => null == a ? {
    isMobileOnline: true,
    status: true
  } : {
    isMobileOnline: k.A.isMobileOnline(a.id),
    status: k.A.getStatus(a.id)
  }, [a]);
  return null == a ? null : (0, i.jsxs)("div", {
    className: B.nM,
    children: [(0, i.jsx)(A.A, {
      className: B.my,
      user: a,
      isMobile: o,
      status: u
    }), (0, i.jsxs)("div", {
      className: B.zH,
      children: [(0, i.jsxs)("div", {
        className: B.Yn,
        children: [(0, i.jsx)(p.Text, {
          className: B.Xh,
          variant: "text-md/medium",
          color: "text-strong",
          children: V.Ay.getName(true, true, a)
        }), null != s && (0, i.jsx)(O.Ay, {
          className: B.Ok
        })]
      }), (0, i.jsx)(x.mG, {
        location: x.N5.OVERLAY,
        className: B.cV,
        children: [x.iq, x.tR, x.K7, x.sp, x.MK].map((e, n) => (0, i.jsx)(e, {
          entry: t
        }, "entry-".concat(n)))
      })]
    }), (0, i.jsxs)("div", {
      className: B.nB,
      children: [(0, i.jsx)(Q, {
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
    variant: s = "default"
  } = e, o = (0, F.Dk)(() => $(t), [t]), c = (0, F.Dk)(() => new Set(Array.from($(t)).filter(e => {
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
      return t === u.K.IS_LIVE
    })
  })), [t]), d = (0, F.Dk)(() => new Set(t.map(e => e.id)), [t]);
  return (r.useEffect(() => {
    (0, F.Y)(Y.uss.ACTIVITY, {
      locked: G.default.isInstanceLocked(),
      shownUserIds: Array.from(o),
      liveUserIds: Array.from(c),
      contentInventoryIds: Array.from(d)
    })
  }, [o, c, d]), 0 === t.length) ? null : (0, i.jsxs)("div", {
    className: l,
    children: [!a && (0, i.jsx)("div", {
      className: B.v4,
      children: (0, i.jsx)(p.Text, {
        variant: "text-xs/medium",
        color: "subtle" === s ? "text-subtle" : "text-default",
        tag: "div",
        children: W.intl.string(W.t.y9eo7a)
      })
    }), t.map((e, t) => (0, i.jsx)(q, {
      idx: t,
      entry: e,
      currentUserActivity: n,
      variant: s
    }, t))]
  })
}

function et(e) {
  let {
    gamingId: t,
    maxUserShowCount: n,
    userAffinityThresholdV2: i = .0029
  } = e, l = (0, S.A)(t);
  (0, v.Ay)(() => {
    (0, C.u)()
  });
  let a = (0, d.bG)([R.A], () => null == t ? null : R.A.getApplicationActivity(t), [t]),
    c = (0, d.yK)([U.A, M.A, N.A], () => {
      if (null == t) return [];
      let e = U.A.nowPlayingCards,
        n = {
          v2: i
        };
      return e.reduce((e, n) => {
        if (n.type !== Y.ZzC.USER) return e;
        let i = n.party.currentActivities;
        if (0 === i.length) return e;
        for (let n of i) n.game.id === t && null != n.activity && e.push(n);
        return e
      }, []).filter(e => {
        let t = e.activityUser.id,
          i = M.A.isFriend(t);
        return function(e, t, n) {
          let {
            v2: i
          } = n;
          if (null == e) return t;
          let {
            communicationProbability: r,
            dmProbability: l,
            serverMessageProbability: a,
            vcProbability: s
          } = e;
          switch (true) {
            case r > i:
            case l > i:
            case a > i:
            case s > i:
              returntrue;
            default:
              return t
          }
        }(N.A.getUserAffinity(t), i, n)
      })
    }, [t, i]);
  return (0, v.Ay)(() => (j.O(), () => j.v())), {
    entries: r.useMemo(() => {
      let e = l.filter(e => !c.some(t => t.activityUser.id === e.author_id)),
        t = [...c.map(e => {
          var t, n, i, r, l, a, c;
          let d;
          return d = null != (t = null == (l = e.activity) || null == (r = l.timestamps) ? true : r.start) ? t : Date.now(), {
            id: z.default.fromTimestamp(d),
            author_id: e.activityUser.id,
            extra: {
              type: "played_game_extra",
              game_name: null != (n = null == (a = e.activity) ? true : a.name) ? n : e.game.name,
              application_id: null != (i = null == (c = e.activity) ? true : c.application_id) ? i : e.game.id,
              fake_inventory_item: true
            },
            content_type: o.ContentInventoryEntryType.PLAYED_GAME,
            author_type: s.ContentInventoryAuthorType.USER,
            participants: e.playingMembers.map(e => e.id),
            traits: [{
              type: u.K.IS_LIVE,
              is_live: true
            }]
          }
        }), ...e];
      return null != n ? t.slice(0, n) : t
    }, [l, c, n]),
    currentUserActivity: a
  }
}

function en(e) {
  let t = et(e);
  return (0, i.jsx)(ee, X(Z({}, t), {
    className: e.className,
    variant: e.variant
  }))
}

function ei(e) {
  let {
    activity: t,
    currentUser: n,
    showInviteButton: r = true
  } = e, l = null != t && (0, b.A)(t, Y.jUm.JOIN), a = (0, E.h)(null == t ? true : t.application_id), s = null != a && (0, c.Lt)(a.flags, Y.gfo.EMBEDDED);
  return null == t || null == n ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(w.A, {
      className: B.M4,
      activity: t,
      user: n,
      currentUser: n,
      appContext: Y.BRT.OVERLAY
    }), l && !s && r ? (0, i.jsx)("div", {
      className: B.DJ,
      children: (0, i.jsx)(p.Button, {
        text: W.intl.string(W.t["6Qgrev"]),
        size: "sm",
        variant: "secondary",
        onClick: () => {
          (0, g.qf)(t, false, Y.BRT.POPOUT), (0, F.YX)(Y.uss.ACTIVITY, {
            type: F.Z5.INVITE,
            value: F.IP.PANEL_OPENED
          })
        }
      })
    }) : null]
  })
}

function er(e) {
  let {
    locked: t
  } = e, n = (0, H.b4)(), r = null == n ? true : n.id, l = null == n ? true : n.altId, a = (0, S.A)(r), s = (0, d.bG)([L.default], () => L.default.getCurrentUser()), o = null != l ? l : r, u = (0, d.bG)([R.A], () => null == o ? null : R.A.getApplicationActivity(o), [o]);
  (0, v.Ay)(() => (j.O(), () => j.v()));
  let c = et({
    gamingId: o,
    userAffinityThresholdV2: .00145,
    maxUserShowCount: 12
  });
  return t || 0 === a.length && null == u ? null : (0, i.jsxs)("div", {
    className: B.kL,
    children: [(0, i.jsx)(ei, {
      activity: u,
      currentUser: s
    }), (0, i.jsx)(ee, X(Z({}, c), {
      className: B.l_,
      hideHeader: true
    }))]
  })
}