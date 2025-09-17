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
    onChange: p
  } = e, h = i.useRef(null), {
    countriesMap: m,
    countryCodeOptions: g
  } = (0, u.b)(), [E, b] = i.useState(() => {
    let e = s.Z.find(e => "United States" === e.name);
    return "".concat(e.alpha2, "-").concat(e.phoneCountryCode)
  }), [y, O] = i.useState(() => {
    let [e, t] = s.Z.find(e => "United States" === e.name).phoneCountryCode.split(" ");
    return null != t ? t : ""
  }), v = i.useCallback(e => {
    var t, n;
    if (null != e) return _(null != (n = null == (t = m.get(e.value)) ? true : t.alpha2) ? n : "")
  }, [m]), I = i.useCallback((e, t) => {
    var n;
    let r = null == (n = m.get(e)) ? true : n.code;
    null == p || p("".concat(r).concat(t))
  }, [m, p]), T = i.useCallback(e => {
    var t;
    b(e), null == (t = h.current) || t.focus(), I(e, y)
  }, [y, I]), S = i.useCallback(e => {
    O(e), I(E, e)
  }, [E, I]), A = m.get(E);
  return (0, r.jsx)("fieldset", {
    children: (0, r.jsxs)("div", {
      className: o()(f.phoneField, t),
      children: [(0, r.jsx)(l.N, {
        label: d.intl.string(d.t["k+bvrK"]),
        children: (0, r.jsx)(c.VcW, {
          value: E,
          onChange: T,
          renderOptionPrefix: v,
          options: g,
          popoutWidth: 280,
          isDisabled: n
        })
      }), (0, r.jsx)(c.oil, {
        label: d.intl.string(d.t["64bX0N"]),
        error: a,
        leading: null == A ? true : A.code,
        type: "tel",
        onChange: S,
        autoFocus: true,
        inputRef: h,
        disabled: n,
        value: y
      })]
    })
  })
}