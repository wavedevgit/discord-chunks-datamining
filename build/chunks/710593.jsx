/** Chunk was on web.js **/
/** chunk id: 710593, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => f
}), require("./35282.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk358085 = require("./358085.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk890797 = require("./890797.js");

function c(e) {
  let {
    direction: t = "up"
  } = e;
  return <svg width={"10"} height={"10"} xmlns={"http://www.w3.org/2000/svg"} className={o()(l.bindArrow, l[t])}><g fill={"#FFFFFF"}><polygon transform={"translate(5.025000, 5.000000) scale(1, -1) translate(-5.025000, -5.000000) "} points={"4.16666667 10 4.16666672 3.33333333 1.25 6.25 0.05 5 5.00000005 0 9.99999967 5 8.75 6.25 5.83333338 3.33333333 5.83333333 10"} /></g></svg>
}

function u(e) {
  let {
    children: t,
    text: n,
    macText: i,
    label: o,
    macLabel: s
  } = e, c = (0, a.isMac)() || (0, a.isMacWeb)(), u = c && null != i ? l.systemFont : true, d = c && null != s ? s : o, f = c && null != i ? i : null != t ? t : n;
  return <span className={u} role={null != d ? "img" : true} aria-label={null != d ? d : true}>{f}</span>
}
let d = {
  ctrl: () => <u macText={"⌃"} text={"ctrl"} label={Chunk388032.intl.string(Chunk388032.t.jm6v8v)} />,
  cmd: () => <u macText={"⌘"} text={"cmd"} label={Chunk388032.intl.string(Chunk388032.t.pYkiQk)} />,
  mod: () => <u macText={"⌘"} text={"ctrl"} label={Chunk388032.intl.string(Chunk388032.t.jm6v8v)} macLabel={Chunk388032.intl.string(Chunk388032.t.pYkiQk)} />,
  alt: () => <u macText={"⌥"} text={"alt"} label={Chunk388032.intl.string(Chunk388032.t.R2n7d3)} macLabel={Chunk388032.intl.string(Chunk388032.t.FMYSJS)} />,
  shift: () => <u macText={"⇧"} text={Chunk388032.intl.string(Chunk388032.t["L+jWo6"])} label={Chunk388032.intl.string(Chunk388032.t["q+/2+f"])} />,
  up: () => <u label={Chunk388032.intl.string(Chunk388032.t.HxzHDQ)} macText={"▲"}><c direction={"up"} /></u>,
  down: () => <u label={Chunk388032.intl.string(Chunk388032.t["a+iRlJ"])} macText={"▼"}><c direction={"down"} /></u>,
  left: () => <u label={Chunk388032.intl.string(Chunk388032.t.xFjIVF)} macText={"◀"}><c direction={"left"} /></u>,
  right: () => <u label={Chunk388032.intl.string(Chunk388032.t.BT3jf3)} macText={"▶"}><c direction={"right"} /></u>,
  pageup: () => Chunk388032.intl.string(Chunk388032.t.VdCWGB),
  pagedown: () => Chunk388032.intl.string(Chunk388032.t.gpSh3d),
  "any-character": () => Chunk388032.intl.string(Chunk388032.t.CkGpcX),
  plus: () => "+",
  return: () => <u macText={"⏎"} text={Chunk388032.intl.string(Chunk388032.t.SUweGx)} label={Chunk388032.intl.string(Chunk388032.t.yLNalZ)} macLabel={Chunk388032.intl.string(Chunk388032.t.V7nPj4)} />,
  enter: () => <u macText={"⏎"} text={Chunk388032.intl.string(Chunk388032.t.SUweGx)} label={Chunk388032.intl.string(Chunk388032.t.yLNalZ)} macLabel={Chunk388032.intl.string(Chunk388032.t.V7nPj4)} />,
  escape: () => <u text={Chunk388032.intl.string(Chunk388032.t.cQmsQE)} label={Chunk388032.intl.string(Chunk388032.t["2qsw5+"])} />,
  esc: () => <u text={Chunk388032.intl.string(Chunk388032.t.cQmsQE)} label={Chunk388032.intl.string(Chunk388032.t["2qsw5+"])} />,
  backspace: () => <u macText={"⌫"} text={Chunk388032.intl.string(Chunk388032.t["L+36+v"])} label={Chunk388032.intl.string(Chunk388032.t["9c/Ikp"])} macLabel={Chunk388032.intl.string(Chunk388032.t.BTFDmp)} />
};

function f(e) {
  let {
    shortcut: t,
    dim: n = false,
    className: i,
    keyClassName: a
  } = e, s = Array.isArray(t) ? t : t.split("+");
  return <div className={o()(l.combo, i, {
      [l.dim]: n
    })}>{s.map(e => null != d[e] ? d[e]() : e).map((e, t) => (0, r.jsx)("span", {
      className: o()(l.key, a),
      children: e
    }, t))}</div>
}