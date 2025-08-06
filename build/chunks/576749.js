/** Chunk was on 80193 **/
t.d(n, {
  Z: () => _
});
var i = t(481060),
  o = t(40851),
  c = t(334877),
  a = t(981631);
let r = "guild-event-modal",
  _ = () => {
    let e = (0, o.bp)() === a.IlC.POPOUT ? i.u1M : i.z1l;
    return {
      modalKey: r,
      contextKey: e,
      onCloseRequest: () => {
        c.l.getState().canCloseModal && (0, i.Mr3)(r, e)
      }
    }
  }