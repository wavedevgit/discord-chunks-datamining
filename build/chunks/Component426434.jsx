/** Chunk was on 8106 **/
/** chunk id: 426434, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk434404 = require("./434404.js"),
  Chunk449226 = require("./449226.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk824804 = require("./824804.js");

function b(e) {
  let t, {
      guild: n
    } = e,
    b = n.mfaLevel,
    x = (0, l.e7)([d.Z], () => null != n && d.Z.can(p.Plq.MANAGE_GUILD, n), [n]),
    j = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
    v = (0, c.eM)(n, j),
    _ = null == j ? true : j.mfaEnabled,
    O = b === p.BpS.ELEVATED,
    y = v && _,
    C = (0, i.throttle)(async e => {
      y && await m.Z.updateMFALevel({
        guildId: n.id,
        level: e ? p.BpS.ELEVATED : p.BpS.NONE,
        isEnabled: !e
      })
    }, 1e3);
  if (!x) return null;
  y || (t = v ? f.intl.format(f.t.nFwNyc, {
    settingsHook: () => (0, o.openUserSettings)(a.n.ACCOUNT_PANEL, {
      section: p.oAB.ACCOUNT
    })
  }) : f.intl.string(f.t["9Ghu4+"]));
  let N = n.features.has(p.oNc.DISCOVERABLE);
  return (0, r.jsxs)("div", {
    className: h.simpleItemWrapper,
    children: [(0, r.jsxs)("div", {
      className: h.itemContent,
      children: [(0, r.jsx)(s.X6q, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: f.intl.string(f.t.lbBfER)
      }), (0, r.jsxs)(s.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [f.intl.string(f.t["a/93Jy"]), " ", t]
      })]
    }), !y || O && N ? (0, r.jsx)(s.ua7, {
      text: N ? f.intl.string(f.t["KG1V/P"]) : v ? f.intl.string(f.t.NmsheX) : f.intl.string(f.t.LieBtb),
      children: e => (0, r.jsx)(g.Z, {
        checked: O,
        disabled: true,
        onChange: C,
        className: h.bringToFront,
        tooltipProps: e
      })
    }) : (0, r.jsx)(g.Z, {
      checked: O,
      onChange: C,
      className: h.bringToFront
    })]
  })
}