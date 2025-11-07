/** Chunk was on web.js **/
/** chunk id: 775685, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk566620 = require("./566620.js"),
  Chunk499254 = require("./499254.js"),
  Chunk541099 = require("./541099.js"),
  Chunk827498 = require("./827498.js"),
  Chunk663924 = require("./663924.jsx"),
  Chunk533379 = require("./533379.js"),
  Chunk562129 = require("./562129.js"),
  Chunk570220 = require("./570220.js"),
  Chunk61356 = require("./61356.js"),
  Chunk314734 = require("./314734.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk124886 = require("./124886.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = Chunk647438.forwardRef(function(e, t) {
  let {
    type: n
  } = e, a = (0, l.e7)([d.Z], () => d.Z.shouldShowPopup() && d.Z.activeViewType() === n), {
    Component: _,
    events: p,
    play: g
  } = (0, h.Z)("ChannelAppLauncherButton"), O = i.useContext(m.ZP);
  i.useEffect(() => {
    let e = () => {
      p.onMouseEnter()
    };
    return O.on("command-sentinel-typed", e), () => {
      O.off("command-sentinel-typed", e)
    }
  }, [O, p]);
  let I = i.useCallback(() => {
      a ? u.y(f.ti.DISMISSED) : (u._(f._b.TEXT, n), c.ux()), g()
    }, [a, n, g]),
    T = (0, r.jsx)(_, {
      size: "refresh_sm",
      color: "currentColor"
    });
  return (0, r.jsx)("div", {
    className: o()(y.buttonContainer, E.t4),
    ref: t,
    children: (0, r.jsx)(s.P3F, S(v({
      tabIndex: 0,
      className: o()(y.button, {
        [y.buttonActive]: a
      }),
      onClick: I,
      "aria-label": b.intl.string(b.t.erHFxI),
      "aria-expanded": a,
      "aria-haspopup": "dialog",
      focusProps: {
        offset: {
          top: 4,
          bottom: 4,
          left: false,
          right: false
        }
      }
    }, p), {
      children: T
    }))
  })
});

function A(e) {
  let {
    channel: t,
    type: n
  } = e, a = i.useRef(null), o = (0, p.R)({
    channel: t,
    chatInputType: n
  }), s = (0, g.Z)({
    type: n
  });
  return o ? (0, r.jsxs)("div", {
    className: y.channelAppLauncher,
    children: [(0, r.jsx)(T, {
      type: n,
      ref: a
    }), s ? (0, r.jsx)(_.Z, {
      positionTargetRef: a,
      channel: t
    }) : null]
  }) : null
}
let C = Chunk647438.memo(A)