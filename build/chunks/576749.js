/** Chunk was on 43730 **/
n.d(t, {
  Z: () => c
});
var a = n(481060),
  i = n(40851),
  r = n(334877),
  l = n(981631);
let o = "guild-event-modal",
  c = () => {
    let e = (0, i.bp)() === l.IlC.POPOUT ? a.u1M : a.z1l;
    return {
      modalKey: o,
      contextKey: e,
      onCloseRequest: () => {
        r.l.getState().canCloseModal && (0, a.Mr3)(o, e)
      }
    }
  }