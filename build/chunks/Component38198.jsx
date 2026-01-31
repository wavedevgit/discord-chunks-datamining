/** Chunk was on 17534 **/
/** chunk id: 38198, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
}), require("./591487.js"), require("./727858.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308368 = require("./308368.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk826673 = require("./826673.js"),
  Chunk970244 = require("./970244.jsx"),
  Chunk867455 = require("./867455.js"),
  Chunk780057 = require("./780057.js"),
  Chunk747926 = require("./747926.js"),
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
let C = RegExp("(.*)```(\\w+)\\n(.*)```(.*)", "s");

function S(e) {
  let {
    channel: t,
    options: S,
    onFileUpload: I,
    onClose: N,
    onSelect: T,
    draftType: P,
    editorTextContent: w,
    setValue: R,
    openClips: D
  } = e, {
    analyticsLocations: L
  } = (0, c.Ay)(), M = (0, d.s)({
    channel: t
  }), G = (0, i.bG)([p.A], () => p.A.isInProgress());

  function k() {
    (0, g.Tv)(t, true, "Plus Button")
  }

  function U() {
    f.default.track(_.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), R("/", (0, y.x7)("/"))
  }

  function V() {
    D()
  }

  function B() {
    (0, u.Dr)(s.M.POLLS_CHAT_INPUT_COACHMARK, {
      dismissAction: j.i.TAKE_ACTION
    }), (0, a.mMO)(async () => {
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
      modalKey: x.sm
    })
  }

  function H() {
    let e = w,
      n = "txt",
      r = "",
      l = w.match(C);
    null != l && (r = l[1], n = l[2], e = l[3], r += l[4]), (0, A.R)([(0, b.VE)(new Blob([e], {
      type: "text/plain"
    }), "message.".concat(n), "text/plain")], t, P), m._.dispatchToLastSubscribed(_.jej.CLEAR_TEXT), "" !== r && m._.dispatchToLastSubscribed(_.jej.INSERT_TEXT, {
      plainText: r
    })
  }
  return l.useEffect(() => {
    f.default.track(_.HAw.OPEN_POPOUT, {
      type: "Send Attachment",
      channel_id: t.id,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id]), (0, r.jsx)(a.W1t, {
    "data-menu-needs-migration": true,
    onSelect: T,
    navId: "channel-attach",
    onClose: N,
    "aria-label": v.intl.string(v.t.Xm41aV),
    className: E.MK,
    children: S.map(function(e) {
      switch (e.type) {
        case O.v.UPLOAD_A_FILE:
          return (0, r.jsx)(a.Drp, {
            id: "upload-file",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: I
          }, "upload-file");
        case O.v.UPLOAD_TEXT_AS_FILE:
          if ("" === w) return null;
          return (0, r.jsx)(a.Drp, {
            id: "upload-text-as-file",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: H
          }, "upload-text-as-file");
        case O.v.CLIPS:
          return (0, r.jsx)(a.Drp, {
            id: "clips",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            badge: null != e.badgeVal && e.badgeVal > 0 ? {
              text: e.badgeVal.toString()
            } : true,
            action: V
          }, "clips");
        case O.v.POLL:
          return (0, r.jsx)(a.Drp, {
            id: "poll",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: B
          }, "poll");
        case O.v.INVITE_TO_PLAY_GAME:
          return (0, r.jsx)(a.Drp, {
            id: "play",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: () => {
              var n;
              return n = e.activity, void o.A.sendActivityInvite({
                channelId: t.id,
                type: _.xL.JOIN,
                activity: n,
                location: L[L.length - 1]
              })
            }
          }, "play");
        case O.v.INVITE_TO_LISTEN:
          return (0, r.jsx)(a.Drp, {
            id: "listen",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: () => {
              var n;
              return n = e.activity, void o.A.sendActivityInvite({
                channelId: t.id,
                type: _.xL.LISTEN,
                activity: n,
                location: L[L.length - 1]
              })
            }
          }, "listen");
        case O.v.INVITE_TO_WATCH:
          return (0, r.jsx)(a.Drp, {
            id: "watch",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: () => {
              var n;
              return n = e.activity, void o.A.sendActivityInvite({
                channelId: t.id,
                type: _.xL.WATCH,
                activity: n,
                location: L[L.length - 1]
              })
            }
          }, "watch");
        case O.v.CREATE_THREAD:
          return (0, r.jsx)(a.Drp, {
            id: "THREAD",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: k
          }, "THREAD");
        case O.v.SLASH_COMMAND:
          return (0, r.jsx)(a.Drp, {
            id: "SLASH_COMMAND",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: U
          }, "SLASH_COMMAND");
        case O.v.SCHEDULED_MESSAGE:
          return (0, r.jsx)(a.Drp, {
            id: "scheduled_message",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: () => (0, d.e0)({
              channel: t
            }),
            children: M
          }, "scheduled_message");
        case O.v.SUMMARIZE_THREAD:
          return (0, r.jsx)(a.Drp, {
            id: "summarize_thread",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: () => h.A.summarizeThread(t),
            loading: G,
            disabled: G,
            children: G ? null : (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(a.Drp, {
                id: "summarize_thread_for_everyone",
                label: v.intl.string(v.t.eCzSdd),
                iconLeft: a.nFg,
                leadingAccessory: {
                  type: "icon",
                  icon: a.nFg
                },
                action: () => h.A.summarizeThread(t, false)
              }, "summarize_thread_for_everyone"), (0, r.jsx)(a.Drp, {
                id: "summarize_thread_for_me",
                label: v.intl.string(v.t["HOe+Hq"]),
                iconLeft: a.nys,
                leadingAccessory: {
                  type: "icon",
                  icon: a.nys
                },
                action: () => h.A.summarizeThread(t)
              }, "summarize_thread_for_me")]
            })
          }, "summarize_thread");
        default:
          return null
      }
    })
  })
}