/** Chunk was on 70675 **/
n.d(t, {
  Z: () => h
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
  Z = n(430824),
  b = n(496675),
  f = n(594174),
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

function N(e, t) {
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

function h(e, t, h) {
  let j = r.useMemo(() => ({
    [t]: [e.id]
  }), [t, e.id]);
  (0, o.$)(j), (0, i.e7)([b.Z], () => b.Z.getGuildVersion(t), [t]);
  let P = (0, i.e7)([g.Z], () => g.Z.getChannel(h)),
    x = (0, i.e7)([Z.Z], () => Z.Z.getGuild(t), [t]),
    v = (0, i.e7)([f.default], () => f.default.getCurrentUser()),
    y = (0, u.Z)(P, "Context Menu"),
    E = (0, d.Xb)(P);
  if ((null == v ? void 0 : v.id) === e.id) return [y];
  if (null == x || null == P || null == v) return [];
  let _ = E || P.ownerId === v.id && P.type === p.d4z.PRIVATE_THREAD;
  return [_ ? (0, l.jsx)(a.sNh, {
    id: "remove",
    label: P.isForumPost() ? O.NW.formatToPlainString(O.t.v2KNNz, {
      user: e.username
    }) : O.NW.formatToPlainString(O.t["27xWaW"], {
      user: e.username
    }),
    color: "danger",
    action: () => c.Z.removeMember(P, e.id, "Context Menu")
  }) : null, (0, s.BK)(e, x) ? (0, l.jsx)(a.sNh, {
    id: "kick",
    label: _ ? O.NW.formatToPlainString(O.t["1Ie87u"], {
      user: e.username
    }) : O.NW.formatToPlainString(O.t["9l/iTU"], {
      user: e.username
    }),
    color: "danger",
    action: () => (0, a.ZDy)(async () => {
      let {
        default: t
      } = await n.e("5454").then(n.bind(n, 854360));
      return n => (0, l.jsx)(t, N(m({}, n), {
        guildId: x.id,
        user: e
      }))
    })
  }) : null, (0, s.mm)(e, x) ? (0, l.jsx)(a.sNh, {
    id: "ban",
    label: _ ? O.NW.formatToPlainString(O.t.i62APT, {
      user: e.username
    }) : O.NW.formatToPlainString(O.t.WnpUBg, {
      user: e.username
    }),
    color: "danger",
    action: () => (0, a.ZDy)(async () => {
      let {
        default: t
      } = await n.e("43350").then(n.bind(n, 98746));
      return n => (0, l.jsx)(t, N(m({}, n), {
        guildId: x.id,
        user: e
      }))
    })
  }) : null]
}