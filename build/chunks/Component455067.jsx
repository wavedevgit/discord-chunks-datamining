/** Chunk was on 17869 **/
/** chunk id: 455067, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk513461 = require("./513461.js"),
  Chunk654265 = require("./654265.js"),
  Chunk561446 = require("./561446.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk314307 = require("./314307.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk958404 = require("./958404.js");

function f(e) {
  var t;
  let {
    joinRequest: n,
    guild: o
  } = e, c = (0, r.bG)([u.default], () => u.default.getUser(n.userId));
  return (0, l.jsxs)("div", {
    className: p.I8,
    children: [(0, l.jsxs)("div", {
      className: p.Ov,
      children: [null != o && (0, l.jsxs)("div", {
        className: p.yB,
        children: [(0, l.jsx)(a.A, {
          guild: o,
          active: true,
          size: a.A.Sizes.SMOL,
          className: p.$f
        }), (0, l.jsx)(i.Heading, {
          variant: "heading-sm/semibold",
          color: "text-strong",
          children: o.name
        })]
      }), null != c && (0, l.jsx)(i.Heading, {
        variant: "heading-xl/semibold",
        color: "text-strong",
        children: h.intl.format(h.t.jDV3i6, {
          username: c.globalName
        })
      })]
    }), null == (t = n.formResponses) ? true : t.filter(e => e.field_type !== s.rX.TERMS).map(e => {
      let t = e.field_type === s.rX.MULTIPLE_CHOICE && null != e.response ? e.choices[e.response] : e.response;
      return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("hr", {
          className: p.g2
        }), (0, l.jsxs)("div", {
          className: p.fs,
          children: [(0, l.jsx)(i.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: e.label
          }), (0, l.jsx)(i.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            children: t
          })]
        })]
      })
    })]
  })
}

function m(e) {
  let {
    channel: t
  } = e, {
    loading: n,
    joinRequest: r,
    joinRequestGuild: a
  } = (0, o.A)(t.id);
  return (0, l.jsx)(d.Ay, {
    channelId: t.id,
    className: p.kL,
    children: null != r && null != r.formResponses ? (0, l.jsxs)("div", {
      className: p.KJ,
      children: [(0, l.jsx)("div", {
        children: (0, l.jsx)(f, {
          guild: a,
          joinRequest: r
        })
      }), (0, l.jsx)(c.A, {
        channelId: t.id,
        showProfile: true
      })]
    }) : n ? (0, l.jsx)(i.y$y, {}) : null
  })
}