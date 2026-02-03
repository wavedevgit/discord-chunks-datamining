/** Chunk was on web.js **/
/** chunk id: 587500, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => el
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk92674 = require("./92674.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk387755 = require("./387755.js"),
  Chunk517499 = require("./517499.js"),
  Chunk956793 = require("./956793.js"),
  Chunk712960 = require("./712960.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk58149 = require("./58149.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk571694 = require("./571694.js"),
  Chunk47167 = require("./47167.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk329551 = require("./329551.js"),
  Chunk413339 = require("./413339.js"),
  Chunk952572 = require("./952572.js"),
  Chunk151476 = require("./151476.js"),
  Chunk704877 = require("./704877.js"),
  Chunk222692 = require("./222692.jsx"),
  Chunk404355 = require("./404355.jsx"),
  Chunk496841 = require("./496841.jsx"),
  Chunk970636 = require("./970636.jsx"),
  Chunk164891 = require("./164891.js"),
  Chunk260509 = require("./260509.js"),
  Chunk71393 = require("./71393.js"),
  Chunk430452 = require("./430452.js"),
  Chunk287809 = require("./287809.js"),
  Chunk531685 = require("./531685.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk313961 = require("./313961.js"),
  Chunk85448 = require("./85448.jsx"),
  Chunk750765 = require("./750765.jsx"),
  Chunk384059 = require("./384059.js"),
  Chunk480890 = require("./480890.js"),
  Chunk806931 = require("./806931.js"),
  Chunk652215 = require("./652215.js"),
  Chunk650583 = require("./650583.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk503434 = require("./503434.js"),
  Chunk424658 = require("./424658.js"),
  Chunk976092 = require("./976092.js");

function X(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      X(e, t, n[t])
    })
  }
  return e
}

function $(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ee(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let et = {
    width: 232,
    height: 315
  },
  en = {
    width: 232,
    height: 267
  },
  er = 475,
  ei = 267,
  ea = 128;

function eo(e) {
  let {
    header: t
  } = e, n = L.A.getCameraComponent(), a = (0, l.bG)([L.A], () => L.A.getVideoDeviceId()), o = (0, A.A)();
  return i.useEffect(() => {
    let e = x.default.getCurrentUser();
    if (o && null != e) {
      let t = (0, O.i)(e);
      (0, v.S1)(t, a, {
        track: false
      }).catch(Y.tEg)
    }
  }, [o, a]), (0, r.jsxs)("div", {
    className: Z.Tg,
    children: [(0, r.jsx)(c.y$y, {}), (0, r.jsx)("div", {
      className: Z.VH,
      children: (0, r.jsx)(n, {
        disabled: false,
        deviceId: a,
        width: er,
        height: ei
      })
    }), (0, r.jsx)("div", {
      className: Z.dB,
      children: t
    })]
  })
}

function es(e) {
  let {
    canVideo: t,
    channel: n,
    numVideoDevices: a
  } = e, {
    parentAnalyticsLocation: s
  } = (0, m.Ay)(), {
    cameraUnavailable: l,
    enabled: d
  } = (0, I.A)(), p = (0, S.A)(n), _ = i.useRef(null), g = a > 1;
  return (0, r.jsxs)("div", {
    className: o()(Z.iE, Z.o1),
    children: [(0, r.jsx)(C.A, {
      iconComponent: c.PGe,
      label: z.intl.string(z.t.WAI6xu),
      className: Z.hP,
      onClick: () => {
        (0, V.X)(s, V.O.DISCONNECT), j.default.track(Y.HAw.RING_CALL_DECLINED, J({
          location: s,
          guild_id: n.guild_id
        }, (0, h.dI)(n))), u.A.stopRinging(n.id)
      }
    }), t && (0, r.jsx)(c.YNO, {
      targetElementRef: _,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(F.A, {
          onClose: t,
          onInteraction: (0, B.s)("VideoDeviceMenu", s, {
            entrypoint: H.GK.CARET
          })
        })
      },
      position: "top",
      align: "center",
      animation: c.YNO.Animation.FADE,
      children: (e, t) => {
        let {
          onClick: i
        } = e, {
          isShown: a
        } = t;
        return (0, r.jsx)(w.A, {
          buttonRef: _,
          join: true,
          enabled: d,
          className: o()(Z.hP, {
            [Z.$j]: g
          }),
          color: "green",
          centerButton: true,
          hasPermission: p,
          cameraUnavailable: l,
          channel: n,
          onPopoutClick: g ? i : null,
          popoutOpen: a,
          onCameraUnavailable: T.A,
          onChange: () => {
            var e;
            (0, V.X)(s, V.O.JOIN_VIDEO_CALL), j.default.track(Y.HAw.RING_CALL_ACCEPTED, J({
              location: s,
              guild_id: n.guild_id
            }, (0, h.dI)(n))), f.default.selectVoiceChannel(n.id, true), (0, b.uh)(null != (e = n.guild_id) ? e : Y.ME, n.id)
          }
        })
      }
    }), (0, r.jsx)(N.A, {
      channel: n,
      color: "join",
      centerButton: true,
      onCallJoined: () => j.default.track(Y.HAw.RING_CALL_ACCEPTED, J({
        location: s,
        guild_id: n.guild_id
      }, (0, h.dI)(n))),
      className: Z.hP
    })]
  })
}

function el(e) {
  var t;
  let {
    animatedStyle: n,
    y: a,
    x: f,
    channel: h
  } = e, {
    analyticsLocations: b
  } = (0, m.Ay)(_.A.INCOMING_CALL_MODAL), [O, v] = i.useState(false), A = (0, l.bG)([D.A], () => D.A.getGuild(h.guild_id)), I = null != A ? k.Ay.getGuildIconURL({
    id: A.id,
    icon: A.icon,
    size: ea
  }) : null, S = null != (t = (0, g.Y)(h, ea, true)) ? t : I, T = (0, E.Ay)(h), [C, N] = (0, l.yK)([L.A], () => [L.A.supports(K.O5.VIDEO), Object.keys(L.A.getVideoDevices()).length]), w = null != A ? "".concat(T, ", ").concat(A.name) : T, x = (0, l.bG)([M.A], () => M.A.isFocused()), j = (0, l.bG)([U.A], () => U.A.getMode(h.id)), F = i.useCallback(e => {
    null != e.top && null != e.left && d.A.move(e.left, e.top)
  }, []), V = (0, c.zhh)({
    value: +!!O,
    config: ee(J({}, s.config.stiff), {
      clamp: true
    })
  }, "animate-always");
  i.useEffect(() => {
    let e = e => {
      e.key === W.dh.ESCAPE && u.A.stopRinging(h.id)
    };
    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
  }, [h]);
  let B = j === Y._Of.VIDEO && C && N > 0,
    {
      enabled: H
    } = R.A.useExperiment({
      guildId: null == h ? true : h.guild_id,
      location: "IncomingCallModal"
    }),
    X = j === Y._Of.VOICE || H && h.type === Y.rbe.GUILD_VOICE ? z.intl.string(z.t.Js8cK3) : z.intl.string(z.t.KcnWCO),
    $ = (0, r.jsxs)(r.Fragment, {
      children: [null != A && null == I ? (0, r.jsx)("div", {
        className: o()(Z.Kk, q.iE, q.hs),
        children: (0, r.jsx)(y.Ay, {
          className: Z.dK,
          mask: y.hW.AVATAR_DEFAULT,
          width: O ? 40 : 80,
          height: O ? 40 : 80,
          children: (0, r.jsx)("div", {
            className: o()(Z.$f, Z.Gc),
            children: (0, r.jsx)("div", {
              className: Z.Hj,
              children: (0, P.Rb)(A)
            })
          })
        })
      }) : (0, r.jsx)(G.A, {
        className: Z.Kk,
        ringing: x,
        src: null != S ? S : "",
        ringingType: G.A.RingingType.INCOMING,
        size: O ? c._3J.SIZE_40 : c._3J.SIZE_80
      }), (0, r.jsxs)("div", {
        className: Z.i8,
        children: [(0, r.jsx)(c.Text, {
          className: Z.DD,
          color: "text-strong",
          variant: O ? "text-md/semibold" : "text-lg/semibold",
          children: w
        }), (0, r.jsx)(c.Text, {
          color: "text-default",
          className: Z.VA,
          variant: O ? "text-sm/normal" : "text-md/normal",
          children: X
        })]
      })]
    }),
    el = B ? et : en,
    ec = (0, l.bG)([M.A], () => M.A.windowSize());
  return (0, r.jsx)(m.f5, {
    value: b,
    children: (0, r.jsx)(p.A, {
      className: Z.iE,
      selector: ".".concat(Z.zr),
      initialPosition: {
        left: f,
        top: a
      },
      maxX: ec.width,
      maxY: ec.height,
      onDragEnd: F,
      dragAnywhere: true,
      children: (0, r.jsx)(c.NPJ, {
        theme: O ? Y.NJ8.DARK : true,
        children: e => (0, r.jsxs)(s.animated.div, {
          className: o()(Z.zr, Q.a8, {
            [Z.mY]: O
          }, e),
          style: ee(J({}, n), {
            minWidth: V.value.interpolate([0, 1], [el.width, er]),
            minHeight: V.value.interpolate([0, 1], [el.height, ei]),
            translateX: V.value.interpolate([0, 1], [0, false * Math.abs(er - el.width) / 2])
          }),
          children: [O ? (0, r.jsx)(eo, {
            header: $
          }) : (0, r.jsx)("div", {
            className: Z.Rh,
            children: $
          }), (0, r.jsx)(es, {
            canVideo: B,
            channel: h,
            numVideoDevices: N
          }), B && !O ? (0, r.jsx)("div", {
            "data-button-hoisted-classname-wrapper": true,
            className: Z.jc,
            children: (0, r.jsx)(c.Button, {
              variant: "secondary",
              size: "sm",
              text: z.intl.string(z.t["8B0UDr"]),
              fullWidth: true,
              onClick: () => v(true)
            })
          }) : null]
        })
      })
    })
  })
}