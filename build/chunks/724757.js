/** Chunk was on 30806 **/
n.d(t, {
  Z: () => o
});
var i = n(192379),
  r = n(924826),
  l = n(442837),
  s = n(607070);

function o(e, t, n) {
  let o = (0, l.e7)([s.Z], () => s.Z.keyboardModeEnabled),
    a = i.useCallback(e => {
      let n = document.querySelector(e),
        i = t.current;
      null != n && null != i && (n.focus(), i.scrollIntoViewNode({
        node: n,
        padding: 80
      }))
    }, [t]),
    u = i.useCallback(() => new Promise(e => {
      let n = t.current;
      if (null == n) return e();
      n.scrollTo({
        to: 0,
        callback: () => requestAnimationFrame(() => e())
      })
    }), [t]),
    d = i.useCallback(() => new Promise(e => {
      let n = t.current;
      if (null == n) return e();
      n.scrollTo({
        to: Number.MAX_SAFE_INTEGER,
        callback: () => requestAnimationFrame(() => e())
      })
    }), [t]);
  return (0, r.ZP)({
    id: e,
    isEnabled: o,
    setFocus: a,
    scrollToStart: u,
    scrollToEnd: d,
    orientation: null == n ? void 0 : n.orientation
  })
}