/** Chunk was on 97492 **/
/** chunk id: 123393, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => f
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

function f(e, t, f, p) {
  let [h, b] = l.useState(false), g = (0, i.bG)([o.A], () => o.A.getChannel(p)), m = l.useCallback(() => {
    (0, a.showToast)((0, a.createToast)(d.intl.string(d.t.R0RpRX), a.ToastType.FAILURE))
  }, []), A = l.useCallback(async () => {
    if (!h && null != e && null != t && null != f) {
      if (null != g) return void s.default.selectPrivateChannel(g.id);
      if (!h) {
        b(true);
        try {
          await c.A.createOrEnterJoinRequestInterview(f)
        } catch (e) {
          m()
        } finally {
          b(false)
        }
      }
    }
  }, [e, f, g, m, h, t]);
  return {
    approveRequest: async () => {
      if (!h && null != e && null != t && null != f) {
        b(true);
        try {
          await c.A.updateGuildJoinRequest(e, t, f, u.B5.APPROVED)
        } catch (e) {
          m()
        } finally {
          b(false)
        }
      }
    },
    rejectRequest: () => {
      null != e && null != t && null != f && (0, a.mMO)(async () => {
        let {
          default: l
        } = await n.e("70685").then(n.bind(n, 867276));
        return n => (0, r.jsx)(l, {
          modalProps: n,
          guildId: e,
          userId: t,
          guildJoinRequestId: f,
          onError: m
        })
      })
    },
    submitting: h,
    handleOpenInterview: A
  }
}