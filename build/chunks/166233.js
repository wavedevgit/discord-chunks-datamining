/** Chunk was on web.js **/
/** chunk id: 166233, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ob: () => s,
  Oe: () => a
});
var Chunk11541 = require("./11541.js");
let i = {};

function a(e) {
  return null == i[e] && (i[e] = {}), i[e]
}

function s(e, t) {
  if (0 === t.length) returnfalse;
  let n = a(e);
  return t.forEach(e => {
    var t, i, a, s, o, l, c, u, d, f, p, _;
    let h = n[e.userId],
      m = null != (t = null != (i = e.joinSourceType) ? i : null == h ? true : h.joinSourceType) ? t : null;
    (null == m || m === r.UP.UNSPECIFIED) && null != e.sourceInviteCode && (m = r.UP.INVITE), n[e.userId] = {
      userId: e.userId,
      sourceInviteCode: null != (a = null != (s = e.sourceInviteCode) ? s : null == h ? true : h.sourceInviteCode) ? a : null,
      joinSourceType: m,
      inviterId: null != (o = null != (l = e.inviterId) ? l : null == h ? true : h.inviterId) ? o : null,
      integrationType: null != (c = null != (u = e.integrationType) ? u : null == h ? true : h.integrationType) ? c : null,
      joinSourceApplicationId: null != (d = null != (f = e.joinSourceApplicationId) ? f : null == h ? true : h.joinSourceApplicationId) ? d : null,
      joinSourceChannelId: null != (p = null != (_ = e.joinSourceChannelId) ? _ : null == h ? true : h.joinSourceChannelId) ? p : null
    }
  }), true
}