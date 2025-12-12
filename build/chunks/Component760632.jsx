/** Chunk was on 384 **/
/** chunk id: 760632, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  M: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk388032 = require("./388032.jsx");
let o = "".concat(60),
  c = "".concat(300),
  u = "".concat(900),
  d = "".concat(1800),
  g = "".concat(3600);

function m(e) {
  let {
    canManageGuild: t,
    afkTimeout: n,
    afkChannelId: m,
    label: p
  } = e, f = i.useMemo(() => [{
    value: o,
    label: a.intl.formatToPlainString(a.t.iXLF9W, {
      minutes: 1
    })
  }, {
    value: c,
    label: a.intl.formatToPlainString(a.t.iXLF9W, {
      minutes: 5
    })
  }, {
    value: u,
    label: a.intl.formatToPlainString(a.t.iXLF9W, {
      minutes: 15
    })
  }, {
    value: d,
    label: a.intl.formatToPlainString(a.t.iXLF9W, {
      minutes: 30
    })
  }, {
    value: g,
    label: a.intl.formatToPlainString(a.t.xCjYxK, {
      hours: 1
    })
  }], []), h = i.useCallback(e => {
    s.Z.updateGuild({
      afkTimeout: parseInt(e, 10)
    })
  }, []);
  return (0, r.jsx)(l.y6, {
    label: p,
    value: null == n ? null : "".concat(n),
    options: f,
    isDisabled: null == m || !t,
    onChange: h
  })
}