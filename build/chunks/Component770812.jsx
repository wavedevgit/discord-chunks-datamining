/** Chunk was on web.js **/
/** chunk id: 770812, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk703656 = require("./703656.js"),
  Chunk430824 = require("./430824.js"),
  Chunk687476 = require("./687476.js"),
  Chunk761966 = require("./761966.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk454615 = require("./454615.js");
let y = () => {
  let e = (0, Chunk410030.ZP)();
  return (0, Chunk780384.ap)(module) ? require("./537381.js") : require("./341048.js")
};

function O(e) {
  let {
    onClose: t,
    guildId: n,
    emojiId: o
  } = e, l = y(), {
    analyticsLocations: O
  } = (0, u.ZP)(c.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL);
  (0, d.Z)({
    type: i.ImpressionTypes.MODAL,
    name: i.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
    properties: {
      location_stack: O,
      emoji_guild_id: n,
      emoji_id: null != o ? o : null
    }
  });
  let v = () => {
      (0, f.uL)(h.Z5c.CHANNEL(n, g.oC.ROLE_SUBSCRIPTIONS), {
        sourceLocationStack: O
      })
    },
    S = (0, a.e7)([p.Z], () => p.Z.getGuild(n)),
    I = (0, a.e7)([_.Z], () => null != n && _.Z.getUserSubscriptionRoles(n).size > 0),
    T = I ? E.intl.string(E.t.GoLM9z) : E.intl.formatToPlainString(E.t["h0u/Hi"], {
      serverName: null == S ? true : S.name
    }),
    A = I ? E.intl.string(E.t.PjZ7Db) : E.intl.string(E.t.p8FG1D);
  return (0, r.jsxs)("div", {
    className: b.container,
    children: [(0, r.jsx)("div", {
      className: b.background
    }), (0, r.jsxs)("div", {
      className: b.content,
      children: [(0, r.jsx)(s.P3F, {
        className: b.closeButton,
        "aria-label": E.intl.string(E.t.cpT0Cq),
        onClick: t,
        children: (0, r.jsx)(s.Dio, {
          size: "xs",
          color: "currentColor",
          "aria-label": E.intl.string(E.t.cpT0Cq),
          className: b.closeButtonIcon
        })
      }), (0, r.jsx)("img", {
        alt: "",
        src: l,
        className: b.upsellImage
      }), (0, r.jsx)(s.LZC, {
        size: 22
      }), (0, r.jsx)(s.Heading, {
        color: "header-primary",
        variant: "heading-lg/extrabold",
        className: b.header,
        children: E.intl.string(E.t.cBjkcx)
      }), (0, r.jsx)(s.LZC, {
        size: 4
      }), (0, r.jsx)(s.Text, {
        color: "text-default",
        variant: "text-md/normal",
        className: b.description,
        children: T
      }), (0, r.jsx)(s.LZC, {
        size: 24
      }), (0, r.jsx)(m.Z, {
        text: A,
        onClick: v
      })]
    })]
  })
}