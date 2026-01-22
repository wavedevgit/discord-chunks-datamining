/** Chunk was on web.js **/
/** chunk id: 812299, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => l,
  y: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk709066 = require("./709066.jsx"),
  Chunk455207 = require("./455207.js"),
  Chunk943667 = require("./943667.js"),
  Chunk679740 = require("./679740.js");

function l(e) {
  let t, {
    message: n,
    channel: r,
    user: o,
    isRepliedMessage: l
  } = e;
  return (null == n ? true : n.isSystemDM()) ? t = i.A.Types.SYSTEM_DM : null != n && (0, s.A)(n) ? t = (0, a.MZ)(n) ? i.A.Types.OFFICIAL : i.A.Types.SERVER : (null == o ? true : o.bot) ? t = i.A.Types.BOT : null != r && r.isForumPost() && r.ownerId === (null == o ? true : o.id) && !l && (t = i.A.Types.ORIGINAL_POSTER), t
}

function c(e) {
  let {
    message: t,
    channel: n,
    user: a,
    compact: s,
    isRepliedMessage: c,
    hideIcon: u = false,
    children: d
  } = e, f = l({
    message: t,
    channel: n,
    user: a,
    compact: s,
    isRepliedMessage: c,
    hideIcon: u,
    children: d
  });
  return null == f ? null : (0, r.jsx)(i.A, {
    className: s ? o.jW : o.RQ,
    type: f,
    verified: null == a ? true : a.isVerifiedBot(),
    hideIcon: u,
    useRemSizes: true,
    children: d
  })
}