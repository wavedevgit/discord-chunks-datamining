/** Chunk was on 66866 **/
/** chunk id: 86357, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./415506.js");
var r, i, l, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk646288 = require("./646288.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk624264 = require("./624264.js"),
  f = ((i = f || {})[i.DIRECTORY_HERO = 1] = "DIRECTORY_HERO", i[i.DIRECTORY_TILE = 2] = "DIRECTORY_TILE", i[i.DIRECTORY_SEARCH = 3] = "DIRECTORY_SEARCH", i[i.LISTING = 4] = "LISTING", i[i.EMBED = 5] = "EMBED", i);
let _ = e => {
    let {
      className: t
    } = e;
    return (0, a.jsxs)("div", {
      className: c()(m.row, t),
      children: [(0, a.jsx)(u.vqy, {
        size: "md",
        color: "currentColor",
        className: m.icon
      }), p.intl.string(p.t["7eicAA"])]
    })
  },
  g = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, a.jsxs)("div", {
      className: c()(m.row, n),
      children: [(0, a.jsx)(u.SrA, {
        size: "md",
        color: "currentColor",
        className: m.icon
      }), (0, d.Z)(t)]
    })
  },
  h = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, a.jsx)("div", {
      className: c()(m.salePercentage, n),
      children: t.getDisplaySalePercentage()
    })
  },
  b = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, a.jsx)("div", {
      className: c()(m.originalAmount, n),
      children: (0, d.Z)(t, false)
    })
  },
  E = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, a.jsx)("div", {
      className: n,
      children: (0, d.Z)(t)
    })
  },
  C = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, a.jsxs)("div", {
      className: c()(m.row, n),
      children: [(0, a.jsx)(h, {
        sku: t
      }), (0, a.jsx)(b, {
        sku: t
      }), (0, a.jsx)(E, {
        sku: t
      })]
    })
  },
  v = e => {
    let {
      className: t
    } = e;
    return (0, a.jsx)("div", {
      className: t,
      children: p.intl.string(p.t.QQsaCQ)
    })
  };
class O extends(r = Chunk647438.PureComponent) {
  getState() {
    let {
      inLibrary: e,
      sku: t,
      hasEntitlementBranch: n
    } = this.props;
    if (require) return 5;
    if (module) return 1;
    if (!exports.available) return 4;
    if (exports.premium) return 3;
    if (exports.isOnSale) return 2;
    else if (null != exports.getPrice()) return 4;
    return null
  }
  renderGeneric(e, t) {
    let {
      className: n,
      sku: r
    } = this.props;
    switch (e) {
      case 5:
        return (0, a.jsx)(v, {
          className: c()(t, n)
        });
      case 1:
        return (0, a.jsx)(_, {
          className: c()(t, n)
        });
      case 3:
        return (0, a.jsx)(g, {
          sku: r,
          className: c()(t, n)
        });
      case 2:
        return (0, a.jsx)(C, {
          sku: r,
          className: c()(t, n)
        });
      default:
        return (0, a.jsx)(E, {
          className: c()(t, n),
          sku: r
        })
    }
  }
  renderDirectoryHero(e) {
    let {
      className: t,
      sku: n
    } = this.props;
    switch (e) {
      case 5:
        return (0, a.jsx)(v, {
          className: t
        });
      case 3:
        return (0, a.jsx)(g, {
          sku: n,
          className: c()(m.directoryHeroPricePremium, t)
        });
      case 2:
        return (0, a.jsx)(C, {
          sku: n,
          className: c()(m.directoryHeroPrice, t)
        });
      default:
        return (0, a.jsx)(E, {
          className: c()(m.directoryHeroPrice, t),
          sku: n
        })
    }
  }
  renderListing(e) {
    let t, {
      className: n,
      sku: r
    } = this.props;
    switch (e) {
      case 5:
        t = (0, a.jsx)(v, {});
        break;
      case 2:
        t = (0, a.jsxs)(o.Fragment, {
          children: [(0, a.jsxs)("div", {
            className: m.row,
            children: [(0, a.jsx)(E, {
              sku: r
            }), (0, a.jsx)(h, {
              sku: r
            })]
          }), (0, a.jsx)(b, {
            sku: r
          })]
        });
        break;
      default:
        t = (0, a.jsx)(E, {
          sku: r
        })
    }
    return (0, a.jsx)("div", {
      className: c()(m.listingPrice, n),
      children: t
    })
  }
  render() {
    let e = this.getState();
    if (null == module) return null;
    switch (this.props.type) {
      case 1:
        return this.renderDirectoryHero(module);
      case 2:
        return this.renderGeneric(module, Chunk624264.directoryTilePrice);
      case 3:
        return this.renderGeneric(module, Chunk624264.directorySearchPrice);
      case 4:
        return this.renderListing(module);
      case 5:
        return this.renderGeneric(module, Chunk624264.embedPrice);
      default:
        throw Error("Invalid Price Unit Type")
    }
  }
}(l = "Types") in O ? Object.defineProperty(O, l, {
  value: f,
  enumerable: true,
  configurable: true,
  writable: true
}) : O[l] = f;
let y = O