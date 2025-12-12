/** Chunk was on web.js **/
/** chunk id: 527429, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk295907 = require("./295907.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  switch (e) {
    case i.vn.ARROW_DOWN:
      return "ARROW_DOWN";
    case i.vn.ARROW_UP:
      return "ARROW_UP";
    case i.vn.ARROW_LEFT:
      return "ARROW_LEFT";
    case i.vn.ARROW_RIGHT:
      return "ARROW_RIGHT";
    default:
      return null
  }
}
class s extends Chunk473749.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, true)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, true)
  }
  focusNext(e) {
    let {
      getItemGrid: t,
      onFocus: n
    } = this.props, {
      focusedColumn: r,
      focusedRow: i
    } = this.state;
    if (null == e) return;
    let o = t();
    if (null == o) return;
    let a = this.getNext(o, r, i, e);
    this.setState({
      focusedColumn: a.column,
      focusedRow: a.row
    }, () => {
      let e = this.calculateFocusedItem();
      null != e && null != n && n(e)
    })
  }
  getNext(e, t, n, r) {
    let i, o, a, s;
    if (null == t || null == n) o = 0, a = 0, i = {
      column: 0,
      row: 0
    };
    else switch (o = t, a = n, r) {
      case "ARROW_UP":
        i = {
          column: o,
          row: Math.max(a - 1, 0)
        };
        break;
      case "ARROW_DOWN":
        i = {
          column: o,
          row: Math.min(a + 1, e[o].length - 1)
        };
        break;
      case "ARROW_LEFT":
        i = this.wrapPosition(e, o, a, false);
        break;
      case "ARROW_RIGHT":
        i = this.wrapPosition(e, o, a, 1)
    }
    return null != i && (s = e[i.column][i.row]), (null == s || null == i) && (s = e[(i = {
      column: o,
      row: a
    }).column][i.row]), {
      column: i.column,
      row: i.row,
      id: s
    }
  }
  calculateClosest(e, t) {
    let n, r = this.props.getCoordsMap()[e];
    if (null == r) return;
    let i = Number.MAX_SAFE_INTEGER;
    for (let e = 0; e < t.length; e++) {
      let o = this.props.getCoordsMap()[t[e]];
      if (null == o) continue;
      let a = Math.abs(o.top - r.top);
      if (a < i) i = a, n = e;
      else break
    }
    return n
  }
  calculateFocusedItem() {
    let {
      getItemGrid: e
    } = this.props, {
      focusedRow: t,
      focusedColumn: n
    } = this.state, r = module();
    return null == Chunk473749 || null == require || null == exports || null == Chunk473749[require] || null == Chunk473749[require][exports] ? null : Chunk473749[require][exports]
  }
  render() {
    return this.props.children
  }
  constructor(...e) {
    super(...e), o(this, "state", {
      focusedColumn: null,
      focusedRow: null
    }), o(this, "handleKeyDown", e => {
      let {
        onSelect: t
      } = this.props;
      switch (e.key) {
        case i.vn.ARROW_DOWN:
        case i.vn.ARROW_UP:
        case i.vn.ARROW_LEFT:
        case i.vn.ARROW_RIGHT:
          this.focusNext(a(e.key));
          break;
        case i.vn.ENTER:
          let n = this.calculateFocusedItem();
          null != n && null != t && (e.preventDefault(), e.stopPropagation(), t(n))
      }
    }), o(this, "wrapPosition", (e, t, n, r) => {
      var i;
      let o = e.length,
        a = Math.max(n * o + t + r, 0) % o,
        s = null != (i = this.calculateClosest(e[t][n], e[a])) ? i : n,
        l = 0;
      return r < 0 && a > t && (l = false), r > 0 && a < t && (l = 1), {
        column: a,
        row: s + l
      }
    })
  }
}