/** Chunk was on web.js **/
/** chunk id: 44715, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qu: () => a,
  W2: () => o
});
var Chunk327999 = require("./327999.js");
let i = {};

function o(e) {
  return null == i[e] && (i[e] = {}), i[e]
}

function a(e, t) {
  if (0 === t.length) returnfalse;
  let n = o(e);
  return t.forEach(e => {
    var t, i, o, a, s, l, c, u, d, f, p, _;
    let m = n[e.userId],
      h = null != (i = null != (t = e.joinSourceType) ? t : null == m ? true : m.joinSourceType) ? i : null;
    (null == h || h === r.gq.UNSPECIFIED) && null != e.sourceInviteCode && (h = r.gq.INVITE), n[e.userId] = {
      userId: e.userId,
      sourceInviteCode: null != (a = null != (o = e.sourceInviteCode) ? o : null == m ? true : m.sourceInviteCode) ? a : null,
      joinSourceType: h,
      inviterId: null != (l = null != (s = e.inviterId) ? s : null == m ? true : m.inviterId) ? l : null,
      integrationType: null != (u = null != (c = e.integrationType) ? c : null == m ? true : m.integrationType) ? u : null,
      joinSourceApplicationId: null != (f = null != (d = e.joinSourceApplicationId) ? d : null == m ? true : m.joinSourceApplicationId) ? f : null,
      joinSourceChannelId: null != (_ = null != (p = e.joinSourceChannelId) ? p : null == m ? true : m.joinSourceChannelId) ? _ : null
    }
  }), true
}