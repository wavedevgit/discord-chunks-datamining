/** Chunk was on 40184 **/
/** chunk id: 270801, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk122044 = require("./122044.js");
let c = () => require.e("49812").then(require.t.bind(require, 48603, 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  }),
  u = e => {
    var t, n;
    let u = (0, a.Dt)();
    return (0, i.jsxs)(r.IX, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({}, e), n = n = {
      size: "sm",
      children: [(0, i.jsx)("div", {
        className: s.animationContainer,
        children: (0, i.jsx)(l.Fmz, {
          importData: c,
          className: s.animationMiddle
        })
      }), (0, i.jsx)(r.fef, {
        children: (0, i.jsxs)("div", {
          className: s.manaContainer,
          children: [(0, i.jsx)(l.Heading, {
            variant: "heading-lg/semibold",
            className: s.header,
            id: u,
            children: o.intl.format(o.t.z9qozJ, {
              guildName: e.guildName
            })
          }), (0, i.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            children: o.intl.string(o.t.nwpqyc)
          })]
        })
      }), (0, i.jsx)(r.Go$, {
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
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  }