/** Chunk was on web.js **/
/** chunk id: 560936, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk473193 = require("./473193.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  let {
    shouldSubscribe: t,
    subscribeToGroupId: n,
    authorId: o
  } = e, l = r.useContext(i.C);
  r.useEffect(() => {
    if (!t || null == l || null == n || null == o) return;
    let {
      setAnimate: e
    } = l;
    return a._.subscribeKeyed(s.zOV.ANIMATE_CHAT_AVATAR, "".concat(n, ":").concat(o), e), () => void a._.unsubscribeKeyed(s.zOV.ANIMATE_CHAT_AVATAR, "".concat(n, ":").concat(o), e)
  }, [t, o, n, l])
}