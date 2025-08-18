/** Chunk was on 30202 **/
/** chunk id: 407965, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => j
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
      churnUserDiscountOffer: g,
      isFetchingChurnDiscountOffer: x
    } = (0, Chunk594135.a)(), j = (0, Chunk442837.e7)([Chunk594174.default], () => {
      let e = Chunk594174.default.getCurrentUser();
      return a()(null != module, "ProfileItem: currentUser cannot be undefined"), module
    });
    Chunk647438.useEffect(() => {
      (0, Chunk484459.Z)(j.id, j.getAvatarURL(null, 80))
    }, [j]);
    let E = (0, Chunk847903.Z)(),
      C = "US" === E.ipCountryCode && "CA" === E.ipSubdivisionCode;
    if (Chunk181679) return (0, Chunk951288.jsx)(Chunk82659.Modal, {
      transitionState: module,
      title: "",
      actions: [],
      onClose: async () => {
        exports()
      }
    });
    let O = [];
    return null != Chunk10508 ? O.push({
      text: Chunk388032.intl.string(Chunk388032.t.zrCzVF),
      onClick: () => Chunk512722(Chunk45474.R.CONFIRM_DISCOUNT),
      variant: "secondary",
      icon: Chunk481060.SrA
    }) : O.push({
      text: Chunk388032.intl.string(Chunk388032.t.h9tkAA),
      onClick: () => exports(),
      variant: "secondary"
    }), O.push({
      text: C ? Chunk388032.intl.string(Chunk388032.t.PfnxqK) : Chunk388032.intl.string(Chunk388032.t["3PatS0"]),
      onClick: () => Chunk512722(Chunk45474.R.CONFIRM),
      variant: "primary"
    }), (0, Chunk951288.jsx)(Chunk82659.Modal, {
      transitionState: module,
      title: Chunk388032.intl.string(Chunk388032.t.PWq8TE),
      subtitle: Chunk388032.intl.formatToPlainString(Chunk388032.t.nsGVzs, {}),
      actions: O,
      preview: null !== Chunk10508 && (0, Chunk951288.jsx)(_, {
        churnUserDiscountOffer: Chunk10508
      }),
      onClose: async () => exports(),
      children: (0, Chunk951288.jsx)(Chunk807163.g, {
        currentUser: j,
        premiumType: require,
        onClose: exports,
        isDowngrade: false,
        isPremiumRebrand: true
      })
    })
  }