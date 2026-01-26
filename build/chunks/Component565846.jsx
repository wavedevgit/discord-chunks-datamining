/** Chunk was on 88974 **/
/** chunk id: 565846, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  A: () => m
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
  Chunk734057 = require("./734057.js"),
  Chunk690521 = require("./690521.js");
require("./253913.js");
var Chunk985018 = require("./985018.jsx");

function m(t) {
  let n = (0, r.bG)([h.A], () => h.A.getChannel(t), [t]),
    i = (0, c.NI)(n),
    m = (0, r.bG)([h.A], () => h.A.getChannel(null == n ? true : n.parent_id), [n]),
    v = (0, u.OT)(m),
    b = (0, u.kt)(n),
    p = b.length >= 5,
    f = (0, c.Id)(n),
    j = (0, r.bG)([o.Ay], () => {
      let t = new Set;
      for (let n of null != v ? v : [])
        if (null != n.emojiId) {
          let i = o.Ay.getUsableCustomEmojiById(n.emojiId);
          (null == i ? true : i.animated) && t.add(n.emojiId)
        } return t
    }, [v]);
  if (null == n) return (0, a.Z_)(), null;
  if (!i || __OVERLAY__ || !n.isForumPost() || (null == v ? true : v.length) === 0 || !f || n.isModeratorReportChannel()) return null;
  let _ = null == v ? true : v.map(t => {
    let i = b.includes(t),
      r = null != t.emojiId || null != t.emojiName;
    return (0, e.jsx)(l.sLh, {
      id: t.id,
      label: t.name,
      leftIcon: r ? (0, e.jsx)(d.A, {
        emojiId: t.emojiId,
        emojiName: t.emojiName,
        animated: null != t.emojiId && j.has(t.emojiId)
      }) : true,
      leadingAccessory: function(t, n) {
        let {
          emojiId: i,
          emojiName: e
        } = t;
        if (null != i || null != e) return {
          type: "emoji",
          emojiId: i,
          src: null == i && null != e ? A.Ay.getURL(e) : true,
          animated: null != i && n.has(i)
        }
      }(t, j),
      disabled: p && !i,
      action: () => (t => {
        let i = new Set(b);
        if (i.has(t)) i.delete(t);
        else {
          if (p) return;
          i.add(t)
        }
        let e = Array.from(i).map(t => t.id);
        s.A.updateForumPostTags(n.id, e)
      })(t),
      checked: i
    }, t.id)
  });
  return (0, e.jsx)(l.Drp, {
    id: "edit-tags",
    label: g.intl.string(g.t["436ZFw"]),
    children: _
  })
}