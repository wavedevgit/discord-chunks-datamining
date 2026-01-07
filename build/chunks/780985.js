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
    let e = (0, s.Z)();
    return (0, r.e7)([o.Z, i.default], () => {
      if (!e) return i.default.getCurrentUser();
      let t = o.Z.getSelectedTeenId();
      if (null !== t) return i.default.getUser(t)
    })
  },
  c = e => (0, r.e7)([i.default], () => {
    let t = i.default.getUser(e);
    if (null != t) return t
  }),
  u = () => {
    let e = o.Z.getSelectedTeenId(),
      {
        hasLoadedSettings: t,
        isLoading: n
      } = (0, r.cj)([a.Z], () => ({
        hasLoadedSettings: null != e && a.Z.hasSettingsForUser(e),
        isLoading: a.Z.isLoading
      }));
    return null !== e && !t && !n
  }