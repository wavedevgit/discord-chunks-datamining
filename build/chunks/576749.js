/** Chunk was on 44612 **/
n.d(t, {
  Z: () => c
});
var r = n(481060),
  a = n(40851),
  o = n(334877),
  i = n(981631);
let l = "guild-event-modal",
  c = () => {
    let e = (0, a.bp)() === i.IlC.POPOUT ? r.u1M : r.z1l;
    return {
      modalKey: l,
      contextKey: e,
      onCloseRequest: () => {
        o.l.getState().canCloseModal && (0, r.Mr3)(l, e)
      }
    }
  }