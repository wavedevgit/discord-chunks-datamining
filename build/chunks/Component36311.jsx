/** Chunk was on 62987 **/
/** chunk id: 36311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk622822 = require("./622822.js"),
  Chunk986035 = require("./986035.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk723359 = require("./723359.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk118177 = require("./118177.js");

function x(e) {
  let {
    guild: t,
    channelId: n
  } = e, l = (0, o.e7)([g.default], () => {
    var e;
    return (null == (e = g.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
  }), a = (0, h.Kt)(), {
    verifyAgreementButtonText: c,
    verifyGateDescription: x
  } = (0, h.a1)((0, m.Y2)(t) ? _.L0.NSFW_SERVER : _.L0.NSFW_CHANNEL), O = i.useCallback(() => {
    null != t && u.Z.nsfwReturnToSafety(t.id)
  }, [t]), j = i.useCallback(() => {
    null != t && u.Z.nsfwAgree(t.id)
  }, [t]), E = i.useCallback(() => {
    d.Z.showAgeVerificationGetStartedModal({
      entryPoint: p.cU.NSFW_GUILD
    })
  }, []), S = (0, m.Y2)(t), I = C.intl.string(S ? C.t.xi46lp : C.t.ZmwvDQ);
  return a ? (0, r.jsx)(f.Z, {
    guildId: null == t ? true : t.id,
    channelId: n,
    modalType: p.it.NSFW_CHANNEL_AGE_VERIFY,
    onAgree: E,
    onDisagree: O,
    title: I,
    description: x,
    agreement: c,
    agreementButtonColor: s.zx.Colors.BRAND,
    disagreement: C.intl.string(C.t["/g10LC"]),
    imageClassName: v.ageGatedImage
  }) : l ? (0, r.jsx)(f.Z, {
    guildId: null == t ? true : t.id,
    channelId: n,
    modalType: p.it.NSFW_CHANNEL_UNDERAGE,
    onAgree: j,
    onDisagree: O,
    title: C.intl.string(S ? C.t["H0SG/v"] : C.t.NEabBQ),
    description: C.intl.format(S ? C.t["6++3cX"] : C.t["2kHZen"], {
      helpURL: b.Z.getArticleURL(y.BhN.NSFW_AGE_GATING)
    }),
    agreement: null,
    disagreement: C.intl.string(C.t["/g10LC"]),
    imageClassName: v.ageGatedImage
  }) : (0, r.jsx)(f.Z, {
    guildId: null == t ? true : t.id,
    channelId: n,
    modalType: p.it.NSFW_CHANNEL_VERIFIED,
    onAgree: j,
    onDisagree: O,
    title: I,
    description: C.intl.string(S ? C.t.ZtuRtr : C.t.E4Cd5O),
    agreement: C.intl.string(C.t.wVq7ur),
    disagreement: C.intl.string(C.t["/g10LC"])
  })
}
let O = function(e) {
  let {
    guild: t,
    channelId: n,
    className: l
  } = e, o = i.useRef(null);
  return i.useEffect(() => {
    let {
      current: e
    } = o;
    null == e || e.scrollToBottom()
  }, []), (0, r.jsx)(c.Den, {
    ref: o,
    className: v.scroller,
    children: (0, r.jsx)("div", {
      className: a()(l, v.wrapper),
      children: (0, r.jsx)(x, {
        guild: t,
        channelId: n
      })
    })
  })
}