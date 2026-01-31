/** Chunk was on 17534 **/
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
  let [g, f] = l.useState(false), m = (0, i.bG)([o.A], () => o.A.getChannel(p)), b = l.useCallback(() => {
    (0, s.showToast)((0, s.createToast)(d.intl.string(d.t.R0RpRX), s.ToastType.FAILURE))
  }, []), A = l.useCallback(async () => {
    if (!g && null != e && null != t && null != h) {
      if (null != m) return void a.default.selectPrivateChannel(m.id);
      if (!g) {
        f(true);
        try {
          await c.A.createOrEnterJoinRequestInterview(h)
        } catch (e) {
          b()
        } finally {
          f(false)
        }
      }
    }
  }, [e, h, m, b, g, t]);
  return {
    approveRequest: async () => {
      if (!g && null != e && null != t && null != h) {
        f(true);
        try {
          await c.A.updateGuildJoinRequest(e, t, h, u.B5.APPROVED)
        } catch (e) {
          b()
        } finally {
          f(false)
        }
      }
    },
    rejectRequest: () => {
      null != e && null != t && null != h && (0, s.mMO)(async () => {
        let {
          default: l
        } = await n.e("70685").then(n.bind(n, 867276));
        return n => (0, r.jsx)(l, {
          modalProps: n,
          guildId: e,
          userId: t,
          guildJoinRequestId: h,
          onError: b
        })
      })
    },
    submitting: g,
    handleOpenInterview: A
  }
}