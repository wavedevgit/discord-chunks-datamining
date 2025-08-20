/** Chunk was on web.js **/
/** chunk id: 780985, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => l,
  c: () => s
});
var Chunk399606 = require("./399606.js"),
  Chunk594174 = require("./594174.js"),
  Chunk914788 = require("./914788.js"),
  Chunk880257 = require("./880257.js");
let s = () => {
    let e = (0, Chunk880257.Z)();
    return (0, Chunk399606.e7)([Chunk914788.Z, Chunk594174.default], () => {
      if (!module) return Chunk594174.default.getCurrentUser();
      let t = Chunk914788.Z.getSelectedTeenId();
      if (null !== exports) return Chunk594174.default.getUser(exports)
    })
  },
  l = e => (0, r.e7)([i.default], () => {
    let t = i.default.getUser(e);
    if (null != t) return t
  })