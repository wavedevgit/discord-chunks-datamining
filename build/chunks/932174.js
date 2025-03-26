/** Chunk was on 27278 **/
t.d(n, {
  Z: () => l
});
var o = t(192379),
  r = t(442837),
  a = t(522474),
  i = t(981631);

function l() {
  let e = (0, r.e7)([a.Z], () => a.Z.getWindow(i.KJ3.ACTIVITY_POPOUT)),
    n = o.useMemo(() => null == e ? void 0 : e.window.document, [e]),
    t = o.useMemo(() => null == n ? void 0 : n.getElementById("app-mount"), [n]);
  return {
    popoutWindow: e,
    currentDocument: n,
    rootNode: t
  }
}