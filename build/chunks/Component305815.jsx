/** Chunk was on 41023 **/
/** chunk id: 305815, original params: e,t,n (module,exports,require) **/
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
  Chunk515108 = require("./515108.jsx"),
  Chunk291967 = require("./291967.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk129034 = require("./129034.js");

function A(e) {
  var t;
  let {
    quest: n,
    avatarDeco: i,
    onUseNow: a,
    user: l,
    mode: s
  } = e, d = (0, v.fh)(n, v.eC.REWARD).url, u = (0, h.Qy)(n.config), m = (null == (t = l.avatarDecoration) ? true : t.skuId) != null && l.avatarDecoration.skuId === (null == i ? true : i.skuId);
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
        color: "text-strong",
        className: w.heading,
        children: y.intl.string(y.t["0/Yz+Y"])
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: u
      })]
    }), (0, r.jsx)(o.Button, {
      variant: "secondary",
      size: "sm",
      text: m ? y.intl.string(y.t.hjaYYn) : y.intl.string(y.t.MAS7uK),
      loading: "applying" === s,
      disabled: "claimed" !== s || m,
      onClick: a,
      fullWidth: true
    })]
  })
}

function P(e) {
  var t, n, o;
  let {
    initialQuest: c,
    onClose: v,
    transitionState: y,
    preview: w,
    location: P,
    sourceQuestContent: D
  } = e, E = null != (n = (0, h.B4)(c.id)) ? n : c, T = i.useMemo(() => (0, j.xn)(E.config), [E]), O = (0, l.e7)([x.default], () => x.default.getCurrentUser()), [L, R] = function(e) {
    let {
      product: t,
      isFetching: n
    } = (0, d.T)(e), r = i.useMemo(() => {
      if (null == t || n) return null;
      let e = t.items.find(e => e.type === a.Z.AVATAR_DECORATION);
      return null != e ? e : null
    }, [t, n]), l = async () => {
      if (null == r) return f.Z.addBreadcrumb({
        message: "Error saving avatar decoration; it is null"
      }), false;
      (0, u.PO)(r);
      let e = p.Z.getAllPending(),
        t = (0, m.ED)(e),
        n = await (0, s.Mn)(t);
      return (0, s.si)(), !!(null == n ? true : n.ok)
    };
    return [r, l]
  }(null != (o = null == T ? true : T.skuId) ? o : null), I = (null == (t = E.userStatus) ? true : t.claimedAt) != null, k = !w && !I, [S, M] = i.useState(k ? "loading" : "claimed");
  i.useEffect(() => {
    k && (0, g.QB)(E.id, C.y$.CROSS_PLATFORM, P).then(() => M("claimed")).catch(() => M("error"))
  }, [E.id, P, k]);
  let Z = true === w && null === L && (null == T ? true : T.skuId) !== "",
    B = null == O,
    W = B || null == L && true !== w || Z || "loading" === S,
    q = "error" === S || null == T,
    G = async () => {
      M("applying"), M(await R() ? "applied" : "claimed")
    };
  return (0, r.jsx)(_.Z, {
    onClose: v,
    transitionState: y,
    quest: E,
    sourceQuestContent: D,
    location: N.dr.COLLECTIBLE_REWARD_MODAL,
    isRewardContentLoading: W,
    rewardContentHasError: q,
    rewardContent: q || B ? null : (0, r.jsx)(b.Z, {
      rewardName: T.messages.name,
      children: (0, r.jsx)(A, {
        quest: E,
        avatarDeco: L,
        user: O,
        mode: S,
        onUseNow: G
      })
    })
  })
}