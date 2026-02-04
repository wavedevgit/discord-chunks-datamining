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

function J(e) {
  let t, {
      entry: n,
      currentUserActivity: l,
      idx: o,
      variant: s
    } = e,
    u = (0, d.bG)([M.default], () => M.default.getUser(n.author_id)),
    [c, g] = r.useState("unsent"),
    [y, O] = r.useState(false);
  r.useEffect(() => {
    if ("sent" === c) {
      let e = setTimeout(() => O(true), 2e3);
      return () => clearTimeout(e)
    }
  }, [c]);
  let b = null != l && (0, v.A)(l, F.jUm.JOIN),
    E = async e => {
      if (null != u && "unsent" === c) {
        e.stopPropagation();
        try {
          if (g("sending"), b) await f.A.sendActivityInviteUser({
            type: F.xL.JOIN,
            userId: u.id,
            activity: l,
            location: F.ThZ.UNLOCKED_OVERLAY
          });
          else {
            var t;
            let e = await m.A.getOrEnsurePrivateChannel(u.id),
              i = null != (t = D.A.getChannel(e)) ? t : null;
            a()(null != i, "Send channel must be defined"), (0, C.pX)(F.BVt.CHANNEL(i.guild_id, i.id)), (0, I.A)(F.BRT.OVERLAY, true), true === n.extra.fake_inventory_item ? await (0, S.J)({
              channel: i,
              content: K.intl.formatToPlainString(K.t.UVBA9g, {
                gameName: n.extra.game_name
              }),
              whenReady: true,
              doNotNotifyOnError: false,
              location: W.Hx.OVERLAY
            }) : await (0, S.d)({
              channel: i,
              content: K.intl.string(K.t.DwAcMz),
              entry: n,
              whenReady: true,
              doNotNotifyOnError: false,
              location: W.Hx.OVERLAY
            })
          }
          A.A.track(F.HAw.OVERLAY_GAME_INVITE_SENT, {
            target_user_id: u.id,
            target_content_entry_id: n.id,
            target_index: o
          }), (0, H.YX)(F.uss.ACTIVITY, {
            type: H.Z5.INVITE,
            value: H.IP.INVITE_SENT,
            userId: u.id
          }), g("sent")
        } catch (e) {
          g("unsent")
        }
      }
    }, _ = async () => {
      var e;
      if (null == u) return;
      let t = await m.A.getOrEnsurePrivateChannel(u.id),
        n = null != (e = D.A.getChannel(t)) ? e : null;
      a()(null != n, "Send channel must be defined"), (0, C.pX)(F.BVt.CHANNEL(n.guild_id, n.id)), (0, I.A)(F.BRT.OVERLAY, true), (0, H.YX)(F.uss.ACTIVITY, {
        type: H.Z5.REDIRECT,
        value: H.IP.CHAT,
        userId: u.id
      })
    }, x = b ? K.intl.string(K.t["3fRySx"]) : K.intl.string(K.t.XHxDIV);
  return t = "sent" === c ? y ? p.oyn : p.BNr : b ? p.DpX : p.lX7, (0, i.jsx)(h.m, {
    text: x,
    "aria-label": x,
    children: (0, i.jsx)(p.K0, {
      icon: t,
      "aria-label": x,
      loading: "sending" === c,
      onClick: y ? _ : E,
      variant: "subtle" === s ? "icon-only" : "secondary",
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
  } = e, o = (0, d.bG)([M.default], () => M.default.getUser(n.author_id)), s = null != (t = null == l ? true : l.application_id) ? t : n.extra.application_id, u = (0, d.bG)([L.A], () => null != o ? L.A.getApplicationActivity(o.id, s) : null, [s, o]), [c, g] = r.useState("unsent");
  if (!(null != u && (0, v.A)(u, F.jUm.JOIN))) return null;
  let m = async e => {
    if (null != o && "unsent" === c) {
      e.stopPropagation();
      try {
        g("sending"), await f.A.sendActivityInviteUser({
          type: F.xL.JOIN_REQUEST,
          userId: o.id,
          activity: u,
          location: F.ThZ.UNLOCKED_OVERLAY
        }), (0, H.YX)(F.uss.ACTIVITY, {
          type: H.Z5.INVITE,
          value: H.IP.JOIN_REQUEST_SENT,
          userId: o.id
        }), g("sent")
      } catch (e) {
        g("unsent")
      }
    }
  }, A = K.intl.string(K.t.OKsSCR);
  return (0, i.jsx)(h.m, {
    text: A,
    "aria-label": A,
    children: (0, i.jsx)(p.K0, {
      icon: "sent" === c ? p.BNr : p.E7M,
      "aria-label": A,
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
  } = e, a = (0, d.bG)([M.default], () => M.default.getUser(t.author_id)), o = (0, d.bG)([P.A], () => null != a ? P.A.getAnyStreamForUser(a.id) : null, [a]), {
    isMobileOnline: s,
    isVROnline: u,
    status: c
  } = (0, d.cf)([L.A], () => null == a ? {
    isMobileOnline: true,
    isVROnline: true,
    status: true
  } : {
    isMobileOnline: L.A.isMobileOnline(a.id),
    isVROnline: L.A.isVROnline(a.id),
    status: L.A.getStatus(a.id)
  }, [a]);
  return null == a ? null : (0, i.jsxs)("div", {
    className: Z.nM,
    children: [(0, i.jsx)(y.A, {
      className: Z.my,
      user: a,
      isMobile: s,
      isVR: u,
      status: c
    }), (0, i.jsxs)("div", {
      className: Z.zH,
      children: [(0, i.jsxs)("div", {
        className: Z.Yn,
        children: [(0, i.jsx)(p.Text, {
          className: Z.Xh,
          variant: "text-md/medium",
          color: "text-strong",
          children: U.Ay.getName(true, true, a)
        }), null != o && (0, i.jsx)(E.Ay, {
          className: Z.Ok
        })]
      }), (0, i.jsx)(_.mG, {
        location: _.N5.OVERLAY,
        className: Z.cV,
        children: [_.iq, _.tR, _.K7, _.sp, _.MK].map((e, n) => (0, i.jsx)(e, {
          entry: t
        }, "entry-".concat(n)))
      })]
    }), (0, i.jsxs)("div", {
      className: Z.nB,
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
    variant: o = "default"
  } = e, s = (0, H.Dk)(() => $(t), [t]), c = (0, H.Dk)(() => new Set(Array.from($(t)).filter(e => {
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
  })), [t]), d = (0, H.Dk)(() => new Set(t.map(e => e.id)), [t]);
  return (r.useEffect(() => {
    (0, H.Y)(F.uss.ACTIVITY, {
      locked: V.default.isInstanceLocked(),
      shownUserIds: Array.from(s),
      liveUserIds: Array.from(c),
      contentInventoryIds: Array.from(d)
    })
  }, [s, c, d]), 0 === t.length) ? null : (0, i.jsxs)("div", {
    className: l,
    children: [!a && (0, i.jsx)("div", {
      className: Z.v4,
      children: (0, i.jsx)(p.Text, {
        variant: "text-xs/medium",
        color: "subtle" === o ? "text-subtle" : "text-default",
        tag: "div",
        children: K.intl.string(K.t.y9eo7a)
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
  } = e, l = (0, x.A)(t);
  (0, O.Ay)(() => {
    (0, T.u)()
  });
  let a = (0, d.bG)([R.A], () => null == t ? null : R.A.getApplicationActivity(t), [t]),
    c = (0, d.yK)([z.A, k.A, w.A], () => {
      if (null == t) return [];
      let e = z.A.nowPlayingCards,
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
        }(w.A.getUserAffinity(t), i, n)
      })
    }, [t, i]);
  return (0, O.Ay)(() => (j.O(), () => j.v())), {
    entries: r.useMemo(() => {
      let e = l.filter(e => !c.some(t => t.activityUser.id === e.author_id)),
        t = [...c.map(e => {
          var t, n, i, r, l, a, c;
          let d;
          return d = null != (t = null == (l = e.activity) || null == (r = l.timestamps) ? true : r.start) ? t : Date.now(), {
            id: G.default.fromTimestamp(d),
            author_id: e.activityUser.id,
            extra: {
              type: "played_game_extra",
              game_name: null != (n = null == (a = e.activity) ? true : a.name) ? n : e.game.name,
              application_id: null != (i = null == (c = e.activity) ? true : c.application_id) ? i : e.game.id,
              fake_inventory_item: true
            },
            content_type: s.ContentInventoryEntryType.PLAYED_GAME,
            author_type: o.ContentInventoryAuthorType.USER,
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
  } = e, l = null != t && (0, v.A)(t, F.jUm.JOIN), a = (0, b.h)(null == t ? true : t.application_id), o = null != a && (0, c.Lt)(a.flags, F.gfo.EMBEDDED);
  return null == t || null == n ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(N.A, {
      className: Z.M4,
      activity: t,
      user: n,
      currentUser: n,
      appContext: F.BRT.OVERLAY
    }), l && !o && r ? (0, i.jsx)("div", {
      className: Z.DJ,
      children: (0, i.jsx)(p.Button, {
        text: K.intl.string(K.t["6Qgrev"]),
        size: "sm",
        variant: "secondary",
        onClick: () => {
          (0, g.qf)(t, false, F.BRT.POPOUT), (0, H.YX)(F.uss.ACTIVITY, {
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
  } = e, n = (0, Y.b4)(), r = null == n ? true : n.id, l = null == n ? true : n.altId, a = (0, x.A)(r), o = (0, d.bG)([M.default], () => M.default.getCurrentUser()), s = null != l ? l : r, u = (0, d.bG)([R.A], () => null == s ? null : R.A.getApplicationActivity(s), [s]);
  (0, O.Ay)(() => (j.O(), () => j.v()));
  let c = et({
    gamingId: s,
    userAffinityThresholdV2: .00145,
    maxUserShowCount: 12
  });
  return t || 0 === a.length && null == u ? null : (0, i.jsxs)("div", {
    className: Z.kL,
    children: [(0, i.jsx)(ei, {
      activity: u,
      currentUser: o
    }), (0, i.jsx)(ee, X(B({}, c), {
      className: Z.l_,
      hideHeader: true
    }))]
  })
}