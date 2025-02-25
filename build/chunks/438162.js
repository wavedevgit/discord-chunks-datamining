/** Chunk was on 54030 **/
n.d(t, {
  Z: () => es
});
var r = n(200651),
  o = n(192379),
  a = n(120356),
  i = n.n(a),
  c = n(442837),
  l = n(952265),
  u = n(481060),
  s = n(239091),
  _ = n(13245),
  d = n(110924),
  b = n(100527),
  f = n(906732),
  p = n(146282),
  h = n(70097),
  m = n(594190),
  g = n(567409),
  C = n(74299),
  O = n(989941),
  y = n(199902),
  v = n(314897),
  E = n(592125),
  k = n(430824),
  I = n(131951),
  x = n(944486),
  L = n(449224),
  w = n(574254),
  P = n(556296),
  N = n(237997),
  S = n(451478),
  A = n(585483),
  R = n(358085),
  T = n(13140),
  Z = n(145597),
  j = n(830917),
  B = n(681603),
  D = n(358446),
  U = n(348733),
  W = n(708383),
  F = n(923532),
  V = n(915614),
  M = n(777382),
  G = n(333031),
  z = n(610394),
  H = n(388627),
  Y = n(561064),
  K = n(987650),
  Q = n(981631),
  X = n(206583),
  q = n(388032),
  J = n(703231);
let $ = !R.isPlatformEmbedded && !1,
  ee = $ ? (0, r.jsx)(h.Z, {
    src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
    className: J.videoDev,
    autoPlay: !0,
    loop: !0,
    muted: !0
  }) : null,
  et = null;

function en(e) {
  e.preventDefault()
}

function er(e) {
  (0, s.jW)(e, async () => {
    let {
      default: e
    } = await n.e("17610").then(n.bind(n, 385620));
    return t => (0, r.jsx)(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = r
        })
      }
      return e
    }({}, t))
  })
}
let eo = o.memo(function(e) {
    let {
      keybind: t,
      onClick: n,
      locked: o
    } = e;
    return (0, r.jsx)(u.P3F, {
      className: i()(J.overlayBackground, {
        [J.overlayActive]: !o,
        [J.overlayLocked]: o
      }),
      onMouseDown: e => {
        let {
          currentTarget: t,
          target: r,
          button: o
        } = e;
        o === Q.AeJ.PRIMARY && t === r && n()
      },
      onContextMenu: er,
      children: o ? null : (0, r.jsx)(G.Z, {
        className: J.closeContainer,
        children: (0, r.jsx)(V.Z, {
          keybind: t,
          onClick: n,
          IconComponent: u.Uz9
        })
      })
    })
  }),
  ea = o.memo(function(e) {
    let {
      locked: t,
      focused: n
    } = e;
    return t && n ? (0, r.jsx)(G.Z, {
      className: J.closeContainer,
      children: (0, r.jsx)(V.Z, {
        onClick: () => _.Z.setInputLocked(!1, (0, Z.QF)()),
        IconComponent: u.d$P
      })
    }) : null
  });

function ei() {
  if (null != w.Z.getContextMenu()) {
    (0, s.Zy)();
    return
  }
  _.Z.setInputLocked(!0, (0, Z.QF)())
}

function ec() {
  _.Z.setFocusedPID(Z.Js)
}

function el() {
  _.Z.setFocusedPID(null)
}

function eu(e) {
  let t = z.ZP.isInputLocked((0, Z.QF)());
  "alt" !== e.key.toLowerCase() || t || ("keyup" === e.type.toLowerCase() ? A.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, {
    show: !1
  }) : "keydown" === e.type.toLowerCase() && A.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, {
    show: !0
  }))
}

function es() {
  let e = (0, Y.Z)(),
    {
      locked: t,
      focused: n,
      incompatibleApp: a,
      hasValidResolution: s,
      hasZeroSizeDimension: h,
      keybind: w,
      isPreviewingInGame: A
    } = (0, c.cj)([z.ZP, N.Z, S.Z, P.ZP], () => {
      let t = S.Z.windowSize((0, j.ZY)(e)),
        n = P.ZP.getOverlayKeybind(),
        r = (0, Z.QF)();
      return {
        locked: z.ZP.isInputLocked(r),
        focused: r === Z.Js ? N.Z.isFocused(r) : z.ZP.isFocused(r),
        incompatibleApp: N.Z.incompatibleApp,
        hasValidResolution: (0, Z.Te)(t),
        isPreviewingInGame: N.Z.isPreviewingInGame(),
        hasZeroSizeDimension: 0 === t.height || 0 === t.width,
        keybind: null != n ? (0, T.BB)(n.shortcut, !0) : "???"
      }
    }, [e]),
    R = (0, c.e7)([N.Z], () => N.Z.getActiveRegions()),
    {
      analyticsLocations: V
    } = (0, f.ZP)(b.Z.OVERLAY),
    G = t || A;
  ! function(e, t) {
    let n = o.useRef({
      mount: e,
      unmount: t
    });
    o.useEffect(() => {
      n.current = {
        mount: e,
        unmount: t
      }
    }), o.useEffect(() => (n.current.mount(), () => {
      n.current.unmount()
    }), [])
  }(() => {
    _.Z.overlayReady((0, Z.QF)()), e.addEventListener("keydown", eu), e.addEventListener("keyup", eu), $ && (e.document.hasFocus() && _.Z.setFocusedPID(Z.Js), e.addEventListener("focus", ec), e.addEventListener("blur", el))
  }, () => {
    e.removeEventListener("keydown", eu), e.removeEventListener("keyup", eu), $ && (e.removeEventListener("focus", ec), e.removeEventListener("blur", el))
  }),
  function() {
    let e = o.useRef(!1),
      t = (0, H.pL)(),
      n = x.Z.getVoiceChannelId(),
      r = E.Z.getChannel(n),
      a = null != r ? k.Z.getGuild(r.guild_id) : null,
      i = null != y.Z.getCurrentUserActiveStream(),
      c = null != n,
      l = (0, C.Z)(I.Z) && !i && null != t,
      u = c && null != a && null != n,
      {
        showKeybindIndicators: s,
        dismissKeybindNotification: d
      } = (0, D.K)();
    o.useEffect(() => {
      if (e.current) return;
      e.current = !0;
      let r = null;
      r = s ? {
        type: K.nc.KEYBIND_INDICATORS,
        markAsDismissed: d
      } : {
        type: K.nc.WELCOME
      }, l && u ? r = {
        type: K.nc.GO_LIVE_VOICE,
        game: t,
        voiceChannelId: n,
        voiceGuild: a
      } : l && (r = {
        type: K.nc.GO_LIVE_NON_VOICE,
        game: t
      }), _.Z.overlayMounted(r)
    }, [c, l, u, t, n, a, s, d])
  }(), o.useEffect(() => {
    if (t) {
      if ((0, l.Ay)(u.u1M), e.addEventListener("contextmenu", en, !1), null != et) {
        let e = Date.now() - et;
        _.Z.track(Q.rMx.OVERLAY_LOCKED, {
          unlocked_duration: e
        }), et = null
      }
      return () => {
        e.removeEventListener("contextmenu", en, !1)
      }
    }
    e.removeEventListener("contextmenu", en, !1), null == et && (et = Date.now(), _.Z.track(Q.rMx.OVERLAY_UNLOCKED))
  }, [t, e]);
  let er = (0, c.e7)([x.Z], () => x.Z.getVoiceChannelId()),
    es = (0, c.e7)([E.Z], () => E.Z.getChannel(er)),
    e_ = (0, c.e7)([k.Z], () => null != es ? k.Z.getGuild(es.guild_id) : null),
    ed = (0, c.e7)([v.default], () => v.default.getId()),
    eb = (0, c.e7)([m.ZP, L.Z], () => (0, O.Z)(m.ZP, L.Z)),
    ef = (0, g.Ns)(null == eb ? void 0 : eb.id),
    ep = (0, c.e7)([p.Z], () => null != p.Z.getLastFeedFetchDate(X.YN.GAME_PROFILE_FEED)),
    eh = (0, d.Z)(ep);
  return (o.useEffect(() => {
    !eh && ep && _.Z.notifyContentInventoryReady(ef)
  }, [ef, ep, eh]), h || a) ? null : (0, r.jsx)(f.Gt, {
    value: V,
    children: (0, r.jsx)(u.vWI, {
      children: (0, r.jsxs)("div", {
        className: J.overlay,
        children: [(0, r.jsx)(W.Z, {}), A && (0, r.jsx)("header", {
          className: J.previewingInGameHeader,
          children: q.NW.string(q.t.iOq96u)
        }), ee, (!t || R.has(Q.O0n.TEXT_WIDGET)) && (0, r.jsx)(eo, {
          locked: t,
          keybind: w,
          onClick: ei
        }), s ? (0, r.jsx)(M.Z, {
          className: i()({
            [J.layoutLocked]: t,
            [J.layoutUnlocked]: !t
          })
        }) : t ? null : (0, r.jsx)("div", {
          className: J.invalidContainer,
          children: (0, r.jsx)("div", {
            className: J.inactiveContainer,
            children: q.NW.format(q.t.ketnW1, Z.FW)
          })
        }), $ && (0, r.jsx)(ea, {
          locked: t,
          focused: n
        }), null != e_ && null != er && (0, r.jsx)(F.Z, {
          streamerId: ed,
          guildId: e_.id,
          channelId: er
        }), (0, r.jsx)(U.Z, {
          locked: G,
          keybind: w
        }), (0, r.jsx)(B.Z, {})]
      })
    })
  })
}