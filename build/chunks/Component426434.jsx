/** Chunk was on 384 **/
/** chunk id: 426434, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk824804 = require("./824804.js");

function b(e) {
  let t, {
      guild: n
    } = e,
    b = n.mfaLevel,
    j = (0, l.e7)([d.Z], () => null != n && d.Z.can(f.Plq.MANAGE_GUILD, n), [n]),
    _ = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
    v = (0, u.eM)(n, _),
    O = null == _ ? true : _.mfaEnabled,
    C = b === f.BpS.ELEVATED,
    y = v && O,
    N = (0, i.throttle)(async e => {
      y && await m.Z.updateMFALevel({
        guildId: n.id,
        level: e ? f.BpS.ELEVATED : f.BpS.NONE
      })
    }, 1e3);
  if (!j) return null;
  y || (t = v ? h.intl.format(h.t.nFwNyR, {
    settingsHook: () => (0, c.openUserSettings)(o.n.ACCOUNT_PANEL, {
      section: f.oAB.ACCOUNT
    })
  }) : h.intl.string(h.t["9Ghu40"]));
  let E = n.features.has(f.GuildFeatures.DISCOVERABLE);
  return (0, r.jsxs)("div", {
    className: x.simpleItemWrapper,
    children: [(0, r.jsxs)("div", {
      className: x.itemContent,
      children: [(0, r.jsx)(a.Heading, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: h.intl.string(h.t.lbBfEQ)
      }), (0, r.jsxs)(a.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: [h.intl.string(h.t["a/93J6"]), " ", t]
      })]
    }), !y || C && E ? (0, r.jsx)(s.u, {
      text: E ? h.intl.string(h.t["KG1V/E"]) : v ? h.intl.string(h.t.NmsheT) : h.intl.string(h.t.LieBta),
      children: (0, r.jsx)(p.Z, {
        checked: C,
        disabled: true,
        onChange: N,
        className: x.bringToFront
      })
    }) : (0, r.jsx)(p.Z, {
      checked: C,
      onChange: N,
      className: x.bringToFront
    })]
  })
}