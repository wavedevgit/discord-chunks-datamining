/** Chunk was on web.js **/
/** chunk id: 165540, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk566620 = require("./566620.js"),
  Chunk989573 = require("./989573.js"),
  Chunk499254 = require("./499254.js"),
  Chunk541099 = require("./541099.js"),
  Chunk827498 = require("./827498.js"),
  Chunk663924 = require("./663924.jsx"),
  Chunk533379 = require("./533379.js"),
  Chunk562129 = require("./562129.js"),
  Chunk266454 = require("./266454.js"),
  Chunk291407 = require("./291407.jsx"),
  Chunk685006 = require("./685006.jsx"),
  Chunk61356 = require("./61356.js"),
  Chunk314734 = require("./314734.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk560163 = require("./560163.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let P = Chunk73800.forwardRef(function(e, t) {
  let {
    type: n,
    animateRef: o
  } = e, d = (0, s.e7)([_.Z], () => _.Z.shouldShowPopup() && _.Z.activeViewType() === n), {
    Component: h,
    events: m,
    play: b
  } = (0, g.Z)("ChannelAppLauncherButton");
  i.useImperativeHandle(o, () => ({
    animate: () => {
      m.onMouseEnter()
    }
  }), [m]);
  let y = i.useCallback(() => {
      d ? f.yT(p.ti.DISMISSED) : ((0, E.Q3)(l.z.DESKTOP_APP_LAUNCHER_ONBOARDING, {
        dismissAction: I.L.TAKE_ACTION
      }), f.__(p._b.TEXT, n), u.ux()), b()
    }, [d, n, b]),
    O = (0, r.jsx)(h, {
      size: "refresh_sm",
      color: "currentColor"
    });
  return (0, r.jsx)("div", {
    className: a()(S.buttonContainer, v.t4),
    ref: t,
    children: (0, r.jsx)(c.zx, R(N({
      look: c.zx.Looks.BLANK,
      size: c.zx.Sizes.NONE,
      tabIndex: 0,
      className: a()(S.button, {
        [S.buttonActive]: d
      }),
      onClick: y,
      "aria-label": T.intl.string(T.t.erHFxM),
      "aria-expanded": d,
      "aria-haspopup": "dialog",
      focusProps: {
        offset: {
          top: 4,
          bottom: 4,
          left: false,
          right: false
        }
      },
      innerClassName: S.buttonContents
    }, m), {
      children: O
    }))
  })
});

function w(e) {
  let {
    channel: t,
    type: n,
    animateRef: o,
    entryPointCommandButtonRef: a
  } = e, l = i.useRef(null), c = (0, m.R)({
    channel: t,
    chatInputType: n
  }), u = (0, O.Z)({
    type: n
  }), f = (0, d.Z)(t), p = (0, s.e7)([_.Z], () => _.Z.appDMChannelsWithFailedLoads().has(t.id)), {
    visible: g
  } = (0, y.xL)();
  return c ? (0, r.jsxs)("div", {
    className: S.channelAppLauncher,
    children: [(0, r.jsx)(b.Z, {
      channel: t,
      animationContainerClassName: S.entrypointAnimation,
      glowClassName: S.animationGlow,
      trinketsClassName: S.animationTrinkets,
      children: (0, r.jsx)(P, {
        type: n,
        ref: l,
        animateRef: o
      })
    }), u ? (0, r.jsx)(h.Z, {
      positionTargetRef: f && !p && g ? a : l,
      channel: t
    }) : null]
  }) : null
}
let D = Chunk73800.memo(w)