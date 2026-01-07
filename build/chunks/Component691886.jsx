/** Chunk was on 9536 **/
/** chunk id: 691886, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
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
  Chunk817667 = require("./817667.js");

function v(e) {
  return String(e)
}

function O(e) {
  let {
    icon: t,
    title: n,
    subtitle: i,
    className: l
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(j.label, l),
    children: [t, (0, r.jsxs)("div", {
      className: j.labelText,
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "none",
        className: j.labelTitle,
        children: n
      }), null != i && "" !== i ? (0, r.jsx)(c.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        className: j.labelSubtitle,
        children: i
      }) : null]
    })]
  })
}

function C() {
  return (0, r.jsx)(O, {
    icon: (0, r.jsx)(c.qJs, {
      size: "md",
      color: "currentColor",
      className: j.labelIcon
    }),
    title: x.intl.string(x.t.d7YJMK),
    className: j.createLabel
  })
}

function y(e) {
  var t;
  let {
    channelId: n
  } = e, i = (0, p.m7)(n), l = (0, p.m7)(null != (t = null == i ? true : i.parent_id) ? t : h.lds);
  if (null == i) return null;
  let a = (0, u.KS)(i),
    s = (0, d.F6)(i, b.default, m.Z),
    o = null != l ? (0, d.F6)(l, b.default, m.Z) : true;
  return (0, r.jsx)(O, {
    icon: null != a && (0, r.jsx)(a, {
      className: j.labelIcon
    }),
    title: s,
    subtitle: o
  })
}

function N(e) {
  let {
    value: t
  } = e;
  return null != t ? (0, r.jsx)(y, {
    channelId: t
  }) : (0, r.jsx)(C, {})
}

function E(e) {
  let {
    label: t,
    guildId: l,
    value: a,
    initialChannelId: u,
    omitChannelIds: j,
    "aria-labelledby": O,
    onChange: C
  } = e, y = x.intl.string(x.t.d7YJMK), E = (0, s.e7)([f.Z], () => f.Z.getCategories(l), [l]), I = (0, p.m7)(null != a ? a : h.lds), S = i.useMemo(() => {
    let e = [{
        value: null,
        label: y
      }],
      t = false;
    for (let n of E._categories)
      for (let {
          channel: r
        }
        of E[n.channel.id])((0, g.r8)(r.type) || (0, g.bw)(r.type)) && (r.id !== a && (null == j ? true : j.has(r.id)) && (r.id !== u || a === u) || (a === r.id && (t = true), e.push({
        value: r.id,
        label: (0, d.F6)(r, b.default, m.Z)
      })));
    return null == a || t || null == I || e.push({
      value: a,
      label: I.name
    }), e
  }, [y, a, I, E, j, u]);
  return (0, r.jsx)(o.B6, {
    label: t,
    placeholder: x.intl.string(x.t.r2ptsz),
    options: S,
    select: function(e) {
      null == e ? (0, c.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("33285"), n.e("29497"), n.e("81690")]).then(n.bind(n, 797671));
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
            onSubmit: C
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
      }) : C(e)
    },
    isSelected: e => null != a && v(e) === v(a),
    serialize: v,
    renderOptionLabel: N,
    renderOptionValue: e => {
      let [t] = e;
      return N(t)
    },
    "aria-labelledby": O
  })
}