/** Chunk was on 78528 **/
/** chunk id: 813513, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk685399 = require("./685399.js"),
  Chunk667936 = require("./667936.jsx"),
  Chunk879349 = require("./879349.jsx"),
  Chunk439792 = require("./439792.js");

function c(e) {
  let {
    channel: t,
    onAction: n
  } = e, c = (0, i.Ay)(t), u = Array.from((0, i.Rz)(c).values());
  return 0 === u.length ? null : (0, r.jsxs)(l.HOs, {
    className: o.kL,
    children: [(0, r.jsx)("div", {
      className: o.oT,
      children: (0, r.jsx)(a.A, {
        channel: t
      })
    }), (0, r.jsx)("div", {
      className: o.zN
    }), u.map((e, l) => {
      var i;
      return (0, r.jsx)(s.A, {
        embeddedApp: e,
        presenceActivity: null != (i = e.presenceActivity) ? i : true,
        channel: t,
        onAction: n
      }, l)
    })]
  })
}