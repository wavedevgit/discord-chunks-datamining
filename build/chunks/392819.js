/** Chunk was on web.js **/
/** chunk id: 392819, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk573385 = require("./573385.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  let {
    shouldSubscribe: t,
    subscribeToGroupId: n,
    authorId: s
  } = e, l = r.useContext(i.d);
  r.useEffect(() => {
    if (!t || null == l || null == n || null == s) return;
    let {
      setAnimate: e
    } = l;
    return a.S.subscribeKeyed(o.LPv.ANIMATE_CHAT_AVATAR, "".concat(n, ":").concat(s), e), () => void a.S.unsubscribeKeyed(o.LPv.ANIMATE_CHAT_AVATAR, "".concat(n, ":").concat(s), e)
  }, [t, s, n, l])
}