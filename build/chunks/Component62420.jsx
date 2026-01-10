/** Chunk was on 56826 **/
/** chunk id: 62420, original params: e,t,n (module,exports,require) **/
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
  let t = (0, a.Mt)(),
    n = (0, a.s4)(e.id),
    d = (0, a.zv)(),
    {
      isFavoritesPerk: u
    } = (0, o.z)("useChannelMoveToCategory");
  if (__OVERLAY__ || !t || null == n || !u) return null;
  let [c, f] = function(e) {
    let t = [],
      n = null;
    for (let i of e) null == i.id ? n = i : t.push(i);
    return [n, t]
  }(d.filter(e => e.id !== (null == n ? true : n.parentId)));

  function g(e) {
    null != n && (0, l.uA)(n.id, e)
  }
  return null == c && 0 === f.length ? null : (0, i.jsxs)(r.sNh, {
    id: "move-to-category",
    label: s.intl.string(s.t.FAplms),
    children: [null != c && (0, i.jsx)(r.kSQ, {
      children: (0, i.jsx)(r.sNh, {
        id: "favorite-uncategorized",
        label: c.name,
        action: () => g(c.id)
      })
    }), f.length > 0 && (0, i.jsx)(r.kSQ, {
      children: f.map(e => {
        let {
          id: t,
          name: n
        } = e;
        return (0, i.jsx)(r.sNh, {
          id: "favorite-".concat(t),
          label: n,
          action: () => g(t)
        }, t)
      })
    })]
  })
}