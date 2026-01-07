/** Chunk was on 75909 **/
/** chunk id: 877242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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

function h() {
  let {
    quest: e,
    sourceQuestContent: t,
    isPortrait: n,
    onClose: l
  } = o.useContext(v.VideoQuestModalContext), h = (0, m.aM)(), C = (0, p.tP)(e), b = o.useRef(null), {
    isHoveringOrFocusing: S
  } = (0, c.Z)(b), _ = (0, E.e)({
    quest: e,
    onClose: l,
    sourceQuestContent: t,
    impressionId: h
  }), y = e.config.ctaConfig.subtitle, x = true !== y && !(0, u.Ew)(y);
  return (0, r.jsx)(a.u, {
    text: g.intl.string(g.t.EuHF34),
    children: (0, r.jsx)(s.P3F, {
      onClick: () => _(f.jn.VIDEO_MODAL, d.jZ.OPEN_GAME_LINK),
      className: O.adInfoClickable,
      children: (0, r.jsxs)("div", {
        className: i()(O.contentHeaderGameInfo, O.contentHeaderGameInfoHoverable, {
          [O.contentHeaderGameInfoHoverableExpired]: C
        }),
        ref: b,
        children: [(0, r.jsx)("div", {
          className: O.contentFooterAdDetailedInfo,
          children: (0, r.jsx)(s.Heading, {
            variant: "heading-md/medium",
            color: "text-strong",
            className: i()(O.adDetailsTextSecondary, {
              [O.adDetailsTextSecondaryPortrait]: n
            }),
            lineClamp: n ? true : 1,
            children: g.intl.format(g.t.EQa7os, {
              questName: e.config.messages.questName
            })
          })
        }), (0, r.jsxs)("div", {
          className: i()(O.contentFooterAdDetailedInfo, {
            [O.contentFooterAdDetailedInfoPortrait]: n
          }),
          children: [(0, r.jsx)("div", {
            className: i()(O.adDetailsTextPrimary, {
              [O.adDetailsTextPrimaryPortrait]: n,
              [O.addFourPxMarginRight]: n
            }),
            children: (0, r.jsx)(s.owK, {
              size: "xs",
              color: S ? s.TVs.colors.ICON_STRONG.css : s.TVs.colors.ICON_MUTED.css
            })
          }), (0, r.jsx)(s.Heading, {
            variant: "heading-sm/medium",
            className: i()(O.adDetailsTextPrimary, {
              [O.adDetailsTextPrimaryPortrait]: n,
              [O.addFourPxMarginRight]: n
            }),
            color: S ? "text-strong" : "text-subtle",
            lineClamp: 1,
            children: e.config.messages.gamePublisher
          }), x ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
              "aria-hidden": "true",
              className: i()(O.dotSpacer, {
                [O.dotSpacerPortrait]: n
              })
            }), (0, r.jsx)(s.Heading, {
              className: i()(O.adDetailsTextSecondary, {
                [O.adDetailsTextSecondaryPortrait]: n
              }),
              variant: "heading-sm/medium",
              lineClamp: n ? true : 1,
              color: S ? "text-strong" : "text-subtle",
              children: y
            })]
          }) : null]
        })]
      })
    })
  })
}