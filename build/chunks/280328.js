/** Chunk was on web.js **/
/** chunk id: 280328, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk261376 = require("./261376.js"),
  Chunk68985 = require("./68985.js"),
  Chunk428967 = require("./428967.js"),
  Chunk921944 = require("./921944.js");

function l(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    l = !n && null != e && !i.O.has(e);
  r.useEffect(() => () => {
    l && (a.Z.lastDCDismissed !== e || (0, o.fn)(e)) && t(s.L.AUTO_DISMISS, true)
  }, [l, t, e])
}