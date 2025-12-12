/** Chunk was on web.js **/
/** chunk id: 200357, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./35282.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk217986 = require("./217986.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk277139 = require("./277139.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk76359 = require("./76359.js");

function p(e) {
  return String.fromCodePoint(...e.toUpperCase().split("").map(e => 127397 + e.charCodeAt(0)))
}
let _ = function(e) {
  let {
    className: t,
    submitting: n,
    errorMessage: a,
    onChange: _,
    layerContext: m
  } = e, h = i.useRef(null), {
    countriesMap: g,
    countryCodeOptions: E
  } = (0, u.b)(), [b, y] = i.useState(() => {
    let e = s.Z.find(e => "United States" === e.name);
    return "".concat(e.alpha2, "-").concat(e.phoneCountryCode)
  }), [O, v] = i.useState(() => {
    let [e, t] = s.Z.find(e => "United States" === e.name).phoneCountryCode.split(" ");
    return null != t ? t : ""
  }), S = i.useCallback(e => {
    var t, n;
    if (null != e) return p(null != (n = null == (t = g.get(e.value)) ? true : t.alpha2) ? n : "")
  }, [g]), I = i.useCallback((e, t) => {
    var n;
    let r = null == (n = g.get(e)) ? true : n.code;
    null == _ || _("".concat(r).concat(t))
  }, [g, _]), T = i.useCallback(e => {
    var t;
    y(e), null == (t = h.current) || t.focus(), I(e, O)
  }, [O, I]), C = i.useCallback(e => {
    v(e), I(b, e)
  }, [b, I]), A = g.get(b);
  return (0, r.jsx)("fieldset", {
    children: (0, r.jsxs)("div", {
      className: o()(f.phoneField, t),
      children: [(0, r.jsx)(c.gNt, {
        label: d.intl.string(d.t["k+bvrB"]),
        children: (0, r.jsx)(l.d, {
          value: b,
          onChange: T,
          renderOptionPrefix: S,
          options: E,
          popoutWidth: 280,
          isDisabled: n,
          popoutLayerContext: m
        })
      }), (0, r.jsx)(c.oil, {
        label: d.intl.string(d.t["64bX0M"]),
        error: a,
        leading: null == A ? true : A.code,
        type: "tel",
        onChange: C,
        autoFocus: true,
        inputRef: h,
        disabled: n,
        value: O
      })]
    })
  })
}