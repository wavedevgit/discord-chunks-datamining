/** Chunk was on 70675 **/
n.d(t, {
  Z: () => N
});
var l = n(200651),
  r = n(192379),
  i = n(442837),
  a = n(481060),
  o = n(616780),
  u = n(438536),
  s = n(946273),
  c = n(346479),
  d = n(665906),
  g = n(592125),
  f = n(430824),
  Z = n(496675),
  b = n(594174),
  p = n(981631),
  O = n(388032);

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = l
    })
  }
  return e
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e, t, N) {
  let j = r.useMemo(() => ({
    [t]: [e.id]
  }), [t, e.id]);
  (0, o.$)(j), (0, i.e7)([Z.Z], () => Z.Z.getGuildVersion(t), [t]);
  let P = (0, i.e7)([g.Z], () => g.Z.getChannel(N)),
    v = (0, i.e7)([f.Z], () => f.Z.getGuild(t), [t]),
    x = (0, i.e7)([b.default], () => b.default.getCurrentUser()),
    y = (0, u.Z)(P, "Context Menu"),
    E = (0, d.Xb)(P);
  if ((null == x ? void 0 : x.id) === e.id) return [y];
  if (null == v || null == P || null == x) return [];
  let C = E || P.ownerId === x.id && P.type === p.d4z.PRIVATE_THREAD;
  return [C ? (0, l.jsx)(a.sNh, {
    id: "remove",
    label: P.isForumPost() ? O.NW.formatToPlainString(O.t.v2KNNz, {
      user: e.username
    }) : O.NW.formatToPlainString(O.t["27xWaW"], {
      user: e.username
    }),
    color: "danger",
    action: () => c.Z.removeMember(P, e.id, "Context Menu")
  }) : null, (0, s.BK)(e, v) ? (0, l.jsx)(a.sNh, {
    id: "kick",
    label: C ? O.NW.formatToPlainString(O.t["1Ie87u"], {
      user: e.username
    }) : O.NW.formatToPlainString(O.t["9l/iTU"], {
      user: e.username
    }),
    color: "danger",
    action: () => (0, a.ZDy)(async () => {
      let {
        default: t
      } = await n.e("5454").then(n.bind(n, 854360));
      return n => (0, l.jsx)(t, h(m({}, n), {
        guildId: v.id,
        user: e
      }))
    })
  }) : null, (0, s.mm)(e, v) ? (0, l.jsx)(a.sNh, {
    id: "ban",
    label: C ? O.NW.formatToPlainString(O.t.i62APT, {
      user: e.username
    }) : O.NW.formatToPlainString(O.t.WnpUBg, {
      user: e.username
    }),
    color: "danger",
    action: () => (0, a.ZDy)(async () => {
      let {
        default: t
      } = await n.e("43350").then(n.bind(n, 98746));
      return n => (0, l.jsx)(t, h(m({}, n), {
        guildId: v.id,
        user: e
      }))
    })
  }) : null]
}