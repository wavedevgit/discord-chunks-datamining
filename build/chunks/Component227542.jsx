/** Chunk was on web.js **/
/** chunk id: 227542, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk873298 = require("./873298.js"),
  Chunk397927 = require("./397927.js"),
  Chunk817281 = require("./817281.js"),
  Chunk955572 = require("./955572.js"),
  Chunk775602 = require("./775602.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk692798 = require("./692798.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk964404 = require("./964404.js"),
  Chunk253932 = require("./253932.js"),
  Chunk185928 = require("./185928.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function E() {
  let e = _.hH.useSetting(),
    {
      analyticsLocations: t
    } = (0, u.Ay)(),
    {
      theme: n,
      useSystemTheme: E,
      useForcedColors: b
    } = (0, i.cf)([f.A, p.Ay, c.A], () => ({
      theme: f.A.theme,
      useSystemTheme: p.Ay.useSystemTheme,
      useForcedColors: c.A.useForcedColors
    })),
    y = _.Xi.useSetting(),
    O = (e, i) => (0, r.jsx)(s.iDA, {
      id: e,
      group: "input-modes",
      label: i,
      disabled: b,
      checked: E === h.Q_.ON ? "system" === e : e === n,
      action: () => {
        (0, d.X8)({
          isPersisted: true,
          analyticsLocations: t,
          themeName: "default ".concat(e)
        }), (0, o.u_)({
          theme: e
        })
      }
    }),
    A = [(0, r.jsxs)(s.rXV, {
      children: [O(m.NJ8.LIGHT, g.intl.string(g.t.K2sFfo)), O(m.NJ8.DARK, g.intl.string(g.t.SMPT1k)), O(m.NJ8.DARKER, g.intl.string(g.t.b8Cei3)), O(m.NJ8.MIDNIGHT, g.intl.string(g.t.Do4ZJx)), O("system", g.intl.string(g.t["7rOU6j"]))]
    }, "theme-items")];
  return A.push((0, r.jsxs)(s.rXV, {
    label: "UI Density",
    children: [(0, r.jsx)(s.iDA, {
      id: "compact-ui",
      group: "list-density",
      label: g.intl.string(g.t["7iegX4"]),
      checked: y === a.NS.COMPACT,
      action: () => {
        _.Xi.updateSetting(a.NS.COMPACT)
      }
    }), (0, r.jsx)(s.iDA, {
      id: "default-ui",
      group: "list-density",
      label: g.intl.string(g.t.bBvAEH),
      checked: y === a.NS.DEFAULT,
      action: () => {
        _.Xi.updateSetting(a.NS.DEFAULT)
      }
    }), (0, r.jsx)(s.iDA, {
      id: "cozy-ui",
      group: "list-density",
      label: g.intl.string(g.t["4cuYHx"]),
      checked: y === a.NS.COZY,
      action: () => {
        _.Xi.updateSetting(a.NS.COZY)
      }
    })]
  }, "list-density")), A.push((0, r.jsxs)(s.rXV, {
    label: "Message Display",
    children: [(0, r.jsx)(s.iDA, {
      id: "cozy-chat",
      group: "chat-density",
      label: g.intl.string(g.t.Jqj4cZ),
      checked: !e,
      action: () => {
        _.hH.updateSetting(false), (0, l.AC)()
      }
    }), (0, r.jsx)(s.iDA, {
      id: "compact-chat",
      group: "chat-density",
      label: g.intl.string(g.t["1JNcPS"]),
      checked: e,
      action: () => {
        _.hH.updateSetting(true), (0, l.AC)()
      }
    })]
  }, "chat-density")), A
}