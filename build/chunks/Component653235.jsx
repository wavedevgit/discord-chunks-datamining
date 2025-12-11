/** Chunk was on web.js **/
/** chunk id: 653235, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk377108 = require("./377108.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk68405 = require("./68405.js"),
  Chunk527429 = require("./527429.js"),
  Chunk656733 = require("./656733.js"),
  Chunk251625 = require("./251625.js"),
  Chunk985375 = require("./985375.js"),
  Chunk990233 = require("./990233.js"),
  Chunk353903 = require("./353903.jsx"),
  Chunk215016 = require("./215016.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk370101 = require("./370101.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = (e, t) => (0, r.jsx)(b.G0, {
  columns: e
}, t);

function P(e) {
  var t;
  let n = l().sample(l().values(e));
  return {
    type: O.wI2.FAVORITES,
    name: v.intl.string(v.t.y3LQCG),
    icon: f.r7p,
    src: null != n ? n.src : "https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif",
    format: null != (t = null == n ? true : n.format) ? t : u.EO.IMAGE
  }
}
class R extends Chunk473749.PureComponent {
  componentDidMount() {
    0 === this.props.trendingCategories.length && (0, Chunk68405.Tg)()
  }
  getData() {
    return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile)
  }
  renderCategoryExtras(e) {
    let {
      name: t,
      type: n
    } = e;
    return (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)("div", {
        className: n === O.wI2.FAVORITES ? S.categoryFadeBlurple : S.categoryFade
      }), (0, r.jsxs)("div", {
        className: S.categoryText,
        children: [n === O.wI2.TRENDING_GIFS ? (0, r.jsx)(f.IeX, {
          className: S.categoryIcon,
          color: "currentColor"
        }) : null, (0, r.jsx)("span", {
          className: S.categoryName,
          children: t
        })]
      })]
    })
  }
  render() {
    return (0, Chunk54381.jsx)(Chunk527429.Z, {
      getItemGrid: this.getItemGrid,
      getCoordsMap: this.getCoordsMap,
      onFocus: this.handleFocus,
      onSelect: this.handleSelect,
      children: (0, Chunk54381.jsx)(Chunk990233.Z, {
        desiredItemWidth: 200,
        maxColumns: 6,
        children: this.renderContent
      })
    })
  }
  constructor(...e) {
    super(...e), I(this, "_masonryRef", i.createRef()), I(this, "state", {
      favoritesTile: P(this.props.favorites),
      selectedIndex: {
        column: 0,
        row: 0
      },
      focusedId: null
    }), I(this, "handleFocus", e => {
      let {
        current: t
      } = this._masonryRef;
      if (null == t) return;
      let n = t.getCoordsMap()[e];
      null != n && (t.scrollIntoViewRect({
        start: n.top - 10,
        end: n.top + n.height + 10
      }), this.setState({
        focusedId: e
      }))
    }), I(this, "handleSelect", e => {
      let {
        onSelectItem: t
      } = this.props, n = this.getData().find(t => t.name === e);
      null != n && null != t && t(n.type, n.name)
    }), I(this, "getItemKey", (e, t) => {
      if (e > 0) return null;
      let n = this.getData()[t];
      return null != n ? n.name : null
    }), I(this, "memoizedData", (0, h.oH)(function(e, t) {
      let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
      return n ? [...t] : [e, ...t]
    })), I(this, "renderItem", (e, t, n, i) => {
      if (e > 0) return null;
      let a = this.getData()[t];
      if (null == a) return;
      let {
        onSelectItem: o,
        imagePool: s,
        videoPool: l
      } = this.props, {
        focusedId: c
      } = this.state;
      return (0, r.jsx)(y.iR, {
        format: a.format,
        color: d.Z.unsafe_rawColors.PRIMARY_800.css,
        src: a.src,
        item: a,
        index: t,
        coords: n,
        onClick: () => o(a.type, a.name),
        renderExtras: this.renderCategoryExtras,
        focused: a.name === c,
        imagePool: s,
        videoPool: l
      }, i)
    }), I(this, "renderContent", (e, t, n) => {
      let {
        className: i,
        trendingCategories: a
      } = this.props;
      return 0 === a.length ? (0, r.jsx)(b.u$, {
        columns: e,
        width: t,
        renderColumn: N
      }) : (0, r.jsx)(f.GMG, {
        ref: this._masonryRef,
        fade: true,
        className: o()(S.container, i),
        itemGutter: 12,
        getItemKey: this.getItemKey,
        columns: e,
        getItemHeight: () => 110,
        renderItem: this.renderItem,
        sections: [this.getData().length],
        chunkSize: 50
      })
    }), I(this, "getItemGrid", () => {
      let {
        current: e
      } = this._masonryRef;
      return null != e ? e.getItemGrid() : []
    }), I(this, "getCoordsMap", () => {
      let {
        current: e
      } = this._masonryRef;
      return null != e ? e.getCoordsMap() : {}
    })
  }
}

function w(e) {
  let t = (0, c.e7)([m.Z], () => m.Z.getTrendingCategories()),
    n = (0, g.gG)(),
    i = (0, y.PY)();
  return (0, r.jsx)(R, A(T({}, e, i), {
    trendingCategories: t,
    favorites: n
  }))
}