/** Chunk was on 1272 **/
/** chunk id: 237919, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk287259 = require("./287259.js"),
  Chunk819640 = require("./819640.js"),
  Chunk490983 = require("./490983.js"),
  Chunk799777 = require("./799777.js"),
  Chunk5967 = require("./5967.js"),
  Chunk346329 = require("./346329.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk285915 = require("./285915.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class E extends Chunk73800.Component {
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
    let {
      searchBarRef: e
    } = this;
    null != module && module.focus()
  }
  updateActiveRow(e) {
    let {
      applicationViewItems: t,
      activeRowKey: n
    } = this.props, r = t.findIndex(e => e.key === n), i = 0;
    r >= 0 && (i = (r + e) % t.length) < 0 && (i = t.length - 1);
    let l = t[i];
    u.wX(null != l ? l.key : null, true)
  }
  render() {
    let {
      filterQuery: e
    } = this.props, {
      focused: t
    } = this.state;
    return <div className={a()({
        [Chunk285915.libraryFilter]: true,
        [Chunk285915.focused]: exports
      })}><Chunk481060.E1j className={Chunk285915.searchBar} ref={this.setRef} onChange={Chunk287259.JZ} onFocus={() => this.setState({
          focused: true
        })} onBlur={() => this.setState({
          focused: false
        })} name={"filter"} onClear={() => {
          this.reset(), this.focusInput()
        }} maxLength={100} query={module} placeholder={Chunk388032.intl.string(Chunk388032.t.aSxWSk)} /></div>
  }
  constructor(...e) {
    super(...e), O(this, "searchBarRef", null), O(this, "state", {
      focused: false
    }), O(this, "setRef", e => {
      this.searchBarRef = e
    }), O(this, "handleKeyDown", e => {
      var t;
      let {
        activeRowKey: n,
        hasModalOpen: r,
        applicationViewItems: i
      } = this.props, {
        searchBarRef: l
      } = this;
      if (r || e.ctrlKey || e.altKey || e.metaKey || null == l) return;
      let a = null == (t = (0, h.uB)(e)) ? true : t.activeElement;
      if (!(a !== l.inputRef.current && (0, h.VG)(a))) switch (e.which) {
        case m.yXg.ESCAPE:
          e.target !== l.inputRef.current ? this.reset() : null != l.inputRef.current && l.blur();
          break;
        case m.yXg.ENTER:
          if (null != n) {
            e.preventDefault();
            let t = i.find(e => e.key === n);
            if (null == t) return;
            let r = t.libraryApplication;
            g.performDefaultLibraryApplicationAction(r, {
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
          null != l.inputRef.current && e.target !== l.inputRef.current && l.focus()
      }
    })
  }
}

function y() {
  let e = (0, Chunk442837.e7)([Chunk819640.Z], () => Chunk819640.Z.hasLayers()),
    t = (0, Chunk481060.s9z)(Chunk481060.JQI);
  return <E activeRowKey={(0, Chunk442837.e7)([Chunk799777.Z], () => Chunk799777.Z.activeRowKey)} hasModalOpen={exports || module} filterQuery={(0, Chunk442837.e7)([Chunk490983.Z], () => Chunk490983.Z.applicationFilterQuery)} applicationViewItems={(0, Chunk442837.e7)([Chunk490983.Z], () => Chunk490983.Z.sortedFilteredLibraryApplicationViewItems)} />
}