/** Chunk was on 45588 **/
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
  v = n(594174),
  I = n(626135),
  C = n(747545),
  T = n(981631),
  S = n(388032),
  O = n(262474);

function k(e) {
  let {
    transitionState: t,
    videoEnabled: n,
    onEnable: k,
    onClose: N
  } = e, x = h.Z.getCameraComponent(), w = (0, u.Dt)(), E = (0, m.Z)(), A = b.qF.useSetting(), [P, y] = a.useState((0, f.P)(v.default.getCurrentUser())), L = (0, l.O)(), {
    analyticsLocations: B
  } = (0, s.ZP)(d.Z.CAMERA_PREVIEW), R = a.useRef(null);
  a.useEffect(() => {
    I.default.track(T.rMx.OPEN_MODAL, {
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
      await (0, g.wG)(P, {
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
        }, L.location)
      })
    } catch (e) {}
    await N(), (0, p.Up)(P)
  };
  return (0, o.jsx)(s.Gt, {
    value: B,
    children: (0, o.jsx)(c.Z, {
      page: T.ZY5.PREVIEW_CAMERA_MODAL,
      children: (0, o.jsxs)(i.Y0X, {
        className: O.modalRoot,
        size: i.CgR.DYNAMIC,
        "aria-labelledby": w,
        transitionState: t,
        children: [(0, o.jsxs)(i.hzk, {
          className: E ? O.contentWithVideoBackgrounds : O.content,
          scrollerRef: R,
          children: [(0, o.jsx)(i.X6q, {
            id: w,
            className: O.header,
            variant: "heading-xl/semibold",
            children: n ? S.NW.string(S.t.LAwwbW) : S.NW.string(S.t["/HITVF"])
          }), (0, o.jsx)(C.Z, {
            hidePreviewToggle: !0,
            showSmallBackgroundOptions: !0,
            hideDeviceHeader: !0,
            hideCameraSettingsLink: !0,
            selectedBackgroundOption: P,
            onSelectBackgroundOption: y,
            hideDeviceSelector: n,
            renderCamera: e => (0, o.jsxs)("div", {
              className: O.cameraPreview,
              children: [(0, o.jsx)("div", {
                className: O.camera,
                children: (0, o.jsx)(x, {
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
            let e = n ? S.NW.string(S.t.KQENho) : S.NW.string(S.t.kgIe9f);
            return (0, o.jsx)(i.zxk, {
              onClick: n ? D : W,
              size: i.zxk.Sizes.SMALL,
              autoFocus: !n,
              children: e
            })
          })(), (0, o.jsx)(i.XZJ, {
            size: 18,
            type: i.XZJ.Types.INVERTED,
            value: A,
            onChange: () => {
              b.qF.updateSetting(!A), I.default.track(T.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !A
              })
            },
            children: (0, o.jsx)(i.Text, {
              variant: "text-sm/normal",
              children: S.NW.string(S.t["3Ppr1t"])
            })
          })]
        }), (0, o.jsx)(i.olH, {
          onClick: N,
          className: O.modalClose
        })]
      })
    })
  })
}