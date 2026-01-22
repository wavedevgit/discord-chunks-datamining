/** Chunk was on 71447 **/
/** chunk id: 200042, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => er
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk192308 = require("./192308.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk684013 = require("./684013.js"),
  Chunk964486 = require("./964486.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk607470 = require("./607470.jsx"),
  Chunk880144 = require("./880144.js"),
  Chunk616356 = require("./616356.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk430452 = require("./430452.js"),
  Chunk309010 = require("./309010.js"),
  Chunk532624 = require("./532624.js"),
  Chunk256415 = require("./256415.js"),
  Chunk531685 = require("./531685.js"),
  Chunk203982 = require("./203982.js"),
  Chunk723702 = require("./723702.js"),
  Chunk350535 = require("./350535.js"),
  Chunk365971 = require("./365971.js"),
  Chunk41984 = require("./41984.js"),
  Chunk589051 = require("./589051.js"),
  Chunk223251 = require("./223251.js"),
  Chunk935975 = require("./935975.jsx"),
  Chunk555153 = require("./555153.jsx"),
  Chunk155052 = require("./155052.jsx"),
  Chunk302614 = require("./302614.jsx"),
  Chunk833551 = require("./833551.js"),
  Chunk592598 = require("./592598.js"),
  Chunk395011 = require("./395011.js"),
  Chunk222506 = require("./222506.js"),
  Chunk127242 = require("./127242.js"),
  Chunk237984 = require("./237984.jsx"),
  Chunk243612 = require("./243612.js"),
  Chunk575530 = require("./575530.jsx"),
  Chunk545807 = require("./545807.js"),
  Chunk672396 = require("./672396.js"),
  Chunk644434 = require("./644434.js"),
  Chunk652215 = require("./652215.js"),
  Chunk661272 = require("./661272.js");
let X = !Chunk723702.isPlatformEmbedded && false,
  Q = X ? (0, Chunk627968.jsx)(Chunk607470.A, {
    src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
    className: Chunk661272.pN,
    autoPlay: true,
    loop: true,
    muted: true
  }) : null;

function J(e) {
  e.preventDefault()
}

function q(e) {
  (0, u.L3)(e, async () => {
    let {
      default: e
    } = await n.e("86437").then(n.bind(n, 171300));
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
        layoutId: Z.G,
        version: 3
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
let $ = Chunk64700.memo(function(e) {
    let {
      keybind: t,
      onClick: n,
      locked: r
    } = e, l = (0, C.X4)(h.A.OVERLAY);
    return (0, i.jsx)(c.DUT, {
      className: a()(B.LK, {
        [B.Zo]: !r,
        [B.vZ]: r
      }),
      onMouseDown: e => {
        let {
          currentTarget: t,
          target: i,
          button: r
        } = e;
        r === W.hE4.PRIMARY && t === i && n()
      },
      onContextMenu: q,
      children: r ? null : (0, i.jsxs)(L.A, {
        className: B.BE,
        children: [l ? (0, i.jsx)(P.A, {
          onClick: () => (0, G.b)(h.A.OVERLAY, W.BRT.OVERLAY),
          IconComponent: c.iFK
        }) : null, (0, i.jsx)(P.A, {
          keybind: t,
          onClick: n,
          IconComponent: c.d$L
        })]
      })
    })
  }),
  ee = Chunk64700.memo(function(e) {
    let {
      locked: t,
      focused: n
    } = e;
    return t && n ? (0, i.jsx)(L.A, {
      className: B.BE,
      children: (0, i.jsx)(P.A, {
        onClick: () => d.A.setInputLocked(false, V.A.getTargetPID()),
        IconComponent: c.wUM
      })
    }) : null
  });

function et() {
  d.A.setInputLocked(true, V.A.getTargetPID())
}

function en(e) {
  let t = U.A.isInputLocked(V.A.getTargetPID());
  "alt" !== e.key.toLowerCase() || t || ("keyup" === e.type.toLowerCase() ? j._.dispatch(W.jej.OVERLAY_V3_SHOW_WIDGETS, {
    show: true
  }) : "keydown" === e.type.toLowerCase() && j._.dispatch(W.jej.OVERLAY_V3_SHOW_WIDGETS, {
    show: false
  }))
}

function ei() {
  return (0, o.bG)([z.A], () => z.A.hasRenderDebugMode(T.x7.WindowContainer)) ? (0, i.jsx)("div", {
    className: B.N1
  }) : null
}

function er(e) {
  var t, n;
  let l, u, {
      isEmbeddedActivity: m
    } = e,
    I = (0, F.A)(),
    T = (0, o.bG)([V.A], () => V.A.getTargetPID()),
    {
      locked: P,
      focused: L,
      incompatibleApp: z,
      hasZeroSizeDimension: G,
      keybind: Z
    } = (0, o.cf)([V.A, S.default, x.A, b.Ay, U.A], () => {
      let e = x.A.windowSize((0, w.Q2)(I)),
        t = b.Ay.getOverlayKeybind();
      return {
        locked: U.A.isInputLocked(T),
        focused: V.A.isFocused(T),
        incompatibleApp: S.default.incompatibleApp,
        hasZeroSizeDimension: 0 === e.height || 0 === e.width,
        keybind: null != t ? (0, N.dI)(t.shortcut, true) : "???"
      }
    }, [I, T]),
    {
      analyticsLocations: q
    } = (0, f.Ay)(h.A.OVERLAY);
  return (0, p.Ay)(() => {
    (0, C.E)()
  }), t = () => {
    d.A.overlayReady(V.A.getTargetPID()), I.addEventListener("keydown", en), I.addEventListener("keyup", en)
  }, n = () => {
    I.removeEventListener("keydown", en), I.removeEventListener("keyup", en)
  }, l = r.useRef({
    mount: t,
    unmount: n
  }), r.useEffect(() => {
    l.current = {
      mount: t,
      unmount: n
    }
  }), r.useEffect(() => (l.current.mount(), () => {
    l.current.unmount()
  }), []), u = r.useRef(null), (0, p.Ay)(() => {
    let e = (0, H.qv)(),
      t = v.A.getVoiceChannelId(),
      n = A.A.getChannel(t),
      i = null != n ? O.A.getGuild(n.guild_id) : null,
      r = null != y.A.getCurrentUserActiveStream(),
      l = null != t,
      a = (0, g.A)(E.A) && !r && null != e,
      o = l && null != i && null != t,
      s = V.A.getTargetPID();
    if (k.default.hasChangedRenderMode(s)) return;
    let c = M.A.isNotificationDisabled(K.KS.WelcomeNudge),
      p = M.A.isNotificationDisabled(K.KS.GoLiveNudge),
      h = M.A.isNotificationDisabled(K.KS.ActivityInvite),
      f = [];
    !c && (f.push({
      type: K.Jr.WELCOME
    }), !p && (a && o ? f.push({
      type: K.Jr.GO_LIVE_VOICE,
      game: e,
      voiceChannelId: t,
      voiceGuild: i
    }) : a && f.push({
      type: K.Jr.GO_LIVE_NON_VOICE,
      game: e
    })), h || f.push({
      type: K.Jr.CONTENT_INVENTORY,
      entries: []
    })), null != u.current && clearTimeout(u.current), u.current = setTimeout(() => {
      d.A.overlayMounted(...f)
    }, 1e3)
  }), (0, p.l0)(() => {
    null != u.current && (clearTimeout(u.current), u.current = null)
  }), r.useEffect(() => {
    if (j._.dispatch(W.jej.OVERLAY_V3_SHOW_WIDGETS, {
        show: true
      }), P) return (0, s.closeAllModalsInContext)(c.KX8), I.addEventListener("contextmenu", J, false), () => {
      I.removeEventListener("contextmenu", J, false)
    };
    I.removeEventListener("contextmenu", J, false)
  }, [P, I]), (0, i.jsx)(f.f5, {
    value: q,
    children: G || z ? null : (0, i.jsxs)("div", {
      id: "overlay-container",
      className: B.Lw,
      children: [!m && Q, (0, i.jsx)($, {
        locked: P,
        keybind: Z,
        onClick: et
      }), (0, i.jsx)(R.A, {
        className: a()({
          [B.ZK]: P,
          [B.al]: !P
        })
      }), (0, i.jsx)(Y.A, {}), !m && X && (0, i.jsx)(ee, {
        locked: P,
        focused: L
      }), (0, i.jsx)(_.A, {}), (0, i.jsx)(D.A, {
        locked: P
      }), (0, i.jsx)(c.N9M, {
        appContext: W.BRT.OVERLAY
      }), (0, i.jsx)(ei, {})]
    })
  })
}