/** Chunk was on web.js **/
/** chunk id: 670655, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk697744 = require("./697744.jsx"),
  Chunk435371 = require("./435371.js"),
  Chunk795816 = require("./795816.js"),
  Chunk211401 = require("./211401.js"),
  Chunk989837 = require("./989837.js"),
  Chunk500049 = require("./500049.js"),
  Chunk184761 = require("./184761.js"),
  Chunk598071 = require("./598071.js"),
  Chunk60809 = require("./60809.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk816695 = require("./816695.js");

function b(e, t, n) {
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
      b(e, t, n[t])
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

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = Chunk64700.forwardRef(function(e, t) {
  let {
    type: n,
    channelId: a
  } = e, {
    tooltipsWithKeybinds: b
  } = h.C.useConfig({
    location: "ChannelAppLauncherButton"
  }), v = (0, l.bG)([p.A], () => p.A.shouldShowPopup() && p.A.activeViewType() === n && p.A.activeChannelId() === a), {
    Component: I,
    events: S,
    play: T
  } = (0, c.c)(), C = i.useContext(m.Ay);
  i.useEffect(() => {
    let e = () => {
      S.onMouseEnter()
    };
    return C.on("command-sentinel-typed", e), () => {
      C.off("command-sentinel-typed", e)
    }
  }, [C, S]);
  let N = i.useCallback(() => {
      v ? f.k(_.Se.DISMISSED) : (f.R(_.s4.TEXT, n, true, a), d.LK()), T()
    }, [v, n, a, T]),
    R = (0, r.jsx)(I, {
      size: "refresh_sm",
      color: "currentColor"
    });
  return (0, r.jsx)("div", {
    className: s()(y.UD, g.KG),
    ref: t,
    children: (0, r.jsx)(u.m_, {
      text: E.intl.string(E.t.dHDxOF),
      shouldShow: b,
      children: (0, r.jsx)(o.DUT, A(O({
        tabIndex: 0,
        className: s()(y.x6, {
          [y.rK]: v
        }),
        onClick: N,
        "aria-label": E.intl.string(E.t.erHFxI),
        "aria-expanded": v,
        "aria-haspopup": "dialog",
        focusProps: {
          offset: {
            top: 4,
            bottom: 4,
            left: false,
            right: false
          }
        }
      }, S), {
        children: R
      }))
    })
  })
});

function S(e) {
  let {
    type: t,
    channelId: n
  } = e;
  return (0, r.jsx)(I, {
    type: t,
    channelId: n
  })
}
let T = Chunk64700.memo(S)