/** Chunk was on 12416 **/
n.d(t, {
  Z: () => b
});
var r = n(200651),
  i = n(192379),
  l = n(442837),
  a = n(570140),
  o = n(519938),
  s = n(928518),
  c = n(585483),
  u = n(317381),
  d = n(16609),
  f = n(917107),
  m = n(716600),
  p = n(918559),
  h = n(981631);
let v = (e, t) => {
  a.Z.wait(() => {
    (0, o.Cz)(e, t)
  })
};

function b(e) {
  let t, {
      embedId: n,
      className: a,
      style: o
    } = e,
    b = (0, l.e7)([s.Z], () => s.Z.getWindow(h.KJ3.CHANNEL_CALL_POPOUT)),
    g = (0, m.Z)(),
    y = (0, l.e7)([u.ZP], () => u.ZP.getActivityPanelMode());
  if (null == g || (0, f.Z)((0, d.pY)(g.location)) || y !== p.Ez.PANEL) {
    var E;
    t = null !== (E = null == b ? void 0 : b.window) && void 0 !== E ? E : window
  } else t = window;
  let O = i.useRef(null),
    S = i.useMemo(() => {
      let e = null;
      return () => {
        null == e && (e = t.requestAnimationFrame(() => {
          var t, r;
          v(n, null !== (r = null === (t = O.current) || void 0 === t ? void 0 : t.getBoundingClientRect()) && void 0 !== r ? r : null), e = null
        }))
      }
    }, [n, t]);
  return i.useEffect(() => (t.addEventListener("resize", S), c.S.subscribe(h.CkL.REMEASURE_TARGET, S), () => {
    t.removeEventListener("resize", S), c.S.unsubscribe(h.CkL.REMEASURE_TARGET, S)
  }), [S, t]), i.useLayoutEffect(() => {
    let e = O.current;
    if (null == e) return;
    let t = e.ownerDocument.defaultView;
    if (null == t) return;
    S();
    let r = new t.ResizeObserver(S);
    return r.observe(e), () => {
      r.disconnect(), v(n, null)
    }
  }, [n, S]), (0, r.jsx)("div", {
    ref: O,
    style: o,
    className: a
  })
}