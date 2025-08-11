/** Chunk was on web.js **/
/** chunk id: 360328, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk592125 = require("./592125.js"),
  Chunk693546 = require("./693546.js"),
  Chunk246364 = require("./246364.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, t, f, _) {
  let [p, h] = i.useState(false), m = (0, o.e7)([l.Z], () => l.Z.getChannel(_)), g = i.useCallback(() => {
    (0, a.showToast)((0, a.createToast)(d.intl.string(d.t.R0RpRU), a.ToastType.FAILURE))
  }, []), E = i.useCallback(async () => {
    if (!p && null != e && null != t && null != f) {
      if (null != m) return void s.default.selectPrivateChannel(m.id);
      if (!p) {
        h(true);
        try {
          await c.Z.createOrEnterJoinRequestInterview(f)
        } catch (e) {
          g()
        } finally {
          h(false)
        }
      }
    }
  }, [e, f, m, g, p, t]);
  return {
    approveRequest: async () => {
      if (!p && null != e && null != t && null != f) {
        h(true);
        try {
          await c.Z.updateGuildJoinRequest(e, t, f, u.wB.APPROVED)
        } catch (e) {
          g()
        } finally {
          h(false)
        }
      }
    },
    rejectRequest: () => {
      null != e && null != t && null != f && (0, a.ZDy)(async () => {
        let {
          default: i
        } = await n.e("56496").then(n.bind(n, 113886));
        return n => (0, r.jsx)(i, {
          modalProps: n,
          guildId: e,
          userId: t,
          guildJoinRequestId: f,
          onError: g
        })
      })
    },
    submitting: p,
    handleOpenInterview: E
  }
}