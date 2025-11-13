/** Chunk was on 50751 **/
/** chunk id: 554370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eo
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk145597 = require("./145597.js"),
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
  Chunk388627 = require("./388627.js"),
  Chunk319414 = require("./319414.jsx"),
  Chunk561064 = require("./561064.js"),
  Chunk987650 = require("./987650.js"),
  Chunk757744 = require("./757744.js"),
  Chunk981631 = require("./981631.js"),
  Chunk977594 = require("./977594.js");
let K = !Chunk358085.isPlatformEmbedded && false,
  X = K ? (0, Chunk951288.jsx)(Chunk70097.Z, {
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
        layoutId: H.$S,
        version: H.HN
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
let $ = Chunk647438.memo(function(e) {
    let {
      keybind: t,
      onClick: n,
      locked: r
    } = e;
    return (0, i.jsx)(c.P3F, {
      className: o()(Q.overlayBackground, {
        [Q.overlayActive]: !r,
        [Q.overlayLocked]: r
      }),
      onMouseDown: e => {
        let {
          currentTarget: t,
          target: i,
          button: r
        } = e;
        r === Y.AeJ.PRIMARY && t === i && n()
      },
      onContextMenu: q,
      children: r ? null : (0, i.jsx)(R.Z, {
        className: Q.closeContainer,
        children: (0, i.jsx)(A.Z, {
          keybind: t,
          onClick: n,
          IconComponent: c.Uz9
        })
      })
    })
  }),
  ee = Chunk647438.memo(function(e) {
    let {
      locked: t,
      focused: n
    } = e;
    return t && n ? (0, i.jsx)(R.Z, {
      className: Q.closeContainer,
      children: (0, i.jsx)(A.Z, {
        onClick: () => d.Z.setInputLocked(false, z.Z.getTargetPID()),
        IconComponent: c.d$P
      })
    }) : null
  });

function et() {
  Chunk13245.Z.setInputLocked(true, Chunk610394.Z.getTargetPID())
}

function en() {
  Chunk13245.Z.setFocusedPID(Chunk145597.DEV_PID, null)
}

function ei() {
  Chunk13245.Z.setFocusedPID(null, null)
}

function er(e) {
  let t = V.Z.isInputLocked(z.Z.getTargetPID());
  "alt" !== e.key.toLowerCase() || t || ("keyup" === e.type.toLowerCase() ? I.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, {
    show: true
  }) : "keydown" === e.type.toLowerCase() && I.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, {
    show: false
  }))
}

function el() {
  return (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.hasRenderDebugMode(Chunk837268.GO.WindowContainer)) ? (0, Chunk951288.jsx)("div", {
    className: Chunk977594.windowContainerDebug
  }) : null
}

function eo(e) {
  let {
    isEmbeddedActivity: t
  } = e, n = (0, F.Z)(), l = (0, a.e7)([z.Z], () => z.Z.getTargetPID()), {
    locked: u,
    focused: m,
    incompatibleApp: C,
    hasZeroSizeDimension: w,
    keybind: A
  } = (0, a.cj)([z.Z, S.default, x.Z, _.ZP, V.Z], () => {
    let e = x.Z.windowSize((0, Z.ZY)(n)),
      t = _.ZP.getOverlayKeybind();
    return {
      locked: V.Z.isInputLocked(l),
      focused: z.Z.isFocused(l),
      incompatibleApp: S.default.incompatibleApp,
      hasZeroSizeDimension: 0 === e.height || 0 === e.width,
      keybind: null != t ? (0, j.BB)(t.shortcut, true) : "???"
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
    d.Z.overlayReady(z.Z.getTargetPID()), n.addEventListener("keydown", er), n.addEventListener("keyup", er), K && (n.document.hasFocus() && d.Z.setFocusedPID(N.DEV_PID, null), n.addEventListener("focus", en), n.addEventListener("blur", ei))
  }, () => {
    n.removeEventListener("keydown", er), n.removeEventListener("keyup", er), K && (n.removeEventListener("focus", en), n.removeEventListener("blur", ei))
  });
  let U = r.useRef(null);
  return (0, h.ZP)(() => {
    let e = (0, W.pL)(),
      t = b.Z.getVoiceChannelId(),
      n = O.Z.getChannel(t),
      i = null != n ? v.Z.getGuild(n.guild_id) : null,
      r = null != y.Z.getCurrentUserActiveStream(),
      l = null != t,
      o = (0, g.Z)(E.Z) && !r && null != e,
      a = l && null != i && null != t,
      {
        allowActivityWidget: s
      } = (0, T.Rb)("overlay"),
      c = z.Z.getTargetPID();
    if (L.default.hasChangedRenderMode(c)) return;
    let u = M.Z.isNotificationDisabled(B.n0.WelcomeNudge),
      h = M.Z.isNotificationDisabled(B.n0.GoLiveNudge),
      p = M.Z.isNotificationDisabled(B.n0.ActivityInvite),
      f = [];
    u || (f.push({
      type: B.nc.WELCOME
    }), !h && (o && a ? f.push({
      type: B.nc.GO_LIVE_VOICE,
      game: e,
      voiceChannelId: t,
      voiceGuild: i
    }) : o && f.push({
      type: B.nc.GO_LIVE_NON_VOICE,
      game: e
    })), s && !p && f.push({
      type: B.nc.CONTENT_INVENTORY,
      entries: []
    })), null != U.current && clearTimeout(U.current), U.current = setTimeout(() => {
      d.Z.overlayMounted(...f)
    }, 1e3)
  }), (0, h.zq)(() => {
    null != U.current && (clearTimeout(U.current), U.current = null)
  }), r.useEffect(() => {
    if (I.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, {
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
        keybind: A,
        onClick: et
      }), (0, i.jsx)(k.Z, {
        className: o()({
          [Q.layoutLocked]: u,
          [Q.layoutUnlocked]: !u
        })
      }), (0, i.jsx)(G.Z, {}), !t && K && (0, i.jsx)(ee, {
        locked: u,
        focused: m
      }), (0, i.jsx)(P.Z, {}), (0, i.jsx)(D.Z, {
        locked: u
      }), (0, i.jsx)(c.Ixi, {
        appContext: Y.IlC.OVERLAY
      }), (0, i.jsx)(el, {})]
    })
  })
}