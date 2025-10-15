/** Chunk was on web.js **/
/** chunk id: 760729, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => o
}), require("./35282.js");
var Chunk381129 = require("./381129.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let o = [{
  check(e, t, n) {
    if (!n || null == t.getGuildId()) returnfalse;
    let i = r.Z.extractEveryoneRole(e, t);
    if (null == i || !r.Z.shouldShowEveryoneGuard(i, t)) returnfalse;
    let o = r.Z.everyoneMemberCount(i, t),
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
    dark: () => require.e("83323").then(require.t.bind(require, 510465, 19)),
    light: () => require.e("36052").then(require.t.bind(require, 570227, 19))
  }
}, {
  check: e => !!i.Jn9.test(e) && {
    body: a.intl.string(a.t.sTwS1a)
  },
  analyticsType: "API Token Warning"
}]