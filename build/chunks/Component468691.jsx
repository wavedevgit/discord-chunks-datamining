/** Chunk was on 21738 **/
/** chunk id: 468691, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk621466 = require("./621466.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk194894 = require("./194894.js"),
  Chunk186111 = require("./186111.js"),
  Chunk742077 = require("./742077.js"),
  Chunk268387 = require("./268387.js"),
  Chunk715671 = require("./715671.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk75755 = require("./75755.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class E extends Chunk64700.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown)
  }
  componentWillUnmount() {
    u.h.wait(() => d.pU(null)), document.removeEventListener("keydown", this.handleKeyDown)
  }
  reset() {
    d.pU(null), d.n9("")
  }
  focusInput() {
    var e;
    let {
      searchBarRef: t
    } = this;
    null != t && (null == (e = t.current) || e.focus())
  }
  updateActiveRow(e) {
    let {
      applicationViewItems: t,
      activeRowKey: n
    } = this.props, r = t.findIndex(e => e.key === n), i = 0;
    r >= 0 && (i = (r + e) % t.length) < 0 && (i = t.length - 1);
    let l = t[i];
    d.pU(null != l ? l.key : null, true)
  }
  render() {
    let {
      filterQuery: e
    } = this.props, {
      focused: t
    } = this.state;
    return (0, r.jsx)("div", {
      className: a()({
        [b.sw]: true,
        [b.in]: t
      }),
      children: (0, r.jsx)(c.IWV, {
        ref: this.searchBarRef,
        onChange: d.n9,
        onFocus: () => this.setState({
          focused: true
        }),
        onBlur: () => this.setState({
          focused: false
        }),
        onClear: () => {
          this.reset(), this.focusInput()
        },
        query: e,
        placeholder: m.intl.string(m.t.aSxWSo)
      })
    })
  }
  constructor(...e) {
    super(...e), _(this, "searchBarRef", i.createRef()), _(this, "state", {
      focused: false
    }), _(this, "handleKeyDown", e => {
      var t, n, r;
      let {
        activeRowKey: i,
        hasModalOpen: l,
        applicationViewItems: a
      } = this.props, {
        searchBarRef: o
      } = this;
      if (l || e.ctrlKey || e.altKey || e.metaKey || null == o) return;
      let c = null == (t = (0, s.BF)(e)) ? true : t.activeElement;
      if (!(c !== o.current && (0, s.Cw)(c))) switch (e.which) {
        case g.Ks6.ESCAPE:
          e.target !== o.current ? this.reset() : null != o.current && (null == (n = o.current) || n.blur());
          break;
        case g.Ks6.ENTER:
          if (null != i) {
            e.preventDefault();
            let t = a.find(e => e.key === i);
            if (null == t) return;
            let n = t.libraryApplication;
            A.performDefaultLibraryApplicationAction(n, {
              analyticsParams: {
                source: g.ThZ.APPLICATION_LIBRARY,
                location: {
                  page: g.liQ.LIBRARY,
                  section: g.JJy.LIBRARY_APPLICATION_LIST,
                  object: g.ZSU.BUTTON_CTA
                }
              }
            })
          }
          break;
        case g.Ks6.ARROW_DOWN:
        case g.Ks6.ARROW_UP:
          e.preventDefault(), e.stopPropagation(), this.updateActiveRow(e.which === g.Ks6.ARROW_DOWN ? 1 : false);
          break;
        default:
          null != o.current && e.target !== o.current && (null == (r = o.current) || r.focus())
      }
    })
  }
}

function O() {
  let e = (0, o.bG)([p.A], () => p.A.hasLayers()),
    t = (0, c.red)(c.DXt);
  return (0, r.jsx)(E, {
    activeRowKey: (0, o.bG)([h.A], () => h.A.activeRowKey),
    hasModalOpen: t || e,
    filterQuery: (0, o.bG)([f.A], () => f.A.applicationFilterQuery),
    applicationViewItems: (0, o.bG)([f.A], () => f.A.sortedFilteredLibraryApplicationViewItems)
  })
}