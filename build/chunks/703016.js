/** Chunk was on 1272 **/
/** chunk id: 703016, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Y
}), require("./704826.js"), require("./35282.js"), require("./290780.js");
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk570140 = require("./570140.js"),
  Chunk241601 = require("./241601.js"),
  Chunk419363 = require("./419363.js"),
  Chunk933557 = require("./933557.js"),
  Chunk660199 = require("./660199.js"),
  Chunk869765 = require("./869765.js"),
  Chunk706454 = require("./706454.js"),
  Chunk695346 = require("./695346.js"),
  Chunk314897 = require("./314897.js"),
  Chunk433355 = require("./433355.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk292959 = require("./292959.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk196051 = require("./196051.js"),
  Chunk441729 = require("./441729.js"),
  Chunk653477 = require("./653477.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let A = [],
  Z = null,
  w = null,
  L = null,
  D = /\|\|([\s\S]+?)\|\|/g;

function R(e, t, n, r) {
  let l = b.Z.getGuild(n),
    a = e.replace(D, x.intl.string(x.t["F+x38C"])).replace(/<@!?(\d+)>/g, (e, t) => {
      var r;
      let i = C.default.getUser(t);
      return null == i ? e : null != (r = g.ZP.getNick(n, i.id)) ? r : S.ZP.getName(i)
    }).replace(/<@&?(\d+)>/g, (e, t) => {
      let n = null != l ? _.Z.getRole(l.id, t) : null;
      return null != n && null != n.name ? n.name : x.intl.string(x.t.dRcLA2)
    }).replace(/<#(\d+)>/g, (e, t) => {
      let n = m.Z.getChannel(t);
      return null == n ? e : (0, o.F6)(n, C.default, I.Z)
    }).replace(/<a?:(\w+):(\d+)>/g, (e, t) => "".concat(x.intl.string(x.t.sMOuuS), " ").concat(t)).replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => "/".concat(t)).replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
      let r = c.Qh[n],
        l = 1e3 * parseInt(t, 10),
        a = i()(l);
      return null != r ? r(a) : a.format()
    });
  return null == r ? x.intl.formatToPlainString(x.t["uIj77/"], {
    username: t,
    body: a
  }) : x.intl.formatToPlainString(x.t["Ix4H+j"], {
    username: t,
    body: a,
    replyUsername: r
  })
}

function M() {
  if (!Chunk419363.Zh) returnfalse;
  let e = Chunk706454.default.locale;
  if (null == L) {
    var t;
    L = null == (t = window.speechSynthesis) ? true : exports.getVoices()
  }
  let n = L.filter(t => t.lang === e || t.lang.slice(0, e.length) === e);
  w = require.length > 0 ? require[0] : null
}
async function k(e, t, n, r, i) {
  let l = s.e6(e, n);
  null !== l && (null == w && M(), t ? await (0, T.NB)() : null == Z || Z.removeEventListener("end", T.NB), l.addEventListener("end", T.NB), null != r && l.addEventListener("start", r), null != i && l.addEventListener("end", i), Z = l, s.iq(l, w))
}

function U(e, t, n, r, i) {
  k(e, t, i, () => {
    (0, T.Bo)(n, r)
  })
}

function G(e) {
  let {
    text: t,
    interrupt: n,
    maxLength: r,
    onStart: i,
    onEnd: l
  } = e;
  k(t, n, r, i, l)
}

function B() {
  return null !== Z && Z.removeEventListener("end", Chunk196051.NB), Chunk419363.M9(), Z = null, true
}

function H(e) {
  var t, n, r;
  let {
    message: i,
    channel: l
  } = e, a = i.type === P.uaV.REPLY ? u.Z.getMessageByReference(i.messageReference) : null, s = (null == a ? true : a.state) === u.Y.LOADED ? null == a || null == (t = a.message) ? true : t.author : null, o = null != s ? null != (n = g.ZP.getNick(l.guild_id, null == s ? true : s.id)) ? n : S.ZP.getName(s) : null, c = l.getGuildId(), d = null != (r = g.ZP.getNick(c, i.author.id)) ? r : S.ZP.getName(i.author);
  return U(R(i.content, d, c, o), true, l.id, i.id), true
}

function V(e) {
  var t, n, r, i, l, a;
  let {
    channelId: s,
    message: o,
    optimistic: c
  } = e;
  if (c || E.Z.isSelfDeaf()) returnfalse;
  let u = m.Z.getChannel(s);
  if (null == u) returnfalse;
  let d = v.Z.getChannelId(),
    _ = h.ZP.getCurrentSidebarChannelId(d),
    b = s === d || s === _,
    C = p.OW.getSetting() && o.tts && b,
    T = O.Z.getTTSType(),
    N = (null == (t = o.author) ? true : t.id) !== f.default.getId() && (T === P.PrB.ALL_CHANNELS || T === P.PrB.SELECTED_CHANNEL && b);
  if ((C || N) && !I.Z.isBlockedOrIgnoredForMessage(o)) {
    if (A.indexOf(o.id) >= 0) returnfalse;
    A.unshift(o.id) > 10 && A.pop();
    let e = u.getGuildId();
    if (null != e && y.ZP.getMutedChannels(e).has(s)) returnfalse;
    let t = null != (l = null != (i = g.ZP.getNick(e, null == (n = o.author) ? true : n.id)) ? i : S.ZP.getName(o.author)) ? l : "",
      c = o.type === P.uaV.REPLY ? null == (r = o.referenced_message) ? true : r.author : null,
      d = null != c ? null != (a = g.ZP.getNick(e, null == c ? true : c.id)) ? a : S.ZP.getName(c) : null;
    U(R(o.content, t, e, d), false, u.id, o.id, j.f)
  }
  returnfalse
}

function F(e) {
  let {
    id: t,
    channelId: n
  } = e, r = N.Z.currentMessage;
  return null != r && t === r.messageId && n === r.channelId && ((0, T.NB)(), true)
}

function z() {
  Chunk131951.Z.isSelfDeaf() && Chunk419363.M9()
}
let Y = {
  init() {
    Chunk570140.Z.subscribe("SPEAK_TEXT", G), Chunk570140.Z.subscribe("SPEAK_MESSAGE", H), Chunk570140.Z.subscribe("STOP_SPEAKING", B), Chunk570140.Z.subscribe("MESSAGE_CREATE", V), Chunk570140.Z.subscribe("MESSAGE_DELETE", F), Chunk570140.Z.subscribe("AUDIO_TOGGLE_SELF_DEAF", z), Chunk570140.Z.subscribe("USER_SETTINGS_PROTO_UPDATE", M), (0, Chunk241601.Ql)(M)
  }
}