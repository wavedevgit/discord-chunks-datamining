/** Chunk was on 78625 **/
n.d(t, {
  Z: () => c
});
var o = n(481060),
  i = n(40851),
  a = n(334877),
  r = n(981631);
let l = "guild-event-modal",
  c = () => {
    let e = (0, i.bp)() === r.IlC.POPOUT ? o.u1M : o.z1l;
    return {
      modalKey: l,
      contextKey: e,
      onCloseRequest: () => {
        a.l.getState().canCloseModal && (0, o.Mr3)(l, e)
      }
    }
  }