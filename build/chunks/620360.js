/** Chunk was on 1272 (71bced4ddae32ad3.js) **/
n.d(t, {
  Z: () => l
});
var r = n(570140),
  i = n(211644);
let l = {
  init() {
    r.Z.subscribe("CONNECTION_OPEN", () => {
      (0, i.mc)()
    }), r.Z.subscribe("LOGOUT", () => {
      (0, i.mc)()
    })
  }
}