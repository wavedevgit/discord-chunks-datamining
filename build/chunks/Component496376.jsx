/** Chunk was on 92917 **/
/** chunk id: 496376, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk974875 = require("./974875.jsx"),
  Chunk900819 = require("./900819.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    messageId: t,
    channelId: n
  } = e, u = (0, l.bG)([o.A], () => o.A.canSubmitFpReport(t)), d = i.useCallback(() => {
    (0, s.Q)(n, t)
  }, [n, t]);
  return (0, r.jsx)(a.Button, {
    variant: "secondary",
    text: c.intl.string(c.t["4q1Elf"]),
    onClick: d,
    disabled: !u
  })
}