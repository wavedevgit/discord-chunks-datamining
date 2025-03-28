/** Chunk was on 20447 **/
n.d(t, {
  I: () => l,
  c: () => o
});
var r = n(399606),
  i = n(594174),
  s = n(914788),
  a = n(880257);
let o = () => {
    let e = (0, a.Z)();
    return (0, r.e7)([s.Z, i.default], () => {
      if (!e) return i.default.getCurrentUser();
      let t = s.Z.getSelectedTeenId();
      if (null !== t) return i.default.getUser(t)
    })
  },
  l = e => (0, r.e7)([i.default], () => {
    let t = i.default.getUser(e);
    if (null != t) return t
  })