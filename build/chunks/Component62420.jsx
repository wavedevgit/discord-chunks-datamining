/** Chunk was on 56826 **/
/** chunk id: 62420, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk117984 = require("./117984.js"),
  Chunk593214 = require("./593214.js"),
  Chunk362658 = require("./362658.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let t = (0, a.Mt)(),
    n = (0, a.s4)(e.id),
    c = (0, a.zv)(),
    {
      isFavoritesPerk: u
    } = (0, o.z)("useChannelMoveToCategory");
  if (__OVERLAY__ || !t || null == n || !u) return null;
  let [d, f] = function(e) {
    let t = [],
      n = null;
    for (let r of e) null == r.id ? n = r : t.push(r);
    return [n, t]
  }(c.filter(e => e.id !== (null == n ? true : n.parentId)));

  function O(e) {
    null != n && (0, l.uA)(n.id, e)
  }
  return null == d && 0 === f.length ? null : (0, r.jsxs)(i.sNh, {
    id: "move-to-category",
    label: s.intl.string(s.t.FAplmp),
    children: [null != d && (0, r.jsx)(i.kSQ, {
      children: (0, r.jsx)(i.sNh, {
        id: "favorite-uncategorized",
        label: d.name,
        action: () => O(d.id)
      })
    }), f.length > 0 && (0, r.jsx)(i.kSQ, {
      children: f.map(e => {
        let {
          id: t,
          name: n
        } = e;
        return (0, r.jsx)(i.sNh, {
          id: "favorite-".concat(t),
          label: n,
          action: () => O(t)
        }, t)
      })
    })]
  })
}