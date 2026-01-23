/** Chunk was on 47841 **/
/** chunk id: 40160, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk260509 = require("./260509.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk997509 = require("./997509.js"),
  Chunk600955 = require("./600955.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk690450 = require("./690450.js");

function x(e) {
  let t, {
      guild: n
    } = e,
    x = n.mfaLevel,
    j = (0, l.bG)([u.A], () => null != n && u.A.can(f.xBc.MANAGE_GUILD, n), [n]),
    _ = (0, l.bG)([g.default], () => g.default.getCurrentUser()),
    O = (0, d.bM)(n, _),
    v = null == _ ? true : _.mfaEnabled,
    y = x === f.EkJ.ELEVATED,
    A = O && v,
    E = (0, i.throttle)(async e => {
      A && await m.A.updateMFALevel({
        guildId: n.id,
        level: e ? f.EkJ.ELEVATED : f.EkJ.NONE
      })
    }, 1e3);
  if (!j) return null;
  A || (t = O ? b.intl.format(b.t.nFwNyR, {
    settingsHook: () => (0, c.openUserSettings)(o.X.ACCOUNT_PANEL, {
      section: f.nc_.ACCOUNT
    })
  }) : b.intl.string(b.t["9Ghu40"]));
  let N = n.features.has(f.GuildFeatures.DISCOVERABLE);
  return (0, r.jsxs)("div", {
    className: h.ph,
    children: [(0, r.jsxs)("div", {
      className: h.Ly,
      children: [(0, r.jsx)(a.Heading, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: b.intl.string(b.t.lbBfEQ)
      }), (0, r.jsxs)(a.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: [b.intl.string(b.t["a/93J6"]), " ", t]
      })]
    }), !A || y && N ? (0, r.jsx)(s.m, {
      text: N ? b.intl.string(b.t["KG1V/E"]) : O ? b.intl.string(b.t.NmsheT) : b.intl.string(b.t.LieBta),
      children: (0, r.jsx)(p.A, {
        checked: y,
        disabled: true,
        onChange: E,
        className: h.R0
      })
    }) : (0, r.jsx)(p.A, {
      checked: y,
      onChange: E,
      className: h.R0
    })]
  })
}