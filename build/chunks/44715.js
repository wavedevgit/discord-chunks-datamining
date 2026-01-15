/** Chunk was on web.js **/
/** chunk id: 44715, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qu: () => o,
  W2: () => a
});
var Chunk327999 = require("./327999.js");
let i = {};

function a(e) {
  return null == i[e] && (i[e] = {}), i[e]
}

function o(e, t) {
  if (0 === t.length) returnfalse;
  let n = a(e);
  return t.forEach(e => {
    var t, i, a, o, s, l, c, u, d, f, p, _;
    let h = n[e.userId],
      m = null != (i = null != (t = e.joinSourceType) ? t : null == h ? true : h.joinSourceType) ? i : null;
    (null == m || m === r.gq.UNSPECIFIED) && null != e.sourceInviteCode && (m = r.gq.INVITE), n[e.userId] = {
      userId: e.userId,
      sourceInviteCode: null != (o = null != (a = e.sourceInviteCode) ? a : null == h ? true : h.sourceInviteCode) ? o : null,
      joinSourceType: m,
      inviterId: null != (l = null != (s = e.inviterId) ? s : null == h ? true : h.inviterId) ? l : null,
      integrationType: null != (u = null != (c = e.integrationType) ? c : null == h ? true : h.integrationType) ? u : null,
      joinSourceApplicationId: null != (f = null != (d = e.joinSourceApplicationId) ? d : null == h ? true : h.joinSourceApplicationId) ? f : null,
      joinSourceChannelId: null != (_ = null != (p = e.joinSourceChannelId) ? p : null == h ? true : h.joinSourceChannelId) ? _ : null
    }
  }), true
}