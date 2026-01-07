/** Chunk was on web.js **/
/** chunk id: 386725, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk372900 = require("./372900.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk181430 = require("./181430.js");

function c() {
  var e;
  let {
    userId: t,
    guildId: n,
    pendingDisplayNameStyles: c
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, u = (0, l.Y)({
    location: "useDisplayNameStyles"
  }), d = (0, i.e7)([s.default], () => null != t ? s.default.getUser(t) : s.default.getCurrentUser()), f = (0, r.useContext)(a.Z);
  null == n && (n = f);
  let p = (0, i.e7)([o.ZP], () => null != n && null != d ? o.ZP.getMember(n, d.id) : null);
  return u ? true !== c ? null === c && null != n ? null == d ? true : d.displayNameStyles : c : null != (e = null == p ? true : p.displayNameStyles) ? e : null == d ? true : d.displayNameStyles : null
}