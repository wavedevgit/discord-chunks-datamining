/** Chunk was on 88974 **/
/** chunk id: 565846, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk508675 = require("./508675.js"),
  Chunk919577 = require("./919577.js"),
  Chunk435470 = require("./435470.js"),
  Chunk406704 = require("./406704.js"),
  Chunk734057 = require("./734057.js");
require("./253913.js");
var Chunk985018 = require("./985018.jsx"),
  Chunk559728 = require("./559728.js");

function b(t) {
  let {
    tag: n
  } = t, {
    name: i,
    emojiId: l,
    emojiName: a
  } = n, o = (0, r.bG)([s.Ay], () => null != l ? s.Ay.getUsableCustomEmojiById(l) : null);
  return (0, e.jsxs)(e.Fragment, {
    children: [null != a || null != l ? (0, e.jsx)(d.A, {
      className: g.Z,
      emojiId: l,
      emojiName: a,
      animated: !!(null == o ? true : o.animated)
    }) : null, i]
  })
}

function v(t) {
  let n = (0, r.bG)([h.A], () => h.A.getChannel(t), [t]),
    i = (0, c.NI)(n),
    d = (0, r.bG)([h.A], () => h.A.getChannel(null == n ? true : n.parent_id), [n]),
    s = (0, u.OT)(d),
    g = (0, u.kt)(n),
    v = g.length >= 5,
    p = (0, c.Id)(n);
  if (null == n) return (0, a.Z_)(), null;
  if (!i || __OVERLAY__ || !n.isForumPost() || (null == s ? true : s.length) === 0 || !p || n.isModeratorReportChannel()) return null;
  let m = null == s ? true : s.map(t => {
    let i = g.includes(t);
    return (0, e.jsx)(l.sLh, {
      id: t.id,
      label: (0, e.jsx)(b, {
        tag: t
      }),
      disabled: v && !i,
      action: () => (t => {
        let i = new Set(g);
        if (i.has(t)) i.delete(t);
        else {
          if (v) return;
          i.add(t)
        }
        let e = Array.from(i).map(t => t.id);
        o.A.updateForumPostTags(n.id, e)
      })(t),
      checked: i
    }, t.id)
  });
  return (0, e.jsx)(l.Drp, {
    id: "edit-tags",
    label: A.intl.string(A.t["436ZFw"]),
    children: m
  })
}