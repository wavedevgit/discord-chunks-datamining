/** Chunk was on 1272 **/
/** chunk id: 237919, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
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

function _(e, t, n) {
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
    u.Z.wait(() => d.wX(null)), document.removeEventListener("keydown", this.handleKeyDown)
  }
  reset() {
    d.wX(null), d.JZ("")
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
    d.wX(null != l ? l.key : null, true)
  }
  render() {
    let {
      filterQuery: e
    } = this.props, {
      focused: t
    } = this.state;
    return (0, r.jsx)("div", {
      className: a()({
        [E.libraryFilter]: true,
        [E.focused]: t
      }),
      children: (0, r.jsx)(c.E1j, {
        ref: this.searchBarRef,
        onChange: d.JZ,
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
        placeholder: b.intl.string(b.t.aSxWSo)
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
        searchBarRef: s
      } = this;
      if (l || e.ctrlKey || e.altKey || e.metaKey || null == s) return;
      let c = null == (t = (0, o.uB)(e)) ? true : t.activeElement;
      if (!(c !== s.current && (0, o.VG)(c))) switch (e.which) {
        case m.yXg.ESCAPE:
          e.target !== s.current ? this.reset() : null != s.current && (null == (n = s.current) || n.blur());
          break;
        case m.yXg.ENTER:
          if (null != i) {
            e.preventDefault();
            let t = a.find(e => e.key === i);
            if (null == t) return;
            let n = t.libraryApplication;
            h.performDefaultLibraryApplicationAction(n, {
              analyticsParams: {
                source: m.Sbl.APPLICATION_LIBRARY,
                location: {
                  page: m.ZY5.LIBRARY,
                  section: m.jXE.LIBRARY_APPLICATION_LIST,
                  object: m.qAy.BUTTON_CTA
                }
              }
            })
          }
          break;
        case m.yXg.ARROW_DOWN:
        case m.yXg.ARROW_UP:
          e.preventDefault(), e.stopPropagation(), this.updateActiveRow(e.which === m.yXg.ARROW_DOWN ? 1 : false);
          break;
        default:
          null != s.current && e.target !== s.current && (null == (r = s.current) || r.focus())
      }
    })
  }
}

function I() {
  let e = (0, s.e7)([p.Z], () => p.Z.hasLayers()),
    t = (0, c.s9z)(c.JQI);
  return (0, r.jsx)(O, {
    activeRowKey: (0, s.e7)([g.Z], () => g.Z.activeRowKey),
    hasModalOpen: t || e,
    filterQuery: (0, s.e7)([f.Z], () => f.Z.applicationFilterQuery),
    applicationViewItems: (0, s.e7)([f.Z], () => f.Z.sortedFilteredLibraryApplicationViewItems)
  })
}