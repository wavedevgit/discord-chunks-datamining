/** Chunk was on web.js **/
/** chunk id: 269203, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk246364 = require("./246364.js"),
  Chunk602606 = require("./602606.js"),
  Chunk705563 = require("./705563.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk967128 = require("./967128.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk97612 = require("./97612.js");

function p(e) {
  var t;
  let {
    joinRequest: n,
    guild: l
  } = e, c = (0, i.e7)([u.default], () => u.default.getUser(n.userId));
  return (0, r.jsxs)("div", {
    className: _.summaryContainer,
    children: [(0, r.jsxs)("div", {
      className: _.summaryHeader,
      children: [null != l && (0, r.jsxs)("div", {
        className: _.summaryHeaderClanInfo,
        children: [(0, r.jsx)(a.Z, {
          guild: l,
          active: true,
          size: a.Z.Sizes.SMOL,
          className: _.guildIcon
        }), (0, r.jsx)(o.X6q, {
          variant: "heading-sm/semibold",
          color: "header-primary",
          children: l.name
        })]
      }), null != c && (0, r.jsx)(o.X6q, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: f.intl.format(f.t.jDV3i4, {
          username: c.globalName
        })
      })]
    }), null == (t = n.formResponses) ? true : t.filter(e => e.field_type !== s.QJ.TERMS).map(e => {
      let t = e.field_type === s.QJ.MULTIPLE_CHOICE && null != e.response ? e.choices[e.response] : e.response;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: _.summarySeparator
        }), (0, r.jsxs)("div", {
          className: _.formResponseContainer,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-xs/semibold",
            color: "text-muted",
            children: e.label
          }), (0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "text-primary",
            children: t
          })]
        })]
      })
    })]
  })
}

function h(e) {
  let {
    channel: t
  } = e, {
    loading: n,
    joinRequest: i,
    joinRequestGuild: a
  } = (0, l.Z)(t.id);
  return (0, r.jsx)(d.ZP, {
    channelId: t.id,
    className: _.container,
    children: null != i && null != i.formResponses ? (0, r.jsxs)("div", {
      className: _.formContainer,
      children: [(0, r.jsx)("div", {
        children: (0, r.jsx)(p, {
          guild: a,
          joinRequest: i
        })
      }), (0, r.jsx)(c.Z, {
        channelId: t.id,
        showProfile: true
      })]
    }) : n ? (0, r.jsx)(o.$jN, {}) : null
  })
}