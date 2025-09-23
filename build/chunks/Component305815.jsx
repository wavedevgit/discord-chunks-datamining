/** Chunk was on 41023 **/
/** chunk id: 305815, original params: e,n,a (module,exports,require) **/
require.d(exports, {
  default: () => k
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
  Chunk691864 = require("./691864.js");

function y(e) {
  var n;
  let {
    quest: a,
    avatarDeco: i,
    onUseNow: r,
    user: l,
    mode: o
  } = e, c = (0, C.fh)(a, C.eC.REWARD).url, u = (0, h.Qy)(a.config), m = (null == (n = l.avatarDecoration) ? true : n.skuId) != null && l.avatarDecoration.skuId === (null == i ? true : i.skuId);
  return (0, t.jsxs)("div", {
    className: w.contentContainer,
    children: [(0, t.jsx)("div", {
      className: w.previewContainer,
      children: (0, t.jsx)(d.Z, {
        user: l,
        guildId: null,
        avatarDecorationOverride: i,
        avatarSize: s.EFr.SIZE_152,
        questPreviewRewardAssetUrl: c
      })
    }), (0, t.jsxs)("div", {
      className: w.copyContainer,
      children: [(0, t.jsx)(s.X6q, {
        variant: "heading-xl/bold",
        color: "header-primary",
        className: w.heading,
        children: N.intl.string(N.t["0/Yz+f"])
      }), (0, t.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        className: w.text,
        children: u
      })]
    }), (0, t.jsx)(s.zxk, {
      variant: "secondary",
      size: "sm",
      text: N.intl.string(N.t.MAS7uL),
      loading: "applying" === o,
      disabled: "claimed" !== o || m,
      onClick: r,
      fullWidth: true
    })]
  })
}

function k(e) {
  var n, a;
  let {
    quest: s,
    onClose: d,
    transitionState: h,
    preview: C,
    location: N
  } = e, w = i.useMemo(() => (0, x.xn)(s.config), [s]), k = (0, l.e7)([v.default], () => v.default.getCurrentUser()), [P, A] = function(e) {
    let {
      product: n,
      isFetching: a
    } = (0, c.T)(e), t = i.useMemo(() => {
      if (null == n || a) return null;
      let e = n.items.find(e => e.type === r.Z.AVATAR_DECORATION);
      return null != e ? e : null
    }, [n, a]), l = async () => {
      if (null == t) return f.Z.addBreadcrumb({
        message: "Error saving avatar decoration; it is null"
      }), false;
      (0, o.cV)(t);
      let e = m.Z.getAllPending(),
        n = (0, u.ED)(e),
        a = await (0, o.Mn)(n);
      return (0, o.si)(), !!(null == a ? true : a.ok)
    };
    return [t, l]
  }(null != (a = null == w ? true : w.skuId) ? a : null), Z = (null == (n = s.userStatus) ? true : n.claimedAt) != null, b = !C && !Z, [D, I] = i.useState(b ? "loading" : "claimed");
  i.useEffect(() => {
    b && (0, g.QB)(s.id, p.y$.CROSS_PLATFORM, N).then(() => I("claimed")).catch(() => I("error"))
  }, [s, N, b]);
  let R = true === C && null === P && (null == w ? true : w.skuId) !== "",
    S = null == P && true !== C,
    T = null == k || S || R || "loading" === D,
    q = "error" === D || null == w;
  if (T || q) return null;
  let B = async () => {
    I("applying"), I(await A() ? "applied" : "claimed")
  };
  return (0, t.jsx)(_.Z, {
    onClose: d,
    transitionState: h,
    quest: s,
    rewardContent: (0, t.jsx)(j.Z, {
      rewardName: w.messages.name,
      children: (0, t.jsx)(y, {
        quest: s,
        avatarDeco: P,
        user: k,
        mode: D,
        onUseNow: B
      })
    })
  })
}