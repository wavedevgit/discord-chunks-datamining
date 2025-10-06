/** Chunk was on 38813 **/
/** chunk id: 541501, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk574583 = require("./574583.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk667142 = require("./667142.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function f(e) {
  let {
    onSelect: t,
    onClose: r
  } = e, f = function() {
    let e = l.ZP.useState(e => e.timeToLiveMs, o.X);
    return (0, n.jsx)(c.II_, {
      id: "opacity",
      "aria-haspopup": true,
      label: "Time To Live",
      control: (t, r) => (0, n.jsx)(c._wy, s(p({}, t), {
        ref: r,
        value: e,
        maxValue: l.VX,
        minValue: l.ih,
        renderValue: e => "".concat(e, "ms"),
        onChange: e => (0, l.S_)(e),
        "aria-label": "Time To Live"
      }))
    })
  }(), b = function() {
    let e = l.ZP.useState(e => e.reappearTimeMs, o.X);
    return (0, n.jsx)(c.II_, {
      id: "opacity",
      "aria-haspopup": true,
      label: "Time To Reappear",
      control: (t, r) => (0, n.jsx)(c._wy, s(p({}, t), {
        ref: r,
        value: e,
        maxValue: l.V5,
        minValue: l.xc,
        renderValue: e => "".concat(e, "ms"),
        onChange: e => (0, l.Df)(e),
        "aria-label": "Time To Reappear"
      }))
    })
  }(), y = a.useRef(r);
  return a.useEffect(() => {
    y.current = r
  }), a.useEffect(() => () => {
    var e;
    return null == (e = y.current) ? true : e.call(y)
  }, []), (0, n.jsxs)(c.v2r, {
    navId: "overlay-click-zone-debug-context-menu",
    onClose: i.Zy,
    "aria-label": u.intl.string(u.t.tPfVWl),
    onSelect: t,
    children: [f, b]
  })
}