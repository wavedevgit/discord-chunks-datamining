/** Chunk was on 384 **/
/** chunk id: 760632, original params: e,t,n (module,exports,require) **/
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
    afkChannelId: m,
    label: p
  } = e, f = i.useMemo(() => [{
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
  }], []), h = i.useCallback(e => {
    a.Z.updateGuild({
      afkTimeout: parseInt(e, 10)
    })
  }, []);
  return (0, r.jsx)(l.q4e, {
    label: p,
    value: null == n ? null : "".concat(n),
    options: f,
    isDisabled: null == m || !t,
    onChange: h
  })
}