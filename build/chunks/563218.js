/** Chunk was on 75862 **/
n.d(t, {
  Z: () => v
});
var r = n(200651),
  l = n(192379),
  i = n(442837),
  a = n(570140),
  o = n(519938),
  s = n(928518),
  u = n(585483),
  c = n(317381),
  d = n(16609),
  f = n(917107),
  m = n(716600),
  p = n(918559),
  g = n(981631);
let E = (e, t) => {
  a.Z.wait(() => {
    (0, o.Cz)(e, t)
  })
};

function v(e) {
  let t, {
      embedId: n,
      className: a,
      style: o
    } = e,
    v = (0, i.e7)([s.Z], () => s.Z.getWindow(g.KJ3.CHANNEL_CALL_POPOUT)),
    h = (0, m.Z)(),
    b = (0, i.e7)([c.ZP], () => c.ZP.getActivityPanelMode());
  if (null == h || (0, f.Z)((0, d.pY)(h.location)) || b !== p.Ez.PANEL) {
    var S;
    t = null !== (S = null == v ? void 0 : v.window) && void 0 !== S ? S : window
  } else t = window;
  let y = l.useRef(null),
    O = l.useMemo(() => {
      let e = null;
      return () => {
        null == e && (e = t.requestAnimationFrame(() => {
          var t, r;
          E(n, null !== (r = null === (t = y.current) || void 0 === t ? void 0 : t.getBoundingClientRect()) && void 0 !== r ? r : null), e = null
        }))
      }
    }, [n, t]);
  return l.useEffect(() => (t.addEventListener("resize", O), u.S.subscribe(g.CkL.REMEASURE_TARGET, O), () => {
    t.removeEventListener("resize", O), u.S.unsubscribe(g.CkL.REMEASURE_TARGET, O)
  }), [O, t]), l.useLayoutEffect(() => {
    let e = y.current;
    if (null == e) return;
    let t = e.ownerDocument.defaultView;
    if (null == t) return;
    O();
    let r = new t.ResizeObserver(O);
    return r.observe(e), () => {
      r.disconnect(), E(n, null)
    }
  }, [n, O]), (0, r.jsx)("div", {
    ref: y,
    style: o,
    className: a
  })
}