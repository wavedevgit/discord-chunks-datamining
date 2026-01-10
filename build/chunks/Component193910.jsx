/** Chunk was on 81985 **/
/** chunk id: 193910, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
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
  Chunk688169 = require("./688169.js");
let R = RegExp("(.*)```(\\w+)\\n(.*)```(.*)", "s");

function D() {
  let e = (0, l.e7)([x.Z], () => x.Z.hasCurrentUserSentMessageSinceAppStart()),
    t = [];
  e && t.push(a.z.ACTIVITIES_CHAT_MENU_NEW_BADGE);
  let [n] = (0, m.cv)(t);
  return i.useEffect(() => () => {
    n === a.z.ACTIVITIES_CHAT_MENU_NEW_BADGE && (0, g.Q3)(a.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
      dismissAction: N.L.TAKE_ACTION
    })
  }, [n]), (0, r.jsx)(b.ZP, {
    contentTypes: t,
    children: e => {
      let {
        visibleContent: t
      } = e;
      return t === a.z.ACTIVITIES_CHAT_MENU_NEW_BADGE ? (0, r.jsx)(s.IGR, {
        text: A.intl.string(A.t.y2b7CA),
        color: o.Z.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT.css
      }) : null
    }
  })
}

function M(e) {
  let {
    channel: t,
    chatInputType: m,
    options: b,
    onFileUpload: x,
    onClose: M,
    onSelect: k,
    draftType: L,
    editorTextContent: U,
    setValue: G,
    openClips: B
  } = e, {
    analyticsLocations: F,
    newestAnalyticsLocation: H
  } = (0, d.ZP)(), V = (0, y.Dt)({
    channel: t
  }), z = (0, l.e7)([O.Z], () => O.Z.isInProgress());

  function W() {
    (0, j.R6)(t, true, "Plus Button")
  }

  function K() {
    C.default.track(Z.rMx.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), G("/", (0, I.JM)("/"))
  }

  function Y() {
    B()
  }

  function q() {
    (0, g.Q3)(a.z.POLLS_CHAT_INPUT_COACHMARK, {
      dismissAction: N.L.TAKE_ACTION
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
      modalKey: T.$z
    })
  }

  function X() {
    C.default.track(Z.rMx.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
      channel_type: t.type,
      channel_id: t.id,
      guild_id: t.guild_id
    }), (0, h.Z)({
      context: null != t ? {
        type: "channel",
        channel: t
      } : {
        type: "contextless"
      },
      openInPopout: false,
      analyticsLocation: H
    }), (0, u.w1)({
      guildId: t.guild_id
    })
  }

  function Q() {
    let e = U,
      n = "txt",
      r = "",
      i = U.match(R);
    null != i && (r = i[1], n = i[2], e = i[3], r += i[4]), (0, _.d)([(0, S.dp)(new Blob([e], {
      type: "text/plain"
    }), "message.".concat(n), "text/plain")], t, L), E.S.dispatchToLastSubscribed(Z.CkL.CLEAR_TEXT), "" !== r && E.S.dispatchToLastSubscribed(Z.CkL.INSERT_TEXT, {
      plainText: r
    })
  }
  return i.useEffect(() => {
    C.default.track(Z.rMx.OPEN_POPOUT, {
      type: "Send Attachment",
      channel_id: t.id,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id]), (0, r.jsx)(s.v2r, {
    onSelect: k,
    navId: "channel-attach",
    onClose: M,
    "aria-label": A.intl.string(A.t.Xm41aV),
    className: w.menu,
    children: b.map(function(e) {
      var n;
      let i = (0, r.jsxs)("div", {
        className: w.optionLabel,
        children: [(0, r.jsx)(e.icon, {
          className: w.optionIcon,
          color: "currentColor"
        }), (0, r.jsx)("div", {
          className: w.optionName,
          children: e.display
        }), null != e.badgeVal && e.badgeVal > 0 && (0, r.jsx)(s.mAB, {
          className: w.badge,
          color: null != (n = e.badgeColor) ? n : o.Z.colors.STATUS_DANGER.css,
          count: e.badgeVal
        })]
      });
      switch (e.type) {
        case P.r.UPLOAD_A_FILE:
          return (0, r.jsx)(s.sNh, {
            id: "upload-file",
            label: i,
            action: x
          }, "upload-file");
        case P.r.UPLOAD_TEXT_AS_FILE:
          if ("" === U) return null;
          return (0, r.jsx)(s.sNh, {
            id: "upload-text-as-file",
            label: i,
            action: Q
          }, "upload-text-as-file");
        case P.r.CLIPS:
          return (0, r.jsx)(s.sNh, {
            id: "clips",
            label: i,
            action: Y
          }, "clips");
        case P.r.POLL:
          return (0, r.jsx)(s.sNh, {
            id: "poll",
            label: i,
            action: q
          }, "poll");
        case P.r.INVITE_TO_PLAY_GAME:
          return (0, r.jsx)(s.sNh, {
            id: "play",
            label: i,
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
        case P.r.INVITE_TO_LISTEN:
          return (0, r.jsx)(s.sNh, {
            id: "listen",
            label: i,
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
        case P.r.INVITE_TO_WATCH:
          return (0, r.jsx)(s.sNh, {
            id: "watch",
            label: i,
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
        case P.r.CREATE_THREAD:
          return (0, r.jsx)(s.sNh, {
            id: "THREAD",
            label: i,
            action: W
          }, "THREAD");
        case P.r.SLASH_COMMAND:
          return (0, r.jsx)(s.sNh, {
            id: "SLASH_COMMAND",
            label: i,
            action: K
          }, "SLASH_COMMAND");
        case P.r.APP_LAUNCHER:
          return (0, r.jsx)(s.sNh, {
            id: "APP_LAUNCHER",
            label: i,
            action: () => (0, p._)(f._b.TEXT, m, true, t.id)
          }, "APP_LAUNCHER");
        case P.r.ACTIVITY:
          return (0, r.jsx)(s.sNh, {
            id: "activity",
            label: i,
            action: X,
            hint: (0, r.jsx)(D, {})
          }, "activity");
        case P.r.SCHEDULED_MESSAGE:
          return (0, r.jsx)(s.sNh, {
            id: "scheduled_message",
            label: i,
            action: () => (0, y.$f)({
              channel: t
            }),
            children: V
          }, "scheduled_message");
        case P.r.SUMMARIZE_THREAD:
          return (0, r.jsx)(s.sNh, {
            id: "summarize_thread",
            label: i,
            action: () => v.Z.summarizeThread(t),
            icon: z ? (0, r.jsx)(s.$jN, {
              type: s.RAz.PULSING_ELLIPSIS
            }) : null,
            disabled: z,
            children: z ? null : (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(s.sNh, {
                id: "summarize_thread_for_everyone",
                label: A.intl.string(A.t.eCzSdd),
                iconLeft: s.BFJ,
                action: () => v.Z.summarizeThread(t, false)
              }, "summarize_thread_for_everyone"), (0, r.jsx)(s.sNh, {
                id: "summarize_thread_for_me",
                label: A.intl.string(A.t["HOe+Hq"]),
                iconLeft: s.tBG,
                action: () => v.Z.summarizeThread(t)
              }, "summarize_thread_for_me")]
            })
          }, "summarize_thread");
        default:
          return null
      }
    })
  })
}