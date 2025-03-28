/** Chunk was on 82873 **/
n.d(t, {
  default: () => O
}), n(47120);
var o = n(200651),
  a = n(192379),
  r = n(481060),
  i = n(846027),
  c = n(410575),
  l = n(2052),
  _ = n(100527),
  s = n(906732),
  d = n(600164),
  u = n(313201),
  b = n(695346),
  f = n(932724),
  g = n(716161),
  p = n(672339),
  m = n(898531),
  h = n(131951),
  S = n(594174),
  v = n(626135),
  T = n(747545),
  C = n(981631),
  x = n(388032),
  I = n(262474);

function O(e) {
  let {
    transitionState: t,
    videoEnabled: n,
    onEnable: O,
    onClose: k
  } = e, B = h.Z.getCameraComponent(), y = (0, u.Dt)(), P = (0, m.Z)(), A = b.qF.useSetting(), [w, E] = a.useState((0, f.P)(S.default.getCurrentUser())), L = (0, l.O)(), {
    analyticsLocations: N
  } = (0, s.ZP)(_.Z.CAMERA_PREVIEW), R = a.useRef(null);
  a.useEffect(() => {
    v.default.track(C.rMx.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), a.useEffect(() => {
    var e;
    null === (e = R.current) || void 0 === e || e.scrollToTop()
  }, []);
  let D = async () => {
    await W(), i.Z.setVideoEnabled(!0), null == O || O()
  }, W = async () => {
    try {
      await (0, p.wG)(w, {
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
        }, L.location)
      })
    } catch (e) {}
    await k(), (0, g.Up)(w)
  };
  return (0, o.jsx)(s.Gt, {
    value: N,
    children: (0, o.jsx)(c.Z, {
      page: C.ZY5.PREVIEW_CAMERA_MODAL,
      children: (0, o.jsxs)(r.Y0X, {
        className: I.modalRoot,
        size: r.CgR.DYNAMIC,
        "aria-labelledby": y,
        transitionState: t,
        children: [(0, o.jsxs)(r.hzk, {
          className: P ? I.contentWithVideoBackgrounds : I.content,
          scrollerRef: R,
          children: [(0, o.jsx)(r.X6q, {
            id: y,
            className: I.header,
            variant: "heading-xl/semibold",
            children: n ? x.NW.string(x.t.LAwwbW) : x.NW.string(x.t["/HITVF"])
          }), (0, o.jsx)(T.Z, {
            hidePreviewToggle: !0,
            showSmallBackgroundOptions: !0,
            hideDeviceHeader: !0,
            hideCameraSettingsLink: !0,
            selectedBackgroundOption: w,
            onSelectBackgroundOption: E,
            hideDeviceSelector: n,
            renderCamera: e => (0, o.jsxs)("div", {
              className: I.cameraPreview,
              children: [(0, o.jsx)("div", {
                className: I.camera,
                children: (0, o.jsx)(B, {
                  disabled: !1,
                  deviceId: e,
                  width: 368,
                  height: 207
                })
              }), (0, o.jsx)(T.S, {})]
            }),
            onLearnMore: k
          })]
        }), (0, o.jsxs)(r.mzw, {
          justify: d.Z.Justify.BETWEEN,
          children: [(() => {
            let e = n ? x.NW.string(x.t.KQENho) : x.NW.string(x.t.kgIe9f);
            return (0, o.jsx)(r.zxk, {
              onClick: n ? W : D,
              size: r.zxk.Sizes.SMALL,
              autoFocus: !n,
              children: e
            })
          })(), (0, o.jsx)(r.XZJ, {
            size: 18,
            type: r.XZJ.Types.INVERTED,
            value: A,
            onChange: () => {
              b.qF.updateSetting(!A), v.default.track(C.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !A
              })
            },
            children: (0, o.jsx)(r.Text, {
              variant: "text-sm/normal",
              children: x.NW.string(x.t["3Ppr1t"])
            })
          })]
        }), (0, o.jsx)(r.olH, {
          onClick: k,
          className: I.modalClose
        })]
      })
    })
  })
}