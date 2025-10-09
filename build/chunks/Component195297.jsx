/** Chunk was on 72891 **/
/** chunk id: 195297, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk455708 = require("./455708.jsx"),
  Chunk222062 = require("./222062.js"),
  Chunk530329 = require("./530329.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk488499 = require("./488499.jsx"),
  Chunk58384 = require("./58384.js"),
  Chunk981631 = require("./981631.js"),
  Chunk486324 = require("./486324.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk382775 = require("./382775.js");

function b(e) {
  let {
    transitionState: t,
    onClose: o,
    onComplete: b,
    uploadType: P,
    showUpsellHeader: v,
    analyticsPage: E
  } = e, [j, R] = a.useState(false), y = (0, l.vRw)(), C = (0, d.Dt)(), {
    analyticsLocations: I,
    newestAnalyticsLocation: Z
  } = (0, s.ZP)(c.Z.GIF_PICKER);
  async function B(e) {
    let {
      gifSrc: t
    } = e;
    if (null == t || j) return;
    R(true);
    let a = (0, m.Q)(t),
      r = await fetch(a),
      c = await r.blob();
    o(), (0, l.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("59732"), n.e("42529")]).then(n.bind(n, 712451));
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
        file: new File([c], "tenor.gif", {
          type: "image/gif"
        }),
        onCrop: b,
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
  let L = P === x.pC.AVATAR || P === x.pC.BANNER,
    w = (0, f.M)(!L);
  return (0, i.jsx)(s.Gt, {
    value: I,
    children: (0, i.jsxs)(l.Y0X, {
      "aria-labelledby": C,
      transitionState: t,
      size: l.CgR.SMALL,
      parentComponent: "GIFPickerCroppingModal",
      children: [v && !w && (0, i.jsx)(p.Z, {
        type: P,
        analyticsPage: E,
        analyticsSection: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
        isGIF: true
      }), (0, i.jsxs)(l.xBx, {
        className: A.modalHeader,
        separator: false,
        children: [(0, i.jsx)(l.X6q, {
          className: A.titleCase,
          variant: "heading-lg/semibold",
          children: h.intl.string(h.t["xsC+//"])
        }), (0, i.jsx)(l.olH, {
          onClick: o,
          className: A.modalCloseButton
        })]
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(u.Z, {
          contentClassName: r()({
            [A.gifPickerContent]: v && w
          }),
          className: r()(A.gifPicker, {
            [A.loadingOverlay]: j
          }),
          onSelectGIF: B,
          hideFavorites: true
        }), j && (0, i.jsx)(l.$jN, {
          className: A.spinner
        })]
      }), v && w && (0, i.jsx)(_.Z, {
        uploadType: P,
        analyticsSource: Z,
        showUpsell: true,
        className: A.nitroUpsell
      })]
    })
  })
}