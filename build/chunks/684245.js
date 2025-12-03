/** Chunk was on 75909 **/
/** chunk id: 684245, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk63063 = require("./63063.js"),
  Chunk304696 = require("./304696.js"),
  Chunk387745 = require("./387745.js"),
  Chunk939389 = require("./939389.js"),
  Chunk324805 = require("./324805.js"),
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
      let e = (0, l.zo)(t.config);
      await (0, a.PW)(e) && n()
    }(0, i.nc)(t, {
      content: e,
      ctaContent: r,
      impressionId: d,
      sourceQuestContent: u
    })
  }, [t, n, u, d])
}