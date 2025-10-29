/** Chunk was on 88647 **/
/** chunk id: 270801, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk881053 = require("./881053.js");
let c = () => require.e("49812").then(require.t.bind(require, 48603, 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  }),
  u = e => {
    var t, n;
    let u = (0, a.Dt)();
    return (0, r.jsxs)(i.IX, (t = function(e) {
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
    }({}, e), n = n = {
      size: "sm",
      children: [(0, r.jsx)("div", {
        className: s.animationContainer,
        children: (0, r.jsx)(l.Fmz, {
          importData: c,
          className: s.animationMiddle
        })
      }), (0, r.jsx)(i.fef, {
        children: (0, r.jsxs)("div", {
          className: s.manaContainer,
          children: [(0, r.jsx)(l.Heading, {
            variant: "heading-lg/semibold",
            className: s.header,
            id: u,
            children: o.intl.format(o.t.z9qozJ, {
              guildName: e.guildName
            })
          }), (0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "header-secondary",
            children: o.intl.string(o.t.nwpqyc)
          })]
        })
      }), (0, r.jsx)(i.Go$, {
        actions: [{
          variant: "primary",
          onClick: () => {
            e.onAccept(), e.onClose()
          },
          text: o.intl.string(o.t.NuzmOA)
        }],
        actionsFullWidth: true
      })]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  }