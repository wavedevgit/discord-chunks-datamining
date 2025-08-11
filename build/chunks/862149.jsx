/** Chunk was on 34779 **/
/** chunk id: 862149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk803595 = require("./803595.js");

function u(e) {
  let {
    withHeader: t = true,
    size: n = 15
  } = e, i = (0, s.e7)([a.Z], () => a.Z.useReducedMotion);
  return <o.Kq gap={4}>{t && <div className={l()(c.wrapper, {
        [c.noAnimation]: i
      })} style={{
        paddingTop: 8,
        paddingBottom: 8
      }}><d className={l()(c.lineShort, c.loadingAnimation)} /></div>}{Array.from({
      length: n
    }).map((e, t) => <h />)}</o.Kq>
}

function d(e) {
  let {
    className: t
  } = e;
  return <div className={l()(c.line, t)} />
}

function h() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
  return <div style={{
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: 4
    }} className={l()(Chunk803595.wrapper, {
      [Chunk803595.noAnimation]: module
    })}>{<div className={l()(Chunk803595.avatar, Chunk803595.loadingAnimation)} />}{<div className={Chunk803595.lineContainer}>{<d className={l()(Chunk803595.lineMedium, Chunk803595.loadingAnimation)} />}{<d className={l()(Chunk803595.lineShort, Chunk803595.loadingAnimation)} />}{<d className={l()(Chunk803595.lineLong, Chunk803595.loadingAnimation)} />}</div>}</div>
}