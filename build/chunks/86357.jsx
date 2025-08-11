/** Chunk was on web.js **/
/** chunk id: 86357, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./415506.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk646288 = require("./646288.js"),
  Chunk388032 = require("./388032.js"),
  Chunk823209 = require("./823209.js");

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
    return <div className={s()(d.row, t)}>{<l.vqy size={"md"} color={"currentColor"} className={d.icon} />}{u.intl.string(u.t["7eicAA"])}</div>
  },
  h = e => {
    let {
      sku: t,
      className: n
    } = e;
    return <div className={s()(d.row, n)}>{<l.SrA size={"md"} color={"currentColor"} className={d.icon} />}{(0, c.Z)(t)}</div>
  },
  m = e => {
    let {
      sku: t,
      className: n
    } = e;
    return <div className={s()(d.salePercentage, n)}>{t.getDisplaySalePercentage()}</div>
  },
  g = e => {
    let {
      sku: t,
      className: n
    } = e;
    return <div className={s()(d.originalAmount, n)}>{(0, c.Z)(t, false)}</div>
  },
  E = e => {
    let {
      sku: t,
      className: n
    } = e;
    return <div className={n}>{(0, c.Z)(t)}</div>
  },
  b = e => {
    let {
      sku: t,
      className: n
    } = e;
    return <div className={s()(d.row, n)}>{<m sku={t} />}{<g sku={t} />}{<E sku={t} />}</div>
  },
  y = e => {
    let {
      className: t
    } = e;
    return <div className={t}>{u.intl.string(u.t.QQsaCQ)}</div>
  };
class O extends(r = Chunk73800.PureComponent) {
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
        return <y className={s()(t, n)} />;
      case 1:
        return <p className={s()(t, n)} />;
      case 3:
        return <h sku={r} className={s()(t, n)} />;
      case 2:
        return <b sku={r} className={s()(t, n)} />;
      default:
        return <E className={s()(t, n)} sku={r} />
    }
  }
  renderDirectoryHero(e) {
    let {
      className: t,
      sku: n
    } = this.props;
    switch (e) {
      case 5:
        return <y className={t} />;
      case 3:
        return <h sku={n} className={s()(d.directoryHeroPricePremium, t)} />;
      case 2:
        return <b sku={n} className={s()(d.directoryHeroPrice, t)} />;
      default:
        return <E className={s()(d.directoryHeroPrice, t)} sku={n} />
    }
  }
  renderListing(e) {
    let t, {
      className: n,
      sku: r
    } = this.props;
    switch (e) {
      case 5:
        t = <y />;
        break;
      case 2:
        t = <o.Fragment>{<div className={d.row}>{<E sku={r} />}{<m sku={r} />}</div>}{<g sku={r} />}</o.Fragment>;
        break;
      default:
        t = <E sku={r} />
    }
    return <div className={s()(d.listingPrice, n)}>{t}</div>
  }
  render() {
    let e = this.getState();
    if (null == module) return null;
    switch (this.props.type) {
      case 1:
        return this.renderDirectoryHero(module);
      case 2:
        return this.renderGeneric(module, Chunk823209.directoryTilePrice);
      case 3:
        return this.renderGeneric(module, Chunk823209.directorySearchPrice);
      case 4:
        return this.renderListing(module);
      case 5:
        return this.renderGeneric(module, Chunk823209.embedPrice);
      default:
        throw Error("Invalid Price Unit Type")
    }
  }
}
f(O, "Types", _);
let v = O