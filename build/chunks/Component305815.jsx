/** Chunk was on 41023 **/
/** chunk id: 305815, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk255712 = require("./255712.js");

function T(e) {
  var n;
  let {
    quest: t,
    avatarDeco: a,
    onUseNow: i,
    user: l,
    mode: o
  } = e, c = (0, j.fh)(t, j.eC.REWARD).url, u = (0, v.Qy)(t.config), m = (null == (n = l.avatarDecoration) ? true : n.skuId) != null && l.avatarDecoration.skuId === (null == a ? true : a.skuId);
  return (0, r.jsxs)("div", {
    className: w.contentContainer,
    children: [(0, r.jsx)("div", {
      className: w.previewContainer,
      children: (0, r.jsx)(d.Z, {
        user: l,
        guildId: null,
        avatarDecorationOverride: a,
        avatarSize: s.EFr.SIZE_152,
        questPreviewRewardAssetUrl: c
      })
    }), (0, r.jsxs)("div", {
      className: w.copyContainer,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: w.heading,
        children: b.intl.string(b.t["0/Yz+Y"])
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: u
      })]
    }), (0, r.jsx)(s.Button, {
      variant: "secondary",
      size: "sm",
      text: m ? b.intl.string(b.t.hjaYYn) : b.intl.string(b.t.MAS7uK),
      loading: "applying" === o,
      disabled: "claimed" !== o || m,
      onClick: i,
      fullWidth: true
    })]
  })
}

function P(e) {
  var n, t, s;
  let {
    initialQuest: d,
    onClose: j,
    transitionState: b,
    preview: w,
    location: P,
    sourceQuestContent: E
  } = e, A = null != (t = (0, v.B4)(d.id)) ? t : d, D = a.useMemo(() => (0, x.xn)(A.config), [A]), O = (0, l.e7)([f.default], () => f.default.getCurrentUser()), [L, S] = function(e) {
    let {
      product: n,
      isFetching: t
    } = (0, c.T)(e), r = a.useMemo(() => {
      if (null == n || t) return null;
      let e = n.items.find(e => e.type === i.Z.AVATAR_DECORATION);
      return null != e ? e : null
    }, [n, t]), l = async () => {
      if (null == r) return g.Z.addBreadcrumb({
        message: "Error saving avatar decoration; it is null"
      }), false;
      (0, u.PO)(r);
      let e = p.Z.getAllPending(),
        n = (0, m.ED)(e),
        t = await (0, o.Mn)(n);
      return (0, o.si)(), !!(null == t ? true : t.ok)
    };
    return [r, l]
  }(null != (s = null == D ? true : D.skuId) ? s : null), R = (null == (n = A.userStatus) ? true : n.claimedAt) != null, k = !w && !R, [I, M] = a.useState(k ? "loading" : "claimed");
  a.useEffect(() => {
    k && (0, C.QB)(A.id, h.y$.CROSS_PLATFORM, P).then(() => M("claimed")).catch(() => M("error"))
  }, [A.id, P, k]);
  let Z = true === w && null === L && (null == D ? true : D.skuId) !== "",
    B = null == O,
    q = B || null == L && true !== w || Z || "loading" === I,
    G = "error" === I || null == D,
    W = async () => {
      M("applying"), M(await S() ? "applied" : "claimed")
    };
  return (0, r.jsx)(_.Z, {
    onClose: j,
    transitionState: b,
    quest: A,
    sourceQuestContent: E,
    location: N.dr.COLLECTIBLE_REWARD_MODAL,
    isRewardContentLoading: q,
    rewardContentHasError: G,
    rewardContent: G || B ? null : (0, r.jsx)(y.Z, {
      rewardName: D.messages.name,
      children: (0, r.jsx)(T, {
        quest: A,
        avatarDeco: L,
        user: O,
        mode: I,
        onUseNow: W
      })
    })
  })
}