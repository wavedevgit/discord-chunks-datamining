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
  let e = (0, i.e7)([o.Z], () => o.Z.getPersistentCodesEnabled());
  return (0, r.jsx)(l.U, {
    setting: u.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES,
    children: (0, r.jsx)(c.ZP, {
      value: e,
      onChange: a.Z.updatePersistentCodesEnabled,
      title: d.intl.string(d.t["opi/XK"]),
      note: d.intl.format(d.t["/T+ZlP"], {
        helpArticle: (0, s.aZ)()
      })
    })
  })
}