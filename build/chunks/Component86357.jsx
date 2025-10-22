/** Chunk was on web.js **/
/** chunk id: 86357, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./415506.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk646288 = require("./646288.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk274080 = require("./274080.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var _ = function(e) {
  return e[e.DIRECTORY_HERO = 1] = "DIRECTORY_HERO", e[e.DIRECTORY_TILE = 2] = "DIRECTORY_TILE", e[e.DIRECTORY_SEARCH = 3] = "DIRECTORY_SEARCH", e[e.LISTING = 4] = "LISTING", e[e.EMBED = 5] = "EMBED", e
}(_ || {});
let p = e => {
    let {
      className: t
    } = e;
    return (0, i.jsxs)("div", {
      className: s()(d.row, t),
      children: [(0, i.jsx)(l.vqy, {
        size: "md",
        color: "currentColor",
        className: d.icon
      }), u.intl.string(u.t["7eicAO"])]
    })
  },
  h = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, i.jsxs)("div", {
      className: s()(d.row, n),
      children: [(0, i.jsx)(l.SrA, {
        size: "md",
        color: "currentColor",
        className: d.icon
      }), (0, c.Z)(t)]
    })
  },
  m = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, i.jsx)("div", {
      className: s()(d.salePercentage, n),
      children: t.getDisplaySalePercentage()
    })
  },
  g = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, i.jsx)("div", {
      className: s()(d.originalAmount, n),
      children: (0, c.Z)(t, false)
    })
  },
  E = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, i.jsx)("div", {
      className: n,
      children: (0, c.Z)(t)
    })
  },
  b = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, i.jsxs)("div", {
      className: s()(d.row, n),
      children: [(0, i.jsx)(m, {
        sku: t
      }), (0, i.jsx)(g, {
        sku: t
      }), (0, i.jsx)(E, {
        sku: t
      })]
    })
  },
  y = e => {
    let {
      className: t
    } = e;
    return (0, i.jsx)("div", {
      className: t,
      children: u.intl.string(u.t.QQsaCc)
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
        return (0, i.jsx)(y, {
          className: s()(t, n)
        });
      case 1:
        return (0, i.jsx)(p, {
          className: s()(t, n)
        });
      case 3:
        return (0, i.jsx)(h, {
          sku: r,
          className: s()(t, n)
        });
      case 2:
        return (0, i.jsx)(b, {
          sku: r,
          className: s()(t, n)
        });
      default:
        return (0, i.jsx)(E, {
          className: s()(t, n),
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
        return (0, i.jsx)(y, {
          className: t
        });
      case 3:
        return (0, i.jsx)(h, {
          sku: n,
          className: s()(d.directoryHeroPricePremium, t)
        });
      case 2:
        return (0, i.jsx)(b, {
          sku: n,
          className: s()(d.directoryHeroPrice, t)
        });
      default:
        return (0, i.jsx)(E, {
          className: s()(d.directoryHeroPrice, t),
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
        t = (0, i.jsx)(y, {});
        break;
      case 2:
        t = (0, i.jsxs)(a.Fragment, {
          children: [(0, i.jsxs)("div", {
            className: d.row,
            children: [(0, i.jsx)(E, {
              sku: r
            }), (0, i.jsx)(m, {
              sku: r
            })]
          }), (0, i.jsx)(g, {
            sku: r
          })]
        });
        break;
      default:
        t = (0, i.jsx)(E, {
          sku: r
        })
    }
    return (0, i.jsx)("div", {
      className: s()(d.listingPrice, n),
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
        return this.renderGeneric(module, Chunk274080.directoryTilePrice);
      case 3:
        return this.renderGeneric(module, Chunk274080.directorySearchPrice);
      case 4:
        return this.renderListing(module);
      case 5:
        return this.renderGeneric(module, Chunk274080.embedPrice);
      default:
        throw Error("Invalid Price Unit Type")
    }
  }
}
f(O, "Types", _);
let v = O