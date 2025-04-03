/** Chunk was on 31649 **/
n.d(t, {
  Z: () => a
});
var r = n(512722),
  l = n.n(r),
  i = n(875425);

function a(e) {
  if (e !== i.FO.TODAY) return l()("number" == typeof e, "Invalid custom status clear timeout"), e;
  {
    let e = new Date;
    return new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1).getTime() - e.getTime()
  }
}