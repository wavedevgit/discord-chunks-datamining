/** Chunk was on 11814 (3b351e4cb7c7b881.js) **/
n.d(t, {
  c: () => l
}), n(47120), n(653041);
var r = n(192379),
  i = n(835473),
  a = n(497089);
let o = new Set([a.O7.INCOMING_GAME_FRIEND_REQUESTS, a.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, a.O7.INCOMING_FRIEND_REQUESTS, a.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED]);

function l(e) {
  let t = r.useMemo(() => {
    let t = new Set,
      n = [];
    return e.forEach(e => {
      let {
        applicationId: r,
        type: i
      } = e;
      o.has(i) && (null == r || t.has(r) || (t.add(r), n.push(r)))
    }), n
  }, [e]);
  return (0, i.Z)(t)
}