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
    var t, i, o, a, s, l, c, u, d, f, _, p;
    let h = n[e.userId],
      m = null != (i = null != (t = e.joinSourceType) ? t : null == h ? true : h.joinSourceType) ? i : null;
    (null == m || m === r.gq.UNSPECIFIED) && null != e.sourceInviteCode && (m = r.gq.INVITE), n[e.userId] = {
      userId: e.userId,
      sourceInviteCode: null != (a = null != (o = e.sourceInviteCode) ? o : null == h ? true : h.sourceInviteCode) ? a : null,
      joinSourceType: m,
      inviterId: null != (l = null != (s = e.inviterId) ? s : null == h ? true : h.inviterId) ? l : null,
      integrationType: null != (u = null != (c = e.integrationType) ? c : null == h ? true : h.integrationType) ? u : null,
      joinSourceApplicationId: null != (f = null != (d = e.joinSourceApplicationId) ? d : null == h ? true : h.joinSourceApplicationId) ? f : null,
      joinSourceChannelId: null != (p = null != (_ = e.joinSourceChannelId) ? _ : null == h ? true : h.joinSourceChannelId) ? p : null
    }
  }), true
}