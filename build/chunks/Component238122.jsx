/** Chunk was on 61168 **/
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
        character_limit: f,
        pattern: g
      },
      onChange: b,
      initialText: x,
      isRequired: h
    } = e, v = i.useRef(l.Z.reactParserFor((t = function(e) {
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
    }({}, l.Z.defaultRules), n = n = {
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
      y(null != (e = null == x ? true : x.value) ? e : "")
    }, [x]);
    let I = i.useCallback(e => {
      let t = null != g ? new RegExp(g) : null;
      null == t || t.test(e) ? null != e && (C(null), y(e), b({
        value: e,
        isValid: true
      })) : (C(s.intl.string(s.t["24xrGR"])), b({
        value: e,
        isValid: false
      }))
    }, [b, g]);
    return (0, r.jsxs)("div", {
      className: d.marginBottom8,
      children: [null != u && (0, r.jsx)("div", {
        className: d.marginBottom8,
        children: (0, r.jsxs)(a.Text, {
          variant: "text-sm/bold",
          children: [u, h && (0, r.jsx)("span", {
            className: c.required,
            children: "*"
          })]
        })
      }), (0, r.jsx)(a.Kx8, {
        maxLength: f,
        onChange: I,
        value: j,
        error: O,
        rows: p,
        placeholder: m,
        autoFocus: true
      }), null != _ && (0, r.jsx)("div", {
        children: (0, r.jsx)(a.Text, {
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
    } = e, a = t.map(e => {
      var t;
      let a = e.name;
      return (0, r.jsx)(u, {
        data: e.data,
        onChange: e => n(a, e.value, e.isValid),
        initialText: null != (t = null == i ? true : i[a]) ? t : true,
        isRequired: e.should_submit_data
      }, a)
    });
    return (0, r.jsx)("div", {
      children: a
    })
  }