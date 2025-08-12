/** Chunk was on 9646 **/
/** chunk id: 554370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => er
}), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk13245 = require("./13245.js"),
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
  Chunk374907 = require("./374907.js");
let Y = !Chunk358085.isPlatformEmbedded && false,
  Q = Y ? (0, Chunk255367.jsx)(Chunk70097.Z, {
    src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
    className: Chunk374907.videoDev,
    autoPlay: true,
    loop: true,
    muted: true
  }) : null,
  K = null;

function X(e) {
  e.preventDefault()
}

function J(e) {
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
        layoutId: G.$S,
        version: G.HN
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
let q = Chunk73800.memo(function(e) {
    let {
      keybind: t,
      onClick: n,
      locked: r
    } = e;
    return (0, i.jsx)(c.P3F, {
      className: l()(H.overlayBackground, {
        [H.overlayActive]: !r,
        [H.overlayLocked]: r
      }),
      onMouseDown: e => {
        let {
          currentTarget: t,
          target: i,
          button: r
        } = e;
        r === B.AeJ.PRIMARY && t === i && n()
      },
      onContextMenu: J,
      children: r ? null : (0, i.jsx)(R.Z, {
        className: H.closeContainer,
        children: (0, i.jsx)(A.Z, {
          keybind: t,
          onClick: n,
          IconComponent: c.Uz9
        })
      })
    })
  }),
  $ = Chunk73800.memo(function(e) {
    let {
      locked: t,
      focused: n
    } = e;
    return t && n ? (0, i.jsx)(R.Z, {
      className: H.closeContainer,
      children: (0, i.jsx)(A.Z, {
        onClick: () => d.Z.setInputLocked(false, (0, N.getPID)()),
        IconComponent: c.d$P
      })
    }) : null
  });

function ee() {
  Chunk13245.Z.setInputLocked(true, (0, Chunk145597.getPID)())
}

function et() {
  Chunk13245.Z.setFocusedPID(Chunk145597.DEV_PID)
}

function en() {
  Chunk13245.Z.setFocusedPID(null)
}

function ei(e) {
  let t = z.ZP.isInputLocked((0, N.getPID)());
  "alt" !== e.key.toLowerCase() || t || ("keyup" === e.type.toLowerCase() ? I.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, {
    show: true
  }) : "keydown" === e.type.toLowerCase() && I.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, {
    show: false
  }))
}

function er(e) {
  let {
    isEmbeddedActivity: t
  } = e, n = (0, W.Z)(), {
    locked: o,
    focused: u,
    incompatibleApp: h,
    hasZeroSizeDimension: j,
    keybind: A
  } = (0, a.cj)([z.ZP, x.default, S.Z, E.ZP], () => {
    let e = S.Z.windowSize((0, w.ZY)(n)),
      t = E.ZP.getOverlayKeybind(),
      i = (0, N.getPID)();
    return {
      locked: z.ZP.isInputLocked(i),
      focused: z.ZP.isFocused(i),
      incompatibleApp: x.default.incompatibleApp,
      hasZeroSizeDimension: 0 === e.height || 0 === e.width,
      keybind: null != t ? (0, C.BB)(t.shortcut, true) : "???"
    }
  }, [n]), {
    analyticsLocations: R
  } = (0, f.ZP)(p.Z.OVERLAY);
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
    d.Z.overlayReady((0, N.getPID)()), n.addEventListener("keydown", ei), n.addEventListener("keyup", ei), Y && (n.document.hasFocus() && d.Z.setFocusedPID(N.DEV_PID), n.addEventListener("focus", et), n.addEventListener("blur", en))
  }, () => {
    n.removeEventListener("keydown", ei), n.removeEventListener("keyup", ei), Y && (n.removeEventListener("focus", et), n.removeEventListener("blur", en))
  }), ! function() {
    let e = r.useRef(false),
      t = r.useRef(null),
      n = (0, U.pL)(),
      i = v.Z.getVoiceChannelId(),
      o = y.Z.getChannel(i),
      l = null != o ? O.Z.getGuild(o.guild_id) : null,
      a = null != g.Z.getCurrentUserActiveStream(),
      s = null != i,
      c = (0, m.Z)(b.Z) && !a && null != n,
      u = s && null != l && null != i,
      {
        allowActivityWidget: p
      } = (0, P.o4)("overlay");
    r.useEffect(() => {
      var r;
      if (e.current) return;
      e.current = true;
      let o = null != (r = _.default.getFocusedPID()) ? r : (0, N.getPID)();
      if (L.default.hasChangedRenderMode(o)) return;
      let a = M.Z.isNotificationDisabled(Z.OverlayNotificationDisabledSetting.WELCOME_GENERAL),
        s = M.Z.isNotificationDisabled(Z.OverlayNotificationDisabledSetting.GO_LIVE_NUDGE),
        f = M.Z.isNotificationDisabled(Z.OverlayNotificationDisabledSetting.GAME_ACTIVITY),
        h = [];
      if (a || h.push({
          type: F.nc.WELCOME
        }), !s && (c && u ? h.push({
          type: F.nc.GO_LIVE_VOICE,
          game: n,
          voiceChannelId: i,
          voiceGuild: l
        }) : c && h.push({
          type: F.nc.GO_LIVE_NON_VOICE,
          game: n
        })), p && !f && h.push({
          type: F.nc.CONTENT_INVENTORY,
          entries: []
        }), 0 !== h.length) return null != t.current && clearTimeout(t.current), t.current = setTimeout(() => {
        d.Z.overlayMounted(...h)
      }, 1e3), () => {
        null != t.current && (clearTimeout(t.current), t.current = null)
      }
    }, [s, c, u, n, i, l, p])
  }(), r.useEffect(() => {
    if (I.S.dispatch(B.CkL.OVERLAY_V3_SHOW_WIDGETS, {
        show: true
      }), o) {
      if ((0, s.Ay)(c.u1M), n.addEventListener("contextmenu", X, false), null != K) {
        let e = Date.now() - K;
        d.Z.track(B.rMx.OVERLAY_LOCKED, {
          unlocked_duration: e
        }), K = null
      }
      return () => {
        n.removeEventListener("contextmenu", X, false)
      }
    }
    n.removeEventListener("contextmenu", X, false), null == K && (K = Date.now(), d.Z.track(B.rMx.OVERLAY_UNLOCKED))
  }, [o, n]), (0, i.jsx)(f.Gt, {
    value: R,
    children: j || h ? null : (0, i.jsx)(c.f6W, {
      theme: B.BRd.MIDNIGHT,
      children: e => (0, i.jsxs)("div", {
        id: "overlay-container",
        className: l()(H.overlay, e),
        children: [!t && Q, (0, i.jsx)(q, {
          locked: o,
          keybind: A,
          onClick: ee
        }), (0, i.jsx)(D.Z, {
          className: l()({
            [H.layoutLocked]: o,
            [H.layoutUnlocked]: !o
          })
        }), (0, i.jsx)(V.Z, {}), !t && Y && (0, i.jsx)($, {
          locked: o,
          focused: u
        }), (0, i.jsx)(T.Z, {}), (0, i.jsx)(k.Z, {
          locked: o
        }), (0, i.jsx)(c.Ixi, {})]
      })
    })
  })
}