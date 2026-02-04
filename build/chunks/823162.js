/** Chunk was on 21738 **/
/** chunk id: 823162, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => W
}), require("./747238.js"), require("./812715.js"), require("./667532.js");
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk73153 = require("./73153.js"),
  Chunk11057 = require("./11057.js"),
  Chunk100767 = require("./100767.js"),
  Chunk47167 = require("./47167.js"),
  Chunk379418 = require("./379418.js"),
  Chunk9842 = require("./9842.js"),
  Chunk773669 = require("./773669.js"),
  Chunk253932 = require("./253932.js"),
  Chunk961350 = require("./961350.js"),
  Chunk761640 = require("./761640.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk430452 = require("./430452.js"),
  Chunk803224 = require("./803224.js"),
  Chunk994500 = require("./994500.js"),
  Chunk309010 = require("./309010.js"),
  Chunk543465 = require("./543465.js"),
  Chunk287809 = require("./287809.js"),
  Chunk427262 = require("./427262.js"),
  Chunk54570 = require("./54570.js"),
  Chunk8880 = require("./8880.js");
require("./75804.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let x = [],
  P = null,
  w = null,
  L = null,
  R = /\|\|([\s\S]+?)\|\|/g;

function D(e, t, n, r) {
  let l = _.A.getGuild(n),
    a = e.replace(R, j.intl.string(j.t["F+x38C"])).replace(/<@!?(\d+)>/g, (e, t) => {
      var r;
      let i = v.default.getUser(t);
      return null == i ? e : null != (r = m.Ay.getNick(n, i.id)) ? r : S.Ay.getName(i)
    }).replace(/<@&?(\d+)>/g, (e, t) => {
      let n = null != l ? A.A.getRole(l.id, t) : null;
      return null != n && null != n.name ? n.name : j.intl.string(j.t.dRcLA2)
    }).replace(/<#(\d+)>/g, (e, t) => {
      let n = g.A.getChannel(t);
      return null == n ? e : (0, o.m1)(n, v.default, O.A)
    }).replace(/<a?:(\w+):(\d+)>/g, (e, t) => "".concat(j.intl.string(j.t.sMOuuS), " ").concat(t)).replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => "/".concat(t)).replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
      let r = c.kx[n],
        l = 1e3 * parseInt(t, 10),
        a = i()(l);
      return null != r ? r(a) : a.format()
    });
  return null == r ? j.intl.formatToPlainString(j.t["uIj77/"], {
    username: t,
    body: a
  }) : j.intl.formatToPlainString(j.t["Ix4H+j"], {
    username: t,
    body: a,
    replyUsername: r
  })
}

function M() {
  if (!s.$j) returnfalse;
  let e = d.default.locale;
  if (null == L) {
    var t;
    L = null == (t = window.speechSynthesis) ? true : t.getVoices()
  }
  let n = L.filter(t => t.lang === e || t.lang.slice(0, e.length) === e);
  w = n.length > 0 ? n[0] : null
}
async function k(e, t, n, r, i) {
  let l = s.aW(e, n);
  null !== l && (null == w && M(), t ? await (0, C.pr)() : null == P || P.removeEventListener("end", C.pr), l.addEventListener("end", C.pr), null != r && l.addEventListener("start", r), null != i && l.addEventListener("end", i), P = l, s.wz(l, w))
}

function U(e, t, n, r, i) {
  k(e, t, i, () => {
    (0, C.kC)(n, r)
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

function V() {
  return null !== P && P.removeEventListener("end", C.pr), s._X(), P = null, true
}

function B(e) {
  var t, n, r;
  let {
    message: i,
    channel: l
  } = e, a = i.type === T.lAJ.REPLY ? u.A.getMessageByReference(i.messageReference) : null, s = (null == a ? true : a.state) === u.a.LOADED ? null == a || null == (r = a.message) ? true : r.author : null, o = null != s ? null != (t = m.Ay.getNick(l.guild_id, null == s ? true : s.id)) ? t : S.Ay.getName(s) : null, c = l.getGuildId(), d = null != (n = m.Ay.getNick(c, i.author.id)) ? n : S.Ay.getName(i.author);
  return U(D(i.content, d, c, o), true, l.id, i.id), true
}

function H(e) {
  var t, n, r, i, l, a;
  let {
    channelId: s,
    message: o,
    optimistic: c
  } = e;
  if (c || b.A.isSelfDeaf()) returnfalse;
  let u = g.A.getChannel(s);
  if (null == u) returnfalse;
  let d = y.A.getChannelId(),
    A = f.Ay.getCurrentSidebarChannelId(d),
    _ = s === d || s === A,
    v = p.on.getSetting() && o.tts && _,
    C = E.A.getTTSType(),
    N = (null == (t = o.author) ? true : t.id) !== h.default.getId() && (C === T.aVn.ALL_CHANNELS || C === T.aVn.SELECTED_CHANNEL && _);
  if ((v || N) && !O.A.isBlockedOrIgnoredForMessage(o)) {
    if (x.indexOf(o.id) >= 0) returnfalse;
    x.unshift(o.id) > 10 && x.pop();
    let e = u.getGuildId();
    if (null != e && I.Ay.getMutedChannels(e).has(s)) returnfalse;
    let t = null != (n = null != (r = m.Ay.getNick(e, null == (l = o.author) ? true : l.id)) ? r : S.Ay.getName(o.author)) ? n : "",
      c = o.type === T.lAJ.REPLY ? null == (a = o.referenced_message) ? true : a.author : null,
      d = null != c ? null != (i = m.Ay.getNick(e, null == c ? true : c.id)) ? i : S.Ay.getName(c) : null;
    U(D(o.content, t, e, d), false, u.id, o.id, 200)
  }
  returnfalse
}

function F(e) {
  let {
    id: t,
    channelId: n
  } = e, r = N.A.currentMessage;
  return null != r && t === r.messageId && n === r.channelId && ((0, C.pr)(), true)
}

function Y() {
  b.A.isSelfDeaf() && s._X()
}

function K(e) {
  let {
    channelId: t
  } = e, n = N.A.currentMessage;
  null != n && n.channelId !== t && (0, C.pr)()
}
let W = {
  init() {
    l.h.subscribe("SPEAK_TEXT", G), l.h.subscribe("SPEAK_MESSAGE", B), l.h.subscribe("STOP_SPEAKING", V), l.h.subscribe("MESSAGE_CREATE", H), l.h.subscribe("MESSAGE_DELETE", F), l.h.subscribe("AUDIO_TOGGLE_SELF_DEAF", Y), l.h.subscribe("CHANNEL_SELECT", K), l.h.subscribe("USER_SETTINGS_PROTO_UPDATE", M), (0, a.I)(M)
  }
}