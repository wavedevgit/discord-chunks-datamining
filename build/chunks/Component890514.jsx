/** Chunk was on 47841 **/
/** chunk id: 890514, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  S: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk997509 = require("./997509.js"),
  Chunk985018 = require("./985018.jsx");
let o = "".concat(60),
  c = "".concat(300),
  d = "".concat(900),
  u = "".concat(1800),
  g = "".concat(3600);

function m(e) {
  var t;
  let {
    canManageGuild: n,
    afkTimeout: m,
    afkChannelId: p,
    label: f
  } = e, b = i.useMemo(() => [{
    id: "1min",
    value: o,
    label: a.intl.formatToPlainString(a.t.iXLF9W, {
      minutes: 1
    })
  }, {
    id: "5min",
    value: c,
    label: a.intl.formatToPlainString(a.t.iXLF9W, {
      minutes: 5
    })
  }, {
    id: "15min",
    value: d,
    label: a.intl.formatToPlainString(a.t.iXLF9W, {
      minutes: 15
    })
  }, {
    id: "30min",
    value: u,
    label: a.intl.formatToPlainString(a.t.iXLF9W, {
      minutes: 30
    })
  }, {
    id: "1hr",
    value: g,
    label: a.intl.formatToPlainString(a.t.xCjYxK, {
      hours: 1
    })
  }], []), h = i.useCallback(e => {
    s.A.updateGuild({
      afkTimeout: parseInt(e, 10)
    })
  }, []);
  return (0, r.jsx)(l.l6P, {
    selectionMode: "single",
    label: f,
    value: null != (t = null == m ? true : m.toString()) ? t : true,
    options: b,
    disabled: null == p || !n,
    onSelectionChange: h
  })
}