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
let Z = [],
  A = null,
  w = null,
  L = null,
  R = /\|\|([\s\S]+?)\|\|/g;

function D(e, t, n, r) {
  let l = _.Z.getGuild(n),
    a = e.replace(R, x.intl.string(x.t["F+x38C"])).replace(/<@!?(\d+)>/g, (e, t) => {
      var r;
      let i = C.default.getUser(t);
      return null == i ? e : null != (r = m.ZP.getNick(n, i.id)) ? r : S.ZP.getName(i)
    }).replace(/<@&?(\d+)>/g, (e, t) => {
      let n = null != l ? b.Z.getRole(l.id, t) : null;
      return null != n && null != n.name ? n.name : x.intl.string(x.t.dRcLA2)
    }).replace(/<#(\d+)>/g, (e, t) => {
      let n = h.Z.getChannel(t);
      return null == n ? e : (0, s.F6)(n, C.default, v.Z)
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
  if (!o.Zh) returnfalse;
  let e = d.default.locale;
  if (null == L) {
    var t;
    L = null == (t = window.speechSynthesis) ? true : t.getVoices()
  }
  let n = L.filter(t => t.lang === e || t.lang.slice(0, e.length) === e);
  w = n.length > 0 ? n[0] : null
}
async function k(e, t, n, r, i) {
  let l = o.e6(e, n);
  null !== l && (null == w && M(), t ? await (0, T.NB)() : null == A || A.removeEventListener("end", T.NB), l.addEventListener("end", T.NB), null != r && l.addEventListener("start", r), null != i && l.addEventListener("end", i), A = l, o.iq(l, w))
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

function H() {
  return null !== A && A.removeEventListener("end", T.NB), o.M9(), A = null, true
}

function B(e) {
  var t, n, r;
  let {
    message: i,
    channel: l
  } = e, a = i.type === P.uaV.REPLY ? u.Z.getMessageByReference(i.messageReference) : null, o = (null == a ? true : a.state) === u.Y.LOADED ? null == a || null == (t = a.message) ? true : t.author : null, s = null != o ? null != (n = m.ZP.getNick(l.guild_id, null == o ? true : o.id)) ? n : S.ZP.getName(o) : null, c = l.getGuildId(), d = null != (r = m.ZP.getNick(c, i.author.id)) ? r : S.ZP.getName(i.author);
  return U(D(i.content, d, c, s), true, l.id, i.id), true
}

function V(e) {
  var t, n, r, i, l, a;
  let {
    channelId: o,
    message: s,
    optimistic: c
  } = e;
  if (c || E.Z.isSelfDeaf()) returnfalse;
  let u = h.Z.getChannel(o);
  if (null == u) returnfalse;
  let d = y.Z.getChannelId(),
    b = g.ZP.getCurrentSidebarChannelId(d),
    _ = o === d || o === b,
    C = p.OW.getSetting() && s.tts && _,
    T = O.Z.getTTSType(),
    N = (null == (t = s.author) ? true : t.id) !== f.default.getId() && (T === P.PrB.ALL_CHANNELS || T === P.PrB.SELECTED_CHANNEL && _);
  if ((C || N) && !v.Z.isBlockedOrIgnoredForMessage(s)) {
    if (Z.indexOf(s.id) >= 0) returnfalse;
    Z.unshift(s.id) > 10 && Z.pop();
    let e = u.getGuildId();
    if (null != e && I.ZP.getMutedChannels(e).has(o)) returnfalse;
    let t = null != (l = null != (i = m.ZP.getNick(e, null == (n = s.author) ? true : n.id)) ? i : S.ZP.getName(s.author)) ? l : "",
      c = s.type === P.uaV.REPLY ? null == (r = s.referenced_message) ? true : r.author : null,
      d = null != c ? null != (a = m.ZP.getNick(e, null == c ? true : c.id)) ? a : S.ZP.getName(c) : null;
    U(D(s.content, t, e, d), false, u.id, s.id, j.f)
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
  E.Z.isSelfDeaf() && o.M9()
}
let Y = {
  init() {
    l.Z.subscribe("SPEAK_TEXT", G), l.Z.subscribe("SPEAK_MESSAGE", B), l.Z.subscribe("STOP_SPEAKING", H), l.Z.subscribe("MESSAGE_CREATE", V), l.Z.subscribe("MESSAGE_DELETE", F), l.Z.subscribe("AUDIO_TOGGLE_SELF_DEAF", z), l.Z.subscribe("USER_SETTINGS_PROTO_UPDATE", M), (0, a.Ql)(M)
  }
}