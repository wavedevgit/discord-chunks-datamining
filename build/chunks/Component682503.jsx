/** Chunk was on 87916 **/
/** chunk id: 682503, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
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
    onClose: l,
    onComplete: h,
    uploadType: y,
    showUpsellHeader: E,
    analyticsPage: R
  } = e, [j, v] = i.useState(false), I = (0, o.k34)(), {
    analyticsLocations: L,
    newestAnalyticsLocation: P
  } = (0, d.Ay)(c.A.GIF_PICKER);
  async function w(e) {
    let {
      gifSrc: t
    } = e;
    if (null == t || j) return;
    v(true);
    let i = (0, m.g)(t),
      r = await fetch(i),
      s = await r.blob();
    l(), (0, o.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("35929"), n.e("74571"), n.e("67449")]).then(n.bind(n, 142630));
      return t => (0, a.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), a.forEach(function(t) {
            var a;
            a = n[t], t in e ? Object.defineProperty(e, t, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = a
          })
        }
        return e
      }({
        imageUri: i,
        file: new File([s], "tenor.gif", {
          type: "image/gif"
        }),
        onCrop: h,
        uploadType: y,
        showUpsellHeader: E
      }, t))
    }, {
      contextKey: I
    })
  }
  i.useEffect(() => {
    f.default.track(p.HAw.OPEN_MODAL, {
      type: p.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
      location_stack: L,
      location: {
        page: R
      }
    })
  }, [L, R]);
  let S = y === x.HL.AVATAR || y === x.HL.BANNER,
    U = (0, _.b)(!S);
  return (0, a.jsx)(d.f5, {
    value: L,
    children: (0, a.jsxs)(s.dWK, {
      onClose: l,
      transitionState: t,
      children: [(0, a.jsx)(s.rQ0, {
        title: N.intl.string(N.t["xsC+/y"])
      }), E && !U && (0, a.jsx)("div", {
        className: b.It,
        children: (0, a.jsx)(g.A, {
          type: y,
          analyticsPage: R,
          analyticsSection: p.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
          isGIF: true
        })
      }), (0, a.jsxs)("div", {
        className: b.SD,
        children: [(0, a.jsx)(u.A, {
          className: r()(b.XC, {
            [b.bX]: j
          }),
          onSelectGIF: w,
          headingColor: "text-subtle",
          hideFavorites: true
        }), j && (0, a.jsx)(o.y$y, {
          className: b.u1
        }), E && U && (0, a.jsx)(A.A, {
          uploadType: y,
          analyticsSource: P,
          showUpsell: true,
          className: b.Kt
        })]
      })]
    })
  })
}