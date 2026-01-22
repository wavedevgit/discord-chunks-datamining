/** Chunk was on web.js **/
/** chunk id: 549200, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk936388 = require("./936388.js"),
  Chunk714763 = require("./714763.js"),
  Chunk814278 = require("./814278.js"),
  Chunk871930 = require("./871930.jsx"),
  Chunk578746 = require("./578746.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");

function f() {
  let e = (0, i.bG)([s.A], () => s.A.getPersistentCodesEnabled());
  return (0, r.jsx)(l.h, {
    setting: u.H.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES,
    children: (0, r.jsx)(c.Ay, {
      value: e,
      onChange: a.A.updatePersistentCodesEnabled,
      title: d.intl.string(d.t["opi/XK"]),
      note: d.intl.format(d.t["/T+ZlP"], {
        helpArticle: (0, o.Lu)()
      })
    })
  })
}