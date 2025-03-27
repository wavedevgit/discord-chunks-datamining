/** Chunk was on 23682 **/
n.d(t, {
  Z: () => i
}), n(47120);
var r = n(192379);

function i(e, t) {
  let [n, i] = r.useState(null), o = r.useCallback(e => {
    i(e)
  }, []), l = r.useCallback(() => {
    i(null)
  }, []), a = r.useCallback(r => {
    l();
    let i = e.find(e => {
        let {
          id: t
        } = e;
        return n === t
      }),
      o = e.find(e => {
        let {
          id: t
        } = e;
        return r === t
      });
    if (null == i || null == o || i === o) return;
    let a = [...e],
      s = a.indexOf(i),
      c = a.indexOf(o),
      d = +(c - s > 0);
    a.splice(s, 1), c = a.indexOf(o), a.splice(c + d, 0, i), t(a)
  }, [e, n, l, t]);
  return {
    draggingId: n,
    handleDragStart: o,
    handleDragReset: l,
    handleDragComplete: a
  }
}