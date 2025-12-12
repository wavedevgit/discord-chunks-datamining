/** Chunk was on 384 **/
/** chunk id: 691886, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk858783 = require("./858783.js");

function _(e) {
  return String(e)
}

function v(e) {
  let {
    icon: t,
    title: n,
    subtitle: i,
    className: l
  } = e;
  return (0, r.jsxs)("div", {
    className: s()(j.label, l),
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

function O() {
  return (0, Chunk54381.jsx)(v, {
    icon: (0, Chunk54381.jsx)(Chunk481060.qJs, {
      size: "md",
      color: "currentColor",
      className: Chunk858783.labelIcon
    }),
    title: Chunk388032.intl.string(Chunk388032.t.d7YJMK),
    className: Chunk858783.createLabel
  })
}

function C(e) {
  var t;
  let {
    channelId: n
  } = e, i = (0, h.m7)(n), l = (0, h.m7)(null != (t = null == i ? true : i.parent_id) ? t : x.lds);
  if (null == i) return null;
  let s = (0, d.KS)(i),
    a = (0, u.F6)(i, f.default, p.Z),
    o = null != l ? (0, u.F6)(l, f.default, p.Z) : true;
  return (0, r.jsx)(v, {
    icon: null != s && (0, r.jsx)(s, {
      className: j.labelIcon
    }),
    title: a,
    subtitle: o
  })
}

function y(e) {
  let {
    value: t
  } = e;
  return null != t ? (0, r.jsx)(C, {
    channelId: t
  }) : (0, r.jsx)(O, {})
}

function N(e) {
  let {
    label: t,
    guildId: l,
    value: s,
    initialChannelId: d,
    omitChannelIds: j,
    "aria-labelledby": v,
    onChange: O
  } = e, C = b.intl.string(b.t.d7YJMK), N = (0, a.e7)([m.Z], () => m.Z.getCategories(l), [l]), E = (0, h.m7)(null != s ? s : x.lds), I = i.useMemo(() => {
    let e = [{
        value: null,
        label: C
      }],
      t = false;
    for (let n of N._categories)
      for (let {
          channel: r
        }
        of N[n.channel.id])((0, g.r8)(r.type) || (0, g.bw)(r.type)) && (r.id !== s && (null == j ? true : j.has(r.id)) && (r.id !== d || s === d) || (s === r.id && (t = true), e.push({
        value: r.id,
        label: (0, u.F6)(r, f.default, p.Z)
      })));
    return null == s || t || null == E || e.push({
      value: s,
      label: E.name
    }), e
  }, [C, s, E, N, j, d]);
  return (0, r.jsx)(o.B6, {
    label: t,
    placeholder: b.intl.string(b.t.r2ptsz),
    options: I,
    select: function(e) {
      null == e ? (0, c.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("33285"), n.e("29497"), n.e("17474")]).then(n.bind(n, 797671));
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
            onSubmit: O
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
      }) : O(e)
    },
    isSelected: e => null != s && _(e) === _(s),
    serialize: _,
    renderOptionLabel: y,
    renderOptionValue: e => {
      let [t] = e;
      return y(t)
    },
    "aria-labelledby": v
  })
}