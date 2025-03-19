/** Chunk was on 44799 **/
t.d(n, {
  Y: () => _,
  Z: () => p
});
var i = t(200651);
t(192379);
var r = t(120356),
  s = t.n(r),
  o = t(481060),
  a = t(413335),
  l = t(690786),
  c = t(192371),
  d = t(279604),
  u = t(367123),
  x = t(388032),
  m = t(709435);

function v(e) {
  let {
    dateString: n
  } = e;
  return (0, i.jsxs)("div", {
    className: m.inline,
    children: [(0, i.jsx)(o.owK, {
      size: "xs",
      color: o.TVs.colors.STATUS_WARNING
    }), (0, i.jsx)(o.Text, {
      color: "status-warning",
      variant: "text-sm/bold",
      children: x.NW.formatToMarkdownString(u.Z["ol/ao6"], {
        dateString: (0, c.Z)(n)
      })
    })]
  })
}

function _(e) {
  let {
    guildId: n,
    powerup: t,
    className: r
  } = e, c = (0, l.Z)(n, t);
  return (0, i.jsxs)("div", {
    className: s()(m.labelContainer, r),
    children: [(0, i.jsxs)("div", {
      className: s()(m.inline, m.inlineBoost),
      children: [(0, i.jsx)(a.Z, {}), (0, i.jsx)(o.Text, {
        tag: "div",
        variant: "heading-md/bold",
        children: t.cost
      })]
    }), null != c && ((null == c ? void 0 : c.ends_at) != null ? (0, i.jsx)(v, {
      dateString: c.ends_at
    }) : (0, i.jsxs)("div", {
      className: m.inline,
      children: [(0, i.jsx)(o.owK, {
        size: "xs",
        color: o.TVs.colors.STATUS_POSITIVE
      }), (0, i.jsx)(o.Text, {
        color: "text-positive",
        variant: "text-sm/bold",
        children: x.NW.string(u.Z.FFLkm5)
      })]
    }))]
  })
}

function p(e) {
  let {
    guildId: n,
    powerup: t,
    className: r,
    children: a
  } = e, c = (0, l.Z)(n, t), u = null != c, x = (null == c ? void 0 : c.ends_at) != null, {
    onShowMore: v
  } = (0, d.ZP)(n, t);
  return (0, i.jsx)(o.kL8, {
    "aria-label": t.title,
    onClick: v,
    className: s()(m.container, {
      [m.active]: u,
      [m.warning]: x
    }, r),
    children: a
  })
}