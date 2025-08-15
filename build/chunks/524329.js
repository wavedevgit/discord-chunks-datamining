/** Chunk was on 78079 **/
/** chunk id: 524329, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Es: () => c,
  RM: () => a,
  VP: () => g,
  Xb: () => s,
  sm: () => o,
  y0: () => i
}), require("./953529.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
let i = function(A) {
    let e = arguments.length > 1 && true !== arguments[1] && arguments[1];
    r.Z.dispatch({
      type: "WELCOME_SCREEN_VIEW",
      guildId: A,
      isLurking: e
    })
  },
  a = async A => {
    r.Z.dispatch({
      type: "WELCOME_SCREEN_FETCH_START"
    });
    try {
      let e = await n.tn.get({
        url: l.ANM.GUILD_WELCOME_SCREEN(A),
        oldFormErrors: true,
        rejectWithError: true
      });
      return r.Z.dispatch({
        type: "WELCOME_SCREEN_FETCH_SUCCESS",
        guildId: A,
        welcomeScreen: e.body
      }), e.body
    } catch (A) {
      r.Z.dispatch({
        type: "WELCOME_SCREEN_FETCH_FAIL"
      })
    }
  }, s = () => {
    Chunk570140.Z.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_RESET"
    })
  }, o = () => {
    Chunk570140.Z.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_CLEAR"
    })
  }, g = A => {
    r.Z.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_UPDATE",
      settings: A
    })
  }, c = async (A, e) => {
    r.Z.dispatch({
      type: "WELCOME_SCREEN_SUBMIT"
    });
    try {
      let t = await n.tn.patch({
        url: l.ANM.GUILD_WELCOME_SCREEN(A),
        body: {
          description: e.description,
          welcome_channels: e.channels,
          enabled: e.enabled
        },
        oldFormErrors: true,
        rejectWithError: true
      });
      r.Z.dispatch({
        type: "WELCOME_SCREEN_SUBMIT_SUCCESS",
        guildId: A,
        welcomeScreen: t.body
      })
    } catch (A) {
      r.Z.dispatch({
        type: "WELCOME_SCREEN_SUBMIT_FAILURE"
      })
    }
  }