/** Chunk was on web.js **/
/** chunk id: 47930, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => l,
  x: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk385499 = require("./385499.jsx"),
  Chunk245315 = require("./245315.js"),
  Chunk368859 = require("./368859.js"),
  Chunk724913 = require("./724913.js");

function l(e) {
  let t, {
    message: n,
    channel: r,
    user: s,
    isRepliedMessage: l
  } = e;
  return (null == n ? true : n.isSystemDM()) ? t = i.Z.Types.SYSTEM_DM : null != n && (0, o.Z)(n) ? t = (0, a.cp)(n) ? i.Z.Types.OFFICIAL : i.Z.Types.SERVER : (null == s ? true : s.bot) ? t = i.Z.Types.BOT : null != r && r.isForumPost() && r.ownerId === (null == s ? true : s.id) && !l && (t = i.Z.Types.ORIGINAL_POSTER), t
}

function c(e) {
  let {
    message: t,
    channel: n,
    user: a,
    compact: o,
    isRepliedMessage: c,
    hideIcon: u = false,
    children: d
  } = e, f = l({
    message: t,
    channel: n,
    user: a,
    compact: o,
    isRepliedMessage: c,
    hideIcon: u,
    children: d
  });
  return null == f ? null : (0, r.jsx)(i.Z, {
    className: o ? s.botTagCompact : s.botTagCozy,
    type: f,
    verified: null == a ? true : a.isVerifiedBot(),
    hideIcon: u,
    useRemSizes: true,
    children: d
  })
}