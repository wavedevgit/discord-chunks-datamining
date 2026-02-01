/** Chunk was on 9207 **/
/** chunk id: 590632, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk384904 = require("./384904.js"),
  Chunk166403 = require("./166403.js"),
  Chunk244287 = require("./244287.js"),
  Chunk2242 = require("./2242.js");
let c = [];

function d() {
  let {
    ensureFresh: e = false
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, t = (0, a.A)() === o.M_.SUBSCRIBED, n = (0, i.bG)([s.A], () => s.A.getActiveGuildSubscriptions()), d = r.useRef(false);
  return r.useEffect(() => {
    (function(e) {
      var t;
      let {
        ensureFresh: n,
        hasFetched: r,
        hasRoleSubscriptions: i
      } = e, l = s.A.getActiveGuildSubscriptions();
      return (null != (t = null == l ? true : l.length) ? t : 0) === 0 && !!i || !!n && !r || !r && !s.A.hasFetchedSubscriptions()
    })({
      ensureFresh: e,
      hasRoleSubscriptions: t,
      hasFetched: d.current
    }) && (d.current = true, l.hP())
  }, [e, t]), null != n ? n : c
}