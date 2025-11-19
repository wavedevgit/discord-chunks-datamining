/** Chunk was on 69844 **/
/** chunk id: 215453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk860719 = require("./860719.js"),
  Chunk63063 = require("./63063.js"),
  Chunk49012 = require("./49012.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk74380 = require("./74380.js");
let p = Chunk63063.Z.getArticleURL(Chunk981631.BhN.BOT_DATA_ACCESS);

function m(e) {
  let {
    application: t
  } = e, {
    hasMessageContent: n,
    hasGuildPresences: s,
    hasGuildMembers: c,
    hasIntents: m
  } = (0, l.w)({
    flags: null == t ? true : t.flags
  }), g = a.useCallback(() => {
    null != t.privacy_policy_url && (0, o.q)({
      href: t.privacy_policy_url
    })
  }, [t.privacy_policy_url]);
  return (0, r.jsxs)("div", {
    className: u.sectionContainer,
    children: [(0, r.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: d.intl.string(d.t.QzDgMq)
    }), (0, r.jsxs)("div", {
      className: u.contentContainer,
      children: [m && (0, r.jsxs)("ul", {
        className: u.intentsList,
        children: [(0, r.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          color: "header-secondary",
          children: d.intl.string(d.t.U6KH5S)
        }), n && (0, r.jsx)(h, {
          icon: i.kBi,
          heading: d.intl.string(d.t.gJpBO2),
          body: d.intl.string(d.t["L+QVbh"])
        }), s && (0, r.jsx)(h, {
          icon: i.z65,
          heading: d.intl.string(d.t["jo0oj/"]),
          body: d.intl.string(d.t.Dm0jqx)
        }), c && (0, r.jsx)(h, {
          icon: i.BFJ,
          heading: d.intl.string(d.t.QZql7O),
          body: d.intl.string(d.t["ez/N/R"])
        })]
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: d.intl.format(d.t.b6nqk0, {
          helpCenterUrl: p
        })
      }), null != t.privacy_policy_url && (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        className: u.privacyPolicy,
        children: d.intl.format(d.t.agYVY5, {
          onClick: g
        })
      })]
    })]
  })
}

function h(e) {
  let {
    icon: t,
    heading: n,
    body: a
  } = e;
  return (0, r.jsxs)("li", {
    className: u.intentContainer,
    children: [(0, r.jsx)(t, {
      color: "currentColor",
      size: "md"
    }), (0, r.jsxs)("div", {
      className: u.intentTextContainer,
      children: [(0, r.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        color: "header-secondary",
        children: n
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: a
      })]
    })]
  })
}