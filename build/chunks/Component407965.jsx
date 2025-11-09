/** Chunk was on web.js **/
/** chunk id: 407965, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => y
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk484459 = require("./484459.js"),
  Chunk594174 = require("./594174.js"),
  Chunk847903 = require("./847903.js"),
  Chunk807163 = require("./807163.jsx"),
  Chunk10508 = require("./10508.jsx"),
  Chunk45474 = require("./45474.js"),
  Chunk594135 = require("./594135.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk300845 = require("./300845.js");
let b = e => {
    let {
      churnUserDiscountOffer: t
    } = e;
    return null == t ? null : (0, r.jsx)("div", {
      className: E.previewContainer,
      children: (0, r.jsx)(p.o, {
        userDiscountOffer: t
      })
    })
  },
  y = () => {
    let {
      transitionState: e,
      onClose: t,
      premiumType: n,
      setStep: a,
      churnUserDiscountOffer: p,
      isFetchingChurnDiscountOffer: E
    } = (0, Chunk594135.a)(), y = (0, Chunk442837.e7)([Chunk594174.default], () => {
      let e = Chunk594174.default.getCurrentUser();
      return o()(null != module, "ProfileItem: currentUser cannot be undefined"), module
    });
    Chunk647438.useEffect(() => {
      (0, Chunk484459.Z)(y.id, y.getAvatarURL(null, 80))
    }, [y]);
    let O = (0, Chunk847903.Z)(),
      v = "US" === O.ipCountryCode && "CA" === O.ipSubdivisionCode;
    if (Chunk300845) return (0, Chunk951288.jsx)(Chunk793030.Modal, {
      transitionState: module,
      title: "",
      actions: [],
      onClose: async () => {
        exports()
      }
    });
    let I = [];
    return null != Chunk10508 ? I.push({
      text: Chunk388032.intl.string(Chunk388032.t.zrCzVB),
      onClick: () => Chunk512722(Chunk45474.R.CONFIRM_DISCOUNT),
      variant: "secondary",
      icon: Chunk481060.SrA
    }) : I.push({
      text: Chunk388032.intl.string(Chunk388032.t.h9tkAK),
      onClick: () => exports(),
      variant: "secondary"
    }), I.push({
      text: v ? Chunk388032.intl.string(Chunk388032.t.PfnxqD) : Chunk388032.intl.string(Chunk388032.t["3PatSz"]),
      onClick: () => Chunk512722(Chunk45474.R.CONFIRM),
      variant: "primary"
    }), (0, Chunk951288.jsx)(Chunk793030.Modal, {
      transitionState: module,
      title: Chunk388032.intl.string(Chunk388032.t.PWq8TL),
      subtitle: Chunk388032.intl.formatToPlainString(Chunk388032.t.nsGVzg, {}),
      actions: I,
      preview: null !== Chunk10508 && (0, Chunk951288.jsx)(b, {
        churnUserDiscountOffer: Chunk10508
      }),
      onClose: async () => exports(),
      children: (0, Chunk951288.jsx)(Chunk807163.g, {
        currentUser: y,
        premiumType: require,
        onClose: exports,
        isDowngrade: false,
        isPremiumRebrand: true
      })
    })
  }