/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  p: () => a
});
var r = n(192379),
  i = n(409813),
  o = n(882712);

function a(e, t, n) {
  r.useEffect(() => {
    null != e && e !== i.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === o.I.PENDING ? n(i.h8.AWAITING_PURCHASE_TOKEN_AUTH) : e === i.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === o.I.SUCCESS && n(i.h8.REVIEW)
  }, [e, t, n])
}