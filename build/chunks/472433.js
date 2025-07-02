/** Chunk was on 85831 **/
t.a(e, async function(e, r) {
  try {
    t.d(n, {
      o: () => s
    });
    var l = t(255367),
      o = t(73800),
      i = t(31675),
      c = t(95398),
      a = t(488968),
      u = e([i]);

    function s(e) {
      let {
        children: n,
        node: t
      } = e, r = o.useMemo(() => Array.from((0, i.h)([t])).some(e => "link" === e.type), [t]), u = (0, a.d)();
      return o.useEffect(() => {
        var e;
        null == u || null == (e = u.setHasSpoilerEmbeds) || e.call(u, r)
      }, [u, r]), (0, l.jsx)(c.ZP, {
        type: c.ZP.Types.TEXT,
        children: () => n
      })
    }
    i = (u.then ? (await u)() : u)[0], r()
  } catch (e) {
    r(e)
  }
})