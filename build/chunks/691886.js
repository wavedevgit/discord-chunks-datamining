/** Chunk was on 71567 (60ad2434a2d9f37a.js) **/
"use strict";
n.d(t, {
  Z: () => y
}), n(653041), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(481060),
  c = n(933557),
  d = n(471445),
  u = n(131704),
  m = n(324067),
  p = n(699516),
  g = n(594174),
  h = n(303737),
  f = n(981631),
  b = n(388032),
  x = n(87550);

function j(e) {
  return String(e)
}

function N(e) {
  let {
    icon: t,
    title: n,
    subtitle: i,
    className: s
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(x.label, s),
    children: [t, (0, r.jsxs)("div", {
      className: x.labelText,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "none",
        className: x.labelTitle,
        children: n
      }), null != i && "" !== i ? (0, r.jsx)(o.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        className: x.labelSubtitle,
        children: i
      }) : null]
    })]
  })
}

function v() {
  return (0, r.jsx)(N, {
    icon: (0, r.jsx)(o.qJs, {
      size: "md",
      color: "currentColor",
      className: x.labelIcon
    }),
    title: b.NW.string(b.t.d7YJMD),
    className: x.createLabel
  })
}

function _(e) {
  var t;
  let {
    channelId: n
  } = e, i = (0, h.m7)(n), s = (0, h.m7)(null !== (t = null == i ? void 0 : i.parent_id) && void 0 !== t ? t : f.lds);
  if (null == i) return null;
  let a = (0, d.KS)(i),
    l = (0, c.F6)(i, g.default, p.Z),
    o = null != s ? (0, c.F6)(s, g.default, p.Z) : void 0;
  return (0, r.jsx)(N, {
    icon: null != a && (0, r.jsx)(a, {
      className: x.labelIcon
    }),
    title: l,
    subtitle: o
  })
}

function O(e) {
  let {
    value: t
  } = e;
  return null != t ? (0, r.jsx)(_, {
    channelId: t
  }) : (0, r.jsx)(v, {})
}

function y(e) {
  let {
    guildId: t,
    value: s,
    initialChannelId: a,
    omitChannelIds: d,
    "aria-labelledby": x,
    onChange: N
  } = e, v = b.NW.string(b.t.d7YJMD), _ = (0, l.e7)([m.Z], () => m.Z.getCategories(t), [t]), y = (0, h.m7)(null != s ? s : f.lds), C = i.useMemo(() => {
    let e = [{
        value: null,
        label: v
      }],
      t = !1;
    for (let n of _._categories)
      for (let {
          channel: r
        }
        of _[n.channel.id])((0, u.r8)(r.type) || (0, u.bw)(r.type)) && (r.id !== s && (null == d ? void 0 : d.has(r.id)) && (r.id !== a || s === a) || (s === r.id && (t = !0), e.push({
        value: r.id,
        label: (0, c.F6)(r, g.default, p.Z)
      })));
    return null == s || t || null == y || e.push({
      value: s,
      label: y.name
    }), e
  }, [v, s, y, _, d, a]);
  return (0, r.jsx)(o.PhF, {
    placeholder: b.NW.string(b.t.r2pts7),
    options: C,
    select: function(e) {
      null == e ? (0, o.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("7590"), n.e("45094"), n.e("43086")]).then(n.bind(n, 797671));
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
            onSubmit: N
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
      }) : N(e)
    },
    isSelected: e => null != s && j(e) === j(s),
    serialize: j,
    renderOptionLabel: O,
    renderOptionValue: e => {
      let [t] = e;
      return O(t)
    },
    "aria-labelledby": x
  })
}