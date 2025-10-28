/** Chunk was on 27325 **/
/** chunk id: 53432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk705262 = require("./705262.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk740492 = require("./740492.js"),
  Chunk695346 = require("./695346.js"),
  Chunk874893 = require("./874893.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g() {
  let e = Chunk695346.jU.useSetting(),
    {
      analyticsLocations: t
    } = (0, Chunk906732.ZP)(),
    {
      theme: n,
      useSystemTheme: g,
      useForcedColors: f
    } = (0, Chunk442837.cj)([Chunk210887.Z, Chunk740492.ZP, Chunk607070.Z], () => ({
      theme: Chunk210887.Z.theme,
      useSystemTheme: Chunk740492.ZP.useSystemTheme,
      useForcedColors: Chunk607070.Z.useForcedColors
    })),
    O = Chunk695346.YC.useSetting(),
    x = (e, i) => (0, r.jsx)(l.k5B, {
      id: e,
      group: "input-modes",
      label: i,
      disabled: f,
      checked: g === j.KW.ON ? "system" === e : e === n,
      action: () => {
        (0, d.Yk)({
          isPersisted: true,
          analyticsLocations: t,
          themeName: "default ".concat(e)
        }), (0, s.ZI)({
          theme: e
        })
      }
    }),
    S = [(0, Chunk951288.jsxs)(Chunk481060.kSQ, {
      children: [x(Chunk981631.BRd.LIGHT, Chunk388032.intl.string(Chunk388032.t.K2sFfo)), x(Chunk981631.BRd.DARK, Chunk388032.intl.string(Chunk388032.t.SMPT1k)), x(Chunk981631.BRd.DARKER, Chunk388032.intl.string(Chunk388032.t.b8Cei3)), x(Chunk981631.BRd.MIDNIGHT, Chunk388032.intl.string(Chunk388032.t.Do4ZJx)), x("system", Chunk388032.intl.string(Chunk388032.t["7rOU6j"]))]
    }, "theme-items")];
  return S.push((0, Chunk951288.jsxs)(Chunk481060.kSQ, {
    label: "UI Density",
    children: [(0, Chunk951288.jsx)(Chunk481060.k5B, {
      id: "compact-ui",
      group: "list-density",
      label: Chunk388032.intl.string(Chunk388032.t["7iegX4"]),
      checked: O === Chunk524437.Pi.COMPACT,
      action: () => {
        Chunk695346.YC.updateSetting(Chunk524437.Pi.COMPACT)
      }
    }), (0, Chunk951288.jsx)(Chunk481060.k5B, {
      id: "default-ui",
      group: "list-density",
      label: Chunk388032.intl.string(Chunk388032.t.bBvAEH),
      checked: O === Chunk524437.Pi.DEFAULT,
      action: () => {
        Chunk695346.YC.updateSetting(Chunk524437.Pi.DEFAULT)
      }
    }), (0, Chunk951288.jsx)(Chunk481060.k5B, {
      id: "cozy-ui",
      group: "list-density",
      label: Chunk388032.intl.string(Chunk388032.t["4cuYHx"]),
      checked: O === Chunk524437.Pi.COZY,
      action: () => {
        Chunk695346.YC.updateSetting(Chunk524437.Pi.COZY)
      }
    })]
  }, "list-density")), S.push((0, Chunk951288.jsxs)(Chunk481060.kSQ, {
    label: "Message Display",
    children: [(0, Chunk951288.jsx)(Chunk481060.k5B, {
      id: "cozy-chat",
      group: "chat-density",
      label: Chunk388032.intl.string(Chunk388032.t.Jqj4cZ),
      checked: !module,
      action: () => {
        Chunk695346.jU.updateSetting(false), (0, Chunk857595.ZZ)()
      }
    }), (0, Chunk951288.jsx)(Chunk481060.k5B, {
      id: "compact-chat",
      group: "chat-density",
      label: Chunk388032.intl.string(Chunk388032.t["1JNcPS"]),
      checked: module,
      action: () => {
        Chunk695346.jU.updateSetting(true), (0, Chunk857595.ZZ)()
      }
    })]
  }, "chat-density")), S
}