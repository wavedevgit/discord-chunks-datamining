/** Chunk was on 67544 **/
/** chunk id: 814322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk393238 = require("./393238.js"),
  Chunk522474 = require("./522474.js"),
  Chunk451478 = require("./451478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk830917 = require("./830917.js"),
  Chunk120421 = require("./120421.js"),
  Chunk328665 = require("./328665.js"),
  Chunk268519 = require("./268519.js"),
  Chunk723682 = require("./723682.js"),
  Chunk424984 = require("./424984.jsx"),
  Chunk326955 = require("./326955.jsx"),
  Chunk550688 = require("./550688.jsx"),
  Chunk190328 = require("./190328.jsx"),
  Chunk423915 = require("./423915.jsx"),
  Chunk477839 = require("./477839.js"),
  Chunk981631 = require("./981631.js"),
  Chunk412190 = require("./412190.js");

function _() {
  let e = Math.floor((0, Chunk442837.e7)([Chunk120421.Z], () => Chunk120421.Z.currentPoints)),
    t = module.toString().length,
    n = "0".repeat(Math.max(0, Chunk477839.eg - exports));
  return <div className={Chunk412190.points}>{<span className={Chunk412190.pointsPadding}>{require}</span>}{<span className={Chunk412190.pointsValue}>{module}</span>}</div>
}

function C(e) {
  let {
    items: t,
    width: n,
    height: s,
    isPaused: o,
    windowKey: a
  } = e, c = (0, i.e7)([p.Z], () => p.Z.purchasedItems);
  return null == s || null == n ? null : <r.Fragment>{t.map(e => {
      if (null == c[e]) return;
      let t = b.pp[e];
      return (0, r.jsx)(t, {
        isPaused: o,
        width: n,
        height: s,
        windowKey: a
      }, e)
    })}</r.Fragment>
}

function Z() {
  return (0, Chunk328665.f)(), (0, Chunk268519.Z)(), null
}

function w(e) {
  let {
    className: t,
    windowKey: n
  } = e, {
    ref: o,
    width: m,
    height: g
  } = (0, c.ZP)(), {
    ref: j,
    height: w
  } = (0, c.ZP)(), E = (0, i.e7)([p.Z], () => p.Z.lifetimePoints > 0), S = (0, i.e7)([u.Z, l.Z], () => {
    let e = l.Z.getWindow(n);
    return null == e || !u.Z.isFocused((0, f.ZY)(e))
  });
  return (0, s.useEffect)(() => {
    d.default.track(N.rMx.CLICKER_GAME_LAUNCHED, {
      launch_type: E ? "CONTINUE" : "NEW"
    })
  }, []), <div ref={o} className={a()(t, P.container)}>{<div className={P.fullscreenItems}><C items={b.nw} width={m} height={g} isPaused={S} windowKey={n} /></div>}{<div className={P.aboveGround}>{<div className={P.fullscreenItems}><C items={b.uK} width={m} height={g} isPaused={S} windowKey={n} /></div>}{<div className={P.buttonAndPoints}>{<C items={b.rQ} width={m} height={g} isPaused={S} windowKey={n} />}{<_ />}{<div className={P.pointsItems}><C items={b.ci} width={m} height={g} isPaused={S} windowKey={n} /></div>}</div>}{<div className={P.fullscreenItems} ref={j}><C items={b.Ou} width={m} height={w} isPaused={S} windowKey={n} /></div>}</div>}{<div className={P.groundLine} />}{<div className={P.mainInteractables}>{<x.Z className={P.primaryShop} />}{<y.Z className={P.toolbar}>{<v.Z />}{<div className={P.toolbarSpacer} />}{<C items={b.WY} width={m} height={g} isPaused={S} windowKey={n} />}</y.Z>}</div>}{<div className={P.fullscreenItems}>{<C items={b.wT} width={m} height={g} isPaused={S} windowKey={n} />}{<O.Z />}</div>}{<Z />}{<h.Z />}</div>
}