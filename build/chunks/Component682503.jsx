/** Chunk was on 87916 **/
/** chunk id: 682503, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk855057 = require("./855057.jsx"),
  Chunk702211 = require("./702211.js"),
  Chunk699576 = require("./699576.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk504974 = require("./504974.jsx"),
  Chunk248067 = require("./248067.js"),
  Chunk652215 = require("./652215.js"),
  Chunk339984 = require("./339984.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk392491 = require("./392491.js");

function h(e) {
  let {
    transitionState: t,
    onClose: i,
    onComplete: h,
    uploadType: E,
    showUpsellHeader: y,
    analyticsPage: j
  } = e, [R, v] = s.useState(false), I = (0, c.k34)(), {
    analyticsLocations: L,
    newestAnalyticsLocation: P
  } = (0, d.Ay)(o.A.GIF_PICKER);
  async function S(e) {
    let {
      gifSrc: t
    } = e;
    if (null == t || R) return;
    v(true);
    let s = (0, b.g)(t),
      l = await fetch(s),
      r = await l.blob();
    i(), (0, c.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("35929"), a.e("74571"), a.e("67449")]).then(a.bind(a, 142630));
      return t => (0, n.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = a[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({
        imageUri: s,
        file: new File([r], "tenor.gif", {
          type: "image/gif"
        }),
        onCrop: h,
        uploadType: E,
        showUpsellHeader: y
      }, t))
    }, {
      contextKey: I
    })
  }
  s.useEffect(() => {
    _.default.track(x.HAw.OPEN_MODAL, {
      type: x.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
      location_stack: L,
      location: {
        page: j
      }
    })
  }, [L, j]);
  let T = E === p.HL.AVATAR || E === p.HL.BANNER,
    w = (0, f.b)(!T);
  return (0, n.jsx)(d.f5, {
    value: L,
    children: (0, n.jsxs)(r.dWK, {
      onClose: i,
      transitionState: t,
      children: [(0, n.jsx)(r.rQ0, {
        title: N.intl.string(N.t["xsC+/y"])
      }), y && !w && (0, n.jsx)("div", {
        className: g.It,
        children: (0, n.jsx)(m.A, {
          type: E,
          analyticsPage: j,
          analyticsSection: x.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
          isGIF: true
        })
      }), (0, n.jsxs)("div", {
        className: g.SD,
        children: [(0, n.jsx)(u.A, {
          className: l()(g.XC, {
            [g.bX]: R
          }),
          onSelectGIF: S,
          headingColor: "text-subtle",
          hideFavorites: true
        }), R && (0, n.jsx)(c.y$y, {
          className: g.u1
        }), y && w && (0, n.jsx)(A.A, {
          uploadType: E,
          analyticsSource: P,
          showUpsell: true,
          className: g.Kt
        })]
      })]
    })
  })
}