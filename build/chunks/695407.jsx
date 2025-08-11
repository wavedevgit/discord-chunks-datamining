/** Chunk was on web.js **/
/** chunk id: 695407, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk1561 = require("./1561.jsx"),
  Chunk84735 = require("./84735.js"),
  Chunk670596 = require("./670596.js"),
  Chunk922770 = require("./922770.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk11159 = require("./11159.js");
let p = 18;

function h(e, t, n) {
  return t ? <div className={_.iconContainer}><u.$ type={u.$.Type.SPINNING_CIRCLE} className={_.icon} /></div> : e.length > 0 ? <s.P aria-label={f.intl.string(f.t["78fJND"])} className={a()(_.iconContainer, _.iconClickable)} onClick={e => {
      e.stopPropagation(), n("")
    }} onMouseDown={e => {
      e.preventDefault(), e.stopPropagation()
    }} focusProps={{
      offset: {
        top: false,
        right: false,
        bottom: false,
        left: false
      }
    }}><d.Dio size={"custom"} color={"currentColor"} width={p} height={p} className={_.icon} aria-label={f.intl.string(f.t.cpT0Cg)} /></s.P> : <div className={_.iconContainer}><d._Ve size={"custom"} color={"currentColor"} width={p} height={p} className={_.icon} aria-label={f.intl.string(f.t["5h0QOD"])} /></div>
}
let m = Chunk73800.forwardRef(function(e, t) {
  let {
    query: n,
    onChange: o,
    loading: a = false,
    disabled: s = false,
    placeholder: u = f.intl.string(f.t["5h0QOD"]),
    "aria-label": d,
    onInteraction: p
  } = e, m = i.useRef(null), g = i.useRef(null);
  i.useImperativeHandle(t, () => ({
    focus: () => {
      var e;
      return null == (e = g.current) ? true : e.focus()
    },
    blur: () => {
      var e;
      return null == (e = g.current) ? true : e.blur()
    },
    activate: () => false
  }), []);
  let E = h(n, a, o),
    b = e => {
      o(e.currentTarget.value), null == p || p(c.U.SEARCH)
    };
  return <l.t focusTarget={g} ringTarget={m} offset={{
      top: 2,
      bottom: 2,
      left: 4,
      right: 4
    }}><div className={_.container} ref={m}>{<input role={"searchbox"} aria-busy={a} ref={g} className={_.input} value={n} onChange={b} aria-label={d} placeholder={u} disabled={s} />}{E}</div></l.t>
})