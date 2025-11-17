/** Chunk was on 22516 **/
/** chunk id: 929507, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk367907 = require("./367907.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk626135 = require("./626135.js"),
  Chunk70956 = require("./70956.js"),
  Chunk997787 = require("./997787.js"),
  Chunk981631 = require("./981631.js");

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let I = +Chunk70956.Z.Millis.DAY,
  A = new Map,
  T = {
    useShouldShowChannelNotice(e) {
      let t = (0, i.e7)([s.Z, c.Z], () => {
        let t = s.Z.getGuild(e);
        return null != t && c.Z.can(p.Plq.ADMINISTRATOR, t)
      });
      n.useEffect(() => {
        t && function(e) {
          var t;
          let r = Date.now(),
            n = null != (t = A.get(e)) ? t : 0;
          r < n + I || (A.set(e, r), a.tn.post({
            url: p.ANM.GUILD_MIGRATE_COMMAND_SCOPE(e),
            rejectWithError: true
          }).then(t => {
            var r, n;
            o.Z.dispatch({
              type: "COMMANDS_MIGRATION_UPDATE_SUCCESS",
              guildId: e,
              integrationIdsWithAppCommands: null != (n = null == (r = t.body) ? true : r.integration_ids_with_app_commands) ? n : []
            })
          }, () => {
            A.set(e, n)
          }))
        }(e)
      }, [e, t]);
      let r = (0, i.e7)([_.Z], () => _.Z.shouldShowChannelNotice(e));
      return t && r
    },
    dismissNotice(e) {
      o.Z.dispatch({
        type: "COMMANDS_MIGRATION_NOTICE_DISMISSED",
        guildId: e
      })
    },
    dismissOverviewTooltip(e, t) {
      var r;
      o.Z.dispatch({
        type: "COMMANDS_MIGRATION_OVERVIEW_TOOLTIP_DISMISSED",
        guildId: e,
        integrationId: t.id
      }), d.default.track(p.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, O(E({}, (0, l.hH)(e)), {
        application_id: null == (r = t.application) ? true : r.id,
        location: "overview"
      }))
    },
    dismissToggleTooltip(e, t) {
      var r;
      true !== t && (o.Z.dispatch({
        type: "COMMANDS_MIGRATION_TOGGLE_TOOLTIP_DISMISSED",
        integrationId: t.id
      }), d.default.track(p.rMx.COMMANDS_MIGRATION_TOOLTIP_DISMISSED, O(E({}, (0, l.hH)(e)), {
        application_id: null == (r = t.application) ? true : r.id,
        location: "toggle"
      })))
    }
  }