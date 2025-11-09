/** Chunk was on 32249 **/
/** chunk id: 895966, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk536687 = require("./536687.jsx"),
  Chunk431130 = require("./431130.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk946232 = require("./946232.js");

function h() {
  var e;
  let {
    quest: t,
    sourceQuestContent: n,
    isPortrait: l,
    onClose: h
  } = Chunk647438.useContext(Chunk536687.VideoQuestModalContext), b = (0, Chunk915750.aM)(), S = (0, Chunk113434.tP)(exports), y = Chunk647438.useRef(null), {
    isHoveringOrFocusing: C
  } = (0, Chunk104505.Z)(y), _ = (0, Chunk431130.p)({
    quest: exports,
    onClose: h,
    sourceQuestContent: require,
    impressionId: b
  }), x = null == (e = exports.config.videoMetadata) ? true : module.messages.videoEndCtaSubtitle, j = true !== x && !(0, Chunk624138.Ew)(x);
  return (0, Chunk951288.jsx)(Chunk681715.u, {
    text: Chunk388032.intl.string(Chunk388032.t.EuHF34),
    children: (0, Chunk951288.jsx)(Chunk481060.P3F, {
      onClick: () => _(Chunk497505.jn.VIDEO_MODAL, Chunk617136.jZ.OPEN_GAME_LINK),
      className: Chunk946232.adInfoClickable,
      children: (0, Chunk951288.jsxs)("div", {
        className: i()(Chunk946232.contentHeaderGameInfo, Chunk946232.contentHeaderGameInfoHoverable, {
          [Chunk946232.contentHeaderGameInfoHoverableExpired]: S
        }),
        ref: y,
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk946232.contentFooterAdDetailedInfo,
          children: (0, Chunk951288.jsx)(Chunk481060.Heading, {
            variant: "heading-md/medium",
            color: "header-primary",
            className: i()(Chunk946232.adDetailsTextSecondary, {
              [Chunk946232.adDetailsTextSecondaryPortrait]: Chunk120356
            }),
            lineClamp: Chunk120356 ? true : 1,
            children: Chunk388032.intl.format(Chunk388032.t.EQa7os, {
              questName: exports.config.messages.questName
            })
          })
        }), (0, Chunk951288.jsxs)("div", {
          className: i()(Chunk946232.contentFooterAdDetailedInfo, {
            [Chunk946232.contentFooterAdDetailedInfoPortrait]: Chunk120356
          }),
          children: [(0, Chunk951288.jsx)("div", {
            className: i()(Chunk946232.adDetailsTextPrimary, {
              [Chunk946232.adDetailsTextPrimaryPortrait]: Chunk120356,
              [Chunk946232.addFourPxMarginRight]: Chunk120356
            }),
            children: (0, Chunk951288.jsx)(Chunk481060.owK, {
              size: "xs",
              color: C ? Chunk481060.TVs.colors.ICON_PRIMARY.css : Chunk481060.TVs.colors.ICON_TERTIARY.css
            })
          }), (0, Chunk951288.jsx)(Chunk481060.Heading, {
            variant: "heading-sm/medium",
            className: i()(Chunk946232.adDetailsTextPrimary, {
              [Chunk946232.adDetailsTextPrimaryPortrait]: Chunk120356,
              [Chunk946232.addFourPxMarginRight]: Chunk120356
            }),
            color: C ? "text-primary" : "text-secondary",
            lineClamp: 1,
            children: exports.config.messages.gamePublisher
          }), j ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
            children: [(0, Chunk951288.jsx)("div", {
              "aria-hidden": "true",
              className: i()(Chunk946232.dotSpacer, {
                [Chunk946232.dotSpacerPortrait]: Chunk120356
              })
            }), (0, Chunk951288.jsx)(Chunk481060.Heading, {
              className: i()(Chunk946232.adDetailsTextSecondary, {
                [Chunk946232.adDetailsTextSecondaryPortrait]: Chunk120356
              }),
              variant: "heading-sm/medium",
              lineClamp: Chunk120356 ? true : 1,
              color: C ? "text-primary" : "text-secondary",
              children: x
            })]
          }) : null]
        })]
      })
    })
  })
}