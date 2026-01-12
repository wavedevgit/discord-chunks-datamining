/** Chunk was on 9536 **/
/** chunk id: 196902, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk510918 = require("./510918.jsx"),
  Chunk494620 = require("./494620.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk981631 = require("./981631.js"),
  Chunk551199 = require("./551199.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk331867 = require("./331867.js");
let x = function(e) {
  let {
    className: t,
    guildId: n,
    tag: i,
    badge: x,
    primaryColor: j,
    secondaryColor: v,
    isDisabled: O = false
  } = e, y = (0, a.e7)([f.Z], () => f.Z.getProps().originalProfile), C = null != y && y.tag !== i;

  function N(e) {
    g.Z.updateGuildProfile(n, {
      tag: e
    })
  }
  return (0, r.jsxs)("div", {
    className: t,
    children: [(0, r.jsx)(o.gNt, {
      label: p.intl.string(b.default["tN+8pD"]),
      children: e => (0, r.jsxs)("div", {
        className: h.tagContainer,
        children: [(0, r.jsx)("div", {
          className: h.tagInputContainer,
          children: (0, r.jsx)(s.Is, {
            id: e.controlId,
            className: h.tagInputWrapper,
            inputClassName: l()(h.tagInput, "heading-sm/semibold"),
            maxLength: 4,
            autoFocus: true,
            placeholder: "WUMP",
            prefixElement: (0, r.jsx)(c.v, {
              badge: x,
              width: 40,
              height: 40,
              primaryTintColor: j,
              secondaryTintColor: v
            }),
            disabled: O,
            value: null != i ? i : "",
            onChange: N
          })
        }), (0, r.jsx)("div", {
          className: h.tagTooltip,
          children: (0, r.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: p.intl.string(b.default.CrHXHt)
          })
        })]
      })
    }), C && (0, r.jsx)(d.Z, {
      className: h.tagChangeInfoBox,
      children: (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: p.intl.format(b.default["4ZKDXq"], {
          articleUrl: u.Z.getArticleURL(m.BhN.SERVER_TAGS)
        })
      })
    })]
  })
}