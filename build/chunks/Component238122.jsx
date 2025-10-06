/** Chunk was on 31417 **/
/** chunk id: 238122, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./413496.js"), require("./433524.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
        subtitle: _,
        placeholder: m,
        rows: p,
        character_limit: g,
        pattern: f
      },
      onChange: h,
      initialText: b,
      isRequired: x
    } = e, v = i.useRef(a.Z.reactParserFor((t = function(e) {
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
      link: o.s
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))), [j, y] = i.useState(""), [O, C] = i.useState(null);
    i.useEffect(() => {
      var e;
      y(null != (e = null == b ? true : b.value) ? e : "")
    }, [b]);
    let I = i.useCallback(e => {
      let t = null != f ? new RegExp(f) : null;
      null == t || t.test(e) ? null != e && (C(null), y(e), h({
        value: e,
        isValid: true
      })) : (C(s.intl.string(s.t["24xrGR"])), h({
        value: e,
        isValid: false
      }))
    }, [h, f]);
    return (0, r.jsxs)("div", {
      className: d.marginBottom8,
      children: [null != u && (0, r.jsx)("div", {
        className: d.marginBottom8,
        children: (0, r.jsxs)(l.Text, {
          variant: "text-sm/bold",
          children: [u, x && (0, r.jsx)("span", {
            className: c.required,
            children: "*"
          })]
        })
      }), (0, r.jsx)(l.Kx8, {
        maxLength: g,
        onChange: I,
        value: j,
        error: O,
        rows: p,
        placeholder: m,
        autoFocus: true
      }), null != _ && (0, r.jsx)("div", {
        children: (0, r.jsx)(l.Text, {
          variant: "text-sm/normal",
          children: v.current(_)
        })
      })]
    })
  },
  _ = e => {
    let {
      elements: t,
      onChange: n,
      state: i
    } = e, l = t.map(e => {
      var t;
      let l = e.name;
      return (0, r.jsx)(u, {
        data: e.data,
        onChange: e => n(l, e.value, e.isValid),
        initialText: null != (t = null == i ? true : i[l]) ? t : true,
        isRequired: e.should_submit_data
      }, l)
    });
    return (0, r.jsx)("div", {
      children: l
    })
  }