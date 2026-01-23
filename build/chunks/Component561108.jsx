/** Chunk was on 47841 **/
/** chunk id: 561108, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
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

function h(e) {
  let {
    guild: t,
    scrollToQuestions: n
  } = e, i = (0, s.bG)([m.A], () => m.A.editedDefaultChannelIds), l = (0, u.$)(t.id, i).filter(e => e.isCategory() || (0, c.S)(e.guild_id, e.id));
  return (0, r.jsxs)("div", {
    className: b.kL,
    children: [(0, r.jsx)("div", {
      className: b.wx,
      children: (0, r.jsx)(p.A, {
        guildId: t.id,
        scrollToQuestions: n
      })
    }), (0, r.jsxs)("div", {
      className: b.o5,
      children: [(0, r.jsx)(_, {}), 0 === l.length && (0, r.jsx)(x, {}), (0, r.jsx)(j, {
        channels: l
      })]
    })]
  })
}

function x() {
  return (0, r.jsxs)("div", {
    className: b.p$,
    children: [(0, r.jsx)("div", {
      className: b.AI,
      children: (0, r.jsx)(a.N$i, {
        size: "md",
        color: "currentColor"
      })
    }), (0, r.jsx)(a.Text, {
      className: b.HA,
      variant: "text-md/normal",
      color: "text-muted",
      children: f.intl.string(f.t.Qj6O91)
    })]
  })
}

function j(e) {
  let {
    channels: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.map(e => e.isCategory() ? (0, r.jsx)(O, {
      label: e.name
    }, e.id) : (0, r.jsx)(v, {
      channel: e
    }, e.id))
  })
}

function _() {
  return (0, r.jsx)("div", {
    className: b.yF
  })
}

function O(e) {
  let {
    label: t
  } = e;
  return (0, r.jsxs)("div", {
    className: b.L1,
    children: [(0, r.jsx)(g.A, {
      className: b.OW,
      width: 12,
      height: 12,
      direction: g.A.Directions.DOWN
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
  } = e, i = (0, d.sZ)(n), s = null != (t = (0, o.gU)(n)) ? t : a.N$i;
  return (0, r.jsxs)("div", {
    className: b.Ix,
    children: [(0, r.jsx)(s, {
      className: b.p,
      size: "xs",
      color: "currentColor"
    }), (0, r.jsx)(a.Text, {
      className: b.HA,
      variant: "text-md/normal",
      color: "text-muted",
      lineClamp: 1,
      children: n.name
    }), (0, r.jsx)("div", {
      className: l()({
        [b.al]: i
      })
    })]
  })
}