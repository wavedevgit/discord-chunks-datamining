/** Chunk was on 54844 **/
/** chunk id: 186023, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk286379 = require("./286379.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk367907 = require("./367907.js"),
  Chunk313201 = require("./313201.js"),
  Chunk797614 = require("./797614.js"),
  Chunk546791 = require("./546791.js"),
  Chunk277537 = require("./277537.js"),
  Chunk82554 = require("./82554.js"),
  Chunk185625 = require("./185625.js"),
  Chunk255514 = require("./255514.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk351356 = require("./351356.js");
let h = e => {
  let {
    reportType: t,
    menu: n,
    modalProps: h,
    onSubmit: v,
    onNavigate: _,
    emailToken: j,
    isAuthenticated: y = true
  } = e, O = (0, d.Dt)(), {
    nodes: Z,
    root_node_id: I,
    success_node_id: C,
    fail_node_id: S
  } = n, [N, P] = l.useState(I), [T, k] = l.useState(true), [E, w] = l.useState(true), [M, D] = l.useState([]), [R, A] = l.useState(true), [B, U] = l.useState(true), L = (0, m.PO)("in_app_report_modal");
  (0, s.ZP)(() => {
    L && (0, u.k0)()
  });
  let G = e => {
      var n, r, l;
      let {
        destination: a
      } = e, [, s] = a, d = Z[s];
      if (true === d) return void c.Z.increment({
        name: i.V.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE
      });
      if (d.elements.some(e => "skip" === e.type) && (null == (n = d.button) ? true : n.type) === "next") return G((r = function(e) {
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
        destination: ["", d.button.target]
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
      if (D([...M, e]), null != d.key && (null == _ || _(d.key)), k(true), w(true), t.name === b.b.MESSAGE || t.name === b.b.FIRST_DM) {
        let e = t.record.id;
        o.ZP.trackWithMetadata(f.rMx.IAR_NAVIGATE, {
          message_id: e,
          content_type: t.name,
          report_sub_type: d.report_type,
          current_node: Z[N].id,
          next_node: d.id
        })
      }
      P(s)
    },
    H = async e => {
      var r;
      let l = y ? await (0, p.ZD)(n, t, [...M, e]) : await (0, p.fw)(n, t, [...M, e], j),
        i = null == l || null == (r = l.body) ? true : r.report_id;
      null != i && A(i), U(Z[e.nodeRef].report_type), null == v || v(i)
    }, W = () => {
      var e, n;
      if (M.length < 1) return;
      let r = [...M],
        l = r.pop(),
        i = null != (n = null == l ? true : l.nodeRef) ? n : I;
      if (t.name === b.b.MESSAGE || t.name === b.b.FIRST_DM) {
        let e = t.record.id;
        o.ZP.trackWithMetadata(f.rMx.IAR_NAVIGATE, {
          message_id: e,
          content_type: t.name,
          report_sub_type: Z[i].report_type,
          current_node: Z[N].id,
          next_node: Z[i].id
        })
      }
      k(null == l || null == (e = l.multiSelect) ? true : e.state), w(null == l ? true : l.textInput), P(i), D(r), null == _ || _("..")
    }, F = l.useMemo(() => {
      let e = [],
        t = [];
      for (let i in Z) {
        var n, r, l;
        let a = Z[i];
        if (a.id !== C && a.id !== S && a.id !== I) {
          if (a.key.endsWith("_SUBMIT") || (null == (n = a.button) ? true : n.type) === "submit") {
            t.push(a);
            continue
          }
          if (e.push(a), (null == (r = a.button) ? true : r.type) === "next") {
            let t = null == (l = a.button) ? true : l.target,
              n = e.indexOf(Z[t]);
            false !== n && (e.splice(n, 1), e.push(Z[t]))
          }
        }
      }
      return [Z[I], ...e, ...t, Z[C], Z[S]]
    }, [Z, I, S, C]);
  return (0, r.jsx)(a.Y0X, {
    "data-migration-pending": true,
    transitionState: h.transitionState,
    "aria-labelledby": O,
    parentComponent: "InAppReportModal",
    children: (0, r.jsx)(a.MyZ, {
      width: 440,
      activeSlide: N,
      centered: false,
      children: F.map(e => (0, r.jsx)(a.Mi4, {
        id: e.id,
        children: (0, r.jsx)("div", {
          className: x.slideContainer,
          children: (0, r.jsx)(g.Z, {
            node: e,
            reportType: t,
            reportSubType: B,
            history: M,
            onModalClose: h.onClose,
            onSelectChild: G,
            onNavigateBack: W,
            multiSelect: T,
            textInput: E,
            successNodeId: C,
            failNodeId: S,
            onSubmit: H,
            reportId: R,
            nodeMap: Z
          })
        })
      }, e.id))
    })
  })
}