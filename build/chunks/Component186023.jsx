/** Chunk was on 26475 **/
/** chunk id: 186023, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk286379 = require("./286379.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk313201 = require("./313201.js"),
  Chunk797614 = require("./797614.js"),
  Chunk82554 = require("./82554.js"),
  Chunk185625 = require("./185625.js"),
  Chunk255514 = require("./255514.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk584581 = require("./584581.js");
let g = e => {
  let {
    reportType: t,
    menu: n,
    modalProps: g,
    onSubmit: f,
    onNavigate: b,
    emailToken: h,
    isAuthenticated: x = true
  } = e, v = (0, s.Dt)(), {
    nodes: j,
    root_node_id: y,
    success_node_id: C,
    fail_node_id: O
  } = n, [I, Z] = a.useState(y), [T, S] = a.useState(true), [N, P] = a.useState(true), [k, w] = a.useState([]), [E, M] = a.useState(true), [B, A] = a.useState(true), D = e => {
    var n, r, a;
    let {
      destination: o
    } = e, [, s] = o, u = j[s];
    if (true === u) return void c.Z.increment({
      name: i.V.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE
    });
    if (u.elements.some(e => "skip" === e.type) && (null == (n = u.button) ? true : n.type) === "next") return D((r = function(e) {
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
    }({}, e), a = a = {
      destination: ["", u.button.target]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(a)).forEach(function(e) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
    }), r));
    if (w([...k, e]), null != u.key && (null == b || b(u.key)), S(true), P(true), t.name === d.b.MESSAGE || t.name === d.b.FIRST_DM) {
      let e = t.record.id;
      l.ZP.trackWithMetadata(m.rMx.IAR_NAVIGATE, {
        message_id: e,
        content_type: t.name,
        report_sub_type: u.report_type,
        current_node: j[I].id,
        next_node: u.id
      })
    }
    Z(s)
  }, R = async e => {
    var r;
    let a = x ? await (0, u.ZD)(n, t, [...k, e]) : await (0, u.fw)(n, t, [...k, e], h),
      i = null == a || null == (r = a.body) ? true : r.report_id;
    null != i && M(i), A(j[e.nodeRef].report_type), null == f || f(i)
  }, L = () => {
    var e, n;
    if (k.length < 1) return;
    let r = [...k],
      a = r.pop(),
      i = null != (n = null == a ? true : a.nodeRef) ? n : y;
    if (t.name === d.b.MESSAGE || t.name === d.b.FIRST_DM) {
      let e = t.record.id;
      l.ZP.trackWithMetadata(m.rMx.IAR_NAVIGATE, {
        message_id: e,
        content_type: t.name,
        report_sub_type: j[i].report_type,
        current_node: j[I].id,
        next_node: j[i].id
      })
    }
    S(null == a || null == (e = a.multiSelect) ? true : e.state), P(null == a ? true : a.textInput), Z(i), w(r), null == b || b("..")
  }, G = a.useMemo(() => {
    let e = [],
      t = [];
    for (let i in j) {
      var n, r, a;
      let o = j[i];
      if (o.id !== C && o.id !== O && o.id !== y) {
        if (o.key.endsWith("_SUBMIT") || (null == (n = o.button) ? true : n.type) === "submit") {
          t.push(o);
          continue
        }
        if (e.push(o), (null == (r = o.button) ? true : r.type) === "next") {
          let t = null == (a = o.button) ? true : a.target,
            n = e.indexOf(j[t]);
          false !== n && (e.splice(n, 1), e.push(j[t]))
        }
      }
    }
    return [j[y], ...e, ...t, j[C], j[O]]
  }, [j, y, O, C]);
  return (0, r.jsx)(o.Y0X, {
    "data-migration-pending": true,
    transitionState: g.transitionState,
    "aria-labelledby": v,
    parentComponent: "InAppReportModal",
    children: (0, r.jsx)(o.MyZ, {
      width: 440,
      activeSlide: I,
      centered: false,
      children: G.map(e => (0, r.jsx)(o.Mi4, {
        id: e.id,
        children: (0, r.jsx)("div", {
          className: p.slideContainer,
          children: (0, r.jsx)(_.Z, {
            node: e,
            reportType: t,
            reportSubType: B,
            history: k,
            onModalClose: g.onClose,
            onSelectChild: D,
            onNavigateBack: L,
            multiSelect: T,
            textInput: N,
            successNodeId: C,
            failNodeId: O,
            onSubmit: R,
            reportId: E
          })
        })
      }, e.id))
    })
  })
}