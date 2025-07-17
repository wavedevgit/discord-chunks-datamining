/** Chunk was on 84595 **/
n.d(t, {
  Z: () => c
});
var a = n(481060),
  i = n(40851),
  o = n(334877),
  r = n(981631);
let l = "guild-event-modal",
  c = () => {
    let e = (0, i.bp)() === r.IlC.POPOUT ? a.u1M : a.z1l;
    return {
      modalKey: l,
      contextKey: e,
      onCloseRequest: () => {
        o.l.getState().canCloseModal && (0, a.Mr3)(l, e)
      }
    }
  }