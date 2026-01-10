/** Chunk was on 69937 **/
/** chunk id: 524329, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Es: () => d,
  RM: () => s,
  VP: () => u,
  Xb: () => o,
  sm: () => c,
  y0: () => a
}), require("./953529.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
let a = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    l.Z.dispatch({
      type: "WELCOME_SCREEN_VIEW",
      guildId: e,
      isLurking: t
    })
  },
  s = async e => {
    l.Z.dispatch({
      type: "WELCOME_SCREEN_FETCH_START"
    });
    try {
      let t = await r.tn.get({
        url: i.ANM.GUILD_WELCOME_SCREEN(e),
        oldFormErrors: true,
        rejectWithError: true
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
  }, o = () => {
    l.Z.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_RESET"
    })
  }, c = () => {
    l.Z.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_CLEAR"
    })
  }, u = e => {
    l.Z.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_UPDATE",
      settings: e
    })
  }, d = async (e, t) => {
    l.Z.dispatch({
      type: "WELCOME_SCREEN_SUBMIT"
    });
    try {
      let n = await r.tn.patch({
        url: i.ANM.GUILD_WELCOME_SCREEN(e),
        body: {
          description: t.description,
          welcome_channels: t.channels,
          enabled: t.enabled
        },
        oldFormErrors: true,
        rejectWithError: true
      });
      l.Z.dispatch({
        type: "WELCOME_SCREEN_SUBMIT_SUCCESS",
        guildId: e,
        welcomeScreen: n.body
      })
    } catch (e) {
      l.Z.dispatch({
        type: "WELCOME_SCREEN_SUBMIT_FAILURE"
      })
    }
  }