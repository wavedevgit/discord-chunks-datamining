/** Chunk was on 1272 (2c78ad33b01d1e4b.js) **/
n.d(t, {
  J: () => d,
  z: () => p
});
var r, i = n(200651);
n(192379);
var l = n(990547),
  o = n(481060),
  a = n(213609),
  s = n(388032),
  c = n(159800),
  u = n(837753),
  d = ((r = {}).GUILD_NOT_ELIGIBLE = "guild_not_eligible", r.NOT_GUILD_MEMBER = "not_guild_member", r);
let p = e => {
  let {
    errorType: t
  } = e;
  return (0, a.Z)({
    type: l.ImpressionTypes.PAGE,
    name: l.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_UPSELL_ERROR_PAGE,
    properties: {
      error_page_type: t
    }
  }), (0, i.jsx)("div", {
    className: c.errorPageContainer,
    children: (0, i.jsxs)("div", {
      className: c.errorPageContent,
      children: [(0, i.jsx)("img", {
        src: u,
        alt: "",
        className: c.errorPageIllo
      }), (0, i.jsx)(o.X6q, {
        variant: "heading-xl/extrabold",
        className: c.errorPageTitle,
        children: "guild_not_eligible" === t ? s.NW.string(s.t.atZQVV) : s.NW.string(s.t.gAdWBg)
      }), (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        className: c.errorPagSubtitle,
        children: "guild_not_eligible" === t ? s.NW.string(s.t.teWe5O) : s.NW.string(s.t["X/yMrK"])
      })]
    })
  })
}