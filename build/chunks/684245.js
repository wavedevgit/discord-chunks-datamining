/** Chunk was on 75909 **/
/** chunk id: 684245, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => u
});
var Chunk647438 = require("./647438.js"),
  Chunk63063 = require("./63063.js"),
  Chunk509212 = require("./509212.js"),
  Chunk566078 = require("./566078.js"),
  Chunk939389 = require("./939389.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  let {
    quest: t,
    onClose: n,
    sourceQuestContent: u,
    impressionId: d
  } = e;
  return r.useCallback(async (e, r) => {
    if (t.id === s.V6) return void window.open(o.Z.getArticleURL(c.BhN.VIRTUAL_CURRENCY_LEARN_MORE));
    if (null != n) {
      let e = i.r.build(t.config).ctaLink;
      await (0, a.PW)(e) && n()
    }(0, l.nc)(t, {
      content: e,
      ctaContent: r,
      impressionId: d,
      sourceQuestContent: u
    })
  }, [t, n, u, d])
}