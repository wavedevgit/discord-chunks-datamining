/** Chunk was on 56826 **/
/** chunk id: 62420, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk117984 = require("./117984.js"),
  Chunk593214 = require("./593214.js"),
  Chunk362658 = require("./362658.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let n = (0, a.Mt)(),
    t = (0, a.s4)(e.id),
    d = (0, a.zv)(),
    {
      isFavoritesPerk: c
    } = (0, s.z)("useChannelMoveToCategory");
  if (__OVERLAY__ || !n || null == t || !c) return null;
  let [u, f] = function(e) {
    let n = [],
      t = null;
    for (let i of e) null == i.id ? t = i : n.push(i);
    return [t, n]
  }(d.filter(e => e.id !== (null == t ? true : t.parentId)));

  function h(e) {
    null != t && (0, l.uA)(t.id, e)
  }
  return null == u && 0 === f.length ? null : (0, i.jsxs)(r.sNh, {
    id: "move-to-category",
    label: o.intl.string(o.t.FAplms),
    children: [null != u && (0, i.jsx)(r.kSQ, {
      children: (0, i.jsx)(r.sNh, {
        id: "favorite-uncategorized",
        label: u.name,
        action: () => h(u.id)
      })
    }), f.length > 0 && (0, i.jsx)(r.kSQ, {
      children: f.map(e => {
        let {
          id: n,
          name: t
        } = e;
        return (0, i.jsx)(r.sNh, {
          id: "favorite-".concat(n),
          label: t,
          action: () => h(n)
        }, n)
      })
    })]
  })
}