/** Chunk was on 88647 **/
/** chunk id: 193910, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk831209 = require("./831209.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk278323 = require("./278323.js"),
  Chunk566620 = require("./566620.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk397698 = require("./397698.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk706140 = require("./706140.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk618857 = require("./618857.jsx"),
  Chunk346479 = require("./346479.js"),
  Chunk286934 = require("./286934.js"),
  Chunk488131 = require("./488131.js"),
  Chunk375954 = require("./375954.js"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk403182 = require("./403182.js"),
  Chunk127654 = require("./127654.js"),
  Chunk752305 = require("./752305.js"),
  Chunk951211 = require("./951211.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk489887 = require("./489887.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk749723 = require("./749723.js");
let A = RegExp("(.*)```(\\w+)\\n(.*)```(.*)", "s");

function w() {
  let e = (0, Chunk442837.e7)([Chunk375954.Z], () => Chunk375954.Z.hasCurrentUserSentMessageSinceAppStart()),
    t = [];
  module && exports.push(Chunk704215.z.ACTIVITIES_CHAT_MENU_NEW_BADGE);
  let [n] = (0, Chunk706140.cv)(exports);
  return Chunk647438.useEffect(() => () => {
    require === Chunk704215.z.ACTIVITIES_CHAT_MENU_NEW_BADGE && (0, Chunk266454.Q3)(Chunk704215.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
      dismissAction: Chunk921944.L.TAKE_ACTION
    })
  }, [require]), (0, Chunk951288.jsx)(Chunk243778.ZP, {
    contentTypes: exports,
    children: e => {
      let {
        visibleContent: t
      } = e;
      return t === o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE ? (0, r.jsx)(s.IGR, {
        text: T.intl.string(T.t.y2b7CA),
        color: l.Z.BUTTON_DANGER_BACKGROUND
      }) : null
    }
  })
}

function M(e) {
  let {
    channel: t,
    options: h,
    onFileUpload: m,
    onClose: C,
    onSelect: M,
    draftType: R,
    editorTextContent: D,
    setValue: k,
    openClips: L
  } = e, {
    analyticsLocations: U,
    newestAnalyticsLocation: B
  } = (0, d.ZP)(), V = (0, g.Dt)({
    channel: t
  }), F = (0, a.e7)([_.Z], () => _.Z.isInProgress());

  function H() {
    (0, y.R6)(t, true, "Plus Button")
  }

  function G() {
    v.default.track(P.rMx.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), k("/", (0, j.JM)("/"))
  }

  function W() {
    L()
  }

  function z() {
    (0, f.Q3)(o.z.POLLS_CHAT_INPUT_COACHMARK, {
      dismissAction: I.L.TAKE_ACTION
    }), (0, s.ZDy)(async () => {
      let {
        default: e
      } = await n.e("68784").then(n.bind(n, 611611));
      return n => {
        var i, l;
        return (0, r.jsx)(e, (i = function(e) {
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
        }({}, n), l = l = {
          channel: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
        }), i))
      }
    }, {
      modalKey: Z.$z
    })
  }

  function q() {
    v.default.track(P.rMx.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
      channel_type: t.type,
      channel_id: t.id,
      guild_id: t.guild_id
    }), (0, p.Z)({
      context: null != t ? {
        type: "channel",
        channel: t
      } : {
        type: "contextless"
      },
      openInPopout: false,
      analyticsLocation: B
    }), (0, u.w1)({
      guildId: t.guild_id
    })
  }

  function Y() {
    let e = D,
      n = "txt",
      r = "",
      i = D.match(A);
    null != i && (r = i[1], n = i[2], e = i[3], r += i[4]), (0, E.d)([(0, x.dp)(new Blob([e], {
      type: "text/plain"
    }), "message.".concat(n), "text/plain")], t, R), O.S.dispatchToLastSubscribed(P.CkL.CLEAR_TEXT), "" !== r && O.S.dispatchToLastSubscribed(P.CkL.INSERT_TEXT, {
      plainText: r
    })
  }
  return i.useEffect(() => {
    v.default.track(P.rMx.OPEN_POPOUT, {
      type: "Send Attachment",
      channel_id: t.id,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id]), (0, r.jsx)(s.v2r, {
    onSelect: M,
    navId: "channel-attach",
    onClose: C,
    "aria-label": T.intl.string(T.t.Xm41aV),
    className: N.menu,
    children: h.map(function(e) {
      var n;
      let i = (0, r.jsxs)("div", {
        className: N.optionLabel,
        children: [(0, r.jsx)(e.icon, {
          className: N.optionIcon,
          color: "currentColor"
        }), (0, r.jsx)("div", {
          className: N.optionName,
          children: e.display
        }), null != e.badgeVal && e.badgeVal > 0 && (0, r.jsx)(s.mAB, {
          className: N.badge,
          color: null != (n = e.badgeColor) ? n : l.Z.STATUS_DANGER,
          count: e.badgeVal
        })]
      });
      switch (e.type) {
        case S.r.UPLOAD_A_FILE:
          return (0, r.jsx)(s.sNh, {
            id: "upload-file",
            label: i,
            action: m
          }, "upload-file");
        case S.r.UPLOAD_TEXT_AS_FILE:
          if ("" === D) return null;
          return (0, r.jsx)(s.sNh, {
            id: "upload-text-as-file",
            label: i,
            action: Y
          }, "upload-text-as-file");
        case S.r.CLIPS:
          return (0, r.jsx)(s.sNh, {
            id: "clips",
            label: i,
            action: W
          }, "clips");
        case S.r.POLL:
          return (0, r.jsx)(s.sNh, {
            id: "poll",
            label: i,
            action: z
          }, "poll");
        case S.r.INVITE_TO_PLAY_GAME:
          return (0, r.jsx)(s.sNh, {
            id: "play",
            label: i,
            action: () => {
              var n;
              return n = e.activity, void c.Z.sendActivityInvite({
                channelId: t.id,
                type: P.mFx.JOIN,
                activity: n,
                location: U[U.length - 1]
              })
            }
          }, "play");
        case S.r.INVITE_TO_LISTEN:
          return (0, r.jsx)(s.sNh, {
            id: "listen",
            label: i,
            action: () => {
              var n;
              return n = e.activity, void c.Z.sendActivityInvite({
                channelId: t.id,
                type: P.mFx.LISTEN,
                activity: n,
                location: U[U.length - 1]
              })
            }
          }, "listen");
        case S.r.INVITE_TO_WATCH:
          return (0, r.jsx)(s.sNh, {
            id: "watch",
            label: i,
            action: () => {
              var n;
              return n = e.activity, void c.Z.sendActivityInvite({
                channelId: t.id,
                type: P.mFx.WATCH,
                activity: n,
                location: U[U.length - 1]
              })
            }
          }, "watch");
        case S.r.CREATE_THREAD:
          return (0, r.jsx)(s.sNh, {
            id: "THREAD",
            label: i,
            action: H
          }, "THREAD");
        case S.r.SLASH_COMMAND:
          return (0, r.jsx)(s.sNh, {
            id: "SLASH_COMMAND",
            label: i,
            action: G
          }, "SLASH_COMMAND");
        case S.r.ACTIVITY:
          return (0, r.jsx)(s.sNh, {
            id: "activity",
            label: i,
            action: q,
            hint: (0, r.jsx)(w, {})
          }, "activity");
        case S.r.SCHEDULED_MESSAGE:
          return (0, r.jsx)(s.sNh, {
            id: "scheduled_message",
            label: i,
            action: () => (0, g.$f)({
              channel: t
            }),
            children: V
          }, "scheduled_message");
        case S.r.SUMMARIZE_THREAD:
          return (0, r.jsx)(s.sNh, {
            id: "summarize_thread",
            label: i,
            action: () => b.Z.summarizeThread(t),
            icon: F ? (0, r.jsx)(s.$jN, {
              type: s.RAz.PULSING_ELLIPSIS
            }) : null,
            disabled: F,
            children: F ? null : (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(s.sNh, {
                id: "summarize_thread_for_everyone",
                label: T.intl.string(T.t.eCzSdd),
                iconLeft: s.BFJ,
                action: () => b.Z.summarizeThread(t, false)
              }, "summarize_thread_for_everyone"), (0, r.jsx)(s.sNh, {
                id: "summarize_thread_for_me",
                label: T.intl.string(T.t["HOe+Hq"]),
                iconLeft: s.tBG,
                action: () => b.Z.summarizeThread(t)
              }, "summarize_thread_for_me")]
            })
          }, "summarize_thread");
        default:
          return null
      }
    })
  })
}