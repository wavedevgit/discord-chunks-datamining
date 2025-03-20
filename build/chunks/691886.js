/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => E
}), n(653041), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(481060),
  A = n(933557),
  c = n(471445),
  d = n(131704),
  u = n(324067),
  g = n(699516),
  f = n(594174),
  m = n(303737),
  p = n(981631),
  h = n(388032),
  C = n(258629);

function b(e) {
  return String(e)
}

function v(e) {
  let {
    icon: t,
    title: n,
    subtitle: i,
    className: s
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(C.label, s),
    children: [t, (0, r.jsxs)("div", {
      className: C.labelText,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "none",
        className: C.labelTitle,
        children: n
      }), null != i && "" !== i ? (0, r.jsx)(o.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        className: C.labelSubtitle,
        children: i
      }) : null]
    })]
  })
}

function x() {
  return (0, r.jsx)(v, {
    icon: (0, r.jsx)(o.qJs, {
      size: "md",
      color: "currentColor",
      className: C.labelIcon
    }),
    title: h.NW.string(h.t.d7YJMD),
    className: C.createLabel
  })
}

function N(e) {
  var t;
  let {
    channelId: n
  } = e, i = (0, m.m7)(n), s = (0, m.m7)(null !== (t = null == i ? void 0 : i.parent_id) && void 0 !== t ? t : p.lds);
  if (null == i) return null;
  let a = (0, c.KS)(i),
    l = (0, A.F6)(i, f.default, g.Z),
    o = null != s ? (0, A.F6)(s, f.default, g.Z) : void 0;
  return (0, r.jsx)(v, {
    icon: null != a && (0, r.jsx)(a, {
      className: C.labelIcon
    }),
    title: l,
    subtitle: o
  })
}

function j(e) {
  let {
    value: t
  } = e;
  return null != t ? (0, r.jsx)(N, {
    channelId: t
  }) : (0, r.jsx)(x, {})
}

function E(e) {
  let {
    guildId: t,
    value: s,
    initialChannelId: a,
    omitChannelIds: c,
    "aria-labelledby": C,
    onChange: v
  } = e, x = h.NW.string(h.t.d7YJMD), N = (0, l.e7)([u.Z], () => u.Z.getCategories(t), [t]), E = (0, m.m7)(null != s ? s : p.lds), I = i.useMemo(() => {
    let e = [{
        value: null,
        label: x
      }],
      t = !1;
    for (let n of N._categories)
      for (let {
          channel: r
        }
        of N[n.channel.id])((0, d.r8)(r.type) || (0, d.bw)(r.type)) && (r.id !== s && (null == c ? void 0 : c.has(r.id)) && (r.id !== a || s === a) || (s === r.id && (t = !0), e.push({
        value: r.id,
        label: (0, A.F6)(r, f.default, g.Z)
      })));
    return null == s || t || null == E || e.push({
      value: s,
      label: E.name
    }), e
  }, [x, s, E, N, c, a]);
  return (0, r.jsx)(o.PhF, {
    placeholder: h.NW.string(h.t.r2pts7),
    options: I,
    select: function(e) {
      null == e ? (0, o.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("7590"), n.e("45094"), n.e("80124")]).then(n.bind(n, 797671));
        return n => {
          var i, s;
          return (0, r.jsx)(e, (i = function(e) {
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
          }({}, n), s = s = {
            guildId: t,
            onSubmit: v
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(s)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
          }), i))
        }
      }) : v(e)
    },
    isSelected: e => null != s && b(e) === b(s),
    serialize: b,
    renderOptionLabel: j,
    renderOptionValue: e => {
      let [t] = e;
      return j(t)
    },
    "aria-labelledby": C
  })
}