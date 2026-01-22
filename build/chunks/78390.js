/** Chunk was on web.js **/
/** chunk id: 78390, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => a,
  f: () => s
});
var Chunk317525 = require("./317525.js"),
  Chunk985018 = require("./985018.jsx");
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
  s = (e, t, n) => {
    if ("linked-roles" === e) {
      var i;
      if (null == n) return null;
      let e = r.A.getRole(n, t);
      return null == e || (null == (i = e.tags) ? true : i.guild_connections) !== null ? null : e.name
    }
    return null
  }