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
  } = Chunk473749.useContext(Chunk215113.VideoQuestModalContext), h = (0, Chunk915750.aM)(), b = (0, Chunk968843.tP)(module), S = Chunk473749.useRef(null), {
    isHoveringOrFocusing: C
  } = (0, Chunk104505.Z)(S), _ = (0, Chunk684245.e)({
    quest: module,
    onClose: Chunk120356,
    sourceQuestContent: exports,
    impressionId: h
  }), y = module.config.ctaConfig.subtitle, x = true !== y && !(0, Chunk624138.Ew)(y);
  return (0, Chunk54381.jsx)(Chunk681715.u, {
    text: Chunk388032.intl.string(Chunk388032.t.EuHF34),
    children: (0, Chunk54381.jsx)(Chunk481060.P3F, {
      onClick: () => _(Chunk49436.jn.VIDEO_MODAL, Chunk617136.jZ.OPEN_GAME_LINK),
      className: Chunk209668.adInfoClickable,
      children: (0, Chunk54381.jsxs)("div", {
        className: i()(Chunk209668.contentHeaderGameInfo, Chunk209668.contentHeaderGameInfoHoverable, {
          [Chunk209668.contentHeaderGameInfoHoverableExpired]: b
        }),
        ref: S,
        children: [(0, Chunk54381.jsx)("div", {
          className: Chunk209668.contentFooterAdDetailedInfo,
          children: (0, Chunk54381.jsx)(Chunk481060.Heading, {
            variant: "heading-md/medium",
            color: "text-strong",
            className: i()(Chunk209668.adDetailsTextSecondary, {
              [Chunk209668.adDetailsTextSecondaryPortrait]: require
            }),
            lineClamp: require ? true : 1,
            children: Chunk388032.intl.format(Chunk388032.t.EQa7os, {
              questName: module.config.messages.questName
            })
          })
        }), (0, Chunk54381.jsxs)("div", {
          className: i()(Chunk209668.contentFooterAdDetailedInfo, {
            [Chunk209668.contentFooterAdDetailedInfoPortrait]: require
          }),
          children: [(0, Chunk54381.jsx)("div", {
            className: i()(Chunk209668.adDetailsTextPrimary, {
              [Chunk209668.adDetailsTextPrimaryPortrait]: require,
              [Chunk209668.addFourPxMarginRight]: require
            }),
            children: (0, Chunk54381.jsx)(Chunk481060.owK, {
              size: "xs",
              color: C ? Chunk481060.TVs.colors.ICON_STRONG.css : Chunk481060.TVs.colors.ICON_MUTED.css
            })
          }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
            variant: "heading-sm/medium",
            className: i()(Chunk209668.adDetailsTextPrimary, {
              [Chunk209668.adDetailsTextPrimaryPortrait]: require,
              [Chunk209668.addFourPxMarginRight]: require
            }),
            color: C ? "text-strong" : "text-subtle",
            lineClamp: 1,
            children: module.config.messages.gamePublisher
          }), x ? (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
            children: [(0, Chunk54381.jsx)("div", {
              "aria-hidden": "true",
              className: i()(Chunk209668.dotSpacer, {
                [Chunk209668.dotSpacerPortrait]: require
              })
            }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
              className: i()(Chunk209668.adDetailsTextSecondary, {
                [Chunk209668.adDetailsTextSecondaryPortrait]: require
              }),
              variant: "heading-sm/medium",
              lineClamp: require ? true : 1,
              color: C ? "text-strong" : "text-subtle",
              children: y
            })]
          }) : null]
        })]
      })
    })
  })
}