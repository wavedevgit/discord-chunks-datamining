/** Chunk was on 29679 **/
/** chunk id: 691886, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
    className: s()(b.label, l),
    children: [t, (0, r.jsxs)("div", {
      className: b.labelText,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "none",
        className: b.labelTitle,
        children: n
      }), null != i && "" !== i ? (0, r.jsx)(o.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        className: b.labelSubtitle,
        children: i
      }) : null]
    })]
  })
}

function v() {
  return (0, Chunk951288.jsx)(_, {
    icon: (0, Chunk951288.jsx)(Chunk481060.qJs, {
      size: "md",
      color: "currentColor",
      className: Chunk506970.labelIcon
    }),
    title: Chunk388032.intl.string(Chunk388032.t.d7YJMD),
    className: Chunk506970.createLabel
  })
}

function C(e) {
  var t;
  let {
    channelId: n
  } = e, i = (0, f.m7)(n), l = (0, f.m7)(null != (t = null == i ? true : i.parent_id) ? t : h.lds);
  if (null == i) return null;
  let s = (0, d.KS)(i),
    a = (0, c.F6)(i, p.default, g.Z),
    o = null != l ? (0, c.F6)(l, p.default, g.Z) : true;
  return (0, r.jsx)(_, {
    icon: null != s && (0, r.jsx)(s, {
      className: b.labelIcon
    }),
    title: a,
    subtitle: o
  })
}

function O(e) {
  let {
    value: t
  } = e;
  return null != t ? (0, r.jsx)(C, {
    channelId: t
  }) : (0, r.jsx)(v, {})
}

function y(e) {
  let {
    guildId: t,
    value: l,
    initialChannelId: s,
    omitChannelIds: d,
    "aria-labelledby": b,
    onChange: _
  } = e, v = x.intl.string(x.t.d7YJMD), C = (0, a.e7)([m.Z], () => m.Z.getCategories(t), [t]), y = (0, f.m7)(null != l ? l : h.lds), N = i.useMemo(() => {
    let e = [{
        value: null,
        label: v
      }],
      t = false;
    for (let n of C._categories)
      for (let {
          channel: r
        }
        of C[n.channel.id])((0, u.r8)(r.type) || (0, u.bw)(r.type)) && (r.id !== l && (null == d ? true : d.has(r.id)) && (r.id !== s || l === s) || (l === r.id && (t = true), e.push({
        value: r.id,
        label: (0, c.F6)(r, p.default, g.Z)
      })));
    return null == l || t || null == y || e.push({
      value: l,
      label: y.name
    }), e
  }, [v, l, y, C, d, s]);
  return (0, r.jsx)(o.PhF, {
    placeholder: x.intl.string(x.t.r2pts7),
    options: N,
    select: function(e) {
      null == e ? (0, o.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("33285"), n.e("45094"), n.e("2112")]).then(n.bind(n, 797671));
        return n => {
          var i, l;
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
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({}, n), l = l = {
            guildId: t,
            onSubmit: _
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
          }), i))
        }
      }) : _(e)
    },
    isSelected: e => null != l && j(e) === j(l),
    serialize: j,
    renderOptionLabel: O,
    renderOptionValue: e => {
      let [t] = e;
      return O(t)
    },
    "aria-labelledby": b
  })
}