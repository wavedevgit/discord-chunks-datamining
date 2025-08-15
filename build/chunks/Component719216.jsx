/** Chunk was on 96750 **/
/** chunk id: 719216, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk763472 = require("./763472.js"),
  Chunk49012 = require("./49012.js"),
  Chunk591759 = require("./591759.js"),
  Chunk915863 = require("./915863.jsx");

function s(e) {
  let {
    activity: t,
    color: n,
    user: s,
    look: c,
    onAction: u
  } = e;
  if ((null == t ? true : t.buttons) == null || t.buttons.length < 1) return null;
  async function d(e, t, n) {
    try {
      let r = await (0, i.sd)(e, t);
      if (r.button_urls.length <= n) return;
      let o = r.button_urls[n];
      if ("string" != typeof o) return;
      let s = a.Z.safeParseWithQuery(o);
      if (null == s || null == s.protocol || null == s.hostname) return;
      (0, l.q)({
        href: a.Z.format(s),
        trusted: false
      })
    } catch (e) {}
  }
  return (0, r.jsx)(r.Fragment, {
    children: t.buttons.map((e, i) => (0, r.jsx)(o.Z, {
      color: n,
      look: c,
      onClick: () => {
        null == u || u(), d(t, s.id, i)
      },
      children: e
    }, "customButton-".concat(i)))
  })
}