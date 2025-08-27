/** Chunk was on web.js **/
/** chunk id: 780985, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $r: () => u,
  In: () => c,
  cz: () => l
});
var Chunk399606 = require("./399606.js"),
  Chunk594174 = require("./594174.js"),
  Chunk473007 = require("./473007.js"),
  Chunk914788 = require("./914788.js"),
  Chunk880257 = require("./880257.js");
let l = () => {
    let e = (0, Chunk880257.Z)();
    return (0, Chunk399606.e7)([Chunk914788.Z, Chunk594174.default], () => {
      if (!module) return Chunk594174.default.getCurrentUser();
      let t = Chunk914788.Z.getSelectedTeenId();
      if (null !== exports) return Chunk594174.default.getUser(exports)
    })
  },
  c = e => (0, r.e7)([i.default], () => {
    let t = i.default.getUser(e);
    if (null != t) return t
  }),
  u = () => {
    let e = Chunk914788.Z.getSelectedTeenId(),
      {
        hasLoadedSettings: t,
        isLoading: n
      } = (0, Chunk399606.cj)([Chunk473007.Z], () => ({
        hasLoadedSettings: null != module && Chunk473007.Z.hasSettingsForUser(module),
        isLoading: Chunk473007.Z.isLoading
      }));
    return null !== module && !exports && !require
  }