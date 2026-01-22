/** Chunk was on 98363 **/
/** chunk id: 154672, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./747238.js");
var Chunk110259 = require("./110259.js"),
  Chunk933681 = require("./933681.js"),
  Chunk73153 = require("./73153.js"),
  Chunk499785 = require("./499785.js"),
  Chunk652215 = require("./652215.js");
let c = {
  signup: (e, t) => o.A.post({
    url: a.Rsh.HUB_WAITLIST_SIGNUP,
    body: {
      email: e,
      school: t
    },
    trackedActionData: {
      event: n.NetworkActionNames.HUB_WAITLIST_SIGNUP,
      properties: e => {
        var t;
        let r = false,
          n = null == e || null == (t = e.body) ? true : t.email_domain;
        return null != n && (r = false !== n.split(".").indexOf("edu")), (0, l.e0)({
          is_edu_email: r
        })
      }
    },
    rejectWithError: false
  }),
  sendVerificationEmail: async (e, t, r) => (await o.A.post({
    url: a.Rsh.HUB_EMAIL_VERIFY_SEND,
    body: {
      email: e,
      guild_id: r,
      allow_multiple_guilds: t,
      use_verification_code: true
    },
    trackedActionData: {
      event: n.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
      properties: e => {
        var t;
        let r = null == e || null == (t = e.body) ? true : t.has_matching_guild;
        return (0, l.e0)({
          has_matching_guild: r
        })
      }
    },
    rejectWithError: false
  })).body,
  async verify(e) {
    if (null != e) try {
      var t;
      let r = null == (t = (await o.A.post({
        url: a.Rsh.HUB_EMAIL_VERIFY,
        body: {
          token: e
        },
        trackedActionData: {
          event: n.NetworkActionNames.HUB_EMAIL_VERIFY
        },
        rejectWithError: false
      })).body.guild) ? true : t.id;
      i.h.dispatch({
        type: "HUB_VERIFY_EMAIL_SUCCESS",
        guildId: r
      })
    } catch (e) {
      i.h.dispatch({
        type: "HUB_VERIFY_EMAIL_FAILURE",
        errors: e.body
      })
    }
  },
  async verifyCode(e, t, r) {
    if (null != e) try {
      var l;
      let c = await o.A.post({
          url: a.Rsh.HUB_EMAIL_VERIFY_CODE,
          body: {
            code: e,
            guild_id: t,
            email: r
          },
          trackedActionData: {
            event: n.NetworkActionNames.HUB_EMAIL_VERIFY
          },
          rejectWithError: false
        }),
        s = null == (l = c.body.guild) ? true : l.id;
      return i.h.dispatch({
        type: "HUB_VERIFY_EMAIL_SUCCESS",
        guildId: s
      }), c.body
    } catch (e) {
      throw i.h.dispatch({
        type: "HUB_VERIFY_EMAIL_FAILURE",
        errors: e.body
      }), e
    }
  }
}