/** Chunk was on 40694 **/
/** chunk id: 47930, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  b: () => a,
  x: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk385499 = require("./385499.jsx"),
  Chunk245315 = require("./245315.js"),
  Chunk368859 = require("./368859.js"),
  Chunk724913 = require("./724913.js");

function a(e) {
  let n, {
    message: t,
    channel: r,
    user: u,
    isRepliedMessage: a
  } = e;
  return (null == t ? true : t.isSystemDM()) ? n = l.Z.Types.SYSTEM_DM : null != t && (0, o.Z)(t) ? n = (0, i.cp)(t) ? l.Z.Types.OFFICIAL : l.Z.Types.SERVER : (null == u ? true : u.bot) ? n = l.Z.Types.BOT : null != r && r.isForumPost() && r.ownerId === (null == u ? true : u.id) && !a && (n = l.Z.Types.ORIGINAL_POSTER), n
}

function c(e) {
  let {
    message: n,
    channel: t,
    user: i,
    compact: o,
    isRepliedMessage: c,
    hideIcon: s = false,
    children: d
  } = e, f = a({
    message: n,
    channel: t,
    user: i,
    compact: o,
    isRepliedMessage: c,
    hideIcon: s,
    children: d
  });
  return null == f ? null : (0, r.jsx)(l.Z, {
    className: o ? u.botTagCompact : u.botTagCozy,
    type: f,
    verified: null == i ? true : i.isVerifiedBot(),
    hideIcon: s,
    useRemSizes: true,
    children: d
  })
}