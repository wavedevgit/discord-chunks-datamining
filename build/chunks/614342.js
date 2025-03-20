/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => c
});
var r = n(512722),
  i = n.n(r),
  s = n(782568),
  a = n(434404),
  l = n(144507),
  o = n(981631),
  A = n(388032);

function c(e) {
  let t = (0, l.MO)(e);
  switch (t) {
    case l.d5.NEEDS_COMMUNITY:
      return {
        visibility: t, noticeText: A.NW.string(A.t["0Z2Qxs"]), ctaLabel: A.NW.string(A.t.BOJpl5), ctaClickable: null != e, onCtaClicked() {
          var t;
          i()(null != e, "Guild must be not null open COMMUNITY settings"), a.Z.open(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "", o.pNK.COMMUNITY)
        }
      };
    case l.d5.WAITLIST_ONLY:
      return {
        visibility: t, noticeText: A.NW.string(A.t["5vz88P"]), ctaLabel: A.NW.string(A.t["6yjvmp"]), ctaClickable: !0, onCtaClicked() {
          (0, s.Z)("https://dis.gd/creators-waitlist")
        }
      };
    default:
      return
  }
}