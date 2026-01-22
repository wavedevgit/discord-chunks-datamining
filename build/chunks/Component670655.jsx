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

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = Chunk64700.forwardRef(function(e, t) {
  let {
    type: n,
    channelId: a
  } = e, {
    tooltipsWithKeybinds: y
  } = h.C.useConfig({
    location: "ChannelAppLauncherButton"
  }), A = (0, l.bG)([p.A], () => p.A.shouldShowPopup() && p.A.activeViewType() === n && p.A.activeChannelId() === a), {
    Component: S,
    events: I,
    play: T
  } = (0, c.c)(), C = i.useContext(m.Ay);
  i.useEffect(() => {
    let e = () => {
      I.onMouseEnter()
    };
    return C.on("command-sentinel-typed", e), () => {
      C.off("command-sentinel-typed", e)
    }
  }, [C, I]);
  let N = i.useCallback(() => {
      A ? f.k(_.Se.DISMISSED) : (f.R(_.s4.TEXT, n, true, a), d.LK()), T()
    }, [A, n, a, T]),
    R = (0, r.jsx)(S, {
      size: "refresh_sm",
      color: "currentColor"
    });
  return (0, r.jsx)("div", {
    className: s()(b.UD, g.KG),
    ref: t,
    children: (0, r.jsx)(u.m_, {
      text: E.intl.string(E.t.dHDxOF),
      shouldShow: y,
      children: (0, r.jsx)(o.DUT, v(O({
        tabIndex: 0,
        className: s()(b.x6, {
          [b.rK]: A
        }),
        onClick: N,
        "aria-label": E.intl.string(E.t.erHFxI),
        "aria-expanded": A,
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
        children: R
      }))
    })
  })
});

function I(e) {
  let {
    type: t,
    channelId: n
  } = e;
  return (0, r.jsx)(S, {
    type: t,
    channelId: n
  })
}
let T = Chunk64700.memo(I)