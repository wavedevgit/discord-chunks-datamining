/** Chunk was on web.js **/
/** chunk id: 606423, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk576622 = require("./576622.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk477421 = require("./477421.js"),
  Chunk96304 = require("./96304.jsx"),
  Chunk816252 = require("./816252.jsx"),
  Chunk473702 = require("./473702.js"),
  Chunk916974 = require("./916974.js"),
  Chunk88001 = require("./88001.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk426771 = require("./426771.js");
let v = e => {
    let {
      churnUserDiscountOffer: t
    } = e;
    return null == t ? null : (0, r.jsx)("div", {
      className: O.i,
      children: (0, r.jsx)(h._, {
        userDiscountOffer: t
      })
    })
  },
  A = () => {
    let {
      transitionState: e,
      onClose: t,
      premiumType: n,
      setStep: a,
      churnUserDiscountOffer: h,
      isFetchingChurnDiscountOffer: O,
      planId: A
    } = (0, g.X)(), I = (0, l.bG)([d.default], () => {
      let e = d.default.getCurrentUser();
      return s()(null != e, "ProfileItem: currentUser cannot be undefined"), e
    });
    i.useEffect(() => {
      (0, u.A)(I.id, I.getAvatarURL(null, 80))
    }, [I]);
    let S = (0, p.A)(),
      T = "US" === S.ipCountryCode && "CA" === S.ipSubdivisionCode;
    if (O) return (0, r.jsx)(o.Modal, {
      transitionState: e,
      title: "",
      actions: [],
      onClose: async () => {
        t()
      }
    });
    let C = (0, f.Zb)(A),
      N = C ? b.intl.string(y.default.z2vO3h) : b.intl.string(b.t.PWq8TL),
      w = C ? b.intl.formatToPlainString(y.default.stVlc6, {
        cooldownMonths: E.wl
      }) : b.intl.string(b.t.SOC4ML),
      R = [];
    return null != h ? R.push({
      text: b.intl.string(b.t.zrCzVB),
      onClick: () => a(m.g.CONFIRM_DISCOUNT),
      variant: "secondary",
      icon: c.tvc
    }) : R.push({
      text: b.intl.string(b.t.h9tkAK),
      onClick: () => t(),
      variant: "secondary"
    }), R.push({
      text: T ? b.intl.string(b.t.PfnxqD) : b.intl.string(b.t["3PatSz"]),
      onClick: () => a(m.g.CONFIRM),
      variant: "primary"
    }), (0, r.jsx)(o.Modal, {
      transitionState: e,
      title: N,
      subtitle: w,
      actions: R,
      preview: null !== h && (0, r.jsx)(v, {
        churnUserDiscountOffer: h
      }),
      onClose: async () => t(),
      children: (0, r.jsx)(_.l, {
        currentUser: I,
        premiumType: n,
        onClose: t,
        isDowngrade: false,
        isPremiumRebrand: true
      })
    })
  }