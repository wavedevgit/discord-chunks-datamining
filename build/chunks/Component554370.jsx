/** Chunk was on 50751 **/
/** chunk id: 554370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ea
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
  Chunk250928 = require("./250928.js");
let X = !Chunk358085.isPlatformEmbedded && false,
  J = X ? (0, Chunk951288.jsx)(Chunk70097.Z, {
    src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
    className: Chunk250928.videoDev,
    autoPlay: true,
    loop: true,
    muted: true
  }) : null;

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
let ee = Chunk647438.memo(function(e) {
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
      onContextMenu: $,
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
  et = Chunk647438.memo(function(e) {
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

function en() {
  Chunk13245.Z.setInputLocked(true, (0, Chunk145597.getPID)())
}

function ei() {
  Chunk13245.Z.setFocusedPID(Chunk145597.DEV_PID, null)
}

function er() {
  Chunk13245.Z.setFocusedPID(null, null)
}

function el(e) {
  let t = U.Z.isInputLocked((0, w.getPID)());
  "alt" !== e.key.toLowerCase() || t || ("keyup" === e.type.toLowerCase() ? C.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, {
    show: true
  }) : "keydown" === e.type.toLowerCase() && C.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, {
    show: false
  }))
}

function eo() {
  return (0, Chunk442837.e7)([Chunk338949.Z], () => Chunk338949.Z.hasRenderDebugMode(Chunk837268.GO.WindowContainer)) ? (0, Chunk951288.jsx)("div", {
    className: Chunk250928.windowContainerDebug
  }) : null
}

function ea(e) {
  let {
    isEmbeddedActivity: t
  } = e, n = (0, H.Z)(), l = (0, a.e7)([z.Z], () => z.Z.getFocusedPID()), c = null != l && l !== w.UNSET_PID ? l : (0, w.getPID)(), {
    locked: m,
    focused: Z,
    incompatibleApp: _,
    hasZeroSizeDimension: D,
    keybind: L
  } = (0, a.cj)([z.Z, j.default, I.Z, b.ZP, U.Z], () => {
    let e = I.Z.windowSize((0, T.ZY)(n)),
      t = b.ZP.getOverlayKeybind();
    return {
      locked: U.Z.isInputLocked(c),
      focused: z.Z.isFocused(c),
      incompatibleApp: j.default.incompatibleApp,
      hasZeroSizeDimension: 0 === e.height || 0 === e.width,
      keybind: null != t ? (0, N.BB)(t.shortcut, true) : "???"
    }
  }, [n, c]), {
    analyticsLocations: W
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
    d.Z.overlayReady((0, w.getPID)()), n.addEventListener("keydown", el), n.addEventListener("keyup", el), X && (n.document.hasFocus() && d.Z.setFocusedPID(w.DEV_PID, null), n.addEventListener("focus", ei), n.addEventListener("blur", er))
  }, () => {
    n.removeEventListener("keydown", el), n.removeEventListener("keyup", el), X && (n.removeEventListener("focus", ei), n.removeEventListener("blur", er))
  });
  let Y = r.useRef(null);
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
    })), null != Y.current && clearTimeout(Y.current), Y.current = setTimeout(() => {
      d.Z.overlayMounted(...m)
    }, 1e3)
  }), (0, p.zq)(() => {
    null != Y.current && (clearTimeout(Y.current), Y.current = null)
  }), r.useEffect(() => {
    if (C.S.dispatch(Q.CkL.OVERLAY_V3_SHOW_WIDGETS, {
        show: true
      }), m) return (0, s.Ay)(u.u1M), n.addEventListener("contextmenu", q, false), () => {
      n.removeEventListener("contextmenu", q, false)
    };
    n.removeEventListener("contextmenu", q, false)
  }, [m, n]), (0, i.jsx)(f.Gt, {
    value: W,
    children: D || _ ? null : (0, i.jsxs)("div", {
      id: "overlay-container",
      className: K.overlay,
      children: [!t && J, (0, i.jsx)(ee, {
        locked: m,
        keybind: L,
        onClick: en
      }), (0, i.jsx)(k.Z, {
        className: o()({
          [K.layoutLocked]: m,
          [K.layoutUnlocked]: !m
        })
      }), (0, i.jsx)(F.Z, {}), !t && X && (0, i.jsx)(et, {
        locked: m,
        focused: Z
      }), (0, i.jsx)(A.Z, {}), (0, i.jsx)(R.Z, {
        locked: m
      }), (0, i.jsx)(u.Ixi, {
        appContext: Q.IlC.OVERLAY
      }), (0, i.jsx)(eo, {})]
    })
  })
}