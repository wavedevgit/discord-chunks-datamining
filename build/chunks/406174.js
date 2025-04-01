/** Chunk was on 13323 **/
n.d(t, {
  Z: () => u
}), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  o = n(388032),
  l = n(82831),
  c = n(537014),
  d = n(834300);

function u(e) {
  let {
    onClickManageSubscription: t,
    count: n
  } = e;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(a.X6q, {
      variant: "heading-md/bold",
      children: o.NW.string(o.t["KzCF//"])
    }), (0, r.jsx)(a.LZC, {
      size: 4
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      className: l.sectionDescription,
      children: o.NW.string(o.t["3D7qCg"])
    }), (0, r.jsx)(a.LZC, {
      size: 24
    }), (0, r.jsxs)("div", {
      className: s()(c.guildBoostingSubscriptionRow, l.card),
      children: [(0, r.jsx)("img", {
        src: d,
        alt: "",
        className: l.handImage
      }), (0, r.jsxs)("div", {
        className: l.textContainer,
        children: [(0, r.jsx)(a.X6q, {
          variant: "heading-xl/semibold",
          className: l.header,
          children: o.NW.string(o.t["KzCF//"])
        }), (0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          className: l.description,
          children: o.NW.format(o.t["m+pcOD"], {
            numSubscriptions: n
          })
        })]
      }), (0, r.jsx)(a.zxk, {
        color: a.zxk.Colors.CUSTOM,
        size: a.zxk.Sizes.SMALL,
        className: l.manageSubscriptionsButton,
        onClick: t,
        children: o.NW.string(o.t["3a8Xxs"])
      })]
    })]
  })
}