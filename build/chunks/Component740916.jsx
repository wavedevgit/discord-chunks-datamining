/** Chunk was on web.js **/
/** chunk id: 740916, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./65821.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk360560 = require("./360560.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk609946 = require("./609946.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var p = function(e) {
  return e[e.DIRECTORY_HERO = 1] = "DIRECTORY_HERO", e[e.DIRECTORY_TILE = 2] = "DIRECTORY_TILE", e[e.DIRECTORY_SEARCH = 3] = "DIRECTORY_SEARCH", e[e.LISTING = 4] = "LISTING", e[e.EMBED = 5] = "EMBED", e
}(p || {});
let _ = e => {
    let {
      className: t
    } = e;
    return (0, i.jsxs)("div", {
      className: o()(d.nM, t),
      children: [(0, i.jsx)(l._z, {
        size: "md",
        color: "currentColor",
        className: d.Kk
      }), u.intl.string(u.t["7eicAO"])]
    })
  },
  h = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, i.jsxs)("div", {
      className: o()(d.nM, n),
      children: [(0, i.jsx)(l.tvc, {
        size: "md",
        color: "currentColor",
        className: d.Kk
      }), (0, c.A)(t)]
    })
  },
  m = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, i.jsx)("div", {
      className: o()(d.EQ, n),
      children: t.getDisplaySalePercentage()
    })
  },
  g = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, i.jsx)("div", {
      className: o()(d.I8, n),
      children: (0, c.A)(t, false)
    })
  },
  E = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, i.jsx)("div", {
      className: n,
      children: (0, c.A)(t)
    })
  },
  y = e => {
    let {
      sku: t,
      className: n
    } = e;
    return (0, i.jsxs)("div", {
      className: o()(d.nM, n),
      children: [(0, i.jsx)(m, {
        sku: t
      }), (0, i.jsx)(g, {
        sku: t
      }), (0, i.jsx)(E, {
        sku: t
      })]
    })
  },
  b = e => {
    let {
      className: t
    } = e;
    return (0, i.jsx)("div", {
      className: t,
      children: u.intl.string(u.t.QQsaCc)
    })
  };
class O extends(r = Chunk64700.PureComponent) {
  getState() {
    let {
      inLibrary: e,
      sku: t,
      hasEntitlementBranch: n
    } = this.props;
    if (n) return 5;
    if (e) return 1;
    if (!t.available) return 4;
    if (t.premium) return 3;
    if (t.isOnSale) return 2;
    else if (null != t.getPrice()) return 4;
    return null
  }
  renderGeneric(e, t) {
    let {
      className: n,
      sku: r
    } = this.props;
    switch (e) {
      case 5:
        return (0, i.jsx)(b, {
          className: o()(t, n)
        });
      case 1:
        return (0, i.jsx)(_, {
          className: o()(t, n)
        });
      case 3:
        return (0, i.jsx)(h, {
          sku: r,
          className: o()(t, n)
        });
      case 2:
        return (0, i.jsx)(y, {
          sku: r,
          className: o()(t, n)
        });
      default:
        return (0, i.jsx)(E, {
          className: o()(t, n),
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
        return (0, i.jsx)(b, {
          className: t
        });
      case 3:
        return (0, i.jsx)(h, {
          sku: n,
          className: o()(d.OB, t)
        });
      case 2:
        return (0, i.jsx)(y, {
          sku: n,
          className: o()(d.dk, t)
        });
      default:
        return (0, i.jsx)(E, {
          className: o()(d.dk, t),
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
        t = (0, i.jsx)(b, {});
        break;
      case 2:
        t = (0, i.jsxs)(a.Fragment, {
          children: [(0, i.jsxs)("div", {
            className: d.nM,
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
      className: o()(d.IH, n),
      children: t
    })
  }
  render() {
    let e = this.getState();
    if (null == e) return null;
    switch (this.props.type) {
      case 1:
        return this.renderDirectoryHero(e);
      case 2:
        return this.renderGeneric(e, d.Pl);
      case 3:
        return this.renderGeneric(e, d.jh);
      case 4:
        return this.renderListing(e);
      case 5:
        return this.renderGeneric(e, d.bk);
      default:
        throw Error("Invalid Price Unit Type")
    }
  }
}
f(O, "Types", p);
let v = O