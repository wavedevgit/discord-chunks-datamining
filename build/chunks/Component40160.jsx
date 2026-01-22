/** Chunk was on 47841 **/
/** chunk id: 40160, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
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

function h(e) {
  let t, {
      guild: n
    } = e,
    h = n.mfaLevel,
    j = (0, l.bG)([u.A], () => null != n && u.A.can(m.xBc.MANAGE_GUILD, n), [n]),
    O = (0, l.bG)([f.default], () => f.default.getCurrentUser()),
    y = (0, d.bM)(n, O),
    v = null == O ? true : O.mfaEnabled,
    A = h === m.EkJ.ELEVATED,
    E = y && v,
    N = (0, i.throttle)(async e => {
      E && await g.A.updateMFALevel({
        guildId: n.id,
        level: e ? m.EkJ.ELEVATED : m.EkJ.NONE
      })
    }, 1e3);
  if (!j) return null;
  E || (t = y ? p.intl.format(p.t.nFwNyR, {
    settingsHook: () => (0, o.openUserSettings)(c.X.ACCOUNT_PANEL, {
      section: m.nc_.ACCOUNT
    })
  }) : p.intl.string(p.t["9Ghu40"]));
  let _ = n.features.has(m.GuildFeatures.DISCOVERABLE);
  return (0, r.jsxs)("div", {
    className: x.ph,
    children: [(0, r.jsxs)("div", {
      className: x.Ly,
      children: [(0, r.jsx)(a.Heading, {
        variant: "text-md/semibold",
        color: "text-strong",
        children: p.intl.string(p.t.lbBfEQ)
      }), (0, r.jsxs)(a.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: [p.intl.string(p.t["a/93J6"]), " ", t]
      })]
    }), !E || A && _ ? (0, r.jsx)(s.m, {
      text: _ ? p.intl.string(p.t["KG1V/E"]) : y ? p.intl.string(p.t.NmsheT) : p.intl.string(p.t.LieBta),
      children: (0, r.jsx)(b.A, {
        checked: A,
        disabled: true,
        onChange: N,
        className: x.R0
      })
    }) : (0, r.jsx)(b.A, {
      checked: A,
      onChange: N,
      className: x.R0
    })]
  })
}