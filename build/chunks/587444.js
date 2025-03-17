/** Chunk was on 27978 **/
n.d(t, {
  Z: () => _,
  u: () => m
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(692547),
  s = n(481060),
  l = n(388905),
  c = n(600164),
  u = n(981631),
  d = n(388032),
  p = n(12542),
  h = n(612064),
  g = n(802138);

function m(e) {
  let {
    text: t,
    buttonCta: i,
    onClick: u
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.Ee, {
      src: n(689411)
    }), (0, r.jsx)(l.Dx, {
      className: o()(g.marginTop20, g.marginBottom8, h.flexCenter),
      children: d.NW.string(d.t.eL5z0t)
    }), (0, r.jsx)(l.DK, {
      className: g.marginBottom40,
      children: d.NW.string(d.t["poAv6+"])
    }), (0, r.jsxs)(s.Zbd, {
      className: p.card,
      type: s.Zbd.Types.CUSTOM,
      children: [(0, r.jsx)("img", {
        alt: "",
        className: p.cardAccentLeft,
        src: n(70519)
      }), (0, r.jsx)("img", {
        alt: "",
        className: p.cardAccentRight,
        src: n(806848)
      }), (0, r.jsxs)(c.Z, {
        className: p.cardContents,
        direction: c.Z.Direction.VERTICAL,
        align: c.Z.Align.STRETCH,
        grow: 0,
        children: [(0, r.jsx)(s.Text, {
          tag: "strong",
          className: p.buttonTitle,
          variant: "text-md/normal",
          style: {
            color: a.Z.unsafe_rawColors.PRIMARY_300.css
          },
          children: t
        }), (0, r.jsx)(l.zx, {
          className: p.button,
          onClick: u,
          children: i
        })]
      })]
    })]
  })
}

function _(e) {
  let {
    text: t,
    buttonCta: n,
    theme: i = u.BRd.DARK,
    onClick: o
  } = e;
  return (0, r.jsx)(l.ZP, {
    theme: i,
    children: (0, r.jsx)(m, {
      text: t,
      buttonCta: n,
      onClick: o
    })
  })
}