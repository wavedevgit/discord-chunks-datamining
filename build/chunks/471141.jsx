/** Chunk was on web.js **/
/** chunk id: 471141, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk84735 = require("./84735.js"),
  Chunk437337 = require("./437337.jsx"),
  Chunk981729 = require("./981729.js"),
  Chunk770102 = require("./770102.js"),
  Chunk534542 = require("./534542.js"),
  Chunk538285 = require("./538285.js");

function _(e) {
  let {
    value: t,
    disabled: n = false,
    hideBorder: o = false,
    tooltipNote: _,
    onChange: p,
    className: h,
    style: m,
    note: g,
    children: E,
    disabledText: b,
    containerRef: y
  } = e, O = i.useRef(null), v = i.useRef(null), I = i.useId(), T = <l.r id={I} checked={t} onChange={p} disabled={n} focusProps={{
      enabled: false
    }} innerRef={O} />;
  return <div ref={y} style={m} className={a()(f.container, h, {
      [f.disabled]: n
    })}>{<s.t within={true} offset={false} focusTarget={O} ringTarget={v}><div className={f.labelRow} ref={v}>{<label htmlFor={I} className={f.title}>{E}</label>}{<div className={f.control}>{null != _ ? (0, r.jsx)(c.DY, {
            text: _,
            children: T
          }) : T}</div>}</div></s.t>}{null != g && <div className={f.note}><d.R disabled={n} type={d.g.DESCRIPTION}>{g}</d.R></div>}{n && null != b && <div className={f.disabledText}><d.R type={d.g.ERROR}>{b}</d.R></div>}{!o && <u.$ className={f.dividerDefault} />}</div>
}