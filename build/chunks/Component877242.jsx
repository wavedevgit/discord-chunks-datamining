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
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk215113 = require("./215113.jsx"),
  Chunk684245 = require("./684245.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk273339 = require("./273339.js");

function h() {
  var e;
  let {
    quest: t,
    sourceQuestContent: n,
    isPortrait: l,
    onClose: h
  } = Chunk473749.useContext(Chunk215113.VideoQuestModalContext), b = (0, Chunk915750.aM)(), S = (0, Chunk113434.tP)(exports), C = Chunk473749.useRef(null), {
    isHoveringOrFocusing: y
  } = (0, Chunk104505.Z)(C), _ = (0, Chunk684245.e)({
    quest: exports,
    onClose: h,
    sourceQuestContent: require,
    impressionId: b
  }), x = null == (e = exports.config.videoMetadata) ? true : module.messages.videoEndCtaSubtitle, j = true !== x && !(0, Chunk624138.Ew)(x);
  return (0, Chunk54381.jsx)(Chunk681715.u, {
    text: Chunk388032.intl.string(Chunk388032.t.EuHF34),
    children: (0, Chunk54381.jsx)(Chunk481060.P3F, {
      onClick: () => _(Chunk497505.jn.VIDEO_MODAL, Chunk617136.jZ.OPEN_GAME_LINK),
      className: Chunk273339.adInfoClickable,
      children: (0, Chunk54381.jsxs)("div", {
        className: i()(Chunk273339.contentHeaderGameInfo, Chunk273339.contentHeaderGameInfoHoverable, {
          [Chunk273339.contentHeaderGameInfoHoverableExpired]: S
        }),
        ref: C,
        children: [(0, Chunk54381.jsx)("div", {
          className: Chunk273339.contentFooterAdDetailedInfo,
          children: (0, Chunk54381.jsx)(Chunk481060.Heading, {
            variant: "heading-md/medium",
            color: "header-primary",
            className: i()(Chunk273339.adDetailsTextSecondary, {
              [Chunk273339.adDetailsTextSecondaryPortrait]: Chunk120356
            }),
            lineClamp: Chunk120356 ? true : 1,
            children: Chunk388032.intl.format(Chunk388032.t.EQa7os, {
              questName: exports.config.messages.questName
            })
          })
        }), (0, Chunk54381.jsxs)("div", {
          className: i()(Chunk273339.contentFooterAdDetailedInfo, {
            [Chunk273339.contentFooterAdDetailedInfoPortrait]: Chunk120356
          }),
          children: [(0, Chunk54381.jsx)("div", {
            className: i()(Chunk273339.adDetailsTextPrimary, {
              [Chunk273339.adDetailsTextPrimaryPortrait]: Chunk120356,
              [Chunk273339.addFourPxMarginRight]: Chunk120356
            }),
            children: (0, Chunk54381.jsx)(Chunk481060.owK, {
              size: "xs",
              color: y ? Chunk481060.TVs.colors.ICON_PRIMARY.css : Chunk481060.TVs.colors.ICON_TERTIARY.css
            })
          }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
            variant: "heading-sm/medium",
            className: i()(Chunk273339.adDetailsTextPrimary, {
              [Chunk273339.adDetailsTextPrimaryPortrait]: Chunk120356,
              [Chunk273339.addFourPxMarginRight]: Chunk120356
            }),
            color: y ? "text-primary" : "text-secondary",
            lineClamp: 1,
            children: exports.config.messages.gamePublisher
          }), j ? (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
            children: [(0, Chunk54381.jsx)("div", {
              "aria-hidden": "true",
              className: i()(Chunk273339.dotSpacer, {
                [Chunk273339.dotSpacerPortrait]: Chunk120356
              })
            }), (0, Chunk54381.jsx)(Chunk481060.Heading, {
              className: i()(Chunk273339.adDetailsTextSecondary, {
                [Chunk273339.adDetailsTextSecondaryPortrait]: Chunk120356
              }),
              variant: "heading-sm/medium",
              lineClamp: Chunk120356 ? true : 1,
              color: y ? "text-primary" : "text-secondary",
              children: x
            })]
          }) : null]
        })]
      })
    })
  })
}