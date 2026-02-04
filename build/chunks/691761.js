/** Chunk was on 71447 **/
/** chunk id: 691761, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => o
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk429913 = require("./429913.js"),
  Chunk290863 = require("./290863.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  var t;
  let n = (0, i.bG)([l.A], () => {
    var t;
    if (null != e) return null != (t = function(e) {
      for (let t of e)
        if (t.type === a.$pd.PLAYING && null != t.application_id) return t.application_id;
      return null
    }(l.A.getActivities(e))) ? t : true
  }, [e]);
  return null != (t = (0, r.h)(n)) ? t : true
}