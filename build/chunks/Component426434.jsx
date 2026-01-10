/** Chunk was on 9536 **/
/** chunk id: 426434, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
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
  Chunk146473 = require("./146473.js");

function x(e) {
  let t, {
      guild: n
    } = e,
    x = n.mfaLevel,
    j = (0, l.e7)([u.Z], () => null != n && u.Z.can(b.Plq.MANAGE_GUILD, n), [n]),
    v = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
    O = (0, d.eM)(n, v),
    y = null == v ? true : v.mfaEnabled,
    C = x === b.BpS.ELEVATED,
    N = O && y,
    E = (0, i.throttle)(async e => {
      N && await f.Z.updateMFALevel({
        guildId: n.id,
        level: e ? b.BpS.ELEVATED : b.BpS.NONE
      })
    }, 1e3);
  if (!j) return null;
  N || (t = O ? p.intl.format(p.t.nFwNyR, {
    settingsHook: () => (0, c.openUserSettings)(o.n.ACCOUNT_PANEL, {
      section: b.oAB.ACCOUNT
    })
  }) : p.intl.string(p.t["9Ghu40"]));
  let I = n.features.has(b.GuildFeatures.DISCOVERABLE);
  return (0, r.jsxs)("div", {
    className: h.simpleItemWrapper,
    children: [(0, r.jsxs)("div", {
      className: h.itemContent,
      children: [(0, r.jsx)(s.Heading, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: p.intl.string(p.t.lbBfEQ)
      }), (0, r.jsxs)(s.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: [p.intl.string(p.t["a/93J6"]), " ", t]
      })]
    }), !N || C && I ? (0, r.jsx)(a.u, {
      text: I ? p.intl.string(p.t["KG1V/E"]) : O ? p.intl.string(p.t.NmsheT) : p.intl.string(p.t.LieBta),
      children: (0, r.jsx)(m.Z, {
        checked: C,
        disabled: true,
        onChange: E,
        className: h.bringToFront
      })
    }) : (0, r.jsx)(m.Z, {
      checked: C,
      onChange: E,
      className: h.bringToFront
    })]
  })
}