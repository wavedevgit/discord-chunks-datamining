/** Chunk was on web.js **/
/** chunk id: 670655, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk697744 = require("./697744.jsx"),
  Chunk795816 = require("./795816.js"),
  Chunk211401 = require("./211401.js"),
  Chunk989837 = require("./989837.js"),
  Chunk500049 = require("./500049.js"),
  Chunk598071 = require("./598071.js"),
  Chunk60809 = require("./60809.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk816695 = require("./816695.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = Chunk64700.forwardRef(function(e, t) {
  let {
    type: n,
    channelId: a
  } = e, E = (0, l.bG)([f.A], () => f.A.shouldShowPopup() && f.A.activeViewType() === n && f.A.activeChannelId() === a), {
    Component: b,
    events: v,
    play: A
  } = (0, c.c)(), I = i.useContext(_.Ay);
  i.useEffect(() => {
    let e = () => {
      v.onMouseEnter()
    };
    return I.on("command-sentinel-typed", e), () => {
      I.off("command-sentinel-typed", e)
    }
  }, [I, v]);
  let S = i.useCallback(() => {
      E ? d.k(p.Se.DISMISSED) : (d.R(p.s4.TEXT, n, true, a), u.LK()), A()
    }, [E, n, a, A]),
    T = (0, r.jsx)(b, {
      size: "refresh_sm",
      color: "currentColor"
    });
  return (0, r.jsx)("div", {
    className: o()(g.UD, h.KG),
    ref: t,
    children: (0, r.jsx)(s.DUT, O(y({
      tabIndex: 0,
      className: o()(g.x6, {
        [g.rK]: E
      }),
      onClick: S,
      "aria-label": m.intl.string(m.t.erHFxI),
      "aria-expanded": E,
      "aria-haspopup": "dialog",
      focusProps: {
        offset: {
          top: 4,
          bottom: 4,
          left: false,
          right: false
        }
      }
    }, v), {
      children: T
    }))
  })
});

function A(e) {
  let {
    type: t,
    channelId: n
  } = e;
  return (0, r.jsx)(v, {
    type: t,
    channelId: n
  })
}
let I = Chunk64700.memo(A)