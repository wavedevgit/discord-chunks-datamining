/** Chunk was on 72891 **/
n.d(i, {
  default: () => E
}), n(47120);
var t = n(200651),
  o = n(192379),
  r = n(120356),
  a = n.n(r),
  l = n(481060),
  c = n(100527),
  s = n(906732),
  d = n(313201),
  u = n(455708),
  g = n(222062),
  _ = n(530329),
  f = n(626135),
  b = n(488499),
  p = n(58384),
  N = n(981631),
  m = n(486324),
  T = n(388032),
  h = n(762641);

function E(e) {
  let {
    transitionState: i,
    onClose: r,
    onComplete: E,
    uploadType: x,
    showUpsellHeader: j,
    analyticsPage: P
  } = e, [I, O] = o.useState(!1), B = (0, l.vRw)(), C = (0, d.Dt)(), {
    analyticsLocations: y
  } = (0, s.ZP)(c.Z.GIF_PICKER);
  async function v(e) {
    let {
      gifSrc: i
    } = e;
    if (null == i || I) return;
    O(!0);
    let o = (0, p.Q)(i),
      a = await fetch(o),
      c = await a.blob();
    r(), (0, l.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("59732"), n.e("25005"), n.e("56315")]).then(n.bind(n, 73620));
      return i => (0, t.jsx)(e, function(e) {
        for (var i = 1; i < arguments.length; i++) {
          var n = null != arguments[i] ? arguments[i] : {},
            t = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), t.forEach(function(i) {
            var t;
            t = n[i], i in e ? Object.defineProperty(e, i, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[i] = t
          })
        }
        return e
      }({
        imageUri: o,
        file: new File([c], "tenor.gif", {
          type: "image/gif"
        }),
        onCrop: E,
        uploadType: x,
        showUpsellHeader: j
      }, i))
    }, {
      contextKey: B
    })
  }
  o.useEffect(() => {
    f.default.track(N.rMx.OPEN_MODAL, {
      type: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
      location: {
        page: P
      }
    })
  }, [P]);
  let R = x === m.pC.AVATAR || x === m.pC.BANNER,
    A = (0, g.M)(!R);
  return (0, t.jsx)(s.Gt, {
    value: y,
    children: (0, t.jsxs)(l.Y0X, {
      "aria-labelledby": C,
      transitionState: i,
      size: l.CgR.SMALL,
      children: [j && !A && (0, t.jsx)(b.Z, {
        type: x,
        analyticsPage: P,
        analyticsSection: N.jXE.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
        isGIF: !0
      }), (0, t.jsxs)(l.xBx, {
        className: h.modalHeader,
        separator: !1,
        children: [(0, t.jsx)(l.vwX, {
          className: h.titleCase,
          tag: l.RB0.H1,
          children: T.NW.string(T.t["xsC+//"])
        }), (0, t.jsx)(l.olH, {
          onClick: r,
          className: h.modalCloseButton
        })]
      }), (0, t.jsxs)("div", {
        children: [(0, t.jsx)(u.Z, {
          contentClassName: a()({
            [h.gifPickerContent]: j && A
          }),
          className: a()(h.gifPicker, {
            [h.loadingOverlay]: I
          }),
          onSelectGIF: v,
          hideFavorites: !0
        }), I && (0, t.jsx)(l.$jN, {
          className: h.spinner
        })]
      }), j && A && (0, t.jsx)(_.Z, {
        uploadType: x,
        showUpsell: !0,
        className: h.nitroUpsell
      })]
    })
  })
}