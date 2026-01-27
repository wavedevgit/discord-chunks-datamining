/** Chunk was on 72756 **/
/** chunk id: 886609, original params: e,n,t (module,exports,require) **/
require.a(module, async function(e, r) {
  try {
    t.d(n, {
      d: () => u
    });
    var l = t(627968),
      c = t(64700),
      a = t(840521),
      i = t(78377),
      o = t(302031),
      s = e([a]);

    function u(e) {
      let {
        children: n,
        node: t
      } = e, r = c.useMemo(() => Array.from((0, a.t)([t])).some(e => "link" === e.type), [t]), s = (0, i.p)();
      return c.useEffect(() => {
        var e;
        null == s || null == (e = s.setHasSpoilerEmbeds) || e.call(s, r)
      }, [s, r]), (0, l.jsx)(o.Ay, {
        type: o.Ay.Types.TEXT,
        children: () => n
      })
    }
    a = (s.then ? (await s)() : s)[0], r()
  } catch (e) {
    r(e)
  }
})