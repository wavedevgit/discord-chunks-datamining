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
    onHeaderTitleClick: S
  } = e, {
    data: I
  } = (0, c.H)(y), T = null == I ? true : I[0], {
    data: C
  } = (0, l.Z)(y), A = i.useMemo(() => {
    var e;
    return (null == C ? true : C.thumbnail) != null && null != (e = p.Z.toURLSafe((0, f._W)(g, C.thumbnail, 256))) ? e : true
  }, [g, null == C ? true : C.thumbnail]), N = i.useMemo(() => {
    let e = null == C ? true : C.benefits;
    if (null != e && 0 !== e.length) return e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, u.n)(g, e.icon)
    }))
  }, [g, null == C ? true : C.benefits]), {
    openModal: P,
    subscriptionPurchaseButtonState: R
  } = (0, d.Z)({
    skuId: y,
    initialSubscribeForGuild: null != O ? O : true
  });
  return null == C ? null : (0, r.jsx)(_.A, {
    appId: g,
    skuId: y,
    transitionState: v,
    onHeaderTitleClick: null != S ? S : b,
    onClose: b,
    footer: (0, r.jsx)(m.pV, {
      onClick: P,
      appId: g,
      subscriptionType: E,
      skuId: y,
      subscriptionPlan: T,
      state: R
    }),
    children: (0, r.jsx)(h.i, {
      appId: g,
      skuId: y,
      benefits: null != N ? N.map(e => (0, r.jsx)(a.Gm, {
        header: e.title,
        icon: e.icon,
        description: e.description
      }, e.id)) : true,
      description: null != (t = C.description) ? t : true,
      imgSrc: A,
      title: null != (n = null == T ? true : T.name) ? n : C.summary,
      tag: (0, r.jsx)(o.Z, {
        type: E
      }),
      FallbackIcon: s.Vh5
    })
  })
}