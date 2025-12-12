/** Chunk was on 7891 **/
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

function p(e, t, p, h) {
  let [f, m] = r.useState(false), g = (0, l.e7)([s.Z], () => s.Z.getChannel(h)), b = r.useCallback(() => {
    (0, a.showToast)((0, a.createToast)(d.intl.string(d.t.R0RpRX), a.ToastType.FAILURE))
  }, []), C = r.useCallback(async () => {
    if (!f && null != e && null != t && null != p) {
      if (null != g) return void o.default.selectPrivateChannel(g.id);
      if (!f) {
        m(true);
        try {
          await c.Z.createOrEnterJoinRequestInterview(p)
        } catch (e) {
          b()
        } finally {
          m(false)
        }
      }
    }
  }, [e, p, g, b, f, t]);
  return {
    approveRequest: async () => {
      if (!f && null != e && null != t && null != p) {
        m(true);
        try {
          await c.Z.updateGuildJoinRequest(e, t, p, u.wB.APPROVED)
        } catch (e) {
          b()
        } finally {
          m(false)
        }
      }
    },
    rejectRequest: () => {
      null != e && null != t && null != p && (0, a.ZDy)(async () => {
        let {
          default: r
        } = await n.e("56496").then(n.bind(n, 113886));
        return n => (0, i.jsx)(r, {
          modalProps: n,
          guildId: e,
          userId: t,
          guildJoinRequestId: p,
          onError: b
        })
      })
    },
    submitting: f,
    handleOpenInterview: C
  }
}