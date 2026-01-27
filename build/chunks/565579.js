/** Chunk was on web.js **/
/** chunk id: 565579, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => o
}), require("./747238.js");
var Chunk76522 = require("./76522.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let o = [{
  check(e, t, n) {
    if (!n || null == t.getGuildId()) returnfalse;
    let i = r.A.extractEveryoneRole(e, t);
    if (null == i || !r.A.shouldShowEveryoneGuard(i, t)) returnfalse;
    let o = r.A.everyoneMemberCount(i, t),
      s = Math.pow(10, Math.floor(Math.log10(o))),
      l = a.t["47E5Rz"];
    return t.isForumPost() ? l = a.t.sYW2cy : t.isThread() && (l = a.t["2YaiQ1"]), {
      body: a.intl.formatToPlainString(l, {
        role: i,
        count: (Math.trunc(o / s) * s).toLocaleString()
      }),
      footer: a.intl.string(a.t.mVyrtu)
    }
  },
  analyticsType: "@Everyone Warning",
  animation: {
    dark: () => n.e("80467").then(n.t.bind(n, 661022, 19)),
    light: () => n.e("92705").then(n.t.bind(n, 111992, 19))
  }
}, {
  check: e => !!i.AKn.test(e) && {
    body: a.intl.string(a.t.sTwS1a)
  },
  analyticsType: "API Token Warning"
}]