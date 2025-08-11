/** Chunk was on web.js **/
/** chunk id: 613413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./49124.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk94171 = require("./94171.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk906467 = require("./906467.js"),
  Chunk857192 = require("./857192.js"),
  Chunk835225 = require("./835225.js"),
  Chunk117795 = require("./117795.jsx"),
  Chunk565384 = require("./565384.js"),
  Chunk418075 = require("./418075.js");

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function b() {
  let {
    debugTrackedData: e,
    impressions: t
  } = (0, Chunk565384.Xo)(e => ({
    debugTrackedData: e.debugTrackedData,
    impressions: e.impressions
  }), Chunk94171.X), n = (0, Chunk442837.e7)([Chunk857192.default], () => Chunk857192.default.isAnalyticsDebuggerEnabled), o = (0, Chunk442837.e7)([Chunk906467.Z], () => Chunk906467.Z.isDeveloper), [E, b] = Chunk73800.useState(false), y = null != module ? module : {}, {
    name: O
  } = y, v = g(y, ["name"]), I = null != O;
  return Chunk120356 && require ? <Chunk314910.ZP><div className={a()(Chunk418075.container, {
        [Chunk418075.containerMinimized]: E,
        [Chunk418075.notTracked]: !I
      })}>{<Chunk481060.P3F className={Chunk418075.minimizeButton} onClick={() => {
          b(!E)
        }}>{E ? (0, Chunk255367.jsx)(Chunk835225.Z, {}) : (0, Chunk255367.jsx)(Chunk117795.Z, {})}</Chunk481060.P3F>}{<div className={a()(Chunk418075.content, {
          [Chunk418075.contentMinimized]: E
        })}>{<Chunk481060.Text className={a()(Chunk418075.label, {
            [Chunk418075.notTracked]: !I
          })} variant={"text-xxs/normal"}>{I ? <Chunk481060.owK size={"md"} color={"currentColor"} className={Chunk418075.iconTracked} /> : <Chunk481060.k$p size={"md"} color={"currentColor"} className={Chunk418075.iconNotTracked} />}{null != O ? O : "(untracked)"}</Chunk481060.Text>}{<div className={Chunk418075.current}>{JSON.stringify(v, true, 2)}</div>}{<Chunk481060.Text className={a()(Chunk418075.label, {
            [Chunk418075.notTracked]: !I
          })} variant={"text-xxs/normal"}>{"impressions stack"}</Chunk481060.Text>}{<div className={Chunk418075.stack}>{JSON.stringify(exports, true, 2)}</div>}</div>}</div></Chunk314910.ZP> : null
}