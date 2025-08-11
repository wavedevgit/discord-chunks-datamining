/** Chunk was on 56826 **/
/** chunk id: 62420, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk117984 = require("./117984.js"),
  Chunk593214 = require("./593214.js"),
  Chunk362658 = require("./362658.js"),
  Chunk388032 = require("./388032.jsx");

function u(t) {
  let n = (0, s.Mt)(),
    e = (0, s.s4)(t.id),
    u = (0, s.zv)(),
    {
      isFavoritesPerk: o
    } = (0, a.z)("useChannelMoveToCategory");
  if (__OVERLAY__ || !n || null == e || !o) return null;
  let [c, f] = function(t) {
    let n = [],
      e = null;
    for (let i of t) null == i.id ? e = i : n.push(i);
    return [e, n]
  }(u.filter(t => t.id !== (null == e ? true : e.parentId)));

  function g(t) {
    null != e && (0, l.uA)(e.id, t)
  }
  return null == c && 0 === f.length ? null : (0, i.jsxs)(r.sNh, {
    id: "move-to-category",
    label: d.intl.string(d.t.FAplmp),
    children: [null != c && (0, i.jsx)(r.kSQ, {
      children: (0, i.jsx)(r.sNh, {
        id: "favorite-uncategorized",
        label: c.name,
        action: () => g(c.id)
      })
    }), f.length > 0 && (0, i.jsx)(r.kSQ, {
      children: f.map(t => {
        let {
          id: n,
          name: e
        } = t;
        return (0, i.jsx)(r.sNh, {
          id: "favorite-".concat(n),
          label: e,
          action: () => g(n)
        }, n)
      })
    })]
  })
}