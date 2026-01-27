/** Chunk was on 72756 **/
/** chunk id: 532255, original params: e,n,t (module,exports,require) **/
require.a(module, async function(e, r) {
  try {
    t.r(n), t.d(n, {
      default: () => P
    });
    var l = t(627968),
      c = t(64700),
      a = t(223535),
      i = t(484030),
      o = t(397927),
      s = t(791606),
      u = t(728458),
      d = t(715764),
      h = t(614740),
      p = t(440801),
      j = t(4837),
      f = t(750854),
      m = t(131765),
      y = t(167507),
      b = t(908347),
      g = t(62849),
      v = t(558447),
      x = t(886609),
      O = t(580019),
      w = t(985018),
      I = t(967615),
      A = e([j, x, a]);
    [j, x, a] = A.then ? (await A)() : A;
    let C = {
      text: d.EY,
      paragraph: d.fz,
      empty: d.Sv,
      emoji: j.z,
      link: y.N,
      list: b.B,
      listItem: b.c,
      code: h.C,
      code_block: p.N,
      quote: v.P,
      bold: f.yN,
      italic: f.J2,
      underline: f.z2,
      strikethrough: f.Gk,
      mention: g.P,
      heading: m.D,
      small: m.O,
      spoiler: x.d,
      timestamp: O.D
    };

    function P(e) {
      let {
        content: n
      } = e;
      return (0, l.jsx)(i.tH, {
        fallbackRender: e => {
          let {
            error: t
          } = e;
          return (0, l.jsx)(k, {
            content: n,
            error: t
          })
        },
        children: (0, l.jsx)(a.Ay, {
          content: n,
          renderers: C
        })
      })
    }

    function k(e) {
      let {
        content: n,
        error: t
      } = e;
      return c.useEffect(() => {
        u.A.captureException(t)
      }, [t]), (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("span", {
          children: n
        }), (0, l.jsxs)(o.Text, {
          variant: "text-md/normal",
          color: "text-feedback-critical",
          className: I.g,
          children: [(0, l.jsx)(s.A, {
            width: 16,
            height: 16
          }), w.intl.string(w.t.dpFK4M)]
        })]
      })
    }
    r()
  } catch (e) {
    r(e)
  }
})