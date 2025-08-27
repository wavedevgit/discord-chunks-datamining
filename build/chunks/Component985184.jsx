/** Chunk was on web.js **/
/** chunk id: 985184, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gt: () => h,
  ZP: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk95398 = require("./95398.jsx"),
  Chunk936141 = require("./936141.js"),
  Chunk197653 = require("./197653.jsx"),
  Chunk821618 = require("./821618.js");
let d = {
    isInContainer: true
  },
  f = {
    isInContainer: false
  },
  _ = Chunk647438.createContext(f);

function p(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(_.Provider, {
    value: d,
    children: t
  })
}

function h() {
  let {
    isInContainer: e
  } = Chunk647438.useContext(_);
  return module
}

function m(e) {
  let {
    components: t,
    accentColor: n,
    spoiler: a,
    renderComponents: d
  } = e, [f, _] = i.useState(a), h = e => (0, r.jsx)(c.am.AutoMeasuredNestedContainer, {
    children: i => (0, r.jsx)("div", {
      ref: i,
      className: o()(u.container, {
        [u.isHidden]: e,
        [u.withAccentColor]: null != n
      }),
      style: {
        "--__accent-color": n
      },
      children: (0, r.jsx)(p, {
        children: d(t)
      })
    })
  });
  return null == t || 0 === t.length ? null : a ? (0, r.jsx)(s.ZP, {
    type: s.ZP.Types.ATTACHMENT,
    reason: l.wk.SPOILER,
    obscured: f,
    onToggleObscurity: () => _(e => !e),
    children: e => h(e)
  }) : h(false)
}