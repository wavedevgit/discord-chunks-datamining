/** Chunk was on 78441 **/
/** chunk id: 565846, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => h
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

function h(t) {
  let e = (0, r.bG)([A.A], () => A.A.getChannel(t), [t]),
    n = (0, c.NI)(e),
    h = (0, r.bG)([A.A], () => A.A.getChannel(null == e ? true : e.parent_id), [e]),
    p = (0, u.OT)(h),
    v = (0, u.kt)(e),
    b = v.length >= 5,
    m = (0, c.Id)(e),
    _ = (0, r.bG)([s.Ay], () => {
      let t = new Set;
      for (let e of null != p ? p : [])
        if (null != e.emojiId) {
          let n = s.Ay.getUsableCustomEmojiById(e.emojiId);
          (null == n ? true : n.animated) && t.add(e.emojiId)
        } return t
    }, [p]);
  if (null == e) return (0, a.Z_)(), null;
  if (!n || __OVERLAY__ || !e.isForumPost() || (null == p ? true : p.length) === 0 || !m || e.isModeratorReportChannel()) return null;
  let C = null == p ? true : p.map(t => {
    let n = v.includes(t),
      r = null != t.emojiId || null != t.emojiName;
    return (0, i.jsx)(l.sLh, {
      id: t.id,
      label: t.name,
      leftIcon: r ? (0, i.jsx)(o.A, {
        emojiId: t.emojiId,
        emojiName: t.emojiName,
        animated: null != t.emojiId && _.has(t.emojiId)
      }) : true,
      leadingAccessory: function(t, e) {
        let {
          emojiId: n,
          emojiName: i
        } = t;
        if (null != n || null != i) return {
          type: "emoji",
          emojiId: n,
          src: null == n && null != i ? f.Ay.getURL(i) : true,
          animated: null != n && e.has(n)
        }
      }(t, _),
      disabled: b && !n,
      action: () => (t => {
        let n = new Set(v);
        if (n.has(t)) n.delete(t);
        else {
          if (b) return;
          n.add(t)
        }
        let i = Array.from(n).map(t => t.id);
        d.A.updateForumPostTags(e.id, i)
      })(t),
      checked: n
    }, t.id)
  });
  return (0, i.jsx)(l.Drp, {
    id: "edit-tags",
    label: g.intl.string(g.t["436ZFw"]),
    children: C
  })
}