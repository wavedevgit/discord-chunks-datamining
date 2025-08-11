/** Chunk was on web.js **/
/** chunk id: 193910, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk831209 = require("./831209.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk278323 = require("./278323.js"),
  Chunk566620 = require("./566620.js"),
  Chunk906732 = require("./906732.js"),
  Chunk397698 = require("./397698.js"),
  Chunk266454 = require("./266454.js"),
  Chunk706140 = require("./706140.js"),
  Chunk243778 = require("./243778.js"),
  Chunk618857 = require("./618857.js"),
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
  Chunk388032 = require("./388032.js"),
  Chunk725776 = require("./725776.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}

function D(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let x = RegExp("(.*)```(\\w+)\\n(.*)```(.*)", "s");

function M() {
  let e = (0, Chunk442837.e7)([Chunk375954.Z], () => Chunk375954.Z.hasCurrentUserSentMessageSinceAppStart()),
    t = [];
  module && exports.push(Chunk704215.z.ACTIVITIES_CHAT_MENU_NEW_BADGE);
  let [n] = (0, Chunk706140.cv)(exports);
  return Chunk73800.useEffect(() => () => {
    require === Chunk704215.z.ACTIVITIES_CHAT_MENU_NEW_BADGE && (0, Chunk266454.Q3)(Chunk704215.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, {
      dismissAction: Chunk921944.L.TAKE_ACTION
    })
  }, [require]), <Chunk243778.ZP contentTypes={exports}>{e => {
      let {
        visibleContent: t
      } = e;
      return t === s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE ? (0, r.jsx)(l.IGR, {
        text: C.intl.string(C.t.y2b7CA),
        color: o.Z.BUTTON_DANGER_BACKGROUND
      }) : null
    }}</Chunk243778.ZP>
}

function k(e) {
  let {
    channel: t,
    options: a,
    onFileUpload: p,
    onClose: h,
    onSelect: E,
    draftType: P,
    editorTextContent: D,
    setValue: k,
    openClips: j
  } = e, {
    analyticsLocations: U,
    newestAnalyticsLocation: G
  } = (0, d.ZP)(), B = (0, m.Dt)({
    channel: t
  });

  function Z(e) {
    c.Z.sendActivityInvite({
      channelId: t.id,
      type: S.mFx.JOIN,
      activity: e,
      location: U[U.length - 1]
    })
  }

  function F(e) {
    c.Z.sendActivityInvite({
      channelId: t.id,
      type: S.mFx.LISTEN,
      activity: e,
      location: U[U.length - 1]
    })
  }

  function V(e) {
    c.Z.sendActivityInvite({
      channelId: t.id,
      type: S.mFx.WATCH,
      activity: e,
      location: U[U.length - 1]
    })
  }

  function H() {
    (0, g.R6)(t, true, "Plus Button")
  }

  function Y() {
    b.default.track(S.rMx.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), k("/", (0, I.JM)("/"))
  }

  function W() {
    j()
  }

  function K() {
    (0, _.Q3)(s.z.POLLS_CHAT_INPUT_COACHMARK, {
      dismissAction: A.L.TAKE_ACTION
    }), (0, l.ZDy)(async () => {
      let {
        default: e
      } = await n.e("68784").then(n.bind(n, 611611));
      return n => <e{...L(w({}, n), {
        channel: t
      })} />
    }, {
      modalKey: N.$z
    })
  }

  function z() {
    b.default.track(S.rMx.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
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
      analyticsLocation: G
    }), (0, u.w1)({
      guildId: t.guild_id
    })
  }

  function q() {
    let e = D,
      n = "txt",
      r = "",
      i = D.match(x);
    null != i && (r = i[1], n = i[2], e = i[3], r += i[4]), (0, v.d)([(0, O.dp)(new Blob([e], {
      type: "text/plain"
    }), "message.".concat(n), "text/plain")], t, P), y.S.dispatchToLastSubscribed(S.CkL.CLEAR_TEXT), "" !== r && y.S.dispatchToLastSubscribed(S.CkL.INSERT_TEXT, {
      plainText: r
    })
  }

  function X(e) {
    var n;
    let i = <div className={R.optionLabel}>{<e.icon className={R.optionIcon} color={"currentColor"} />}{<div className={R.optionName}>{e.display}</div>}{null != e.badgeVal && e.badgeVal > 0 && <l.mAB className={R.badge} color={null != (n = e.badgeColor) ? n : o.Z.STATUS_DANGER} count={e.badgeVal} />}</div>;
    switch (e.type) {
      case T.r.UPLOAD_A_FILE:
        return <l.sNh id={"upload-file"} label={i} action={p} />;
      case T.r.UPLOAD_TEXT_AS_FILE:
        if ("" === D) return null;
        return <l.sNh id={"upload-text-as-file"} label={i} action={q} />;
      case T.r.CLIPS:
        return <l.sNh id={"clips"} label={i} action={W} />;
      case T.r.POLL:
        return <l.sNh id={"poll"} label={i} action={K} />;
      case T.r.INVITE_TO_PLAY_GAME:
        return <l.sNh id={"play"} label={i} action={() => Z(e.activity)} />;
      case T.r.INVITE_TO_LISTEN:
        return <l.sNh id={"listen"} label={i} action={() => F(e.activity)} />;
      case T.r.INVITE_TO_WATCH:
        return <l.sNh id={"watch"} label={i} action={() => V(e.activity)} />;
      case T.r.CREATE_THREAD:
        return <l.sNh id={"THREAD"} label={i} action={H} />;
      case T.r.SLASH_COMMAND:
        return <l.sNh id={"SLASH_COMMAND"} label={i} action={Y} />;
      case T.r.ACTIVITY:
        return <l.sNh id={"activity"} label={i} action={z} hint={(0, r.jsx)(M, {})} />;
      case T.r.SCHEDULED_MESSAGE:
        return <l.sNh id={"scheduled_message"} label={i} action={() => (0, m.$f)({
            channel: t
          })}>{B}</l.sNh>;
      default:
        return null
    }
  }
  return i.useEffect(() => {
    b.default.track(S.rMx.OPEN_POPOUT, {
      type: "Send Attachment",
      channel_id: t.id,
      guild_id: t.guild_id
    })
  }, [t.guild_id, t.id]), <l.v2r onSelect={E} navId={"channel-attach"} onClose={h} aria-label={C.intl.string(C.t.Xm41aW)} className={R.menu}>{a.map(X)}</l.v2r>
}