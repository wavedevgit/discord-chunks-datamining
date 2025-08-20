/** Chunk was on 84927 **/
/** chunk id: 423516, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  } = e, h = n ? o.intl.string(o.t.IlHdW1) : o.intl.string(o.t.WsOisr);
  return (0, r.jsx)(a.Z, {
    className: s()(t, c.hoverableStatus),
    hoverText: u ? (0, r.jsx)(i.Text, {
      variant: d,
      color: "currentColor",
      children: h
    }) : null,
    children: (0, r.jsx)(i.Text, {
      variant: d,
      color: "currentColor",
      children: l
    })
  })
}