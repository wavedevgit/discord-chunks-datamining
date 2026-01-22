/** Chunk was on 68406 **/
/** chunk id: 130453, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk979286 = require("./979286.js"),
  Chunk993408 = require("./993408.js"),
  Chunk821701 = require("./821701.js"),
  Chunk841702 = require("./841702.js"),
  Chunk727170 = require("./727170.js"),
  Chunk571827 = require("./571827.jsx"),
  Chunk465794 = require("./465794.jsx"),
  Chunk919395 = require("./919395.js"),
  Chunk352413 = require("./352413.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk942225 = require("./942225.jsx"),
  Chunk718100 = require("./718100.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk153193 = require("./153193.js");

function k(e) {
  var t;
  let {
    user: r,
    categories: c,
    purchases: m,
    analyticsLocations: f,
    onClose: v,
    initialSelectedDecoration: _,
    guild: k
  } = e, T = (0, i.bG)([h.Ay], () => null != k ? h.Ay.getMember(k.id, r.id) : null), P = null != T ? T.avatarDecoration : r.avatarDecoration, {
    pendingAvatarDecoration: C,
    setPendingAvatarDecoration: N
  } = (0, A.A)({
    analyticsLocations: f,
    guildId: null == k ? true : k.id
  }), [w, D] = l.useState(() => {
    var e;
    return null != _ ? _ : true !== C ? C : null == P ? null : null != (e = (0, u.ps)(m, c).find(e => {
      let {
        skuId: t
      } = e;
      return t === P.skuId
    })) ? e : null
  }), R = (0, b.lw)({
    pendingValue: w,
    userValue: null == r ? true : r.avatarDecoration,
    guildValue: null == T ? true : T.avatarDecoration,
    guildId: null == k ? true : k.id
  }), {
    product: L,
    purchase: M
  } = (0, d.A)(null == w ? true : w.skuId), U = null != M ? (0, u.gA)(M) : (0, u.G0)(L), G = y.Ay.canUseCollectibles(r), z = l.useRef(null), H = (0, p.A)(f), K = true === C ? (null == w ? true : w.skuId) === (null == P ? true : P.skuId) : (null == w ? true : w.skuId) === (null == C ? true : C.skuId), V = l.useCallback(e => {
    v(), (0, o.Cz)({
      analyticsLocations: f,
      analyticsSource: s.A.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: e
    })
  }, [f, v]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(a.rQ0, {
      "data-migration-pending": true,
      separator: false,
      className: I.Hc,
      children: [(0, n.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: E.intl.string(E.t.HykynS)
      }), (0, n.jsx)(a.s_y, {
        "data-migration-pending": true,
        className: I.iT,
        onClick: v
      })]
    }), (0, n.jsxs)(a.$mQ, {
      "data-migration-pending": true,
      className: I.jE,
      scrollbarType: "none",
      children: [(0, n.jsx)(O.A, {
        user: r,
        guild: k,
        pendingAvatarDecoration: w,
        selectedAvatarDecorationRef: z,
        onSelect: e => {
          D(e), null != e && H(e)
        },
        onOpenShop: V
      }), (0, n.jsx)(j.A, {
        className: I.kk,
        user: r,
        guildId: null == k ? true : k.id,
        avatarDecoration: R
      })]
    }), (0, n.jsxs)(a.jlY, {
      "data-migration-pending": true,
      className: I.Hx,
      children: [null != M && (G || !U) || null === w ? (0, n.jsx)(a.Button, {
        variant: "primary",
        text: E.intl.string(E.t.Jh8fJz),
        onClick: () => {
          N(w), v()
        },
        disabled: K
      }) : null == M && (G || !U) ? (0, n.jsx)(a.Button, {
        variant: "primary",
        onClick: () => V(null == L ? true : L.skuId),
        text: E.intl.string(E.t.fYfGgK)
      }) : (0, n.jsx)(g.A, {
        subscriptionTier: S.pe.TIER_2,
        showGradient: !G,
        textOptions: {
          textOverride: y.Ay.isPremium(r) ? E.intl.string(E.t.KXLX7l) : G ? E.intl.string(E.t.mr4K7D) : E.intl.string(E.t.pj0XBN)
        }
      }), !G && U ? (0, n.jsx)(x.A, {
        itemType: null != (t = null == M ? true : M.type) ? t : null == L ? true : L.type,
        onClose: v
      }) : (0, n.jsx)(a.Button, {
        variant: "secondary",
        text: E.intl.string(E.t["ETE/oC"]),
        onClick: v
      })]
    })]
  })
}

function T(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    onClose: o,
    onCloseModal: u,
    initialSelectedDecoration: d,
    guild: p
  } = e, x = (0, i.bG)([f.default], () => f.default.getCurrentUser()), {
    analyticsLocations: g
  } = (0, c.Ay)(r, s.A.EDIT_AVATAR_DECORATION_MODAL), {
    categories: b,
    purchases: A,
    isFetchingCategories: h,
    isFetchingPurchases: y
  } = (0, m.Ay)(), j = h || y && 0 === A.size;
  return l.useEffect(() => {
    v.default.track(_.HAw.OPEN_MODAL, {
      type: _.JJy.AVATAR_DECORATION_CUSTOMIZATION,
      location_stack: g
    })
  }, [g]), null == x ? null : (0, n.jsx)(c.f5, {
    value: g,
    children: (0, n.jsx)(a.EOs, {
      transitionState: t,
      className: I.yl,
      size: j ? a.rIJ.DYNAMIC : a.rIJ.MEDIUM,
      parentComponent: "AvatarDecorationModal",
      "data-migration-pending": true,
      children: j ? (0, n.jsx)(a.y$y, {
        className: I.u1,
        type: a.y$y.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(k, {
        user: x,
        guild: p,
        categories: b,
        purchases: A,
        analyticsLocations: g,
        initialSelectedDecoration: d,
        onClose: () => {
          u(), null == o || o()
        }
      })
    })
  })
}