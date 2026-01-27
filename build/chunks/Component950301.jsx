/** Chunk was on web.js **/
/** chunk id: 950301, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => P
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk803805 = require("./803805.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk497685 = require("./497685.js"),
  Chunk25277 = require("./25277.js"),
  Chunk821102 = require("./821102.js"),
  Chunk583613 = require("./583613.js"),
  Chunk996566 = require("./996566.js"),
  Chunk327143 = require("./327143.js"),
  Chunk453212 = require("./453212.jsx"),
  Chunk247683 = require("./247683.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk17697 = require("./17697.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
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

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = (e, t) => (0, r.jsx)(y.XW, {
  columns: e
}, t);

function w(e) {
  var t;
  let n = l().sample(l().values(e));
  return {
    type: O.dD.FAVORITES,
    name: v.intl.string(v.t.y3LQCG),
    icon: f.Gg5,
    src: null != n ? n.src : "https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif",
    format: null != (t = null == n ? true : n.format) ? t : u.TL.IMAGE
  }
}
class R extends Chunk64700.PureComponent {
  componentDidMount() {
    0 === this.props.trendingCategories.length && (0, p.k8)()
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
        className: n === O.dD.FAVORITES ? A.H7 : A.FP
      }), (0, r.jsxs)("div", {
        className: A.O1,
        children: [n === O.dD.TRENDING_GIFS ? (0, r.jsx)(f.Uy2, {
          className: A.Yl,
          color: "currentColor"
        }) : null, (0, r.jsx)("span", {
          className: A.yb,
          children: t
        })]
      })]
    })
  }
  render() {
    return (0, r.jsx)(_.A, {
      getItemGrid: this.getItemGrid,
      getCoordsMap: this.getCoordsMap,
      onFocus: this.handleFocus,
      onSelect: this.handleSelect,
      children: (0, r.jsx)(E.A, {
        desiredItemWidth: 200,
        maxColumns: 6,
        children: this.renderContent
      })
    })
  }
  constructor(...e) {
    super(...e), I(this, "_masonryRef", i.createRef()), I(this, "state", {
      favoritesTile: w(this.props.favorites),
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
    }), I(this, "memoizedData", (0, m.L_)(function(e, t) {
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
      return (0, r.jsx)(b.uG, {
        format: a.format,
        color: d.A.unsafe_rawColors.PRIMARY_800.css,
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
      return 0 === a.length ? (0, r.jsx)(y.oK, {
        columns: e,
        width: t,
        renderColumn: N
      }) : (0, r.jsx)(f.a0_, {
        ref: this._masonryRef,
        fade: true,
        className: o()(A.kL, i),
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

function P(e) {
  let t = (0, c.bG)([h.A], () => h.A.getTrendingCategories()),
    n = (0, g.rM)(),
    i = (0, b.d5)();
  return (0, r.jsx)(R, C(S({}, e, i), {
    trendingCategories: t,
    favorites: n
  }))
}