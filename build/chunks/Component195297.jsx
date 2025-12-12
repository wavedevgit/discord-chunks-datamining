/** Chunk was on 72891 **/
/** chunk id: 195297, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk455708 = require("./455708.jsx"),
  Chunk222062 = require("./222062.js"),
  Chunk530329 = require("./530329.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk488499 = require("./488499.jsx"),
  Chunk58384 = require("./58384.js"),
  Chunk981631 = require("./981631.js"),
  Chunk486324 = require("./486324.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk749013 = require("./749013.js");

function A(e) {
  let {
    transitionState: t,
    onClose: o,
    onComplete: A,
    uploadType: P,
    showUpsellHeader: v,
    analyticsPage: E
  } = e, [j, R] = a.useState(false), y = (0, c.vRw)(), {
    analyticsLocations: I,
    newestAnalyticsLocation: C
  } = (0, d.ZP)(s.Z.GIF_PICKER);
  async function Z(e) {
    let {
      gifSrc: t
    } = e;
    if (null == t || j) return;
    R(true);
    let a = (0, x.Q)(t),
      r = await fetch(a),
      l = await r.blob();
    o(), (0, c.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("59732"), n.e("37988")]).then(n.bind(n, 712451));
      return t => (0, i.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({
        imageUri: a,
        file: new File([l], "tenor.gif", {
          type: "image/gif"
        }),
        onCrop: A,
        uploadType: P,
        showUpsellHeader: v
      }, t))
    }, {
      contextKey: y
    })
  }
  a.useEffect(() => {
    g.default.track(N.rMx.OPEN_MODAL, {
      type: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
      location_stack: I,
      location: {
        page: E
      }
    })
  }, [I, E]);
  let w = P === m.pC.AVATAR || P === m.pC.BANNER,
    O = (0, f.M)(!w);
  return (0, i.jsx)(d.Gt, {
    value: I,
    children: (0, i.jsxs)(l.IX, {
      onClose: o,
      transitionState: t,
      children: [(0, i.jsx)(l.xBx, {
        title: _.intl.string(_.t["xsC+/y"])
      }), v && !O && (0, i.jsx)("div", {
        className: h.upsellHeaderContainer,
        children: (0, i.jsx)(p.Z, {
          type: P,
          analyticsPage: E,
          analyticsSection: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
          isGIF: true
        })
      }), (0, i.jsxs)("div", {
        className: h.gifPickerContainer,
        children: [(0, i.jsx)(u.Z, {
          className: r()(h.gifPicker, {
            [h.loadingOverlay]: j
          }),
          onSelectGIF: Z,
          headingColor: "text-subtle",
          hideFavorites: true
        }), j && (0, i.jsx)(c.$jN, {
          className: h.spinner
        }), v && O && (0, i.jsx)(b.Z, {
          uploadType: P,
          analyticsSource: C,
          showUpsell: true,
          className: h.nitroUpsell
        })]
      })]
    })
  })
}