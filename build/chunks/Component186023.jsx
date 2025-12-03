/** Chunk was on 54844 **/
/** chunk id: 186023, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => b
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
  Chunk584581 = require("./584581.js");
let b = e => {
  let {
    reportType: t,
    menu: n,
    modalProps: b,
    onSubmit: f,
    onNavigate: v,
    emailToken: j,
    isAuthenticated: y = true
  } = e, Z = (0, d.Dt)(), {
    nodes: O,
    root_node_id: I,
    success_node_id: S,
    fail_node_id: C
  } = n, [N, T] = i.useState(I), [P, E] = i.useState(true), [k, w] = i.useState(true), [R, M] = i.useState([]), [D, A] = i.useState(true), [B, U] = i.useState(true), L = (0, m.PO)("in_app_report_modal");
  (0, s.ZP)(() => {
    L && (0, u.k0)()
  });
  let G = e => {
      var n, r, i;
      let {
        destination: a
      } = e, [, s] = a, d = O[s];
      if (true === d) return void c.Z.increment({
        name: l.V.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE
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
      }({}, e), i = i = {
        destination: ["", d.button.target]
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
      if (M([...R, e]), null != d.key && (null == v || v(d.key)), E(true), w(true), t.name === p.b.MESSAGE || t.name === p.b.FIRST_DM) {
        let e = t.record.id;
        o.ZP.trackWithMetadata(h.rMx.IAR_NAVIGATE, {
          message_id: e,
          content_type: t.name,
          report_sub_type: d.report_type,
          current_node: O[N].id,
          next_node: d.id
        })
      }
      T(s)
    },
    H = async e => {
      var r;
      let i = y ? await (0, g.ZD)(n, t, [...R, e]) : await (0, g.fw)(n, t, [...R, e], j),
        l = null == i || null == (r = i.body) ? true : r.report_id;
      null != l && A(l), U(O[e.nodeRef].report_type), null == f || f(l)
    }, W = () => {
      var e, n;
      if (R.length < 1) return;
      let r = [...R],
        i = r.pop(),
        l = null != (n = null == i ? true : i.nodeRef) ? n : I;
      if (t.name === p.b.MESSAGE || t.name === p.b.FIRST_DM) {
        let e = t.record.id;
        o.ZP.trackWithMetadata(h.rMx.IAR_NAVIGATE, {
          message_id: e,
          content_type: t.name,
          report_sub_type: O[l].report_type,
          current_node: O[N].id,
          next_node: O[l].id
        })
      }
      E(null == i || null == (e = i.multiSelect) ? true : e.state), w(null == i ? true : i.textInput), T(l), M(r), null == v || v("..")
    }, F = i.useMemo(() => {
      let e = [],
        t = [];
      for (let l in O) {
        var n, r, i;
        let a = O[l];
        if (a.id !== S && a.id !== C && a.id !== I) {
          if (a.key.endsWith("_SUBMIT") || (null == (n = a.button) ? true : n.type) === "submit") {
            t.push(a);
            continue
          }
          if (e.push(a), (null == (r = a.button) ? true : r.type) === "next") {
            let t = null == (i = a.button) ? true : i.target,
              n = e.indexOf(O[t]);
            false !== n && (e.splice(n, 1), e.push(O[t]))
          }
        }
      }
      return [O[I], ...e, ...t, O[S], O[C]]
    }, [O, I, C, S]);
  return (0, r.jsx)(a.Y0X, {
    "data-migration-pending": true,
    transitionState: b.transitionState,
    "aria-labelledby": Z,
    parentComponent: "InAppReportModal",
    children: (0, r.jsx)(a.MyZ, {
      width: 440,
      activeSlide: N,
      centered: false,
      children: F.map(e => (0, r.jsx)(a.Mi4, {
        id: e.id,
        children: (0, r.jsx)("div", {
          className: x.slideContainer,
          children: (0, r.jsx)(_.Z, {
            node: e,
            reportType: t,
            reportSubType: B,
            history: R,
            onModalClose: b.onClose,
            onSelectChild: G,
            onNavigateBack: W,
            multiSelect: P,
            textInput: k,
            successNodeId: S,
            failNodeId: C,
            onSubmit: H,
            reportId: D,
            nodeMap: O
          })
        })
      }, e.id))
    })
  })
}