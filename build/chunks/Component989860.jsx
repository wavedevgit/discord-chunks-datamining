/** Chunk was on 39048 **/
/** chunk id: 989860, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  I: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk903223 = require("./903223.js"),
  Chunk997509 = require("./997509.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk600854 = require("./600854.js"),
  Chunk347953 = require("./347953.js"),
  Chunk622327 = require("./622327.js");

function p(e) {
  let {
    guildId: t,
    canManageGuild: n,
    premiumProgressBarEnabled: p
  } = e, f = (0, a.Ay)(), h = i.useCallback(e => {
    c.A.updateGuild({
      premiumProgressBarEnabled: e
    })
  }, []);
  return i.useEffect(() => {
    o.Ay.trackExposure({
      guildId: t,
      location: "guild-settings"
    })
  }, [t]), (0, r.jsxs)("div", {
    className: u.kL,
    children: [(0, r.jsx)("div", {
      className: u.fi,
      children: (0, r.jsx)(s.dOG, {
        label: d.intl.string(d.t.Dl4mJS),
        description: d.intl.string(d.t.xzHcod),
        checked: p,
        onChange: h,
        disabled: !n
      })
    }), (0, r.jsx)("div", {
      className: u.fi,
      children: (0, r.jsx)("img", {
        alt: d.intl.string(d.t.UOJp5a),
        src: (0, l.qB)(f) ? m : g,
        className: u.WI
      })
    })]
  })
}