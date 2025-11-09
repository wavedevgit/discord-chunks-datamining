/** Chunk was on web.js **/
/** chunk id: 775685, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
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
  Chunk562129 = require("./562129.js"),
  Chunk570220 = require("./570220.js"),
  Chunk61356 = require("./61356.js"),
  Chunk314734 = require("./314734.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk393620 = require("./393620.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = Chunk647438.forwardRef(function(e, t) {
  let {
    type: n
  } = e, a = (0, l.e7)([d.Z], () => d.Z.shouldShowPopup() && d.Z.activeViewType() === n), {
    Component: _,
    events: m,
    play: y
  } = (0, p.Z)("ChannelAppLauncherButton"), v = i.useContext(h.ZP);
  i.useEffect(() => {
    let e = () => {
      m.onMouseEnter()
    };
    return v.on("command-sentinel-typed", e), () => {
      v.off("command-sentinel-typed", e)
    }
  }, [v, m]);
  let S = i.useCallback(() => {
      a ? u.y(f.ti.DISMISSED) : (u._(f._b.TEXT, n), c.ux()), y()
    }, [a, n, y]),
    T = (0, r.jsx)(_, {
      size: "refresh_sm",
      color: "currentColor"
    });
  return (0, r.jsx)("div", {
    className: o()(b.buttonContainer, g.t4),
    ref: t,
    children: (0, r.jsx)(s.P3F, I(O({
      tabIndex: 0,
      className: o()(b.button, {
        [b.buttonActive]: a
      }),
      onClick: S,
      "aria-label": E.intl.string(E.t.erHFxI),
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
    }, m), {
      children: T
    }))
  })
});

function T(e) {
  let {
    channel: t,
    type: n
  } = e, a = i.useRef(null), o = (0, m.Z)({
    type: n
  });
  return (0, r.jsxs)("div", {
    className: b.channelAppLauncher,
    children: [(0, r.jsx)(S, {
      type: n,
      ref: a
    }), o ? (0, r.jsx)(_.Z, {
      positionTargetRef: a,
      channel: t
    }) : null]
  })
}
let A = Chunk647438.memo(T)