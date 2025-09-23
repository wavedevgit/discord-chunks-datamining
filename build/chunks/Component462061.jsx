/** Chunk was on 56785 **/
/** chunk id: 462061, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => N,
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
  j = (require("./351483.jsx"), require("./249212.jsx")),
  Chunk853476 = require("./853476.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk400872 = require("./400872.js");
let T = Chunk481060.EFr.SIZE_80,
  R = Chunk481060.EFr.SIZE_40;

function N(e) {
  let {
    channelId: t,
    participant: n
  } = e;
  return (0, E.Eu)(t, n.id) ? (0, r.jsx)(c.ua7, {
    text: x.intl.string(x.t.HFwRpq),
    position: "bottom",
    color: c.FGA.GREY,
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
        className: A.interactive,
        children: (0, r.jsx)(c.Mgn, {
          color: c.TVs.colors.STATUS_WARNING_BACKGROUND
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
  }) : (0, r.jsx)(C.Z, {
    userId: n.user.id
  })
}

function D(e) {
  let {
    participant: t,
    channel: n,
    inCall: l,
    width: c,
    selected: E,
    fit: C,
    onVideoResize: N,
    blocked: D,
    ignored: M,
    noVideoRender: k = false,
    pulseSpeakingIndicator: F = false,
    inOverlayPopout: L = false,
    paused: V = false
  } = e, U = S.Z.getVideoComponent(), W = (0, o.e7)([h.default], () => h.default.getId()), {
    user: H,
    streamId: B,
    speaking: z
  } = t, Y = H.id === W, q = (0, w.ZP)(t), G = (0, o.e7)([O.Z], () => O.Z.isFocused()), K = (0, o.e7)([b.Z], () => b.Z.getWindowFocused(P.KJ3.CHANNEL_CALL_POPOUT)), Q = (0, o.e7)([S.Z], () => null != H.id && S.Z.isLocalVideoDisabled(H.id, (0, f.Z)(t.type)), [H.id, t.type]), X = (0, o.e7)([y.ZP], () => y.ZP.isGuestOrLurker(n.guild_id, H.id)), J = I.ZP.getName(n.getGuildId(), n.id, H) + (X ? " ".concat(x.intl.string(x.t["pFO/Pj"])) : ""), $ = z && (K || G), ee = c < 124 ? R : T, {
    avatarSrc: et,
    avatarDecorationSrc: en
  } = (0, v.Z)({
    userId: H.id,
    guildId: n.guild_id,
    size: ee,
    animateOnHover: !$
  }), er = (0, o.e7)([d.Z], () => d.Z.getSelectedParticipant(n.id)), ei = (0, m.Z)(Z.Yn.DEFAULT, t.user.id), el = (0, p.Z)(t.user.id), ea = {
    channel: n,
    selectedParticipant: er,
    user: H
  }, eo = i.useRef(ea);
  return (i.useEffect(() => {
    eo.current = ea
  }), i.useEffect(() => {
    let {
      channel: e,
      selectedParticipant: t,
      user: n
    } = eo.current;
    e.isGuildStageVoice() && !q && (null == t ? true : t.id) === n.id && s.Z.selectParticipant(e.id, null)
  }, [q]), l && !Q && !k && q && !E && null != U && S.Z.supports(Z.AN.VIDEO)) ? null != ei && null == el ? (0, r.jsx)(j.Z, {
    avError: ei,
    userId: t.id,
    width: c,
    selected: E
  }) : (0, r.jsx)(g.Z, {
    onResize: N,
    wrapperClassName: A.videoWrapper,
    className: A.content,
    mirror: Y,
    streamId: B,
    videoComponent: U,
    fit: C,
    videoSpinnerContext: H.id === W ? u.m.SELF_VIDEO : u.m.REMOTE_VIDEO,
    paused: V,
    userId: H.id
  }, B) : (0, r.jsx)("div", {
    className: a()(A.content, {
      [A.blockedAvatar]: D || M
    }),
    children: (0, r.jsx)(_.Z, {
      "aria-label": J,
      src: et,
      avatarDecoration: en,
      backgroundSrc: H.getAvatarURL(n.guild_id, 80),
      size: ee,
      pulseSpeakingIndicator: F,
      speaking: z,
      userId: H.id
    })
  })
}