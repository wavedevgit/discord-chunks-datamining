/** Chunk was on 59645 **/
t.d(n, {
  default: () => N
});
var i = t(200651);
t(192379);
var o = t(481060),
  r = t(239091),
  a = t(883385),
  c = t(108843),
  l = t(947440),
  u = t(100527),
  d = t(299206),
  _ = t(916069),
  s = t(895563),
  p = t(212205),
  b = t(478035),
  f = t(62420),
  m = t(423589),
  h = t(398048),
  x = t(109764),
  g = t(3689),
  y = t(323597),
  C = t(852245),
  O = t(367722),
  v = t(461535),
  P = t(776568),
  S = t(218035),
  Z = t(775666),
  I = t(593589),
  j = t(442754),
  k = t(981631),
  w = t(388032);

function E(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      i = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), i.forEach(function(n) {
      var i;
      i = t[n], n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[n] = i
    })
  }
  return e
}

function T(e) {
  let {
    channel: n,
    onSelect: t
  } = e, a = (0, v.Z)(n), c = (0, x.Z)(n), u = (0, s.l)(n), _ = (0, s.P)(n), h = (0, p.Z)(n), g = (0, b.Z)(n), y = (0, f.Z)(n), O = (0, P.ZP)(n), I = (0, S.Z)(n), j = (0, C.Z)(n), k = (0, d.Z)({
    id: n.id,
    label: w.NW.string(w.t.gFHI3t)
  }), E = (0, l.Z)(n), T = (0, Z.ZP)(n), L = (0, m.Mn)("ChannelContextFavoritesMenu");
  return (0, i.jsxs)(o.v2r, {
    navId: "channel-context",
    onClose: r.Zy,
    "aria-label": w.NW.string(w.t.Xm41aW),
    onSelect: t,
    children: [(0, i.jsx)(o.kSQ, {
      children: a
    }), (0, i.jsxs)(o.kSQ, {
      children: [g, y, h, u]
    }), (0, i.jsxs)(o.kSQ, {
      children: [O, L ? T : I]
    }), (0, i.jsx)(o.kSQ, {
      children: j
    }), (0, i.jsx)(o.kSQ, {
      children: E
    }), (0, i.jsx)(o.kSQ, {
      children: _
    }), (0, i.jsx)(o.kSQ, {
      children: c
    }), (0, i.jsx)(o.kSQ, {
      children: k
    })]
  })
}

function L(e) {
  let {
    channel: n,
    guild: t,
    onSelect: a
  } = e, c = (0, v.Z)(n), u = (0, x.Z)(n), _ = (0, s.l)(n), p = (0, s.P)(n), b = (0, j.Z)(n), f = (0, P.ZP)(n), k = (0, C.Z)(n), E = (0, O.Z)(n, t), T = (0, h.Z)(n, t), L = (0, g.Z)(n, t), N = (0, y.Z)(n), A = (0, d.Z)({
    id: n.id,
    label: w.NW.string(w.t.gFHI3t)
  }), B = (0, l.Z)(n), U = (0, I.Z)(n, "list_text_channel_context_menu"), M = (0, S.Z)(n), D = (0, Z.ZP)(n), G = (0, m.Mn)("ChannelContextMenuNormal");
  return (0, i.jsxs)(o.v2r, {
    navId: "channel-context",
    onClose: r.Zy,
    "aria-label": w.NW.string(w.t.Xm41aW),
    onSelect: a,
    children: [(0, i.jsxs)(o.kSQ, {
      children: [c, _]
    }, "mark-as-read-or-favorite"), (0, i.jsxs)(o.kSQ, {
      children: [E, b, u, U]
    }, "channel-actions"), (0, i.jsxs)(o.kSQ, {
      children: [f, G ? D : M]
    }, "notifications"), (0, i.jsxs)(o.kSQ, {
      children: [k, T, L, N]
    }, "admin-actions"), (0, i.jsx)(o.kSQ, {
      children: B
    }), (0, i.jsx)(o.kSQ, {
      children: p
    }), (0, i.jsx)(o.kSQ, {
      children: A
    }, "developer-actions")]
  })
}
let N = (0, c.Z)((0, a.Z)(function(e) {
  return (0, _.Z)() ? (0, i.jsx)(T, E({}, e)) : (0, i.jsx)(L, E({}, e))
}, {
  object: k.qAy.CONTEXT_MENU
}), [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU])