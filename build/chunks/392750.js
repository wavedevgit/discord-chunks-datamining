/** Chunk was on 93886 (1d5eb829541a42b4.js) **/
n.d(t, {
  Z: () => u
});
var r = n(200651);
n(192379);
var a = n(442837),
  i = n(814443),
  l = n(594174),
  o = n(681619),
  s = n(344731),
  c = n(841699);
let d = [{
  key: "user",
  cellClassName: s.userCell,
  render(e) {
    var t;
    let {
      user: n,
      key: r
    } = e;
    return null !== (t = null == n ? void 0 : n.username) && void 0 !== t ? t : r
  }
}, {
  key: "affinity",
  cellClassName: s.affinityCell,
  render(e) {
    let {
      affinity: t
    } = e;
    return "".concat(t)
  }
}];

function u() {
  let e = (0, a.Wu)([i.Z, l.default], () => i.Z.getUserAffinities().map(e => {
    let {
      user_id: t,
      affinity: n
    } = e;
    return {
      user: l.default.getUser(t),
      affinity: n,
      key: t
    }
  }));
  return 0 === e.length ? null : (0, r.jsx)(o.Z, {
    className: c.panel,
    columns: d,
    rowClassName: s.row,
    data: e
  })
}