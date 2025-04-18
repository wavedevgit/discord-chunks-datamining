/** Chunk was on 60864 **/
n.r(t), n.d(t, {
  default: () => S
});
var r = n(200651);
n(192379);
var o = n(481060),
  l = n(493683),
  a = n(239091),
  i = n(883385),
  c = n(108843),
  s = n(947440),
  u = n(100527),
  b = n(658138),
  d = n(299206),
  f = n(895563),
  p = n(212205),
  O = n(62420),
  y = n(641360),
  j = n(769409),
  g = n(140106),
  h = n(122074),
  N = n(314897),
  v = n(858687),
  P = n(461535),
  _ = n(776568),
  m = n(981631),
  x = n(388032);

function w(e) {
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
let S = (0, c.Z)((0, i.Z)(function(e) {
  let {
    channel: t,
    selected: i,
    onSelect: c
  } = e, S = t.isOwner(N.default.getId()), Z = (0, P.Z)(t), C = (0, _.ZP)(t), E = (0, h.Uf)(m.aIL, t.id, "top"), k = (0, v.Z)(t, i), W = (0, d.Z)({
    id: t.id,
    label: x.NW.string(x.t.gFHI3t)
  }), T = (0, s.Z)(t), D = (0, f.l)(t), M = (0, f.P)(t), I = (0, p.Z)(t), U = (0, O.Z)(t), Q = (0, b.D)(t), R = (0, y.p1)(u.Z.GROUP_DM_CONTEXT_MENU, t.id), F = (0, y.I3)(u.Z.GROUP_DM_CONTEXT_MENU, t.id);
  return null == t || t.isManaged() ? null : (0, r.jsxs)(o.v2r, {
    navId: "gdm-context",
    "aria-label": x.NW.string(x.t.Xm41aW),
    onClose: a.Zy,
    onSelect: c,
    children: [(0, r.jsx)(o.kSQ, {
      children: Z
    }), (0, r.jsxs)(o.kSQ, {
      children: [D, I, U]
    }), (0, r.jsxs)(o.kSQ, {
      children: [S ? (0, r.jsx)(o.sNh, {
        id: "instant-invites",
        label: x.NW.string(x.t.ngRFjY),
        action: () => (0, o.ZDy)(async () => {
          let {
            default: e
          } = await n.e("97573").then(n.bind(n, 892382));
          return n => (0, r.jsx)(e, w({
            channelId: t.id
          }, n))
        })
      }) : null, R && (F ? (0, r.jsx)(o.sNh, {
        id: "change-icon",
        label: x.NW.string(x.t["6yrpFR"]),
        action: () => (0, g.P5)(t.id, u.Z.GROUP_DM_CONTEXT_MENU)
      }) : (0, r.jsx)(o.II_, {
        id: "change-icon",
        showDefaultFocus: !0,
        control: (e, n) => {
          var a, i;
          return (0, r.jsx)(o.TEe, (a = w({
            onChange: n => {
              var r;
              let {
                imageUri: o
              } = n;
              l.Z.setIcon(t.id, o), null == (r = e.onClose) || r.call(e)
            },
            multiple: !1,
            "aria-label": x.NW.string(x.t["6yrpFR"])
          }, e), i = i = {
            ref: n
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e))
          }), a))
        },
        label: x.NW.string(x.t["6yrpFR"])
      })), R && null != t.icon ? (0, r.jsx)(o.sNh, {
        id: "remove-icon",
        label: x.NW.string(x.t["uY+Nk5"]),
        action: () => l.Z.setIcon(t.id, null)
      }) : null, F && (0, r.jsx)(o.sNh, {
        id: "edit-gdm",
        label: x.NW.string(x.t["5Q9+/P"]),
        action: () => (0, j.B)(t.id, u.Z.GROUP_DM_CONTEXT_MENU)
      }), Q]
    }), (0, r.jsx)(o.kSQ, {
      children: T
    }), (0, r.jsxs)(o.kSQ, {
      children: [C, E]
    }), (0, r.jsx)(o.kSQ, {
      children: k
    }), (0, r.jsx)(o.kSQ, {
      children: M
    }), (0, r.jsx)(o.kSQ, {
      children: W
    })]
  })
}, {
  object: m.qAy.CONTEXT_MENU
}), [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_MENU])