/** Chunk was on 82096 **/
/** chunk id: 423516, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk570928 = require("./570928.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk980941 = require("./980941.js");
let u = function(e) {
  let {
    className: t,
    hasVideo: n,
    text: l,
    hasConnectedChannel: u,
    textVariant: d = "text-md/medium"
  } = e, f = n ? a.intl.string(a.t.IlHdW1) : a.intl.string(a.t.WsOisr);
  return (0, r.jsx)(s.Z, {
    className: i()(t, c.hoverableStatus),
    hoverText: u ? (0, r.jsx)(o.Text, {
      variant: d,
      color: "currentColor",
      children: f
    }) : null,
    children: (0, r.jsx)(o.Text, {
      variant: d,
      color: "currentColor",
      children: l
    })
  })
}