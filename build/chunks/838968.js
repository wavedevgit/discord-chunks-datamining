/** Chunk was on 44799 **/
t.d(n, {
  Y: () => x,
  Z: () => m
});
var r = t(200651);
t(192379);
var i = t(120356),
  s = t.n(i),
  o = t(481060),
  a = t(413335),
  l = t(157353),
  c = t(730621),
  d = t(388032),
  u = t(709435);

function x(e) {
  let {
    guildId: n,
    powerup: t,
    className: i
  } = e, x = (0, l.Z)(n, t);
  return (0, r.jsxs)("div", {
    className: s()(u.labelContainer, i),
    children: [(0, r.jsxs)("div", {
      className: u.inline,
      children: [(0, r.jsx)(a.Z, {}), (0, r.jsx)(o.Text, {
        tag: "div",
        variant: "heading-md/bold",
        children: t.cost
      })]
    }), x && (0, r.jsxs)("div", {
      className: u.inline,
      children: [(0, r.jsx)(o.owK, {
        size: "xs",
        color: o.TVs.colors.TEXT_POSITIVE
      }), (0, r.jsx)(o.Text, {
        color: "text-positive",
        variant: "text-sm/bold",
        children: d.NW.string(c.Z.FFLkm5)
      })]
    })]
  })
}

function m(e) {
  let {
    onClick: n,
    active: t,
    className: i,
    label: a,
    children: l
  } = e;
  return (0, r.jsx)(o.kL8, {
    "aria-label": a,
    onClick: n,
    className: s()(u.container, {
      [u.active]: t
    }, i),
    children: l
  })
}