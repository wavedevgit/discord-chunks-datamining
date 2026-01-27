/** Chunk was on 64850 **/
/** chunk id: 168393, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  SubscriptionDetailsModal: () => f
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk885996 = require("./885996.jsx"),
  Chunk423090 = require("./423090.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk272859 = require("./272859.js"),
  Chunk955440 = require("./955440.js"),
  Chunk3432 = require("./3432.jsx"),
  Chunk185438 = require("./185438.js"),
  Chunk371794 = require("./371794.js"),
  Chunk998218 = require("./998218.js"),
  Chunk550732 = require("./550732.jsx"),
  Chunk376374 = require("./376374.jsx"),
  Chunk86889 = require("./86889.jsx");

function f(e) {
  var t, n;
  let {
    appId: f,
    subscriptionType: j,
    onClose: h,
    skuId: b,
    guildId: g,
    transitionState: y,
    onHeaderTitleClick: S
  } = e, {
    data: T
  } = (0, c.A)(b), E = null == T ? true : T[0], {
    data: I
  } = (0, a.d)(b), O = r.useMemo(() => {
    var e;
    return (null == I ? true : I.thumbnail) != null && null != (e = p.A.toURLSafe((0, x.YE)(f, I.thumbnail, 256))) ? e : true
  }, [f, null == I ? true : I.thumbnail]), A = r.useMemo(() => {
    let e = null == I ? true : I.benefits;
    if (null != e && 0 !== e.length) return e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, d.N)(f, e.icon)
    }))
  }, [f, null == I ? true : I.benefits]), {
    openModal: R,
    subscriptionPurchaseButtonState: N
  } = (0, u.A)({
    skuId: b,
    initialSubscribeForGuild: null != g ? g : true
  });
  return null == I ? null : (0, l.jsx)(m.C, {
    appId: f,
    skuId: b,
    transitionState: y,
    onHeaderTitleClick: null != S ? S : h,
    onClose: h,
    footer: (0, l.jsx)(v.rc, {
      onClick: R,
      appId: f,
      subscriptionType: j,
      skuId: b,
      subscriptionPlan: E,
      state: N
    }),
    children: (0, l.jsx)(_.D, {
      appId: f,
      skuId: b,
      benefits: null != A ? A.map(e => (0, l.jsx)(i.FY, {
        header: e.title,
        icon: e.icon,
        description: e.description
      }, e.id)) : true,
      description: null != (t = I.description) ? t : true,
      imgSrc: O,
      title: null != (n = null == E ? true : E.name) ? n : I.summary,
      tag: (0, l.jsx)(s.M, {
        type: j
      }),
      FallbackIcon: o.bhD
    })
  })
}