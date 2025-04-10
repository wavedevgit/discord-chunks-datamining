/** Chunk was on 51842 **/
n.d(t, {
  Z: () => l
});
var r = n(481060),
  o = n(40851),
  a = n(334877),
  i = n(981631);
let c = "guild-event-modal",
  l = () => {
    let e = (0, o.bp)() === i.IlC.POPOUT ? r.u1M : r.z1l;
    return {
      modalKey: c,
      contextKey: e,
      onCloseRequest: () => {
        a.l.getState().canCloseModal && (0, r.Mr3)(c, e)
      }
    }
  }