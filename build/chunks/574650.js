/** Chunk was on 51424 **/
n.d(t, {
  Z: () => b
}), n(653041), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
  l = n.n(i),
  o = n(512969),
  a = n(442837),
  s = n(481060),
  c = n(430824),
  u = n(914010),
  d = n(693546),
  _ = n(305325),
  E = n(246364),
  p = n(983736),
  m = n(937111),
  f = n(981631),
  h = n(176505),
  g = n(388032),
  O = n(276332),
  N = n(361275);

function I(e) {
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
}
let b = () => {
  var e, t;
  let i = (0, a.e7)([u.Z], () => u.Z.getGuildId(), []),
    b = (0, a.e7)([c.Z], () => c.Z.getGuild(i), [i]),
    T = (0, a.e7)([m.Z], () => null != i ? m.Z.getRequest(i) : null, [i]),
    C = (0, o.TH)(),
    S = (null === (e = (0, o.LX)(C.pathname, f.Z5c.CHANNEL(null == b ? void 0 : b.id, h.oC.GUILD_ONBOARDING))) || void 0 === e ? void 0 : e.isExact) === !0;
  if (null == b || !(0, p.Dc)(b) || S) return null;
  let y = null !== (t = null == T ? void 0 : T.applicationStatus) && void 0 !== t ? t : E.wB.STARTED,
    P = null,
    R = null,
    A = null,
    v = [O.notice, N.notice];
  switch (y) {
    case E.wB.SUBMITTED:
      P = g.NW.string(g.t["5iLvS0"]), R = g.NW.string(g.t.mqtdmZ), A = () => {
        (0, s.h7j)(e => {
          var t, n;
          return (0, r.jsx)(s.ConfirmModal, (t = I({
            header: g.NW.string(g.t.aIz1oa),
            confirmText: g.NW.string(g.t["cY+Ooa"]),
            cancelText: g.NW.string(g.t["ETE/oK"]),
            onConfirm: () => d.Z.removeGuildJoinRequest(b.id),
            confirmButtonColor: s.zxk.Colors.BRAND
          }, e), n = n = {
            children: (0, r.jsx)(s.Text, {
              variant: "text-md/normal",
              children: g.NW.string(g.t["13tjTU"])
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        })
      };
      break;
    case E.wB.REJECTED:
      P = g.NW.string(g.t.lk30cX), R = g.NW.string(g.t["8RrsHh"]), A = () => {
        (0, s.ZDy)(async () => {
          let {
            default: e
          } = await n.e("3378").then(n.bind(n, 76075));
          return t => (0, r.jsx)(e, I({
            guildId: b.id
          }, t))
        })
      }, v.push(O.error);
      break;
    default:
      P = g.NW.string(g.t.G5YKXF), R = g.NW.string(g.t["r8/DT0"]), A = () => {
        (0, _.hk)(b.id)
      }
  }
  return (0, r.jsxs)("div", {
    className: l()(...v),
    children: [(0, r.jsx)(s.Text, {
      className: O.header,
      variant: "text-sm/normal",
      children: P
    }), (0, r.jsx)(s.zxk, {
      className: O.button,
      look: s.zxk.Looks.OUTLINED,
      color: s.zxk.Colors.WHITE,
      size: s.zxk.Sizes.NONE,
      onClick: A,
      children: R
    })]
  })
}