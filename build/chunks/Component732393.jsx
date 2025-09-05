/** Chunk was on 99534 **/
/** chunk id: 732393, original params: t,n,i (module,exports,require) **/
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

function g(t) {
  let {
    tag: n
  } = t, {
    name: i,
    emojiId: r,
    emojiName: a
  } = n, s = (0, l.e7)([o.ZP], () => null != r ? o.ZP.getUsableCustomEmojiById(r) : null);
  return (0, e.jsxs)(e.Fragment, {
    children: [null != a || null != r ? (0, e.jsx)(d.Z, {
      className: f.emoji,
      emojiId: r,
      emojiName: a,
      animated: !!(null == s ? true : s.animated)
    }) : null, i]
  })
}

function b(t) {
  let n = (0, l.e7)([h.Z], () => h.Z.getChannel(t), [t]),
    i = (0, c.C7)(n),
    d = (0, l.e7)([h.Z], () => h.Z.getChannel(null == n ? true : n.parent_id), [n]),
    o = (0, u.Vm)(d),
    f = (0, u.eV)(n),
    b = f.length >= Z.Cn,
    m = (0, c.$R)(n);
  if (null == n) return (0, a.Zy)(), null;
  if (!i || __OVERLAY__ || !n.isForumPost() || (null == o ? true : o.length) === 0 || !m || n.isModeratorReportChannel()) return null;
  let j = null == o ? true : o.map(t => {
    let i = f.includes(t);
    return (0, e.jsx)(r.S89, {
      id: t.id,
      label: (0, e.jsx)(g, {
        tag: t
      }),
      disabled: b && !i,
      action: () => (t => {
        let i = new Set(f);
        if (i.has(t)) i.delete(t);
        else {
          if (b) return;
          i.add(t)
        }
        let e = Array.from(i).map(t => t.id);
        s.Z.updateForumPostTags(n.id, e)
      })(t),
      checked: i
    }, t.id)
  });
  return (0, e.jsx)(r.sNh, {
    id: "edit-tags",
    label: v.intl.string(v.t["436ZFx"]),
    children: j
  })
}