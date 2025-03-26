/** Chunk was on 44799 **/
t.d(n, {
  Y: () => v,
  Z: () => _
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
  u = t(296260),
  m = t(388032),
  x = t(709435);

function p(e) {
  let {
    dateString: n
  } = e;
  return (0, r.jsxs)("div", {
    className: x.inline,
    children: [(0, r.jsx)(s.owK, {
      size: "xs",
      color: s.TVs.colors.STATUS_WARNING
    }), (0, r.jsx)(s.Text, {
      color: "status-warning",
      variant: "text-sm/bold",
      children: m.NW.formatToMarkdownString(u.Z["ol/ao6"], {
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
    className: o()(x.labelContainer, i),
    children: [(0, r.jsxs)("div", {
      className: o()(x.inline, x.inlineBoost),
      children: [(0, r.jsx)(a.Z, {}), (0, r.jsx)(s.Text, {
        tag: "div",
        variant: "heading-md/bold",
        children: t.cost
      })]
    }), null != c && ((null == c ? void 0 : c.ends_at) != null ? (0, r.jsx)(p, {
      dateString: c.ends_at
    }) : (0, r.jsxs)("div", {
      className: x.inline,
      children: [(0, r.jsx)(s.owK, {
        size: "xs",
        color: s.TVs.colors.STATUS_POSITIVE
      }), (0, r.jsx)(s.Text, {
        color: "text-positive",
        variant: "text-sm/bold",
        children: m.NW.string(u.Z.FFLkm5)
      })]
    }))]
  })
}

function _(e) {
  let {
    guildId: n,
    powerup: t,
    className: i,
    children: a
  } = e, c = (0, l.Z)(n, t), u = null != c, m = (null == c ? void 0 : c.ends_at) != null, {
    onShowMore: p
  } = (0, d.ZP)(n, t);
  return (0, r.jsx)(s.kL8, {
    "aria-label": t.title,
    onClick: p,
    className: o()(x.container, {
      [x.active]: u,
      [x.warning]: m
    }, i),
    children: a
  })
}