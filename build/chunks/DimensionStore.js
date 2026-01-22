/** Chunk was on web.js **/
/** chunk id: 72314, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var r, Chunk311907 = require("./311907.js"),
  Chunk52133 = require("./52133.js"),
  Chunk73153 = require("./73153.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = {},
  c = {},
  u = {
    scrollTop: 0
  };

function d(e) {
  return {
    guildId: e,
    scrollTop: null,
    scrollTo: null
  }
}

function f(e) {
  let {
    channelId: t,
    scrollTop: n,
    scrollHeight: r,
    offsetHeight: i
  } = e, s = l[t];
  if (null == n || null == r || null == i) {
    if (null == s) returnfalse;
    delete l[t]
  } else {
    let e = {
      channelId: t,
      scrollTop: n,
      scrollHeight: r,
      offsetHeight: i
    };
    if (null != s && (0, a.A)(s, e)) returnfalse;
    l[t] = e
  }
}

function p(e) {
  let {
    scrollTop: t
  } = e;
  u.scrollTop = t
}

function _(e) {
  let {
    channelId: t
  } = e;
  h(t) && delete l[t]
}

function h(e) {
  if (null == l[e]) return;
  let {
    scrollTop: t,
    scrollHeight: n,
    offsetHeight: r
  } = l[e];
  return t === n - r
}

function m(e) {
  let {
    guildId: t,
    scrollTop: n,
    scrollTo: r
  } = e;
  null == c[t] && (c[t] = d(t)), true !== n && (c[t].scrollTop = n);
  let i = false;
  return true !== r && (i = c[t].scrollTo !== r, c[t].scrollTo = r), null != r || i
}
class g extends(r = Chunk311907.Ay.Store) {
  percentageScrolled(e) {
    if (null != l[e]) {
      let {
        scrollTop: t,
        scrollHeight: n
      } = l[e];
      return t / n
    }
    return 1
  }
  getChannelDimensions(e) {
    return l[e]
  }
  getGuildDimensions(e) {
    var t;
    return null != (t = c[e]) ? t : d(e)
  }
  getGuildListDimensions() {
    return u
  }
  isAtBottom(e) {
    return h(e)
  }
}
o(g, "displayName", "DimensionStore");
let E = new g(Chunk73153.h, {
  UPDATE_CHANNEL_DIMENSIONS: f,
  UPDATE_CHANNEL_LIST_DIMENSIONS: m,
  UPDATE_GUILD_LIST_DIMENSIONS: p,
  CALL_CREATE: _
})