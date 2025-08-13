/** Chunk was on web.js **/
/** chunk id: 462061, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => B,
  Z: () => Z
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk763520 = require("./763520.js"),
  Chunk358221 = require("./358221.js"),
  Chunk414910 = require("./414910.js"),
  Chunk502053 = require("./502053.js"),
  Chunk965048 = require("./965048.js"),
  Chunk266910 = require("./266910.jsx"),
  Chunk352978 = require("./352978.jsx"),
  Chunk928518 = require("./928518.js"),
  Chunk518950 = require("./518950.js"),
  Chunk470956 = require("./470956.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk131951 = require("./131951.js"),
  Chunk451478 = require("./451478.js"),
  Chunk5192 = require("./5192.js"),
  Chunk44136 = require("./44136.js"),
  Chunk351483 = require("./351483.jsx"),
  Chunk249212 = require("./249212.jsx"),
  Chunk853476 = require("./853476.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk867236 = require("./867236.js");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      L(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let k = 124,
  U = Chunk481060.EFr.SIZE_80,
  G = Chunk481060.EFr.SIZE_40;

function B(e) {
  let {
    channelId: t,
    participant: n
  } = e;
  return (0, b.Eu)(t, n.id) ? (0, r.jsx)(l.ua7, {
    text: w.intl.string(w.t.HFwRpq),
    position: "bottom",
    color: l.FGA.GREY,
    children: e => (0, r.jsx)("div", j(x({}, e), {
      className: D.interactive,
      children: (0, r.jsx)(l.Mgn, {
        color: l.TVs.colors.STATUS_WARNING_BACKGROUND
      })
    }))
  }) : (0, r.jsx)(C.Z, {
    userId: n.user.id
  })
}

function Z(e) {
  let {
    participant: t,
    channel: n,
    inCall: o,
    width: l,
    selected: b,
    fit: C,
    onVideoResize: L,
    blocked: x,
    ignored: M,
    noVideoRender: j = false,
    pulseSpeakingIndicator: B = false,
    inOverlayPopout: Z = false,
    paused: F = false
  } = e, V = v.Z.getVideoComponent(), H = (0, s.e7)([y.default], () => y.default.getId()), {
    user: Y,
    streamId: W,
    speaking: K
  } = t, z = Y.id === H, q = (0, S.ZP)(t), X = (0, s.e7)([I.Z], () => I.Z.isFocused()), Q = (0, s.e7)([g.Z], () => g.Z.getWindowFocused(R.KJ3.CHANNEL_CALL_POPOUT)), J = (0, s.e7)([v.Z], () => null != Y.id && v.Z.isLocalVideoDisabled(Y.id, (0, f.Z)(t.type)), [Y.id, t.type]), $ = (0, s.e7)([O.ZP], () => O.ZP.isGuestOrLurker(n.guild_id, Y.id)), ee = T.ZP.getName(n.getGuildId(), n.id, Y) + ($ ? " ".concat(w.intl.string(w.t["pFO/Pj"])) : ""), et = K && (Q || X), en = l < k ? G : U, {
    avatarSrc: er,
    avatarDecorationSrc: ei
  } = (0, E.Z)({
    userId: Y.id,
    guildId: n.guild_id,
    size: en,
    animateOnHover: !et
  }), eo = (0, s.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)), ea = (0, p.Z)(P.Yn.DEFAULT, t.user.id), es = (0, _.Z)(t.user.id), el = {
    channel: n,
    selectedParticipant: eo,
    user: Y
  }, ec = i.useRef(el);
  i.useEffect(() => {
    ec.current = el
  }), i.useEffect(() => {
    let {
      channel: e,
      selectedParticipant: t,
      user: n
    } = ec.current;
    e.isGuildStageVoice() && !q && (null == t ? true : t.id) === n.id && c.Z.selectParticipant(e.id, null)
  }, [q]);
  let eu = false;
  return o && !J && !j && q && !b && null != V && v.Z.supports(P.AN.VIDEO) ? eu && !Z ? (0, r.jsx)(A.Z, {
    selected: b,
    width: l
  }) : null != ea && null == es ? (0, r.jsx)(N.Z, {
    avError: ea,
    userId: t.id,
    width: l,
    selected: b
  }) : (0, r.jsx)(m.Z, {
    onResize: L,
    wrapperClassName: D.videoWrapper,
    className: D.content,
    mirror: z,
    streamId: W,
    videoComponent: V,
    fit: C,
    videoSpinnerContext: Y.id === H ? u.m.SELF_VIDEO : u.m.REMOTE_VIDEO,
    paused: F,
    userId: Y.id
  }, W) : (0, r.jsx)("div", {
    className: a()(D.content, {
      [D.blockedAvatar]: x || M
    }),
    children: (0, r.jsx)(h.Z, {
      "aria-label": ee,
      src: er,
      avatarDecoration: ei,
      backgroundSrc: Y.getAvatarURL(n.guild_id, 80),
      size: en,
      pulseSpeakingIndicator: B,
      speaking: K,
      userId: Y.id
    })
  })
}