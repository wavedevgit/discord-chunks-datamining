/** Chunk was on 58652 **/
/** chunk id: 608523, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js"), require("./591487.js"), require("./727858.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk46054 = require("./46054.js"),
  Chunk861662 = require("./861662.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk322367 = require("./322367.js"),
  Chunk473169 = require("./473169.js");
let u = e => {
    let {
      data: {
        title: t,
        subtitle: n,
        description: u,
        placeholder: m,
        rows: p,
        character_limit: b,
        pattern: x
      },
      onChange: g,
      initialText: _,
      isRequired: h
    } = e, v = r.useMemo(() => {
      var e, t;
      return a.A.reactParserFor((e = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
              value: l,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = l
          })
        }
        return e
      }({}, a.A.defaultRules), t = t = {
        link: s.B
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
      }), e))
    }, []), [f, j] = r.useState(""), [A, y] = r.useState(null);
    r.useEffect(() => {
      var e;
      j(null != (e = null == _ ? true : _.value) ? e : "")
    }, [_]);
    let O = r.useCallback(e => {
      let t = null != x ? new RegExp(x) : null;
      null == t || t.test(e) ? null != e && (y(null), j(e), g({
        value: e,
        isValid: true
      })) : (y(o.intl.string(o.t["24xrGb"])), g({
        value: e,
        isValid: false
      }))
    }, [g, x]);
    return (0, l.jsxs)("div", {
      className: c.QB,
      children: [(0, l.jsxs)("div", {
        className: c.QB,
        children: [null != t && (0, l.jsxs)(i.Text, {
          variant: "text-sm/bold",
          children: [t, h && (0, l.jsx)("span", {
            className: d.m,
            children: "*"
          })]
        }), null != u && (0, l.jsx)("div", {
          className: c.a5,
          children: (0, l.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: u
          })
        })]
      }), 1 === p ? (0, l.jsx)(i.ksK, {
        maxLength: b,
        onChange: O,
        value: f,
        error: A,
        placeholder: m,
        autoFocus: true
      }) : (0, l.jsx)(i.fs1, {
        maxLength: b,
        onChange: O,
        value: f,
        error: A,
        rows: p,
        placeholder: m,
        autoFocus: true
      }), null != n && (0, l.jsx)("div", {
        className: c.a5,
        children: (0, l.jsx)(i.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: v(n)
        })
      })]
    })
  },
  m = e => {
    let {
      elements: t,
      onChange: n,
      state: r
    } = e, i = t.map(e => {
      var t;
      let i = e.name;
      return (0, l.jsx)(u, {
        data: e.data,
        onChange: e => n(i, e.value, e.isValid),
        initialText: null != (t = null == r ? true : r[i]) ? t : true,
        isRequired: e.should_submit_data
      }, i)
    });
    return (0, l.jsx)("div", {
      children: i
    })
  }