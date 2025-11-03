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
  Chunk129034 = require("./129034.js");

function w(e) {
  var n;
  let {
    quest: t,
    avatarDeco: a,
    onUseNow: i,
    user: l,
    mode: o
  } = e, c = (0, h.fh)(t, h.eC.REWARD).url, u = (0, x.Qy)(t.config), m = (null == (n = l.avatarDecoration) ? true : n.skuId) != null && l.avatarDecoration.skuId === (null == a ? true : a.skuId);
  return (0, r.jsxs)("div", {
    className: b.contentContainer,
    children: [(0, r.jsx)("div", {
      className: b.previewContainer,
      children: (0, r.jsx)(d.Z, {
        user: l,
        guildId: null,
        avatarDecorationOverride: a,
        avatarSize: s.EFr.SIZE_152,
        questPreviewRewardAssetUrl: c
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
  var n, t, s;
  let {
    initialQuest: d,
    onClose: h,
    transitionState: N,
    preview: b,
    location: T,
    sourceQuestContent: P
  } = e, E = null != (t = (0, x.B4)(d.id)) ? t : d, A = a.useMemo(() => (0, C.xn)(E.config), [E]), D = (0, l.e7)([p.default], () => p.default.getCurrentUser()), [L, O] = function(e) {
    let {
      product: n,
      isFetching: t
    } = (0, c.T)(e), r = a.useMemo(() => {
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
  }(null != (s = null == A ? true : A.skuId) ? s : null), S = (null == (n = E.userStatus) ? true : n.claimedAt) != null, R = !b && !S, [k, I] = a.useState(R ? "loading" : "claimed");
  a.useEffect(() => {
    R && (0, g.QB)(E.id, v.y$.CROSS_PLATFORM, T).then(() => I("claimed")).catch(() => I("error"))
  }, [E.id, T, R]);
  let M = true === b && null === L && (null == A ? true : A.skuId) !== "",
    Z = null == D,
    B = Z || null == L && true !== b || M || "loading" === k,
    q = "error" === k || null == A,
    G = async () => {
      I("applying"), I(await O() ? "applied" : "claimed")
    };
  return (0, r.jsx)(j.Z, {
    onClose: h,
    transitionState: N,
    quest: E,
    sourceQuestContent: P,
    location: y.dr.COLLECTIBLE_REWARD_MODAL,
    isRewardContentLoading: B,
    rewardContentHasError: q,
    rewardContent: q || Z ? null : (0, r.jsx)(_.Z, {
      rewardName: A.messages.name,
      children: (0, r.jsx)(w, {
        quest: E,
        avatarDeco: L,
        user: D,
        mode: k,
        onUseNow: G
      })
    })
  })
}