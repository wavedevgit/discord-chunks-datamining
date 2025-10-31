/** Chunk was on 41023 **/
/** chunk id: 305815, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk204418 = require("./204418.jsx"),
  Chunk583434 = require("./583434.js"),
  Chunk164946 = require("./164946.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk960048 = require("./960048.js"),
  Chunk22095 = require("./22095.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk475595 = require("./475595.js"),
  Chunk515108 = require("./515108.jsx"),
  Chunk291967 = require("./291967.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk255712 = require("./255712.js");

function w(e) {
  var n;
  let {
    quest: t,
    avatarDeco: a,
    onUseNow: i,
    user: l,
    mode: o
  } = e, d = (0, h.fh)(t, h.eC.REWARD).url, u = (0, x.Qy)(t.config), m = (null == (n = l.avatarDecoration) ? true : n.skuId) != null && l.avatarDecoration.skuId === (null == a ? true : a.skuId);
  return (0, r.jsxs)("div", {
    className: b.contentContainer,
    children: [(0, r.jsx)("div", {
      className: b.previewContainer,
      children: (0, r.jsx)(c.Z, {
        user: l,
        guildId: null,
        avatarDecorationOverride: a,
        avatarSize: s.EFr.SIZE_152,
        questPreviewRewardAssetUrl: d
      })
    }), (0, r.jsxs)("div", {
      className: b.copyContainer,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: b.heading,
        children: N.intl.string(N.t["0/Yz+Y"])
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: u
      })]
    }), (0, r.jsx)(s.Button, {
      variant: "secondary",
      size: "sm",
      text: m ? N.intl.string(N.t.hjaYYn) : N.intl.string(N.t.MAS7uK),
      loading: "applying" === o,
      disabled: "claimed" !== o || m,
      onClick: i,
      fullWidth: true
    })]
  })
}

function T(e) {
  var n, t;
  let {
    quest: s,
    onClose: c,
    transitionState: x,
    preview: h,
    location: N,
    sourceQuestContent: b
  } = e, T = a.useMemo(() => (0, C.xn)(s.config), [s]), P = (0, l.e7)([p.default], () => p.default.getCurrentUser()), [E, A] = function(e) {
    let {
      product: n,
      isFetching: t
    } = (0, d.T)(e), r = a.useMemo(() => {
      if (null == n || t) return null;
      let e = n.items.find(e => e.type === i.Z.AVATAR_DECORATION);
      return null != e ? e : null
    }, [n, t]), l = async () => {
      if (null == r) return f.Z.addBreadcrumb({
        message: "Error saving avatar decoration; it is null"
      }), false;
      (0, o.cV)(r);
      let e = m.Z.getAllPending(),
        n = (0, u.ED)(e),
        t = await (0, o.Mn)(n);
      return (0, o.si)(), !!(null == t ? true : t.ok)
    };
    return [r, l]
  }(null != (t = null == T ? true : T.skuId) ? t : null), D = (null == (n = s.userStatus) ? true : n.claimedAt) != null, L = !h && !D, [O, S] = a.useState(L ? "loading" : "claimed");
  a.useEffect(() => {
    L && (0, g.QB)(s.id, v.y$.CROSS_PLATFORM, N).then(() => S("claimed")).catch(() => S("error"))
  }, [s.id, N, L]);
  let R = true === h && null === E && (null == T ? true : T.skuId) !== "",
    k = null == P,
    I = k || null == E && true !== h || R || "loading" === O,
    M = "error" === O || null == T,
    Z = async () => {
      S("applying"), S(await A() ? "applied" : "claimed")
    };
  return (0, r.jsx)(j.Z, {
    onClose: c,
    transitionState: x,
    quest: s,
    sourceQuestContent: b,
    location: y.dr.COLLECTIBLE_REWARD_MODAL,
    isRewardContentLoading: I,
    rewardContentHasError: M,
    rewardContent: M || k ? null : (0, r.jsx)(_.Z, {
      rewardName: T.messages.name,
      children: (0, r.jsx)(w, {
        quest: s,
        avatarDeco: E,
        user: P,
        mode: O,
        onUseNow: Z
      })
    })
  })
}