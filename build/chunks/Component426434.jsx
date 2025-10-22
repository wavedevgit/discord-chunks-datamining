/** Chunk was on 29679 **/
/** chunk id: 426434, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk298392 = require("./298392.js");

function x(e) {
  let t, {
      guild: n
    } = e,
    x = n.mfaLevel,
    j = (0, l.e7)([u.Z], () => null != n && u.Z.can(f.Plq.MANAGE_GUILD, n), [n]),
    v = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
    _ = (0, d.eM)(n, v),
    C = null == v ? true : v.mfaEnabled,
    O = x === f.BpS.ELEVATED,
    y = _ && C,
    E = (0, i.throttle)(async e => {
      y && await m.Z.updateMFALevel({
        guildId: n.id,
        level: e ? f.BpS.ELEVATED : f.BpS.NONE,
        isEnabled: !e
      })
    }, 1e3);
  if (!j) return null;
  y || (t = _ ? h.intl.format(h.t.nFwNyR, {
    settingsHook: () => (0, c.openUserSettings)(o.n.ACCOUNT_PANEL, {
      section: f.oAB.ACCOUNT
    })
  }) : h.intl.string(h.t["9Ghu40"]));
  let N = n.features.has(f.GuildFeatures.DISCOVERABLE);
  return (0, r.jsxs)("div", {
    className: b.simpleItemWrapper,
    children: [(0, r.jsxs)("div", {
      className: b.itemContent,
      children: [(0, r.jsx)(s.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: h.intl.string(h.t.lbBfEQ)
      }), (0, r.jsxs)(s.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [h.intl.string(h.t["a/93J6"]), " ", t]
      })]
    }), !y || O && N ? (0, r.jsx)(a.u, {
      text: N ? h.intl.string(h.t["KG1V/E"]) : _ ? h.intl.string(h.t.NmsheT) : h.intl.string(h.t.LieBta),
      children: (0, r.jsx)(p.Z, {
        checked: O,
        disabled: true,
        onChange: E,
        className: b.bringToFront
      })
    }) : (0, r.jsx)(p.Z, {
      checked: O,
      onChange: E,
      className: b.bringToFront
    })]
  })
}