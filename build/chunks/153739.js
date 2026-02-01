/** Chunk was on 9207 **/
/** chunk id: 153739, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F7: () => c,
  tl: () => d,
  y3: () => o
});
var Chunk417597 = require("./417597.js"),
  Chunk287809 = require("./287809.js"),
  Chunk842144 = require("./842144.js"),
  Chunk695515 = require("./695515.js"),
  Chunk438732 = require("./438732.js");
let o = () => {
    let e = (0, a.A)();
    return (0, r.bG)([s.A, i.default], () => {
      if (true !== e) return i.default.getCurrentUser();
      let t = s.A.getSelectedTeenId();
      if (null !== t) return i.default.getUser(t)
    })
  },
  c = e => (0, r.bG)([i.default], () => {
    let t = i.default.getUser(e);
    if (null != t) return t
  }),
  d = () => {
    let e = s.A.getSelectedTeenId(),
      {
        hasLoadedSettings: t,
        isLoading: n
      } = (0, r.cf)([l.A], () => ({
        hasLoadedSettings: null != e && l.A.hasSettingsForUser(e),
        isLoading: l.A.isLoading
      }));
    return null !== e && !t && !n
  }