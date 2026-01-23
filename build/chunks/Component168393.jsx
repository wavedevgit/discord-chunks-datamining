/** Chunk was on web.js **/
/** chunk id: 168393, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  SubscriptionDetailsModal: () => g
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

function g(e) {
  var t, n;
  let {
    appId: g,
    subscriptionType: E,
    onClose: y,
    skuId: b,
    guildId: O,
    transitionState: v,
    onHeaderTitleClick: A
  } = e, {
    data: I
  } = (0, c.A)(b), S = null == I ? true : I[0], {
    data: T
  } = (0, l.d)(b), C = i.useMemo(() => {
    var e;
    return (null == T ? true : T.thumbnail) != null && null != (e = p.A.toURLSafe((0, f.YE)(g, T.thumbnail, 256))) ? e : true
  }, [g, null == T ? true : T.thumbnail]), N = i.useMemo(() => {
    let e = null == T ? true : T.benefits;
    if (null != e && 0 !== e.length) return e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, u.N)(g, e.icon)
    }))
  }, [g, null == T ? true : T.benefits]), {
    openModal: w,
    subscriptionPurchaseButtonState: R
  } = (0, d.A)({
    skuId: b,
    initialSubscribeForGuild: null != O ? O : true
  });
  return null == T ? null : (0, r.jsx)(_.C, {
    appId: g,
    skuId: b,
    transitionState: v,
    onHeaderTitleClick: null != A ? A : y,
    onClose: y,
    footer: (0, r.jsx)(h.rc, {
      onClick: w,
      appId: g,
      subscriptionType: E,
      skuId: b,
      subscriptionPlan: S,
      state: R
    }),
    children: (0, r.jsx)(m.D, {
      appId: g,
      skuId: b,
      benefits: null != N ? N.map(e => (0, r.jsx)(a.FY, {
        header: e.title,
        icon: e.icon,
        description: e.description
      }, e.id)) : true,
      description: null != (t = T.description) ? t : true,
      imgSrc: C,
      title: null != (n = null == S ? true : S.name) ? n : T.summary,
      tag: (0, r.jsx)(s.M, {
        type: E
      }),
      FallbackIcon: o.bhD
    })
  })
}