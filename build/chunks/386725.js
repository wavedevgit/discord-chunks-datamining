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
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, u = (0, Chunk181430.Y)({
    location: "useDisplayNameStyles"
  }), d = (0, Chunk442837.e7)([Chunk594174.default], () => null != exports ? Chunk594174.default.getUser(exports) : Chunk594174.default.getCurrentUser()), f = (0, Chunk473749.useContext)(Chunk372900.Z);
  null == require && (n = f);
  let p = (0, Chunk442837.e7)([Chunk271383.ZP], () => null != require && null != d ? Chunk271383.ZP.getMember(require, d.id) : null);
  return u ? true !== c ? null === c && null != require ? null == d ? true : d.displayNameStyles : c : null != (e = null == p ? true : p.displayNameStyles) ? module : null == d ? true : d.displayNameStyles : null
}