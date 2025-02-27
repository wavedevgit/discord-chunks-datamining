/** Chunk was on 30243 **/
r.d(t, {
  Z: () => m
}), r(411104);
var n = r(200651),
  l = r(192379),
  i = r(442837),
  o = r(481060),
  a = r(239091),
  c = r(751688),
  s = r(184301),
  u = r(347475),
  d = r(210887),
  p = r(5192),
  b = r(232255);

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function y(e) {
  let {
    participants: t,
    channel: l
  } = e;
  return (0, n.jsx)(o.Ttm, {
    className: b.popout,
    children: t.map(e => (0, n.jsx)(c.Z, {
      user: e,
      guildId: null == l ? void 0 : l.guild_id,
      channelId: null == l ? void 0 : l.id,
      nick: p.ZP.getNickname(null == l ? void 0 : l.guild_id, null == l ? void 0 : l.id, e),
      onContextMenu: t => {
        (0, a.jW)(t, async () => {
          let {
            default: t
          } = await Promise.all([r.e("79695"), r.e("69220"), r.e("65593")]).then(r.bind(r, 881351));
          return r => (0, n.jsx)(t, O(f({}, r), {
            user: e
          }))
        })
      }
    }, e.id))
  })
}

function m(e) {
  let {
    children: t,
    participants: r,
    channel: a,
    onPopoutClosed: c
  } = e, p = (0, i.e7)([d.Z], () => d.Z.theme), b = 1 === r.length ? r[0] : null, m = (0, l.useCallback)(e => {
    if (null != b) return (0, n.jsx)(u.Z, O(f({}, e), {
      closePopout: () => {
        e.closePopout(), null == c || c()
      },
      userId: b.id,
      guildId: null == a ? void 0 : a.guild_id,
      channelId: null == a ? void 0 : a.id
    }));
    if (null != r) return (0, n.jsx)(y, {
      participants: r,
      channel: a
    });
    throw Error("One of participant or participants is required")
  }, [a, c, r, b]);
  return (0, n.jsx)(o.ze6, {
    theme: p,
    children: (0, n.jsx)(o.yRy, {
      renderPopout: m,
      preload: () => null != b ? (0, s.Z)(b, {
        guildId: null == a ? void 0 : a.guild_id,
        channelId: null == a ? void 0 : a.id
      }) : Promise.resolve(),
      children: t
    })
  })
}