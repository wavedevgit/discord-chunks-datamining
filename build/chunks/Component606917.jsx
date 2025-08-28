/** Chunk was on 47129 **/
/** chunk id: 606917, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => A
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
  Chunk745734 = require("./745734.js");
let g = Chunk647438.createContext(true);

function f(e) {
  let {
    sound: t
  } = e, {
    handlePreviewSound: n
  } = function() {
    let e = r.useContext(g);
    if (null == e) throw Error("useSoundPlayback must be used within a SoundPlaybackProvider");
    return e
  }();
  return (0, i.jsx)(o.P3F, {
    className: N.soundIcon,
    onClick: e => n(t, e),
    "aria-label": E.intl.string(E.t.Kd4uxM),
    children: (0, i.jsx)(o.gj8, {
      size: "xs",
      color: "currentColor",
      className: N.icon,
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
    node: (0, u.qs)("".concat(_.t.SOUNDS_LIST_ITEM_PREFIX).concat(e.sound), {
      useTitle: () => {
        let t = e.useLabel();
        return (0, i.jsxs)("div", {
          className: N.soundRow,
          children: [(0, i.jsx)("span", {
            children: t
          }), (0, i.jsx)(f, {
            sound: e.sound
          })]
        })
      },
      useValue: () => {
        var t;
        let n = (0, l.e7)([d.Z], () => d.Z.isSoundDisabled(e.sound)),
          i = null == (t = e.useDisabled) ? true : t.call(e);
        return !n && !i
      },
      setValue: t => {
        let n = d.Z.getDisabledSounds().filter(t => t !== e.sound);
        t || n.push(e.sound), a.default.setDisabledSounds(n)
      },
      useDisabled: () => {
        var t;
        let n = null == (t = e.useDisabled) ? true : t.call(e),
          i = (0, l.e7)([d.Z], () => d.Z.getDisableAllSounds());
        return n || i
      },
      useTooltip: e.useTooltip
    })
  })),
  I = (0, Chunk509613.qs)(Chunk869235.t.SELECTED_CHANNEL_NOTIFICATIONS, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.TzjwV1),
    useValue: () => (0, Chunk442837.e7)([Chunk292959.Z], () => Chunk292959.Z.getNotifyMessagesInSelectedChannel()),
    setValue: e => a.default.setNotifyMessagesInSelectedChannel(e)
  }),
  T = (0, Chunk509613.qs)(Chunk869235.t.DISABLE_ALL_NOTIFICATION_SOUNDS, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["2ZhCOT"]),
    useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["+B0XLC"]),
    useValue: () => (0, Chunk442837.e7)([Chunk292959.Z], () => Chunk292959.Z.getDisableAllSounds()),
    setValue: e => a.default.toggleDisableAllSounds(e)
  }),
  A = (0, Chunk509613.$l)(Chunk869235.t.NOTIFICATION_SOUNDS_LIST, {
    collapseAfter: 4,
    useCollapsibleTitle: (e, t) => e ? E.intl.formatToPlainString(E.t["0JYT9/"], {
      count: t
    }) : E.intl.formatToPlainString(E.t.ji1uNj, {
      count: t
    }),
    ContextProvider: function(e) {
      let {
        children: t
      } = e, n = r.useRef(null), l = r.useCallback((e, t) => {
        t.stopPropagation(), t.preventDefault(), null != n.current && n.current.stop(), n.current = (0, c.GN)(e)
      }, []);
      r.useEffect(() => () => {
        var e;
        null == (e = n.current) || e.stop()
      }, []);
      let o = r.useMemo(() => ({
        handlePreviewSound: l
      }), [l]);
      return (0, i.jsx)(g.Provider, {
        value: o,
        children: t
      })
    },
    getLayout: () => [O[0].node, I, O[1].node, T, ...O.slice(2).map(e => e.node)]
  })