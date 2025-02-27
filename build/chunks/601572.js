/** Chunk was on 21357 **/
n.d(t, {
  default: () => E
}), n(47120);
var o = n(200651),
  i = n(192379),
  a = n(481060),
  r = n(846027),
  c = n(410575),
  l = n(2052),
  s = n(100527),
  d = n(906732),
  u = n(600164),
  _ = n(313201),
  b = n(695346),
  f = n(932724),
  g = n(716161),
  p = n(672339),
  m = n(898531),
  I = n(131951),
  v = n(594174),
  h = n(626135),
  O = n(747545),
  T = n(981631),
  S = n(388032),
  C = n(313953);

function E(e) {
  let {
    transitionState: t,
    videoEnabled: n,
    onEnable: E,
    onClose: A
  } = e, N = I.Z.getCameraComponent(), y = (0, _.Dt)(), k = (0, m.Z)(), L = b.qF.useSetting(), [P, x] = i.useState((0, f.P)(v.default.getCurrentUser())), w = (0, l.O)(), {
    analyticsLocations: R
  } = (0, d.ZP)(s.Z.CAMERA_PREVIEW), B = i.useRef(null);
  i.useEffect(() => {
    h.default.track(T.rMx.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), i.useEffect(() => {
    var e;
    null === (e = B.current) || void 0 === e || e.scrollToTop()
  }, []);
  let D = async () => {
    await Z(), r.Z.setVideoEnabled(!0), null == E || E()
  }, Z = async () => {
    try {
      await (0, p.wG)(P, {
        location: function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              o = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), o.forEach(function(t) {
              var o;
              o = n[t], t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = o
            })
          }
          return e
        }({
          page: T.ZY5.PREVIEW_CAMERA_MODAL
        }, w.location)
      })
    } catch (e) {}
    await A(), (0, g.Up)(P)
  };
  return (0, o.jsx)(d.Gt, {
    value: R,
    children: (0, o.jsx)(c.Z, {
      page: T.ZY5.PREVIEW_CAMERA_MODAL,
      children: (0, o.jsxs)(a.Y0X, {
        className: C.modalRoot,
        size: a.CgR.DYNAMIC,
        "aria-labelledby": y,
        transitionState: t,
        children: [(0, o.jsxs)(a.hzk, {
          className: k ? C.contentWithVideoBackgrounds : C.content,
          scrollerRef: B,
          children: [(0, o.jsx)(a.X6q, {
            id: y,
            className: C.header,
            variant: "heading-xl/semibold",
            children: n ? S.NW.string(S.t.LAwwbW) : S.NW.string(S.t["/HITVF"])
          }), (0, o.jsx)(O.Z, {
            hidePreviewToggle: !0,
            showSmallBackgroundOptions: !0,
            hideDeviceHeader: !0,
            hideCameraSettingsLink: !0,
            selectedBackgroundOption: P,
            onSelectBackgroundOption: x,
            hideDeviceSelector: n,
            renderCamera: e => (0, o.jsxs)("div", {
              className: C.cameraPreview,
              children: [(0, o.jsx)("div", {
                className: C.camera,
                children: (0, o.jsx)(N, {
                  disabled: !1,
                  deviceId: e,
                  width: 368,
                  height: 207
                })
              }), (0, o.jsx)(O.S, {})]
            }),
            onLearnMore: A
          })]
        }), (0, o.jsxs)(a.mzw, {
          justify: u.Z.Justify.BETWEEN,
          children: [(() => {
            let e = n ? S.NW.string(S.t.KQENho) : S.NW.string(S.t.kgIe9f);
            return (0, o.jsx)(a.zxk, {
              onClick: n ? Z : D,
              size: a.zxk.Sizes.SMALL,
              autoFocus: !n,
              children: e
            })
          })(), (0, o.jsx)(a.XZJ, {
            size: 18,
            type: a.XZJ.Types.INVERTED,
            value: L,
            onChange: () => {
              b.qF.updateSetting(!L), h.default.track(T.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !L
              })
            },
            children: (0, o.jsx)(a.Text, {
              variant: "text-sm/normal",
              children: S.NW.string(S.t["3Ppr1t"])
            })
          })]
        }), (0, o.jsx)(a.olH, {
          onClick: A,
          className: C.modalClose
        })]
      })
    })
  })
}