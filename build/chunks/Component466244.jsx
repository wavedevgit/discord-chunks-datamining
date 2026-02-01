/** Chunk was on 61344 **/
/** chunk id: 466244, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk535134 = require("./535134.js");
let c = () => n.e("44678").then(n.t.bind(n, 144759, 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  }),
  u = e => {
    var t, n;
    let u = (0, a.GV)();
    return (0, l.jsxs)(r.dWK, (t = function(e) {
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
    }({}, e), n = n = {
      size: "sm",
      children: [(0, l.jsx)("div", {
        className: o.Mp,
        children: (0, l.jsx)(i.akl, {
          importData: c,
          className: o.WG
        })
      }), (0, l.jsx)(r.cwr, {
        children: (0, l.jsxs)("div", {
          className: o.lq,
          children: [(0, l.jsx)(i.Heading, {
            variant: "heading-lg/semibold",
            className: o.wx,
            id: u,
            children: s.intl.format(s.t.z9qozJ, {
              guildName: e.guildName
            })
          }), (0, l.jsx)(i.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            children: s.intl.string(s.t.nwpqyc)
          })]
        })
      }), (0, l.jsx)(r.H7u, {
        actions: [{
          variant: "primary",
          onClick: () => {
            e.onAccept(), e.onClose()
          },
          text: s.intl.string(s.t.NuzmOA)
        }],
        actionsFullWidth: true
      })]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        n.push.apply(n, l)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  }