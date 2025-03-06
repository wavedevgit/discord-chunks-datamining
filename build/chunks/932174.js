/** Chunk was on 27278 **/
t.d(n, {
  Z: () => l
});
var r = t(192379),
  o = t(442837),
  a = t(522474),
  i = t(981631);

function l() {
  let e = (0, o.e7)([a.Z], () => a.Z.getWindow(i.KJ3.ACTIVITY_POPOUT)),
    n = r.useMemo(() => null == e ? void 0 : e.window.document, [e]),
    t = r.useMemo(() => null == n ? void 0 : n.getElementById("app-mount"), [n]);
  return {
    popoutWindow: e,
    currentDocument: n,
    rootNode: t
  }
}