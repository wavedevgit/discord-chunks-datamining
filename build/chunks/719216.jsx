/** Chunk was on web.js **/
/** chunk id: 719216, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk763472 = require("./763472.js"),
  Chunk49012 = require("./49012.js"),
  Chunk591759 = require("./591759.js"),
  Chunk915863 = require("./915863.js");

function l(e) {
  let {
    activity: t,
    color: n,
    user: l,
    look: c,
    onAction: u
  } = e;
  if ((null == t ? true : t.buttons) == null || t.buttons.length < 1) return null;
  async function d(e, t, n) {
    try {
      let r = await (0, i.sd)(e, t);
      if (r.button_urls.length <= n) return;
      let s = r.button_urls[n];
      if ("string" != typeof s) return;
      let l = a.Z.safeParseWithQuery(s);
      if (null == l || null == l.protocol || null == l.hostname) return;
      (0, o.q)({
        href: a.Z.format(l),
        trusted: false
      })
    } catch (e) {}
  }
  return <r.Fragment>{t.buttons.map((e, i) => (0, r.jsx)(s.Z, {
      color: n,
      look: c,
      onClick: () => {
        null == u || u(), d(t, l.id, i)
      },
      children: e
    }, "customButton-".concat(i)))}</r.Fragment>
}