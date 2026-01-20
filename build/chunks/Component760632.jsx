/** Chunk was on 9536 **/
/** chunk id: 760632, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  M: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk388032 = require("./388032.jsx");
let o = "".concat(60),
  c = "".concat(300),
  d = "".concat(900),
  u = "".concat(1800),
  g = "".concat(3600);

function f(e) {
  var t;
  let {
    canManageGuild: n,
    afkTimeout: f,
    afkChannelId: m,
    label: b
  } = e, p = i.useMemo(() => [{
    id: "1min",
    value: o,
    label: s.intl.formatToPlainString(s.t.iXLF9W, {
      minutes: 1
    })
  }, {
    id: "5min",
    value: c,
    label: s.intl.formatToPlainString(s.t.iXLF9W, {
      minutes: 5
    })
  }, {
    id: "15min",
    value: d,
    label: s.intl.formatToPlainString(s.t.iXLF9W, {
      minutes: 15
    })
  }, {
    id: "30min",
    value: u,
    label: s.intl.formatToPlainString(s.t.iXLF9W, {
      minutes: 30
    })
  }, {
    id: "1hr",
    value: g,
    label: s.intl.formatToPlainString(s.t.xCjYxK, {
      hours: 1
    })
  }], []), h = i.useCallback(e => {
    a.Z.updateGuild({
      afkTimeout: parseInt(e, 10)
    })
  }, []);
  return (0, r.jsx)(l.PhF, {
    selectionMode: "single",
    label: b,
    value: null != (t = null == f ? true : f.toString()) ? t : true,
    options: p,
    disabled: null == m || !n,
    onSelectionChange: h
  })
}