/** Chunk was on 87918 **/
n.d(t, {
  Z: () => u
});
var i = n(481060),
  l = n(40851),
  a = n(334877),
  r = n(981631);
let o = "guild-event-modal",
  u = () => {
    let e = (0, l.bp)() === r.IlC.POPOUT ? i.u1M : i.z1l;
    return {
      modalKey: o,
      contextKey: e,
      onCloseRequest: () => {
        a.l.getState().canCloseModal && (0, i.Mr3)(o, e)
      }
    }
  }