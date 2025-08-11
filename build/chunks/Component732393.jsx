/** Chunk was on 46154 **/
/** chunk id: 732393, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  Chunk939852 = require("./939852.js");

function Z(t) {
  let {
    tag: n
  } = t, {
    name: e,
    emojiId: l,
    emojiName: r
  } = n, d = (0, a.e7)([s.ZP], () => null != l ? s.ZP.getUsableCustomEmojiById(l) : null);
  return (0, i.jsxs)(i.Fragment, {
    children: [null != r || null != l ? (0, i.jsx)(o.Z, {
      className: g.emoji,
      emojiId: l,
      emojiName: r,
      animated: !!(null == d ? true : d.animated)
    }) : null, e]
  })
}

function p(t) {
  let n = (0, a.e7)([f.Z], () => f.Z.getChannel(t), [t]),
    e = (0, c.C7)(n),
    o = (0, a.e7)([f.Z], () => f.Z.getChannel(null == n ? true : n.parent_id), [n]),
    s = (0, u.Vm)(o),
    g = (0, u.eV)(n),
    p = g.length >= h.Cn,
    b = (0, c.$R)(n);
  if (null == n) return (0, r.Zy)(), null;
  if (!e || __OVERLAY__ || !n.isForumPost() || (null == s ? true : s.length) === 0 || !b || n.isModeratorReportChannel()) return null;
  let C = t => {
      let e = new Set(g);
      if (e.has(t)) e.delete(t);
      else {
        if (p) return;
        e.add(t)
      }
      let i = Array.from(e).map(t => t.id);
      d.Z.updateForumPostTags(n.id, i)
    },
    m = null == s ? true : s.map(t => {
      let n = g.includes(t);
      return (0, i.jsx)(l.S89, {
        id: t.id,
        label: (0, i.jsx)(Z, {
          tag: t
        }),
        disabled: p && !n,
        action: () => C(t),
        checked: n
      }, t.id)
    });
  return (0, i.jsx)(l.sNh, {
    id: "edit-tags",
    label: v.intl.string(v.t["436ZFx"]),
    children: m
  })
}