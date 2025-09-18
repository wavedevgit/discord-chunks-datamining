/** Chunk was on 50751 **/
/** chunk id: 554370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => el
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
  Chunk486016 = require("./486016.js"),
  Chunk32300 = require("./32300.js"),
  Chunk681603 = require("./681603.js"),
  Chunk915614 = require("./915614.jsx"),
  Chunk268861 = require("./268861.jsx"),
  Chunk690336 = require("./690336.jsx"),
  Chunk333031 = require("./333031.jsx"),
  Chunk371651 = require("./371651.js"),
  Chunk624864 = require("./624864.js"),
  Chunk610394 = require("./610394.js"),
  Chunk388627 = require("./388627.js"),
  Chunk319414 = require("./319414.jsx"),
  Chunk561064 = require("./561064.js"),
  Chunk987650 = require("./987650.js"),
  Chunk757744 = require("./757744.js"),
  Chunk981631 = require("./981631.js"),
  Chunk977594 = require("./977594.js");
let Q = !Chunk358085.isPlatformEmbedded && false,
  K = Q ? (0, Chunk951288.jsx)(Chunk70097.Z, {
    src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
    className: Chunk977594.videoDev,
    autoPlay: true,
    loop: true,
    muted: true
  }) : null,
  X = null;

function q(e) {
  e.preventDefault()
}

function J(e) {
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
        layoutId: F.$S,
        version: F.HN
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
    return (0, i.jsx)(u.P3F, {
      className: o()(B.overlayBackground, {
        [B.overlayActive]: !r,
        [B.overlayLocked]: r
      }),
      onMouseDown: e => {
        let {
          currentTarget: t,
          target: i,
          button: r
        } = e;
        r === Y.AeJ.PRIMARY && t === i && n()
      },
      onContextMenu: J,
      children: r ? null : (0, i.jsx)(L.Z, {
        className: B.closeContainer,
        children: (0, i.jsx)(A.Z, {
          keybind: t,
          onClick: n,
          IconComponent: u.Uz9
        })
      })
    })
  }),
  ee = Chunk647438.memo(function(e) {
    let {
      locked: t,
      focused: n
    } = e;
    return t && n ? (0, i.jsx)(L.Z, {
      className: B.closeContainer,
      children: (0, i.jsx)(A.Z, {
        onClick: () => d.Z.setInputLocked(false, (0, N.getPID)()),
        IconComponent: u.d$P
      })
    }) : null
  });

function et() {
  Chunk13245.Z.setInputLocked(true, (0, Chunk145597.getPID)())
}

function en() {
  Chunk13245.Z.setFocusedPID(Chunk145597.DEV_PID)
}

function ei() {
  Chunk13245.Z.setFocusedPID(null)
}

function er(e) {
  let t = z.ZP.isInputLocked((0, N.getPID)());
  "alt" !== e.key.toLowerCase() || t || ("keyup" === e.type.toLowerCase() ? C.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, {
    show: true
  }) : "keydown" === e.type.toLowerCase() && C.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, {
    show: false
  }))
}

function el(e) {
  let {
    isEmbeddedActivity: t
  } = e, n = (0, G.Z)(), {
    locked: l,
    focused: c,
    incompatibleApp: m,
    hasZeroSizeDimension: Z,
    keybind: A
  } = (0, a.cj)([z.ZP, j.default, I.Z, b.ZP], () => {
    let e = I.Z.windowSize((0, T.ZY)(n)),
      t = b.ZP.getOverlayKeybind(),
      i = (0, N.getPID)();
    return {
      locked: z.ZP.isInputLocked(i),
      focused: z.ZP.isFocused(i),
      incompatibleApp: j.default.incompatibleApp,
      hasZeroSizeDimension: 0 === e.height || 0 === e.width,
      keybind: null != t ? (0, w.BB)(t.shortcut, true) : "???"
    }
  }, [n]), {
    analyticsLocations: L
  } = (0, f.ZP)(h.Z.OVERLAY);
  (0, p.ZP)(() => {
    (0, P.lj)("OVERLAY_INITIALIZED")
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
    d.Z.overlayReady((0, N.getPID)()), n.addEventListener("keydown", er), n.addEventListener("keyup", er), Q && (n.document.hasFocus() && d.Z.setFocusedPID(N.DEV_PID), n.addEventListener("focus", en), n.addEventListener("blur", ei))
  }, () => {
    n.removeEventListener("keydown", er), n.removeEventListener("keyup", er), Q && (n.removeEventListener("focus", en), n.removeEventListener("blur", ei))
  });
  let F = r.useRef(null);
  return (0, p.ZP)(() => {
    var e;
    let t = (0, U.pL)(),
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
      c = null != (e = x.default.getFocusedPID()) ? e : (0, N.getPID)();
    if (M.default.hasChangedRenderMode(c)) return;
    let p = V.Z.isNotificationDisabled(_.OverlayNotificationDisabledSetting.WELCOME_GENERAL),
      h = V.Z.isNotificationDisabled(_.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE),
      f = V.Z.isNotificationDisabled(_.OverlayNotificationDisabledSetting.GAME_ACTIVITY),
      m = [];
    p || m.push({
      type: H.nc.WELCOME
    }), !h && (a && s ? m.push({
      type: H.nc.GO_LIVE_VOICE,
      game: t,
      voiceChannelId: n,
      voiceGuild: r
    }) : a && m.push({
      type: H.nc.GO_LIVE_NON_VOICE,
      game: t
    })), u && !f && m.push({
      type: H.nc.CONTENT_INVENTORY,
      entries: []
    }), 0 !== m.length && (null != F.current && clearTimeout(F.current), F.current = setTimeout(() => {
      d.Z.overlayMounted(...m)
    }, 1e3))
  }), (0, p.zq)(() => {
    null != F.current && (clearTimeout(F.current), F.current = null)
  }), r.useEffect(() => {
    if (C.S.dispatch(Y.CkL.OVERLAY_V3_SHOW_WIDGETS, {
        show: true
      }), l) {
      if ((0, s.Ay)(u.u1M), n.addEventListener("contextmenu", q, false), null != X) {
        let e = Date.now() - X;
        d.Z.track(Y.rMx.OVERLAY_LOCKED, {
          unlocked_duration: e
        }), X = null
      }
      return () => {
        n.removeEventListener("contextmenu", q, false)
      }
    }
    n.removeEventListener("contextmenu", q, false), null == X && (X = Date.now(), d.Z.track(Y.rMx.OVERLAY_UNLOCKED))
  }, [l, n]), (0, i.jsx)(f.Gt, {
    value: L,
    children: Z || m ? null : (0, i.jsxs)("div", {
      id: "overlay-container",
      className: B.overlay,
      children: [!t && K, (0, i.jsx)($, {
        locked: l,
        keybind: A,
        onClick: et
      }), (0, i.jsx)(k.Z, {
        className: o()({
          [B.layoutLocked]: l,
          [B.layoutUnlocked]: !l
        })
      }), (0, i.jsx)(W.Z, {}), !t && Q && (0, i.jsx)(ee, {
        locked: l,
        focused: c
      }), (0, i.jsx)(D.Z, {}), (0, i.jsx)(R.Z, {
        locked: l
      }), (0, i.jsx)(u.Ixi, {
        appContext: Y.IlC.OVERLAY
      })]
    })
  })
}