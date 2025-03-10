/** Chunk was on 93346 **/
n.d(t, {
  default: () => k
}), n(47120);
var o = n(200651),
  a = n(192379),
  i = n(481060),
  r = n(846027),
  c = n(410575),
  l = n(2052),
  d = n(100527),
  s = n(906732),
  _ = n(600164),
  u = n(313201),
  b = n(695346),
  f = n(932724),
  p = n(716161),
  g = n(672339),
  m = n(898531),
  h = n(131951),
  I = n(594174),
  v = n(626135),
  C = n(747545),
  T = n(981631),
  O = n(388032),
  S = n(262474);

function k(e) {
  let {
    transitionState: t,
    videoEnabled: n,
    onEnable: k,
    onClose: N
  } = e, E = h.Z.getCameraComponent(), A = (0, u.Dt)(), x = (0, m.Z)(), P = b.qF.useSetting(), [w, L] = a.useState((0, f.P)(I.default.getCurrentUser())), y = (0, l.O)(), {
    analyticsLocations: B
  } = (0, s.ZP)(d.Z.CAMERA_PREVIEW), R = a.useRef(null);
  a.useEffect(() => {
    v.default.track(T.rMx.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), a.useEffect(() => {
    var e;
    null === (e = R.current) || void 0 === e || e.scrollToTop()
  }, []);
  let W = async () => {
    await D(), r.Z.setVideoEnabled(!0), null == k || k()
  }, D = async () => {
    try {
      await (0, g.wG)(w, {
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
        }, y.location)
      })
    } catch (e) {}
    await N(), (0, p.Up)(w)
  };
  return (0, o.jsx)(s.Gt, {
    value: B,
    children: (0, o.jsx)(c.Z, {
      page: T.ZY5.PREVIEW_CAMERA_MODAL,
      children: (0, o.jsxs)(i.Y0X, {
        className: S.modalRoot,
        size: i.CgR.DYNAMIC,
        "aria-labelledby": A,
        transitionState: t,
        children: [(0, o.jsxs)(i.hzk, {
          className: x ? S.contentWithVideoBackgrounds : S.content,
          scrollerRef: R,
          children: [(0, o.jsx)(i.X6q, {
            id: A,
            className: S.header,
            variant: "heading-xl/semibold",
            children: n ? O.NW.string(O.t.LAwwbW) : O.NW.string(O.t["/HITVF"])
          }), (0, o.jsx)(C.Z, {
            hidePreviewToggle: !0,
            showSmallBackgroundOptions: !0,
            hideDeviceHeader: !0,
            hideCameraSettingsLink: !0,
            selectedBackgroundOption: w,
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
              }), (0, o.jsx)(C.S, {})]
            }),
            onLearnMore: N
          })]
        }), (0, o.jsxs)(i.mzw, {
          justify: _.Z.Justify.BETWEEN,
          children: [(() => {
            let e = n ? O.NW.string(O.t.KQENho) : O.NW.string(O.t.kgIe9f);
            return (0, o.jsx)(i.zxk, {
              onClick: n ? D : W,
              size: i.zxk.Sizes.SMALL,
              autoFocus: !n,
              children: e
            })
          })(), (0, o.jsx)(i.XZJ, {
            size: 18,
            type: i.XZJ.Types.INVERTED,
            value: P,
            onChange: () => {
              b.qF.updateSetting(!P), v.default.track(T.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !P
              })
            },
            children: (0, o.jsx)(i.Text, {
              variant: "text-sm/normal",
              children: O.NW.string(O.t["3Ppr1t"])
            })
          })]
        }), (0, o.jsx)(i.olH, {
          onClick: N,
          className: S.modalClose
        })]
      })
    })
  })
}