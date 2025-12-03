/** Chunk was on 54844 **/
/** chunk id: 238122, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./413496.js"), require("./433524.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk454585 = require("./454585.js"),
  Chunk273744 = require("./273744.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk124252 = require("./124252.js"),
  Chunk197571 = require("./197571.js");
let u = e => {
    var t, n;
    let {
      data: {
        title: u,
        subtitle: m,
        placeholder: p,
        rows: g,
        character_limit: _,
        pattern: x
      },
      onChange: h,
      initialText: b,
      isRequired: f
    } = e, v = l.useRef(a.Z.reactParserFor((t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, a.Z.defaultRules), n = n = {
      link: s.s
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))), [j, y] = l.useState(""), [Z, O] = l.useState(null);
    l.useEffect(() => {
      var e;
      y(null != (e = null == b ? true : b.value) ? e : "")
    }, [b]);
    let I = l.useCallback(e => {
      let t = null != x ? new RegExp(x) : null;
      null == t || t.test(e) ? null != e && (O(null), y(e), h({
        value: e,
        isValid: true
      })) : (O(o.intl.string(o.t["24xrGb"])), h({
        value: e,
        isValid: false
      }))
    }, [h, x]);
    return (0, r.jsxs)("div", {
      className: c.marginBottom8,
      children: [null != u && (0, r.jsx)("div", {
        className: c.marginBottom8,
        children: (0, r.jsxs)(i.Text, {
          variant: "text-sm/bold",
          children: [u, f && (0, r.jsx)("span", {
            className: d.required,
            children: "*"
          })]
        })
      }), (0, r.jsx)(i.Kx8, {
        maxLength: _,
        onChange: I,
        value: j,
        error: Z,
        rows: g,
        placeholder: p,
        autoFocus: true
      }), null != m && (0, r.jsx)("div", {
        children: (0, r.jsx)(i.Text, {
          variant: "text-sm/normal",
          children: v.current(m)
        })
      })]
    })
  },
  m = e => {
    let {
      elements: t,
      onChange: n,
      state: l
    } = e, i = t.map(e => {
      var t;
      let i = e.name;
      return (0, r.jsx)(u, {
        data: e.data,
        onChange: e => n(i, e.value, e.isValid),
        initialText: null != (t = null == l ? true : l[i]) ? t : true,
        isRequired: e.should_submit_data
      }, i)
    });
    return (0, r.jsx)("div", {
      children: i
    })
  }