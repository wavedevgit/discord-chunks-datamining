/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => m
}), n(47120), n(266796), n(653041);
var r = n(200651),
  i = n(192379),
  s = n(481060);
n(674180);
var a = n(723047),
  l = n(727843),
  o = n(290348),
  c = n(764163),
  A = n(861345),
  d = n(293810),
  u = n(388032);

function g(e) {
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

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m() {
  let {
    editStateId: e,
    guildId: t
  } = (0, l.N)(), [n, m] = o.UE(e), p = i.useMemo(() => new Set(n.map(e => e.ref_id)), [n]);

  function h(e, t) {
    let {
      channelId: r,
      description: i,
      emojiId: s,
      emojiName: a
    } = e, l = [...n], o = {
      name: "",
      description: i,
      emoji_id: s,
      emoji_name: a,
      ref_type: d.Qs.CHANNEL,
      ref_id: r
    };
    null != t ? l[t] = o : l.push(o), m(l)
  }
  let C = (0, a.mY)();
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(A.p, {
      benefits: n,
      onEdit: function(e) {
        (0, s.h7j)(i => (0, r.jsx)(c.x3, f(g({}, i), {
          guildId: t,
          omitChannelIds: p,
          initialData: n[e],
          onSave: t => h(t, e),
          onDelete: () => (function(e) {
            let t = [...n];
            t.splice(e, 1), m(t)
          })(e)
        })))
      },
      onMove: function(e, t) {
        let r = [...n],
          [i] = r.splice(e, 1);
        r.splice(t, 0, i), m(r)
      },
      guildId: t
    }), n.length > 0 && (0, r.jsx)(s.LZC, {
      size: 8
    }), (0, r.jsx)(A.s, {
      onClick: function() {
        (0, s.h7j)(e => (0, r.jsx)(c.x3, f(g({}, e), {
          guildId: t,
          omitChannelIds: p,
          onSave: e => h(e)
        })))
      },
      disabled: C,
      children: u.NW.string(u.t.PLSCUl)
    })]
  })
}