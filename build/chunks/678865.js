/** Chunk was on 31649 **/
n.d(t, {
  Z: () => a
}), n(627341);
var r = n(278074),
  i = n(481060),
  l = n(695346);

function a() {
  let e = l.co.getSetting();
  return (0, r.EQ)(e).with(i.Skl.IDLE, () => i.Skl.IDLE).with(i.Skl.DND, () => i.Skl.DND).with(i.Skl.INVISIBLE, () => i.Skl.INVISIBLE).otherwise(() => i.Skl.ONLINE)
}