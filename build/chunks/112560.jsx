/** Chunk was on web.js **/
/** chunk id: 112560, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => u,
  Z: () => d
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.js"),
  Chunk993135 = require("./993135.js");

function u(e) {
  return e < 400 ? "small" : e < 1e3 ? "medium" : "large"
}

function d(e) {
  let {
    onCTAClick: t,
    callToAction: n,
    header: i,
    description: u,
    errorCodeMessage: d,
    size: f,
    className: _,
    artURL: p,
    noArt: h = false,
    selected: m = false
  } = e;
  return <l.Z className={_} justify={l.Z.Justify.CENTER} align={l.Z.Align.CENTER} direction={l.Z.Direction.VERTICAL} style={{
      padding: 4
    }}>{!h && null != p && <div className={o()(c.art, c[f])} style={{
        backgroundImage: "url(".concat(p, ")")
      }} />}{null != i ? <s.Text color={"none"} variant={"text-md/semibold"} className={c.header}>{i}</s.Text> : null}{null != d ? <s.Text className={c.errorCodeMessage} variant={"text-sm/semibold"} color={"text-muted"} selectable={true}>{d}</s.Text> : null}{null != u && (null == d || "small" !== f) ? <s.Text color={"none"} className={c.description} variant={"text-sm/medium"}>{u}</s.Text> : null}{m || null == n ? null : <a.zx className={c.outerButton} size={a.zx.Sizes.NONE} color={a.zx.Colors.WHITE} look={a.zx.Looks.BLANK} innerClassName={c.button} onClick={e => {
        e.stopPropagation(), null == t || t(e)
      }}>{n}</a.zx>}</l.Z>
}