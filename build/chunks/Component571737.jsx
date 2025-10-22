/** Chunk was on 84283 **/
/** chunk id: 571737, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk783097 = require("./783097.js"),
  Chunk768581 = require("./768581.js"),
  Chunk956965 = require("./956965.jsx"),
  Chunk548514 = require("./548514.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk696401 = require("./696401.js");
let m = function(e) {
  let {
    application: t,
    onButtonsVisibilityChange: n
  } = e, m = a.useRef(null), h = a.useMemo(() => o.ZP.getApplicationIconURL({
    id: t.id,
    icon: t.icon,
    size: 96
  }), [t]), g = a.useMemo(() => {
    let e = [];
    return (0, s.vJ)(t) && e.push(u.intl.string(u.t.LO4f0P)), (0, s.Cb)(t) && (0 !== e.length && e.push("•"), e.push(u.intl.string(u.t["8z5B2U"]))), (0, s.Hu)(t) && (0 !== e.length && e.push("•"), e.push(u.intl.string(u.t["5khEk8"]))), e
  }, [t]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Z, {
      application: t,
      bannerType: "detail",
      iconURL: h
    }), (0, r.jsx)("div", {
      className: p.avatarContainer,
      style: {
        height: 52
      },
      children: (0, r.jsx)("img", {
        src: h,
        alt: "",
        className: p.avatar,
        height: 96,
        width: 96,
        style: {
          borderWidth: 4,
          marginLeft: 28
        }
      })
    }), (0, r.jsxs)("div", {
      className: p.infoContainer,
      children: [(0, r.jsxs)("div", {
        className: p.metadataContainer,
        children: [(0, r.jsx)(l.Heading, {
          variant: "heading-xxl/bold",
          color: "header-primary",
          lineClamp: 1,
          children: t.name
        }), (0, r.jsx)("div", {
          className: p.disclosuresContainer,
          children: g.map((e, t) => (0, r.jsx)(l.Text, {
            className: p.disclosuresText,
            variant: "text-xs/normal",
            color: "text-muted",
            children: e
          }, t))
        })]
      }), (0, r.jsx)(i.$, {
        innerRef: m,
        onChange: n,
        active: true,
        children: (0, r.jsx)(d.Z, {
          ref: m,
          application: t,
          size: "md"
        })
      })]
    })]
  })
}