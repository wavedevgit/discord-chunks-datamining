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
  J = X ? (0, Chunk627968.jsx)(Chunk607470.A, {
    src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdpcnRrYXdrNzVuNjZ3NXpmeTJvNGl4Z2N4OXBsamx5aXphdHhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/OPg2B0FPBL94H12uM0/giphy480p.mp4",
    className: Chunk661272.pN,
    autoPlay: true,
    loop: true,
    muted: true
  }) : null;

function Q(e) {
  e.preventDefault()
}

function q(e) {
  (0, c.L3)(e, async () => {
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
        layoutId: W.G,
        version: 4
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
  }, {
    context: B.BRT.OVERLAY
  })
}
let $ = Chunk64700.memo(function(e) {
    let {
      keybind: t,
      onClick: n,
      locked: r
    } = e, l = (0, N.X4)(p.A.OVERLAY);
    return (0, i.jsx)(u.DUT, {
      className: a()(Z.LK, {
        [Z.Zo]: !r,
        [Z.vZ]: r
      }),
      onMouseDown: e => {
        let {
          currentTarget: t,
          target: i,
          button: r
        } = e;
        r === B.hE4.PRIMARY && t === i && n()
      },
      onContextMenu: q,
      children: r ? null : (0, i.jsxs)(k.A, {
        className: Z.BE,
        children: [l ? (0, i.jsx)(P.A, {
          onClick: () => (0, z.b)(p.A.OVERLAY, B.BRT.OVERLAY),
          IconComponent: u.iFK
        }) : null, (0, i.jsx)(P.A, {
          keybind: t,
          onClick: n,
          IconComponent: u.d$L
        })]
      })
    })
  }),
  ee = Chunk64700.memo(function(e) {
    let {
      locked: t,
      focused: n
    } = e;
    return t && n ? (0, i.jsx)(k.A, {
      className: Z.BE,
      children: (0, i.jsx)(P.A, {
        onClick: () => d.A.setInputLocked(false, U.A.getTargetPID()),
        IconComponent: u.wUM
      })
    }) : null
  });

function et() {
  d.A.setInputLocked(true, U.A.getTargetPID())
}

function en(e) {
  let t = G.A.isInputLocked(U.A.getTargetPID());
  "alt" !== e.key.toLowerCase() || t || ("keyup" === e.type.toLowerCase() ? S._.dispatch(B.jej.OVERLAY_V3_SHOW_WIDGETS, {
    show: true
  }) : "keydown" === e.type.toLowerCase() && S._.dispatch(B.jej.OVERLAY_V3_SHOW_WIDGETS, {
    show: false
  }))
}

function ei() {
  return (0, s.bG)([V.A], () => V.A.hasRenderDebugMode(C.x7.WindowContainer)) ? (0, i.jsx)("div", {
    className: Z.N1
  }) : null
}

function er(e) {
  var t, n;
  let l, c, {
      isEmbeddedActivity: g
    } = e,
    I = (0, Y.A)(),
    C = (0, s.bG)([U.A], () => U.A.getTargetPID()),
    {
      locked: P,
      focused: k,
      incompatibleApp: V,
      hasZeroSizeDimension: z,
      keybind: W
    } = (0, s.cf)([U.A, x.default, _.A, O.Ay, G.A], () => {
      let e = _.A.windowSize((0, T.Q2)(I)),
        t = O.Ay.getOverlayKeybind();
      return {
        locked: G.A.isInputLocked(C),
        focused: U.A.isFocused(C),
        incompatibleApp: x.default.incompatibleApp,
        hasZeroSizeDimension: 0 === e.height || 0 === e.width,
        keybind: null != t ? (0, j.dI)(t.shortcut, true) : "???"
      }
    }, [I, C]),
    {
      analyticsLocations: q
    } = (0, f.Ay)(p.A.OVERLAY);
  return (0, h.Ay)(() => {
    (0, N.E)()
  }), t = () => {
    d.A.overlayReady(U.A.getTargetPID()), I.addEventListener("keydown", en), I.addEventListener("keyup", en)
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
  }), []), c = r.useRef(null), (0, h.Ay)(() => {
    let e = (0, F.qv)(),
      t = E.A.getVoiceChannelId(),
      n = A.A.getChannel(t),
      i = null != n ? v.A.getGuild(n.guild_id) : null,
      r = null != y.A.getCurrentUserActiveStream(),
      l = null != t,
      a = (0, m.A)(b.A) && !r && null != e,
      s = l && null != i && null != t,
      o = U.A.getTargetPID();
    if (M.default.hasChangedRenderMode(o)) return;
    let u = L.A.isNotificationDisabled(K.KS.WelcomeNudge),
      h = L.A.isNotificationDisabled(K.KS.GoLiveNudge),
      p = L.A.isNotificationDisabled(K.KS.ActivityInvite),
      f = [];
    !u && (f.push({
      type: K.Jr.WELCOME
    }), !h && (a && s ? f.push({
      type: K.Jr.GO_LIVE_VOICE,
      game: e,
      voiceChannelId: t,
      voiceGuild: i
    }) : a && f.push({
      type: K.Jr.GO_LIVE_NON_VOICE,
      game: e
    })), p || f.push({
      type: K.Jr.CONTENT_INVENTORY,
      entries: []
    })), null != c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      d.A.overlayMounted(...f)
    }, 1e3)
  }), (0, h.l0)(() => {
    null != c.current && (clearTimeout(c.current), c.current = null)
  }), r.useEffect(() => {
    if (S._.dispatch(B.jej.OVERLAY_V3_SHOW_WIDGETS, {
        show: true
      }), P) return (0, o.closeAllModalsInContext)(u.KX8), I.addEventListener("contextmenu", Q, false), () => {
      I.removeEventListener("contextmenu", Q, false)
    };
    I.removeEventListener("contextmenu", Q, false)
  }, [P, I]), (0, i.jsx)(f.f5, {
    value: q,
    children: z || V ? null : (0, i.jsxs)("div", {
      id: "overlay-container",
      className: Z.Lw,
      children: [!g && J, (0, i.jsx)($, {
        locked: P,
        keybind: W,
        onClick: et
      }), (0, i.jsx)(R.A, {
        className: a()({
          [Z.ZK]: P,
          [Z.al]: !P
        })
      }), (0, i.jsx)(H.A, {}), !g && X && (0, i.jsx)(ee, {
        locked: P,
        focused: k
      }), (0, i.jsx)(w.A, {}), (0, i.jsx)(D.A, {
        locked: P
      }), (0, i.jsx)(u.N9M, {
        appContext: B.BRT.OVERLAY
      }), (0, i.jsx)(ei, {})]
    })
  })
}