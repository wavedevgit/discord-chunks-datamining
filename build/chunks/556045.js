/** Chunk was on 27069 **/
/** chunk id: 556045, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  h: () => c
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk621853 = require("./621853.js"),
  Chunk86419 = require("./86419.js");

function c(e) {
  let [t, r] = n.useState(false), c = e.type, s = (0, i.e7)([l.default, a.Z], () => {
    var e;
    let t = l.default.getId();
    if (null == t) returnfalse;
    let r = a.Z.getUserProfile(t);
    return (null != (e = null == r ? true : r.widgets) ? e : []).some(e => e.type === c)
  }), u = (0, o.kQ)(e);
  return {
    shouldShowSuggestions: !s && !t && !u,
    handleDismissSuggestions: n.useCallback(() => {
      r(true)
    }, [])
  }
}