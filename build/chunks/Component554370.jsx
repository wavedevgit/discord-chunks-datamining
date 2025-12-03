/** Chunk was on 50751 **/
/** chunk id: 554370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => er
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk13245 = require("./13245.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk74299 = require("./74299.js"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk944486 = require("./944486.js"),
  Chunk556296 = require("./556296.js"),
  Chunk237997 = require("./237997.js"),
  Chunk451478 = require("./451478.js"),
  Chunk585483 = require("./585483.js"),
  Chunk358085 = require("./358085.js"),
  Chunk13140 = require("./13140.js"),
  Chunk830917 = require("./830917.js"),
  Chunk837268 = require("./837268.js"),
  Chunk32300 = require("./32300.js"),
  Chunk681603 = require("./681603.js"),
  Chunk915614 = require("./915614.jsx"),
  Chunk268861 = require("./268861.jsx"),
  Chunk690336 = require("./690336.jsx"),
  Chunk333031 = require("./333031.jsx"),
  Chunk371651 = require("./371651.js"),
  Chunk624864 = require("./624864.js"),
  Chunk610394 = require("./610394.js"),
  Chunk322155 = require("./322155.js"),
  Chunk338949 = require("./338949.js"),
  Chunk398269 = require("./398269.jsx"),
  Chunk388627 = require("./388627.js"),
  Chunk319414 = require("./319414.jsx"),
  Chunk561064 = require("./561064.js"),
  Chunk987650 = require("./987650.js"),
  Chunk757744 = require("./757744.js"),
  Chunk981631 = require("./981631.js"),
  Chunk977594 = require("./977594.js");
let K = !Chunk358085.isPlatformEmbedded && false,
  X = K ? (0, Chunk54381.jsx)(Chunk70097.Z, {
    src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
    className: Chunk977594.videoDev,
    autoPlay: true,
    loop: true,
    muted: true
  }) : null;

function J(e) {
  e.preventDefault()
}

function q(e) {
  (0, u.jW)(e, async () => {
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
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, t), r = r = {
        layoutId: Y.$S,
        version: Y.HN
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
let $ = Chunk473749.memo(function(e) {
    let {
      keybind: t,
      onClick: n,
      locked: r
    } = e, l = (0, T.T_)(p.Z.OVERLAY);
    return (0, i.jsx)(c.P3F, {
      className: a()(Q.overlayBackground, {
        [Q.overlayActive]: !r,
        [Q.overlayLocked]: r
      }),
      onMouseDown: e => {
        let {
          currentTarget: t,
          target: i,
          button: r
        } = e;
        r === B.AeJ.PRIMARY && t === i && n()
      },
      onContextMenu: q,
      children: r ? null : (0, i.jsxs)(R.Z, {
        className: Q.topRightContainer,
        children: [l ? (0, i.jsx)(P.Z, {
          onClick: () => (0, U.N)(p.Z.OVERLAY, B.IlC.OVERLAY),
          IconComponent: c.U65
        }) : null, (0, i.jsx)(P.Z, {
          keybind: t,
          onClick: n,
          IconComponent: c.Uz9
        })]
      })
    })
  }),
  ee = Chunk473749.memo(function(e) {
    let {
      locked: t,
      focused: n
    } = e;
    return t && n ? (0, i.jsx)(R.Z, {
      className: Q.topRightContainer,
      children: (0, i.jsx)(P.Z, {
        onClick: () => d.Z.setInputLocked(false, M.Z.getTargetPID()),
        IconComponent: c.d$P
      })
    }) : null
  });

function et() {
  Chunk13245.Z.setInputLocked(true, Chunk610394.Z.getTargetPID())
}

function en(e) {
  let t = V.Z.isInputLocked(M.Z.getTargetPID());
  "alt" !== e.key.toLowerCase() || t || ("keyup" === e.type.toLowerCase() ? I.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, {
    show: true
  }) : "keydown" === e.type.toLowerCase() && I.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, {
    show: false
  }))
}

function ei() {
  return (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.hasRenderDebugMode(Chunk837268.GO.WindowContainer)) ? (0, Chunk54381.jsx)("div", {
    className: Chunk977594.windowContainerDebug
  }) : null
}

function er(e) {
  let {
    isEmbeddedActivity: t
  } = e, n = (0, F.Z)(), l = (0, o.e7)([M.Z], () => M.Z.getTargetPID()), {
    locked: u,
    focused: m,
    incompatibleApp: C,
    hasZeroSizeDimension: w,
    keybind: P
  } = (0, o.cj)([M.Z, x.default, j.Z, b.ZP, V.Z], () => {
    let e = j.Z.windowSize((0, N.ZY)(n)),
      t = b.ZP.getOverlayKeybind();
    return {
      locked: V.Z.isInputLocked(l),
      focused: M.Z.isFocused(l),
      incompatibleApp: x.default.incompatibleApp,
      hasZeroSizeDimension: 0 === e.height || 0 === e.width,
      keybind: null != t ? (0, Z.BB)(t.shortcut, true) : "???"
    }
  }, [n, l]), {
    analyticsLocations: R
  } = (0, f.ZP)(p.Z.OVERLAY);
  (0, h.ZP)(() => {
    (0, T.F3)()
  }),
  function(e, t) {
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
    d.Z.overlayReady(M.Z.getTargetPID()), n.addEventListener("keydown", en), n.addEventListener("keyup", en)
  }, () => {
    n.removeEventListener("keydown", en), n.removeEventListener("keyup", en)
  });
  let z = r.useRef(null);
  return (0, h.ZP)(() => {
    let e = (0, W.pL)(),
      t = S.Z.getVoiceChannelId(),
      n = O.Z.getChannel(t),
      i = null != n ? E.Z.getGuild(n.guild_id) : null,
      r = null != y.Z.getCurrentUserActiveStream(),
      l = null != t,
      a = (0, g.Z)(v.Z) && !r && null != e,
      o = l && null != i && null != t,
      s = M.Z.getTargetPID();
    if (k.default.hasChangedRenderMode(s)) return;
    let c = L.Z.isNotificationDisabled(H.n0.WelcomeNudge),
      u = L.Z.isNotificationDisabled(H.n0.GoLiveNudge),
      h = L.Z.isNotificationDisabled(H.n0.ActivityInvite),
      p = [];
    !c && (p.push({
      type: H.nc.WELCOME
    }), !u && (a && o ? p.push({
      type: H.nc.GO_LIVE_VOICE,
      game: e,
      voiceChannelId: t,
      voiceGuild: i
    }) : a && p.push({
      type: H.nc.GO_LIVE_NON_VOICE,
      game: e
    })), h || p.push({
      type: H.nc.CONTENT_INVENTORY,
      entries: []
    })), null != z.current && clearTimeout(z.current), z.current = setTimeout(() => {
      d.Z.overlayMounted(...p)
    }, 1e3)
  }), (0, h.zq)(() => {
    null != z.current && (clearTimeout(z.current), z.current = null)
  }), r.useEffect(() => {
    if (I.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, {
        show: true
      }), u) return (0, s.Ay)(c.u1M), n.addEventListener("contextmenu", J, false), () => {
      n.removeEventListener("contextmenu", J, false)
    };
    n.removeEventListener("contextmenu", J, false)
  }, [u, n]), (0, i.jsx)(f.Gt, {
    value: R,
    children: w || C ? null : (0, i.jsxs)("div", {
      id: "overlay-container",
      className: Q.overlay,
      children: [!t && X, (0, i.jsx)($, {
        locked: u,
        keybind: P,
        onClick: et
      }), (0, i.jsx)(D.Z, {
        className: a()({
          [Q.layoutLocked]: u,
          [Q.layoutUnlocked]: !u
        })
      }), (0, i.jsx)(G.Z, {}), !t && K && (0, i.jsx)(ee, {
        locked: u,
        focused: m
      }), (0, i.jsx)(_.Z, {}), (0, i.jsx)(A.Z, {
        locked: u
      }), (0, i.jsx)(c.Ixi, {
        appContext: B.IlC.OVERLAY
      }), (0, i.jsx)(ei, {})]
    })
  })
}