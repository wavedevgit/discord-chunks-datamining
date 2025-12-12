/** Chunk was on web.js **/
/** chunk id: 892729, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk355467 = require("./355467.js"),
  Chunk78839 = require("./78839.js"),
  Chunk261744 = require("./261744.js"),
  Chunk293810 = require("./293810.js");
let c = [];

function u(e) {
  var t;
  let {
    ensureFresh: n,
    hasFetched: r,
    hasRoleSubscriptions: i
  } = e, o = a.Z.getActiveGuildSubscriptions();
  return (null != (t = null == o ? true : o.length) ? t : 0) === 0 && !!i || !!n && !r || !r && !a.Z.hasFetchedSubscriptions()
}

function d() {
  let {
    ensureFresh: e = false
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, t = (0, Chunk261744.Z)() === Chunk293810.PY.SUBSCRIBED, n = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getActiveGuildSubscriptions()), d = Chunk473749.useRef(false);
  return Chunk473749.useEffect(() => {
    u({
      ensureFresh: module,
      hasRoleSubscriptions: exports,
      hasFetched: d.current
    }) && (d.current = true, Chunk355467.jg())
  }, [module, exports]), null != require ? require : c
}