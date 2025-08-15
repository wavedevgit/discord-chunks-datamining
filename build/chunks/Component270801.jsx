/** Chunk was on 86357 **/
/** chunk id: 270801, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk257465 = require("./257465.jsx"),
  Chunk369585 = require("./369585.jsx"),
  Chunk103866 = require("./103866.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk881053 = require("./881053.js");
let d = () => require.e("49812").then(require.t.bind(require, 48603, 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  }),
  p = e => {
    var t, n;
    let p = (0, s.Dt)();
    return (0, r.jsxs)(i.I, (t = function(e) {
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
        className: u.animationContainer,
        children: (0, r.jsx)(o.Fmz, {
          importData: d,
          className: u.animationMiddle
        })
      }), (0, r.jsx)(a.f, {
        children: (0, r.jsxs)("div", {
          className: u.manaContainer,
          children: [(0, r.jsx)(o.X6q, {
            variant: "heading-lg/semibold",
            className: u.header,
            id: p,
            children: c.intl.format(c.t.z9qozM, {
              guildName: e.guildName
            })
          }), (0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            color: "header-secondary",
            children: c.intl.string(c.t.nwpqyc)
          })]
        })
      }), (0, r.jsx)(l.G, {
        actions: [{
          variant: "primary",
          onClick: () => {
            e.onAccept(), e.onClose()
          },
          text: c.intl.string(c.t.NuzmOD)
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