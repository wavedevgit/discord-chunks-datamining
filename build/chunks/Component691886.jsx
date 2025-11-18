/** Chunk was on 32923 **/
/** chunk id: 691886, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk131704 = require("./131704.js"),
  Chunk324067 = require("./324067.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk303737 = require("./303737.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk506970 = require("./506970.js");

function j(e) {
  return String(e)
}

function _(e) {
  let {
    icon: t,
    title: n,
    subtitle: i,
    className: l
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(x.label, l),
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
  return (0, Chunk54381.jsx)(_, {
    icon: (0, Chunk54381.jsx)(Chunk481060.qJs, {
      size: "md",
      color: "currentColor",
      className: Chunk506970.labelIcon
    }),
    title: Chunk388032.intl.string(Chunk388032.t.d7YJMK),
    className: Chunk506970.createLabel
  })
}

function O(e) {
  var t;
  let {
    channelId: n
  } = e, i = (0, f.m7)(n), l = (0, f.m7)(null != (t = null == i ? true : i.parent_id) ? t : h.lds);
  if (null == i) return null;
  let a = (0, d.KS)(i),
    s = (0, c.F6)(i, p.default, m.Z),
    o = null != l ? (0, c.F6)(l, p.default, m.Z) : true;
  return (0, r.jsx)(_, {
    icon: null != a && (0, r.jsx)(a, {
      className: x.labelIcon
    }),
    title: s,
    subtitle: o
  })
}

function C(e) {
  let {
    value: t
  } = e;
  return null != t ? (0, r.jsx)(O, {
    channelId: t
  }) : (0, r.jsx)(v, {})
}

function y(e) {
  let {
    label: t,
    guildId: l,
    value: a,
    initialChannelId: d,
    omitChannelIds: x,
    "aria-labelledby": _,
    onChange: v
  } = e, O = b.intl.string(b.t.d7YJMK), y = (0, s.e7)([g.Z], () => g.Z.getCategories(l), [l]), N = (0, f.m7)(null != a ? a : h.lds), E = i.useMemo(() => {
    let e = [{
        value: null,
        label: O
      }],
      t = false;
    for (let n of y._categories)
      for (let {
          channel: r
        }
        of y[n.channel.id])((0, u.r8)(r.type) || (0, u.bw)(r.type)) && (r.id !== a && (null == x ? true : x.has(r.id)) && (r.id !== d || a === d) || (a === r.id && (t = true), e.push({
        value: r.id,
        label: (0, c.F6)(r, p.default, m.Z)
      })));
    return null == a || t || null == N || e.push({
      value: a,
      label: N.name
    }), e
  }, [O, a, N, y, x, d]);
  return (0, r.jsx)(o.PhF, {
    label: t,
    placeholder: b.intl.string(b.t.r2ptsz),
    options: E,
    select: function(e) {
      null == e ? (0, o.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("33285"), n.e("29497"), n.e("99229")]).then(n.bind(n, 797671));
        return t => {
          var n, i;
          return (0, r.jsx)(e, (n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({}, t), i = i = {
            guildId: l,
            onSubmit: v
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
          }), n))
        }
      }) : v(e)
    },
    isSelected: e => null != a && j(e) === j(a),
    serialize: j,
    renderOptionLabel: C,
    renderOptionValue: e => {
      let [t] = e;
      return C(t)
    },
    "aria-labelledby": _
  })
}