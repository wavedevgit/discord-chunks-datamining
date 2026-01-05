/** Chunk was on 1272 **/
/** chunk id: 237919, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk374470 = require("./374470.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk287259 = require("./287259.js"),
  Chunk819640 = require("./819640.js"),
  Chunk490983 = require("./490983.js"),
  Chunk799777 = require("./799777.js"),
  Chunk346329 = require("./346329.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk132841 = require("./132841.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class O extends Chunk473749.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown)
  }
  componentWillUnmount() {
    Chunk570140.Z.wait(() => Chunk287259.wX(null)), document.removeEventListener("keydown", this.handleKeyDown)
  }
  reset() {
    Chunk287259.wX(null), Chunk287259.JZ("")
  }
  focusInput() {
    var e;
    let {
      searchBarRef: t
    } = this;
    null != exports && (null == (e = exports.current) || module.focus())
  }
  updateActiveRow(e) {
    let {
      applicationViewItems: t,
      activeRowKey: n
    } = this.props, r = t.findIndex(e => e.key === n), i = 0;
    r >= 0 && (i = (r + e) % t.length) < 0 && (i = t.length - 1);
    let l = t[i];
    d.wX(null != l ? l.key : null, true)
  }
  render() {
    let {
      filterQuery: e
    } = this.props, {
      focused: t
    } = this.state;
    return (0, Chunk54381.jsx)("div", {
      className: a()({
        [Chunk132841.libraryFilter]: true,
        [Chunk132841.focused]: exports
      }),
      children: (0, Chunk54381.jsx)(Chunk481060.E1j, {
        ref: this.searchBarRef,
        onChange: Chunk287259.JZ,
        onFocus: () => this.setState({
          focused: true
        }),
        onBlur: () => this.setState({
          focused: false
        }),
        onClear: () => {
          this.reset(), this.focusInput()
        },
        query: module,
        placeholder: Chunk388032.intl.string(Chunk388032.t.aSxWSo)
      })
    })
  }
  constructor(...e) {
    super(...e), E(this, "searchBarRef", i.createRef()), E(this, "state", {
      focused: false
    }), E(this, "handleKeyDown", e => {
      var t, n, r;
      let {
        activeRowKey: i,
        hasModalOpen: l,
        applicationViewItems: a
      } = this.props, {
        searchBarRef: s
      } = this;
      if (l || e.ctrlKey || e.altKey || e.metaKey || null == s) return;
      let c = null == (t = (0, o.uB)(e)) ? true : t.activeElement;
      if (!(c !== s.current && (0, o.VG)(c))) switch (e.which) {
        case h.yXg.ESCAPE:
          e.target !== s.current ? this.reset() : null != s.current && (null == (n = s.current) || n.blur());
          break;
        case h.yXg.ENTER:
          if (null != i) {
            e.preventDefault();
            let t = a.find(e => e.key === i);
            if (null == t) return;
            let n = t.libraryApplication;
            m.performDefaultLibraryApplicationAction(n, {
              analyticsParams: {
                source: h.Sbl.APPLICATION_LIBRARY,
                location: {
                  page: h.ZY5.LIBRARY,
                  section: h.jXE.LIBRARY_APPLICATION_LIST,
                  object: h.qAy.BUTTON_CTA
                }
              }
            })
          }
          break;
        case h.yXg.ARROW_DOWN:
        case h.yXg.ARROW_UP:
          e.preventDefault(), e.stopPropagation(), this.updateActiveRow(e.which === h.yXg.ARROW_DOWN ? 1 : false);
          break;
        default:
          null != s.current && e.target !== s.current && (null == (r = s.current) || r.focus())
      }
    })
  }
}

function v() {
  let e = (0, Chunk442837.e7)([Chunk819640.Z], () => Chunk819640.Z.hasLayers()),
    t = (0, Chunk481060.s9z)(Chunk481060.JQI);
  return (0, Chunk54381.jsx)(O, {
    activeRowKey: (0, Chunk442837.e7)([Chunk799777.Z], () => Chunk799777.Z.activeRowKey),
    hasModalOpen: exports || module,
    filterQuery: (0, Chunk442837.e7)([Chunk490983.Z], () => Chunk490983.Z.applicationFilterQuery),
    applicationViewItems: (0, Chunk442837.e7)([Chunk490983.Z], () => Chunk490983.Z.sortedFilteredLibraryApplicationViewItems)
  })
}