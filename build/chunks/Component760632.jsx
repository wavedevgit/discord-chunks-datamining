/** Chunk was on 9536 **/
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
  d = "".concat(900),
  u = "".concat(1800),
  g = "".concat(3600);

function m(e) {
  let {
    canManageGuild: t,
    afkTimeout: n,
    afkChannelId: m,
    label: f
  } = e, p = i.useMemo(() => [{
    value: o,
    label: s.intl.formatToPlainString(s.t.iXLF9W, {
      minutes: 1
    })
  }, {
    value: c,
    label: s.intl.formatToPlainString(s.t.iXLF9W, {
      minutes: 5
    })
  }, {
    value: d,
    label: s.intl.formatToPlainString(s.t.iXLF9W, {
      minutes: 15
    })
  }, {
    value: u,
    label: s.intl.formatToPlainString(s.t.iXLF9W, {
      minutes: 30
    })
  }, {
    value: g,
    label: s.intl.formatToPlainString(s.t.xCjYxK, {
      hours: 1
    })
  }], []), b = i.useCallback(e => {
    a.Z.updateGuild({
      afkTimeout: parseInt(e, 10)
    })
  }, []);
  return (0, r.jsx)(l.y6, {
    label: f,
    value: null == n ? null : "".concat(n),
    options: p,
    isDisabled: null == m || !t,
    onChange: b
  })
}