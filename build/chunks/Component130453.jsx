/** Chunk was on 68406 **/
/** chunk id: 130453, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => w
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

function P(e) {
  var t;
  let {
    user: r,
    categories: o,
    purchases: m,
    analyticsLocations: f,
    onClose: y,
    initialSelectedDecoration: b,
    guild: P
  } = e, w = (0, i.bG)([A.Ay], () => null != P ? A.Ay.getMember(P.id, r.id) : null), C = null != w ? w.avatarDecoration : r.avatarDecoration, {
    pendingAvatarDecoration: T,
    setPendingAvatarDecoration: k
  } = (0, v.A)({
    analyticsLocations: f,
    guildId: null == P ? true : P.id
  }), [N, D] = l.useState(() => {
    var e;
    return null != b ? b : true !== T ? T : null == C ? null : null != (e = (0, u.ps)(m, o).find(e => {
      let {
        skuId: t
      } = e;
      return t === C.skuId
    })) ? e : null
  }), R = (0, h.lw)({
    pendingValue: N,
    userValue: null == r ? true : r.avatarDecoration,
    guildValue: null == w ? true : w.avatarDecoration,
    guildId: null == P ? true : P.id
  }), {
    product: L,
    purchase: M
  } = (0, d.A)(null == N ? true : N.skuId), U = null != M ? (0, u.gA)(M) : (0, u.G0)(L), G = _.Ay.canUseCollectibles(r), z = l.useRef(null), H = (0, p.A)(f), B = true === T ? (null == N ? true : N.skuId) === (null == C ? true : C.skuId) : (null == N ? true : N.skuId) === (null == T ? true : T.skuId), K = l.useCallback(e => {
    y(), (0, c.Cz)({
      analyticsLocations: f,
      analyticsSource: a.A.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: e
    })
  }, [f, y]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(s.rQ0, {
      "data-migration-pending": true,
      separator: false,
      className: E.Hc,
      children: [(0, n.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: S.intl.string(S.t.HykynS)
      }), (0, n.jsx)(s.s_y, {
        "data-migration-pending": true,
        className: E.iT,
        onClick: y
      })]
    }), (0, n.jsxs)(s.$mQ, {
      "data-migration-pending": true,
      className: E.jE,
      scrollbarType: "none",
      children: [(0, n.jsx)(O.A, {
        user: r,
        guild: P,
        pendingAvatarDecoration: N,
        selectedAvatarDecorationRef: z,
        onSelect: e => {
          D(e), null != e && H(e)
        },
        onOpenShop: K
      }), (0, n.jsx)(j.A, {
        className: E.kk,
        user: r,
        guildId: null == P ? true : P.id,
        avatarDecoration: R
      })]
    }), (0, n.jsxs)(s.jlY, {
      "data-migration-pending": true,
      className: E.Hx,
      children: [null != M && (G || !U) || null === N ? (0, n.jsx)(s.Button, {
        variant: "primary",
        text: S.intl.string(S.t.Jh8fJz),
        onClick: () => {
          k(N), y()
        },
        disabled: B
      }) : null == M && (G || !U) ? (0, n.jsx)(s.Button, {
        variant: "primary",
        onClick: () => K(null == L ? true : L.skuId),
        text: S.intl.string(S.t.fYfGgK)
      }) : (0, n.jsx)(g.A, {
        subscriptionTier: I.pe.TIER_2,
        showGradient: !G,
        textOptions: {
          textOverride: _.Ay.isPremium(r) ? S.intl.string(S.t.KXLX7l) : G ? S.intl.string(S.t.mr4K7D) : S.intl.string(S.t.pj0XBN)
        }
      }), !G && U ? (0, n.jsx)(x.A, {
        itemType: null != (t = null == M ? true : M.type) ? t : null == L ? true : L.type,
        onClose: y
      }) : (0, n.jsx)(s.Button, {
        variant: "secondary",
        text: S.intl.string(S.t["ETE/oC"]),
        onClick: y
      })]
    })]
  })
}

function w(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    onClose: c,
    onCloseModal: u,
    initialSelectedDecoration: d,
    guild: p
  } = e, x = (0, i.bG)([f.default], () => f.default.getCurrentUser()), {
    analyticsLocations: g
  } = (0, o.Ay)(r, a.A.EDIT_AVATAR_DECORATION_MODAL), {
    categories: h,
    purchases: v,
    isFetchingCategories: A,
    isFetchingPurchases: _
  } = (0, m.Ay)(), j = A || _ && 0 === v.size;
  return l.useEffect(() => {
    y.default.track(b.HAw.OPEN_MODAL, {
      type: b.JJy.AVATAR_DECORATION_CUSTOMIZATION,
      location_stack: g
    })
  }, [g]), null == x ? null : (0, n.jsx)(o.f5, {
    value: g,
    children: (0, n.jsx)(s.EOs, {
      transitionState: t,
      className: E.yl,
      size: j ? s.rIJ.DYNAMIC : s.rIJ.MEDIUM,
      parentComponent: "AvatarDecorationModal",
      "data-migration-pending": true,
      children: j ? (0, n.jsx)(s.y$y, {
        className: E.u1,
        type: s.y$y.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(P, {
        user: x,
        guild: p,
        categories: h,
        purchases: v,
        analyticsLocations: g,
        initialSelectedDecoration: d,
        onClose: () => {
          u(), null == c || c()
        }
      })
    })
  })
}