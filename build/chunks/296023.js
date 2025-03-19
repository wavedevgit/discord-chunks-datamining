/** Chunk was on 23682 **/
n.d(t, {
  w: () => a
});
var r = n(192379),
  i = n(442837),
  o = n(594174),
  l = n(388032);

function a(e) {
  var t;
  let n = null === (t = e.linkedLobby) || void 0 === t ? void 0 : t.linked_at,
    a = (0, i.e7)([o.default], () => {
      var t;
      return o.default.getUser(null === (t = e.linkedLobby) || void 0 === t ? void 0 : t.linked_by)
    });
  return r.useMemo(() => {
    if (null == n) return;
    let e = new Date(n);
    return null != a ? l.NW.format(l.t["xPrJ+v"], {
      username: a.username,
      linkedAtDate: e
    }) : l.NW.formatToPlainString(l.t.EyygeH, {
      linkedAtDate: e
    })
  }, [n, a])
}