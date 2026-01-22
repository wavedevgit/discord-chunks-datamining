/** Chunk was on web.js **/
/** chunk id: 282197, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk889137 = require("./889137.js"),
  Chunk20805 = require("./20805.js"),
  Chunk506326 = require("./506326.jsx"),
  Chunk365185 = require("./365185.js"),
  Chunk82149 = require("./82149.js"),
  Chunk78871 = require("./78871.jsx"),
  Chunk652215 = require("./652215.js");
let d = e => (0, l.Cy)(e) ? [] : e.type === u.$pd.PLAYING ? [c.QA, c.cy] : e.type === u.$pd.LISTENING ? [c.QA] : e.type === u.$pd.WATCHING ? [c.QA, c.Rq] : e.type === u.$pd.COMPETING ? [c.QA] : [];

function f(e) {
  let {
    entry: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: [s.$X, s.tR, s.K7, s.fg, s.sp, s.MK].map((e, n) => (0, r.jsx)(e, {
      entry: t
    }, "entry-".concat(n)))
  })
}

function p(e) {
  let {
    entry: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: [s.Xr].map((e, n) => (0, r.jsx)(e, {
      entry: t
    }, "entry-".concat(n)))
  })
}

function _(e) {
  let {
    entry: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: [s.Y8].map((e, n) => (0, r.jsx)(e, {
      entry: t
    }, "entry-".concat(n)))
  })
}

function h(e) {
  let {
    user: t,
    activity: n,
    className: l
  } = e, c = (0, o.A)({
    activity: n,
    user: t
  }), u = d(n);
  return 0 === u.length ? null : (0, r.jsxs)(s.mG, {
    location: s.N5.USER_PROFILE,
    className: l,
    children: [u.map((e, t) => (0, r.jsx)(e, {
      activity: n
    }, "activity-".concat(t))), (0, i.YW)(c).when(a.qQ, e => (0, r.jsx)(f, {
      entry: e
    })).when(a.UQ, e => (0, r.jsx)(p, {
      entry: e
    })).when(a.p6, e => (0, r.jsx)(_, {
      entry: e
    })).otherwise(() => null)]
  })
}