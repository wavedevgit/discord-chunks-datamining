/** Chunk was on 44799 **/
t.d(n, {
  Y: () => v,
  Z: () => b
});
var r = t(200651);
t(192379);
var i = t(120356),
  o = t.n(i),
  s = t(481060),
  a = t(413335),
  l = t(690786),
  c = t(192371),
  d = t(279604),
  u = t(730621),
  x = t(388032),
  p = t(709435);

function m(e) {
  let {
    dateString: n
  } = e;
  return (0, r.jsxs)("div", {
    className: p.inline,
    children: [(0, r.jsx)(s.owK, {
      size: "xs",
      color: s.TVs.colors.STATUS_WARNING
    }), (0, r.jsx)(s.Text, {
      color: "status-warning",
      variant: "text-sm/bold",
      children: x.NW.formatToMarkdownString(u.Z["ol/ao6"], {
        dateString: (0, c.Z)(n)
      })
    })]
  })
}

function v(e) {
  let {
    guildId: n,
    powerup: t,
    className: i
  } = e, c = (0, l.Z)(n, t);
  return (0, r.jsxs)("div", {
    className: o()(p.labelContainer, i),
    children: [(0, r.jsxs)("div", {
      className: o()(p.inline, p.inlineBoost),
      children: [(0, r.jsx)(a.Z, {}), (0, r.jsx)(s.Text, {
        tag: "div",
        variant: "heading-md/bold",
        children: t.cost
      })]
    }), null != c && ((null == c ? void 0 : c.ends_at) != null ? (0, r.jsx)(m, {
      dateString: c.ends_at
    }) : (0, r.jsxs)("div", {
      className: p.inline,
      children: [(0, r.jsx)(s.owK, {
        size: "xs",
        color: s.TVs.colors.STATUS_POSITIVE
      }), (0, r.jsx)(s.Text, {
        color: "text-positive",
        variant: "text-sm/bold",
        children: x.NW.string(u.Z.FFLkm5)
      })]
    }))]
  })
}

function b(e) {
  let {
    guildId: n,
    powerup: t,
    className: i,
    children: a
  } = e, c = (0, l.Z)(n, t), u = null != c, x = (null == c ? void 0 : c.ends_at) != null, {
    onShowMore: m
  } = (0, d.ZP)(n, t);
  return (0, r.jsx)(s.kL8, {
    "aria-label": t.title,
    onClick: m,
    className: o()(p.container, {
      [p.active]: u,
      [p.warning]: x
    }, i),
    children: a
  })
}