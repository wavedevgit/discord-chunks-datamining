/** Chunk was on 59569 **/
/** chunk id: 483558, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk961350 = require("./961350.js"),
  Chunk622543 = require("./622543.js"),
  Chunk735321 = require("./735321.js");

function s(e) {
  let [t, n] = r.useState(false), s = e.type, c = (0, l.bG)([i.default, a.A], () => {
    var e;
    let t = i.default.getId();
    if (null == t) returnfalse;
    let n = a.A.getUserProfile(t);
    return (null != (e = null == n ? true : n.widgets) ? e : []).some(e => e.type === s)
  }), u = (0, o.uA)(e);
  return {
    shouldShowSuggestions: !c && !t && !u,
    handleDismissSuggestions: r.useCallback(() => {
      n(true)
    }, [])
  }
}