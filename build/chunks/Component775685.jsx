/** Chunk was on web.js **/
/** chunk id: 775685, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk749280 = require("./749280.jsx"),
  Chunk681715 = require("./681715.js"),
  Chunk566620 = require("./566620.js"),
  Chunk499254 = require("./499254.js"),
  Chunk541099 = require("./541099.js"),
  Chunk827498 = require("./827498.js"),
  Chunk713913 = require("./713913.js"),
  Chunk570220 = require("./570220.js"),
  Chunk314734 = require("./314734.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk124886 = require("./124886.js");

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

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = Chunk473749.forwardRef(function(e, t) {
  let {
    type: n
  } = e, {
    tooltipsWithKeybinds: a
  } = m.n.useConfig({
    location: "ChannelAppLauncherButton"
  }), y = (0, l.e7)([p.Z], () => p.Z.shouldShowPopup() && p.Z.activeViewType() === n), {
    Component: v,
    events: I,
    play: T
  } = (0, c.w)(), A = i.useContext(h.ZP);
  i.useEffect(() => {
    let e = () => {
      I.onMouseEnter()
    };
    return A.on("command-sentinel-typed", e), () => {
      A.off("command-sentinel-typed", e)
    }
  }, [A, I]);
  let C = i.useCallback(() => {
      y ? f.y(_.ti.DISMISSED) : (f._(_._b.TEXT, n), d.ux()), T()
    }, [y, n, T]),
    N = (0, r.jsx)(v, {
      size: "refresh_sm",
      color: "currentColor"
    });
  return (0, r.jsx)("div", {
    className: o()(b.buttonContainer, g.t4),
    ref: t,
    children: (0, r.jsx)(u.u, {
      text: E.intl.string(E.t.dHDxOF),
      shouldShow: a,
      children: (0, r.jsx)(s.P3F, S(O({
        tabIndex: 0,
        className: o()(b.button, {
          [b.buttonActive]: y
        }),
        onClick: C,
        "aria-label": E.intl.string(E.t.erHFxI),
        "aria-expanded": y,
        "aria-haspopup": "dialog",
        focusProps: {
          offset: {
            top: 4,
            bottom: 4,
            left: false,
            right: false
          }
        }
      }, I), {
        children: N
      }))
    })
  })
});

function T(e) {
  let {
    type: t
  } = e;
  return (0, r.jsx)(I, {
    type: t
  })
}
let A = Chunk473749.memo(T)