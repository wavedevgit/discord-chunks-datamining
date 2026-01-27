/** Chunk was on 77870 **/
/** chunk id: 455067, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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
  } = e, c = (0, l.bG)([u.default], () => u.default.getUser(n.userId));
  return (0, r.jsxs)("div", {
    className: h.I8,
    children: [(0, r.jsxs)("div", {
      className: h.Ov,
      children: [null != o && (0, r.jsxs)("div", {
        className: h.yB,
        children: [(0, r.jsx)(s.A, {
          guild: o,
          active: true,
          size: s.A.Sizes.SMOL,
          className: h.$f
        }), (0, r.jsx)(i.Heading, {
          variant: "heading-sm/semibold",
          color: "text-strong",
          children: o.name
        })]
      }), null != c && (0, r.jsx)(i.Heading, {
        variant: "heading-xl/semibold",
        color: "text-strong",
        children: p.intl.format(p.t.jDV3i6, {
          username: c.globalName
        })
      })]
    }), null == (t = n.formResponses) ? true : t.filter(e => e.field_type !== a.rX.TERMS).map(e => {
      let t = e.field_type === a.rX.MULTIPLE_CHOICE && null != e.response ? e.choices[e.response] : e.response;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: h.g2
        }), (0, r.jsxs)("div", {
          className: h.fs,
          children: [(0, r.jsx)(i.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: e.label
          }), (0, r.jsx)(i.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            children: t
          })]
        })]
      })
    })]
  })
}

function g(e) {
  let {
    channel: t
  } = e, {
    loading: n,
    joinRequest: l,
    joinRequestGuild: s
  } = (0, o.A)(t.id);
  return (0, r.jsx)(d.Ay, {
    channelId: t.id,
    className: h.kL,
    children: null != l && null != l.formResponses ? (0, r.jsxs)("div", {
      className: h.KJ,
      children: [(0, r.jsx)("div", {
        children: (0, r.jsx)(f, {
          guild: s,
          joinRequest: l
        })
      }), (0, r.jsx)(c.A, {
        channelId: t.id,
        showProfile: true
      })]
    }) : n ? (0, r.jsx)(i.y$y, {}) : null
  })
}