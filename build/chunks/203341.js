/** Chunk was on 71611 (f97ce343811d4d7d.js) **/
n.d(t, {
  S: () => O,
  Z: () => N
}), n(47120), n(653041);
var r = n(200651),
  i = n(192379),
  l = n(442837),
  o = n(704215),
  a = n(481060),
  s = n(358221),
  c = n(243778),
  u = n(390322),
  d = n(871499),
  p = n(819640),
  h = n(797258),
  f = n(446226),
  m = n(937393),
  g = n(43982),
  b = n(721351),
  _ = n(420529),
  C = n(927923),
  v = n(981631),
  y = n(921944),
  x = n(388032);

function j(e) {
  let {
    onClose: t,
    channel: n
  } = e, i = (0, _.Z)(n);
  return (0, r.jsx)(a.v2r, {
    onClose: t,
    onSelect: () => null,
    navId: "transfer-menu",
    "aria-label": x.NW.string(x.t.jqqLb2),
    children: i
  })
}

function O() {
  let e = (0, f.Z)(),
    t = (0, m.Z)();
  return null != e || t.length > 0
}

function N(e) {
  var {
    channel: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["channel"]);
  let _ = (0, f.Z)(),
    O = (0, l.e7)([h.Z], () => {
      var e, t;
      return null === (e = h.Z.getSessionById(null !== (t = null == _ ? void 0 : _.sessionId) && void 0 !== t ? t : "")) || void 0 === e ? void 0 : e.clientInfo.os
    }),
    N = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
    [E, P] = (0, l.Wu)([s.Z], () => [s.Z.getMode(t.id), s.Z.getLayout(t.id)]),
    I = (0, a.s9z)(a.JQI),
    S = (0, m.Z)().filter(e => e.twoWayLink),
    [Z, T] = i.useState(!1),
    A = v.WtW.VOICE !== E && [v.AEg.NO_CHAT, v.AEg.FULL_SCREEN].includes(P) ? "top" : "bottom",
    w = [];
  return S.length > 0 && w.push(o.z.DONUT_DESKTOP_NUX), (0, r.jsx)(c.ZP, {
    contentTypes: w,
    children: e => {
      let {
        visibleContent: i,
        markAsDismissed: l
      } = e, s = i === o.z.DONUT_DESKTOP_NUX;
      return (0, r.jsx)(a.yRy, {
        position: A,
        spacing: s ? 16 : void 0,
        positionKey: "".concat(E, ":").concat(P),
        onRequestClose: () => T(!1),
        shouldShow: (s || Z) && !N && !I,
        renderPopout: e => {
          let {
            closePopout: n
          } = e;
          return (0, r.jsx)(u.Z, {
            children: s ? (0, r.jsx)(g.Z, {
              popoutPosition: A,
              onDismiss: () => l(y.L.UNKNOWN),
              onAccept: () => {
                l(y.L.UNKNOWN), T(!0)
              },
              gameConsoleAccounts: S
            }) : (0, r.jsx)(j, {
              onClose: () => {
                n()
              },
              channel: t
            })
          })
        },
        children: e => {
          var t, i;
          return (0, r.jsx)(d.Z, (t = function(e) {
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
          }({}, e, n), i = i = {
            onClick: () => T(!0),
            label: null != O ? O === C.YE.XBOX ? x.NW.string(x.t.T0uYKy) : x.NW.string(x.t.FWAzS0) : x.NW.string(x.t["mbi/fH"]),
            iconComponent: (0, b.Z)(O)
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
      })
    }
  })
}