/** Chunk was on 50751 **/
n.d(t, {
  Z: () => eo
}), n(653041), n(47120);
var i = n(200651),
  r = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(442837),
  s = n(952265),
  u = n(481060),
  c = n(239091),
  d = n(13245),
  p = n(100527),
  h = n(906732),
  f = n(146282),
  m = n(70097),
  g = n(567409),
  O = n(74299),
  v = n(199902),
  y = n(592125),
  E = n(430824),
  b = n(131951),
  j = n(944486),
  x = n(556296),
  S = n(808506),
  I = n(237997),
  C = n(451478),
  N = n(585483),
  Z = n(358085),
  w = n(13140),
  P = n(145597),
  _ = n(830917),
  T = n(86071),
  D = n(32300),
  k = n(681603),
  A = n(915614),
  L = n(268861),
  R = n(690336),
  M = n(333031),
  W = n(371651),
  V = n(610394),
  z = n(388627),
  U = n(319414),
  F = n(561064),
  G = n(987650),
  Y = n(757744),
  H = n(981631),
  B = n(206583),
  K = n(734811);
let Q = !Z.isPlatformEmbedded && !1,
  X = Q ? (0, i.jsx)(m.Z, {
    src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
    className: K.videoDev,
    autoPlay: !0,
    loop: !0,
    muted: !0
  }) : null,
  J = null;

function q(e) {
  e.preventDefault()
}

function $(e) {
  (0, c.jW)(e, async () => {
    let {
      default: e
    } = await n.e("17610").then(n.bind(n, 385620));
    return t => {
      var n, r;
      return (0, i.jsx)(e, (n = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = i
          })
        }
        return e
      }({}, t), r = r = {
        layoutId: Y.$,
        version: Y.H
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
      }), n))
    }
  })
}
let ee = r.memo(function(e) {
    let {
      keybind: t,
      onClick: n,
      locked: r
    } = e;
    return (0, i.jsx)(u.P3F, {
      className: o()(K.overlayBackground, {
        [K.overlayActive]: !r,
        [K.overlayLocked]: r
      }),
      onMouseDown: e => {
        let {
          currentTarget: t,
          target: i,
          button: r
        } = e;
        r === H.AeJ.PRIMARY && t === i && n()
      },
      onContextMenu: $,
      children: r ? null : (0, i.jsx)(M.Z, {
        className: K.closeContainer,
        children: (0, i.jsx)(A.Z, {
          keybind: t,
          onClick: n,
          IconComponent: u.Uz9
        })
      })
    })
  }),
  et = r.memo(function(e) {
    let {
      locked: t,
      focused: n
    } = e;
    return t && n ? (0, i.jsx)(M.Z, {
      className: K.closeContainer,
      children: (0, i.jsx)(A.Z, {
        onClick: () => d.Z.setInputLocked(!1, (0, P.getPID)()),
        IconComponent: u.d$P
      })
    }) : null
  });

function en() {
  d.Z.setInputLocked(!0, (0, P.getPID)())
}

function ei() {
  d.Z.setFocusedPID(P.DEV_PID)
}

function er() {
  d.Z.setFocusedPID(null)
}

function el(e) {
  let t = V.ZP.isInputLocked((0, P.getPID)());
  "alt" !== e.key.toLowerCase() || t || ("keyup" === e.type.toLowerCase() ? N.S.dispatch(H.CkL.OVERLAY_V3_SHOW_WIDGETS, {
    show: !0
  }) : "keydown" === e.type.toLowerCase() && N.S.dispatch(H.CkL.OVERLAY_V3_SHOW_WIDGETS, {
    show: !1
  }))
}

function eo(e) {
  let {
    isEmbeddedActivity: t
  } = e, n = (0, F.Z)(), {
    locked: l,
    focused: c,
    incompatibleApp: m,
    hasZeroSizeDimension: Z,
    keybind: A
  } = (0, a.cj)([V.ZP, I.default, C.Z, x.ZP], () => {
    let e = C.Z.windowSize((0, _.ZY)(n)),
      t = x.ZP.getOverlayKeybind(),
      i = (0, P.getPID)();
    return {
      locked: V.ZP.isInputLocked(i),
      focused: i === P.DEV_PID ? I.default.isFocused(i) : V.ZP.isFocused((0, P.getPID)()),
      incompatibleApp: I.default.incompatibleApp,
      hasZeroSizeDimension: 0 === e.height || 0 === e.width,
      keybind: null != t ? (0, w.BB)(t.shortcut, !0) : "???"
    }
  }, [n]), {
    analyticsLocations: M
  } = (0, h.ZP)(p.Z.OVERLAY);
  return ! function(e, t) {
    let n = r.useRef({
      mount: e,
      unmount: t
    });
    r.useEffect(() => {
      n.current = {
        mount: e,
        unmount: t
      }
    }), r.useEffect(() => (n.current.mount(), () => {
      n.current.unmount()
    }), [])
  }(() => {
    d.Z.overlayReady((0, P.getPID)()), n.addEventListener("keydown", el), n.addEventListener("keyup", el), Q && (n.document.hasFocus() && d.Z.setFocusedPID(P.DEV_PID), n.addEventListener("focus", ei), n.addEventListener("blur", er))
  }, () => {
    n.removeEventListener("keydown", el), n.removeEventListener("keyup", el), Q && (n.removeEventListener("focus", ei), n.removeEventListener("blur", er))
  }), ! function() {
    let e = r.useRef(!1),
      t = (0, z.pL)(),
      n = j.Z.getVoiceChannelId(),
      i = y.Z.getChannel(n),
      l = null != i ? E.Z.getGuild(i.guild_id) : null,
      o = null != v.Z.getCurrentUserActiveStream(),
      s = null != n,
      u = (0, O.Z)(b.Z) && !o && null != t,
      c = s && null != l && null != n,
      {
        enabled: p
      } = T.Z.useExperiment({
        location: "Overlay"
      }, {
        autoTrackExposure: !0
      }),
      {
        allowActivityWidget: h
      } = (0, D.o4)("overlay"),
      m = (0, g.Ns)(null == t ? void 0 : t.id),
      x = (0, a.e7)([f.Z], () => null != f.Z.getLastFeedFetchDate(B.YN.GAME_PROFILE_FEED) || !p && !h, [p, h]);
    r.useEffect(() => {
      var i;
      if (!x || e.current) return;
      e.current = !0;
      let r = null !== (i = S.default.getFocusedPID()) && void 0 !== i ? i : (0, P.getPID)();
      if (W.default.hasChangedRenderMode(r)) return;
      let o = [{
        type: G.nc.WELCOME
      }];
      u && c ? o.push({
        type: G.nc.GO_LIVE_VOICE,
        game: t,
        voiceChannelId: n,
        voiceGuild: l
      }) : u && o.push({
        type: G.nc.GO_LIVE_NON_VOICE,
        game: t
      }), m.length > 0 && (p || h) && o.push({
        type: G.nc.CONTENT_INVENTORY,
        entries: m
      }), d.Z.overlayMounted(...o)
    }, [x, m, s, u, c, t, n, l, h, p])
  }(), r.useEffect(() => {
    if (N.S.dispatch(H.CkL.OVERLAY_V3_SHOW_WIDGETS, {
        show: !0
      }), l) {
      if ((0, s.Ay)(u.u1M), n.addEventListener("contextmenu", q, !1), null != J) {
        let e = Date.now() - J;
        d.Z.track(H.rMx.OVERLAY_LOCKED, {
          unlocked_duration: e
        }), J = null
      }
      return () => {
        n.removeEventListener("contextmenu", q, !1)
      }
    }
    n.removeEventListener("contextmenu", q, !1), null == J && (J = Date.now(), d.Z.track(H.rMx.OVERLAY_UNLOCKED))
  }, [l, n]), (0, i.jsx)(h.Gt, {
    value: M,
    children: (0, i.jsx)(u.vWI, {
      children: Z || m ? null : (0, i.jsx)(u.f6W, {
        theme: H.BRd.DARK,
        children: e => (0, i.jsxs)("div", {
          className: o()(K.overlay, e),
          children: [!t && X, (0, i.jsx)(ee, {
            locked: l,
            keybind: A,
            onClick: en
          }), (0, i.jsx)(R.Z, {
            className: o()({
              [K.layoutLocked]: l,
              [K.layoutUnlocked]: !l
            })
          }), (0, i.jsx)(U.Z, {}), !t && Q && (0, i.jsx)(et, {
            locked: l,
            focused: c
          }), (0, i.jsx)(k.Z, {}), (0, i.jsx)(L.Z, {
            locked: l
          }), (0, i.jsx)(u.Ixi, {})]
        })
      })
    })
  })
}