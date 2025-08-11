/** Chunk was on 34779 **/
/** chunk id: 334426, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => l
});
var Chunk97519 = require("./97519.js"),
  Chunk731965 = require("./731965.js");
let l = (0, Chunk97519.U)((e, t) => ({
  hasNoUnreads: false,
  shouldHide: () => !t().hasNoUnreads,
  setInboxReadState: n => {
    n !== t().hasNoUnreads && (0, i.j)(() => {
      e({
        hasNoUnreads: n
      })
    })
  }
}))