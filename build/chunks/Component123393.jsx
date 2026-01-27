/** Chunk was on 77870 **/
/** chunk id: 123393, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => p
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

function p(e, t, p, h) {
  let [f, g] = l.useState(false), m = (0, i.bG)([o.A], () => o.A.getChannel(h)), b = l.useCallback(() => {
    (0, s.showToast)((0, s.createToast)(d.intl.string(d.t.R0RpRX), s.ToastType.FAILURE))
  }, []), A = l.useCallback(async () => {
    if (!f && null != e && null != t && null != p) {
      if (null != m) return void a.default.selectPrivateChannel(m.id);
      if (!f) {
        g(true);
        try {
          await c.A.createOrEnterJoinRequestInterview(p)
        } catch (e) {
          b()
        } finally {
          g(false)
        }
      }
    }
  }, [e, p, m, b, f, t]);
  return {
    approveRequest: async () => {
      if (!f && null != e && null != t && null != p) {
        g(true);
        try {
          await c.A.updateGuildJoinRequest(e, t, p, u.B5.APPROVED)
        } catch (e) {
          b()
        } finally {
          g(false)
        }
      }
    },
    rejectRequest: () => {
      null != e && null != t && null != p && (0, s.mMO)(async () => {
        let {
          default: l
        } = await n.e("70685").then(n.bind(n, 867276));
        return n => (0, r.jsx)(l, {
          modalProps: n,
          guildId: e,
          userId: t,
          guildJoinRequestId: p,
          onError: b
        })
      })
    },
    submitting: f,
    handleOpenInterview: A
  }
}