/** Chunk was on web.js **/
/** chunk id: 914602, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk86357 = require("./86357.jsx"),
  Chunk54936 = require("./54936.jsx"),
  Chunk687755 = require("./687755.jsx"),
  Chunk351465 = require("./351465.jsx"),
  Chunk669021 = require("./669021.jsx"),
  Chunk73346 = require("./73346.js"),
  Chunk568836 = require("./568836.jsx"),
  Chunk345898 = require("./345898.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk613658 = require("./613658.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = 600;
class y extends(r = Chunk647438.PureComponent) {
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
    return (0, Chunk951288.jsx)(Chunk54936, {
      className: r,
      renderMedia: null != s ? s : this.renderMedia,
      renderTitle: null != Chunk120356 ? Chunk120356 : () => module.name,
      renderTagline: null != Chunk647438 ? Chunk647438 : () => exports.tagline,
      renderActions: this.renderActions,
      isHorizontal: require
    })
  }
  constructor(...e) {
    super(...e), E(this, "renderActions", () => {
      let {
        inLibrary: e,
        sku: t,
        renderCustomActions: n,
        isMouseOver: r,
        showBuyInline: a
      } = this.props, o = (a || !t.requiresPayment) && !e, s = o && r;
      return null != n ? n() : (0, i.jsxs)("div", {
        className: g.priceOs,
        children: [(0, i.jsx)(l.Z, {
          type: l.Z.Types.DIRECTORY_TILE,
          sku: t,
          inLibrary: e,
          className: s ? g.tilePriceWithVisibleBuyButton : g.tilePrice
        }), (0, i.jsx)(c.n, {
          systems: [m.TaA.WINDOWS],
          className: g.platform
        }), o ? (0, i.jsx)("div", {
          children: "deprecated!"
        }) : null]
      })
    }), E(this, "renderMedia", () => {
      let {
        playing: e,
        muted: t,
        showMediaPlaceholder: n,
        onToggleMute: r,
        sku: o,
        isHorizontal: l,
        storeListing: c
      } = this.props;
      return (0, i.jsxs)(a.Fragment, {
        children: [(0, i.jsx)(f.Z, {
          className: s()(g.splashContainer, {
            [g.splashContainerHorizontal]: l
          }),
          video: null != c.previewVideo ? (0, _._W)(o.applicationId, c.previewVideo) : true,
          image: null != c.thumbnail ? (0, _._W)(o.applicationId, c.thumbnail, b) : null != c.headerBackground ? (0, _._W)(o.applicationId, c.headerBackground, b) : true,
          title: o.name,
          playing: e,
          muted: t,
          placeholder: n,
          onToggleMute: r,
          splashClassName: g.splashVideo,
          splashPlaceholderClassName: g.splashPlaceholder
        }), o.exclusive ? (0, i.jsx)(d.Z, {
          className: s()(g.exclusiveRegular, {
            [g.exclusivePlaying]: e
          })
        }) : o.isTheGameAwardsWinner ? (0, i.jsx)(u.Z, {
          className: s()(g.exclusiveRegular, {
            [g.exclusivePlaying]: e
          })
        }) : null]
      })
    })
  }
}
E(y, "defaultProps", {
  showMediaPlaceholder: false,
  isMouseOver: false,
  showBuyInline: false,
  isHorizontal: false,
  isEmbed: false
});
let O = y