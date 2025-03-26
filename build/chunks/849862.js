/** Chunk was on 52272 **/
n.d(t, {
  If: () => c,
  m$: () => s
}), n(47120);
var r = n(442837),
  i = n(372460),
  o = n(91896),
  a = n(699516);

function l(e, t) {
  let [n, r] = t, i = n.getPendingCount(), o = r.getPendingIncomingCount();
  return e ? i + o : i
}

function s(e) {
  return l((0, i.r8)({
    location: "getIncomingFriendRequestCount"
  }), e)
}

function c() {
  let e = (0, i.wn)({
    location: "useIncomingFriendRequestCount"
  });
  return (0, r.e7)([a.Z, o.Z], () => l(e, [a.Z, o.Z]))
}