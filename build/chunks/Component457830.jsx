/** Chunk was on 21738 **/
/** chunk id: 457830, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => d,
  k: () => p
});
var r, Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk110259 = require("./110259.js"),
  Chunk397927 = require("./397927.js"),
  Chunk139286 = require("./139286.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk9476 = require("./9476.js"),
  Chunk450603 = require("./450603.js"),
  d = ((r = {}).GUILD_NOT_ELIGIBLE = "guild_not_eligible", r.NOT_GUILD_MEMBER = "not_guild_member", r);
let p = e => {
  let {
    errorType: t
  } = e;
  return (0, s.A)({
    type: l.ImpressionTypes.PAGE,
    name: l.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_UPSELL_ERROR_PAGE,
    properties: {
      error_page_type: t
    }
  }), (0, i.jsx)("div", {
    className: c.Xd,
    children: (0, i.jsxs)("div", {
      className: c.lr,
      children: [(0, i.jsx)("img", {
        src: u,
        alt: "",
        className: c.W9
      }), (0, i.jsx)(a.Heading, {
        variant: "heading-xl/extrabold",
        className: c.mW,
        children: "guild_not_eligible" === t ? o.intl.string(o.t.atZQVZ) : o.intl.string(o.t.gAdWBl)
      }), (0, i.jsx)(a.Text, {
        variant: "text-md/normal",
        className: c.LS,
        children: "guild_not_eligible" === t ? o.intl.string(o.t.teWe5G) : o.intl.string(o.t["X/yMrK"])
      })]
    })
  })
}