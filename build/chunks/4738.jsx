/** Chunk was on web.js **/
/** chunk id: 4738, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk693789 = require("./693789.js"),
  Chunk1561 = require("./1561.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk889963 = require("./889963.js"),
  Chunk388032 = require("./388032.js"),
  Chunk578949 = require("./578949.js");

function p(e) {
  let {
    page: t,
    totalPageCount: n,
    disabled: o,
    onPageChange: s
  } = e, [d, f] = i.useState(false), [p, h] = i.useState(null), m = null != p && p >= 1 && p <= n, g = e => {
    let t = parseInt(e);
    if ("" === e || isNaN(t)) return void h(null);
    h(t)
  }, E = e => {
    "Enter" === e.key && null != p && m && (s(p), f(false), h(null))
  };
  return o ? <u.X6q className={_.gap} aria-hidden={true} variant={"heading-sm/semibold"}>{"…"}</u.X6q> : d ? <c.Is autoFocus={true} className={_.jumpToPageInlineInput} value={null == p ? "" : "".concat(p)} onChange={g} onBlur={() => {
      f(false), h(null)
    }} onKeyPress={E} disabled={o} /> : <l.P onClick={() => f(true)}><u.X6q className={a()(_.roundButton, _.gap)} aria-hidden={true} variant={"heading-sm/semibold"}>{"…"}</u.X6q></l.P>
}

function h(e) {
  let {
    currentPage: t,
    totalCount: n,
    pageSize: i,
    maxVisiblePages: o,
    disablePaginationGap: c,
    onPageChange: h,
    hideMaxPage: m = false,
    className: g,
    renderPageWrapper: E
  } = e, b = Math.ceil(n / i);

  function y(e) {
    null != h && h(e)
  }

  function O(e) {
    let {
      key: t,
      disabled: n,
      navigateToPage: i
    } = e;
    return <s.zx className={_.endButton} innerClassName={_.endButtonInner} look={s.zx.Looks.BLANK} color={s.zx.Colors.TRANSPARENT} onClick={i} disabled={n} rel={"prev"}>{<u.V7D size={"md"} color={"currentColor"} className={_.iconCaret} aria-hidden={true} />}{<span>{f.intl.string(f.t["13/7kZ"])}</span>}</s.zx>
  }

  function v(e) {
    let {
      key: t,
      disabled: n,
      navigateToPage: i
    } = e;
    return <s.zx className={_.endButton} innerClassName={_.endButtonInner} look={s.zx.Looks.BLANK} color={s.zx.Colors.TRANSPARENT} onClick={i} disabled={n} rel={"next"}>{<span>{f.intl.string(f.t.PDTjLC)}</span>}{<u.Fbu size={"md"} color={"currentColor"} className={_.iconCaret} aria-hidden={true} />}</s.zx>
  }

  function I(e) {
    return <l.P className={a()(_.roundButton, {
        [_.activeButton]: e.selected
      })} onClick={e.selected ? true : e.navigateToPage} aria-label={f.intl.formatToPlainString(f.t.IGMs8f, {
        pageNumber: e.targetPage
      })} aria-current={e.selected ? "page" : true}><span>{e.targetPage}</span></l.P>
  }

  function T(e) {
    let t = I(e);
    return null != E ? E(e, t) : t
  }

  function S(e) {
    return <p page={e} totalPageCount={b} disabled={!!c} onPageChange={h} />
  }

  function A(e) {
    let {
      pages: t,
      hasMultiplePages: n
    } = e;
    return n ? <div className={a()(_.pageControlContainer, g)}><nav className={_.pageControl}>{t.map(e => {
          switch (e.type) {
            case d.s.BACK:
              return O(e);
            case d.s.PAGE:
              return T(e);
            case d.s.GAP:
              return S(e);
            case d.s.NEXT:
              return v(e);
            default:
              return null
          }
        })}</nav></div> : null
  }
  return <d.W totalPageCount={b} selectedPage={t} maxVisiblePages={o} hideMaxPage={m} onPageChange={y}>{A}</d.W>
}