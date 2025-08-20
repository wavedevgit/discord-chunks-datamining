/** Chunk was on 65330 **/
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
  Chunk584581 = require("./584581.js");
let f = e => {
  let {
    reportType: t,
    menu: n,
    modalProps: f,
    onSubmit: g,
    onNavigate: x,
    emailToken: b,
    isAuthenticated: h = true
  } = e, v = (0, s.Dt)(), {
    nodes: j,
    root_node_id: y,
    success_node_id: O,
    fail_node_id: C
  } = n, [Z, I] = i.useState(y), [S, N] = i.useState(true), [T, P] = i.useState(true), [k, E] = i.useState([]), [w, R] = i.useState(true), [D, M] = i.useState(true), B = e => {
    var n, r, i;
    let {
      destination: a
    } = e, [, s] = a, u = j[s];
    if (true === u) return void c.Z.increment({
      name: l.V.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE
    });
    if (u.elements.some(e => "skip" === e.type) && (null == (n = u.button) ? true : n.type) === "next") return B((r = function(e) {
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
    if (E([...k, e]), null != u.key && (null == x || x(u.key)), N(true), P(true), t.name === d.b.MESSAGE || t.name === d.b.FIRST_DM) {
      let e = t.record.id;
      o.ZP.trackWithMetadata(_.rMx.IAR_NAVIGATE, {
        message_id: e,
        content_type: t.name,
        report_sub_type: u.report_type,
        current_node: j[Z].id,
        next_node: u.id
      })
    }
    I(s)
  }, A = async e => {
    var r;
    let i = h ? await (0, u.ZD)(n, t, [...k, e]) : await (0, u.fw)(n, t, [...k, e], b),
      l = null == i || null == (r = i.body) ? true : r.report_id;
    null != l && R(l), M(j[e.nodeRef].report_type), null == g || g(l)
  }, G = () => {
    var e, n;
    if (k.length < 1) return;
    let r = [...k],
      i = r.pop(),
      l = null != (n = null == i ? true : i.nodeRef) ? n : y;
    if (t.name === d.b.MESSAGE || t.name === d.b.FIRST_DM) {
      let e = t.record.id;
      o.ZP.trackWithMetadata(_.rMx.IAR_NAVIGATE, {
        message_id: e,
        content_type: t.name,
        report_sub_type: j[l].report_type,
        current_node: j[Z].id,
        next_node: j[l].id
      })
    }
    N(null == i || null == (e = i.multiSelect) ? true : e.state), P(null == i ? true : i.textInput), I(l), E(r), null == x || x("..")
  }, L = i.useMemo(() => {
    let e = [],
      t = [];
    for (let l in j) {
      var n, r, i;
      let a = j[l];
      if (a.id !== O && a.id !== C && a.id !== y) {
        if (a.key.endsWith("_SUBMIT") || (null == (n = a.button) ? true : n.type) === "submit") {
          t.push(a);
          continue
        }
        if (e.push(a), (null == (r = a.button) ? true : r.type) === "next") {
          let t = null == (i = a.button) ? true : i.target,
            n = e.indexOf(j[t]);
          false !== n && (e.splice(n, 1), e.push(j[t]))
        }
      }
    }
    return [j[y], ...e, ...t, j[O], j[C]]
  }, [j, y, C, O]);
  return (0, r.jsx)(a.Y0X, {
    "data-migration-pending": true,
    transitionState: f.transitionState,
    "aria-labelledby": v,
    parentComponent: "InAppReportModal",
    children: (0, r.jsx)(a.MyZ, {
      width: 440,
      activeSlide: Z,
      centered: false,
      children: L.map(e => (0, r.jsx)(a.Mi4, {
        id: e.id,
        children: (0, r.jsx)("div", {
          className: p.slideContainer,
          children: (0, r.jsx)(m.Z, {
            node: e,
            reportType: t,
            reportSubType: D,
            history: k,
            onModalClose: f.onClose,
            onSelectChild: B,
            onNavigateBack: G,
            multiSelect: S,
            textInput: T,
            successNodeId: O,
            failNodeId: C,
            onSubmit: A,
            reportId: w
          })
        })
      }, e.id))
    })
  })
}