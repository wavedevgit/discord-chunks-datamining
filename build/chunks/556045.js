/** Chunk was on 49941 **/
/** chunk id: 556045, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk314897 = require("./314897.js"),
  Chunk621853 = require("./621853.js"),
  Chunk86419 = require("./86419.js");

function s(e) {
  let [t, n] = r.useState(false), s = e.type, c = (0, i.e7)([l.default, a.Z], () => {
    var e;
    let t = l.default.getId();
    if (null == t) returnfalse;
    let n = a.Z.getUserProfile(t);
    return (null != (e = null == n ? true : n.widgets) ? e : []).some(e => e.type === s)
  }), u = (0, o.kQ)(e);
  return {
    shouldShowSuggestions: !c && !t && !u,
    handleDismissSuggestions: r.useCallback(() => {
      n(true)
    }, [])
  }
}