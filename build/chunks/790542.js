/** Chunk was on 27805 (0b869459509b48f5.js) **/
i.d(t, {
  A: () => l
});
var n = i(192379),
  r = i(442837),
  o = i(751648),
  s = i(479766);

function l() {
  let {
    balance: e,
    isFetching: t,
    error: i
  } = (0, r.cj)([s.Z], () => ({
    balance: s.Z.balance,
    isFetching: s.Z.isFetchingBalance,
    error: s.Z.fetchBalanceError
  }));
  return (0, n.useEffect)(() => {
    null !== e || null !== i || t || (0, o.ZO)()
  }, [e, i, t]), {
    balance: e,
    isFetching: t,
    error: i
  }
}