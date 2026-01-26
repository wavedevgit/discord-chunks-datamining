/** Chunk was on 39048 **/
/** chunk id: 989860, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  I: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk997509 = require("./997509.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk600854 = require("./600854.js"),
  Chunk347953 = require("./347953.js"),
  Chunk622327 = require("./622327.js");

function m(e) {
  let {
    canManageGuild: t,
    premiumProgressBarEnabled: n
  } = e, m = (0, a.Ay)(), p = i.useCallback(e => {
    o.A.updateGuild({
      premiumProgressBarEnabled: e
    })
  }, []);
  return (0, r.jsxs)("div", {
    className: d.kL,
    children: [(0, r.jsx)("div", {
      className: d.fi,
      children: (0, r.jsx)(s.dOG, {
        label: c.intl.string(c.t.Dl4mJS),
        description: c.intl.string(c.t.xzHcod),
        checked: n,
        onChange: p,
        disabled: !t
      })
    }), (0, r.jsx)("div", {
      className: d.fi,
      children: (0, r.jsx)("img", {
        alt: c.intl.string(c.t.UOJp5a),
        src: (0, l.qB)(m) ? g : u,
        className: d.WI
      })
    })]
  })
}