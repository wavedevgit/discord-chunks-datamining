/** Chunk was on 14439 **/
/** chunk id: 552915, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk575593 = require("./575593.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954921 = require("./954921.jsx"),
  Chunk278539 = require("./278539.js"),
  Chunk550111 = require("./550111.jsx"),
  Chunk242874 = require("./242874.js"),
  Chunk75825 = require("./75825.jsx"),
  Chunk331402 = require("./331402.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk674658 = require("./674658.js"),
  Chunk245068 = require("./245068.jsx"),
  Chunk704751 = require("./704751.js");
let g = Chunk397927._3J.SIZE_152,
  b = (0, Chunk954921.Te)(g),
  O = e => {
    var t, r;
    let {
      item: i
    } = e, a = (0, l.bG)([f.default], () => f.default.getCurrentUser()), {
      avatarDecorationSrc: c,
      avatarPlaceholderSrc: u,
      eventHandlers: d
    } = (0, o.A)({
      user: a,
      avatarDecorationOverride: i,
      size: b
    });
    return (0, n.jsx)("div", {
      className: y._P,
      children: (0, n.jsx)(s.euF, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({}, d), r = r = {
        "aria-label": i.label,
        src: u,
        avatarDecoration: c,
        size: g
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t))
    })
  },
  j = e => {
    let {
      item: t
    } = e;
    return (0, n.jsx)("div", {
      className: y.xC,
      children: (0, n.jsx)(p.A, {
        isHighlighted: true,
        skuId: null == t ? true : t.skuId
      })
    })
  },
  A = e => {
    let {
      item: t
    } = e;
    return (0, n.jsx)("div", {
      className: y.M4,
      children: (0, n.jsx)(c.A, {
        nameplate: t,
        className: y.qF,
        nameplatePreviewSize: "xlarge",
        isHighlighted: true,
        showPlaceholderUser: true
      })
    })
  },
  x = e => {
    let {
      product: t
    } = e;
    return (0, n.jsx)("div", {
      className: y.hT,
      children: (0, n.jsx)(m.X, {
        product: t,
        isHighlighted: false
      })
    })
  },
  v = e => {
    let {
      giftCode: t
    } = e, {
      product: r,
      isFetching: l
    } = (0, h.q)(t.skuId, true);
    if (l || null == r) return (0, n.jsx)("div", {
      className: y.dc,
      children: (0, n.jsx)(s.y$y, {})
    });
    if (r.type === i.R.BUNDLE) return 0 === r.items.length ? null : (0, n.jsx)(x, {
      product: r
    });
    let a = null == r ? true : r.items[0];
    switch (null == a ? true : a.type) {
      case i.R.AVATAR_DECORATION:
        return (0, n.jsx)(O, {
          item: a
        });
      case i.R.PROFILE_EFFECT:
        return (0, n.jsx)(j, {
          item: a
        });
      case i.R.NAMEPLATE:
        return (0, n.jsx)(A, {
          item: a
        });
      default:
        return null != t.giftStyle ? (0, n.jsx)(d.A, {
          defaultAnimationState: u.oA.ACTION,
          idleAnimationState: u.oA.LOOP,
          className: y.l$,
          giftStyle: t.giftStyle
        }) : null
    }
  }