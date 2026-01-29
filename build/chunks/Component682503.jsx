/** Chunk was on 87916 **/
/** chunk id: 682503, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => N
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk855057 = require("./855057.jsx"),
  Chunk702211 = require("./702211.js"),
  Chunk699576 = require("./699576.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk504974 = require("./504974.jsx"),
  Chunk439193 = require("./439193.js"),
  Chunk652215 = require("./652215.js"),
  Chunk339984 = require("./339984.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk392491 = require("./392491.js");

function N(e) {
  let {
    transitionState: t,
    onClose: c,
    onComplete: N,
    uploadType: y,
    showUpsellHeader: E,
    analyticsPage: j
  } = e, [R, v] = i.useState(false), w = (0, s.k34)(), {
    analyticsLocations: I,
    newestAnalyticsLocation: L
  } = (0, d.Ay)(l.A.GIF_PICKER);
  async function P(e) {
    let t, {
      gifSrc: i
    } = e;
    if (null == i || R) return;
    v(true);
    let o = (0, f.s)(i),
      r = await fetch(o),
      l = await r.blob(),
      d = "" !== l.type ? l.type : function(e) {
        var t;
        switch (null == (t = new URL(e).pathname.split(".").pop()) ? true : t.toLowerCase()) {
          case "gif":
          default:
            return "image/gif";
          case "webp":
            return "image/webp";
          case "png":
            return "image/png";
          case "jpg":
          case "jpeg":
            return "image/jpeg"
        }
      }(o),
      u = "jpeg" === (t = d.split("/")[1]) ? ".jpg" : null != t && "" !== t ? ".".concat(t) : ".gif",
      p = "selected".concat(u);
    c(), (0, s.mMO)(async () => {
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
        imageUri: o,
        file: new File([l], p, {
          type: d
        }),
        onCrop: N,
        uploadType: y,
        showUpsellHeader: E
      }, t))
    }, {
      contextKey: w
    })
  }
  i.useEffect(() => {
    m.default.track(g.HAw.OPEN_MODAL, {
      type: g.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
      location_stack: I,
      location: {
        page: j
      }
    })
  }, [I, j]);
  let S = y === h.HL.AVATAR || y === h.HL.BANNER,
    T = (0, p.b)(!S);
  return (0, n.jsx)(d.f5, {
    value: I,
    children: (0, n.jsxs)(r.dWK, {
      onClose: c,
      transitionState: t,
      children: [(0, n.jsx)(r.rQ0, {
        title: x.intl.string(x.t["xsC+/y"])
      }), E && !T && (0, n.jsx)("div", {
        className: b.It,
        children: (0, n.jsx)(A.A, {
          type: y,
          analyticsPage: j,
          analyticsSection: g.JJy.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
          isGIF: true
        })
      }), (0, n.jsxs)("div", {
        className: b.SD,
        children: [(0, n.jsx)(u.A, {
          className: o()(b.XC, {
            [b.bX]: R
          }),
          onSelectGIF: P,
          headingColor: "text-subtle",
          hideFavorites: true
        }), R && (0, n.jsx)(s.y$y, {
          className: b.u1
        }), E && T && (0, n.jsx)(_.A, {
          uploadType: y,
          analyticsSource: L,
          showUpsell: true,
          className: b.Kt
        })]
      })]
    })
  })
}