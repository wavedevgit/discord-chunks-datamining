/** Chunk was on 75909 **/
/** chunk id: 684245, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => c
});
var Chunk473749 = require("./473749.js"),
  Chunk63063 = require("./63063.js"),
  Chunk509212 = require("./509212.js"),
  Chunk939389 = require("./939389.js"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  let {
    quest: t,
    onClose: n,
    sourceQuestContent: c,
    impressionId: u
  } = e;
  return r.useCallback(async (e, r) => {
    if (t.id === a.V6) return void window.open(o.Z.getArticleURL(s.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
    if (null != n) {
      let e = (0, l.zo)(t.config);
      await (0, i.PW)(e) && n()
    }(0, l.nc)(t, {
      content: e,
      ctaContent: r,
      impressionId: u,
      sourceQuestContent: c
    })
  }, [t, n, c, u])
}