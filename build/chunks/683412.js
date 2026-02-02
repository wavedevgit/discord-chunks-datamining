/** Chunk was on web.js **/
/** chunk id: 683412, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./747238.js"), require("./733351.js");
var Chunk791332 = require("./791332.js"),
  i = require.n(Chunk791332);
let a = /\n$/,
  o = /^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/,
  s = {
    order: i().defaultRules.heading.order,
    requiredFirstCharacters: ["-"],
    match: (e, t, n) => null == n || "" === n || null != n.match(a) ? (0, r.anyScopeRegex)(o)(e, t, n) : null,
    parse: function(e, t, n) {
      return {
        content: (0, r.parseInline)(t, e[1].trim(), n)
      }
    }
  }