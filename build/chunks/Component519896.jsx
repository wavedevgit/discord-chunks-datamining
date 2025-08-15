/** Chunk was on 86282 **/
/** chunk id: 519896, original params: e,n,l (module,exports,require) **/
require.r(exports), require.d(exports, {
  SubscriptionDetailsModal: () => j
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk269210 = require("./269210.jsx"),
  Chunk752843 = require("./752843.jsx"),
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

function j(e) {
  var n, l;
  let {
    appId: j,
    subscriptionType: f,
    onClose: b,
    skuId: N,
    guildId: S,
    transitionState: g,
    onHeaderTitleClick: O
  } = e, {
    data: I
  } = (0, c.H)(N), C = I[0], {
    data: y
  } = (0, o.Z)(N), T = r.useMemo(() => {
    var e;
    return (null == y ? true : y.thumbnail) != null && null != (e = x.Z.toURLSafe((0, m._W)(j, y.thumbnail, 256))) ? e : true
  }, [j, null == y ? true : y.thumbnail]), R = r.useMemo(() => {
    let e = null == y ? true : y.benefits;
    if (null != e && 0 !== e.length) return e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, d.n)(j, e.icon)
    }))
  }, [j, null == y ? true : y.benefits]), {
    openModal: k,
    subscriptionPurchaseButtonState: E
  } = (0, u.Z)({
    skuId: N,
    initialSubscribeForGuild: null != S ? S : true
  });
  return null == y ? null : (0, t.jsx)(h.A, {
    appId: j,
    skuId: N,
    transitionState: g,
    onHeaderTitleClick: null != O ? O : b,
    onClose: b,
    footer: (0, t.jsx)(p.pV, {
      onClick: k,
      appId: j,
      subscriptionType: f,
      skuId: N,
      subscriptionPlan: C,
      state: E
    }),
    children: (0, t.jsx)(v.i, {
      appId: j,
      skuId: N,
      benefits: null != R ? R.map(e => (0, t.jsx)(i.Gm, {
        header: e.title,
        icon: e.icon,
        description: e.description
      }, e.id)) : true,
      description: null != (n = y.description) ? n : true,
      imgSrc: T,
      title: null != (l = null == C ? true : C.name) ? l : y.summary,
      tag: (0, t.jsx)(s.Z, {
        type: f
      }),
      FallbackIcon: a.Vh5
    })
  })
}