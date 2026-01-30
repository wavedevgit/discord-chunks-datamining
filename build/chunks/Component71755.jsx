/** Chunk was on 64935 **/
/** chunk id: 71755, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk529200 = require("./529200.jsx"),
  Chunk635491 = require("./635491.jsx"),
  Chunk122906 = require("./122906.js"),
  Chunk401755 = require("./401755.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk687563 = require("./687563.js"),
  Chunk563111 = require("./563111.js");

function m(e) {
  var t;
  let {
    code: m
  } = e, f = (0, i.bG)([o.A], () => o.A.getGuildTemplate(m));
  if (null == f || f.state === c.QB.RESOLVING) return (0, r.jsxs)(a.A, {
    children: [(0, r.jsx)(a.A.Header, {
      text: u.intl.string(u.t.Xj87Yf)
    }), (0, r.jsx)(a.A.Body, {
      resolving: true
    })]
  });
  if (f.state === c.QB.EXPIRED) return (0, r.jsxs)(a.A, {
    children: [(0, r.jsx)(a.A.Header, {
      text: u.intl.string(u.t.C7ZRNw)
    }), (0, r.jsxs)(a.A.Body, {
      children: [(0, r.jsx)(a.A.Icon, {
        expired: true
      }), (0, r.jsx)(a.A.Info, {
        expired: true,
        title: u.intl.string(u.t.A6MwXE)
      })]
    })]
  });
  let g = __OVERLAY__ ? (0, r.jsx)(l.Button, {
    disabled: true,
    variant: "secondary",
    text: u.intl.string(u.t.W7NTWm)
  }) : (0, r.jsx)(l.Button, {
    onClick: () => {
      (0, l.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("7726"), n.e("4042")]).then(n.bind(n, 72715));
        return t => {
          var n, i;
          return (0, r.jsx)(e, (n = function(e) {
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
          }({}, t), i = i = {
            guildTemplate: f
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
          }), n))
        }
      })
    },
    loading: f.state === c.QB.ACCEPTING,
    variant: "active",
    text: u.intl.string(u.t["a3Gl+e"])
  });
  return (0, r.jsxs)(a.A, {
    children: [(0, r.jsx)(a.A.Header, {
      text: u.intl.string(u.t.kAvFkO)
    }), (0, r.jsxs)(a.A.Body, {
      children: [(0, r.jsxs)("div", {
        className: p.iH,
        children: [(0, r.jsx)(s.A, {
          className: d.K
        }), (0, r.jsx)(a.A.Info, {
          title: f.name,
          children: u.intl.format(u.t.cGXXHL, {
            usageCount: String(null != (t = f.usageCount) ? t : 0)
          })
        })]
      }), g]
    })]
  })
}