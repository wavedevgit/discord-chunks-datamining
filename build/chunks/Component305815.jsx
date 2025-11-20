/** Chunk was on 41023 **/
/** chunk id: 305815, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk204418 = require("./204418.jsx"),
  Chunk583434 = require("./583434.js"),
  Chunk150039 = require("./150039.js"),
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

function A(e) {
  var n;
  let {
    quest: t,
    avatarDeco: i,
    onUseNow: a,
    user: l,
    mode: s
  } = e, d = (0, j.fh)(t, j.eC.REWARD).url, u = (0, h.Qy)(t.config), m = (null == (n = l.avatarDecoration) ? true : n.skuId) != null && l.avatarDecoration.skuId === (null == i ? true : i.skuId);
  return (0, r.jsxs)("div", {
    className: w.contentContainer,
    children: [(0, r.jsx)("div", {
      className: w.previewContainer,
      children: (0, r.jsx)(c.Z, {
        user: l,
        guildId: null,
        avatarDecorationOverride: i,
        avatarSize: o.EFr.SIZE_152,
        questPreviewRewardAssetUrl: d
      })
    }), (0, r.jsxs)("div", {
      className: w.copyContainer,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: w.heading,
        children: b.intl.string(b.t["0/Yz+Y"])
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: u
      })]
    }), (0, r.jsx)(o.Button, {
      variant: "secondary",
      size: "sm",
      text: m ? b.intl.string(b.t.hjaYYn) : b.intl.string(b.t.MAS7uK),
      loading: "applying" === s,
      disabled: "claimed" !== s || m,
      onClick: a,
      fullWidth: true
    })]
  })
}

function P(e) {
  var n, t, o;
  let {
    initialQuest: c,
    onClose: j,
    transitionState: b,
    preview: w,
    location: P,
    sourceQuestContent: D
  } = e, E = null != (t = (0, h.B4)(c.id)) ? t : c, T = i.useMemo(() => (0, C.xn)(E.config), [E]), O = (0, l.e7)([f.default], () => f.default.getCurrentUser()), [L, R] = function(e) {
    let {
      product: n,
      isFetching: t
    } = (0, d.T)(e), r = i.useMemo(() => {
      if (null == n || t) return null;
      let e = n.items.find(e => e.type === a.Z.AVATAR_DECORATION);
      return null != e ? e : null
    }, [n, t]), l = async () => {
      if (null == r) return x.Z.addBreadcrumb({
        message: "Error saving avatar decoration; it is null"
      }), false;
      (0, u.PO)(r);
      let e = p.Z.getAllPending(),
        n = (0, m.ED)(e),
        t = await (0, s.Mn)(n);
      return (0, s.si)(), !!(null == t ? true : t.ok)
    };
    return [r, l]
  }(null != (o = null == T ? true : T.skuId) ? o : null), I = (null == (n = E.userStatus) ? true : n.claimedAt) != null, S = !w && !I, [k, M] = i.useState(S ? "loading" : "claimed");
  i.useEffect(() => {
    S && (0, g.QB)(E.id, v.y$.CROSS_PLATFORM, P).then(() => M("claimed")).catch(() => M("error"))
  }, [E.id, P, S]);
  let Z = true === w && null === L && (null == T ? true : T.skuId) !== "",
    B = null == O,
    W = B || null == L && true !== w || Z || "loading" === k,
    q = "error" === k || null == T,
    G = async () => {
      M("applying"), M(await R() ? "applied" : "claimed")
    };
  return (0, r.jsx)(_.Z, {
    onClose: j,
    transitionState: b,
    quest: E,
    sourceQuestContent: D,
    location: N.dr.COLLECTIBLE_REWARD_MODAL,
    isRewardContentLoading: W,
    rewardContentHasError: q,
    rewardContent: q || B ? null : (0, r.jsx)(y.Z, {
      rewardName: T.messages.name,
      children: (0, r.jsx)(A, {
        quest: E,
        avatarDeco: L,
        user: O,
        mode: k,
        onUseNow: G
      })
    })
  })
}