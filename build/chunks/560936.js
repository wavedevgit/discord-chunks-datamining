/** Chunk was on web.js **/
/** chunk id: 560936, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk473193 = require("./473193.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js");

function s(e) {
  let {
    shouldSubscribe: t,
    subscribeToGroupId: n,
    authorId: s
  } = e, l = r.useContext(i.C);
  r.useEffect(() => {
    if (!t || null == l || null == n || null == s) return;
    let {
      setAnimate: e
    } = l;
    return a._.subscribeKeyed(o.zOV.ANIMATE_CHAT_AVATAR, "".concat(n, ":").concat(s), e), () => void a._.unsubscribeKeyed(o.zOV.ANIMATE_CHAT_AVATAR, "".concat(n, ":").concat(s), e)
  }, [t, s, n, l])
}