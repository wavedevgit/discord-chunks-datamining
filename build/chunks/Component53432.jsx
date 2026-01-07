/** Chunk was on web.js **/
/** chunk id: 53432, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./539854.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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

function E() {
  let e = _.jU.useSetting(),
    {
      analyticsLocations: t
    } = (0, u.ZP)(),
    {
      theme: n,
      useSystemTheme: E,
      useForcedColors: b
    } = (0, i.cj)([f.Z, p.ZP, c.Z], () => ({
      theme: f.Z.theme,
      useSystemTheme: p.ZP.useSystemTheme,
      useForcedColors: c.Z.useForcedColors
    })),
    y = _.YC.useSetting(),
    O = (e, i) => (0, r.jsx)(o.k5B, {
      id: e,
      group: "input-modes",
      label: i,
      disabled: b,
      checked: E === m.KW.ON ? "system" === e : e === n,
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
    v = [(0, r.jsxs)(o.kSQ, {
      children: [O(h.BRd.LIGHT, g.intl.string(g.t.K2sFfo)), O(h.BRd.DARK, g.intl.string(g.t.SMPT1k)), O(h.BRd.DARKER, g.intl.string(g.t.b8Cei3)), O(h.BRd.MIDNIGHT, g.intl.string(g.t.Do4ZJx)), O("system", g.intl.string(g.t["7rOU6j"]))]
    }, "theme-items")];
  return v.push((0, r.jsxs)(o.kSQ, {
    label: "UI Density",
    children: [(0, r.jsx)(o.k5B, {
      id: "compact-ui",
      group: "list-density",
      label: g.intl.string(g.t["7iegX4"]),
      checked: y === a.Pi.COMPACT,
      action: () => {
        _.YC.updateSetting(a.Pi.COMPACT)
      }
    }), (0, r.jsx)(o.k5B, {
      id: "default-ui",
      group: "list-density",
      label: g.intl.string(g.t.bBvAEH),
      checked: y === a.Pi.DEFAULT,
      action: () => {
        _.YC.updateSetting(a.Pi.DEFAULT)
      }
    }), (0, r.jsx)(o.k5B, {
      id: "cozy-ui",
      group: "list-density",
      label: g.intl.string(g.t["4cuYHx"]),
      checked: y === a.Pi.COZY,
      action: () => {
        _.YC.updateSetting(a.Pi.COZY)
      }
    })]
  }, "list-density")), v.push((0, r.jsxs)(o.kSQ, {
    label: "Message Display",
    children: [(0, r.jsx)(o.k5B, {
      id: "cozy-chat",
      group: "chat-density",
      label: g.intl.string(g.t.Jqj4cZ),
      checked: !e,
      action: () => {
        _.jU.updateSetting(false), (0, l.ZZ)()
      }
    }), (0, r.jsx)(o.k5B, {
      id: "compact-chat",
      group: "chat-density",
      label: g.intl.string(g.t["1JNcPS"]),
      checked: e,
      action: () => {
        _.jU.updateSetting(true), (0, l.ZZ)()
      }
    })]
  }, "chat-density")), v
}