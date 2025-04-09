/** Chunk was on 97161 **/
n.d(t, {
  Z: () => l
}), n(388685);
var o = n(192379),
  a = n(442837),
  r = n(594174),
  i = n(823379);
let c = [];

function l(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
    n = (0, a.Wu)([r.default], () => {
      let t = e.participants.map(e => r.default.getUser(e)).filter(i.lm),
        n = t.find(t => t.id === e.author_id),
        o = t.filter(t => t.id !== e.author_id);
      return null == n ? c : [...o, n]
    }, [e]),
    l = o.useMemo(() => n.slice(-t), [t, n]),
    s = l[l.length - 1],
    _ = l[l.length - 2],
    d = Math.max(n.length - 1, 0);
  return {
    orderedParticipants: n,
    displayParticipants: l,
    participant1: s,
    participant2: _,
    numOtherParticipants: d
  }
}