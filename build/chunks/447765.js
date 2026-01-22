/** Chunk was on 61206 **/
/** chunk id: 447765, original params: e,t,i (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => c
}), require("./228524.js");
var Chunk626584 = require("./626584.js"),
  Chunk824082 = require("./824082.js"),
  Chunk723702 = require("./723702.js"),
  Chunk372684 = require("./372684.js");
let l = new Chunk626584.A("SteamSignalHandler");

function c(e) {
  let t = false,
    i = i => {
      var n, s, a, c, o, d;
      let h, m, u;
      if (!t) return;
      let v = (h = null != (a = null == (o = (s = i).title) ? true : o.toLowerCase()) ? a : "", m = null != (c = null == (d = s.description) ? true : d.toLowerCase()) ? c : "", u = "".concat(h, " ").concat(m), "death" === s.icon || u.includes("death") || u.includes("died") || u.includes("eliminated") ? r.rb.DEATH : "killstreak" === s.icon ? r.rb.MULTIKILL : u.includes("kill") || u.includes("defeat") || u.includes("eliminated") ? r.rb.KILL : u.includes("victory") || u.includes("win") || u.includes("champion") ? r.rb.VICTORY : u.includes("level") || u.includes("upgrade") ? r.rb.LEVEL_UP : u.includes("item") || u.includes("equipment") || u.includes("loot") ? r.rb.ITEM : u.includes("treasure") || u.includes("reward") || u.includes("chest") ? r.rb.TREASURE : u.includes("objective") || u.includes("boss") || u.includes("target") ? r.rb.OBJECTIVE_KILL : r.rb.ITEM),
        g = function(e) {
          var t;
          let i = null != (t = e.possibleClipPriority) ? t : 0;
          if (1 === e.isUserMarker) return 1;
          switch (i) {
            case 3:
              return 1;
            case 2:
              return .5;
            default:
              return 0
          }
        }(i),
        p = {
          type: r.Gy.GAME_EVENT,
          eventType: v,
          title: i.title,
          description: i.description,
          importance: g
        };
      l.info("Converting Steam timeline event to clip signal", {
        gameId: null == (n = i.gameId) ? true : n.toString(),
        title: i.title,
        eventType: v,
        importance: g
      }), e(p)
    };
  return {
    start() {
      t || (0, a.isWindows)() && (t = true, s.t.initialize(), s.t.addTimelineEventCallback(i))
    },
    stop() {
      t && (l.info("Stopping Steam signal handler"), t = false, s.t.removeTimelineEventCallback(i))
    },
    getState() {
      let e = (0, a.isWindows)();
      return {
        isActive: t,
        processesTracked: s.t.getTrackedProcesses().length,
        isAvailableForUser: e
      }
    }
  }
}