/** Chunk was on 52272 **/
n.d(t, {
  c: () => l
}), n(47120), n(653041);
var r = n(192379),
  i = n(835473),
  o = n(497089);
let a = new Set([o.O7.INCOMING_GAME_FRIEND_REQUESTS, o.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, o.O7.INCOMING_FRIEND_REQUESTS, o.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED]);

function l(e) {
  let t = r.useMemo(() => {
    let t = new Set,
      n = [];
    return e.forEach(e => {
      let {
        applicationId: r,
        type: i
      } = e;
      a.has(i) && (null == r || t.has(r) || (t.add(r), n.push(r)))
    }), n
  }, [e]);
  return (0, i.Z)(t)
}