/** Chunk was on 82096 **/
/** chunk id: 586646, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk19780 = require("./19780.js"),
  Chunk571826 = require("./571826.js"),
  Chunk630759 = require("./630759.js"),
  Chunk301107 = require("./301107.js"),
  Chunk785792 = require("./785792.js"),
  Chunk190054 = require("./190054.jsx"),
  Chunk760373 = require("./760373.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk764229 = require("./764229.js");

function O(e) {
  let {
    channelId: t
  } = e, n = (0, i.e7)([s.Z], () => {
    var e;
    return null == (e = s.Z.getSecureFramesState()) ? true : e.epochAuthenticator
  }), O = (0, u.W)({
    fingerprintBase64: n,
    chunkSize: h.y6,
    desiredLength: h.YP
  }), N = l.useCallback(() => {
    (0, a.PM)({
      channelId: t
    })
  }, [t]);
  return <div className={p.container}>{<div className={p.tag}>{<o.mBM size={"xxs"} color={o.TVs.colors.TEXT_FEEDBACK_POSITIVE} />}{<o.Text variant={"text-xs/medium"} color={"text-feedback-positive"}>{g.intl.string(g.t["3BogKS"])}</o.Text>}</div>}{<o.Text variant={"text-xs/normal"} color={"text-secondary"}>{g.intl.string(g.t.B9JNsr)}</o.Text>}{<div className={p.header}>{<o.X6q variant={"text-sm/bold"} color={"header-primary"}>{g.intl.string(g.t.cTQI5u)}</o.X6q>}{null != O && <f.H chunks={O} color={o.TVs.colors.INTERACTIVE_NORMAL.css} onCopy={N} />}</div>}{<d.b className={p.code} chunks={O} columns={h.WK} />}{<o.Text variant={"text-xs/normal"} color={"text-secondary"}>{g.intl.format(g.t.wKxADQ, {
        helpArticle: (0, c.uV)()
      })}</o.Text>}</div>
}