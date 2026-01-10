/** Chunk was on 75909 **/
/** chunk id: 877242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk104505 = require("./104505.js"),
  Chunk624138 = require("./624138.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk49436 = require("./49436.js"),
  Chunk968843 = require("./968843.js"),
  Chunk215113 = require("./215113.jsx"),
  Chunk684245 = require("./684245.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk209668 = require("./209668.js");

function C() {
  let {
    quest: e,
    sourceQuestContent: t,
    isPortrait: n,
    onClose: l
  } = o.useContext(v.VideoQuestModalContext), C = (0, m.aM)(), S = (0, p.tP)(e), b = o.useRef(null), {
    isHoveringOrFocusing: O
  } = (0, c.Z)(b), _ = (0, E.e)({
    quest: e,
    onClose: l,
    sourceQuestContent: t,
    impressionId: C
  }), x = e.config.ctaConfig.subtitle, y = true !== x && !(0, u.Ew)(x);
  return (0, r.jsx)(a.u, {
    text: g.intl.string(g.t.EuHF34),
    children: (0, r.jsx)(s.P3F, {
      onClick: () => _(f.jn.VIDEO_MODAL, d.jZ.OPEN_GAME_LINK),
      className: h.adInfoClickable,
      children: (0, r.jsxs)("div", {
        className: i()(h.contentHeaderGameInfo, h.contentHeaderGameInfoHoverable, {
          [h.contentHeaderGameInfoHoverableExpired]: S
        }),
        ref: b,
        children: [(0, r.jsx)("div", {
          className: h.contentFooterAdDetailedInfo,
          children: (0, r.jsx)(s.Heading, {
            variant: "heading-md/medium",
            color: "text-strong",
            className: i()(h.adDetailsTextSecondary, {
              [h.adDetailsTextSecondaryPortrait]: n
            }),
            lineClamp: n ? true : 1,
            children: g.intl.format(g.t.EQa7os, {
              questName: e.config.messages.questName
            })
          })
        }), (0, r.jsxs)("div", {
          className: i()(h.contentFooterAdDetailedInfo, {
            [h.contentFooterAdDetailedInfoPortrait]: n
          }),
          children: [(0, r.jsx)("div", {
            className: i()(h.adDetailsTextPrimary, {
              [h.adDetailsTextPrimaryPortrait]: n,
              [h.addFourPxMarginRight]: n
            }),
            children: (0, r.jsx)(s.owK, {
              size: "xs",
              color: O ? s.TVs.colors.ICON_STRONG.css : s.TVs.colors.ICON_MUTED.css
            })
          }), (0, r.jsx)(s.Heading, {
            variant: "heading-sm/medium",
            className: i()(h.adDetailsTextPrimary, {
              [h.adDetailsTextPrimaryPortrait]: n,
              [h.addFourPxMarginRight]: n
            }),
            color: O ? "text-strong" : "text-subtle",
            lineClamp: 1,
            children: e.config.messages.gamePublisher
          }), y ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
              "aria-hidden": "true",
              className: i()(h.dotSpacer, {
                [h.dotSpacerPortrait]: n
              })
            }), (0, r.jsx)(s.Heading, {
              className: i()(h.adDetailsTextSecondary, {
                [h.adDetailsTextSecondaryPortrait]: n
              }),
              variant: "heading-sm/medium",
              lineClamp: n ? true : 1,
              color: O ? "text-strong" : "text-subtle",
              children: x
            })]
          }) : null]
        })]
      })
    })
  })
}