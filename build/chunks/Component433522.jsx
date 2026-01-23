/** Chunk was on 47841 **/
/** chunk id: 433522, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk555337 = require("./555337.js"),
  Chunk447696 = require("./447696.js"),
  Chunk861410 = require("./861410.js"),
  Chunk985018 = require("./985018.jsx");
let d = () => {
  let {
    guild: e
  } = (0, i.bG)([s.A], () => s.A.getProps()), {
    submitting: t,
    welcomeSettings: n
  } = (0, i.bG)([o.A], () => o.A.getSettingsProps());
  return null == e ? null : (0, r.jsx)(l.A, {
    onSave: () => (0, a.i4)(e.id, n),
    onReset: a.oZ,
    submitting: t,
    onSaveText: c.intl.string(c.t["7NqTJn"]),
    message: c.intl.string(c.t["Z0/Wme"])
  })
}