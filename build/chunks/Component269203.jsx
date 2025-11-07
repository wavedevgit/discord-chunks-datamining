/** Chunk was on 13140 **/
/** chunk id: 269203, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk246364 = require("./246364.js"),
  Chunk602606 = require("./602606.js"),
  Chunk705563 = require("./705563.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk967128 = require("./967128.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk496363 = require("./496363.js");

function h(e) {
  var t;
  let {
    joinRequest: n,
    guild: s
  } = e, c = (0, i.e7)([u.default], () => u.default.getUser(n.userId));
  return (0, r.jsxs)("div", {
    className: f.summaryContainer,
    children: [(0, r.jsxs)("div", {
      className: f.summaryHeader,
      children: [null != s && (0, r.jsxs)("div", {
        className: f.summaryHeaderClanInfo,
        children: [(0, r.jsx)(a.Z, {
          guild: s,
          active: true,
          size: a.Z.Sizes.SMOL,
          className: f.guildIcon
        }), (0, r.jsx)(l.Heading, {
          variant: "heading-sm/semibold",
          color: "header-primary",
          children: s.name
        })]
      }), null != c && (0, r.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: p.intl.format(p.t.jDV3i6, {
          username: c.globalName
        })
      })]
    }), null == (t = n.formResponses) ? true : t.filter(e => e.field_type !== o.QJ.TERMS).map(e => {
      let t = e.field_type === o.QJ.MULTIPLE_CHOICE && null != e.response ? e.choices[e.response] : e.response;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: f.summarySeparator
        }), (0, r.jsxs)("div", {
          className: f.formResponseContainer,
          children: [(0, r.jsx)(l.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: e.label
          }), (0, r.jsx)(l.Text, {
            variant: "text-md/medium",
            color: "text-primary",
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
    joinRequest: i,
    joinRequestGuild: a
  } = (0, s.Z)(t.id);
  return (0, r.jsx)(d.ZP, {
    channelId: t.id,
    className: f.container,
    children: null != i && null != i.formResponses ? (0, r.jsxs)("div", {
      className: f.formContainer,
      children: [(0, r.jsx)("div", {
        children: (0, r.jsx)(h, {
          guild: a,
          joinRequest: i
        })
      }), (0, r.jsx)(c.Z, {
        channelId: t.id,
        showProfile: true
      })]
    }) : n ? (0, r.jsx)(l.$jN, {}) : null
  })
}