/** Chunk was on web.js **/
/** chunk id: 448980, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk278074 = require("./278074.js"),
  Chunk26033 = require("./26033.js"),
  Chunk297781 = require("./297781.jsx"),
  Chunk649700 = require("./649700.js"),
  Chunk750154 = require("./750154.js"),
  Chunk16779 = require("./16779.jsx"),
  Chunk981631 = require("./981631.js");
let d = e => (0, l.dS)(e) ? [] : e.type === u.IIU.PLAYING ? [c.ho, c.Xh] : e.type === u.IIU.LISTENING ? [c.ho] : e.type === u.IIU.WATCHING ? [c.ho, c.Rg] : e.type === u.IIU.COMPETING ? [c.ho] : [];

function f(e) {
  let {
    entry: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: [o.U9, o.wO, o.f, o.n8, o.v1, o.pQ].map((e, n) => (0, r.jsx)(e, {
      entry: t
    }, "entry-".concat(n)))
  })
}

function p(e) {
  let {
    entry: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: [o.E6].map((e, n) => (0, r.jsx)(e, {
      entry: t
    }, "entry-".concat(n)))
  })
}

function _(e) {
  let {
    entry: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: [o.An].map((e, n) => (0, r.jsx)(e, {
      entry: t
    }, "entry-".concat(n)))
  })
}

function h(e) {
  let {
    user: t,
    activity: n,
    className: l
  } = e, c = (0, s.Z)({
    activity: n,
    user: t
  }), u = d(n);
  return 0 === u.length ? null : (0, r.jsxs)(o.Gk, {
    location: o.Gt.USER_PROFILE,
    className: l,
    children: [u.map((e, t) => (0, r.jsx)(e, {
      activity: n
    }, "activity-".concat(t))), (0, i.EQ)(c).when(a.Cb, e => (0, r.jsx)(f, {
      entry: e
    })).when(a.Q0, e => (0, r.jsx)(p, {
      entry: e
    })).when(a.KF, e => (0, r.jsx)(_, {
      entry: e
    })).otherwise(() => null)]
  })
}