/** Chunk was on 47284 **/
a.d(t, {
  Z: () => l
});
var n = a(481060),
  i = a(40851),
  o = a(334877),
  r = a(981631);
let c = "guild-event-modal",
  l = () => {
    let e = (0, i.bp)() === r.IlC.POPOUT ? n.u1M : n.z1l;
    return {
      modalKey: c,
      contextKey: e,
      onCloseRequest: () => {
        o.l.getState().canCloseModal && (0, n.Mr3)(c, e)
      }
    }
  }