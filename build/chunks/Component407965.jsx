/** Chunk was on 30202 **/
/** chunk id: 407965, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => j
}), require("./539854.js"), require("./583741.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk484459 = require("./484459.js"),
  Chunk594174 = require("./594174.js"),
  Chunk847903 = require("./847903.js"),
  Chunk807163 = require("./807163.jsx"),
  Chunk10508 = require("./10508.jsx"),
  Chunk45474 = require("./45474.js"),
  Chunk594135 = require("./594135.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk181679 = require("./181679.js");
let _ = e => {
    let {
      churnUserDiscountOffer: t
    } = e;
    return null == t ? null : (0, i.jsx)("div", {
      className: x.previewContainer,
      children: (0, i.jsx)(g.o, {
        userDiscountOffer: t
      })
    })
  },
  j = () => {
    let {
      transitionState: e,
      onClose: t,
      premiumType: n,
      setStep: s,
      discountPrimary: g,
      churnUserDiscountOffer: x,
      isFetchingChurnDiscountOffer: j
    } = (0, Chunk594135.a)(), E = (0, Chunk442837.e7)([Chunk594174.default], () => {
      let e = Chunk594174.default.getCurrentUser();
      return a()(null != module, "ProfileItem: currentUser cannot be undefined"), module
    });
    Chunk73800.useEffect(() => {
      (0, Chunk484459.Z)(E.id, E.getAvatarURL(null, 80))
    }, [E]);
    let C = (0, Chunk847903.Z)(),
      O = "US" === C.ipCountryCode && "CA" === C.ipSubdivisionCode;
    if (j) return (0, Chunk255367.jsx)(Chunk82659.Modal, {
      transitionState: module,
      title: "",
      actions: [],
      onClose: async () => {
        exports()
      }
    });
    let v = [];
    return null != Chunk181679 ? v.push({
      text: Chunk388032.intl.string(Chunk388032.t.zrCzVF),
      onClick: () => Chunk512722(Chunk45474.R.CONFIRM_DISCOUNT),
      variant: Chunk10508 ? "primary" : "secondary",
      icon: Chunk481060.SrA
    }) : v.push({
      text: Chunk388032.intl.string(Chunk388032.t.h9tkAA),
      onClick: () => exports(),
      variant: "secondary"
    }), v.push({
      text: O ? Chunk388032.intl.string(Chunk388032.t.PfnxqK) : Chunk388032.intl.string(Chunk388032.t["3PatS0"]),
      onClick: () => Chunk512722(Chunk45474.R.CONFIRM),
      variant: null !== Chunk181679 && Chunk10508 ? "secondary" : "primary"
    }), Chunk10508 && null !== Chunk181679 && v.reverse(), (0, Chunk255367.jsx)(Chunk82659.Modal, {
      transitionState: module,
      title: Chunk388032.intl.string(Chunk388032.t.PWq8TE),
      subtitle: Chunk388032.intl.formatToPlainString(Chunk388032.t.nsGVzs, {}),
      actions: v,
      preview: null !== Chunk181679 && (0, Chunk255367.jsx)(_, {
        churnUserDiscountOffer: Chunk181679
      }),
      onClose: async () => exports(),
      children: (0, Chunk255367.jsx)(Chunk807163.g, {
        currentUser: E,
        premiumType: require,
        onClose: exports,
        isDowngrade: false,
        isPremiumRebrand: true
      })
    })
  }