/** Chunk was on 90783 **/
n.d(t, {
  Z: () => l
});
var o = n(481060),
  r = n(40851),
  a = n(334877),
  i = n(981631);
let c = "guild-event-modal",
  l = () => {
    let e = (0, r.bp)() === i.IlC.POPOUT ? o.u1M : o.z1l;
    return {
      modalKey: c,
      contextKey: e,
      onCloseRequest: () => {
        a.l.getState().canCloseModal && (0, o.Mr3)(c, e)
      }
    }
  }