/** Chunk was on web.js **/
/** chunk id: 292814, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk63063 = require("./63063.js"),
  Chunk81866 = require("./81866.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  let {
    userId: t,
    renderApplicationName: n
  } = e, l = (0, a.Z)(t);
  return r.useMemo(() => null != l ? s.intl.format(s.t.rSUACb, {
    helpdeskArticle: i.Z.getArticleURL(o.BhN.SLAYER_PROVISIONAL_ACCOUNTS),
    applicationName: () => n(l)
  }) : s.intl.format(s.t["q+N8L6"], {
    helpdeskArticle: i.Z.getArticleURL(o.BhN.SLAYER_PROVISIONAL_ACCOUNTS)
  }), [l, n])
}