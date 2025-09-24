/** Chunk was on 51727 **/
/** chunk id: 334426, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => l
});
var Chunk879690 = require("./879690.js"),
  Chunk731965 = require("./731965.js");
let l = (0, Chunk879690.U)((e, t) => ({
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