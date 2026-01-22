/** Chunk was on web.js **/
/** chunk id: 153739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F7: () => c,
  tl: () => u,
  y3: () => l
});
var Chunk417597 = require("./417597.js"),
  Chunk287809 = require("./287809.js"),
  Chunk842144 = require("./842144.js"),
  Chunk695515 = require("./695515.js"),
  Chunk945276 = require("./945276.js");
let l = () => {
    let e = (0, o.A)();
    return (0, r.bG)([s.A, i.default], () => {
      if (!e) return i.default.getCurrentUser();
      let t = s.A.getSelectedTeenId();
      if (null !== t) return i.default.getUser(t)
    })
  },
  c = e => (0, r.bG)([i.default], () => {
    let t = i.default.getUser(e);
    if (null != t) return t
  }),
  u = () => {
    let e = s.A.getSelectedTeenId(),
      {
        hasLoadedSettings: t,
        isLoading: n
      } = (0, r.cf)([a.A], () => ({
        hasLoadedSettings: null != e && a.A.hasSettingsForUser(e),
        isLoading: a.A.isLoading
      }));
    return null !== e && !t && !n
  }