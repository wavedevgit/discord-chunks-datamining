/** Chunk was on 11010 **/
/** chunk id: 423516, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk570928 = require("./570928.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk255642 = require("./255642.js");
let u = function(e) {
  let {
    className: t,
    hasVideo: n,
    text: i,
    hasConnectedChannel: u,
    textVariant: d = "text-md/medium"
  } = e, f = n ? c.intl.string(c.t.IlHdW8) : c.intl.string(c.t.WsOisp);
  return (0, r.jsx)(o.Z, {
    className: l()(t, s.hoverableStatus),
    hoverText: u ? (0, r.jsx)(a.Text, {
      variant: d,
      color: "currentColor",
      children: f
    }) : null,
    children: (0, r.jsx)(a.Text, {
      variant: d,
      color: "currentColor",
      children: i
    })
  })
}