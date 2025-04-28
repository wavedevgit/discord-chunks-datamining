/** Chunk was on 85831 **/
t.a(e, async function(e, r) {
  try {
    t.r(n), t.d(n, {
      default: () => m
    });
    var l = t(200651);
    t(192379);
    var i = t(946884),
      o = t(222082),
      u = t(63681),
      c = t(743965),
      a = t(12781),
      d = t(980426),
      s = t(659700),
      f = t(733653),
      _ = t(249597),
      g = t(312539),
      b = t(325980),
      h = e([i]);
    i = (h.then ? (await h)() : h)[0];
    let y = {
      text: o.xv,
      paragraph: o.nv,
      empty: o.HY,
      emoji: a.d,
      link: f.r,
      list: _.a,
      listItem: _.H,
      code: u.E,
      code_block: c.d,
      quote: b.p,
      bold: d.d8,
      italic: d.Tx,
      underline: d.v6,
      strikethrough: d.nY,
      mention: g.p,
      heading: s.X
    };

    function m(e) {
      let {
        content: n
      } = e;
      return (0, l.jsx)(i.ZP, {
        content: n,
        renderers: y
      })
    }
    r()
  } catch (e) {
    r(e)
  }
})