/** Chunk was on 59104 **/
t.d(a, {
  Z: () => l
});
var n = t(481060),
  r = t(40851),
  o = t(334877),
  c = t(981631);
let i = "guild-event-modal",
  l = () => {
    let e = (0, r.bp)() === c.IlC.POPOUT ? n.u1M : n.z1l;
    return {
      modalKey: i,
      contextKey: e,
      onCloseRequest: () => {
        o.l.getState().canCloseModal && (0, n.Mr3)(i, e)
      }
    }
  }