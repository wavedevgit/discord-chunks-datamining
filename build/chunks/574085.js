/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => f
}), n(47120), n(266796), n(653041);
var r = n(200651);
n(192379);
var i = n(481060),
  s = n(723047),
  a = n(727843),
  l = n(290348),
  o = n(764163),
  A = n(861345),
  c = n(293810),
  d = n(388032);

function u(e) {
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

function g(e, t) {
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

function f() {
  let {
    editStateId: e,
    guildId: t
  } = (0, a.N)(), [n, f] = l.R7(e);

  function m(e, t) {
    let {
      name: r,
      description: i,
      emojiId: s,
      emojiName: a
    } = e, l = [...n], o = {
      name: r,
      description: i,
      emoji_id: s,
      emoji_name: a,
      ref_type: c.Qs.INTANGIBLE,
      ref_id: void 0
    };
    null != t ? l[t] = o : l.push(o), f(l)
  }
  let p = (0, s.mY)();
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(A.p, {
      benefits: n,
      onEdit: function(e) {
        (0, i.h7j)(i => (0, r.jsx)(o.DI, g(u({}, i), {
          guildId: t,
          initialData: n[e],
          onSave: t => m(t, e),
          onDelete: () => (function(e) {
            let t = [...n];
            t.splice(e, 1), f(t)
          })(e)
        })))
      },
      onMove: function(e, t) {
        let r = [...n],
          [i] = r.splice(e, 1);
        r.splice(t, 0, i), f(r)
      },
      guildId: t
    }), n.length > 0 ? (0, r.jsx)(i.LZC, {
      size: 8
    }) : null, (0, r.jsx)(A.s, {
      onClick: function() {
        (0, i.h7j)(e => (0, r.jsx)(o.DI, g(u({}, e), {
          guildId: t,
          onSave: e => m(e)
        })))
      },
      disabled: p,
      children: d.NW.string(d.t["6dwqo6"])
    })]
  })
}