/** Chunk was on 67544 **/
/** chunk id: 623553, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk668826 = require("./668826.js"),
  Chunk18582 = require("./18582.jsx"),
  Chunk3072 = require("./3072.js"),
  Chunk763283 = require("./763283.js"),
  Chunk892689 = require("./892689.js"),
  Chunk477839 = require("./477839.js"),
  Chunk603571 = require("./603571.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk416927 = require("./416927.js"),
  Chunk225893 = require("./225893.js"),
  Chunk768675 = require("./768675.js"),
  Chunk624868 = require("./624868.js");
let Chunk171665 = require("./171665.js");

function h() {
  return 100 * Math.round(5e3 * Math.random() / 100)
}

function x(e) {
  let {
    isPaused: t,
    width: n,
    height: x
  } = e, v = (0, s.useRef)(null), O = (0, s.useRef)(false), [j, N] = (0, s.useState)(false), P = (0, s.useRef)(h()), _ = (0, i.eR)(y), C = e => {
    var t;
    null == (t = v.current) || t.removeDrop(e), P.current = h(), N(false), clearTimeout(O.current)
  }, Z = e => {
    N(true), _(), (0, o.KH)(u.yN.LOOTBOXES, P.current), O.current = setTimeout(() => {
      C(e)
    }, 1e3)
  };
  (0, s.useEffect)(() => () => clearTimeout(O.current), []);
  let w = e => j ? <r.Fragment>{<div className={p.points}>{<c.Z variant={"text-lg/normal"}>{"+"}{P.current}</c.Z>}{<img src={m} alt={f.intl.string(d.default.BropER)} />}</div>}{<img src={b} alt={f.intl.string(d.default.CwZfY2)} width={100} height={100} />}</r.Fragment> : <a.Z onClick={() => Z(e)}><img src={g} alt={f.intl.string(d.default.CwZfY2)} width={100} height={100} /></a.Z>;
  return <l.Z ref={v} isPaused={t} itemId={u.yN.LOOTBOXES} chance={.2} points={0} width={n} height={x} dropPadding={200} maxDrops={1}>{e => (0, r.jsx)("div", {
      className: p.lootbox,
      children: w(e)
    })}</l.Z>
}