/** Chunk was on 9753 **/
/** chunk id: 179499, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk871109 = require("./871109.js"),
  Chunk666171 = require("./666171.js"),
  Chunk960427 = require("./960427.jsx"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  var t, n;
  let {
    guildId: i,
    productId: p
  } = e, m = (0, a.bG)([o.A], () => o.A.getGuildProduct(p)), {
    isLoading: f,
    downloadAttachment: g
  } = (0, c.A)(i, p), _ = r.useCallback(() => {
    var e, t;
    let n = null == m || null == (t = m.attachments) || null == (e = t[0]) ? true : e.id;
    l()(null != n, "No attachment"), g(n)
  }, [g, null == m ? true : m.attachments]), h = r.useCallback(() => u.A.open({
    guildId: i,
    productId: p
  }), [i, p]);
  return (null != (t = null == m || null == (n = m.attachments) ? true : n.length) ? t : 0) > 1 ? {
    variant: "primary",
    text: d.intl.string(d.t.UyuiUE),
    icon: s.KS6,
    iconPosition: "end",
    onClick: h
  } : {
    variant: "primary",
    text: d.intl.string(d.t.t9bE9b),
    icon: s.s3U,
    iconPosition: "end",
    loading: f,
    onClick: _
  }
}