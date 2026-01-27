/** Chunk was on 84704 **/
/** chunk id: 457570, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./747238.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk96337 = require("./96337.js"),
  Chunk397927 = require("./397927.js"),
  Chunk333074 = require("./333074.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk250640 = require("./250640.js");
let d = function(e) {
  let {
    className: t,
    submitting: n,
    errorMessage: a,
    onChange: d
  } = e, h = s.useRef(null), {
    countriesMap: R,
    countryCodeOptions: I
  } = (0, u.E)(), [p, _] = s.useState(() => {
    let e = o.A.find(e => "United States" === e.name);
    return "".concat(e.alpha2, "-").concat(e.phoneCountryCode)
  }), [f, g] = s.useState(() => {
    let [e, t] = o.A.find(e => "United States" === e.name).phoneCountryCode.split(" ");
    return null != t ? t : ""
  }), C = s.useCallback((e, t) => {
    var n;
    let l = null == (n = R.get(e)) ? true : n.code;
    null == d || d("".concat(l).concat(t))
  }, [R, d]), m = s.useCallback(e => {
    var t;
    _(e), null == (t = h.current) || t.focus(), C(e, f)
  }, [f, C]), b = s.useCallback(e => {
    g(e), C(p, e)
  }, [p, C]), A = R.get(p);
  return (0, l.jsx)("fieldset", {
    children: (0, l.jsxs)("div", {
      className: i()(c.B, t),
      children: [(0, l.jsx)(r.D0$, {
        label: E.intl.string(E.t["k+bvrB"]),
        children: (0, l.jsx)(r.ZiE, {
          selectionMode: "single",
          value: null != p ? p : true,
          onSelectionChange: m,
          options: I,
          formatOption: e => {
            let {
              value: t,
              label: n,
              alpha2: l
            } = e;
            return {
              id: t,
              value: t,
              label: n,
              leading: String.fromCodePoint(...(null != l ? l : "").toUpperCase().split("").map(e => 127397 + e.charCodeAt(0)))
            }
          },
          disabled: n
        })
      }), (0, l.jsx)(r.ksK, {
        label: E.intl.string(E.t["64bX0M"]),
        error: a,
        leading: null == A ? true : A.code,
        type: "tel",
        onChange: b,
        autoFocus: true,
        inputRef: h,
        disabled: n,
        value: f
      })]
    })
  })
}