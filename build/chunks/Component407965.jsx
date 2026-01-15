/** Chunk was on web.js **/
/** chunk id: 407965, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => S
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk484459 = require("./484459.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk847903 = require("./847903.js"),
  Chunk807163 = require("./807163.jsx"),
  Chunk10508 = require("./10508.jsx"),
  Chunk45474 = require("./45474.js"),
  Chunk594135 = require("./594135.js"),
  Chunk282793 = require("./282793.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk436551 = require("./436551.js");
let v = e => {
    let {
      churnUserDiscountOffer: t
    } = e;
    return null == t ? null : (0, r.jsx)("div", {
      className: O.previewContainer,
      children: (0, r.jsx)(h.o, {
        userDiscountOffer: t
      })
    })
  },
  S = () => {
    let {
      transitionState: e,
      onClose: t,
      premiumType: n,
      setStep: a,
      churnUserDiscountOffer: h,
      isFetchingChurnDiscountOffer: O,
      planId: S
    } = (0, g.a)(), I = (0, l.e7)([d.default], () => {
      let e = d.default.getCurrentUser();
      return o()(null != e, "ProfileItem: currentUser cannot be undefined"), e
    });
    i.useEffect(() => {
      (0, u.Z)(I.id, I.getAvatarURL(null, 80))
    }, [I]);
    let T = (0, p.Z)(),
      C = "US" === T.ipCountryCode && "CA" === T.ipSubdivisionCode;
    if (O) return (0, r.jsx)(s.Modal, {
      transitionState: e,
      title: "",
      actions: [],
      onClose: async () => {
        t()
      }
    });
    let A = (0, f.Ju)(S),
      N = A ? y.intl.string(b.default.z2vO3h) : y.intl.string(y.t.PWq8TL),
      P = A ? y.intl.formatToPlainString(b.default.stVlc6, {
        cooldownMonths: E.T9
      }) : y.intl.string(y.t.SOC4ML),
      w = [];
    return null != h ? w.push({
      text: y.intl.string(y.t.zrCzVB),
      onClick: () => a(m.R.CONFIRM_DISCOUNT),
      variant: "secondary",
      icon: c.SrA
    }) : w.push({
      text: y.intl.string(y.t.h9tkAK),
      onClick: () => t(),
      variant: "secondary"
    }), w.push({
      text: C ? y.intl.string(y.t.PfnxqD) : y.intl.string(y.t["3PatSz"]),
      onClick: () => a(m.R.CONFIRM),
      variant: "primary"
    }), (0, r.jsx)(s.Modal, {
      transitionState: e,
      title: N,
      subtitle: P,
      actions: w,
      preview: null !== h && (0, r.jsx)(v, {
        churnUserDiscountOffer: h
      }),
      onClose: async () => t(),
      children: (0, r.jsx)(_.g, {
        currentUser: I,
        premiumType: n,
        onClose: t,
        isDowngrade: false,
        isPremiumRebrand: true
      })
    })
  }