/** Chunk was on 29679 **/
/** chunk id: 691886, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function v(e) {
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

function _() {
  return (0, Chunk951288.jsx)(v, {
    icon: (0, Chunk951288.jsx)(Chunk481060.qJs, {
      size: "md",
      color: "currentColor",
      className: Chunk506970.labelIcon
    }),
    title: Chunk388032.intl.string(Chunk388032.t.d7YJMK),
    className: Chunk506970.createLabel
  })
}

function C(e) {
  var t;
  let {
    channelId: n
  } = e, i = (0, f.m7)(n), l = (0, f.m7)(null != (t = null == i ? true : i.parent_id) ? t : h.lds);
  if (null == i) return null;
  let a = (0, d.KS)(i),
    s = (0, c.F6)(i, p.default, m.Z),
    o = null != l ? (0, c.F6)(l, p.default, m.Z) : true;
  return (0, r.jsx)(v, {
    icon: null != a && (0, r.jsx)(a, {
      className: x.labelIcon
    }),
    title: s,
    subtitle: o
  })
}

function O(e) {
  let {
    value: t
  } = e;
  return null != t ? (0, r.jsx)(C, {
    channelId: t
  }) : (0, r.jsx)(_, {})
}

function y(e) {
  let {
    label: t,
    guildId: l,
    value: a,
    initialChannelId: d,
    omitChannelIds: x,
    "aria-labelledby": v,
    onChange: _
  } = e, C = b.intl.string(b.t.d7YJMK), y = (0, s.e7)([g.Z], () => g.Z.getCategories(l), [l]), E = (0, f.m7)(null != a ? a : h.lds), N = i.useMemo(() => {
    let e = [{
        value: null,
        label: C
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
    return null == a || t || null == E || e.push({
      value: a,
      label: E.name
    }), e
  }, [C, a, E, y, x, d]);
  return (0, r.jsx)(o.PhF, {
    label: t,
    placeholder: b.intl.string(b.t.r2ptsz),
    options: N,
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
            onSubmit: _
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
      }) : _(e)
    },
    isSelected: e => null != a && j(e) === j(a),
    serialize: j,
    renderOptionLabel: O,
    renderOptionValue: e => {
      let [t] = e;
      return O(t)
    },
    "aria-labelledby": v
  })
}