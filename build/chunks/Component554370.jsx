/** Chunk was on 50751 **/
/** chunk id: 554370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => es
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
  Chunk808506 = require("./808506.js"),
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
let X = !Chunk358085.isPlatformEmbedded && false,
  q = X ? (0, Chunk951288.jsx)(Chunk70097.Z, {
    src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
    className: Chunk977594.videoDev,
    autoPlay: true,
    loop: true,
    muted: true
  }) : null,
  J = null;

function $(e) {
  e.preventDefault()
}

function ee(e) {
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
let et = Chunk647438.memo(function(e) {
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
        r === Q.AeJ.PRIMARY && t === i && n()
      },
      onContextMenu: ee,
      children: r ? null : (0, i.jsx)(L.Z, {
        className: K.closeContainer,
        children: (0, i.jsx)(D.Z, {
          keybind: t,
          onClick: n,
          IconComponent: u.Uz9
        })
      })
    })
  }),
  en = Chunk647438.memo(function(e) {
    let {
      locked: t,
      focused: n
    } = e;
    return t && n ? (0, i.jsx)(L.Z, {
      className: K.closeContainer,
      children: (0, i.jsx)(D.Z, {
        onClick: () => d.Z.setInputLocked(false, (0, w.getPID)()),
        IconComponent: u.d$P
      })
    }) : null
  });

function ei() {
  Chunk13245.Z.setInputLocked(true, (0, Chunk145597.getPID)())
}

function er() {
  Chunk13245.Z.setFocusedPID(Chunk145597.DEV_PID, null)
}

function el() {
  Chunk13245.Z.setFocusedPID(null, null)
}

function eo(e) {
  let t = U.Z.isInputLocked((0, w.getPID)());
  "alt" !== e.key.toLowerCase() || t || ("keyup" === e.type.toLowerCase() ? C.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, {
    show: true
  }) : "keydown" === e.type.toLowerCase() && C.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, {
    show: false
  }))
}

function ea() {
  return (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.hasRenderDebugMode(Chunk837268.GO.WindowContainer)) ? (0, Chunk951288.jsx)("div", {
    className: Chunk977594.windowContainerDebug
  }) : null
}

function es(e) {
  let {
    isEmbeddedActivity: t
  } = e, n = (0, H.Z)(), {
    locked: l,
    focused: c,
    incompatibleApp: m,
    hasZeroSizeDimension: Z,
    keybind: _
  } = (0, a.cj)([z.Z, j.default, I.Z, b.ZP, U.Z], () => {
    let e = I.Z.windowSize((0, T.ZY)(n)),
      t = b.ZP.getOverlayKeybind(),
      i = (0, w.getPID)();
    return {
      locked: U.Z.isInputLocked(i),
      focused: z.Z.isFocused(i),
      incompatibleApp: j.default.incompatibleApp,
      hasZeroSizeDimension: 0 === e.height || 0 === e.width,
      keybind: null != t ? (0, N.BB)(t.shortcut, true) : "???"
    }
  }, [n]), {
    analyticsLocations: D
  } = (0, f.ZP)(h.Z.OVERLAY);
  (0, p.ZP)(() => {
    (0, P.F3)()
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
    d.Z.overlayReady((0, w.getPID)()), n.addEventListener("keydown", eo), n.addEventListener("keyup", eo), X && (n.document.hasFocus() && d.Z.setFocusedPID(w.DEV_PID, null), n.addEventListener("focus", er), n.addEventListener("blur", el))
  }, () => {
    n.removeEventListener("keydown", eo), n.removeEventListener("keyup", eo), X && (n.removeEventListener("focus", er), n.removeEventListener("blur", el))
  });
  let L = r.useRef(null);
  return (0, p.ZP)(() => {
    var e;
    let t = (0, G.pL)(),
      n = S.Z.getVoiceChannelId(),
      i = O.Z.getChannel(n),
      r = null != i ? E.Z.getGuild(i.guild_id) : null,
      l = null != y.Z.getCurrentUserActiveStream(),
      o = null != n,
      a = (0, g.Z)(v.Z) && !l && null != t,
      s = o && null != r && null != n,
      {
        allowActivityWidget: u
      } = (0, P.Rb)("overlay"),
      c = null != (e = x.default.getFocusedPID()) ? e : (0, w.getPID)();
    if (M.default.hasChangedRenderMode(c)) return;
    let p = V.Z.isNotificationDisabled(B.n0.WelcomeNudge),
      h = V.Z.isNotificationDisabled(B.n0.GoLiveNudge),
      f = V.Z.isNotificationDisabled(B.n0.ActivityInvite),
      m = [];
    p || (m.push({
      type: B.nc.WELCOME
    }), !h && (a && s ? m.push({
      type: B.nc.GO_LIVE_VOICE,
      game: t,
      voiceChannelId: n,
      voiceGuild: r
    }) : a && m.push({
      type: B.nc.GO_LIVE_NON_VOICE,
      game: t
    })), u && !f && m.push({
      type: B.nc.CONTENT_INVENTORY,
      entries: []
    })), null != L.current && clearTimeout(L.current), L.current = setTimeout(() => {
      d.Z.overlayMounted(...m)
    }, 1e3)
  }), (0, p.zq)(() => {
    null != L.current && (clearTimeout(L.current), L.current = null)
  }), r.useEffect(() => {
    if (C.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, {
        show: true
      }), l) {
      if ((0, s.Ay)(u.u1M), n.addEventListener("contextmenu", $, false), null != J) {
        let e = Date.now() - J;
        d.Z.track(Q.rMx.OVERLAY_LOCKED, {
          unlocked_duration: e
        }), J = null
      }
      return () => {
        n.removeEventListener("contextmenu", $, false)
      }
    }
    n.removeEventListener("contextmenu", $, false), null == J && (J = Date.now(), d.Z.track(Q.rMx.OVERLAY_UNLOCKED))
  }, [l, n]), (0, i.jsx)(f.Gt, {
    value: D,
    children: Z || m ? null : (0, i.jsxs)("div", {
      id: "overlay-container",
      className: K.overlay,
      children: [!t && q, (0, i.jsx)(et, {
        locked: l,
        keybind: _,
        onClick: ei
      }), (0, i.jsx)(k.Z, {
        className: o()({
          [K.layoutLocked]: l,
          [K.layoutUnlocked]: !l
        })
      }), (0, i.jsx)(F.Z, {}), !t && X && (0, i.jsx)(en, {
        locked: l,
        focused: c
      }), (0, i.jsx)(A.Z, {}), (0, i.jsx)(R.Z, {
        locked: l
      }), (0, i.jsx)(u.Ixi, {
        appContext: Q.IlC.OVERLAY
      }), (0, i.jsx)(ea, {})]
    })
  })
}