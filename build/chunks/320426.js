/** Chunk was on 36290 **/
/** chunk id: 320426, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk58149 = require("./58149.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927813 = require("./927813.js"),
  Chunk381616 = require("./381616.js"),
  Chunk652215 = require("./652215.js");

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = r[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      r.push.apply(r, i)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let O = +Chunk927813.A.Millis.DAY,
  I = new Map,
  A = {
    useShouldShowChannelNotice(e) {
      let t = (0, n.bG)([l.A, c.A], () => {
        let t = l.A.getGuild(e);
        return null != t && c.A.can(p.xBc.ADMINISTRATOR, t)
      });
      i.useEffect(() => {
        var r;
        let i, n;
        t && (i = Date.now(), i < (n = null != (r = I.get(e)) ? r : 0) + O || (I.set(e, i), o.Bo.post({
          url: p.Rsh.GUILD_MIGRATE_COMMAND_SCOPE(e),
          rejectWithError: true
        }).then(t => {
          var r, i;
          a.h.dispatch({
            type: "COMMANDS_MIGRATION_UPDATE_SUCCESS",
            guildId: e,
            integrationIdsWithAppCommands: null != (r = null == (i = t.body) ? true : i.integration_ids_with_app_commands) ? r : []
          })
        }, () => {
          I.set(e, n)
        })))
      }, [e, t]);
      let r = (0, n.bG)([u.A], () => u.A.shouldShowChannelNotice(e));
      return t && r
    },
    dismissNotice(e) {
      a.h.dispatch({
        type: "COMMANDS_MIGRATION_NOTICE_DISMISSED",
        guildId: e
      })
    },
    dismissOverviewTooltip(e, t) {
      var r;
      a.h.dispatch({
        type: "COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED",
        guildId: e,
        integrationId: t.id
      }), d.default.track(p.HAw.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, h(E({}, (0, s.H$)(e)), {
        application_id: null == (r = t.application) ? true : r.id,
        location: "overview"
      }))
    },
    dismissToggleTooltip(e, t) {
      var r;
      true !== t && (a.h.dispatch({
        type: "COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED",
        integrationId: t.id
      }), d.default.track(p.HAw.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, h(E({}, (0, s.H$)(e)), {
        application_id: null == (r = t.application) ? true : r.id,
        location: "toggle"
      })))
    }
  }