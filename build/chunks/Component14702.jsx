/** Chunk was on web.js **/
/** chunk id: 14702, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk575593 = require("./575593.js"),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk226540 = require("./226540.js"),
  Chunk227 = require("./227.jsx"),
  Chunk262737 = require("./262737.js"),
  Chunk590180 = require("./590180.js"),
  Chunk442759 = require("./442759.js"),
  Chunk181774 = require("./181774.js"),
  Chunk628856 = require("./628856.js"),
  Chunk132198 = require("./132198.jsx"),
  Chunk929283 = require("./929283.jsx"),
  Chunk190016 = require("./190016.js"),
  Chunk180171 = require("./180171.js"),
  Chunk989099 = require("./989099.js"),
  Chunk191761 = require("./191761.js");
let A = e => {
    let {
      avatarDecoration: t,
      avatarSize: n
    } = e, i = (0, c.Ay)(), a = (0, o.qB)(i) ? O : b;
    return (0, r.jsx)(E.i, {
      item: t,
      avatarSize: n,
      isHighlighted: false,
      avatarPlaceholderSrc: a,
      className: y.M
    })
  },
  I = e => {
    var t;
    let {
      profileEffect: n,
      fallbackLabel: a
    } = e, s = (0, f.V)(null == n ? true : n.skuId), {
      accessibilityLabel: o,
      thumbnailPreviewSrc: l,
      title: c
    } = null != (t = null == s ? true : s.config) ? t : {}, u = i.useMemo(() => (0, h.Rc)(l), [l]);
    return null == s ? a : (0, r.jsxs)("div", {
      className: y.YS,
      children: [(0, r.jsx)("img", {
        src: v,
        alt: o,
        className: y.Zp
      }), (0, r.jsx)("img", {
        className: y.Hm,
        src: u,
        alt: c
      })]
    })
  },
  S = e => {
    let {
      nameplate: t,
      fallbackLabel: n
    } = e, [a, s] = i.useState(false), o = i.useCallback(() => s(true), []), l = i.useCallback(() => s(false), []);
    return null == t ? n : (0, r.jsx)("div", {
      className: y.rz,
      onMouseEnter: o,
      onMouseLeave: l,
      children: (0, r.jsx)(d.A, {
        nameplate: (0, m.D)(t),
        hovered: a,
        placement: u.u.MINI_PREVIEW
      })
    })
  },
  T = e => {
    let {
      product: t,
      fallbackLabel: n
    } = e, {
      firstAvatarDecoration: i,
      firstProfileEffect: a,
      firstNameplate: s
    } = (0, _.f5)(t);
    return null == i && null == a && null == s ? n : (0, r.jsxs)("div", {
      className: y.WJ,
      children: [null != a && (0, r.jsx)("div", {
        className: y.zh,
        children: (0, r.jsx)(I, {
          profileEffect: a,
          fallbackLabel: null
        })
      }), null != s && (0, r.jsx)("div", {
        className: y.sY,
        children: (0, r.jsx)(S, {
          nameplate: s,
          fallbackLabel: null
        })
      }), null != i && (0, r.jsx)("div", {
        className: y.kf,
        children: (0, r.jsx)(A, {
          avatarDecoration: i,
          avatarSize: l._3J.SIZE_24
        })
      })]
    })
  },
  C = e => {
    var t;
    let {
      product: n,
      sku: i,
      fallbackLabel: o
    } = e, c = null == i ? true : i.id, u = (0, s.bG)([p.A], () => p.A.getProduct(null == i ? true : i.id)), d = null != n ? n : u;
    if ((null == d ? true : d.type) === a.R.BUNDLE) return (0, r.jsx)(T, {
      product: d,
      fallbackLabel: o
    });
    let [f] = null != (t = null == d ? true : d.items) ? t : [];
    return true !== c && c in g.m ? g.m[c].render({
      animationState: "on_hover",
      className: y.Vr
    }) : (null == f ? true : f.type) === a.R.AVATAR_DECORATION ? (0, r.jsx)(A, {
      avatarDecoration: f,
      avatarSize: l._3J.SIZE_40
    }) : (null == f ? true : f.type) === a.R.PROFILE_EFFECT ? (0, r.jsx)(I, {
      profileEffect: f,
      fallbackLabel: o
    }) : (null == f ? true : f.type) === a.R.NAMEPLATE ? (0, r.jsx)(S, {
      nameplate: f,
      fallbackLabel: o
    }) : o
  }