/** Chunk was on 71264 **/
/** chunk id: 193910, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk831209 = require("./831209.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk278323 = require("./278323.js"),
  Chunk566620 = require("./566620.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk499254 = require("./499254.js"),
  Chunk827498 = require("./827498.js"),
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
  Chunk878066 = require("./878066.js");
let M = RegExp("(.*)```(\\w+)\\n(.*)```(.*)", "s");

function R() {
  let e = (0, Chunk442837.e7)([Chunk375954.Z], () => Chunk375954.Z.hasCurrentUserSentMessageSinceAppStart()),
    t = [];
  module && exports.push(Chunk704215.z.ACTIVITIES_CHAT_MENU_NEW_BADGE);
  let [n] = (0, Chunk706140.cv)(exports);
  return Chunk473749.useEffect(() => () => {
    require === Chunk704215.z.ACTIVITIES_CHAT_MENU_NEW_BADGE && (0, Chunk266454.Q3)(Chunk704215.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
      dismissAction: Chunk921944.L.TAKE_ACTION
    })
  }, [require]), (0, Chunk54381.jsx)(Chunk243778.ZP, {
    contentTypes: exports,
    children: e => {
      let {
        visibleContent: t
      } = e;
      return t === o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE ? (0, i.jsx)(s.IGR, {
        text: A.intl.string(A.t.y2b7CA),
        color: l.Z.BUTTON_DANGER_BACKGROUND
      }) : null
    }
  })
}

function L(e) {
  let {
    channel: t,
    chatInputType: g,
    options: b,
    onFileUpload: x,
    onClose: L,
    onSelect: k,
    draftType: D,
    editorTextContent: U,
    setValue: B,
    openClips: H
  } = e, {
    analyticsLocations: F,
    newestAnalyticsLocation: V
  } = (0, d.ZP)(), G = (0, y.Dt)({
    channel: t
  }), z = (0, a.e7)([v.Z], () => v.Z.isInProgress());

  function W() {
    (0, _.R6)(t, true, "Plus Button")
  }

  function q() {
    j.default.track(Z.rMx.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), B("/", (0, P.JM)("/"))
  }

  function K() {
    H()
  }

  function Y() {
    (0, m.Q3)(o.z.POLLS_CHAT_INPUT_COACHMARK, {
      dismissAction: T.L.TAKE_ACTION
    }), (0, s.ZDy)(async () => {
      let {
        default: e
      } = await n.e("68784").then(n.bind(n, 611611));
      return n => {
        var r, l;
        return (0, i.jsx)(e, (r = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({}, n), l = l = {
          channel: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
        }), r))
      }
    }, {
      modalKey: N.$z
    })
  }

  function X() {
    j.default.track(Z.rMx.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
      channel_type: t.type,
      channel_id: t.id,
      guild_id: t.guild_id
    }), (0, f.Z)({
      context: null != t ? {
        type: "channel",
        channel: t
      } : {
        type: "contextless"
      },
      openInPopout: false,
      analyticsLocation: V
    }), (0, u.w1)({
      guildId: t.guild_id
    })
  }

  function J() {
    let e = U,
      n = "txt",
      i = "",
      r = U.match(M);
    null != r && (i = r[1], n = r[2], e = r[3], i += r[4]), (0, S.d)([(0, E.dp)(new Blob([e], {
      type: "text/plain"
    }), "message.".concat(n), "text/plain")], t, D), O.S.dispatchToLastSubscribed(Z.CkL.CLEAR_TEXT), "" !== i && O.S.dispatchToLastSubscribed(Z.CkL.INSERT_TEXT, {
      plainText: i
    })
  }
  return r.useEffect(() => {
    j.default.track(Z.rMx.OPEN_POPOUT, {
      type: "Send Attachment",
      channel_id: t.id,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id]), (0, i.jsx)(s.v2r, {
    onSelect: k,
    navId: "channel-attach",
    onClose: L,
    "aria-label": A.intl.string(A.t.Xm41aV),
    className: w.menu,
    children: b.map(function(e) {
      var n;
      let r = (0, i.jsxs)("div", {
        className: w.optionLabel,
        children: [(0, i.jsx)(e.icon, {
          className: w.optionIcon,
          color: "currentColor"
        }), (0, i.jsx)("div", {
          className: w.optionName,
          children: e.display
        }), null != e.badgeVal && e.badgeVal > 0 && (0, i.jsx)(s.mAB, {
          className: w.badge,
          color: null != (n = e.badgeColor) ? n : l.Z.STATUS_DANGER,
          count: e.badgeVal
        })]
      });
      switch (e.type) {
        case I.r.UPLOAD_A_FILE:
          return (0, i.jsx)(s.sNh, {
            id: "upload-file",
            label: r,
            action: x
          }, "upload-file");
        case I.r.UPLOAD_TEXT_AS_FILE:
          if ("" === U) return null;
          return (0, i.jsx)(s.sNh, {
            id: "upload-text-as-file",
            label: r,
            action: J
          }, "upload-text-as-file");
        case I.r.CLIPS:
          return (0, i.jsx)(s.sNh, {
            id: "clips",
            label: r,
            action: K
          }, "clips");
        case I.r.POLL:
          return (0, i.jsx)(s.sNh, {
            id: "poll",
            label: r,
            action: Y
          }, "poll");
        case I.r.INVITE_TO_PLAY_GAME:
          return (0, i.jsx)(s.sNh, {
            id: "play",
            label: r,
            action: () => {
              var n;
              return n = e.activity, void c.Z.sendActivityInvite({
                channelId: t.id,
                type: Z.mFx.JOIN,
                activity: n,
                location: F[F.length - 1]
              })
            }
          }, "play");
        case I.r.INVITE_TO_LISTEN:
          return (0, i.jsx)(s.sNh, {
            id: "listen",
            label: r,
            action: () => {
              var n;
              return n = e.activity, void c.Z.sendActivityInvite({
                channelId: t.id,
                type: Z.mFx.LISTEN,
                activity: n,
                location: F[F.length - 1]
              })
            }
          }, "listen");
        case I.r.INVITE_TO_WATCH:
          return (0, i.jsx)(s.sNh, {
            id: "watch",
            label: r,
            action: () => {
              var n;
              return n = e.activity, void c.Z.sendActivityInvite({
                channelId: t.id,
                type: Z.mFx.WATCH,
                activity: n,
                location: F[F.length - 1]
              })
            }
          }, "watch");
        case I.r.CREATE_THREAD:
          return (0, i.jsx)(s.sNh, {
            id: "THREAD",
            label: r,
            action: W
          }, "THREAD");
        case I.r.SLASH_COMMAND:
          return (0, i.jsx)(s.sNh, {
            id: "SLASH_COMMAND",
            label: r,
            action: q
          }, "SLASH_COMMAND");
        case I.r.APP_LAUNCHER:
          return (0, i.jsx)(s.sNh, {
            id: "APP_LAUNCHER",
            label: r,
            action: () => (0, p._)(h._b.TEXT, g)
          }, "APP_LAUNCHER");
        case I.r.ACTIVITY:
          return (0, i.jsx)(s.sNh, {
            id: "activity",
            label: r,
            action: X,
            hint: (0, i.jsx)(R, {})
          }, "activity");
        case I.r.SCHEDULED_MESSAGE:
          return (0, i.jsx)(s.sNh, {
            id: "scheduled_message",
            label: r,
            action: () => (0, y.$f)({
              channel: t
            }),
            children: G
          }, "scheduled_message");
        case I.r.SUMMARIZE_THREAD:
          return (0, i.jsx)(s.sNh, {
            id: "summarize_thread",
            label: r,
            action: () => C.Z.summarizeThread(t),
            icon: z ? (0, i.jsx)(s.$jN, {
              type: s.RAz.PULSING_ELLIPSIS
            }) : null,
            disabled: z,
            children: z ? null : (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(s.sNh, {
                id: "summarize_thread_for_everyone",
                label: A.intl.string(A.t.eCzSdd),
                iconLeft: s.BFJ,
                action: () => C.Z.summarizeThread(t, false)
              }, "summarize_thread_for_everyone"), (0, i.jsx)(s.sNh, {
                id: "summarize_thread_for_me",
                label: A.intl.string(A.t["HOe+Hq"]),
                iconLeft: s.tBG,
                action: () => C.Z.summarizeThread(t)
              }, "summarize_thread_for_me")]
            })
          }, "summarize_thread");
        default:
          return null
      }
    })
  })
}