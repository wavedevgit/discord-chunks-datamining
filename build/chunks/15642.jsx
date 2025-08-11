/** Chunk was on web.js **/
/** chunk id: 15642, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk674701 = require("./674701.js"),
  Chunk934415 = require("./934415.js"),
  Chunk834129 = require("./834129.js"),
  Chunk981631 = require("./981631.js"),
  Chunk848024 = require("./848024.js");

function u(e) {
  let {
    giftIntentType: t,
    recipientUser: n,
    giftIntentSecondaryAction: u,
    channel: d
  } = e;
  return <s.Z contentClassName={c.messageContentContainer} iconContainerClassName={c.iconContainer} iconNode={(0, r.jsx)(i.Dkj, {
      colorClass: c.icon
    })}><o.Z giftIntentType={t} premiumGiftIntentCardType={o.U.SYSTEM_MESSAGE} recipientUser={n} analyticsPage={(0, a.mE)(d)} analyticsSection={l.jXE.CHANNEL} giftIntentSecondaryAction={u} /></s.Z>
}