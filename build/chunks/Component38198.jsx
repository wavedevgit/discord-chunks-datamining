/** Chunk was on 97492 **/
/** chunk id: 38198, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => L
}), require("./591487.js"), require("./727858.js"), require("./747238.js"), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308368 = require("./308368.js"),
  Chunk795816 = require("./795816.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk211401 = require("./211401.js"),
  Chunk500049 = require("./500049.js"),
  Chunk975412 = require("./975412.jsx"),
  Chunk826673 = require("./826673.js"),
  Chunk160761 = require("./160761.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk970244 = require("./970244.jsx"),
  Chunk867455 = require("./867455.js"),
  Chunk780057 = require("./780057.js"),
  Chunk747926 = require("./747926.js"),
  Chunk320501 = require("./320501.js"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk453771 = require("./453771.js"),
  Chunk518960 = require("./518960.js"),
  Chunk408018 = require("./408018.js"),
  Chunk447155 = require("./447155.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk412136 = require("./412136.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk545156 = require("./545156.js");
let D = RegExp("(.*)```(\\w+)\\n(.*)```(.*)", "s");

function M() {
  let e = (0, i.bG)([j.A], () => j.A.hasCurrentUserSentMessageSinceAppStart()),
    t = [];
  e && t.push(s.M.ACTIVITIES_CHAT_MENU_NEW_BADGE);
  let [n] = (0, m.DP)(t);
  return l.useEffect(() => () => {
    n === s.M.ACTIVITIES_CHAT_MENU_NEW_BADGE && (0, g.Dr)(s.M.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
      dismissAction: T.i.TAKE_ACTION
    })
  }, [n]), (0, r.jsx)(b.Ay, {
    contentTypes: t,
    children: e => {
      let {
        visibleContent: t
      } = e;
      return t === s.M.ACTIVITIES_CHAT_MENU_NEW_BADGE ? (0, r.jsx)(o.LpS, {
        text: w.intl.string(w.t.y2b7CA),
        color: a.A.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT.css
      }) : null
    }
  })
}

function L(e) {
  let {
    channel: t,
    chatInputType: a,
    options: m,
    onFileUpload: b,
    onClose: j,
    onSelect: L,
    draftType: k,
    editorTextContent: G,
    setValue: U,
    openClips: B
  } = e, {
    analyticsLocations: V,
    newestAnalyticsLocation: F
  } = (0, d.Ay)(), H = (0, A.s)({
    channel: t
  }), K = (0, i.bG)([_.A], () => _.A.isInProgress());

  function W() {
    (0, O.Tv)(t, true, "Plus Button")
  }

  function z() {
    v.default.track(N.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), U("/", (0, S.x7)("/"))
  }

  function Y() {
    B()
  }

  function q() {
    (0, g.Dr)(s.M.POLLS_CHAT_INPUT_COACHMARK, {
      dismissAction: T.i.TAKE_ACTION
    }), (0, o.mMO)(async () => {
      let {
        default: e
      } = await n.e("52786").then(n.bind(n, 489449));
      return n => {
        var l, i;
        return (0, r.jsx)(e, (l = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, n), i = i = {
          channel: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
        }), l))
      }
    }, {
      modalKey: P.sm
    })
  }

  function X() {
    v.default.track(N.HAw.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
      channel_type: t.type,
      channel_id: t.id,
      guild_id: t.guild_id
    }), (0, f.A)({
      context: null != t ? {
        type: "channel",
        channel: t
      } : {
        type: "contextless"
      },
      openInPopout: false,
      analyticsLocation: F
    }), (0, u.LV)({
      guildId: t.guild_id
    })
  }

  function J() {
    let e = G,
      n = "txt",
      r = "",
      l = G.match(D);
    null != l && (r = l[1], n = l[2], e = l[3], r += l[4]), (0, C.R)([(0, E.VE)(new Blob([e], {
      type: "text/plain"
    }), "message.".concat(n), "text/plain")], t, k), x._.dispatchToLastSubscribed(N.jej.CLEAR_TEXT), "" !== r && x._.dispatchToLastSubscribed(N.jej.INSERT_TEXT, {
      plainText: r
    })
  }
  return l.useEffect(() => {
    v.default.track(N.HAw.OPEN_POPOUT, {
      type: "Send Attachment",
      channel_id: t.id,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id]), (0, r.jsx)(o.W1t, {
    "data-menu-mixed": true,
    onSelect: L,
    navId: "channel-attach",
    onClose: j,
    "aria-label": w.intl.string(w.t.Xm41aV),
    className: R.MK,
    children: m.map(function(e) {
      let n = (0, r.jsxs)("div", {
        className: R.ed,
        children: [(0, r.jsx)(e.icon, {
          className: R.H9,
          color: "currentColor"
        }), (0, r.jsx)("div", {
          className: R.fS,
          children: e.display
        }), null != e.badgeVal && e.badgeVal > 0 && (0, r.jsx)(o.hVq, {
          className: R.qS,
          color: e.badgeColor,
          count: e.badgeVal
        })]
      });
      switch (e.type) {
        case I.v.UPLOAD_A_FILE:
          return (0, r.jsx)(o.Drp, {
            id: "upload-file",
            void_label: n,
            action: b
          }, "upload-file");
        case I.v.UPLOAD_TEXT_AS_FILE:
          if ("" === G) return null;
          return (0, r.jsx)(o.Drp, {
            id: "upload-text-as-file",
            void_label: n,
            action: J
          }, "upload-text-as-file");
        case I.v.CLIPS:
          return (0, r.jsx)(o.Drp, {
            id: "clips",
            void_label: n,
            action: Y
          }, "clips");
        case I.v.POLL:
          return (0, r.jsx)(o.Drp, {
            id: "poll",
            void_label: n,
            action: q
          }, "poll");
        case I.v.INVITE_TO_PLAY_GAME:
          return (0, r.jsx)(o.Drp, {
            id: "play",
            void_label: n,
            action: () => {
              var n;
              return n = e.activity, void c.A.sendActivityInvite({
                channelId: t.id,
                type: N.xL.JOIN,
                activity: n,
                location: V[V.length - 1]
              })
            }
          }, "play");
        case I.v.INVITE_TO_LISTEN:
          return (0, r.jsx)(o.Drp, {
            id: "listen",
            void_label: n,
            action: () => {
              var n;
              return n = e.activity, void c.A.sendActivityInvite({
                channelId: t.id,
                type: N.xL.LISTEN,
                activity: n,
                location: V[V.length - 1]
              })
            }
          }, "listen");
        case I.v.INVITE_TO_WATCH:
          return (0, r.jsx)(o.Drp, {
            id: "watch",
            void_label: n,
            action: () => {
              var n;
              return n = e.activity, void c.A.sendActivityInvite({
                channelId: t.id,
                type: N.xL.WATCH,
                activity: n,
                location: V[V.length - 1]
              })
            }
          }, "watch");
        case I.v.CREATE_THREAD:
          return (0, r.jsx)(o.Drp, {
            id: "THREAD",
            void_label: n,
            action: W
          }, "THREAD");
        case I.v.SLASH_COMMAND:
          return (0, r.jsx)(o.Drp, {
            id: "SLASH_COMMAND",
            void_label: n,
            action: z
          }, "SLASH_COMMAND");
        case I.v.APP_LAUNCHER:
          return (0, r.jsx)(o.Drp, {
            id: "APP_LAUNCHER",
            void_label: n,
            action: () => (0, p.R)(h.s4.TEXT, a, true, t.id)
          }, "APP_LAUNCHER");
        case I.v.ACTIVITY:
          return (0, r.jsx)(o.Drp, {
            id: "activity",
            void_label: n,
            action: X,
            hint: (0, r.jsx)(M, {})
          }, "activity");
        case I.v.SCHEDULED_MESSAGE:
          return (0, r.jsx)(o.Drp, {
            id: "scheduled_message",
            void_label: n,
            action: () => (0, A.e0)({
              channel: t
            }),
            children: H
          }, "scheduled_message");
        case I.v.SUMMARIZE_THREAD:
          return (0, r.jsx)(o.Drp, {
            id: "summarize_thread",
            void_label: n,
            action: () => y.A.summarizeThread(t),
            icon: K ? (0, r.jsx)(o.y$y, {
              type: o.tVU.PULSING_ELLIPSIS
            }) : null,
            disabled: K,
            children: K ? null : (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(o.Drp, {
                id: "summarize_thread_for_everyone",
                label: w.intl.string(w.t.eCzSdd),
                leadingAccessory: {
                  type: "icon",
                  icon: o.nFg
                },
                action: () => y.A.summarizeThread(t, false)
              }, "summarize_thread_for_everyone"), (0, r.jsx)(o.Drp, {
                id: "summarize_thread_for_me",
                label: w.intl.string(w.t["HOe+Hq"]),
                leadingAccessory: {
                  type: "icon",
                  icon: o.nys
                },
                action: () => y.A.summarizeThread(t)
              }, "summarize_thread_for_me")]
            })
          }, "summarize_thread");
        default:
          return null
      }
    })
  })
}