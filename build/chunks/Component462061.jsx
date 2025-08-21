/** Chunk was on 69634 **/
/** chunk id: 462061, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => T,
  Z: () => D
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  I = (require("./351483.jsx"), require("./249212.jsx")),
  Chunk853476 = require("./853476.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk7504 = require("./7504.js");
let x = Chunk481060.EFr.SIZE_80,
  N = Chunk481060.EFr.SIZE_40;

function T(e) {
  let {
    channelId: t,
    participant: n
  } = e;
  return (0, v.Eu)(t, n.id) ? (0, r.jsx)(u.ua7, {
    text: C.intl.string(C.t.HFwRpq),
    position: "bottom",
    color: u.FGA.GREY,
    children: e => {
      var t, n;
      return (0, r.jsx)("div", (t = function(e) {
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
      }({}, e), n = n = {
        className: R.interactive,
        children: (0, r.jsx)(u.Mgn, {
          color: u.TVs.colors.STATUS_WARNING_BACKGROUND
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }
  }) : (0, r.jsx)(w.Z, {
    userId: n.user.id
  })
}

function D(e) {
  let {
    participant: t,
    channel: n,
    inCall: i,
    width: u,
    selected: v,
    fit: w,
    onVideoResize: T,
    blocked: D,
    ignored: M,
    noVideoRender: L = false,
    pulseSpeakingIndicator: F = false,
    inOverlayPopout: k = false,
    paused: V = false
  } = e, U = y.Z.getVideoComponent(), H = (0, o.e7)([h.default], () => h.default.getId()), {
    user: W,
    streamId: Y,
    speaking: z
  } = t, G = W.id === H, K = (0, Z.ZP)(t), q = (0, o.e7)([_.Z], () => _.Z.isFocused()), B = (0, o.e7)([b.Z], () => b.Z.getWindowFocused(P.KJ3.CHANNEL_CALL_POPOUT)), J = (0, o.e7)([y.Z], () => null != W.id && y.Z.isLocalVideoDisabled(W.id, (0, f.Z)(t.type)), [W.id, t.type]), X = (0, o.e7)([O.ZP], () => O.ZP.isGuestOrLurker(n.guild_id, W.id)), Q = j.ZP.getName(n.getGuildId(), n.id, W) + (X ? " ".concat(C.intl.string(C.t["pFO/Pj"])) : ""), $ = z && (B || q), ee = u < 124 ? N : x, {
    avatarSrc: et,
    avatarDecorationSrc: en
  } = (0, S.Z)({
    userId: W.id,
    guildId: n.guild_id,
    size: ee,
    animateOnHover: !$
  }), er = (0, o.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)), el = (0, m.Z)(A.Yn.DEFAULT, t.user.id), ei = (0, p.Z)(t.user.id), ea = {
    channel: n,
    selectedParticipant: er,
    user: W
  }, eo = l.useRef(ea);
  return (l.useEffect(() => {
    eo.current = ea
  }), l.useEffect(() => {
    let {
      channel: e,
      selectedParticipant: t,
      user: n
    } = eo.current;
    e.isGuildStageVoice() && !K && (null == t ? true : t.id) === n.id && s.Z.selectParticipant(e.id, null)
  }, [K]), i && !J && !L && K && !v && null != U && y.Z.supports(A.AN.VIDEO)) ? null != el && null == ei ? (0, r.jsx)(I.Z, {
    avError: el,
    userId: t.id,
    width: u,
    selected: v
  }) : (0, r.jsx)(g.Z, {
    onResize: T,
    wrapperClassName: R.videoWrapper,
    className: R.content,
    mirror: G,
    streamId: Y,
    videoComponent: U,
    fit: w,
    videoSpinnerContext: W.id === H ? c.m.SELF_VIDEO : c.m.REMOTE_VIDEO,
    paused: V,
    userId: W.id
  }, Y) : (0, r.jsx)("div", {
    className: a()(R.content, {
      [R.blockedAvatar]: D || M
    }),
    children: (0, r.jsx)(E.Z, {
      "aria-label": Q,
      src: et,
      avatarDecoration: en,
      backgroundSrc: W.getAvatarURL(n.guild_id, 80),
      size: ee,
      pulseSpeakingIndicator: F,
      speaking: z,
      userId: W.id
    })
  })
}