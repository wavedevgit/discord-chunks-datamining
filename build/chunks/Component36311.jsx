/** Chunk was on 21087 **/
/** chunk id: 36311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk351651 = require("./351651.js");

function O(e) {
  let {
    guild: t,
    channelId: n
  } = e, l = (0, s.e7)([m.default], () => {
    var e;
    return (null == (e = m.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
  }), a = (0, p.Kt)(), {
    verifyAgreementButtonText: c,
    verifyGateDescription: O
  } = (0, p.a1)((0, g.Y2)(t) ? x.L0.NSFW_SERVER : x.L0.NSFW_CHANNEL), v = i.useCallback(() => {
    null != t && u.Z.nsfwReturnToSafety(t.id)
  }, [t]), C = i.useCallback(() => {
    null != t && u.Z.nsfwAgree(t.id)
  }, [t]), E = i.useCallback(() => {
    d.Z.showAgeVerificationGetStartedModal(h.cU.NSFW_GUILD)
  }, []), S = (0, g.Y2)(t), I = j.intl.string(S ? j.t.xi46lp : j.t.ZmwvDQ);
  return a ? (0, r.jsx)(f.Z, {
    guildId: null == t ? true : t.id,
    channelId: n,
    modalType: h.it.NSFW_CHANNEL_AGE_VERIFY,
    onAgree: E,
    onDisagree: v,
    title: I,
    description: O,
    agreement: c,
    agreementButtonColor: o.zx.Colors.BRAND,
    disagreement: j.intl.string(j.t["/g10LC"]),
    imageClassName: _.ageGatedImage
  }) : l ? (0, r.jsx)(f.Z, {
    guildId: null == t ? true : t.id,
    channelId: n,
    modalType: h.it.NSFW_CHANNEL_UNDERAGE,
    onAgree: C,
    onDisagree: v,
    title: j.intl.string(S ? j.t["H0SG/v"] : j.t.NEabBQ),
    description: j.intl.format(S ? j.t["6++3cX"] : j.t["2kHZen"], {
      helpURL: b.Z.getArticleURL(y.BhN.NSFW_AGE_GATING)
    }),
    agreement: null,
    disagreement: j.intl.string(j.t["/g10LC"]),
    imageClassName: _.ageGatedImage
  }) : (0, r.jsx)(f.Z, {
    guildId: null == t ? true : t.id,
    channelId: n,
    modalType: h.it.NSFW_CHANNEL_VERIFIED,
    onAgree: C,
    onDisagree: v,
    title: I,
    description: j.intl.string(S ? j.t.ZtuRtr : j.t.E4Cd5O),
    agreement: j.intl.string(j.t.wVq7ur),
    disagreement: j.intl.string(j.t["/g10LC"])
  })
}
let v = function(e) {
  let {
    guild: t,
    channelId: n,
    className: l
  } = e, s = i.useRef(null);
  return i.useEffect(() => {
    let {
      current: e
    } = s;
    null == e || e.scrollToBottom()
  }, []), (0, r.jsx)(c.Den, {
    ref: s,
    className: _.scroller,
    children: (0, r.jsx)("div", {
      className: a()(l, _.wrapper),
      children: (0, r.jsx)(O, {
        guild: t,
        channelId: n
      })
    })
  })
}