/** Chunk was on web.js **/
/** chunk id: 519896, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  SubscriptionDetailsModal: () => g
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk621082 = require("./621082.jsx"),
  Chunk942682 = require("./942682.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk757746 = require("./757746.js"),
  Chunk930155 = require("./930155.js"),
  Chunk889989 = require("./889989.jsx"),
  Chunk263519 = require("./263519.js"),
  Chunk73346 = require("./73346.js"),
  Chunk591759 = require("./591759.js"),
  Chunk886253 = require("./886253.jsx"),
  Chunk680005 = require("./680005.jsx"),
  Chunk938337 = require("./938337.jsx");

function g(e) {
  var t, n;
  let {
    appId: g,
    subscriptionType: E,
    onClose: b,
    skuId: y,
    guildId: O,
    transitionState: v,
    onHeaderTitleClick: I
  } = e, {
    data: T
  } = (0, c.H)(y), S = null == T ? true : T[0], {
    data: A
  } = (0, l.Z)(y), C = i.useMemo(() => {
    var e;
    return (null == A ? true : A.thumbnail) != null && null != (e = _.Z.toURLSafe((0, f._W)(g, A.thumbnail, 256))) ? e : true
  }, [g, null == A ? true : A.thumbnail]), N = i.useMemo(() => {
    let e = null == A ? true : A.benefits;
    if (null != e && 0 !== e.length) return e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, u.n)(g, e.icon)
    }))
  }, [g, null == A ? true : A.benefits]), {
    openModal: R,
    subscriptionPurchaseButtonState: P
  } = (0, d.Z)({
    skuId: y,
    initialSubscribeForGuild: null != O ? O : true
  });
  return null == A ? null : (0, r.jsx)(p.A, {
    appId: g,
    skuId: y,
    transitionState: v,
    onHeaderTitleClick: null != I ? I : b,
    onClose: b,
    footer: (0, r.jsx)(h.pV, {
      onClick: R,
      appId: g,
      subscriptionType: E,
      skuId: y,
      subscriptionPlan: S,
      state: P
    }),
    children: (0, r.jsx)(m.i, {
      appId: g,
      skuId: y,
      benefits: null != N ? N.map(e => (0, r.jsx)(a.Gm, {
        header: e.title,
        icon: e.icon,
        description: e.description
      }, e.id)) : true,
      description: null != (t = A.description) ? t : true,
      imgSrc: C,
      title: null != (n = null == S ? true : S.name) ? n : A.summary,
      tag: (0, r.jsx)(o.Z, {
        type: E
      }),
      FallbackIcon: s.Vh5
    })
  })
}