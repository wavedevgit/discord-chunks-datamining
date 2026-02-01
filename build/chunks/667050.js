/** Chunk was on web.js **/
/** chunk id: 667050, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bf: () => k,
  Br: () => V,
  fr: () => B,
  m4: () => x,
  oS: () => G,
  tm: () => U
});
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk791454 = require("./791454.js"),
  Chunk54991 = require("./54991.js"),
  Chunk149834 = require("./149834.js"),
  Chunk372889 = require("./372889.js"),
  Chunk764724 = require("./764724.js"),
  Chunk535275 = require("./535275.js"),
  Chunk228158 = require("./228158.js"),
  Chunk980883 = require("./980883.js"),
  Chunk577436 = require("./577436.js"),
  Chunk502561 = require("./502561.js"),
  Chunk71442 = require("./71442.js"),
  Chunk213961 = require("./213961.js"),
  Chunk942344 = require("./942344.js"),
  Chunk640319 = require("./640319.js"),
  Chunk24902 = require("./24902.js"),
  Chunk649685 = require("./649685.js"),
  Chunk343076 = require("./343076.js"),
  Chunk148743 = require("./148743.js"),
  Chunk930658 = require("./930658.js"),
  Chunk843505 = require("./843505.js"),
  Chunk751212 = require("./751212.js"),
  Chunk596963 = require("./596963.js"),
  Chunk7584 = require("./7584.js"),
  Chunk776231 = require("./776231.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk690521 = require("./690521.js"),
  Chunk194486 = require("./194486.js"),
  Chunk985018 = require("./985018.jsx");
let x = {
    start: 10,
    end: 15
  },
  M = [Chunk791454],
  j = [Chunk54991, Chunk149834, Chunk372889, Chunk764724, Chunk535275, Chunk228158, Chunk980883, Chunk577436, Chunk502561, Chunk71442, Chunk213961, Chunk942344, Chunk640319, Chunk24902, Chunk649685, Chunk343076, Chunk148743, Chunk930658, Chunk843505, Chunk751212, Chunk596963],
  k = {
    [Chunk194486.B.BASIC]: M,
    [Chunk194486.B.PREMIUM]: j
  },
  U = i().memoize(e => new Promise(t => {
    let n = new Image;
    n.src = e, n.crossOrigin = "Anonymous", n.onload = () => {
      let r = 32 * (0, N.mZ)();
      if (n.width === r && n.height === r) t(e);
      else {
        var i;
        let e = document.createElement("canvas");
        e.width = r, e.height = r, null == (i = e.getContext("2d")) || i.drawImage(n, 0, 0), t(e.toDataURL("image/png"))
      }
    }
  })),
  G = (e, t) => {
    let n = k[e];
    if (null != t && e === D.B.PREMIUM) {
      let e = t.end + 1;
      return Math.floor(Math.random() * (t.start - e) + e)
    }
    return Math.floor(Math.random() * n.length)
  };

function V(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 32;
  if (null != e.id) {
    var n;
    return R.Ay.getEmojiURL({
      id: e.id,
      animated: null != (n = e.animated) && n,
      size: t
    })
  }
  let r = C.Ay.convertSurrogateToName(e.name, false),
    i = C.Ay.getByName(r);
  return null != i ? P.Ay.getURL(i.surrogates) : ""
}

function F(e, t) {
  return i()(e).map(e => {
    var n;
    return null != (n = e[t]) ? n : null
  }).filter(e => null != e).uniq().value()
}

function B(e) {
  var t, n, r, i, a, o;
  if (e.length < 1) return "";
  let s = F(e, "userId"),
    l = F(e, "emojiName"),
    c = l.length < 2 ? null != (t = null == l ? true : l[0]) ? t : "" : l.join(", ");
  return s.length < 1 ? "" : 1 === s.length ? L.intl.formatToPlainString(L.t.yZYxzF, {
    firstUsername: null == (n = w.default.getUser(s[0])) ? true : n.username,
    emojiNames: c
  }) : 2 === s.length ? L.intl.formatToPlainString(L.t["8rmtbd"], {
    firstUsername: null == (r = w.default.getUser(s[0])) ? true : r.username,
    secondUsername: null == (i = w.default.getUser(s[1])) ? true : i.username,
    emojiNames: c
  }) : L.intl.formatToPlainString(L.t["/okjv0"], {
    firstUsername: null == (a = w.default.getUser(s[0])) ? true : a.username,
    secondUsername: null == (o = w.default.getUser(s[1])) ? true : o.username,
    count: s.length - 2,
    emojiNames: c
  })
}