/** Chunk was on 55440 **/
n.d(t, {
  default: () => N
}), n(47120);
var o = n(200651),
  i = n(192379),
  a = n(481060),
  r = n(846027),
  c = n(410575),
  l = n(2052),
  s = n(100527),
  d = n(906732),
  _ = n(600164),
  u = n(313201),
  b = n(695346),
  f = n(932724),
  g = n(716161),
  p = n(672339),
  m = n(898531),
  h = n(131951),
  I = n(594174),
  v = n(626135),
  T = n(747545),
  C = n(981631),
  O = n(388032),
  S = n(262474);

function N(e) {
  let {
    transitionState: t,
    videoEnabled: n,
    onEnable: N,
    onClose: k
  } = e, E = h.Z.getCameraComponent(), A = (0, u.Dt)(), x = (0, m.Z)(), y = b.qF.useSetting(), [P, L] = i.useState((0, f.P)(I.default.getCurrentUser())), w = (0, l.O)(), {
    analyticsLocations: B
  } = (0, d.ZP)(s.Z.CAMERA_PREVIEW), R = i.useRef(null);
  i.useEffect(() => {
    v.default.track(C.rMx.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), i.useEffect(() => {
    var e;
    null === (e = R.current) || void 0 === e || e.scrollToTop()
  }, []);
  let D = async () => {
    await Z(), r.Z.setVideoEnabled(!0), null == N || N()
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
          page: C.ZY5.PREVIEW_CAMERA_MODAL
        }, w.location)
      })
    } catch (e) {}
    await k(), (0, g.Up)(P)
  };
  return (0, o.jsx)(d.Gt, {
    value: B,
    children: (0, o.jsx)(c.Z, {
      page: C.ZY5.PREVIEW_CAMERA_MODAL,
      children: (0, o.jsxs)(a.Y0X, {
        className: S.modalRoot,
        size: a.CgR.DYNAMIC,
        "aria-labelledby": A,
        transitionState: t,
        children: [(0, o.jsxs)(a.hzk, {
          className: x ? S.contentWithVideoBackgrounds : S.content,
          scrollerRef: R,
          children: [(0, o.jsx)(a.X6q, {
            id: A,
            className: S.header,
            variant: "heading-xl/semibold",
            children: n ? O.NW.string(O.t.LAwwbW) : O.NW.string(O.t["/HITVF"])
          }), (0, o.jsx)(T.Z, {
            hidePreviewToggle: !0,
            showSmallBackgroundOptions: !0,
            hideDeviceHeader: !0,
            hideCameraSettingsLink: !0,
            selectedBackgroundOption: P,
            onSelectBackgroundOption: L,
            hideDeviceSelector: n,
            renderCamera: e => (0, o.jsxs)("div", {
              className: S.cameraPreview,
              children: [(0, o.jsx)("div", {
                className: S.camera,
                children: (0, o.jsx)(E, {
                  disabled: !1,
                  deviceId: e,
                  width: 368,
                  height: 207
                })
              }), (0, o.jsx)(T.S, {})]
            }),
            onLearnMore: k
          })]
        }), (0, o.jsxs)(a.mzw, {
          justify: _.Z.Justify.BETWEEN,
          children: [(() => {
            let e = n ? O.NW.string(O.t.KQENho) : O.NW.string(O.t.kgIe9f);
            return (0, o.jsx)(a.zxk, {
              onClick: n ? Z : D,
              size: a.zxk.Sizes.SMALL,
              autoFocus: !n,
              children: e
            })
          })(), (0, o.jsx)(a.XZJ, {
            size: 18,
            type: a.XZJ.Types.INVERTED,
            value: y,
            onChange: () => {
              b.qF.updateSetting(!y), v.default.track(C.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !y
              })
            },
            children: (0, o.jsx)(a.Text, {
              variant: "text-sm/normal",
              children: O.NW.string(O.t["3Ppr1t"])
            })
          })]
        }), (0, o.jsx)(a.olH, {
          onClick: k,
          className: S.modalClose
        })]
      })
    })
  })
}