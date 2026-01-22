/** Chunk was on 94503 **/
/** chunk id: 447696, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Fy: () => s,
  Vv: () => c,
  Xx: () => u,
  i4: () => E,
  oZ: () => o,
  ry: () => i
}), require("./228524.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");
let i = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    r.h.dispatch({
      type: "WELCOME_SCREEN_VIEW",
      guildId: e,
      isLurking: t
    })
  },
  s = async e => {
    r.h.dispatch({
      type: "WELCOME_SCREEN_FETCH_START"
    });
    try {
      let t = await l.Bo.get({
        url: a.Rsh.GUILD_WELCOME_SCREEN(e),
        oldFormErrors: true,
        rejectWithError: true
      });
      return r.h.dispatch({
        type: "WELCOME_SCREEN_FETCH_SUCCESS",
        guildId: e,
        welcomeScreen: t.body
      }), t.body
    } catch (e) {
      r.h.dispatch({
        type: "WELCOME_SCREEN_FETCH_FAIL"
      })
    }
  }, o = () => {
    r.h.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_RESET"
    })
  }, c = () => {
    r.h.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_CLEAR"
    })
  }, u = e => {
    r.h.dispatch({
      type: "WELCOME_SCREEN_SETTINGS_UPDATE",
      settings: e
    })
  }, E = async (e, t) => {
    r.h.dispatch({
      type: "WELCOME_SCREEN_SUBMIT"
    });
    try {
      let n = await l.Bo.patch({
        url: a.Rsh.GUILD_WELCOME_SCREEN(e),
        body: {
          description: t.description,
          welcome_channels: t.channels,
          enabled: t.enabled
        },
        oldFormErrors: true,
        rejectWithError: true
      });
      r.h.dispatch({
        type: "WELCOME_SCREEN_SUBMIT_SUCCESS",
        guildId: e,
        welcomeScreen: n.body
      })
    } catch (e) {
      r.h.dispatch({
        type: "WELCOME_SCREEN_SUBMIT_FAILURE"
      })
    }
  }