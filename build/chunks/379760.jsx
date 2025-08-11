/** Chunk was on 74941 **/
/** chunk id: 379760, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.js"),
  Chunk7557 = require("./7557.jsx"),
  Chunk388905 = require("./388905.js"),
  Chunk388032 = require("./388032.js"),
  Chunk621198 = require("./621198.js"),
  Chunk20493 = require("./20493.js");

function d(e) {
  let {
    title: t,
    subtitle: r,
    error: d,
    onSubmit: p,
    onCancel: m
  } = e;
  return <l.Z direction={l.Z.Direction.VERTICAL}>{<a.Dx className={h.marginBottom8}>{t}</a.Dx>}{<a.DK className={u.subTitle}>{r}</a.DK>}{<div>{<o.Z inputClassName={u.codeInput} onSubmit={p} />}{null != d ? <i.Text className={u.error} variant={"text-sm/normal"}>{d}</i.Text> : null}</div>}{null != m && <s.zx className={u.button} onClick={m} color={s.zx.Colors.PRIMARY}>{c.intl.string(c.t["ETE/oK"])}</s.zx>}</l.Z>
}