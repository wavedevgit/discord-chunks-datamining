/** Chunk was on web.js **/
/** chunk id: 201275, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $7: () => c,
  ox: () => l,
  qE: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk376304 = require("./376304.js");

function l(e, t) {
  var n;
  if (null == e) return;
  let {
    customIconSrc: r,
    unicodeEmoji: i
  } = null != (n = (0, o.sE)(e, t)) ? n : {};
  if (null != r || null != i) return {
    src: r,
    name: e.name,
    roleId: e.id,
    size: t,
    unicodeEmoji: i
  }
}

function c(e) {
  let {
    guildId: t,
    roleId: n,
    size: c = 20,
    role: u,
    guild: d
  } = e, {
    guild: f,
    role: p
  } = (0, i.cf)([s.A, a.A], () => ({
    guild: null == d ? s.A.getGuild(t) : true,
    role: null == u && null != n ? a.A.getRole(t, n) : true
  }), [t, n, u, d]), _ = null != d ? d : f, h = null != u ? u : p;
  return r.useMemo(() => {
    if (null != _ && null != h && (0, o.fm)(_, h)) return l(h, c)
  }, [_, h, c])
}

function u(e, t) {
  let n = (0, i.bG)([s.A], () => s.A.getGuild(e));
  if (null != n && (0, o.fm)(n, t)) return l(t)
}