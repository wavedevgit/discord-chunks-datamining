/** Chunk was on 58652 **/
/** chunk id: 905074, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk46054 = require("./46054.js"),
  Chunk861662 = require("./861662.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk322367 = require("./322367.js"),
  Chunk473169 = require("./473169.js");
let u = ["cdn.discord.com", "cdn.discordapp.com", "media.discordapp.net"],
  m = /^https:\/\/(?:ptb\.|canary\.)?discord(?:app)?\.com\/channels\/(?:@me|\d+)\/\d+\/\d+$/;

function p(e) {
  try {
    return new URL(e), true
  } catch (e) {
    returnfalse
  }
}

function b(e) {
  return "" !== e && !!p(e) && ! function(e) {
    try {
      let t = new URL(e);
      return u.some(e => t.hostname === e)
    } catch (e) {
      returnfalse
    }
  }(e)
}
let x = e => {
    let {
      data: {
        title: t,
        subtitle: n,
        placeholder: u,
        message_link_title: x,
        message_link_placeholder: g
      },
      onChange: _,
      initialContentUrl: h,
      initialMessageUrl: v,
      isRequired: f
    } = e, j = r.useMemo(() => {
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
    }, []), [A, y] = r.useState(""), [O, S] = r.useState(""), [T, N] = r.useState(null), [k, w] = r.useState(null), [C, P] = r.useState(false);
    r.useEffect(() => {
      var e, t;
      y(null != (e = null == h ? true : h.value) ? e : ""), S(null != (t = null == v ? true : v.value) ? t : ""), (null == h ? true : h.value) != null && "" !== h.value && P(b(h.value))
    }, [h, v]);
    let I = r.useCallback(e => {
        if (y(e), "" === e) {
          N(null), P(false), S(""), w(null), _({
            value: e,
            isValid: false
          });
          return
        }
        if (!p(e)) {
          N(o.intl.string(o.t["24xrGb"])), P(false), S(""), w(null), _({
            value: e,
            isValid: false
          });
          return
        }
        let t = b(e);
        P(t), N(null), t ? "" === O ? _({
          value: e,
          isValid: false
        }) : m.test(O) ? _({
          value: e,
          isValid: true
        }, {
          value: O,
          isValid: true
        }) : _({
          value: e,
          isValid: false
        }, {
          value: O,
          isValid: false
        }) : (S(""), w(null), _({
          value: e,
          isValid: true
        }))
      }, [_, O]),
      E = r.useCallback(e => {
        if (S(e), "" === e || !m.test(e)) {
          w(o.intl.string(o.t["24xrGb"])), _({
            value: A,
            isValid: false
          }, {
            value: e,
            isValid: false
          });
          return
        }
        w(null), _({
          value: A,
          isValid: true
        }, {
          value: e,
          isValid: true
        })
      }, [_, A]);
    return (0, l.jsxs)("div", {
      children: [(0, l.jsxs)(i.BJc, {
        gap: 16,
        children: [(0, l.jsxs)("div", {
          className: c.QB,
          children: [null != t && (0, l.jsx)("div", {
            className: c.QB,
            children: (0, l.jsxs)(i.Text, {
              variant: "text-sm/bold",
              children: [t, f && (0, l.jsx)("span", {
                className: d.m,
                children: "*"
              })]
            })
          }), (0, l.jsx)(i.ksK, {
            onChange: I,
            value: A,
            error: T,
            placeholder: u,
            autoFocus: true
          })]
        }), C && null != x && (0, l.jsxs)("div", {
          className: c.QB,
          children: [(0, l.jsx)("div", {
            className: c.QB,
            children: (0, l.jsxs)(i.Text, {
              variant: "text-sm/bold",
              children: [x, f && (0, l.jsx)("span", {
                className: d.m,
                children: "*"
              })]
            })
          }), (0, l.jsx)(i.ksK, {
            onChange: E,
            value: O,
            error: k,
            placeholder: g
          })]
        })]
      }), null != n && (0, l.jsx)(i.Text, {
        variant: "text-xs/normal",
        children: j(n)
      })]
    })
  },
  g = e => {
    let {
      element: t,
      onChange: n,
      state: i
    } = e, a = t.name, s = "".concat(t.name, "_message_link"), o = r.useCallback((e, t) => {
      null != t ? n(a, e.value, e.isValid && t.isValid, s, t.value) : n(a, e.value, e.isValid, s, true)
    }, [n, a, s]);
    return (0, l.jsx)(x, {
      data: t.data,
      onChange: o,
      initialContentUrl: null == i ? true : i[a],
      initialMessageUrl: null == i ? true : i[s],
      isRequired: t.should_submit_data
    })
  }