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
  Chunk647889 = require("./647889.js"),
  Chunk478411 = require("./478411.js");
let u = e => {
    let {
      data: {
        title: t,
        subtitle: n,
        placeholder: u,
        rows: m,
        character_limit: b,
        pattern: p
      },
      onChange: g,
      initialText: f,
      isRequired: x
    } = e, h = l.useMemo(() => {
      var e, t;
      return a.Z.reactParserFor((e = function(e) {
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
      }({}, a.Z.defaultRules), t = t = {
        link: s.s
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
      }), e))
    }, []), [v, _] = l.useState(""), [j, y] = l.useState(null);
    l.useEffect(() => {
      var e;
      _(null != (e = null == f ? true : f.value) ? e : "")
    }, [f]);
    let O = l.useCallback(e => {
      let t = null != p ? new RegExp(p) : null;
      null == t || t.test(e) ? null != e && (y(null), _(e), g({
        value: e,
        isValid: true
      })) : (y(o.intl.string(o.t["24xrGb"])), g({
        value: e,
        isValid: false
      }))
    }, [g, p]);
    return (0, r.jsxs)("div", {
      className: c.marginBottom8,
      children: [null != t && (0, r.jsx)("div", {
        className: c.marginBottom8,
        children: (0, r.jsxs)(i.Text, {
          variant: "text-sm/bold",
          children: [t, x && (0, r.jsx)("span", {
            className: d.required,
            children: "*"
          })]
        })
      }), 1 === m ? (0, r.jsx)(i.oil, {
        maxLength: b,
        onChange: O,
        value: v,
        error: j,
        placeholder: u,
        autoFocus: true
      }) : (0, r.jsx)(i.Kx8, {
        maxLength: b,
        onChange: O,
        value: v,
        error: j,
        rows: m,
        placeholder: u,
        autoFocus: true
      }), null != n && (0, r.jsx)("div", {
        className: c.marginTop4,
        children: (0, r.jsx)(i.Text, {
          variant: "text-sm/normal",
          children: h(n)
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