/** Chunk was on 51724 **/
n.d(t, {
  Z: () => b
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(570140),
  o = n(2052),
  c = n(932724),
  d = n(716161),
  u = n(672339),
  m = n(747545),
  p = n(131951),
  g = n(594174),
  h = n(981631),
  f = n(388032),
  x = n(885377);

function b(e) {
  let {
    previewEnabled: t,
    onEnablePreview: n,
    onCancelPreview: b
  } = e, N = p.Z.getCameraComponent(), [_, E] = i.useState((0, c.P)(g.default.getCurrentUser())), C = i.useRef(!1), j = i.useRef(_), O = (0, o.O)(), v = (0, s.e7)([p.Z], () => p.Z.isVideoAvailable());
  return i.useEffect(() => () => {
    C.current && l.Z.wait(() => (0, d.Up)(j.current))
  }, []), (0, r.jsx)(m.Z, {
    selectedBackgroundOption: _,
    onSelectBackgroundOption: e => {
      C.current = !0, j.current = e, E(e), (0, u.wG)(e, {
        location: O.location
      }).catch(h.dG4)
    },
    onCancelPreview: b,
    renderCamera: e => t ? (0, r.jsx)("div", {
      className: x.cameraWrapper,
      children: (0, r.jsxs)("div", {
        className: x.camera,
        children: [(0, r.jsx)(N, {
          deviceId: e,
          width: 387,
          height: 218,
          disabled: !t
        }), (0, r.jsx)(m.S, {})]
      })
    }) : (0, r.jsxs)("div", {
      className: x.cameraWrapper,
      children: [(0, r.jsx)("div", {
        className: x.previewImage
      }), (0, r.jsx)(a.ua7, {
        text: v ? null : f.NW.string(f.t["8jSzSU"]),
        children: e => {
          var t, i;
          return (0, r.jsx)(a.zxk, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : e[t] = r
              })
            }
            return e
          }({}, e), i = i = {
            onClick: n,
            disabled: !v,
            children: f.NW.string(f.t.JIf4v7)
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
          }), t))
        }
      })]
    })
  })
}