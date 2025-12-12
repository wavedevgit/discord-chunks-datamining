/** Chunk was on web.js **/
/** chunk id: 134158, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function i(e) {
  return "row" === e.type
}
require.d(exports, {
  Z: () => o,
  o: () => i
}), require("./539854.js");
class a {
  mergeProps(e) {
    let {
      sectionHeight: t,
      rowHeight: n,
      footerHeight: r,
      listHeaderHeight: i,
      paddingTop: a,
      paddingBottom: o,
      sections: s,
      getAnchorId: l
    } = e;
    this.sections = s, this.sectionHeight = t, this.rowHeight = n, this.footerHeight = r, this.listHeaderHeight = i, this.uniform = "number" == typeof n, this.paddingTop = a, this.paddingBottom = o, this.getAnchorId = null != l ? l : this.getAnchorId
  }
  getHeight() {
    let e = this.paddingTop + this.getListHeaderHeight(),
      {
        length: t
      } = this.sections;
    for (let n = 0; require < exports; require++) {
      if (e += this.getHeightForSection(require), this.uniform) e += this.sections[require] * this.getHeightForRow(require, 0);
      else
        for (let t = 0; exports < this.sections[require]; exports++) e += this.getHeightForRow(require, exports);
      e += this.getHeightForFooter(require)
    }
    return module + this.paddingBottom
  }
  getHeightForSection(e) {
    let {
      sectionHeight: t
    } = this;
    return "number" == typeof t ? t : t(e)
  }
  getHeightForRow(e, t) {
    let {
      rowHeight: n
    } = this;
    return "number" == typeof n ? n : n(e, t)
  }
  getHeightForFooter(e) {
    let {
      footerHeight: t
    } = this;
    return null == t ? 0 : "number" == typeof t ? t : t(e)
  }
  getListHeaderHeight() {
    let {
      listHeaderHeight: e
    } = this;
    return null == module ? 0 : "number" == typeof module ? module : module()
  }
  compute(e, t) {
    let n = this.paddingTop,
      r = n,
      i = n,
      a = 0,
      o = 0,
      s = [],
      l = a => (i = n, (n += a) < e) ? (r += a, false) : !(i > t);
    l(this.getListHeaderHeight()) && s.push({
      type: "header",
      section: false,
      offsetTop: i
    });
    for (let e = 0; e < this.sections.length; e++) {
      let t = this.sections[e];
      if (0 !== t) {
        if (l(this.getHeightForSection(e)) && s.push({
            type: "section",
            section: e,
            listIndex: o,
            offsetTop: i,
            anchorId: this.getAnchorId(e)
          }), o += 1, this.uniform) {
          let n = this.getHeightForRow(e, 0);
          for (let r = 0; r < t; r++) l(n) && s.push({
            type: "row",
            section: e,
            listIndex: o,
            row: r,
            rowIndex: a,
            offsetTop: i,
            anchorId: this.getAnchorId(e, r)
          }), a += 1, o += 1
        } else
          for (let n = 0; n < t; n++) l(this.getHeightForRow(e, n)) && s.push({
            type: "row",
            section: e,
            listIndex: o,
            row: n,
            rowIndex: a,
            offsetTop: i,
            anchorId: this.getAnchorId(e, n)
          }), a += 1, o += 1;
        l(this.getHeightForFooter(e)) && s.push({
          type: "footer",
          section: e,
          offsetTop: i
        })
      }
    }
    return {
      spacerTop: r,
      totalHeight: n + this.paddingBottom,
      items: s
    }
  }
  computeScrollPosition(e, t) {
    let {
      paddingTop: n
    } = this, r = n + this.getListHeaderHeight(), i = 0, a = false;
    for (; i <= e;) {
      let n = this.sections[i];
      if (i === e && null == t) {
        a = true;
        break
      }
      if (0 === n) {
        i += 1;
        continue
      }
      if (r += this.getHeightForSection(i), this.uniform) {
        let o = this.getHeightForRow(i, 0);
        i === e && null != t ? (r += o * t, a = true) : r += o * n
      } else
        for (let o = 0; o < n; o++)
          if (i < e || i === e && null != t && o < t) r += this.getHeightForRow(i, o);
          else if (i === e && null != t && o === t) {
        a = true;
        break
      }
      a || (r += this.getHeightForFooter(i)), i += 1
    }
    return [r, null != t ? this.getHeightForRow(e, t) : this.getHeightForSection(i)]
  }
  constructor() {
    r(this, "sectionHeight", 0), r(this, "rowHeight", 0), r(this, "footerHeight", 0), r(this, "listHeaderHeight", 0), r(this, "uniform", false), r(this, "paddingBottom", 0), r(this, "paddingTop", 0), r(this, "sections", []), r(this, "getAnchorId", () => true)
  }
}
let o = a