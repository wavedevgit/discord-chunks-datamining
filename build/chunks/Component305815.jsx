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
  Chunk509212 = require("./509212.js"),
  Chunk272008 = require("./272008.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk475595 = require("./475595.js"),
  Chunk515108 = require("./515108.jsx"),
  Chunk291967 = require("./291967.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk129034 = require("./129034.js");

function b(e) {
  var n;
  let {
    quest: t,
    avatarDeco: r,
    onUseNow: i,
    user: l,
    mode: o
  } = e, d = (0, x.fh)(t, x.eC.REWARD).url, u = (0, v.Qy)(t.config), m = (null == (n = l.avatarDecoration) ? true : n.skuId) != null && l.avatarDecoration.skuId === (null == r ? true : r.skuId);
  return (0, a.jsxs)("div", {
    className: y.contentContainer,
    children: [(0, a.jsx)("div", {
      className: y.previewContainer,
      children: (0, a.jsx)(c.Z, {
        user: l,
        guildId: null,
        avatarDecorationOverride: r,
        avatarSize: s.EFr.SIZE_152,
        questPreviewRewardAssetUrl: d
      })
    }), (0, a.jsxs)("div", {
      className: y.copyContainer,
      children: [(0, a.jsx)(s.X6q, {
        variant: "heading-xl/bold",
        color: "header-primary",
        className: y.heading,
        children: N.intl.string(N.t["0/Yz+f"])
      }), (0, a.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: u
      })]
    }), (0, a.jsx)(s.zxk, {
      variant: "secondary",
      size: "sm",
      text: N.intl.string(N.t.MAS7uL),
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
    transitionState: v,
    preview: x,
    location: N,
    sourceQuestContent: y
  } = e, T = r.useMemo(() => (0, f.xn)(s.config), [s]), A = (0, l.e7)([p.default], () => p.default.getCurrentUser()), [w, P] = function(e) {
    let {
      product: n,
      isFetching: t
    } = (0, d.T)(e), a = r.useMemo(() => {
      if (null == n || t) return null;
      let e = n.items.find(e => e.type === i.Z.AVATAR_DECORATION);
      return null != e ? e : null
    }, [n, t]), l = async () => {
      if (null == a) return C.Z.addBreadcrumb({
        message: "Error saving avatar decoration; it is null"
      }), false;
      (0, o.cV)(a);
      let e = m.Z.getAllPending(),
        n = (0, u.ED)(e),
        t = await (0, o.Mn)(n);
      return (0, o.si)(), !!(null == t ? true : t.ok)
    };
    return [a, l]
  }(null != (t = null == T ? true : T.skuId) ? t : null), E = (null == (n = s.userStatus) ? true : n.claimedAt) != null, k = !x && !E, [D, R] = r.useState(k ? "loading" : "claimed");
  r.useEffect(() => {
    k && (0, g.QB)(s.id, h.y$.CROSS_PLATFORM, N).then(() => R("claimed")).catch(() => R("error"))
  }, [s, N, k]);
  let L = true === x && null === w && (null == T ? true : T.skuId) !== "",
    M = null == w && true !== x,
    Z = null == A || M || L || "loading" === D,
    I = "error" === D || null == T;
  if (Z || I) return null;
  let O = async () => {
    R("applying"), R(await P() ? "applied" : "claimed")
  };
  return (0, a.jsx)(_.Z, {
    onClose: c,
    transitionState: v,
    quest: s,
    sourceQuestContent: y,
    rewardContent: (0, a.jsx)(j.Z, {
      rewardName: T.messages.name,
      children: (0, a.jsx)(b, {
        quest: s,
        avatarDeco: w,
        user: A,
        mode: D,
        onUseNow: O
      })
    })
  })
}