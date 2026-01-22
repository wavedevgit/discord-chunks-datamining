/** Chunk was on web.js **/
/** chunk id: 609425, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk386467 = require("./386467.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk824994 = require("./824994.js");

function c() {
  var e;
  let {
    userId: t,
    guildId: n,
    pendingDisplayNameStyles: c
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, u = (0, l.W)({
    location: "useDisplayNameStyles"
  }), d = (0, i.bG)([o.default], () => null != t ? o.default.getUser(t) : o.default.getCurrentUser()), f = (0, r.useContext)(a.A);
  null == n && (n = f);
  let p = (0, i.bG)([s.Ay], () => null != n && null != d ? s.Ay.getMember(n, d.id) : null);
  return u ? true !== c ? null === c && null != n ? null == d ? true : d.displayNameStyles : c : null != (e = null == p ? true : p.displayNameStyles) ? e : null == d ? true : d.displayNameStyles : null
}