/** Chunk was on 44070 **/
n.d(t, {
  default: () => O
}), n(47120);
var o = n(200651),
  a = n(192379),
  r = n(481060),
  i = n(846027),
  c = n(410575),
  l = n(2052),
  d = n(100527),
  _ = n(906732),
  s = n(600164),
  u = n(313201),
  b = n(695346),
  p = n(932724),
  f = n(716161),
  g = n(672339),
  m = n(898531),
  h = n(131951),
  v = n(594174),
  C = n(626135),
  S = n(747545),
  T = n(981631),
  I = n(388032),
  k = n(262474);

function O(e) {
  let {
    transitionState: t,
    videoEnabled: n,
    onEnable: O,
    onClose: x
  } = e, B = h.Z.getCameraComponent(), y = (0, u.Dt)(), P = (0, m.Z)(), w = b.qF.useSetting(), [A, L] = a.useState((0, p.P)(v.default.getCurrentUser())), E = (0, l.O)(), {
    analyticsLocations: D
  } = (0, _.ZP)(d.Z.CAMERA_PREVIEW), N = a.useRef(null);
  a.useEffect(() => {
    C.default.track(T.rMx.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), a.useEffect(() => {
    var e;
    null === (e = N.current) || void 0 === e || e.scrollToTop()
  }, []);
  let R = async () => {
    await W(), i.Z.setVideoEnabled(!0), null == O || O()
  }, W = async () => {
    try {
      await (0, g.wG)(A, {
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
        }, E.location)
      })
    } catch (e) {}
    await x(), (0, f.Up)(A)
  };
  return (0, o.jsx)(_.Gt, {
    value: D,
    children: (0, o.jsx)(c.Z, {
      page: T.ZY5.PREVIEW_CAMERA_MODAL,
      children: (0, o.jsxs)(r.Y0X, {
        className: k.modalRoot,
        size: r.CgR.DYNAMIC,
        "aria-labelledby": y,
        transitionState: t,
        children: [(0, o.jsxs)(r.hzk, {
          className: P ? k.contentWithVideoBackgrounds : k.content,
          scrollerRef: N,
          children: [(0, o.jsx)(r.X6q, {
            id: y,
            className: k.header,
            variant: "heading-xl/semibold",
            children: n ? I.NW.string(I.t.LAwwbW) : I.NW.string(I.t["/HITVF"])
          }), (0, o.jsx)(S.Z, {
            hidePreviewToggle: !0,
            showSmallBackgroundOptions: !0,
            hideDeviceHeader: !0,
            hideCameraSettingsLink: !0,
            selectedBackgroundOption: A,
            onSelectBackgroundOption: L,
            hideDeviceSelector: n,
            renderCamera: e => (0, o.jsxs)("div", {
              className: k.cameraPreview,
              children: [(0, o.jsx)("div", {
                className: k.camera,
                children: (0, o.jsx)(B, {
                  disabled: !1,
                  deviceId: e,
                  width: 368,
                  height: 207
                })
              }), (0, o.jsx)(S.S, {})]
            }),
            onLearnMore: x
          })]
        }), (0, o.jsxs)(r.mzw, {
          justify: s.Z.Justify.BETWEEN,
          children: [(() => {
            let e = n ? I.NW.string(I.t.KQENho) : I.NW.string(I.t.kgIe9f);
            return (0, o.jsx)(r.zxk, {
              onClick: n ? W : R,
              size: r.zxk.Sizes.SMALL,
              autoFocus: !n,
              children: e
            })
          })(), (0, o.jsx)(r.XZJ, {
            size: 18,
            type: r.XZJ.Types.INVERTED,
            value: w,
            onChange: () => {
              b.qF.updateSetting(!w), C.default.track(T.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !w
              })
            },
            children: (0, o.jsx)(r.Text, {
              variant: "text-sm/normal",
              children: I.NW.string(I.t["3Ppr1t"])
            })
          })]
        }), (0, o.jsx)(r.olH, {
          onClick: x,
          className: k.modalClose
        })]
      })
    })
  })
}