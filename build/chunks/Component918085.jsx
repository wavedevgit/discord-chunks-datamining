/** Chunk was on web.js **/
/** chunk id: 918085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
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

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let O = 600;
class v extends(r = Chunk64700.PureComponent) {
  render() {
    let {
      sku: e,
      storeListing: t,
      isHorizontal: n,
      className: r,
      renderCustomTagline: a,
      renderCustomTitle: s,
      renderCustomMedia: o,
      isEmbed: l
    } = this.props, c = l ? m.ug : g.A;
    return (0, i.jsx)(c, {
      className: r,
      renderMedia: null != o ? o : this.renderMedia,
      renderTitle: null != s ? s : () => e.name,
      renderTagline: null != a ? a : () => t.tagline,
      renderActions: this.renderActions,
      isHorizontal: n
    })
  }
  constructor(...e) {
    super(...e), b(this, "renderActions", () => {
      let {
        inLibrary: e,
        sku: t,
        renderCustomActions: n,
        isMouseOver: r,
        showBuyInline: a
      } = this.props, s = (a || !t.requiresPayment) && !e, o = s && r;
      return null != n ? n() : (0, i.jsxs)("div", {
        className: y.ED,
        children: [(0, i.jsx)(l.A, {
          type: l.A.Types.DIRECTORY_TILE,
          sku: t,
          inLibrary: e,
          className: o ? y.ae : y.Ek
        }), (0, i.jsx)(c.E, {
          systems: [E.uje.WINDOWS],
          className: y.iD
        }), s ? (0, i.jsx)("div", {
          children: "deprecated!"
        }) : null]
      })
    }), b(this, "renderMedia", () => {
      let {
        playing: e,
        muted: t,
        showMediaPlaceholder: n,
        onToggleMute: r,
        sku: s,
        isHorizontal: l,
        storeListing: c
      } = this.props;
      return (0, p.bF)(s) ? (0, i.jsx)(_.e, {
        sku: s,
        shape: "custom",
        containerClassName: y.A$,
        backgroundImageClassName: y.iZ,
        foregroundImageClassName: y.O7
      }) : (0, i.jsxs)(a.Fragment, {
        children: [(0, i.jsx)(f.A, {
          className: o()(y.H1, {
            [y.ZC]: l
          }),
          video: null != c.previewVideo ? (0, h.YE)(s.applicationId, c.previewVideo) : true,
          image: null != c.thumbnail ? (0, h.YE)(s.applicationId, c.thumbnail, O) : true,
          title: s.name,
          playing: e,
          muted: t,
          placeholder: n,
          onToggleMute: r,
          splashClassName: y.ZI,
          splashPlaceholderClassName: y.NB
        }), s.exclusive ? (0, i.jsx)(d.A, {
          className: o()(y.LJ, {
            [y.V9]: e
          })
        }) : s.isTheGameAwardsWinner ? (0, i.jsx)(u.A, {
          className: o()(y.LJ, {
            [y.V9]: e
          })
        }) : null]
      })
    })
  }
}
b(v, "defaultProps", {
  showMediaPlaceholder: false,
  isMouseOver: false,
  showBuyInline: false,
  isHorizontal: false,
  isEmbed: false
});
let A = v