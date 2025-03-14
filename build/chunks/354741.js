/** Chunk was on 92866 **/
n.d(t, {
  default: () => N
});
var r = n(200651);
n(192379);
var a = n(481060),
  i = n(493683),
  o = n(239091),
  l = n(883385),
  c = n(108843),
  d = n(947440),
  u = n(100527),
  f = n(658138),
  s = n(299206),
  p = n(895563),
  b = n(212205),
  v = n(62420),
  h = n(122074),
  y = n(314897),
  O = n(858687),
  j = n(461535),
  g = n(776568),
  C = n(981631),
  _ = n(388032);

function E(e) {
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
let N = (0, c.Z)((0, l.Z)(function(e) {
  let {
    channel: t,
    selected: l,
    onSelect: c
  } = e, u = t.isOwner(y.default.getId()), N = (0, j.Z)(t), m = (0, g.ZP)(t), I = (0, h.Uf)(C.aIL, t.id, "top"), Z = (0, O.Z)(t, l), A = (0, s.Z)({
    id: t.id,
    label: _.NW.string(_.t.gFHI3t)
  }), x = (0, d.Z)(t), P = (0, p.l)(t), S = (0, p.P)(t), T = (0, b.Z)(t), w = (0, v.Z)(t), R = (0, f.D)(t);
  return null == t || t.isManaged() ? null : (0, r.jsxs)(a.v2r, {
    navId: "gdm-context",
    "aria-label": _.NW.string(_.t.Xm41aW),
    onClose: o.Zy,
    onSelect: c,
    children: [(0, r.jsx)(a.kSQ, {
      children: N
    }), (0, r.jsxs)(a.kSQ, {
      children: [P, T, w]
    }), (0, r.jsxs)(a.kSQ, {
      children: [u ? (0, r.jsx)(a.sNh, {
        id: "instant-invites",
        label: _.NW.string(_.t.ngRFjY),
        action: () => (0, a.ZDy)(async () => {
          let {
            default: e
          } = await n.e("97573").then(n.bind(n, 892382));
          return n => (0, r.jsx)(e, E({
            channelId: t.id
          }, n))
        })
      }) : null, (0, r.jsx)(a.II_, {
        id: "change-icon",
        showDefaultFocus: !0,
        control: (e, n) => {
          var o, l;
          return (0, r.jsx)(a.TEe, (o = E({
            onChange: n => {
              var r;
              let {
                imageUri: a
              } = n;
              i.Z.setIcon(t.id, a), null === (r = e.onClose) || void 0 === r || r.call(e)
            },
            multiple: !1,
            "aria-label": _.NW.string(_.t["6yrpFR"])
          }, e), l = l = {
            ref: n
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(l, e))
          }), o))
        },
        label: _.NW.string(_.t["6yrpFR"])
      }), null != t.icon ? (0, r.jsx)(a.sNh, {
        id: "remove-icon",
        label: _.NW.string(_.t["uY+Nk5"]),
        action: () => i.Z.setIcon(t.id, null)
      }) : null, R]
    }), (0, r.jsx)(a.kSQ, {
      children: x
    }), (0, r.jsxs)(a.kSQ, {
      children: [m, I]
    }), (0, r.jsx)(a.kSQ, {
      children: Z
    }), (0, r.jsx)(a.kSQ, {
      children: S
    }), (0, r.jsx)(a.kSQ, {
      children: A
    })]
  })
}, {
  object: C.qAy.CONTEXT_MENU
}), [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_MENU])