/** Chunk was on 78650 **/
/** chunk id: 732393, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
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

function b(e) {
  let {
    tag: t
  } = e, {
    name: n,
    emojiId: l,
    emojiName: a
  } = t, d = (0, r.e7)([s.ZP], () => null != l ? s.ZP.getUsableCustomEmojiById(l) : null);
  return (0, i.jsxs)(i.Fragment, {
    children: [null != a || null != l ? (0, i.jsx)(o.Z, {
      className: v.emoji,
      emojiId: l,
      emojiName: a,
      animated: !!(null == d ? true : d.animated)
    }) : null, n]
  })
}

function Z(e) {
  let t = (0, r.e7)([f.Z], () => f.Z.getChannel(e), [e]),
    n = (0, c.C7)(t),
    o = (0, r.e7)([f.Z], () => f.Z.getChannel(null == t ? true : t.parent_id), [t]),
    s = (0, u.Vm)(o),
    v = (0, u.eV)(t),
    Z = v.length >= h.Cn,
    p = (0, c.$R)(t);
  if (null == t) return (0, a.Zy)(), null;
  if (!n || __OVERLAY__ || !t.isForumPost() || (null == s ? true : s.length) === 0 || !p || t.isModeratorReportChannel()) return null;
  let m = null == s ? true : s.map(e => {
    let n = v.includes(e);
    return (0, i.jsx)(l.S89, {
      id: e.id,
      label: (0, i.jsx)(b, {
        tag: e
      }),
      disabled: Z && !n,
      action: () => (e => {
        let n = new Set(v);
        if (n.has(e)) n.delete(e);
        else {
          if (Z) return;
          n.add(e)
        }
        let i = Array.from(n).map(e => e.id);
        d.Z.updateForumPostTags(t.id, i)
      })(e),
      checked: n
    }, e.id)
  });
  return (0, i.jsx)(l.sNh, {
    id: "edit-tags",
    label: g.intl.string(g.t["436ZFx"]),
    children: m
  })
}