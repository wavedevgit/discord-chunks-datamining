/** Chunk was on 54052 **/
/** chunk id: 760632, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => g
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
  m = "".concat(3600);

function g(e) {
  let {
    canManageGuild: t,
    afkTimeout: n,
    afkChannelId: g
  } = e, p = i.useMemo(() => [{
    value: o,
    label: s.intl.formatToPlainString(s.t.iXLF9f, {
      minutes: 1
    })
  }, {
    value: c,
    label: s.intl.formatToPlainString(s.t.iXLF9f, {
      minutes: 5
    })
  }, {
    value: d,
    label: s.intl.formatToPlainString(s.t.iXLF9f, {
      minutes: 15
    })
  }, {
    value: u,
    label: s.intl.formatToPlainString(s.t.iXLF9f, {
      minutes: 30
    })
  }, {
    value: m,
    label: s.intl.formatToPlainString(s.t.xCjYxM, {
      hours: 1
    })
  }], []), f = i.useCallback(e => {
    a.Z.updateGuild({
      afkTimeout: parseInt(e, 10)
    })
  }, []);
  return (0, r.jsx)(l.q4e, {
    value: null == n ? null : "".concat(n),
    options: p,
    isDisabled: null == g || !t,
    onChange: f
  })
}