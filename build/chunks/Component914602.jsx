/** Chunk was on web.js **/
/** chunk id: 914602, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk86357 = require("./86357.jsx"),
  Chunk54936 = require("./54936.jsx"),
  Chunk687755 = require("./687755.jsx"),
  Chunk351465 = require("./351465.jsx"),
  Chunk669021 = require("./669021.jsx"),
  Chunk164670 = require("./164670.js"),
  Chunk848118 = require("./848118.jsx"),
  Chunk73346 = require("./73346.js"),
  Chunk568836 = require("./568836.jsx"),
  Chunk345898 = require("./345898.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk613658 = require("./613658.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let O = 600;
class v extends(r = Chunk473749.PureComponent) {
  render() {
    let {
      sku: e,
      storeListing: t,
      isHorizontal: n,
      className: r,
      renderCustomTagline: a,
      renderCustomTitle: o,
      renderCustomMedia: s,
      isEmbed: l
    } = this.props, c = Chunk86357 ? Chunk568836.$G : Chunk345898.Z;
    return (0, Chunk54381.jsx)(Chunk54936, {
      className: r,
      renderMedia: null != s ? s : this.renderMedia,
      renderTitle: null != Chunk120356 ? Chunk120356 : () => module.name,
      renderTagline: null != Chunk473749 ? Chunk473749 : () => exports.tagline,
      renderActions: this.renderActions,
      isHorizontal: require
    })
  }
  constructor(...e) {
    super(...e), y(this, "renderActions", () => {
      let {
        inLibrary: e,
        sku: t,
        renderCustomActions: n,
        isMouseOver: r,
        showBuyInline: a
      } = this.props, o = (a || !t.requiresPayment) && !e, s = o && r;
      return null != n ? n() : (0, i.jsxs)("div", {
        className: b.priceOs,
        children: [(0, i.jsx)(l.Z, {
          type: l.Z.Types.DIRECTORY_TILE,
          sku: t,
          inLibrary: e,
          className: s ? b.tilePriceWithVisibleBuyButton : b.tilePrice
        }), (0, i.jsx)(c.n, {
          systems: [E.TaA.WINDOWS],
          className: b.platform
        }), o ? (0, i.jsx)("div", {
          children: "deprecated!"
        }) : null]
      })
    }), y(this, "renderMedia", () => {
      let {
        playing: e,
        muted: t,
        showMediaPlaceholder: n,
        onToggleMute: r,
        sku: o,
        isHorizontal: l,
        storeListing: c
      } = this.props;
      return (0, _.K$)(o) ? (0, i.jsx)(p.A, {
        sku: o,
        shape: "custom",
        containerClassName: b.socialLayerStorefrontCardContainer,
        backgroundImageClassName: b.socialLayerStorefrontCardBackgroundImage,
        foregroundImageClassName: b.socialLayerStorefrontCardImage
      }) : (0, i.jsxs)(a.Fragment, {
        children: [(0, i.jsx)(f.Z, {
          className: s()(b.splashContainer, {
            [b.splashContainerHorizontal]: l
          }),
          video: null != c.previewVideo ? (0, h._W)(o.applicationId, c.previewVideo) : true,
          image: null != c.thumbnail ? (0, h._W)(o.applicationId, c.thumbnail, O) : true,
          title: o.name,
          playing: e,
          muted: t,
          placeholder: n,
          onToggleMute: r,
          splashClassName: b.splashVideo,
          splashPlaceholderClassName: b.splashPlaceholder
        }), o.exclusive ? (0, i.jsx)(d.Z, {
          className: s()(b.exclusiveRegular, {
            [b.exclusivePlaying]: e
          })
        }) : o.isTheGameAwardsWinner ? (0, i.jsx)(u.Z, {
          className: s()(b.exclusiveRegular, {
            [b.exclusivePlaying]: e
          })
        }) : null]
      })
    })
  }
}
y(v, "defaultProps", {
  showMediaPlaceholder: false,
  isMouseOver: false,
  showBuyInline: false,
  isHorizontal: false,
  isEmbed: false
});
let I = v