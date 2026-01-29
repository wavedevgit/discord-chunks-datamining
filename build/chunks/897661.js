/** Chunk was on 15682 **/
/** chunk id: 897661, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  b: () => i
});
var Chunk311907 = require("./311907.js"),
  Chunk833336 = require("./833336.js"),
  Chunk836602 = require("./836602.js"),
  Chunk696451 = require("./696451.js"),
  Chunk427262 = require("./427262.js");

function i(e, t) {
  var l, i;
  let c = null != (l = o.Ay.useName(e)) ? l : "",
    d = null != (i = (0, n.bG)([r.A, s.A, a.Ay], () => {
      if (null != t) {
        var l;
        return null != (l = r.A.getPendingNickname()) ? l : a.Ay.getNick(t, null == e ? true : e.id)
      }
      return s.A.getPendingChanges().pendingGlobalName
    }, [t, e])) ? i : c;
  return null != d ? d : c
}