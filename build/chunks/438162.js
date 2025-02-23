/** Chunk was on 54030 (25c4c88fea95173d.js) **/
n.d(t, {
  Z: () => e_
});
var r = n(200651),
  a = n(192379),
  i = n(120356),
  o = n.n(i),
  c = n(442837),
  l = n(952265),
  s = n(481060),
  _ = n(239091),
  d = n(13245),
  u = n(110924),
  f = n(100527),
  p = n(906732),
  h = n(146282),
  b = n(70097),
  m = n(594190),
  g = n(567409),
  C = n(74299),
  O = n(989941),
  y = n(199902),
  v = n(314897),
  I = n(592125),
  E = n(430824),
  k = n(131951),
  L = n(944486),
  x = n(449224),
  w = n(574254),
  S = n(556296),
  P = n(237997),
  A = n(451478),
  R = n(585483),
  N = n(358085),
  T = n(13140),
  j = n(145597),
  Z = n(830917),
  B = n(681603),
  D = n(358446),
  W = n(348733),
  U = n(708383),
  V = n(923532),
  M = n(915614),
  F = n(777382),
  G = n(333031),
  z = n(610394),
  H = n(388627),
  Y = n(561064),
  K = n(987650),
  Q = n(981631),
  X = n(206583),
  q = n(388032),
  J = n(703231);
let $ = !N.isPlatformEmbedded && !1,
  ee = $ ? (0, r.jsx)(b.Z, {
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
  (0, _.jW)(e, async () => {
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
let ea = a.memo(function(e) {
    let {
      keybind: t,
      onClick: n,
      locked: a
    } = e;
    return (0, r.jsx)(s.P3F, {
      className: o()(J.overlayBackground, {
        [J.overlayActive]: !a,
        [J.overlayLocked]: a
      }),
      onMouseDown: e => {
        let {
          currentTarget: t,
          target: r,
          button: a
        } = e;
        a === Q.AeJ.PRIMARY && t === r && n()
      },
      onContextMenu: er,
      children: a ? null : (0, r.jsx)(G.Z, {
        className: J.closeContainer,
        children: (0, r.jsx)(M.Z, {
          keybind: t,
          onClick: n,
          IconComponent: s.Uz9
        })
      })
    })
  }),
  ei = a.memo(function(e) {
    let {
      locked: t,
      focused: n
    } = e;
    return t && n ? (0, r.jsx)(G.Z, {
      className: J.closeContainer,
      children: (0, r.jsx)(M.Z, {
        onClick: () => d.Z.setInputLocked(!1, (0, j.QF)()),
        IconComponent: s.d$P
      })
    }) : null
  });

function eo() {
  if (null != w.Z.getContextMenu()) {
    (0, _.Zy)();
    return
  }
  d.Z.setInputLocked(!0, (0, j.QF)())
}

function ec() {
  d.Z.setFocusedPID(j.Js)
}

function el() {
  d.Z.setFocusedPID(null)
}

function es(e) {
  let t = z.ZP.isInputLocked((0, j.QF)());
  "alt" !== e.key.toLowerCase() || t || ("keyup" === e.type.toLowerCase() ? R.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, {
    show: !1
  }) : "keydown" === e.type.toLowerCase() && R.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, {
    show: !0
  }))
}

function e_() {
  let e = (0, Y.Z)(),
    {
      locked: t,
      focused: n,
      incompatibleApp: i,
      hasValidResolution: _,
      hasZeroSizeDimension: b,
      keybind: w,
      isPreviewingInGame: R
    } = (0, c.cj)([z.ZP, P.Z, A.Z, S.ZP], () => {
      let t = A.Z.windowSize((0, Z.ZY)(e)),
        n = S.ZP.getOverlayKeybind(),
        r = (0, j.QF)();
      return {
        locked: z.ZP.isInputLocked(r),
        focused: r === j.Js ? P.Z.isFocused(r) : z.ZP.isFocused(r),
        incompatibleApp: P.Z.incompatibleApp,
        hasValidResolution: (0, j.Te)(t),
        isPreviewingInGame: P.Z.isPreviewingInGame(),
        hasZeroSizeDimension: 0 === t.height || 0 === t.width,
        keybind: null != n ? (0, T.BB)(n.shortcut, !0) : "???"
      }
    }, [e]),
    N = (0, c.e7)([P.Z], () => P.Z.getActiveRegions()),
    {
      analyticsLocations: M
    } = (0, p.ZP)(f.Z.OVERLAY),
    G = t || R;
  ! function(e, t) {
    let n = a.useRef({
      mount: e,
      unmount: t
    });
    a.useEffect(() => {
      n.current = {
        mount: e,
        unmount: t
      }
    }), a.useEffect(() => (n.current.mount(), () => {
      n.current.unmount()
    }), [])
  }(() => {
    d.Z.overlayReady((0, j.QF)()), e.addEventListener("keydown", es), e.addEventListener("keyup", es), $ && (e.document.hasFocus() && d.Z.setFocusedPID(j.Js), e.addEventListener("focus", ec), e.addEventListener("blur", el))
  }, () => {
    e.removeEventListener("keydown", es), e.removeEventListener("keyup", es), $ && (e.removeEventListener("focus", ec), e.removeEventListener("blur", el))
  }),
  function() {
    let e = a.useRef(!1),
      t = (0, H.pL)(),
      n = L.Z.getVoiceChannelId(),
      r = I.Z.getChannel(n),
      i = null != r ? E.Z.getGuild(r.guild_id) : null,
      o = null != y.Z.getCurrentUserActiveStream(),
      c = null != n,
      l = (0, C.Z)(k.Z) && !o && null != t,
      s = c && null != i && null != n,
      {
        showKeybindIndicators: _,
        dismissKeybindNotification: u
      } = (0, D.K)();
    a.useEffect(() => {
      if (e.current) return;
      e.current = !0;
      let r = null;
      r = _ ? {
        type: K.nc.KEYBIND_INDICATORS,
        markAsDismissed: u
      } : {
        type: K.nc.WELCOME
      }, l && s ? r = {
        type: K.nc.GO_LIVE_VOICE,
        game: t,
        voiceChannelId: n,
        voiceGuild: i
      } : l && (r = {
        type: K.nc.GO_LIVE_NON_VOICE,
        game: t
      }), d.Z.overlayMounted(r)
    }, [c, l, s, t, n, i, _, u])
  }(), a.useEffect(() => {
    if (t) {
      if ((0, l.Ay)(s.u1M), e.addEventListener("contextmenu", en, !1), null != et) {
        let e = Date.now() - et;
        d.Z.track(Q.rMx.OVERLAY_LOCKED, {
          unlocked_duration: e
        }), et = null
      }
      return () => {
        e.removeEventListener("contextmenu", en, !1)
      }
    }
    e.removeEventListener("contextmenu", en, !1), null == et && (et = Date.now(), d.Z.track(Q.rMx.OVERLAY_UNLOCKED))
  }, [t, e]);
  let er = (0, c.e7)([L.Z], () => L.Z.getVoiceChannelId()),
    e_ = (0, c.e7)([I.Z], () => I.Z.getChannel(er)),
    ed = (0, c.e7)([E.Z], () => null != e_ ? E.Z.getGuild(e_.guild_id) : null),
    eu = (0, c.e7)([v.default], () => v.default.getId()),
    ef = (0, c.e7)([m.ZP, x.Z], () => (0, O.Z)(m.ZP, x.Z)),
    ep = (0, g.Ns)(null == ef ? void 0 : ef.id),
    eh = (0, c.e7)([h.Z], () => null != h.Z.getLastFeedFetchDate(X.YN.GAME_PROFILE_FEED)),
    eb = (0, u.Z)(eh);
  return (a.useEffect(() => {
    !eb && eh && d.Z.notifyContentInventoryReady(ep)
  }, [ep, eh, eb]), b || i) ? null : (0, r.jsx)(p.Gt, {
    value: M,
    children: (0, r.jsx)(s.vWI, {
      children: (0, r.jsxs)("div", {
        className: J.overlay,
        children: [(0, r.jsx)(U.Z, {}), R && (0, r.jsx)("header", {
          className: J.previewingInGameHeader,
          children: q.NW.string(q.t.iOq96u)
        }), ee, (!t || N.has(Q.O0n.TEXT_WIDGET)) && (0, r.jsx)(ea, {
          locked: t,
          keybind: w,
          onClick: eo
        }), _ ? (0, r.jsx)(F.Z, {
          className: o()({
            [J.layoutLocked]: t,
            [J.layoutUnlocked]: !t
          })
        }) : t ? null : (0, r.jsx)("div", {
          className: J.invalidContainer,
          children: (0, r.jsx)("div", {
            className: J.inactiveContainer,
            children: q.NW.format(q.t.ketnW1, j.FW)
          })
        }), $ && (0, r.jsx)(ei, {
          locked: t,
          focused: n
        }), null != ed && null != er && (0, r.jsx)(V.Z, {
          streamerId: eu,
          guildId: ed.id,
          channelId: er
        }), (0, r.jsx)(W.Z, {
          locked: G,
          keybind: w
        }), (0, r.jsx)(B.Z, {})]
      })
    })
  })
}