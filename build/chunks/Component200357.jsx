/** Chunk was on web.js **/
/** chunk id: 200357, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./35282.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk217986 = require("./217986.js"),
  Chunk481060 = require("./481060.js"),
  Chunk277139 = require("./277139.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk76359 = require("./76359.js");

function f(e) {
  return String.fromCodePoint(...e.toUpperCase().split("").map(e => 127397 + e.charCodeAt(0)))
}
let p = function(e) {
  let {
    className: t,
    submitting: n,
    errorMessage: a,
    onChange: p
  } = e, _ = i.useRef(null), {
    countriesMap: h,
    countryCodeOptions: m
  } = (0, c.b)(), [g, E] = i.useState(() => {
    let e = s.Z.find(e => "United States" === e.name);
    return "".concat(e.alpha2, "-").concat(e.phoneCountryCode)
  }), [b, y] = i.useState(() => {
    let [e, t] = s.Z.find(e => "United States" === e.name).phoneCountryCode.split(" ");
    return null != t ? t : ""
  }), O = i.useCallback((e, t) => {
    var n;
    let r = null == (n = h.get(e)) ? true : n.code;
    null == p || p("".concat(r).concat(t))
  }, [h, p]), v = i.useCallback(e => {
    var t;
    E(e), null == (t = _.current) || t.focus(), O(e, b)
  }, [b, O]), S = i.useCallback(e => {
    y(e), O(g, e)
  }, [g, O]), I = h.get(g);
  return (0, r.jsx)("fieldset", {
    children: (0, r.jsxs)("div", {
      className: o()(d.phoneField, t),
      children: [(0, r.jsx)(l.gNt, {
        label: u.intl.string(u.t["k+bvrB"]),
        children: (0, r.jsx)(l.VcW, {
          selectionMode: "single",
          value: null != g ? g : true,
          onSelectionChange: v,
          options: m,
          formatOption: e => {
            let {
              value: t,
              label: n,
              alpha2: r
            } = e;
            return {
              id: t,
              value: t,
              label: n,
              leading: f(null != r ? r : "")
            }
          },
          disabled: n
        })
      }), (0, r.jsx)(l.oil, {
        label: u.intl.string(u.t["64bX0M"]),
        error: a,
        leading: null == I ? true : I.code,
        type: "tel",
        onChange: S,
        autoFocus: true,
        inputRef: _,
        disabled: n,
        value: b
      })]
    })
  })
}