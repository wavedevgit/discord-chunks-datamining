/** Chunk was on 27278 **/
n.d(t, {
  Z: () => l
});
var o = n(192379),
  r = n(442837),
  a = n(522474),
  i = n(981631);

function l() {
  let e = (0, r.e7)([a.Z], () => a.Z.getWindow(i.KJ3.ACTIVITY_POPOUT)),
    t = o.useMemo(() => null == e ? void 0 : e.window.document, [e]),
    n = o.useMemo(() => null == t ? void 0 : t.getElementById("app-mount"), [t]);
  return {
    popoutWindow: e,
    currentDocument: t,
    rootNode: n
  }
}