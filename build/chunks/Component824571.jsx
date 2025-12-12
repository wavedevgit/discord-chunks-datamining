/** Chunk was on 28217 **/
/** chunk id: 824571, original params: e,t,n (module,exports,require) **/
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
  Chunk49436 = require("./49436.js"),
  Chunk968843 = require("./968843.js"),
  Chunk475595 = require("./475595.js"),
  Chunk115179 = require("./115179.js"),
  Chunk187546 = require("./187546.jsx"),
  Chunk285910 = require("./285910.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk315573 = require("./315573.js");

function A(e) {
  var t;
  let {
    quest: n,
    avatarDeco: r,
    onUseNow: i,
    user: l,
    mode: s
  } = e, c = (0, v.fh)(n, v.eC.REWARD).url, u = (0, h.Qy)(n.config), m = (null == (t = l.avatarDecoration) ? true : t.skuId) != null && l.avatarDecoration.skuId === (null == r ? true : r.skuId);
  return (0, a.jsxs)("div", {
    className: w.contentContainer,
    children: [(0, a.jsx)("div", {
      className: w.previewContainer,
      children: (0, a.jsx)(d.Z, {
        user: l,
        guildId: null,
        avatarDecorationOverride: r,
        avatarSize: o.EFr.SIZE_152,
        questPreviewRewardAssetUrl: c
      })
    }), (0, a.jsxs)("div", {
      className: w.copyContainer,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-xl/semibold",
        color: "text-strong",
        className: w.heading,
        children: _.intl.string(_.t["0/Yz+Y"])
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: u
      })]
    }), (0, a.jsx)(o.Button, {
      variant: "secondary",
      size: "sm",
      text: m ? _.intl.string(_.t.hjaYYn) : _.intl.string(_.t.MAS7uK),
      loading: "applying" === s,
      disabled: "claimed" !== s || m,
      onClick: i,
      fullWidth: true
    })]
  })
}

function P(e) {
  var t, n, o;
  let {
    initialQuest: d,
    onClose: v,
    transitionState: _,
    preview: w,
    location: P,
    sourceQuestContent: D
  } = e, E = null != (n = (0, h.B4)(d.id)) ? n : d, T = r.useMemo(() => (0, j.xn)(E.config), [E]), O = (0, l.e7)([p.default], () => p.default.getCurrentUser()), [L, R] = function(e) {
    let {
      product: t,
      isFetching: n
    } = (0, c.T)(e), a = r.useMemo(() => {
      if (null == t || n) return null;
      let e = t.items.find(e => e.type === i.Z.AVATAR_DECORATION);
      return null != e ? e : null
    }, [t, n]), l = async () => {
      if (null == a) return x.Z.addBreadcrumb({
        message: "Error saving avatar decoration; it is null"
      }), false;
      (0, u.PO)(a);
      let e = f.Z.getAllPending(),
        t = (0, m.ED)(e),
        n = await (0, s.Mn)(t);
      return (0, s.si)(), !!(null == n ? true : n.ok)
    };
    return [a, l]
  }(null != (o = null == T ? true : T.skuId) ? o : null), I = (null == (t = E.userStatus) ? true : t.claimedAt) != null, k = !w && !I, [S, M] = r.useState(k ? "loading" : "claimed");
  r.useEffect(() => {
    k && (0, g.QB)(E.id, C.y$.CROSS_PLATFORM, P).then(() => M("claimed")).catch(() => M("error"))
  }, [E.id, P, k]);
  let Z = true === w && null === L && (null == T ? true : T.skuId) !== "",
    B = null == O,
    W = B || null == L && true !== w || Z || "loading" === S,
    q = "error" === S || null == T,
    G = async () => {
      M("applying"), M(await R() ? "applied" : "claimed")
    };
  return (0, a.jsx)(N.Z, {
    onClose: v,
    transitionState: _,
    quest: E,
    sourceQuestContent: D,
    location: y.dr.COLLECTIBLE_REWARD_MODAL,
    isRewardContentLoading: W,
    rewardContentHasError: q,
    rewardContent: q || B ? null : (0, a.jsx)(b.Z, {
      rewardName: T.messages.name,
      children: (0, a.jsx)(A, {
        quest: E,
        avatarDeco: L,
        user: O,
        mode: S,
        onUseNow: G
      })
    })
  })
}