/** Chunk was on 17869 **/
/** chunk id: 38198, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
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
let x = RegExp("(.*)```(\\w+)\\n(.*)```(.*)", "s");

function j(e) {
  let {
    channel: t,
    options: j,
    onFileUpload: I,
    onClose: T,
    onSelect: N,
    draftType: P,
    editorTextContent: w,
    setValue: R,
    openClips: D
  } = e, {
    analyticsLocations: M
  } = (0, c.Ay)(), L = (0, d.s)({
    channel: t
  }), k = (0, i.bG)([p.A], () => p.A.isInProgress());

  function U() {
    (0, f.Tv)(t, true, "Plus Button")
  }

  function G() {
    m.default.track(E.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), R("/", (0, _.x7)("/"))
  }

  function F() {
    D()
  }

  function H() {
    (0, u.Dr)(a.M.POLLS_CHAT_INPUT_COACHMARK, {
      dismissAction: v.i.TAKE_ACTION
    }), (0, s.mMO)(async () => {
      let {
        default: e
      } = await n.e("52786").then(n.bind(n, 489449));
      return n => {
        var r, i;
        return (0, l.jsx)(e, (r = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
              var l;
              l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = l
            })
          }
          return e
        }({}, n), i = i = {
          channel: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
        }), r))
      }
    }, {
      modalKey: O.sm
    })
  }

  function B() {
    let e = w,
      n = "txt",
      l = "",
      r = w.match(x);
    null != r && (l = r[1], n = r[2], e = r[3], l += r[4]), (0, b.R)([(0, A.VE)(new Blob([e], {
      type: "text/plain"
    }), "message.".concat(n), "text/plain")], t, P), g._.dispatchToLastSubscribed(E.jej.CLEAR_TEXT), "" !== l && g._.dispatchToLastSubscribed(E.jej.INSERT_TEXT, {
      plainText: l
    })
  }
  return r.useEffect(() => {
    m.default.track(E.HAw.OPEN_POPOUT, {
      type: "Send Attachment",
      channel_id: t.id,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id]), (0, l.jsx)(s.W1t, {
    "data-menu-needs-migration": true,
    onSelect: N,
    navId: "channel-attach",
    onClose: T,
    "aria-label": C.intl.string(C.t.Xm41aV),
    className: S.MK,
    children: j.map(function(e) {
      switch (e.type) {
        case y.v.UPLOAD_A_FILE:
          return (0, l.jsx)(s.Drp, {
            id: "upload-file",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: I
          }, "upload-file");
        case y.v.UPLOAD_TEXT_AS_FILE:
          if ("" === w) return null;
          return (0, l.jsx)(s.Drp, {
            id: "upload-text-as-file",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: B
          }, "upload-text-as-file");
        case y.v.CLIPS:
          return (0, l.jsx)(s.Drp, {
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
            action: F
          }, "clips");
        case y.v.POLL:
          return (0, l.jsx)(s.Drp, {
            id: "poll",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: H
          }, "poll");
        case y.v.INVITE_TO_PLAY_GAME:
          return (0, l.jsx)(s.Drp, {
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
                type: E.xL.JOIN,
                activity: n,
                location: M[M.length - 1]
              })
            }
          }, "play");
        case y.v.INVITE_TO_LISTEN:
          return (0, l.jsx)(s.Drp, {
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
                type: E.xL.LISTEN,
                activity: n,
                location: M[M.length - 1]
              })
            }
          }, "listen");
        case y.v.INVITE_TO_WATCH:
          return (0, l.jsx)(s.Drp, {
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
                type: E.xL.WATCH,
                activity: n,
                location: M[M.length - 1]
              })
            }
          }, "watch");
        case y.v.CREATE_THREAD:
          return (0, l.jsx)(s.Drp, {
            id: "THREAD",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: U
          }, "THREAD");
        case y.v.SLASH_COMMAND:
          return (0, l.jsx)(s.Drp, {
            id: "SLASH_COMMAND",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: G
          }, "SLASH_COMMAND");
        case y.v.SCHEDULED_MESSAGE:
          return (0, l.jsx)(s.Drp, {
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
            children: L
          }, "scheduled_message");
        case y.v.SUMMARIZE_THREAD:
          return (0, l.jsx)(s.Drp, {
            id: "summarize_thread",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: () => h.A.summarizeThread(t),
            loading: k,
            disabled: k,
            children: k ? null : (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(s.Drp, {
                id: "summarize_thread_for_everyone",
                label: C.intl.string(C.t.eCzSdd),
                iconLeft: s.nFg,
                leadingAccessory: {
                  type: "icon",
                  icon: s.nFg
                },
                action: () => h.A.summarizeThread(t, false)
              }, "summarize_thread_for_everyone"), (0, l.jsx)(s.Drp, {
                id: "summarize_thread_for_me",
                label: C.intl.string(C.t["HOe+Hq"]),
                iconLeft: s.nys,
                leadingAccessory: {
                  type: "icon",
                  icon: s.nys
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