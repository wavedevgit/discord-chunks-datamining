/** Chunk was on 54844 **/
/** chunk id: 186023, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk286379 = require("./286379.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk313201 = require("./313201.js"),
  Chunk797614 = require("./797614.js"),
  Chunk82554 = require("./82554.js"),
  Chunk185625 = require("./185625.js"),
  Chunk255514 = require("./255514.js"),
  Chunk981631 = require("./981631.js"),
  Chunk864012 = require("./864012.js");
let x = e => {
  let {
    reportType: t,
    menu: n,
    modalProps: x,
    onSubmit: _,
    onNavigate: b,
    emailToken: h,
    isAuthenticated: f = true
  } = e, v = (0, o.Dt)(), {
    nodes: j,
    root_node_id: y,
    success_node_id: O,
    fail_node_id: Z
  } = n, [I, C] = l.useState(y), [S, N] = l.useState(true), [T, P] = l.useState(true), [E, k] = l.useState([]), [D, R] = l.useState(true), [w, M] = l.useState(true), A = e => {
    var n, r, l;
    let {
      destination: a
    } = e, [, o] = a, u = j[o];
    if (true === u) return void c.Z.increment({
      name: i.V.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE
    });
    if (u.elements.some(e => "skip" === e.type) && (null == (n = u.button) ? true : n.type) === "next") return A((r = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, e), l = l = {
      destination: ["", u.button.target]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(l)).forEach(function(e) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
    }), r));
    if (k([...E, e]), null != u.key && (null == b || b(u.key)), N(true), P(true), t.name === d.b.MESSAGE || t.name === d.b.FIRST_DM) {
      let e = t.record.id;
      s.ZP.trackWithMetadata(p.rMx.IAR_NAVIGATE, {
        message_id: e,
        content_type: t.name,
        report_sub_type: u.report_type,
        current_node: j[I].id,
        next_node: u.id
      })
    }
    C(o)
  }, L = async e => {
    var r;
    let l = f ? await (0, u.ZD)(n, t, [...E, e]) : await (0, u.fw)(n, t, [...E, e], h),
      i = null == l || null == (r = l.body) ? true : r.report_id;
    null != i && R(i), M(j[e.nodeRef].report_type), null == _ || _(i)
  }, B = () => {
    var e, n;
    if (E.length < 1) return;
    let r = [...E],
      l = r.pop(),
      i = null != (n = null == l ? true : l.nodeRef) ? n : y;
    if (t.name === d.b.MESSAGE || t.name === d.b.FIRST_DM) {
      let e = t.record.id;
      s.ZP.trackWithMetadata(p.rMx.IAR_NAVIGATE, {
        message_id: e,
        content_type: t.name,
        report_sub_type: j[i].report_type,
        current_node: j[I].id,
        next_node: j[i].id
      })
    }
    N(null == l || null == (e = l.multiSelect) ? true : e.state), P(null == l ? true : l.textInput), C(i), k(r), null == b || b("..")
  }, U = l.useMemo(() => {
    let e = [],
      t = [];
    for (let i in j) {
      var n, r, l;
      let a = j[i];
      if (a.id !== O && a.id !== Z && a.id !== y) {
        if (a.key.endsWith("_SUBMIT") || (null == (n = a.button) ? true : n.type) === "submit") {
          t.push(a);
          continue
        }
        if (e.push(a), (null == (r = a.button) ? true : r.type) === "next") {
          let t = null == (l = a.button) ? true : l.target,
            n = e.indexOf(j[t]);
          false !== n && (e.splice(n, 1), e.push(j[t]))
        }
      }
    }
    return [j[y], ...e, ...t, j[O], j[Z]]
  }, [j, y, Z, O]);
  return <a.Y0X data-migration-pending={true} transitionState={x.transitionState} aria-labelledby={v} parentComponent={"InAppReportModal"}><a.MyZ width={440} activeSlide={I} centered={false}>{U.map(e => (0, r.jsx)(a.Mi4, {
        id: e.id,
        children: (0, r.jsx)("div", {
          className: g.slideContainer,
          children: (0, r.jsx)(m.Z, {
            node: e,
            reportType: t,
            reportSubType: w,
            history: E,
            onModalClose: x.onClose,
            onSelectChild: A,
            onNavigateBack: B,
            multiSelect: S,
            textInput: T,
            successNodeId: O,
            failNodeId: Z,
            onSubmit: L,
            reportId: D
          })
        })
      }, e.id))}</a.MyZ></a.Y0X>
}