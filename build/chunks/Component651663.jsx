/** Chunk was on 90948 **/
/** chunk id: 651663, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk575593 = require("./575593.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk631670 = require("./631670.js"),
  Chunk291661 = require("./291661.jsx"),
  Chunk674658 = require("./674658.js"),
  Chunk919395 = require("./919395.js"),
  Chunk587600 = require("./587600.js"),
  Chunk836602 = require("./836602.js"),
  Chunk287809 = require("./287809.js"),
  Chunk728458 = require("./728458.js"),
  Chunk829219 = require("./829219.js"),
  Chunk341915 = require("./341915.js"),
  Chunk890687 = require("./890687.js"),
  Chunk579473 = require("./579473.js"),
  Chunk92246 = require("./92246.js"),
  Chunk109174 = require("./109174.jsx"),
  Chunk524728 = require("./524728.jsx"),
  Chunk654487 = require("./654487.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk885283 = require("./885283.js");

function L(e) {
  var t;
  let {
    quest: n,
    avatarDeco: a,
    onUseNow: r,
    user: s,
    mode: o
  } = e, c = (0, j.tW)(n, j.fY.REWARD).url, u = (0, h.FA)(n.config), m = (null == (t = s.avatarDecoration) ? true : t.skuId) != null && s.avatarDecoration.skuId === (null == a ? true : a.skuId);
  return (0, i.jsxs)("div", {
    className: E.hQ,
    children: [(0, i.jsx)("div", {
      className: E.i1,
      children: (0, i.jsx)(d.A, {
        user: s,
        guildId: null,
        avatarDecorationOverride: a,
        avatarSize: l._3J.SIZE_152,
        questPreviewRewardAssetUrl: c
      })
    }), (0, i.jsxs)("div", {
      className: E.dD,
      children: [(0, i.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        color: "text-strong",
        className: E.R_,
        children: y.intl.string(y.t["0/Yz+Y"])
      }), (0, i.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: u
      })]
    }), (0, i.jsx)(l.Button, {
      variant: "secondary",
      size: "sm",
      text: m ? y.intl.string(y.t.hjaYYn) : y.intl.string(y.t.MAS7uK),
      loading: "applying" === o,
      disabled: "claimed" !== o || m,
      onClick: r,
      fullWidth: true
    })]
  })
}

function b(e) {
  var t, n, l;
  let {
    initialQuest: d,
    onClose: j,
    transitionState: y,
    preview: E,
    location: b,
    sourceQuestContent: w
  } = e, O = null != (t = (0, h.C5)(d.id)) ? t : d, D = a.useMemo(() => (0, p.nj)(O.config), [O]), R = (0, s.bG)([x.default], () => x.default.getCurrentUser()), [I, k] = function(e) {
    let {
      product: t,
      isFetching: n
    } = (0, c.q)(e), i = a.useMemo(() => {
      if (null == t || n) return null;
      let e = t.items.find(e => e.type === r.R.AVATAR_DECORATION);
      return null != e ? e : null
    }, [t, n]), s = async () => {
      if (null == i) return _.A.addBreadcrumb({
        message: "Error saving avatar decoration; it is null"
      }), false;
      (0, u.Dx)(i);
      let e = f.A.getPendingChanges(),
        t = (0, m.Sk)(e),
        n = await (0, o.yu)(t);
      return (0, o.pZ)(), !!(null == n ? true : n.ok)
    };
    return [i, s]
  }(null != (n = null == D ? true : D.skuId) ? n : null), T = (null == (l = O.userStatus) ? true : l.claimedAt) != null, S = !E && !T, [M, W] = a.useState(S ? "loading" : "claimed");
  a.useEffect(() => {
    S && (0, g.Oq)(O.id, v.pY.CROSS_PLATFORM, b).then(() => W("claimed")).catch(() => W("error"))
  }, [O.id, b, S]);
  let P = true === E && null === I && (null == D ? true : D.skuId) !== "",
    Y = null == R,
    q = Y || null == I && true !== E || P || "loading" === M,
    G = "error" === M || null == D,
    H = async () => {
      W("applying"), W(await k() ? "applied" : "claimed")
    };
  return (0, i.jsx)(A.A, {
    onClose: j,
    transitionState: y,
    quest: O,
    sourceQuestContent: w,
    location: N.rE.COLLECTIBLE_REWARD_MODAL,
    isRewardContentLoading: q,
    rewardContentHasError: G,
    rewardContent: G || Y ? null : (0, i.jsx)(C.A, {
      rewardName: D.messages.name,
      children: (0, i.jsx)(L, {
        quest: O,
        avatarDeco: I,
        user: R,
        mode: M,
        onUseNow: H
      })
    })
  })
}