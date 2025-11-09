/** Chunk was on 94709 **/
/** chunk id: 334426, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => l
});
var Chunk191336 = require("./191336.js"),
  Chunk731965 = require("./731965.js");
let l = (0, Chunk191336.U)((e, t) => ({
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