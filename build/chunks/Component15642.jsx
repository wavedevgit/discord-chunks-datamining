/** Chunk was on 91173 **/
/** chunk id: 15642, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk674701 = require("./674701.jsx"),
  Chunk934415 = require("./934415.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk60044 = require("./60044.js");

function u(e) {
  let {
    giftIntentType: t,
    recipientUser: n,
    giftIntentSecondaryAction: u,
    channel: d
  } = e;
  return (0, r.jsx)(a.Z, {
    contentClassName: c.messageContentContainer,
    iconContainerClassName: c.iconContainer,
    iconNode: (0, r.jsx)(i.Dkj, {
      colorClass: c.icon
    }),
    children: (0, r.jsx)(l.Z, {
      giftIntentType: t,
      premiumGiftIntentCardType: l.U.SYSTEM_MESSAGE,
      recipientUser: n,
      analyticsPage: (0, o.mE)(d),
      analyticsSection: s.jXE.CHANNEL,
      giftIntentSecondaryAction: u
    })
  })
}