/** Chunk was on 93979 **/
/** chunk id: 878566, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk666520 = require("./666520.jsx"),
  Chunk785717 = require("./785717.jsx"),
  Chunk104287 = require("./104287.js"),
  Chunk678738 = require("./678738.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk855013 = require("./855013.js");

function u(e) {
  let {
    userId: n
  } = e, t = (0, r.b)(), {
    trackUserProfileAction: u
  } = (0, o.KZ)();
  return (0, l.jsx)(a.Z, {
    heading: s.intl.string(s.t["mQKv+v"]),
    scrollTargetId: c.Tb.NOTE,
    children: (0, l.jsx)(i.Z, {
      userId: n,
      className: d.note,
      autoFocus: t === c.Tb.NOTE,
      onUpdate: () => u({
        action: "SET_NOTE"
      })
    })
  })
}