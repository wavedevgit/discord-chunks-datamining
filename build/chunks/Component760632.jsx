/** Chunk was on 64982 **/
/** chunk id: 760632, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  M: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
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
    afkChannelId: m
  } = e, p = i.useMemo(() => [{
    value: o,
    label: a.intl.formatToPlainString(a.t.iXLF9f, {
      minutes: 1
    })
  }, {
    value: c,
    label: a.intl.formatToPlainString(a.t.iXLF9f, {
      minutes: 5
    })
  }, {
    value: d,
    label: a.intl.formatToPlainString(a.t.iXLF9f, {
      minutes: 15
    })
  }, {
    value: u,
    label: a.intl.formatToPlainString(a.t.iXLF9f, {
      minutes: 30
    })
  }, {
    value: g,
    label: a.intl.formatToPlainString(a.t.xCjYxM, {
      hours: 1
    })
  }], []), f = i.useCallback(e => {
    s.Z.updateGuild({
      afkTimeout: parseInt(e, 10)
    })
  }, []);
  return (0, r.jsx)(l.q4e, {
    value: null == n ? null : "".concat(n),
    options: p,
    isDisabled: null == m || !t,
    onChange: f
  })
}