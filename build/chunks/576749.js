/** Chunk was on 27434 **/
n.d(t, {
  Z: () => a
});
var r = n(481060),
  l = n(40851),
  i = n(334877),
  o = n(981631);
let c = "guild-event-modal",
  a = () => {
    let e = (0, l.bp)() === o.IlC.POPOUT ? r.u1M : r.z1l;
    return {
      modalKey: c,
      contextKey: e,
      onCloseRequest: () => {
        i.l.getState().canCloseModal && (0, r.Mr3)(c, e)
      }
    }
  }