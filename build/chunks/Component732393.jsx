/** Chunk was on 86357 **/
/** chunk id: 732393, original params: e,t,n (module,exports,require) **/
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

function g(e) {
  let {
    tag: t
  } = e, {
    name: n,
    emojiId: l,
    emojiName: a
  } = t, c = (0, i.e7)([s.ZP], () => null != l ? s.ZP.getUsableCustomEmojiById(l) : null);
  return (0, r.jsxs)(r.Fragment, {
    children: [null != a || null != l ? (0, r.jsx)(o.Z, {
      className: m.emoji,
      emojiId: l,
      emojiName: a,
      animated: !!(null == c ? true : c.animated)
    }) : null, n]
  })
}

function b(e) {
  let t = (0, i.e7)([p.Z], () => p.Z.getChannel(e), [e]),
    n = (0, d.C7)(t),
    o = (0, i.e7)([p.Z], () => p.Z.getChannel(null == t ? true : t.parent_id), [t]),
    s = (0, u.Vm)(o),
    m = (0, u.eV)(t),
    b = m.length >= h.Cn,
    y = (0, d.$R)(t);
  if (null == t) return (0, a.Zy)(), null;
  if (!n || __OVERLAY__ || !t.isForumPost() || (null == s ? true : s.length) === 0 || !y || t.isModeratorReportChannel()) return null;
  let _ = null == s ? true : s.map(e => {
    let n = m.includes(e);
    return (0, r.jsx)(l.S89, {
      id: e.id,
      label: (0, r.jsx)(g, {
        tag: e
      }),
      disabled: b && !n,
      action: () => (e => {
        let n = new Set(m);
        if (n.has(e)) n.delete(e);
        else {
          if (b) return;
          n.add(e)
        }
        let r = Array.from(n).map(e => e.id);
        c.Z.updateForumPostTags(t.id, r)
      })(e),
      checked: n
    }, e.id)
  });
  return (0, r.jsx)(l.sNh, {
    id: "edit-tags",
    label: f.intl.string(f.t["436ZFx"]),
    children: _
  })
}