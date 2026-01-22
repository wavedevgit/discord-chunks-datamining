/** Chunk was on 23628 **/
/** chunk id: 583235, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk975571 = require("./975571.js"),
  Chunk651892 = require("./651892.js"),
  Chunk901406 = require("./901406.js"),
  Chunk457775 = require("./457775.js"),
  Chunk654487 = require("./654487.js"),
  Chunk652215 = require("./652215.js");

function u(e) {
  let {
    quest: t,
    onClose: n,
    sourceQuestContent: u,
    impressionId: d
  } = e;
  return r.useCallback(async (e, r) => {
    if (t.id === a.Fw) return void window.open(l.A.getArticleURL(c.MVz.VIRTUAL_CURRENCY_LEARN_MORE));
    if (null != n) {
      let e = (0, o.Jx)(t.config);
      await (0, s.f7)(e) && n()
    }(0, i.pu)(t, {
      content: e,
      ctaContent: r,
      impressionId: d,
      sourceQuestContent: u
    })
  }, [t, n, u, d])
}