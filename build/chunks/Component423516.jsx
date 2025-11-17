/** Chunk was on 60831 **/
/** chunk id: 423516, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk570928 = require("./570928.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk980941 = require("./980941.js");
let c = function(e) {
  let {
    className: t,
    hasVideo: n,
    text: i,
    hasConnectedChannel: c,
    textVariant: d = "text-md/medium"
  } = e, f = n ? s.intl.string(s.t.IlHdW8) : s.intl.string(s.t.WsOisp);
  return (0, l.jsx)(o.Z, {
    className: r()(t, u.hoverableStatus),
    hoverText: c ? (0, l.jsx)(a.Text, {
      variant: d,
      color: "currentColor",
      children: f
    }) : null,
    children: (0, l.jsx)(a.Text, {
      variant: d,
      color: "currentColor",
      children: i
    })
  })
}