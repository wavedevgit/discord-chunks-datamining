/** Chunk was on 47129 **/
/** chunk id: 206942, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => T
}), require("./415506.js"), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk292556 = require("./292556.js"),
  Chunk734934 = require("./734934.js"),
  Chunk509613 = require("./509613.js"),
  Chunk460181 = require("./460181.js"),
  Chunk292959 = require("./292959.js"),
  Chunk869235 = require("./869235.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk649926 = require("./649926.js");
let v = Chunk647438.createContext(true);

function E(e) {
  let {
    sound: t
  } = e, {
    handlePreviewSound: n
  } = function() {
    let e = l.useContext(v);
    if (null == e) throw Error("useSoundPlayback must be used within a SoundPlaybackProvider");
    return e
  }();
  return (0, r.jsx)(o.P3F, {
    className: y.soundIcon,
    onClick: e => n(t, e),
    "aria-label": f.intl.string(f.t.Kd4uxM),
    children: (0, r.jsx)(o.gj8, {
      size: "xs",
      color: "currentColor",
      className: y.icon,
      "aria-hidden": true
    })
  })
}
let O = [{
    useLabel: () => Chunk388032.intl.string(Chunk388032.t.jD1qzM),
    sound: "message1",
    useDisabled: Chunk734934.p,
    useTooltip: () => (0, Chunk734934.p)() ? Chunk388032.intl.string(Chunk388032.t.cIRG0t) : true
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t.XBrJT0),
    sound: "call_ringing"
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t.hK51Ym),
    sound: "deafen"
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t.XiejaG),
    sound: "undeafen"
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t["w4m94+"]),
    sound: "mute"
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t.YqAjX1),
    sound: "unmute"
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t.JoTq8v),
    sound: "camera_on"
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t["8P6tQ0"]),
    sound: "camera_off"
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t["juL9/P"]),
    sound: "disconnect"
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t.x98vQk),
    sound: "ptt_start"
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t["1HjRqK"]),
    sound: "ptt_stop"
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t["9JB1Cg"]),
    sound: "user_join"
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t.KUBBNj),
    sound: "user_leave"
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t.EZjqUV),
    sound: "user_moved"
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t.LnNlQk),
    sound: "call_calling"
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t["Nd8P5+"]),
    sound: "stream_started"
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t["9bYj+P"]),
    sound: "stream_ended"
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t.KccUIy),
    sound: "stream_user_joined"
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t.dsjkiI),
    sound: "stream_user_left"
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t.nFOcf3),
    sound: "activity_launch"
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t["a6lw/v"]),
    sound: "activity_end"
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t.KaFxra),
    sound: "activity_user_join"
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t.S14z9v),
    sound: "activity_user_left"
  }, {
    useLabel: () => Chunk388032.intl.string(Chunk388032.t.CP3DCw),
    sound: "reconnect"
  }].map(e => ({
    node: (0, u.qs)("".concat(g.t.SOUNDS_LIST_ITEM_PREFIX).concat(e.sound), {
      useTitle: () => {
        let t = e.useLabel();
        return (0, r.jsxs)("div", {
          className: y.soundRow,
          children: [(0, r.jsx)("span", {
            children: t
          }), (0, r.jsx)(E, {
            sound: e.sound
          })]
        })
      },
      useValue: () => {
        var t;
        let n = (0, i.e7)([d.Z], () => d.Z.isSoundDisabled(e.sound)),
          r = null == (t = e.useDisabled) ? true : t.call(e);
        return !n && !r
      },
      setValue: t => {
        let n = d.Z.getDisabledSounds().filter(t => t !== e.sound);
        t || n.push(e.sound), s.default.setDisabledSounds(n)
      },
      useDisabled: () => {
        var t;
        let n = null == (t = e.useDisabled) ? true : t.call(e),
          r = (0, i.e7)([d.Z], () => d.Z.getDisableAllSounds());
        return n || r
      },
      useTooltip: e.useTooltip
    })
  })),
  N = (0, Chunk509613.qs)(Chunk869235.t.SELECTED_CHANNEL_NOTIFICATIONS, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.TzjwV1),
    useValue: () => (0, Chunk442837.e7)([Chunk292959.Z], () => Chunk292959.Z.getNotifyMessagesInSelectedChannel()),
    setValue: e => s.default.setNotifyMessagesInSelectedChannel(e)
  }),
  b = (0, Chunk509613.qs)(Chunk869235.t.DISABLE_ALL_NOTIFICATION_SOUNDS, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["2ZhCOT"]),
    useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["+B0XLC"]),
    useValue: () => (0, Chunk442837.e7)([Chunk292959.Z], () => Chunk292959.Z.getDisableAllSounds()),
    setValue: e => s.default.toggleDisableAllSounds(e)
  }),
  T = (0, Chunk509613.$l)(Chunk869235.t.NOTIFICATION_SOUNDS_LIST, {
    collapseAfter: 4,
    useCollapsibleTitle: (e, t) => e ? f.intl.formatToPlainString(f.t["0JYT9/"], {
      count: t
    }) : f.intl.formatToPlainString(f.t.ji1uNj, {
      count: t
    }),
    ContextProvider: function(e) {
      let {
        children: t
      } = e, n = l.useRef(null), i = l.useCallback((e, t) => {
        t.stopPropagation(), t.preventDefault(), null != n.current && n.current.stop(), n.current = (0, c.GN)(e)
      }, []);
      l.useEffect(() => () => {
        var e;
        null == (e = n.current) || e.stop()
      }, []);
      let o = l.useMemo(() => ({
        handlePreviewSound: i
      }), [i]);
      return (0, r.jsx)(v.Provider, {
        value: o,
        children: t
      })
    },
    getLayout: () => [O[0].node, N, O[1].node, b, ...O.slice(2).map(e => e.node)]
  })