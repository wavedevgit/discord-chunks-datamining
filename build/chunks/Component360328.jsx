/** Chunk was on 81985 **/
/** chunk id: 360328, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk592125 = require("./592125.js"),
  Chunk693546 = require("./693546.js"),
  Chunk246364 = require("./246364.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, p, f) {
  let [h, g] = i.useState(false), m = (0, l.e7)([s.Z], () => s.Z.getChannel(f)), b = i.useCallback(() => {
    (0, a.showToast)((0, a.createToast)(d.intl.string(d.t.R0RpRX), a.ToastType.FAILURE))
  }, []), y = i.useCallback(async () => {
    if (!h && null != e && null != t && null != p) {
      if (null != m) return void o.default.selectPrivateChannel(m.id);
      if (!h) {
        g(true);
        try {
          await c.Z.createOrEnterJoinRequestInterview(p)
        } catch (e) {
          b()
        } finally {
          g(false)
        }
      }
    }
  }, [e, p, m, b, h, t]);
  return {
    approveRequest: async () => {
      if (!h && null != e && null != t && null != p) {
        g(true);
        try {
          await c.Z.updateGuildJoinRequest(e, t, p, u.wB.APPROVED)
        } catch (e) {
          b()
        } finally {
          g(false)
        }
      }
    },
    rejectRequest: () => {
      null != e && null != t && null != p && (0, a.ZDy)(async () => {
        let {
          default: i
        } = await n.e("56496").then(n.bind(n, 113886));
        return n => (0, r.jsx)(i, {
          modalProps: n,
          guildId: e,
          userId: t,
          guildJoinRequestId: p,
          onError: b
        })
      })
    },
    submitting: h,
    handleOpenInterview: y
  }
}