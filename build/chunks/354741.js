/** Chunk was on 60864 **/
n.r(t), n.d(t, {
  default: () => C
}), n(388685);
var r = n(255367);
n(73800);
var l = n(481060),
  o = n(493683),
  i = n(239091),
  a = n(883385),
  c = n(108843),
  s = n(947440),
  u = n(100527),
  d = n(906732),
  b = n(658138),
  f = n(299206),
  O = n(895563),
  p = n(212205),
  _ = n(62420),
  y = n(641360),
  j = n(769409),
  h = n(140106),
  g = n(122074),
  P = n(314897),
  E = n(626135),
  N = n(858687),
  v = n(461535),
  x = n(776568),
  T = n(981631),
  m = n(388032);

function M(e) {
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
let C = (0, c.Z)((0, a.Z)(function(e) {
  let {
    channel: t,
    selected: a,
    onSelect: c
  } = e, C = t.isOwner(P.default.getId()), Z = (0, v.Z)(t), D = (0, x.ZP)(t), w = (0, g.Uf)(T.aIL, t.id, "top"), U = (0, N.Z)(t, a), S = (0, f.Z)({
    id: t.id,
    label: m.intl.string(m.t.gFHI3t)
  }), k = (0, s.Z)(t), I = (0, O.l)(t), R = (0, O.P)(t), G = (0, p.Z)(t), X = (0, _.Z)(t), Q = (0, b.D)(t), {
    analyticsLocations: F
  } = (0, d.ZP)(u.Z.GROUP_DM_CONTEXT_MENU), A = (0, y.p1)(u.Z.GROUP_DM_CONTEXT_MENU, t.id), B = (0, y.I3)(u.Z.GROUP_DM_CONTEXT_MENU, t.id);
  return null == t || t.isManaged() ? null : (0, r.jsxs)(l.v2r, {
    navId: "gdm-context",
    "aria-label": m.intl.string(m.t.Xm41aW),
    onClose: i.Zy,
    onSelect: c,
    children: [(0, r.jsx)(l.kSQ, {
      children: Z
    }), (0, r.jsxs)(l.kSQ, {
      children: [I, G, X]
    }), (0, r.jsxs)(l.kSQ, {
      children: [C ? (0, r.jsx)(l.sNh, {
        id: "instant-invites",
        label: m.intl.string(m.t.ngRFjY),
        action: () => (0, l.ZDy)(async () => {
          let {
            default: e
          } = await n.e("97573").then(n.bind(n, 892382));
          return n => (0, r.jsx)(e, M({
            channelId: t.id
          }, n))
        })
      }) : null, A && (B ? (0, r.jsx)(l.sNh, {
        id: "change-icon",
        label: m.intl.string(m.t["6yrpFR"]),
        action: () => (0, h.P5)(t.id, u.Z.GROUP_DM_CONTEXT_MENU)
      }) : (0, r.jsx)(l.II_, {
        id: "change-icon",
        showDefaultFocus: !0,
        control: (e, n) => {
          var i, a;
          return (0, r.jsx)(l.TEe, (i = M({
            onChange: n => {
              var r;
              let {
                imageUri: l
              } = n;
              o.Z.setIcon(t.id, l), null == (r = e.onClose) || r.call(e)
            },
            multiple: !1,
            "aria-label": m.intl.string(m.t["6yrpFR"])
          }, e), a = a = {
            onInteraction: () => {
              var n;
              null == (n = e.onInteraction) || n.call(e), E.default.track(T.rMx.GDM_EDIT_INTERACTED, {
                action: "open",
                channel_id: t.id,
                channel_type: T.d4z.GROUP_DM,
                location: u.Z.GROUP_DM_CONTEXT_MENU,
                location_stack: [...F, u.Z.GROUP_DM_CONTEXT_MENU_CHANGE_ICON]
              })
            },
            ref: n
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(a)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
          }), i))
        },
        label: m.intl.string(m.t["6yrpFR"])
      })), A && null != t.icon ? (0, r.jsx)(l.sNh, {
        id: "remove-icon",
        label: m.intl.string(m.t["uY+Nk5"]),
        action: () => {
          E.default.track(T.rMx.GDM_EDIT_INTERACTED, {
            action: "open",
            channel_id: t.id,
            channel_type: T.d4z.GROUP_DM,
            location: u.Z.GROUP_DM_CONTEXT_MENU,
            location_stack: [...F, u.Z.GROUP_DM_CONTEXT_MENU_REMOVE_ICON]
          }), o.Z.setIcon(t.id, null)
        }
      }) : null, B && (0, r.jsx)(l.sNh, {
        id: "edit-gdm",
        label: m.intl.string(m.t["5Q9+/P"]),
        action: () => (0, j.B)(t.id, u.Z.GROUP_DM_CONTEXT_MENU)
      }), Q]
    }), (0, r.jsx)(l.kSQ, {
      children: k
    }), (0, r.jsxs)(l.kSQ, {
      children: [D, w]
    }), (0, r.jsx)(l.kSQ, {
      children: U
    }), (0, r.jsx)(l.kSQ, {
      children: R
    }), (0, r.jsx)(l.kSQ, {
      children: S
    })]
  })
}, {
  object: T.qAy.CONTEXT_MENU
}), [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_MENU])