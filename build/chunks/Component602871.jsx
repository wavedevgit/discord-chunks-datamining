/** Chunk was on 23628 **/
/** chunk id: 602871, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk349941 = require("./349941.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk544028 = require("./544028.js"),
  Chunk651892 = require("./651892.js"),
  Chunk438655 = require("./438655.js");
let u = function(e) {
  let {
    hasVideoAsset: t,
    playerState: n,
    pauseReason: u
  } = e, d = (0, i.bG)([s.A], () => s.A.getState().theme), p = (0, a.oK)({
    hasVideoAsset: t,
    playerState: n,
    pauseReason: u
  });
  return null == p ? null : (0, r.jsxs)(r.Fragment, {
    children: [!t && (0, r.jsx)("div", {
      className: c.MM
    }), (0, r.jsx)("div", {
      className: c.b9,
      style: {
        background: (0, l.Mw)(d) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)"
      },
      children: (0, r.jsx)(o.EYj, {
        variant: "text-sm/normal",
        color: "text-default",
        children: p
      })
    })]
  })
}