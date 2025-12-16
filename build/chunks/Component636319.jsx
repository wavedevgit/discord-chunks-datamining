/** Chunk was on 54844 **/
/** chunk id: 636319, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk454585 = require("./454585.js"),
  Chunk273744 = require("./273744.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk647889 = require("./647889.js"),
  Chunk478411 = require("./478411.js");
let u = ["cdn.discord.com", "cdn.discordapp.com", "media.discordapp.net"],
  m = /^https:\/\/(?:ptb\.|canary\.)?discord(?:app)?\.com\/channels\/(?:@me|\d+)\/\d+\/\d+$/;

function b(e) {
  try {
    return new URL(e), true
  } catch (e) {
    returnfalse
  }
}

function p(e) {
  return "" !== e && !!b(e) && ! function(e) {
    try {
      let t = new URL(e);
      return u.some(e => t.hostname === e)
    } catch (e) {
      returnfalse
    }
  }(e)
}
let g = e => {
    let {
      data: {
        title: t,
        subtitle: n,
        placeholder: u,
        message_link_title: g,
        message_link_placeholder: f
      },
      onChange: x,
      initialContentUrl: h,
      initialMessageUrl: v,
      isRequired: j
    } = e, _ = l.useMemo(() => {
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
    }, []), [y, O] = l.useState(""), [Z, C] = l.useState(""), [I, S] = l.useState(null), [N, P] = l.useState(null), [T, k] = l.useState(false);
    l.useEffect(() => {
      var e, t;
      O(null != (e = null == h ? true : h.value) ? e : ""), C(null != (t = null == v ? true : v.value) ? t : ""), (null == h ? true : h.value) != null && "" !== h.value && k(p(h.value))
    }, [h, v]);
    let E = l.useCallback(e => {
        if (O(e), "" === e) {
          S(null), k(false), C(""), P(null), x({
            value: e,
            isValid: false
          });
          return
        }
        if (!b(e)) {
          S(o.intl.string(o.t["24xrGb"])), k(false), C(""), P(null), x({
            value: e,
            isValid: false
          });
          return
        }
        let t = p(e);
        k(t), S(null), t ? "" === Z ? x({
          value: e,
          isValid: false
        }) : m.test(Z) ? x({
          value: e,
          isValid: true
        }, {
          value: Z,
          isValid: true
        }) : x({
          value: e,
          isValid: false
        }, {
          value: Z,
          isValid: false
        }) : (C(""), P(null), x({
          value: e,
          isValid: true
        }))
      }, [x, Z]),
      w = l.useCallback(e => {
        if (C(e), "" === e || !m.test(e)) {
          P(o.intl.string(o.t["24xrGb"])), x({
            value: y,
            isValid: false
          }, {
            value: e,
            isValid: false
          });
          return
        }
        P(null), x({
          value: y,
          isValid: true
        }, {
          value: e,
          isValid: true
        })
      }, [x, y]);
    return (0, r.jsxs)("div", {
      children: [(0, r.jsxs)(i.Kqy, {
        gap: 16,
        children: [(0, r.jsxs)("div", {
          className: d.marginBottom8,
          children: [null != t && (0, r.jsx)("div", {
            className: d.marginBottom8,
            children: (0, r.jsxs)(i.Text, {
              variant: "text-sm/bold",
              children: [t, j && (0, r.jsx)("span", {
                className: c.required,
                children: "*"
              })]
            })
          }), (0, r.jsx)(i.oil, {
            onChange: E,
            value: y,
            error: I,
            placeholder: u,
            autoFocus: true
          })]
        }), T && null != g && (0, r.jsxs)("div", {
          className: d.marginBottom8,
          children: [(0, r.jsx)("div", {
            className: d.marginBottom8,
            children: (0, r.jsxs)(i.Text, {
              variant: "text-sm/bold",
              children: [g, j && (0, r.jsx)("span", {
                className: c.required,
                children: "*"
              })]
            })
          }), (0, r.jsx)(i.oil, {
            onChange: w,
            value: Z,
            error: N,
            placeholder: f
          })]
        })]
      }), null != n && (0, r.jsx)(i.Text, {
        variant: "text-xs/normal",
        children: _(n)
      })]
    })
  },
  f = e => {
    let {
      element: t,
      onChange: n,
      state: i
    } = e, a = t.name, s = "".concat(t.name, "_message_link"), o = l.useCallback((e, t) => {
      null != t ? n(a, e.value, e.isValid && t.isValid, s, t.value) : n(a, e.value, e.isValid, s, true)
    }, [n, a, s]);
    return (0, r.jsx)(g, {
      data: t.data,
      onChange: o,
      initialContentUrl: null == i ? true : i[a],
      initialMessageUrl: null == i ? true : i[s],
      isRequired: t.should_submit_data
    })
  }