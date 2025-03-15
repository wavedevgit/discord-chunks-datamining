/** Chunk was on 17573 **/
r.d(t, {
  Es: () => v,
  RM: () => o,
  VP: () => c,
  Xb: () => s,
  sm: () => h,
  y0: () => a
}), r(266796);
var n = r(544891),
  l = r(570140),
  i = r(981631);
let a = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    l.Z.dispatch({
      type: "WELCOME_SCREEN_VIEW",
      guildId: e,
      isLurking: t
    })
  },
  o = async e => {
    l.Z.dispatch({
      type: "WELCOME_SCREEN_FETCH_START"
    });
    try {
      let t = await n.tn.get({
        url: i.ANM.GUILD_WELCOME_SCREEN(e),
        oldFormErrors: !0,
        rejectWithError: !0
      });
      return l.Z.dispatch({
        type: "WELCOME_SCREEN_FETCH_SUCCESS",
        guildId: e,
        welcomeScreen: t.body
      }), t.body
    } catch (e) {
      l.Z.dispatch({
        type: "WELCOME_SCREEN_FETCH_FAIL"
      })
    }
  }, s = () => {
    l.Z.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_RESET"
    })
  }, h = () => {
    l.Z.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_CLEAR"
    })
  }, c = e => {
    l.Z.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_UPDATE",
      settings: e
    })
  }, v = async (e, t) => {
    l.Z.dispatch({
      type: "WELCOME_SCREEN_SUBMIT"
    });
    try {
      let r = await n.tn.patch({
        url: i.ANM.GUILD_WELCOME_SCREEN(e),
        body: {
          description: t.description,
          welcome_channels: t.channels,
          enabled: t.enabled
        },
        oldFormErrors: !0,
        rejectWithError: !0
      });
      l.Z.dispatch({
        type: "WELCOME_SCREEN_SUBMIT_SUCCESS",
        guildId: e,
        welcomeScreen: r.body
      })
    } catch (e) {
      l.Z.dispatch({
        type: "WELCOME_SCREEN_SUBMIT_FAILURE"
      })
    }
  }