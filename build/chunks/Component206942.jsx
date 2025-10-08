/** Chunk was on 9452 **/
/** chunk id: 206942, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  ZP: () => S
}), require("./415506.js"), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js");
require("./481060.js");
var Chunk292556 = require("./292556.js"),
  Chunk734934 = require("./734934.js"),
  Chunk509613 = require("./509613.js"),
  Chunk460181 = require("./460181.js"),
  Chunk292959 = require("./292959.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
require("./453934.js");
let T = Chunk647438.createContext(true),
  I = [{
    useLabel: () => Chunk388032.intl.string(Chunk388032.t.jD1qzM),
    sound: "message1",
    useDisabled: Chunk734934.p,
    useDisabledMessage: () => (0, Chunk734934.p)() ? Chunk388032.intl.string(Chunk388032.t.cIRG0t) : true
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
  }].map(t => ({
    node: (0, a.qs)("".concat(E.n.SOUNDS_LIST_ITEM_PREFIX).concat(t.sound), {
      useTitle: t.useLabel,
      useSubtitle: () => d.intl.format(d.t.OOiGCA, {
        onClick: () => {
          (0, o.GN)(t.sound)
        }
      }),
      useValue: () => {
        var e;
        let n = (0, u.e7)([c.Z], () => c.Z.isSoundDisabled(t.sound)),
          i = null == (e = t.useDisabled) ? true : e.call(t);
        return !n && !i
      },
      setValue: e => {
        let n = c.Z.getDisabledSounds().filter(e => e !== t.sound);
        e || n.push(t.sound), r.default.setDisabledSounds(n)
      },
      useDisabled: () => {
        var e;
        let n = null == (e = t.useDisabled) ? true : e.call(t),
          i = (0, u.e7)([c.Z], () => c.Z.getDisableAllSounds());
        return n || i
      },
      useDisabledMessage: t.useDisabledMessage
    })
  })),
  O = (0, Chunk509613.qs)(Chunk313789.n.SELECTED_CHANNEL_NOTIFICATIONS, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t.TzjwV1),
    useValue: () => (0, Chunk442837.e7)([Chunk292959.Z], () => Chunk292959.Z.getNotifyMessagesInSelectedChannel()),
    setValue: t => r.default.setNotifyMessagesInSelectedChannel(t)
  }),
  A = (0, Chunk509613.qs)(Chunk313789.n.DISABLE_ALL_NOTIFICATION_SOUNDS, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["2ZhCOT"]),
    useSubtitle: () => Chunk388032.intl.string(Chunk388032.t["+B0XLC"]),
    useValue: () => (0, Chunk442837.e7)([Chunk292959.Z], () => Chunk292959.Z.getDisableAllSounds()),
    setValue: t => r.default.toggleDisableAllSounds(t)
  }),
  S = (0, Chunk509613.$l)(Chunk313789.n.NOTIFICATION_SOUNDS_LIST, {
    collapseAfter: 4,
    useCollapsibleTitle: (t, e) => t ? d.intl.formatToPlainString(d.t["0JYT9/"], {
      count: e
    }) : d.intl.formatToPlainString(d.t.ji1uNj, {
      count: e
    }),
    ContextProvider: function(t) {
      let {
        children: e
      } = t, n = l.useRef(null), u = l.useCallback((t, e) => {
        e.stopPropagation(), e.preventDefault(), null != n.current && n.current.stop(), n.current = (0, o.GN)(t)
      }, []);
      l.useEffect(() => () => {
        var t;
        null == (t = n.current) || t.stop()
      }, []);
      let r = l.useMemo(() => ({
        handlePreviewSound: u
      }), [u]);
      return (0, i.jsx)(T.Provider, {
        value: r,
        children: e
      })
    },
    buildLayout: () => [I[0].node, O, I[1].node, A, ...I.slice(2).map(t => t.node)]
  })