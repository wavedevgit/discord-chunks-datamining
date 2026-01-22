/** Chunk was on web.js **/
/** chunk id: 906547, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk975571 = require("./975571.js"),
  Chunk633057 = require("./633057.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function l(e) {
  let {
    userId: t,
    renderApplicationName: n
  } = e, l = (0, a.A)(t);
  return r.useMemo(() => null != l ? o.intl.format(o.t.rSUACb, {
    helpdeskArticle: i.A.getArticleURL(s.MVz.SLAYER_PROVISIONAL_ACCOUNTS),
    applicationName: () => n(l)
  }) : o.intl.format(o.t["q+N8L6"], {
    helpdeskArticle: i.A.getArticleURL(s.MVz.SLAYER_PROVISIONAL_ACCOUNTS)
  }), [l, n])
}