/** Chunk was on 26434 **/
/** chunk id: 914602, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk86357 = require("./86357.jsx"),
  Chunk54936 = require("./54936.jsx"),
  Chunk687755 = require("./687755.jsx"),
  Chunk351465 = require("./351465.jsx"),
  Chunk669021 = require("./669021.jsx"),
  Chunk73346 = require("./73346.js"),
  Chunk568836 = require("./568836.jsx"),
  Chunk345898 = require("./345898.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk697582 = require("./697582.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class E extends(r = Chunk647438.PureComponent) {
  render() {
    let {
      sku: e,
      storeListing: t,
      isHorizontal: n,
      className: r,
      renderCustomTagline: l,
      renderCustomTitle: o,
      renderCustomMedia: a,
      isEmbed: s
    } = this.props, c = Chunk86357 ? Chunk568836.$G : Chunk345898.Z;
    return (0, Chunk951288.jsx)(Chunk54936, {
      className: r,
      renderMedia: null != a ? a : this.renderMedia,
      renderTitle: null != Chunk120356 ? Chunk120356 : () => module.name,
      renderTagline: null != Chunk647438 ? Chunk647438 : () => exports.tagline,
      renderActions: this.renderActions,
      isHorizontal: require
    })
  }
  constructor(...e) {
    super(...e), b(this, "renderActions", () => {
      let {
        inLibrary: e,
        sku: t,
        renderCustomActions: n,
        isMouseOver: r,
        showBuyInline: l
      } = this.props, o = (l || !t.requiresPayment) && !e;
      return null != n ? n() : (0, i.jsxs)("div", {
        className: h.priceOs,
        children: [(0, i.jsx)(s.Z, {
          type: s.Z.Types.DIRECTORY_TILE,
          sku: t,
          inLibrary: e,
          className: o && r ? h.tilePriceWithVisibleBuyButton : h.tilePrice
        }), (0, i.jsx)(c.n, {
          systems: [_.TaA.WINDOWS],
          className: h.platform
        }), o ? (0, i.jsx)("div", {
          children: "deprecated!"
        }) : null]
      })
    }), b(this, "renderMedia", () => {
      let {
        playing: e,
        muted: t,
        showMediaPlaceholder: n,
        onToggleMute: r,
        sku: o,
        isHorizontal: s,
        storeListing: c
      } = this.props;
      return (0, i.jsxs)(l.Fragment, {
        children: [(0, i.jsx)(p.Z, {
          className: a()(h.splashContainer, {
            [h.splashContainerHorizontal]: s
          }),
          video: null != c.previewVideo ? (0, m._W)(o.applicationId, c.previewVideo) : true,
          image: null != c.thumbnail ? (0, m._W)(o.applicationId, c.thumbnail, 600) : null,
          title: o.name,
          playing: e,
          muted: t,
          placeholder: n,
          onToggleMute: r,
          splashClassName: h.splashVideo,
          splashPlaceholderClassName: h.splashPlaceholder
        }), o.exclusive ? (0, i.jsx)(d.Z, {
          className: a()(h.exclusiveRegular, {
            [h.exclusivePlaying]: e
          })
        }) : o.isTheGameAwardsWinner ? (0, i.jsx)(u.Z, {
          className: a()(h.exclusiveRegular, {
            [h.exclusivePlaying]: e
          })
        }) : null]
      })
    })
  }
}
b(E, "defaultProps", {
  showMediaPlaceholder: false,
  isMouseOver: false,
  showBuyInline: false,
  isHorizontal: false,
  isEmbed: false
});
let C = E