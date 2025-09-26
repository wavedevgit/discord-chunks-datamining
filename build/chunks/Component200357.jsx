/** Chunk was on web.js **/
/** chunk id: 200357, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./35282.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk217986 = require("./217986.js"),
  Chunk886025 = require("./886025.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk277139 = require("./277139.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk984392 = require("./984392.js");

function _(e) {
  return String.fromCodePoint(...e.toUpperCase().split("").map(e => 127397 + e.charCodeAt(0)))
}
let p = function(e) {
  let {
    className: t,
    submitting: n,
    errorMessage: a,
    onChange: p,
    layerContext: h
  } = e, m = i.useRef(null), {
    countriesMap: g,
    countryCodeOptions: E
  } = (0, u.b)(), [b, y] = i.useState(() => {
    let e = s.Z.find(e => "United States" === e.name);
    return "".concat(e.alpha2, "-").concat(e.phoneCountryCode)
  }), [O, v] = i.useState(() => {
    let [e, t] = s.Z.find(e => "United States" === e.name).phoneCountryCode.split(" ");
    return null != t ? t : ""
  }), I = i.useCallback(e => {
    var t, n;
    if (null != e) return _(null != (n = null == (t = g.get(e.value)) ? true : t.alpha2) ? n : "")
  }, [g]), T = i.useCallback((e, t) => {
    var n;
    let r = null == (n = g.get(e)) ? true : n.code;
    null == p || p("".concat(r).concat(t))
  }, [g, p]), S = i.useCallback(e => {
    var t;
    y(e), null == (t = m.current) || t.focus(), T(e, O)
  }, [O, T]), A = i.useCallback(e => {
    v(e), T(b, e)
  }, [b, T]), C = g.get(b);
  return (0, r.jsx)("fieldset", {
    children: (0, r.jsxs)("div", {
      className: o()(f.phoneField, t),
      children: [(0, r.jsx)(l.N, {
        label: d.intl.string(d.t["k+bvrK"]),
        children: (0, r.jsx)(c.VcW, {
          value: b,
          onChange: S,
          renderOptionPrefix: I,
          options: E,
          popoutWidth: 280,
          isDisabled: n,
          popoutLayerContext: h
        })
      }), (0, r.jsx)(c.oil, {
        label: d.intl.string(d.t["64bX0N"]),
        error: a,
        leading: null == C ? true : C.code,
        type: "tel",
        onChange: A,
        autoFocus: true,
        inputRef: m,
        disabled: n,
        value: O
      })]
    })
  })
}