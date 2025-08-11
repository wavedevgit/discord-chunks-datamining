/** Chunk was on web.js **/
/** chunk id: 260035, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk505266 = require("./505266.js"),
  Chunk442837 = require("./442837.js"),
  Chunk944486 = require("./944486.js"),
  Chunk745510 = require("./745510.js"),
  Chunk675654 = require("./675654.js"),
  Chunk232141 = require("./232141.js");

function d(e) {
  let {
    children: t
  } = e, [n, d] = i.useState(null), [f, _] = i.useState(null), p = i.useRef(new Set), [h, m] = i.useState(false), g = (0, a.e7)([s.Z], () => s.Z.getCurrentlySelectedChannelId()), E = i.useCallback(e => {
    p.current.delete(e), m(p.current.size > 0)
  }, []), b = i.useCallback(e => (p.current.add(e), m(true), () => E(e)), [E]), y = i.useCallback((e, t) => {
    for (let n of p.current) n(e, t)
  }, []);
  return i.useEffect(() => {
    null == f || f.clearConfetti()
  }, [f, g]), <r.Fragment>{<l.d confettiCanvas={f} spriteCanvas={n} baseConfig={c.We} addClickListener={b} removeClickListener={E}>{t}</l.d>}{<o.O_ ref={_} className={u.canvas} environment={c.rq} onClick={h ? y : true} />}{<o.Ji ref={d} colors={c.Br} sprites={c.CA} spriteWidth={c.Ko} spriteHeight={c.Ko} />}</r.Fragment>
}