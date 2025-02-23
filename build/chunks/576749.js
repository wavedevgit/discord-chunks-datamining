/** Chunk was on 72365 (318c2bcb7e4ad854.js) **/
n.d(e, {
  Z: () => l
});
var i = n(481060),
  d = n(40851),
  _ = n(334877),
  a = n(981631);
let r = "guild-event-modal",
  l = () => {
    let t = (0, d.bp)() === a.IlC.POPOUT ? i.u1M : i.z1l;
    return {
      modalKey: r,
      contextKey: t,
      onCloseRequest: () => {
        _.l.getState().canCloseModal && (0, i.Mr3)(r, t)
      }
    }
  }