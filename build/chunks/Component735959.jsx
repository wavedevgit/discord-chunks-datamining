/** Chunk was on 87665 **/
/** chunk id: 735959, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk400497 = require("./400497.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
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
    [t, n] = Chunk647438.useState(),
    i = (0, Chunk400497.runtimeHashMessageKey)(null != exports ? exports : ""),
    g = Chunk647438.useMemo(() => Chunk388032.t[Chunk913527], [Chunk913527]);
  return (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsxs)(Chunk665149.ZP, {
      children: [(0, Chunk951288.jsx)(Chunk665149.ZP.Icon, {
        icon: Chunk481060.os0,
        tooltip: "Locale"
      }), (0, Chunk951288.jsx)(Chunk665149.ZP.Title, {
        children: "Locale"
      })]
    }), (0, Chunk951288.jsxs)(Chunk257785.E, {
      children: [(0, Chunk951288.jsx)(Chunk257785.Z9, {
        name: "Active System",
        children: "@discord/intl"
      }), (0, Chunk951288.jsx)(Chunk257785.Z9, {
        name: "App",
        children: module
      }), (0, Chunk951288.jsx)(Chunk257785.Z9, {
        name: "System",
        children: Chunk388032.systemLocale
      }), (0, Chunk951288.jsx)(Chunk257785.Z9, {
        name: "@discord/intl",
        children: Chunk388032.intl.currentLocale
      }), (0, Chunk951288.jsx)(Chunk257785.Z9, {
        name: "common i18n",
        children: Chunk330711.Z.getLocale()
      }), (0, Chunk951288.jsx)(Chunk257785.Z9, {
        name: "Moment",
        children: o().locale()
      })]
    }), (0, Chunk951288.jsxs)(Chunk665149.ZP, {
      children: [(0, Chunk951288.jsx)(Chunk665149.ZP.Icon, {
        icon: Chunk481060.os0,
        tooltip: "Messages"
      }), (0, Chunk951288.jsx)(Chunk665149.ZP.Title, {
        children: "New System Messages"
      })]
    }), (0, Chunk951288.jsx)(Chunk257785.E, {
      children: (0, Chunk951288.jsx)(Chunk257785.Z9, {
        name: "Unique Rendered Main Messages",
        children: Object.keys(Chunk388032.t).length
      })
    }), (0, Chunk951288.jsx)("div", {
      style: {
        margin: 16
      },
      children: (0, Chunk951288.jsx)(Chunk481060.oil, {
        onChange: function(e) {
          n(e)
        },
        name: "Message name",
        placeholder: "Find a message"
      })
    }), (0, Chunk951288.jsxs)(Chunk257785.E, {
      children: [(0, Chunk951288.jsx)(Chunk257785.Z9, {
        name: "Hashed key",
        children: Chunk913527
      }), (0, Chunk951288.jsx)(Chunk257785.Z9, {
        name: "Exists?",
        children: null != g ? "yes" : "no"
      })]
    }), (0, Chunk951288.jsx)(Chunk428530.Z, {
      data: null == g ? true : g(module)
    })]
  })
}