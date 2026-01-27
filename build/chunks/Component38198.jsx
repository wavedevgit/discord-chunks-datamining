/** Chunk was on 77870 **/
/** chunk id: 38198, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => P
}), require("./591487.js"), require("./727858.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308368 = require("./308368.js"),
  Chunk795816 = require("./795816.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk211401 = require("./211401.js"),
  Chunk500049 = require("./500049.js"),
  Chunk975412 = require("./975412.jsx"),
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
let T = RegExp("(.*)```(\\w+)\\n(.*)```(.*)", "s");

function P(e) {
  let {
    channel: t,
    chatInputType: P,
    options: w,
    onFileUpload: R,
    onClose: D,
    onSelect: M,
    draftType: L,
    editorTextContent: k,
    setValue: G,
    openClips: U
  } = e, {
    analyticsLocations: B,
    newestAnalyticsLocation: V
  } = (0, u.Ay)(), F = (0, g.s)({
    channel: t
  }), H = (0, i.bG)([b.A], () => b.A.isInProgress());

  function K() {
    (0, A.Tv)(t, true, "Plus Button")
  }

  function W() {
    y.default.track(E.HAw.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), G("/", (0, v.x7)("/"))
  }

  function z() {
    U()
  }

  function Y() {
    (0, f.Dr)(s.M.POLLS_CHAT_INPUT_COACHMARK, {
      dismissAction: C.i.TAKE_ACTION
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
      modalKey: S.sm
    })
  }

  function q() {
    y.default.track(E.HAw.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
      channel_type: t.type,
      channel_id: t.id,
      guild_id: t.guild_id
    }), (0, h.A)({
      context: null != t ? {
        type: "channel",
        channel: t
      } : {
        type: "contextless"
      },
      openInPopout: false,
      analyticsLocation: V
    }), (0, c.LV)({
      guildId: t.guild_id
    })
  }

  function X() {
    let e = k,
      n = "txt",
      r = "",
      l = k.match(T);
    null != l && (r = l[1], n = l[2], e = l[3], r += l[4]), (0, j.R)([(0, O.VE)(new Blob([e], {
      type: "text/plain"
    }), "message.".concat(n), "text/plain")], t, L), _._.dispatchToLastSubscribed(E.jej.CLEAR_TEXT), "" !== r && _._.dispatchToLastSubscribed(E.jej.INSERT_TEXT, {
      plainText: r
    })
  }
  return l.useEffect(() => {
    y.default.track(E.HAw.OPEN_POPOUT, {
      type: "Send Attachment",
      channel_id: t.id,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id]), (0, r.jsx)(a.W1t, {
    "data-menu-needs-migration": true,
    onSelect: M,
    navId: "channel-attach",
    onClose: D,
    "aria-label": I.intl.string(I.t.Xm41aV),
    className: N.MK,
    children: w.map(function(e) {
      switch (e.type) {
        case x.v.UPLOAD_A_FILE:
          return (0, r.jsx)(a.Drp, {
            id: "upload-file",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: R
          }, "upload-file");
        case x.v.UPLOAD_TEXT_AS_FILE:
          if ("" === k) return null;
          return (0, r.jsx)(a.Drp, {
            id: "upload-text-as-file",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: X
          }, "upload-text-as-file");
        case x.v.CLIPS:
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
            action: z
          }, "clips");
        case x.v.POLL:
          return (0, r.jsx)(a.Drp, {
            id: "poll",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: Y
          }, "poll");
        case x.v.INVITE_TO_PLAY_GAME:
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
                type: E.xL.JOIN,
                activity: n,
                location: B[B.length - 1]
              })
            }
          }, "play");
        case x.v.INVITE_TO_LISTEN:
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
                type: E.xL.LISTEN,
                activity: n,
                location: B[B.length - 1]
              })
            }
          }, "listen");
        case x.v.INVITE_TO_WATCH:
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
                type: E.xL.WATCH,
                activity: n,
                location: B[B.length - 1]
              })
            }
          }, "watch");
        case x.v.CREATE_THREAD:
          return (0, r.jsx)(a.Drp, {
            id: "THREAD",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: K
          }, "THREAD");
        case x.v.SLASH_COMMAND:
          return (0, r.jsx)(a.Drp, {
            id: "SLASH_COMMAND",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: W
          }, "SLASH_COMMAND");
        case x.v.APP_LAUNCHER:
          return (0, r.jsx)(a.Drp, {
            id: "APP_LAUNCHER",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: () => (0, d.R)(p.s4.TEXT, P, true, t.id)
          }, "APP_LAUNCHER");
        case x.v.ACTIVITY:
          return (0, r.jsx)(a.Drp, {
            id: "activity",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: q
          }, "activity");
        case x.v.SCHEDULED_MESSAGE:
          return (0, r.jsx)(a.Drp, {
            id: "scheduled_message",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: () => (0, g.e0)({
              channel: t
            }),
            children: F
          }, "scheduled_message");
        case x.v.SUMMARIZE_THREAD:
          return (0, r.jsx)(a.Drp, {
            id: "summarize_thread",
            label: e.display,
            iconLeft: e.icon,
            leadingAccessory: {
              type: "icon",
              icon: e.icon
            },
            action: () => m.A.summarizeThread(t),
            loading: H,
            disabled: H,
            children: H ? null : (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(a.Drp, {
                id: "summarize_thread_for_everyone",
                label: I.intl.string(I.t.eCzSdd),
                iconLeft: a.nFg,
                leadingAccessory: {
                  type: "icon",
                  icon: a.nFg
                },
                action: () => m.A.summarizeThread(t, false)
              }, "summarize_thread_for_everyone"), (0, r.jsx)(a.Drp, {
                id: "summarize_thread_for_me",
                label: I.intl.string(I.t["HOe+Hq"]),
                iconLeft: a.nys,
                leadingAccessory: {
                  type: "icon",
                  icon: a.nys
                },
                action: () => m.A.summarizeThread(t)
              }, "summarize_thread_for_me")]
            })
          }, "summarize_thread");
        default:
          return null
      }
    })
  })
}