/** Chunk was on 95468 **/
n.d(t, {
  Z: () => o
}), n(35282);
var r = n(990547),
  l = n(283693),
  i = n(570140),
  a = n(573261),
  s = n(981631);
let o = {
  signup: (e, t) => a.Z.post({
    url: s.ANM.HUB_WAITLIST_SIGNUP,
    body: {
      email: e,
      school: t
    },
    trackedActionData: {
      event: r.NetworkActionNames.HUB_WAITLIST_SIGNUP,
      properties: e => {
        var t;
        let n = !1,
          r = null == e || null == (t = e.body) ? void 0 : t.email_domain;
        return null != r && (n = -1 !== r.split(".").indexOf("edu")), (0, l.iG)({
          is_edu_email: n
        })
      }
    },
    rejectWithError: !1
  }),
  sendVerificationEmail: async (e, t, n) => (await a.Z.post({
    url: s.ANM.HUB_EMAIL_VERIFY_SEND,
    body: {
      email: e,
      guild_id: n,
      allow_multiple_guilds: t,
      use_verification_code: !0
    },
    trackedActionData: {
      event: r.NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
      properties: e => {
        var t;
        let n = null == e || null == (t = e.body) ? void 0 : t.has_matching_guild;
        return (0, l.iG)({
          has_matching_guild: n
        })
      }
    },
    rejectWithError: !1
  })).body,
  async verify(e) {
    if (null != e) try {
      var t;
      let n = null == (t = (await a.Z.post({
        url: s.ANM.HUB_EMAIL_VERIFY,
        body: {
          token: e
        },
        trackedActionData: {
          event: r.NetworkActionNames.HUB_EMAIL_VERIFY
        },
        rejectWithError: !1
      })).body.guild) ? void 0 : t.id;
      i.Z.dispatch({
        type: "HUB_VERIFY_EMAIL_SUCCESS",
        guildId: n
      })
    } catch (e) {
      i.Z.dispatch({
        type: "HUB_VERIFY_EMAIL_FAILURE",
        errors: e.body
      })
    }
  },
  async verifyCode(e, t, n) {
    if (null != e) try {
      var l;
      let o = await a.Z.post({
          url: s.ANM.HUB_EMAIL_VERIFY_CODE,
          body: {
            code: e,
            guild_id: t,
            email: n
          },
          trackedActionData: {
            event: r.NetworkActionNames.HUB_EMAIL_VERIFY
          },
          rejectWithError: !1
        }),
        c = null == (l = o.body.guild) ? void 0 : l.id;
      return i.Z.dispatch({
        type: "HUB_VERIFY_EMAIL_SUCCESS",
        guildId: c
      }), o.body
    } catch (e) {
      throw i.Z.dispatch({
        type: "HUB_VERIFY_EMAIL_FAILURE",
        errors: e.body
      }), e
    }
  }
}