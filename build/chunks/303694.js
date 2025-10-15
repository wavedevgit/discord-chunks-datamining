/** Chunk was on web.js **/
/** chunk id: 303694, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => o,
  l: () => a
});
var Chunk485386 = require("./485386.js"),
  Chunk388032 = require("./388032.jsx");
let a = e => {
    switch (e) {
      case "home":
      case "guide":
        return i.intl.string(i.t.VbpLyU);
      case "browse":
        return i.intl.string(i.t.et6wav);
      case "customize":
        return i.intl.string(i.t.h9mGOP);
      case "linked-roles":
        return i.intl.string(i.t.ghtnss)
    }
    return null
  },
  o = (e, t, n) => {
    if ("linked-roles" === e) {
      var i;
      if (null == n) return null;
      let e = r.Z.getRole(n, t);
      return null == e || (null == (i = e.tags) ? true : i.guild_connections) !== null ? null : e.name
    }
    return null
  }