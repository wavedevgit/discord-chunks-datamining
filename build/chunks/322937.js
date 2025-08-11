/** Chunk was on web.js **/
/** chunk id: 322937, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => s
});
var Chunk73800 = require("./73800.js"),
  Chunk774078 = require("./774078.js"),
  Chunk202107 = require("./202107.js");
let a = 1e3;

function s(e) {
  let {
    communicationDisabledUntil: t,
    userId: n,
    guildId: s
  } = null != e ? e : {}, l = (0, i.Z)(null != t ? Date.parse(t) : Date.now()), c = l.seconds, u = (0, r.useRef)(null);
  return (0, r.useEffect)(() => null == e || null == s || null == n ? void clearTimeout(u.current) : (c <= 0 && null == u.current && (u.current = setTimeout(() => {
    o.Z.clearGuildMemberTimeout(s, n)
  }, a)), () => {
    null != u.current && (clearTimeout(u.current), u.current = null)
  }), [s, n, c, t, e]), l
}