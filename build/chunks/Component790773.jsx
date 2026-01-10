/** Chunk was on 84249 **/
/** chunk id: 790773, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk104505 = require("./104505.js"),
  Chunk863886 = require("./863886.jsx"),
  Chunk277511 = require("./277511.js"),
  Chunk594174 = require("./594174.js"),
  Chunk164670 = require("./164670.js"),
  Chunk927613 = require("./927613.js"),
  Chunk848118 = require("./848118.jsx"),
  Chunk582113 = require("./582113.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk702631 = require("./702631.js");

function y(e) {
  let {
    sku: t,
    handleOpenUserProfileModal: n,
    analyticsLocations: l
  } = e, p = r.useRef(null), {
    analyticsLocations: h
  } = (0, c.ZP)(null != l ? l : []), {
    isHoveringOrFocusing: f
  } = (0, d.Z)(p), [b, y] = r.useState(false), C = r.useCallback(async e => {
    if (e.stopPropagation(), !b) {
      y(true);
      try {
        await m.Z.addSkuToWishlist(t.id, h), n({
          tabSection: g.oh.WISHLIST
        })
      } catch (e) {
        (0, o.showToast)((0, o.createToast)(v.intl.string(v.t.F8FvUy), o.ToastType.FAILURE)), i.uvj.announce(v.intl.string(v.t.F8FvUy))
      } finally {
        y(false)
      }
    }
  }, [t.id, h, n, b]);
  return (0, a.jsx)(s.u, {
    __unsupportedReactNodeAsText: (0, a.jsxs)("div", {
      className: j.tooltipContent,
      children: [(0, a.jsx)(i.xvT, {
        variant: "text-sm/medium",
        children: v.intl.string(v.t["8DkMEQ"])
      }), (0, a.jsx)(i.xvT, {
        variant: "text-sm/normal",
        lineClamp: 1,
        color: "text-default",
        children: t.name
      })]
    }),
    position: "top",
    asContainer: true,
    children: (0, a.jsxs)(i.kL8, {
      className: j.card,
      ref: p,
      "aria-label": t.name,
      onClick: C,
      children: [(0, a.jsx)(x.A, {
        shape: "custom",
        containerClassName: j.card,
        foregroundImageClassName: j.cardImage,
        backgroundImageClassName: j.cardBackgroundImage,
        sku: t
      }, t.id), (f || b) && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: j.highlightOverlay
        }), (0, a.jsx)("div", {
          className: j.plusIconContainer,
          children: b ? (0, a.jsx)(u.T, {}) : (0, a.jsx)(i.svS, {
            size: "lg"
          })
        })]
      })]
    })
  })
}

function C(e) {
  let {
    wishlist: t,
    handleOpenUserProfileModal: n,
    analyticsLocations: i
  } = e, s = (0, l.e7)([p.default], () => p.default.getCurrentUser()), o = (0, f.Z)({
    guildId: (0, h.ac)(),
    numWishlistItems: 9,
    location: "SocialLayerAddToWishlistGrid",
    applicationId: b.t9,
    userIds: null != s ? [s.id] : true,
    includeWishlists: false
  }), c = r.useMemo(() => {
    var e;
    return new Set(null != (e = null == t ? true : t.items.map(e => e.skuId)) ? e : [])
  }, [t]), d = o.recommendations.filter(e => !c.has(e.skuId));
  return "success" !== o.state ? (0, a.jsx)("div", {
    className: j.loadingContainer,
    children: (0, a.jsx)(u.T, {})
  }) : (0, a.jsx)("ul", {
    className: j.grid,
    children: d.map(e => (0, a.jsx)(y, {
      sku: e.sku,
      handleOpenUserProfileModal: n,
      analyticsLocations: i
    }, e.skuId))
  })
}