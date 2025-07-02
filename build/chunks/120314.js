/** Chunk was on 85831 **/
t.a(e, async function(e, r) {
  try {
    t.r(n), t.d(n, {
      default: () => I
    });
    var l = t(255367),
      o = t(73800),
      i = t(926302),
      c = t(740442),
      a = t(481060),
      u = t(460562),
      s = t(960048),
      d = t(222082),
      f = t(63681),
      h = t(743965),
      b = t(12781),
      g = t(980426),
      _ = t(659700),
      p = t(733653),
      y = t(249597),
      m = t(312539),
      j = t(325980),
      v = t(472433),
      x = t(701214),
      w = t(388032),
      O = t(718905),
      k = e([b, v, i]);
    [b, v, i] = k.then ? (await k)() : k;
    let Z = {
      text: d.xv,
      paragraph: d.nv,
      empty: d.HY,
      emoji: b.d,
      link: p.r,
      list: y.a,
      listItem: y.H,
      code: f.E,
      code_block: h.d,
      quote: j.p,
      bold: g.d8,
      italic: g.Tx,
      underline: g.v6,
      strikethrough: g.nY,
      mention: m.p,
      heading: _.X,
      small: _.x,
      spoiler: v.o,
      timestamp: x.E
    };

    function I(e) {
      let {
        content: n
      } = e;
      return (0, l.jsx)(c.SV, {
        fallbackRender: e => {
          let {
            error: t
          } = e;
          return (0, l.jsx)(P, {
            content: n,
            error: t
          })
        },
        children: (0, l.jsx)(i.ZP, {
          content: n,
          renderers: Z
        })
      })
    }

    function P(e) {
      let {
        content: n,
        error: t
      } = e;
      return o.useEffect(() => {
        s.Z.captureException(t)
      }, [t]), (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("span", {
          children: n
        }), (0, l.jsxs)(a.Text, {
          variant: "text-md/normal",
          color: "text-danger",
          className: O.errorMessage,
          children: [(0, l.jsx)(u.Z, {
            width: 16,
            height: 16
          }), w.intl.string(w.t.dpFK4O)]
        })]
      })
    }
    r()
  } catch (e) {
    r(e)
  }
})