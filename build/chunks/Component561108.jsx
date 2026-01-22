/** Chunk was on 47841 **/
/** chunk id: 561108, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk713654 = require("./713654.js"),
  Chunk112389 = require("./112389.js"),
  Chunk961973 = require("./961973.js"),
  Chunk487626 = require("./487626.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk863694 = require("./863694.js"),
  Chunk992711 = require("./992711.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk945586 = require("./945586.js");

function x(e) {
  let {
    guild: t,
    scrollToQuestions: n
  } = e, i = (0, s.bG)([g.A], () => g.A.editedDefaultChannelIds), l = (0, u.$)(t.id, i).filter(e => e.isCategory() || (0, o.S)(e.guild_id, e.id));
  return (0, r.jsxs)("div", {
    className: p.kL,
    children: [(0, r.jsx)("div", {
      className: p.wx,
      children: (0, r.jsx)(b.A, {
        guildId: t.id,
        scrollToQuestions: n
      })
    }), (0, r.jsxs)("div", {
      className: p.o5,
      children: [(0, r.jsx)(O, {}), 0 === l.length && (0, r.jsx)(h, {}), (0, r.jsx)(j, {
        channels: l
      })]
    })]
  })
}

function h() {
  return (0, r.jsxs)("div", {
    className: p.p$,
    children: [(0, r.jsx)("div", {
      className: p.AI,
      children: (0, r.jsx)(a.N$i, {
        size: "md",
        color: "currentColor"
      })
    }), (0, r.jsx)(a.Text, {
      className: p.HA,
      variant: "text-md/normal",
      color: "text-muted",
      children: m.intl.string(m.t.Qj6O91)
    })]
  })
}

function j(e) {
  let {
    channels: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.map(e => e.isCategory() ? (0, r.jsx)(y, {
      label: e.name
    }, e.id) : (0, r.jsx)(v, {
      channel: e
    }, e.id))
  })
}

function O() {
  return (0, r.jsx)("div", {
    className: p.yF
  })
}

function y(e) {
  let {
    label: t
  } = e;
  return (0, r.jsxs)("div", {
    className: p.L1,
    children: [(0, r.jsx)(f.A, {
      className: p.OW,
      width: 12,
      height: 12,
      direction: f.A.Directions.DOWN
    }), (0, r.jsx)(a.Text, {
      variant: "text-xs/semibold",
      color: "text-muted",
      lineClamp: 1,
      children: t
    })]
  })
}

function v(e) {
  var t;
  let {
    channel: n
  } = e, i = (0, d.sZ)(n), s = null != (t = (0, c.gU)(n)) ? t : a.N$i;
  return (0, r.jsxs)("div", {
    className: p.Ix,
    children: [(0, r.jsx)(s, {
      className: p.p,
      size: "xs",
      color: "currentColor"
    }), (0, r.jsx)(a.Text, {
      className: p.HA,
      variant: "text-md/normal",
      color: "text-muted",
      lineClamp: 1,
      children: n.name
    }), (0, r.jsx)("div", {
      className: l()({
        [p.al]: i
      })
    })]
  })
}