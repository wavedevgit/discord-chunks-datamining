/** Chunk was on web.js **/
/** chunk id: 963838, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Iu: () => G,
  Jw: () => j,
  _r: () => B,
  cX: () => F,
  lv: () => U,
  v: () => L
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk490757 = require("./490757.js"),
  Chunk429827 = require("./429827.js"),
  Chunk353928 = require("./353928.js"),
  Chunk336892 = require("./336892.js"),
  Chunk624833 = require("./624833.js"),
  Chunk944314 = require("./944314.js"),
  Chunk399358 = require("./399358.js"),
  Chunk945835 = require("./945835.js"),
  Chunk912931 = require("./912931.js"),
  Chunk966552 = require("./966552.js"),
  Chunk561763 = require("./561763.js"),
  Chunk529306 = require("./529306.js"),
  Chunk90075 = require("./90075.js"),
  Chunk862666 = require("./862666.js"),
  Chunk252611 = require("./252611.js"),
  Chunk136144 = require("./136144.js"),
  Chunk316137 = require("./316137.js"),
  Chunk654123 = require("./654123.js"),
  Chunk660020 = require("./660020.js"),
  Chunk980084 = require("./980084.js"),
  Chunk24688 = require("./24688.js"),
  Chunk200997 = require("./200997.js"),
  Chunk633302 = require("./633302.js"),
  Chunk134432 = require("./134432.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk176354 = require("./176354.js"),
  Chunk353368 = require("./353368.js"),
  Chunk388032 = require("./388032.jsx");
let L = {
    start: 10,
    end: 15
  },
  M = [Chunk490757],
  k = [Chunk429827, Chunk353928, Chunk336892, Chunk624833, Chunk944314, Chunk399358, Chunk945835, Chunk912931, Chunk966552, Chunk561763, Chunk529306, Chunk90075, Chunk862666, Chunk252611, Chunk136144, Chunk316137, Chunk654123, Chunk660020, Chunk980084, Chunk24688, Chunk200997],
  j = {
    [Chunk353368.q.BASIC]: M,
    [Chunk353368.q.PREMIUM]: k
  },
  U = i().memoize(e => new Promise(t => {
    let n = new Image;
    n.src = e, n.crossOrigin = "Anonymous", n.onload = () => {
      let r = D.v * (0, N.x_)();
      if (n.width === r && n.height === r) t(e);
      else {
        var i;
        let e = document.createElement("canvas");
        e.width = r, e.height = r, null == (i = e.getContext("2d")) || i.drawImage(n, 0, 0), t(e.toDataURL("image/png"))
      }
    }
  })),
  G = (e, t) => {
    let n = j[e];
    if (null != t && e === D.q.PREMIUM) {
      let e = t.end + 1;
      return Math.floor(Math.random() * (t.start - e) + e)
    }
    return Math.floor(Math.random() * n.length)
  };

function B(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : D.v;
  if (null != e.id) {
    var n;
    return P.ZP.getEmojiURL({
      id: e.id,
      animated: null != (n = e.animated) && n,
      size: t
    })
  }
  let r = C.ZP.convertSurrogateToName(e.name, false),
    i = C.ZP.getByName(r);
  return null != i ? w.ZP.getURL(i.surrogates) : ""
}

function Z(e, t) {
  return i()(e).map(e => {
    var n;
    return null != (n = e[t]) ? n : null
  }).filter(e => null != e).uniq().value()
}

function F(e) {
  var t, n, r, i, a, o;
  if (e.length < 1) return "";
  let s = Z(e, "userId"),
    l = Z(e, "emojiName"),
    c = l.length < 2 ? null != (t = null == l ? true : l[0]) ? t : "" : l.join(", ");
  return s.length < 1 ? "" : 1 === s.length ? x.intl.formatToPlainString(x.t.yZYxzF, {
    firstUsername: null == (n = R.default.getUser(s[0])) ? true : n.username,
    emojiNames: c
  }) : 2 === s.length ? x.intl.formatToPlainString(x.t["8rmtbd"], {
    firstUsername: null == (r = R.default.getUser(s[0])) ? true : r.username,
    secondUsername: null == (i = R.default.getUser(s[1])) ? true : i.username,
    emojiNames: c
  }) : x.intl.formatToPlainString(x.t["/okjv0"], {
    firstUsername: null == (a = R.default.getUser(s[0])) ? true : a.username,
    secondUsername: null == (o = R.default.getUser(s[1])) ? true : o.username,
    count: s.length - 2,
    emojiNames: c
  })
}