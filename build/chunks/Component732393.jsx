/** Chunk was on 92091 **/
/** chunk id: 732393, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk55998 = require("./55998.js");

function v(t) {
  let {
    tag: n
  } = t, {
    name: i,
    emojiId: r,
    emojiName: a
  } = n, o = (0, l.e7)([d.ZP], () => null != r ? d.ZP.getUsableCustomEmojiById(r) : null);
  return (0, e.jsxs)(e.Fragment, {
    children: [null != a || null != r ? (0, e.jsx)(s.Z, {
      className: f.emoji,
      emojiId: r,
      emojiName: a,
      animated: !!(null == o ? true : o.animated)
    }) : null, i]
  })
}

function m(t) {
  let n = (0, l.e7)([h.Z], () => h.Z.getChannel(t), [t]),
    i = (0, c.C7)(n),
    s = (0, l.e7)([h.Z], () => h.Z.getChannel(null == n ? true : n.parent_id), [n]),
    d = (0, u.Vm)(s),
    f = (0, u.eV)(n),
    m = f.length >= Z.Cn,
    b = (0, c.$R)(n);
  if (null == n) return (0, a.Zy)(), null;
  if (!i || __OVERLAY__ || !n.isForumPost() || (null == d ? true : d.length) === 0 || !b || n.isModeratorReportChannel()) return null;
  let j = null == d ? true : d.map(t => {
    let i = f.includes(t);
    return (0, e.jsx)(r.S89, {
      id: t.id,
      label: (0, e.jsx)(v, {
        tag: t
      }),
      disabled: m && !i,
      action: () => (t => {
        let i = new Set(f);
        if (i.has(t)) i.delete(t);
        else {
          if (m) return;
          i.add(t)
        }
        let e = Array.from(i).map(t => t.id);
        o.Z.updateForumPostTags(n.id, e)
      })(t),
      checked: i
    }, t.id)
  });
  return (0, e.jsx)(r.sNh, {
    id: "edit-tags",
    label: g.intl.string(g.t["436ZFw"]),
    children: j
  })
}