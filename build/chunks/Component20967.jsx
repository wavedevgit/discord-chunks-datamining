/** Chunk was on 1272 **/
/** chunk id: 20967, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => d,
  z: () => p
});
var r, Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk495760 = require("./495760.js"),
  Chunk837753 = require("./837753.js"),
  d = ((r = {}).GUILD_NOT_ELIGIBLE = "guild_not_eligible", r.NOT_GUILD_MEMBER = "not_guild_member", r);
let p = e => {
  let {
    errorType: t
  } = e;
  return (0, s.Z)({
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
      }), (0, i.jsx)(a.Heading, {
        variant: "heading-xl/extrabold",
        className: c.errorPageTitle,
        children: "guild_not_eligible" === t ? o.intl.string(o.t.atZQVZ) : o.intl.string(o.t.gAdWBl)
      }), (0, i.jsx)(a.Text, {
        variant: "text-md/normal",
        className: c.errorPagSubtitle,
        children: "guild_not_eligible" === t ? o.intl.string(o.t.teWe5G) : o.intl.string(o.t["X/yMrK"])
      })]
    })
  })
}