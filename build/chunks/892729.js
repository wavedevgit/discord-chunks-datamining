/** Chunk was on 75708 **/
/** chunk id: 892729, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk355467 = require("./355467.js"),
  Chunk78839 = require("./78839.js"),
  Chunk261744 = require("./261744.js"),
  Chunk293810 = require("./293810.js");
let c = [];

function d() {
  let {
    ensureFresh: e = false
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, t = (0, Chunk261744.Z)() === Chunk293810.PY.SUBSCRIBED, n = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getActiveGuildSubscriptions()), d = Chunk73800.useRef(false);
  return Chunk73800.useEffect(() => {
    (function(e) {
      var t;
      let {
        ensureFresh: n,
        hasFetched: i,
        hasRoleSubscriptions: r
      } = e, s = a.Z.getActiveGuildSubscriptions();
      return (null != (t = null == s ? true : s.length) ? t : 0) === 0 && !!r || !!n && !i || !i && !a.Z.hasFetchedSubscriptions()
    })({
      ensureFresh: module,
      hasRoleSubscriptions: exports,
      hasFetched: d.current
    }) && (d.current = true, Chunk355467.jg())
  }, [module, exports]), null != require ? require : c
}