/** Chunk was on web.js **/
/** chunk id: 985184, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gt: () => h,
  ZP: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk95398 = require("./95398.jsx"),
  Chunk936141 = require("./936141.js"),
  Chunk197653 = require("./197653.jsx"),
  Chunk719877 = require("./719877.js");
let d = {
    isInContainer: true
  },
  f = {
    isInContainer: false
  },
  _ = Chunk73800.createContext(f);

function p(e) {
  let {
    children: t
  } = e;
  return <_.Provider value={d}>{t}</_.Provider>
}

function h() {
  let {
    isInContainer: e
  } = Chunk73800.useContext(_);
  return module
}

function m(e) {
  let {
    components: t,
    accentColor: n,
    spoiler: o,
    renderComponents: d
  } = e, [f, _] = i.useState(o), h = e => <c.am.AutoMeasuredNestedContainer>{i => (0, r.jsx)("div", {
      ref: i,
      className: a()(u.container, {
        [u.isHidden]: e,
        [u.withAccentColor]: null != n
      }),
      style: {
        "--__accent-color": n
      },
      children: (0, r.jsx)(p, {
        children: d(t)
      })
    })}</c.am.AutoMeasuredNestedContainer>;
  return null == t || 0 === t.length ? null : o ? <s.ZP type={s.ZP.Types.ATTACHMENT} reason={l.wk.SPOILER} obscured={f} onToggleObscurity={() => _(e => !e)}>{e => h(e)}</s.ZP> : h(false)
}