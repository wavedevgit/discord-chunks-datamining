/** Chunk was on 47793 **/
/** chunk id: 556045, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => c
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk621853 = require("./621853.js"),
  Chunk86419 = require("./86419.js");

function c(e) {
  let [t, n] = r.useState(false), c = e.type, s = (0, i.e7)([a.default, l.Z], () => {
    var e;
    let t = a.default.getId();
    if (null == t) returnfalse;
    let n = l.Z.getUserProfile(t);
    return (null != (e = null == n ? true : n.widgets) ? e : []).some(e => e.type === c)
  }), u = (0, o.kQ)(e);
  return {
    shouldShowSuggestions: !s && !t && !u,
    handleDismissSuggestions: r.useCallback(() => {
      n(true)
    }, [])
  }
}