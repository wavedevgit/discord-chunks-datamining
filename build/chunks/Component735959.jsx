/** Chunk was on 43605 **/
/** chunk id: 735959, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk502922 = require("./502922.js"),
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

function g() {
  let e = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale),
    [t, n] = Chunk473749.useState(),
    i = (0, Chunk502922.runtimeHashMessageKey)(null != exports ? exports : ""),
    g = Chunk473749.useMemo(() => Chunk388032.t[Chunk913527], [Chunk913527]);
  return (0, Chunk54381.jsxs)("div", {
    children: [(0, Chunk54381.jsxs)(Chunk665149.ZP, {
      children: [(0, Chunk54381.jsx)(Chunk665149.ZP.Icon, {
        icon: Chunk481060.os0,
        tooltip: "Locale"
      }), (0, Chunk54381.jsx)(Chunk665149.ZP.Title, {
        children: "Locale"
      })]
    }), (0, Chunk54381.jsxs)(Chunk257785.E, {
      children: [(0, Chunk54381.jsx)(Chunk257785.Z9, {
        name: "Active System",
        children: "@discord/intl"
      }), (0, Chunk54381.jsx)(Chunk257785.Z9, {
        name: "App",
        children: module
      }), (0, Chunk54381.jsx)(Chunk257785.Z9, {
        name: "System",
        children: Chunk388032.systemLocale
      }), (0, Chunk54381.jsx)(Chunk257785.Z9, {
        name: "@discord/intl",
        children: Chunk388032.intl.currentLocale
      }), (0, Chunk54381.jsx)(Chunk257785.Z9, {
        name: "common i18n",
        children: Chunk330711.Z.getLocale()
      }), (0, Chunk54381.jsx)(Chunk257785.Z9, {
        name: "Moment",
        children: s().locale()
      })]
    }), (0, Chunk54381.jsxs)(Chunk665149.ZP, {
      children: [(0, Chunk54381.jsx)(Chunk665149.ZP.Icon, {
        icon: Chunk481060.os0,
        tooltip: "Messages"
      }), (0, Chunk54381.jsx)(Chunk665149.ZP.Title, {
        children: "New System Messages"
      })]
    }), (0, Chunk54381.jsx)(Chunk257785.E, {
      children: (0, Chunk54381.jsx)(Chunk257785.Z9, {
        name: "Unique Rendered Main Messages",
        children: Object.keys(Chunk388032.t).length
      })
    }), (0, Chunk54381.jsx)("div", {
      style: {
        margin: 16
      },
      children: (0, Chunk54381.jsx)(Chunk481060.oil, {
        onChange: function(e) {
          n(e)
        },
        name: "Message name",
        placeholder: "Find a message"
      })
    }), (0, Chunk54381.jsxs)(Chunk257785.E, {
      children: [(0, Chunk54381.jsx)(Chunk257785.Z9, {
        name: "Hashed key",
        children: Chunk913527
      }), (0, Chunk54381.jsx)(Chunk257785.Z9, {
        name: "Exists?",
        children: null != g ? "yes" : "no"
      })]
    }), (0, Chunk54381.jsx)(Chunk428530.Z, {
      data: null == g ? true : g(module)
    })]
  })
}