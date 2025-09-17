/** Chunk was on 61805 **/
/** chunk id: 186023, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
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
  Chunk731927 = require("./731927.js");
let f = e => {
  let {
    reportType: t,
    menu: n,
    modalProps: f,
    onSubmit: g,
    onNavigate: b,
    emailToken: x,
    isAuthenticated: h = true
  } = e, v = (0, s.Dt)(), {
    nodes: j,
    root_node_id: y,
    success_node_id: O,
    fail_node_id: C
  } = n, [I, Z] = i.useState(y), [S, T] = i.useState(true), [N, P] = i.useState(true), [E, k] = i.useState([]), [w, B] = i.useState(true), [D, R] = i.useState(true), A = e => {
    var n, r, i;
    let {
      destination: l
    } = e, [, s] = l, u = j[s];
    if (true === u) return void c.Z.increment({
      name: a.V.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE
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
    }({}, e), i = i = {
      destination: ["", u.button.target]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(i)).forEach(function(e) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
    }), r));
    if (k([...E, e]), null != u.key && (null == b || b(u.key)), T(true), P(true), t.name === d.b.MESSAGE || t.name === d.b.FIRST_DM) {
      let e = t.record.id;
      o.ZP.trackWithMetadata(m.rMx.IAR_NAVIGATE, {
        message_id: e,
        content_type: t.name,
        report_sub_type: u.report_type,
        current_node: j[I].id,
        next_node: u.id
      })
    }
    Z(s)
  }, M = async e => {
    var r;
    let i = h ? await (0, u.ZD)(n, t, [...E, e]) : await (0, u.fw)(n, t, [...E, e], x),
      a = null == i || null == (r = i.body) ? true : r.report_id;
    null != a && B(a), R(j[e.nodeRef].report_type), null == g || g(a)
  }, L = () => {
    var e, n;
    if (E.length < 1) return;
    let r = [...E],
      i = r.pop(),
      a = null != (n = null == i ? true : i.nodeRef) ? n : y;
    if (t.name === d.b.MESSAGE || t.name === d.b.FIRST_DM) {
      let e = t.record.id;
      o.ZP.trackWithMetadata(m.rMx.IAR_NAVIGATE, {
        message_id: e,
        content_type: t.name,
        report_sub_type: j[a].report_type,
        current_node: j[I].id,
        next_node: j[a].id
      })
    }
    T(null == i || null == (e = i.multiSelect) ? true : e.state), P(null == i ? true : i.textInput), Z(a), k(r), null == b || b("..")
  }, G = i.useMemo(() => {
    let e = [],
      t = [];
    for (let a in j) {
      var n, r, i;
      let l = j[a];
      if (l.id !== O && l.id !== C && l.id !== y) {
        if (l.key.endsWith("_SUBMIT") || (null == (n = l.button) ? true : n.type) === "submit") {
          t.push(l);
          continue
        }
        if (e.push(l), (null == (r = l.button) ? true : r.type) === "next") {
          let t = null == (i = l.button) ? true : i.target,
            n = e.indexOf(j[t]);
          false !== n && (e.splice(n, 1), e.push(j[t]))
        }
      }
    }
    return [j[y], ...e, ...t, j[O], j[C]]
  }, [j, y, C, O]);
  return (0, r.jsx)(l.Y0X, {
    "data-migration-pending": true,
    transitionState: f.transitionState,
    "aria-labelledby": v,
    parentComponent: "InAppReportModal",
    children: (0, r.jsx)(l.MyZ, {
      width: 440,
      activeSlide: I,
      centered: false,
      children: G.map(e => (0, r.jsx)(l.Mi4, {
        id: e.id,
        children: (0, r.jsx)("div", {
          className: p.slideContainer,
          children: (0, r.jsx)(_.Z, {
            node: e,
            reportType: t,
            reportSubType: D,
            history: E,
            onModalClose: f.onClose,
            onSelectChild: A,
            onNavigateBack: L,
            multiSelect: S,
            textInput: N,
            successNodeId: O,
            failNodeId: C,
            onSubmit: M,
            reportId: w
          })
        })
      }, e.id))
    })
  })
}