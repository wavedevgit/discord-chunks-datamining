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
  Chunk96011 = require("./96011.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk181679 = require("./181679.js");
let v = e => {
    let {
      churnUserDiscountOffer: t
    } = e;
    return null == t ? null : (0, r.jsx)("div", {
      className: O.previewContainer,
      children: (0, r.jsx)(m.o, {
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
      churnUserDiscountOffer: m,
      isFetchingChurnDiscountOffer: O,
      planId: S
    } = (0, Chunk594135.a)(), I = (0, Chunk442837.e7)([Chunk594174.default], () => {
      let e = Chunk594174.default.getCurrentUser();
      return o()(null != module, "ProfileItem: currentUser cannot be undefined"), module
    });
    Chunk473749.useEffect(() => {
      (0, Chunk484459.Z)(I.id, I.getAvatarURL(null, 80))
    }, [I]);
    let T = (0, Chunk847903.Z)(),
      C = "US" === T.ipCountryCode && "CA" === T.ipSubdivisionCode;
    if (Chunk181679) return (0, Chunk54381.jsx)(Chunk793030.Modal, {
      transitionState: module,
      title: "",
      actions: [],
      onClose: async () => {
        exports()
      }
    });
    let A = (0, Chunk74538.Ju)(S),
      N = A ? Chunk388032.intl.string(Chunk96011.default.z2vO3h) : Chunk388032.intl.string(Chunk388032.t.PWq8TL),
      P = A ? Chunk388032.intl.formatToPlainString(Chunk96011.default.stVlc6, {
        cooldownMonths: Chunk282793.T9
      }) : Chunk388032.intl.string(Chunk388032.t.SOC4ML),
      R = [];
    return null != Chunk10508 ? R.push({
      text: Chunk388032.intl.string(Chunk388032.t.zrCzVB),
      onClick: () => Chunk512722(Chunk45474.R.CONFIRM_DISCOUNT),
      variant: "secondary",
      icon: Chunk481060.SrA
    }) : R.push({
      text: Chunk388032.intl.string(Chunk388032.t.h9tkAK),
      onClick: () => exports(),
      variant: "secondary"
    }), R.push({
      text: C ? Chunk388032.intl.string(Chunk388032.t.PfnxqD) : Chunk388032.intl.string(Chunk388032.t["3PatSz"]),
      onClick: () => Chunk512722(Chunk45474.R.CONFIRM),
      variant: "primary"
    }), (0, Chunk54381.jsx)(Chunk793030.Modal, {
      transitionState: module,
      title: N,
      subtitle: P,
      actions: R,
      preview: null !== Chunk10508 && (0, Chunk54381.jsx)(v, {
        churnUserDiscountOffer: Chunk10508
      }),
      onClose: async () => exports(),
      children: (0, Chunk54381.jsx)(Chunk807163.g, {
        currentUser: I,
        premiumType: require,
        onClose: exports,
        isDowngrade: false,
        isPremiumRebrand: true
      })
    })
  }