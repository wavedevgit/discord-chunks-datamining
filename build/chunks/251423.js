/** Chunk was on 13323 **/
n.d(t, {
  L: () => l
});
var r = n(192379),
  i = n(442837),
  s = n(570140),
  a = n(480387),
  o = n(726745);

function l() {
  let e = (0, i.cj)([o.Z], () => ({
    isLoading: o.Z.getIsValidatingUsers(),
    multiAccountUsers: o.Z.getUsers()
  }));
  return r.useEffect(() => {
    s.Z.wait(() => {
      a.HJ()
    })
  }, []), e
}