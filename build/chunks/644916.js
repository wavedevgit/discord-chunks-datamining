/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  t: () => s
});
var r = n(115434),
  i = n(704215),
  o = n(874703),
  a = n(974592);

function s(e) {
  switch (e) {
    case i.z.COLLECTIBLES_SHOP_ENTRY_MARKETING:
      var t, n;
      return null !== (n = null === (t = o.Z.getMarketingBySurface(r.K.DESKTOP_SHOP_BUTTON)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : 0;
    case i.z.GIFTING_PROMOTION_ICON:
    case i.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK:
    case i.z.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET:
    case i.z.GIFTING_PROMOTION_REMINDER:
      return a.C$;
    default:
      return 0
  }
}