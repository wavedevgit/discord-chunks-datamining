/** Chunk was on 9753 **/
/** chunk id: 918085, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk740916 = require("./740916.jsx"),
  Chunk678480 = require("./678480.jsx"),
  Chunk191931 = require("./191931.jsx"),
  Chunk886352 = require("./886352.jsx"),
  Chunk132696 = require("./132696.jsx"),
  Chunk871123 = require("./871123.js"),
  Chunk366523 = require("./366523.jsx"),
  Chunk371794 = require("./371794.js"),
  Chunk863574 = require("./863574.jsx"),
  Chunk622413 = require("./622413.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk430317 = require("./430317.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class v extends(r = Chunk64700.PureComponent) {
  render() {
    let {
      sku: e,
      storeListing: t,
      isHorizontal: n,
      className: r,
      renderCustomTagline: l,
      renderCustomTitle: a,
      renderCustomMedia: s,
      isEmbed: o
    } = this.props, c = o ? _.ug : h.A;
    return (0, i.jsx)(c, {
      className: r,
      renderMedia: null != s ? s : this.renderMedia,
      renderTitle: null != a ? a : () => e.name,
      renderTagline: null != l ? l : () => t.tagline,
      renderActions: this.renderActions,
      isHorizontal: n
    })
  }
  constructor(...e) {
    super(...e), A(this, "renderActions", () => {
      let {
        inLibrary: e,
        sku: t,
        renderCustomActions: n,
        isMouseOver: r,
        showBuyInline: l
      } = this.props, a = (l || !t.requiresPayment) && !e;
      return null != n ? n() : (0, i.jsxs)("div", {
        className: y.ED,
        children: [(0, i.jsx)(o.A, {
          type: o.A.Types.DIRECTORY_TILE,
          sku: t,
          inLibrary: e,
          className: a && r ? y.ae : y.Ek
        }), (0, i.jsx)(c.E, {
          systems: [b.uje.WINDOWS],
          className: y.iD
        }), a ? (0, i.jsx)("div", {
          children: "deprecated!"
        }) : null]
      })
    }), A(this, "renderMedia", () => {
      let {
        playing: e,
        muted: t,
        showMediaPlaceholder: n,
        onToggleMute: r,
        sku: a,
        isHorizontal: o,
        storeListing: c
      } = this.props;
      return (0, m.bF)(a) ? (0, i.jsx)(f.e, {
        sku: a,
        shape: "custom",
        containerClassName: y.A$,
        backgroundImageClassName: y.iZ,
        foregroundImageClassName: y.O7
      }) : (0, i.jsxs)(l.Fragment, {
        children: [(0, i.jsx)(p.A, {
          className: s()(y.H1, {
            [y.ZC]: o
          }),
          video: null != c.previewVideo ? (0, g.YE)(a.applicationId, c.previewVideo) : true,
          image: null != c.thumbnail ? (0, g.YE)(a.applicationId, c.thumbnail, 600) : true,
          title: a.name,
          playing: e,
          muted: t,
          placeholder: n,
          onToggleMute: r,
          splashClassName: y.ZI,
          splashPlaceholderClassName: y.NB
        }), a.exclusive ? (0, i.jsx)(d.A, {
          className: s()(y.LJ, {
            [y.V9]: e
          })
        }) : a.isTheGameAwardsWinner ? (0, i.jsx)(u.A, {
          className: s()(y.LJ, {
            [y.V9]: e
          })
        }) : null]
      })
    })
  }
}
A(v, "defaultProps", {
  showMediaPlaceholder: false,
  isMouseOver: false,
  showBuyInline: false,
  isHorizontal: false,
  isEmbed: false
});
let O = v