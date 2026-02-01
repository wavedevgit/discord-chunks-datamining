/** Chunk was on 61344 **/
/** chunk id: 123393, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk956793 = require("./956793.js"),
  Chunk734057 = require("./734057.js"),
  Chunk624458 = require("./624458.js"),
  Chunk513461 = require("./513461.js"),
  Chunk985018 = require("./985018.jsx");

function h(e, t, h, p) {
  let [f, m] = r.useState(false), g = (0, i.bG)([o.A], () => o.A.getChannel(p)), A = r.useCallback(() => {
    (0, a.showToast)((0, a.createToast)(d.intl.string(d.t.R0RpRX), a.ToastType.FAILURE))
  }, []), b = r.useCallback(async () => {
    if (!f && null != e && null != t && null != h) {
      if (null != g) return void s.default.selectPrivateChannel(g.id);
      if (!f) {
        m(true);
        try {
          await c.A.createOrEnterJoinRequestInterview(h)
        } catch (e) {
          A()
        } finally {
          m(false)
        }
      }
    }
  }, [e, h, g, A, f, t]);
  return {
    approveRequest: async () => {
      if (!f && null != e && null != t && null != h) {
        m(true);
        try {
          await c.A.updateGuildJoinRequest(e, t, h, u.B5.APPROVED)
        } catch (e) {
          A()
        } finally {
          m(false)
        }
      }
    },
    rejectRequest: () => {
      null != e && null != t && null != h && (0, a.mMO)(async () => {
        let {
          default: r
        } = await n.e("70685").then(n.bind(n, 867276));
        return n => (0, l.jsx)(r, {
          modalProps: n,
          guildId: e,
          userId: t,
          guildJoinRequestId: h,
          onError: A
        })
      })
    },
    submitting: f,
    handleOpenInterview: b
  }
}