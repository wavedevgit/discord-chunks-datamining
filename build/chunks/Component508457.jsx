/** Chunk was on 49170 **/
/** chunk id: 508457, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk942381 = require("./942381.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk259788 = require("./259788.js"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = r[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      r.push.apply(r, a)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function b(e) {
  let t, r, {
      onSelect: b,
      onClose: f
    } = e,
    y = (t = l.Ay.useState(e => e.timeToLiveMs, o.x), (0, a.jsx)(i.aK1, {
      id: "opacity",
      "aria-haspopup": true,
      label: "Time To Live",
      control: (e, r) => (0, a.jsx)(i.i42, s(p({}, e), {
        ref: r,
        value: t,
        maxValue: l.nl,
        minValue: l.jc,
        renderValue: e => "".concat(e, "ms"),
        onChange: e => (0, l.nj)(e),
        "aria-label": "Time To Live"
      }))
    })),
    O = (r = l.Ay.useState(e => e.reappearTimeMs, o.x), (0, a.jsx)(i.aK1, {
      id: "opacity",
      "aria-haspopup": true,
      label: "Time To Reappear",
      control: (e, t) => (0, a.jsx)(i.i42, s(p({}, e), {
        ref: t,
        value: r,
        maxValue: l.J5,
        minValue: l.GI,
        renderValue: e => "".concat(e, "ms"),
        onChange: e => (0, l.g_)(e),
        "aria-label": "Time To Reappear"
      }))
    })),
    j = n.useRef(f);
  return n.useEffect(() => {
    j.current = f
  }), n.useEffect(() => () => {
    var e;
    return null == (e = j.current) ? true : e.call(j)
  }, []), (0, a.jsxs)(i.W1t, {
    "data-menu-migration-ready": true,
    navId: "overlay-click-zone-debug-context-menu",
    onClose: c.Z_,
    "aria-label": u.intl.string(u.t.tPfVWi),
    onSelect: b,
    children: [y, O]
  })
}