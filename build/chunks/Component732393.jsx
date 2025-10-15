/** Chunk was on 46154 **/
/** chunk id: 732393, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk339085 = require("./339085.js"),
  Chunk883429 = require("./883429.js"),
  Chunk456269 = require("./456269.js"),
  Chunk665906 = require("./665906.js"),
  Chunk592125 = require("./592125.js"),
  Chunk710352 = require("./710352.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk433307 = require("./433307.js");

function Z(t) {
  let {
    tag: n
  } = t, {
    name: e,
    emojiId: a,
    emojiName: r
  } = n, d = (0, l.e7)([o.ZP], () => null != a ? o.ZP.getUsableCustomEmojiById(a) : null);
  return (0, i.jsxs)(i.Fragment, {
    children: [null != r || null != a ? (0, i.jsx)(s.Z, {
      className: v.emoji,
      emojiId: a,
      emojiName: r,
      animated: !!(null == d ? true : d.animated)
    }) : null, e]
  })
}

function b(t) {
  let n = (0, l.e7)([f.Z], () => f.Z.getChannel(t), [t]),
    e = (0, c.C7)(n),
    s = (0, l.e7)([f.Z], () => f.Z.getChannel(null == n ? true : n.parent_id), [n]),
    o = (0, u.Vm)(s),
    v = (0, u.eV)(n),
    b = v.length >= h.Cn,
    p = (0, c.$R)(n);
  if (null == n) return (0, r.Zy)(), null;
  if (!e || __OVERLAY__ || !n.isForumPost() || (null == o ? true : o.length) === 0 || !p || n.isModeratorReportChannel()) return null;
  let m = null == o ? true : o.map(t => {
    let e = v.includes(t);
    return (0, i.jsx)(a.S89, {
      id: t.id,
      label: (0, i.jsx)(Z, {
        tag: t
      }),
      disabled: b && !e,
      action: () => (t => {
        let e = new Set(v);
        if (e.has(t)) e.delete(t);
        else {
          if (b) return;
          e.add(t)
        }
        let i = Array.from(e).map(t => t.id);
        d.Z.updateForumPostTags(n.id, i)
      })(t),
      checked: e
    }, t.id)
  });
  return (0, i.jsx)(a.sNh, {
    id: "edit-tags",
    label: g.intl.string(g.t["436ZFw"]),
    children: m
  })
}