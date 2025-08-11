/** Chunk was on 72891 **/
/** chunk id: 195297, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => P
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk313201 = require("./313201.js"),
  Chunk455708 = require("./455708.js"),
  Chunk222062 = require("./222062.js"),
  Chunk530329 = require("./530329.js"),
  Chunk626135 = require("./626135.js"),
  Chunk488499 = require("./488499.js"),
  Chunk58384 = require("./58384.js"),
  Chunk981631 = require("./981631.js"),
  Chunk486324 = require("./486324.js"),
  Chunk388032 = require("./388032.js"),
  Chunk922349 = require("./922349.js");

function P(e) {
  let {
    transitionState: t,
    onClose: o,
    onComplete: P,
    uploadType: b,
    showUpsellHeader: E,
    analyticsPage: R
  } = e, [j, v] = a.useState(false), y = (0, l.vRw)(), C = (0, d.Dt)(), {
    analyticsLocations: I,
    newestAnalyticsLocation: L
  } = (0, s.ZP)(c.Z.GIF_PICKER);
  async function Z(e) {
    let {
      gifSrc: t
    } = e;
    if (null == t || j) return;
    v(true);
    let a = (0, m.Q)(t),
      r = await fetch(a),
      c = await r.blob();
    o(), (0, l.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("59732"), n.e("93157")]).then(n.bind(n, 712451));
      return t => <e{...function(e) {
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
        onCrop: P,
        uploadType: b,
        showUpsellHeader: E
      }, t)} />
    }, {
      contextKey: y
    })
  }
  a.useEffect(() => {
    g.default.track(N.rMx.OPEN_MODAL, {
      type: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
      location_stack: I,
      location: {
        page: R
      }
    })
  }, [I, R]);
  let B = b === x.pC.AVATAR || b === x.pC.BANNER,
    w = (0, f.M)(!B);
  return <s.Gt value={I}><l.Y0X aria-labelledby={C} transitionState={t} size={l.CgR.SMALL} parentComponent={"GIFPickerCroppingModal"}>{E && !w && <p.Z type={b} analyticsPage={R} analyticsSection={N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL} isGIF={true} />}{<l.xBx className={A.modalHeader} separator={false}>{<l.vwX className={A.titleCase} tag={l.RB0.H1}>{h.intl.string(h.t["xsC+//"])}</l.vwX>}{<l.olH onClick={o} className={A.modalCloseButton} />}</l.xBx>}{<div>{<u.Z contentClassName={r()({
            [A.gifPickerContent]: E && w
          })} className={r()(A.gifPicker, {
            [A.loadingOverlay]: j
          })} onSelectGIF={Z} hideFavorites={true} />}{j && <l.$jN className={A.spinner} />}</div>}{E && w && <_.Z uploadType={b} analyticsSource={L} showUpsell={true} className={A.nitroUpsell} />}</l.Y0X></s.Gt>
}