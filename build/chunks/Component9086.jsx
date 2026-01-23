/** Chunk was on 28636 **/
/** chunk id: 9086, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk973925 = require("./973925.js"),
  Chunk975571 = require("./975571.js"),
  Chunk307600 = require("./307600.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk276156 = require("./276156.js");
let p = Chunk975571.A.getArticleURL(Chunk652215.MVz.BOT_DATA_ACCESS);

function h(e) {
  let {
    application: t
  } = e, {
    hasMessageContent: n,
    hasGuildPresences: s,
    hasGuildMembers: c,
    hasIntents: h
  } = (0, a.Z)({
    flags: null == t ? true : t.flags
  }), g = l.useCallback(() => {
    null != t.privacy_policy_url && (0, o.h)({
      href: t.privacy_policy_url
    })
  }, [t.privacy_policy_url]);
  return (0, r.jsxs)("div", {
    className: u.hd,
    children: [(0, r.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      children: d.intl.string(d.t.QzDgMq)
    }), (0, r.jsxs)("div", {
      className: u.hQ,
      children: [h && (0, r.jsxs)("ul", {
        className: u.In,
        children: [(0, r.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          color: "text-default",
          children: d.intl.string(d.t.U6KH5S)
        }), n && (0, r.jsx)(m, {
          icon: i.oyn,
          heading: d.intl.string(d.t.gJpBO2),
          body: d.intl.string(d.t["L+QVbh"])
        }), s && (0, r.jsx)(m, {
          icon: i.nRI,
          heading: d.intl.string(d.t["jo0oj/"]),
          body: d.intl.string(d.t.Dm0jqx)
        }), c && (0, r.jsx)(m, {
          icon: i.nFg,
          heading: d.intl.string(d.t.QZql7O),
          body: d.intl.string(d.t["ez/N/R"])
        })]
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: d.intl.format(d.t.b6nqk0, {
          helpCenterUrl: p
        })
      }), null != t.privacy_policy_url && (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-default",
        className: u.hM,
        children: d.intl.format(d.t.agYVY5, {
          onClick: g
        })
      })]
    })]
  })
}

function m(e) {
  let {
    icon: t,
    heading: n,
    body: l
  } = e;
  return (0, r.jsxs)("li", {
    className: u.KT,
    children: [(0, r.jsx)(t, {
      color: "currentColor",
      size: "md"
    }), (0, r.jsxs)("div", {
      className: u.D6,
      children: [(0, r.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        color: "text-default",
        children: n
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: l
      })]
    })]
  })
}