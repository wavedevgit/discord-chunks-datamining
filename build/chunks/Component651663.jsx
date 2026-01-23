/** Chunk was on 90948 **/
/** chunk id: 651663, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => w
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
  Chunk752319 = require("./752319.js"),
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

function E(e) {
  var t;
  let {
    quest: n,
    avatarDeco: r,
    onUseNow: a,
    user: s,
    mode: o
  } = e, c = (0, j.tW)(n, j.fY.REWARD).url, u = (0, h.FA)(n.config), m = (null == (t = s.avatarDecoration) ? true : t.skuId) != null && s.avatarDecoration.skuId === (null == r ? true : r.skuId);
  return (0, i.jsxs)("div", {
    className: b.hQ,
    children: [(0, i.jsx)("div", {
      className: b.i1,
      children: (0, i.jsx)(d.A, {
        user: s,
        guildId: null,
        avatarDecorationOverride: r,
        avatarSize: l._3J.SIZE_152,
        questPreviewRewardAssetUrl: c
      })
    }), (0, i.jsxs)("div", {
      className: b.dD,
      children: [(0, i.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        color: "text-strong",
        className: b.R_,
        children: A.intl.string(A.t["0/Yz+Y"])
      }), (0, i.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: u
      })]
    }), (0, i.jsx)(l.Button, {
      variant: "secondary",
      size: "sm",
      text: m ? A.intl.string(A.t.hjaYYn) : A.intl.string(A.t.MAS7uK),
      loading: "applying" === o,
      disabled: "claimed" !== o || m,
      onClick: a,
      fullWidth: true
    })]
  })
}

function w(e) {
  var t, n, l;
  let {
    initialQuest: d,
    onClose: j,
    transitionState: A,
    preview: b,
    location: w,
    sourceQuestContent: D
  } = e, L = null != (t = (0, h.C5)(d.id)) ? t : d, O = r.useMemo(() => (0, p.nj)(L.config), [L]), k = (0, s.bG)([f.default], () => f.default.getCurrentUser()), [R, I] = function(e) {
    let {
      product: t,
      isFetching: n
    } = (0, c.q)(e), i = r.useMemo(() => {
      if (null == t || n) return null;
      let e = t.items.find(e => e.type === a.R.AVATAR_DECORATION);
      return null != e ? e : null
    }, [t, n]), s = async () => {
      if (null == i) return _.A.addBreadcrumb({
        message: "Error saving avatar decoration; it is null"
      }), false;
      (0, u.Dx)(i);
      let e = x.A.getAllPending(),
        t = (0, m.Sk)(e),
        n = await (0, o.yu)(t);
      return (0, o.pZ)(), !!(null == n ? true : n.ok)
    };
    return [i, s]
  }(null != (n = null == O ? true : O.skuId) ? n : null), S = (null == (l = L.userStatus) ? true : l.claimedAt) != null, T = !b && !S, [P, W] = r.useState(T ? "loading" : "claimed");
  r.useEffect(() => {
    T && (0, g.Oq)(L.id, v.pY.CROSS_PLATFORM, w).then(() => W("claimed")).catch(() => W("error"))
  }, [L.id, w, T]);
  let M = true === b && null === R && (null == O ? true : O.skuId) !== "",
    Y = null == k,
    q = Y || null == R && true !== b || M || "loading" === P,
    G = "error" === P || null == O,
    H = async () => {
      W("applying"), W(await I() ? "applied" : "claimed")
    };
  return (0, i.jsx)(y.A, {
    onClose: j,
    transitionState: A,
    quest: L,
    sourceQuestContent: D,
    location: N.rE.COLLECTIBLE_REWARD_MODAL,
    isRewardContentLoading: q,
    rewardContentHasError: G,
    rewardContent: G || Y ? null : (0, i.jsx)(C.A, {
      rewardName: O.messages.name,
      children: (0, i.jsx)(E, {
        quest: L,
        avatarDeco: R,
        user: k,
        mode: P,
        onUseNow: H
      })
    })
  })
}