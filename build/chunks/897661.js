/** Chunk was on 15682 **/
/** chunk id: 897661, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  b: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk833336 = require("./833336.js"),
  Chunk696451 = require("./696451.js"),
  Chunk752319 = require("./752319.js"),
  Chunk427262 = require("./427262.js");

function o(e, t) {
  var l, o;
  let c = null != (l = i.Ay.useName(e)) ? l : "",
    d = null != (o = (0, n.bG)([a.A, r.A, s.Ay], () => {
      if (null != t) {
        var l;
        return null != (l = a.A.getPendingNickname()) ? l : s.Ay.getNick(t, null == e ? true : e.id)
      }
      return r.A.getPendingGlobalName()
    }, [t, e])) ? o : c;
  return null != d ? d : c
}