/** Chunk was on web.js **/
/** chunk id: 683412, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./747238.js"), require("./733351.js");
var Chunk280230 = require("./280230.js"),
  i = require.n(Chunk280230);
let a = /\n$/,
  s = /^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/,
  o = {
    order: i().defaultRules.heading.order,
    requiredFirstCharacters: ["-"],
    match: (e, t, n) => null == n || "" === n || null != n.match(a) ? (0, r.anyScopeRegex)(s)(e, t, n) : null,
    parse: function(e, t, n) {
      return {
        content: (0, r.parseInline)(t, e[1].trim(), n)
      }
    }
  }