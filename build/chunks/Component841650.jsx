/** Chunk was on 47841 **/
/** chunk id: 841650, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => N
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk843282 = require("./843282.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk95701 = require("./95701.js"),
  Chunk769765 = require("./769765.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk739455 = require("./739455.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk987772 = require("./987772.js");

function O(e) {
  return String(e)
}

function y(e) {
  let {
    icon: t,
    title: n,
    subtitle: i,
    className: l
  } = e;
  return (0, r.jsxs)("div", {
    className: s()(j.Pf, l),
    children: [t, (0, r.jsxs)("div", {
      className: j.QK,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "none",
        className: j.DX,
        children: n
      }), null != i && "" !== i ? (0, r.jsx)(o.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        className: j.V2,
        children: i
      }) : null]
    })]
  })
}

function v() {
  return (0, r.jsx)(y, {
    icon: (0, r.jsx)(o.j96, {
      size: "md",
      color: "currentColor",
      className: j.IX
    }),
    title: h.intl.string(h.t.d7YJMK),
    className: j.fp
  })
}

function A(e) {
  var t;
  let {
    channelId: n
  } = e, i = (0, p.fE)(n), l = (0, p.fE)(null != (t = null == i ? true : i.parent_id) ? t : x.dJq);
  if (null == i) return null;
  let s = (0, u.gU)(i),
    a = (0, d.m1)(i, m.default, b.A),
    c = null != l ? (0, d.m1)(l, m.default, b.A) : true;
  return (0, r.jsx)(y, {
    icon: null != s && (0, r.jsx)(s, {
      className: j.IX
    }),
    title: a,
    subtitle: c
  })
}

function E(e) {
  let {
    value: t
  } = e;
  return null != t ? (0, r.jsx)(A, {
    channelId: t
  }) : (0, r.jsx)(v, {})
}

function N(e) {
  let {
    label: t,
    guildId: l,
    value: s,
    initialChannelId: u,
    omitChannelIds: j,
    "aria-labelledby": y,
    onChange: v
  } = e, A = h.intl.string(h.t.d7YJMK), N = (0, a.bG)([g.A], () => g.A.getCategories(l), [l]), _ = (0, p.fE)(null != s ? s : x.dJq), S = i.useMemo(() => {
    let e = [{
        value: null,
        label: A
      }],
      t = false;
    for (let n of N._categories)
      for (let {
          channel: r
        }
        of N[n.channel.id])((0, f.tr)(r.type) || (0, f.ay)(r.type)) && (r.id !== s && (null == j ? true : j.has(r.id)) && (r.id !== u || s === u) || (s === r.id && (t = true), e.push({
        value: r.id,
        label: (0, d.m1)(r, m.default, b.A)
      })));
    return null == s || t || null == _ || e.push({
      value: s,
      label: _.name
    }), e
  }, [A, s, _, N, j, u]);
  return (0, r.jsx)(c.Pw, {
    label: t,
    placeholder: h.intl.string(h.t.r2ptsz),
    options: S,
    select: function(e) {
      null == e ? (0, o.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("72271"), n.e("64233"), n.e("59195")]).then(n.bind(n, 963765));
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
    isSelected: e => null != s && O(e) === O(s),
    serialize: O,
    renderOptionLabel: E,
    renderOptionValue: e => {
      let [t] = e;
      return E(t)
    },
    "aria-labelledby": y,
    "data-migration-pending": true
  })
}