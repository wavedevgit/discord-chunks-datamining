/** Chunk was on web.js **/
/** chunk id: 945884, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./35282.js"), require("./781311.js");
var Chunk159635 = require("./159635.js"),
  i = require.n(Chunk159635);
let o = /\n$/,
  a = /^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/,
  s = {
    order: i().defaultRules.heading.order,
    requiredFirstCharacters: ["-"],
    match: (e, t, n) => null == n || "" === n || null != n.match(o) ? (0, r.anyScopeRegex)(a)(e, t, n) : null,
    parse: function(e, t, n) {
      return {
        content: (0, r.parseInline)(t, e[1].trim(), n)
      }
    }
  }