/** Chunk was on 57287 **/
/** chunk id: 671470, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk422258 = require("./422258.js"),
  Chunk93055 = require("./93055.js"),
  Chunk616075 = require("./616075.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let t = (0, a.Fe)(),
    n = (0, a.Af)(e.id),
    u = (0, a.Rm)(),
    {
      isFavoritesPerk: s
    } = (0, c.l)("useChannelMoveToCategory");
  if (__OVERLAY__ || !t || null == n || !s) return null;
  let [d, b] = function(e) {
    let t = [],
      n = null;
    for (let r of e) null == r.id ? n = r : t.push(r);
    return [n, t]
  }(u.filter(e => e.id !== (null == n ? true : n.parentId)));

  function p(e) {
    null != n && (0, l.JD)(n.id, e)
  }
  return null == d && 0 === b.length ? null : (0, r.jsxs)(i.Drp, {
    id: "move-to-category",
    label: o.intl.string(o.t.FAplms),
    children: [null != d && (0, r.jsx)(i.rXV, {
      children: (0, r.jsx)(i.Drp, {
        id: "favorite-uncategorized",
        label: d.name,
        action: () => p(d.id)
      })
    }), b.length > 0 && (0, r.jsx)(i.rXV, {
      children: b.map(e => {
        let {
          id: t,
          name: n
        } = e;
        return (0, r.jsx)(i.Drp, {
          id: "favorite-".concat(t),
          label: n,
          action: () => p(t)
        }, t)
      })
    })]
  })
}