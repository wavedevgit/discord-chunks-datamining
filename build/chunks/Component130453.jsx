/** Chunk was on 68406 **/
/** chunk id: 130453, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => C
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

function E(e) {
  var t;
  let {
    user: r,
    categories: o,
    purchases: m,
    analyticsLocations: y,
    onClose: f,
    initialSelectedDecoration: b,
    guild: E
  } = e, C = (0, i.bG)([v.Ay], () => null != E ? v.Ay.getMember(E.id, r.id) : null), w = null != C ? C.avatarDecoration : r.avatarDecoration, {
    pendingAvatarDecoration: T,
    setPendingAvatarDecoration: k
  } = (0, A.A)({
    analyticsLocations: y,
    guildId: null == E ? true : E.id
  }), [N, D] = l.useState(() => {
    var e;
    return null != b ? b : true !== T ? T : null == w ? null : null != (e = (0, u.ps)(m, o).find(e => {
      let {
        skuId: t
      } = e;
      return t === w.skuId
    })) ? e : null
  }), R = (0, h.lw)({
    pendingValue: N,
    userValue: null == r ? true : r.avatarDecoration,
    guildValue: null == C ? true : C.avatarDecoration,
    guildId: null == E ? true : E.id
  }), {
    product: L,
    purchase: M
  } = (0, d.A)(null == N ? true : N.skuId), U = null != M ? (0, u.gA)(M) : (0, u.G0)(L), G = _.Ay.canUseCollectibles(r), z = l.useRef(null), H = (0, p.A)(y), K = true === T ? (null == N ? true : N.skuId) === (null == w ? true : w.skuId) : (null == N ? true : N.skuId) === (null == T ? true : T.skuId), B = l.useCallback(e => {
    f(), (0, c.Cz)({
      analyticsLocations: y,
      analyticsSource: a.A.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: e
    })
  }, [y, f]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(s.rQ0, {
      "data-migration-pending": true,
      separator: false,
      className: S.Hc,
      children: [(0, n.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: P.intl.string(P.t.HykynS)
      }), (0, n.jsx)(s.s_y, {
        "data-migration-pending": true,
        className: S.iT,
        onClick: f
      })]
    }), (0, n.jsxs)(s.$mQ, {
      "data-migration-pending": true,
      className: S.jE,
      scrollbarType: "none",
      children: [(0, n.jsx)(O.A, {
        user: r,
        guild: E,
        pendingAvatarDecoration: N,
        selectedAvatarDecorationRef: z,
        onSelect: e => {
          D(e), null != e && H(e)
        },
        onOpenShop: B
      }), (0, n.jsx)(j.A, {
        className: S.kk,
        user: r,
        guildId: null == E ? true : E.id,
        avatarDecoration: R
      })]
    }), (0, n.jsxs)(s.jlY, {
      "data-migration-pending": true,
      className: S.Hx,
      children: [null != M && (G || !U) || null === N ? (0, n.jsx)(s.Button, {
        variant: "primary",
        text: P.intl.string(P.t.Jh8fJz),
        onClick: () => {
          k(N), f()
        },
        disabled: K
      }) : null == M && (G || !U) ? (0, n.jsx)(s.Button, {
        variant: "primary",
        onClick: () => B(null == L ? true : L.skuId),
        text: P.intl.string(P.t.fYfGgK)
      }) : (0, n.jsx)(g.A, {
        subscriptionTier: I.pe.TIER_2,
        showGradient: !G,
        textOptions: {
          textOverride: _.Ay.isPremium(r) ? P.intl.string(P.t.KXLX7l) : G ? P.intl.string(P.t.mr4K7D) : P.intl.string(P.t.pj0XBN)
        }
      }), !G && U ? (0, n.jsx)(x.A, {
        itemType: null != (t = null == M ? true : M.type) ? t : null == L ? true : L.type,
        onClose: f
      }) : (0, n.jsx)(s.Button, {
        variant: "secondary",
        text: P.intl.string(P.t["ETE/oC"]),
        onClick: f
      })]
    })]
  })
}

function C(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    onClose: c,
    onCloseModal: u,
    initialSelectedDecoration: d,
    guild: p
  } = e, x = (0, i.bG)([y.default], () => y.default.getCurrentUser()), {
    analyticsLocations: g
  } = (0, o.Ay)(r, a.A.EDIT_AVATAR_DECORATION_MODAL), {
    categories: h,
    purchases: A,
    isFetchingCategories: v,
    isFetchingPurchases: _
  } = (0, m.Ay)(), j = v || _ && 0 === A.size;
  return l.useEffect(() => {
    f.default.track(b.HAw.OPEN_MODAL, {
      type: b.JJy.AVATAR_DECORATION_CUSTOMIZATION,
      location_stack: g
    })
  }, [g]), null == x ? null : (0, n.jsx)(o.f5, {
    value: g,
    children: (0, n.jsx)(s.EOs, {
      transitionState: t,
      className: S.yl,
      size: j ? s.rIJ.DYNAMIC : s.rIJ.MEDIUM,
      parentComponent: "AvatarDecorationModal",
      "data-migration-pending": true,
      children: j ? (0, n.jsx)(s.y$y, {
        className: S.u1,
        type: s.y$y.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(E, {
        user: x,
        guild: p,
        categories: h,
        purchases: A,
        analyticsLocations: g,
        initialSelectedDecoration: d,
        onClose: () => {
          u(), null == c || c()
        }
      })
    })
  })
}