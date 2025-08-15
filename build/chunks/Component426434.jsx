/** Chunk was on 6049 **/
/** chunk id: 426434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk601964 = require("./601964.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk434404 = require("./434404.js"),
  Chunk449226 = require("./449226.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk824804 = require("./824804.js");

function f(e) {
  let t, {
      guild: n
    } = e,
    f = n.mfaLevel,
    b = (0, l.e7)([c.Z], () => null != n && c.Z.can(g.Plq.MANAGE_GUILD, n), [n]),
    x = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
    j = (0, o.eM)(n, x),
    v = null == x ? true : x.mfaEnabled,
    _ = f === g.BpS.ELEVATED,
    O = j && v,
    y = (0, i.throttle)(async e => {
      O && await u.Z.updateMFALevel({
        guildId: n.id,
        level: e ? g.BpS.ELEVATED : g.BpS.NONE,
        isEnabled: !e
      })
    }, 1e3);
  if (!b) return null;
  O || (t = j ? p.intl.format(p.t.nFwNyc, {
    settingsHook: () => s.Z.open(g.oAB.ACCOUNT)
  }) : p.intl.string(p.t["9Ghu4+"]));
  let C = n.features.has(g.oNc.DISCOVERABLE);
  return (0, r.jsxs)("div", {
    className: h.simpleItemWrapper,
    children: [(0, r.jsxs)("div", {
      className: h.itemContent,
      children: [(0, r.jsx)(a.X6q, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: p.intl.string(p.t.lbBfER)
      }), (0, r.jsxs)(a.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [p.intl.string(p.t["a/93Jy"]), " ", t]
      })]
    }), !O || _ && C ? (0, r.jsx)(a.ua7, {
      text: C ? p.intl.string(p.t["KG1V/P"]) : j ? p.intl.string(p.t.NmsheX) : p.intl.string(p.t.LieBtb),
      children: e => (0, r.jsx)(m.Z, {
        checked: _,
        disabled: true,
        onChange: y,
        className: h.bringToFront,
        tooltipProps: e
      })
    }) : (0, r.jsx)(m.Z, {
      checked: _,
      onChange: y,
      className: h.bringToFront
    })]
  })
}