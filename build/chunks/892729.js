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
  } = e, a = o.Z.getActiveGuildSubscriptions();
  return (null != (t = null == a ? true : a.length) ? t : 0) === 0 && !!i || !!n && !r || !r && !o.Z.hasFetchedSubscriptions()
}

function d() {
  let {
    ensureFresh: e = false
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, t = (0, s.Z)() === l.PY.SUBSCRIBED, n = (0, i.e7)([o.Z], () => o.Z.getActiveGuildSubscriptions()), d = r.useRef(false);
  return r.useEffect(() => {
    u({
      ensureFresh: e,
      hasRoleSubscriptions: t,
      hasFetched: d.current
    }) && (d.current = true, a.jg())
  }, [e, t]), null != n ? n : c
}