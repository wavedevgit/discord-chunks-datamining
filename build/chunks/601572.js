/** Chunk was on 13287 **/
n.d(t, {
  default: () => C
}), n(47120);
var o = n(200651),
  a = n(192379),
  i = n(481060),
  r = n(846027),
  c = n(410575),
  l = n(2052),
  s = n(100527),
  _ = n(906732),
  d = n(600164),
  u = n(313201),
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
  E = n(388032),
  S = n(313953);

function C(e) {
  let {
    transitionState: t,
    videoEnabled: n,
    onEnable: C,
    onClose: N
  } = e, A = I.Z.getCameraComponent(), L = (0, u.Dt)(), R = (0, m.Z)(), P = b.qF.useSetting(), [y, k] = a.useState((0, f.P)(v.default.getCurrentUser())), x = (0, l.O)(), {
    analyticsLocations: w
  } = (0, _.ZP)(s.Z.CAMERA_PREVIEW), D = a.useRef(null);
  a.useEffect(() => {
    h.default.track(T.rMx.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), a.useEffect(() => {
    var e;
    null === (e = D.current) || void 0 === e || e.scrollToTop()
  }, []);
  let B = async () => {
    await G(), r.Z.setVideoEnabled(!0), null == C || C()
  }, G = async () => {
    try {
      await (0, p.wG)(y, {
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
        }, x.location)
      })
    } catch (e) {}
    await N(), (0, g.Up)(y)
  };
  return (0, o.jsx)(_.Gt, {
    value: w,
    children: (0, o.jsx)(c.Z, {
      page: T.ZY5.PREVIEW_CAMERA_MODAL,
      children: (0, o.jsxs)(i.Y0X, {
        className: S.modalRoot,
        size: i.CgR.DYNAMIC,
        "aria-labelledby": L,
        transitionState: t,
        children: [(0, o.jsxs)(i.hzk, {
          className: R ? S.contentWithVideoBackgrounds : S.content,
          scrollerRef: D,
          children: [(0, o.jsx)(i.X6q, {
            id: L,
            className: S.header,
            variant: "heading-xl/semibold",
            children: n ? E.NW.string(E.t.LAwwbW) : E.NW.string(E.t["/HITVF"])
          }), (0, o.jsx)(O.Z, {
            hidePreviewToggle: !0,
            showSmallBackgroundOptions: !0,
            hideDeviceHeader: !0,
            hideCameraSettingsLink: !0,
            selectedBackgroundOption: y,
            onSelectBackgroundOption: k,
            hideDeviceSelector: n,
            renderCamera: e => (0, o.jsxs)("div", {
              className: S.cameraPreview,
              children: [(0, o.jsx)("div", {
                className: S.camera,
                children: (0, o.jsx)(A, {
                  disabled: !1,
                  deviceId: e,
                  width: 368,
                  height: 207
                })
              }), (0, o.jsx)(O.S, {})]
            }),
            onLearnMore: N
          })]
        }), (0, o.jsxs)(i.mzw, {
          justify: d.Z.Justify.BETWEEN,
          children: [(() => {
            let e = n ? E.NW.string(E.t.KQENho) : E.NW.string(E.t.kgIe9f);
            return (0, o.jsx)(i.zxk, {
              onClick: n ? G : B,
              size: i.zxk.Sizes.SMALL,
              autoFocus: !n,
              children: e
            })
          })(), (0, o.jsx)(i.XZJ, {
            size: 18,
            type: i.XZJ.Types.INVERTED,
            value: P,
            onChange: () => {
              b.qF.updateSetting(!P), h.default.track(T.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !P
              })
            },
            children: (0, o.jsx)(i.Text, {
              variant: "text-sm/normal",
              children: E.NW.string(E.t["3Ppr1t"])
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