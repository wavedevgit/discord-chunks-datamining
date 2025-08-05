/** Chunk was on 78036 **/
t.d(e, {
  Z: () => _
});
var i = t(481060),
  o = t(40851),
  c = t(334877),
  r = t(981631);
let a = "guild-event-modal",
  _ = () => {
    let n = (0, o.bp)() === r.IlC.POPOUT ? i.u1M : i.z1l;
    return {
      modalKey: a,
      contextKey: n,
      onCloseRequest: () => {
        c.l.getState().canCloseModal && (0, i.Mr3)(a, n)
      }
    }
  }