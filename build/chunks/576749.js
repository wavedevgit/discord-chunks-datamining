/** Chunk was on 67826 **/
n.d(t, {
  Z: () => l
});
var a = n(481060),
  i = n(40851),
  o = n(334877),
  r = n(981631);
let c = "guild-event-modal",
  l = () => {
    let e = (0, i.bp)() === r.IlC.POPOUT ? a.u1M : a.z1l;
    return {
      modalKey: c,
      contextKey: e,
      onCloseRequest: () => {
        o.l.getState().canCloseModal && (0, a.Mr3)(c, e)
      }
    }
  }