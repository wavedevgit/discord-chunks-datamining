/** Chunk was on 22979 **/
/** chunk id: 735959, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk354012 = require("./354012.js"),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk330711 = require("./330711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk428530 = require("./428530.jsx"),
  Chunk257785 = require("./257785.jsx"),
  Chunk388032 = require("./388032.jsx");

function x() {
  let e = (0, c.e7)([m.default], () => m.default.locale),
    [t, n] = r.useState(),
    l = (0, i.runtimeHashMessageKey)(null != t ? t : ""),
    x = r.useMemo(() => f.t[l], [l]);
  return (0, a.jsxs)("div", {
    children: [(0, a.jsxs)(u.ZP, {
      children: [(0, a.jsx)(u.ZP.Icon, {
        icon: d.os0,
        tooltip: "Locale"
      }), (0, a.jsx)(u.ZP.Title, {
        children: "Locale"
      })]
    }), (0, a.jsxs)(h.E, {
      children: [(0, a.jsx)(h.Z9, {
        name: "Active System",
        children: "@discord/intl"
      }), (0, a.jsx)(h.Z9, {
        name: "App",
        children: e
      }), (0, a.jsx)(h.Z9, {
        name: "System",
        children: f.systemLocale
      }), (0, a.jsx)(h.Z9, {
        name: "@discord/intl",
        children: f.intl.currentLocale
      }), (0, a.jsx)(h.Z9, {
        name: "common i18n",
        children: o.Z.getLocale()
      }), (0, a.jsx)(h.Z9, {
        name: "Moment",
        children: s().locale()
      })]
    }), (0, a.jsxs)(u.ZP, {
      children: [(0, a.jsx)(u.ZP.Icon, {
        icon: d.os0,
        tooltip: "Messages"
      }), (0, a.jsx)(u.ZP.Title, {
        children: "New System Messages"
      })]
    }), (0, a.jsx)(h.E, {
      children: (0, a.jsx)(h.Z9, {
        name: "Unique Rendered Main Messages",
        children: Object.keys(f.t).length
      })
    }), (0, a.jsx)("div", {
      style: {
        margin: 16
      },
      children: (0, a.jsx)(d.oil, {
        onChange: function(e) {
          n(e)
        },
        name: "Message name",
        placeholder: "Find a message"
      })
    }), (0, a.jsxs)(h.E, {
      children: [(0, a.jsx)(h.Z9, {
        name: "Hashed key",
        children: l
      }), (0, a.jsx)(h.Z9, {
        name: "Exists?",
        children: null != x ? "yes" : "no"
      })]
    }), (0, a.jsx)(p.Z, {
      data: null == x ? true : x(e)
    })]
  })
}