/** Chunk was on web.js **/
/** chunk id: 230341, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk90641 = require("./90641.js"),
  Chunk615830 = require("./615830.js"),
  Chunk630759 = require("./630759.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk51331 = require("./51331.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function f() {
  let e = (0, Chunk442837.e7)([Chunk615830.Z], () => Chunk615830.Z.getPersistentCodesEnabled());
  return (0, Chunk54381.jsx)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES,
    children: (0, Chunk54381.jsx)(Chunk51331.ZP, {
      value: module,
      onChange: Chunk90641.Z.updatePersistentCodesEnabled,
      title: Chunk388032.intl.string(Chunk388032.t["opi/XK"]),
      note: Chunk388032.intl.format(Chunk388032.t["/T+ZlP"], {
        helpArticle: (0, Chunk630759.aZ)()
      })
    })
  })
}