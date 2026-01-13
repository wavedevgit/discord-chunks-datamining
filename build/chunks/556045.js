/** Chunk was on 90882 **/
/** chunk id: 556045, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk621853 = require("./621853.js"),
  Chunk86419 = require("./86419.js");

function c(e) {
  let [t, n] = r.useState(false), c = e.type, s = (0, i.e7)([l.default, a.Z], () => {
    var e;
    let t = l.default.getId();
    if (null == t) returnfalse;
    let n = a.Z.getUserProfile(t);
    return (null != (e = null == n ? true : n.widgets) ? e : []).some(e => e.type === c)
  }), u = (0, o.kQ)(e);
  return {
    shouldShowSuggestions: !s && !t && !u,
    handleDismissSuggestions: r.useCallback(() => {
      n(true)
    }, [])
  }
}