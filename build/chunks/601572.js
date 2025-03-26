/** Chunk was on 93509 **/
n.d(t, {
  default: () => x
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
  p = n(716161),
  g = n(672339),
  m = n(898531),
  h = n(131951),
  v = n(594174),
  C = n(626135),
  I = n(747545),
  T = n(981631),
  S = n(388032),
  O = n(262474);

function x(e) {
  let {
    transitionState: t,
    videoEnabled: n,
    onEnable: x,
    onClose: k
  } = e, w = h.Z.getCameraComponent(), y = (0, u.Dt)(), N = (0, m.Z)(), P = b.qF.useSetting(), [B, A] = i.useState((0, f.P)(v.default.getCurrentUser())), E = (0, l.O)(), {
    analyticsLocations: L
  } = (0, d.ZP)(s.Z.CAMERA_PREVIEW), R = i.useRef(null);
  i.useEffect(() => {
    C.default.track(T.rMx.OPEN_MODAL, {
      type: "Camera Preview Modal"
    })
  }, []), i.useEffect(() => {
    var e;
    null === (e = R.current) || void 0 === e || e.scrollToTop()
  }, []);
  let D = async () => {
    await Z(), r.Z.setVideoEnabled(!0), null == x || x()
  }, Z = async () => {
    try {
      await (0, g.wG)(B, {
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
    await k(), (0, p.Up)(B)
  };
  return (0, o.jsx)(d.Gt, {
    value: L,
    children: (0, o.jsx)(c.Z, {
      page: T.ZY5.PREVIEW_CAMERA_MODAL,
      children: (0, o.jsxs)(a.Y0X, {
        className: O.modalRoot,
        size: a.CgR.DYNAMIC,
        "aria-labelledby": y,
        transitionState: t,
        children: [(0, o.jsxs)(a.hzk, {
          className: N ? O.contentWithVideoBackgrounds : O.content,
          scrollerRef: R,
          children: [(0, o.jsx)(a.X6q, {
            id: y,
            className: O.header,
            variant: "heading-xl/semibold",
            children: n ? S.NW.string(S.t.LAwwbW) : S.NW.string(S.t["/HITVF"])
          }), (0, o.jsx)(I.Z, {
            hidePreviewToggle: !0,
            showSmallBackgroundOptions: !0,
            hideDeviceHeader: !0,
            hideCameraSettingsLink: !0,
            selectedBackgroundOption: B,
            onSelectBackgroundOption: A,
            hideDeviceSelector: n,
            renderCamera: e => (0, o.jsxs)("div", {
              className: O.cameraPreview,
              children: [(0, o.jsx)("div", {
                className: O.camera,
                children: (0, o.jsx)(w, {
                  disabled: !1,
                  deviceId: e,
                  width: 368,
                  height: 207
                })
              }), (0, o.jsx)(I.S, {})]
            }),
            onLearnMore: k
          })]
        }), (0, o.jsxs)(a.mzw, {
          justify: _.Z.Justify.BETWEEN,
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
            value: P,
            onChange: () => {
              b.qF.updateSetting(!P), C.default.track(T.rMx.UPDATE_USER_SETTINGS_LOCAL, {
                always_preview_video: !P
              })
            },
            children: (0, o.jsx)(a.Text, {
              variant: "text-sm/normal",
              children: S.NW.string(S.t["3Ppr1t"])
            })
          })]
        }), (0, o.jsx)(a.olH, {
          onClick: k,
          className: O.modalClose
        })]
      })
    })
  })
}