/** Chunk was on 88479 **/
/** chunk id: 388661, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js"),
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
  Chunk899926 = require("./899926.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk616397 = require("./616397.js");
let x = function(e) {
  let {
    className: t,
    guildId: n,
    tag: i,
    badge: x,
    primaryColor: j,
    secondaryColor: v,
    isDisabled: _ = false
  } = e, O = (0, a.e7)([g.Z], () => g.Z.getProps().originalProfile), y = null != O && O.tag !== i;
  return (0, r.jsxs)("div", {
    className: t,
    children: [(0, r.jsx)(o.vwX, {
      className: b.sectionTitle,
      children: f.intl.string(h.default["tN+8pK"])
    }), (0, r.jsxs)("div", {
      className: b.tagContainer,
      children: [(0, r.jsx)("div", {
        className: b.tagInputContainer,
        children: (0, r.jsx)(s.Is, {
          className: b.tagInputWrapper,
          inputClassName: l()(b.tagInput, "heading-sm/semibold"),
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
          disabled: _,
          value: null != i ? i : "",
          onChange: function(e) {
            m.Z.updateGuildProfile(n, {
              tag: e
            })
          }
        })
      }), (0, r.jsx)("div", {
        className: b.tagTooltip,
        children: (0, r.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: f.intl.string(h.default.CrHXHh)
        })
      })]
    }), y && (0, r.jsx)(d.Z, {
      className: b.tagChangeInfoBox,
      children: (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: f.intl.format(h.default["4ZKDXl"], {
          articleUrl: u.Z.getArticleURL(p.BhN.SERVER_TAGS)
        })
      })
    })]
  })
}