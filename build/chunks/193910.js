/** Chunk was on 71611 (6f02c158d7813e32.js) **/
n.d(t, {
  Z: () => A
}), n(474991), n(398202), n(301563), n(653041), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(831209),
  o = n(442837),
  a = n(704215),
  s = n(481060),
  c = n(278323),
  u = n(566620),
  d = n(403404),
  p = n(906732),
  h = n(605236),
  f = n(706140),
  m = n(243778),
  g = n(618857),
  b = n(488131),
  _ = n(375954),
  C = n(626135),
  v = n(585483),
  y = n(403182),
  x = n(127654),
  j = n(752305),
  O = n(951211),
  N = n(981631),
  E = n(921944),
  P = n(489887),
  I = n(388032),
  S = n(998685);
let Z = RegExp("(.*)```(\\w+)\\n(.*)```(.*)", "s");

function T() {
  let e = (0, o.e7)([_.Z], () => _.Z.hasCurrentUserSentMessageSinceAppStart()),
    t = [];
  e && t.push(a.z.ACTIVITIES_CHAT_MENU_NEW_BADGE);
  let [n] = (0, f.cv)(t);
  return i.useEffect(() => () => {
    n === a.z.ACTIVITIES_CHAT_MENU_NEW_BADGE && (0, h.EW)(a.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
      dismissAction: E.L.TAKE_ACTION
    })
  }, [n]), (0, r.jsx)(m.ZP, {
    contentTypes: t,
    children: e => {
      let {
        visibleContent: t
      } = e;
      return t === a.z.ACTIVITIES_CHAT_MENU_NEW_BADGE ? (0, r.jsx)(s.IGR, {
        text: I.NW.string(I.t.y2b7CA),
        color: l.Z.BUTTON_DANGER_BACKGROUND
      }) : null
    }
  })
}

function A(e) {
  let {
    channel: t,
    options: o,
    onFileUpload: f,
    onClose: m,
    onSelect: _,
    draftType: A,
    editorTextContent: w,
    setValue: R,
    openClips: k
  } = e, {
    analyticsLocations: M
  } = (0, p.ZP)(), L = (0, g.Dt)({
    channel: t
  });

  function D() {
    (0, b.R6)(t, void 0, "Plus Button")
  }

  function W() {
    C.default.track(N.rMx.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), R("/", (0, j.JM)("/"))
  }

  function U() {
    k()
  }

  function B() {
    (0, h.EW)(a.z.POLLS_CHAT_INPUT_COACHMARK, {
      dismissAction: E.L.TAKE_ACTION
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
                enumerable: !0,
                configurable: !0,
                writable: !0
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
      modalKey: P.$z
    })
  }

  function F() {
    C.default.track(N.rMx.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
      channel_type: t.type,
      channel_id: t.id,
      guild_id: t.guild_id
    }), (0, d.Z)({
      channel: t,
      guildId: t.guild_id,
      locationObject: {
        page: t.isPrivate() ? N.ZY5.DM_CHANNEL : N.ZY5.GUILD_CHANNEL,
        section: N.jXE.CHANNEL_TEXT_AREA,
        object: N.qAy.CONTEXT_MENU_ITEM,
        objectType: N.Qqv.ACTIVITY
      },
      openInPopout: !1,
      enableSelectedTextChannelInvite: !0,
      analyticsLocations: M
    }), (0, u.w1)({
      guildId: t.guild_id
    })
  }

  function H() {
    let e = w,
      n = "txt",
      r = "",
      i = w.match(Z);
    null != i && (r = i[1], n = i[2], e = i[3], r += i[4]), (0, x.d)([(0, y.dp)(new Blob([e], {
      type: "text/plain"
    }), "message.".concat(n))], t, A), v.S.dispatchToLastSubscribed(N.CkL.CLEAR_TEXT), "" !== r && v.S.dispatchToLastSubscribed(N.CkL.INSERT_TEXT, {
      plainText: r
    })
  }
  return i.useEffect(() => {
    C.default.track(N.rMx.OPEN_POPOUT, {
      type: "Send Attachment",
      channel_id: t.id,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id]), (0, r.jsx)(s.v2r, {
    onSelect: _,
    navId: "channel-attach",
    onClose: m,
    "aria-label": I.NW.string(I.t.Xm41aW),
    className: S.menu,
    children: o.map(function(e) {
      var n;
      let i = (0, r.jsxs)("div", {
        className: S.optionLabel,
        children: [(0, r.jsx)(e.icon, {
          className: S.optionIcon,
          color: "currentColor"
        }), (0, r.jsx)("div", {
          className: S.optionName,
          children: e.display
        }), null != e.badgeVal && e.badgeVal > 0 && (0, r.jsx)(s.mAB, {
          className: S.badge,
          color: null !== (n = e.badgeColor) && void 0 !== n ? n : l.Z.STATUS_DANGER,
          count: e.badgeVal
        })]
      });
      switch (e.type) {
        case O.r.UPLOAD_A_FILE:
          return (0, r.jsx)(s.sNh, {
            id: "upload-file",
            label: i,
            action: f
          }, "upload-file");
        case O.r.UPLOAD_TEXT_AS_FILE:
          if ("" === w) return null;
          return (0, r.jsx)(s.sNh, {
            id: "upload-text-as-file",
            label: i,
            action: H
          }, "upload-text-as-file");
        case O.r.CLIPS:
          return (0, r.jsx)(s.sNh, {
            id: "clips",
            label: i,
            action: U
          }, "clips");
        case O.r.POLL:
          return (0, r.jsx)(s.sNh, {
            id: "poll",
            label: i,
            action: B
          }, "poll");
        case O.r.INVITE_TO_PLAY_GAME:
          return (0, r.jsx)(s.sNh, {
            id: "play",
            label: i,
            action: () => {
              var n;
              return n = e.activity, void c.Z.sendActivityInvite({
                channelId: t.id,
                type: N.mFx.JOIN,
                activity: n,
                location: M[M.length - 1]
              })
            }
          }, "play");
        case O.r.INVITE_TO_LISTEN:
          return (0, r.jsx)(s.sNh, {
            id: "listen",
            label: i,
            action: () => {
              var n;
              return n = e.activity, void c.Z.sendActivityInvite({
                channelId: t.id,
                type: N.mFx.LISTEN,
                activity: n,
                location: M[M.length - 1]
              })
            }
          }, "listen");
        case O.r.INVITE_TO_WATCH:
          return (0, r.jsx)(s.sNh, {
            id: "watch",
            label: i,
            action: () => {
              var n;
              return n = e.activity, void c.Z.sendActivityInvite({
                channelId: t.id,
                type: N.mFx.WATCH,
                activity: n,
                location: M[M.length - 1]
              })
            }
          }, "watch");
        case O.r.CREATE_THREAD:
          return (0, r.jsx)(s.sNh, {
            id: "THREAD",
            label: i,
            action: D
          }, "THREAD");
        case O.r.SLASH_COMMAND:
          return (0, r.jsx)(s.sNh, {
            id: "SLASH_COMMAND",
            label: i,
            action: W
          }, "SLASH_COMMAND");
        case O.r.ACTIVITY:
          return (0, r.jsx)(s.sNh, {
            id: "activity",
            label: i,
            action: F,
            hint: (0, r.jsx)(T, {})
          }, "activity");
        case O.r.SCHEDULED_MESSAGE:
          return (0, r.jsx)(s.sNh, {
            id: "scheduled_message",
            label: i,
            action: () => (0, g.$f)({
              channel: t
            }),
            children: L
          }, "scheduled_message");
        default:
          return null
      }
    })
  })
}