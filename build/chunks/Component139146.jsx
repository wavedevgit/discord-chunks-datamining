/** Chunk was on web.js **/
/** chunk id: 139146, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => I,
  _: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk575593 = require("./575593.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk661492 = require("./661492.js"),
  Chunk287809 = require("./287809.js"),
  Chunk466459 = require("./466459.js"),
  Chunk620434 = require("./620434.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk394236 = require("./394236.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = e => {
  let {
    product: t,
    iconSize: n = 20,
    className: a,
    enableHoverEffect: l = false,
    isCardHovered: c = true,
    selectedVariantIndex: u
  } = e, f = i.useMemo(() => {
    var e;
    return t.type === s.R.VARIANTS_GROUP && null != u && (null == (e = t.variants) ? true : e[u]) != null ? t.variants[u] : t
  }, [t, u]), _ = f.skuId, {
    isPurchased: m
  } = (0, h.h)(f), g = i.useMemo(() => {
    let e = "6/4";
    switch (t.type) {
      case s.R.NAMEPLATE:
      case s.R.AVATAR_DECORATION:
        e = "16/9";
        break;
      case s.R.BUNDLE:
      case s.R.PROFILE_EFFECT:
      default:
        e = "6/4"
    }
    return {
      type: "dynamic",
      component: d.Oz7.COLLECTIBLES_PREVIEW,
      aspectRatio: e,
      props: {
        product: t,
        forCollectedModal: true
      }
    }
  }, [t]);
  return m ? null : (0, p.q)(f) ? (0, r.jsx)(S, {
    skuId: _,
    className: o()(l && y.FU, a),
    iconSize: n,
    isCardHovered: c,
    nuxGraphic: g
  }) : (0, r.jsx)(S, {
    skuId: _,
    className: o()(y.NY, a),
    iconSize: n,
    isCardHovered: c,
    disabled: true,
    tooltipOverrideText: E.intl.string(E.t["50TX9k"]),
    nuxGraphic: g
  })
};

function S(e) {
  let {
    skuId: t,
    className: a,
    iconSize: s = 20,
    disabled: p,
    isCardHovered: h,
    tooltipOverrideText: b,
    nuxGraphic: v,
    onClick: I
  } = e, [S, T] = (0, f.kn)([c.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], true, true), C = (0, l.bG)([_.default], () => _.default.getCurrentUser()), N = S === c.M.WISHLIST_NUX_TOOLTIP_AND_MODAL, {
    reducedMotion: w
  } = i.useContext(d.CZY), {
    isWishlisted: R,
    isBusy: P,
    handleToggle: D
  } = (0, m.c)({
    currentUser: C,
    skuId: t,
    onAddSuccess: () => {
      N && null != v && ((0, d.mMO)(async () => {
        let {
          default: e
        } = await n.e("64581").then(n.bind(n, 38884));
        return t => (0, r.jsx)(e, A(O({}, t), {
          graphic: v
        }))
      }), T(g.i.USER_DISMISS))
    },
    onError: () => {
      (0, d.showToast)((0, d.createToast)(E.intl.string(E.t.F8FvUy), d.ToastType.FAILURE)), d.ORC.announce(E.intl.string(E.t.F8FvUy))
    }
  }), L = i.useRef(null), [x, M] = i.useState(false), j = R && !x, k = j ? d.C3E : d.yhu, U = j ? y.Pc : y.i7;
  i.useEffect(() => {
    M(false)
  }, [t]);
  let G = i.useCallback(e => {
      e.stopPropagation(), null == I || I(), R || w.enabled ? R && x && M(false) : M(true), D()
    }, [I, D, R, w.enabled, x]),
    F = R ? E.intl.string(E.t.yr9TTf) : E.intl.string(E.t["8DkMEQ"]),
    V = !R && !x,
    B = i.useCallback(e => {
      e.target === e.currentTarget && x && requestAnimationFrame(() => M(false))
    }, [x]),
    H = e => w.enabled ? (0, r.jsx)(k, {
      colorClass: null != e ? e : U,
      size: "custom",
      height: s,
      width: s
    }) : (0, r.jsxs)("div", {
      className: o()(y.zc, V && y.QX),
      children: [(0, r.jsx)("span", {
        className: o()(y.P0, V && y.bP),
        children: (0, r.jsx)(k, {
          colorClass: null != e ? e : U,
          size: "custom",
          height: s,
          width: s
        })
      }), (0, r.jsx)("span", {
        className: o()(y.Do, x && y.Fb),
        onAnimationEnd: B,
        children: (0, r.jsx)(d.C3E, {
          size: "custom",
          height: s,
          width: s
        })
      })]
    });
  return (h || R) && null != C ? p ? (0, r.jsx)(u.m_, {
    text: null != b ? b : F,
    "aria-label": null != b ? b : F,
    children: (0, r.jsx)(d.DUT, {
      className: o()(y.ij, y.NY, a),
      innerRef: L,
      onClick: e => e.stopPropagation(),
      "aria-disabled": true,
      children: (0, r.jsx)(k, {
        colorClass: y.rM,
        size: "custom",
        height: s,
        width: s
      })
    })
  }) : N ? (0, r.jsx)(u.un, {
    title: E.intl.string(E.t["47Rhc3"]),
    body: E.intl.string(E.t.PXjA0b),
    "aria-label": F,
    children: (0, r.jsx)(d.DUT, {
      className: o()(y.ij, a),
      innerRef: L,
      onClick: G,
      "aria-label": F,
      "aria-busy": P,
      children: H()
    })
  }) : (0, r.jsx)(u.m_, {
    text: null != b ? b : F,
    "aria-label": null != b ? b : F,
    children: (0, r.jsx)(d.DUT, {
      className: o()(y.ij, a),
      innerRef: L,
      onClick: G,
      "aria-label": F,
      "aria-busy": P,
      children: H()
    })
  }, "wishlist-button-hovering-".concat(x || h)) : null
}