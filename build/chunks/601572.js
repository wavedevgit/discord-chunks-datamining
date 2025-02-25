/** Chunk was on 93259 **/
n.d(t, {
  default: () => S
}), n(47120);
var a = n(200651),
  o = n(192379),
  r = n(481060),
  i = n(846027),
  l = n(410575),
  c = n(2052),
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
  O = n(594174),
  C = n(626135),
  I = n(747545),
  E = n(981631),
  v = n(388032),
  T = n(313953);

function S(e) {
  let {
    transitionState: t,
    videoEnabled: n,
    onEnable: S,
    onClose: N
  } = e, A = h.Z.getCameraComponent(), R = (0, u.Dt)(), k = (0, m.Z)(), y = b.qF.useSetting(), [L, P] = o.useState((0, f.P)(O.default.getCurrentUser())), w = (0, c.O)(), {
    analyticsLocations: B
  } = (0, d.ZP)(s.Z.CAMERA_PREVIEW), x = o.useRef(null);
  o.useEffect(() => {
    C.default.track(E.rMx.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), o.useEffect(() => {
    var e;
    null === (e = x.current) || void 0 === e || e.scrollToTop()
  }, []);
  let D = async () => {
    await U(), i.Z.setVideoEnabled(!0), null == S || S()
  }, U = async () => {
    try {
      await (0, p.wG)(L, {
        location: function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              a = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), a.forEach(function(t) {
              var a;
              a = n[t], t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = a
            })
          }
          return e
        }({
          page: E.ZY5.PREVIEW_CAMERA_MODAL
        }, w.location)
      })
    } catch (e) {}
    await N(), (0, g.Up)(L)
  };
  return (0, a.jsx)(d.Gt, {
    value: B,
    children: (0, a.jsx)(l.Z, {
      page: E.ZY5.PREVIEW_CAMERA_MODAL,
      children: (0, a.jsxs)(r.Y0X, {
        className: T.modalRoot,
        size: r.CgR.DYNAMIC,
        "aria-labelledby": R,
        transitionState: t,
        children: [(0, a.jsxs)(r.hzk, {
          className: k ? T.contentWithVideoBackgrounds : T.content,
          scrollerRef: x,
          children: [(0, a.jsx)(r.X6q, {
            id: R,
            className: T.header,
            variant: "heading-xl/semibold",
            children: n ? v.NW.string(v.t.LAwwbW) : v.NW.string(v.t["/HITVF"])
          }), (0, a.jsx)(I.Z, {
            hidePreviewToggle: !0,
            showSmallBackgroundOptions: !0,
            hideDeviceHeader: !0,
            hideCameraSettingsLink: !0,
            selectedBackgroundOption: L,
            onSelectBackgroundOption: P,
            hideDeviceSelector: n,
            renderCamera: e => (0, a.jsxs)("div", {
              className: T.cameraPreview,
              children: [(0, a.jsx)("div", {
                className: T.camera,
                children: (0, a.jsx)(A, {
                  disabled: !1,
                  deviceId: e,
                  width: 368,
                  height: 207
                })
              }), (0, a.jsx)(I.S, {})]
            }),
            onLearnMore: N
          })]
        }), (0, a.jsxs)(r.mzw, {
          justify: _.Z.Justify.BETWEEN,
          children: [(() => {
            let e = n ? v.NW.string(v.t.KQENho) : v.NW.string(v.t.kgIe9f);
            return (0, a.jsx)(r.zxk, {
              onClick: n ? U : D,
              size: r.zxk.Sizes.SMALL,
              autoFocus: !n,
              children: e
            })
          })(), (0, a.jsx)(r.XZJ, {
            size: 18,
            type: r.XZJ.Types.INVERTED,
            value: y,
            onChange: () => {
              b.qF.updateSetting(!y), C.default.track(E.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !y
              })
            },
            children: (0, a.jsx)(r.Text, {
              variant: "text-sm/normal",
              children: v.NW.string(v.t["3Ppr1t"])
            })
          })]
        }), (0, a.jsx)(r.olH, {
          onClick: N,
          className: T.modalClose
        })]
      })
    })
  })
}