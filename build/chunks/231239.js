/** Chunk was on 27978 **/
/** chunk id: 231239, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./35282.js");
var Chunk990547 = require("./990547.js"),
  Chunk283693 = require("./283693.js"),
  Chunk570140 = require("./570140.js"),
  Chunk573261 = require("./573261.js"),
  Chunk981631 = require("./981631.js");
let o = {
  signup: (e, t) => a.Z.post({
    url: l.ANM.HUB_WAITLIST_SIGNUP,
    body: {
      email: e,
      school: t
    },
    trackedActionData: {
      event: r.NetworkActionNames.HUB_WAITLIST_SIGNUP,
      properties: e => {
        var t;
        let n = false,
          r = null == e || null == (t = e.body) ? true : t.email_domain;
        return null != r && (n = false !== r.split(".").indexOf("edu")), (0, i.iG)({
          is_edu_email: n
        })
      }
    },
    rejectWithError: false
  }),
  sendVerificationEmail: async (e, t, n) => (await a.Z.post({
    url: l.ANM.HUB_EMAIL_VERIFY_SEND,
    body: {
      email: e,
      guild_id: n,
      allow_multiple_guilds: t,
      use_verification_code: true
    },
    trackedActionData: {
      event: r.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
      properties: e => {
        var t;
        let n = null == e || null == (t = e.body) ? true : t.has_matching_guild;
        return (0, i.iG)({
          has_matching_guild: n
        })
      }
    },
    rejectWithError: false
  })).body,
  async verify(e) {
    if (null != e) try {
      var t;
      let n = null == (t = (await a.Z.post({
        url: l.ANM.HUB_EMAIL_VERIFY,
        body: {
          token: e
        },
        trackedActionData: {
          event: r.NetworkActionNames.HUB_EMAIL_VERIFY
        },
        rejectWithError: false
      })).body.guild) ? true : t.id;
      s.Z.dispatch({
        type: "HUB_VERIFY_EMAIL_SUCCESS",
        guildId: n
      })
    } catch (e) {
      s.Z.dispatch({
        type: "HUB_VERIFY_EMAIL_FAILURE",
        errors: e.body
      })
    }
  },
  async verifyCode(e, t, n) {
    if (null != e) try {
      var i;
      let o = await a.Z.post({
          url: l.ANM.HUB_EMAIL_VERIFY_CODE,
          body: {
            code: e,
            guild_id: t,
            email: n
          },
          trackedActionData: {
            event: r.NetworkActionNames.HUB_EMAIL_VERIFY
          },
          rejectWithError: false
        }),
        c = null == (i = o.body.guild) ? true : i.id;
      return s.Z.dispatch({
        type: "HUB_VERIFY_EMAIL_SUCCESS",
        guildId: c
      }), o.body
    } catch (e) {
      throw s.Z.dispatch({
        type: "HUB_VERIFY_EMAIL_FAILURE",
        errors: e.body
      }), e
    }
  }
}