/** Chunk was on 58652 **/
/** chunk id: 779735, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk731738 = require("./731738.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk58149 = require("./58149.js"),
  Chunk915089 = require("./915089.js"),
  Chunk831062 = require("./831062.js"),
  Chunk923531 = require("./923531.js"),
  Chunk17372 = require("./17372.js"),
  Chunk369053 = require("./369053.js"),
  Chunk598131 = require("./598131.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk575119 = require("./575119.js");
let f = e => {
  let {
    reportType: t,
    menu: n,
    modalProps: f,
    onSubmit: v,
    onNavigate: h,
    emailToken: j,
    isAuthenticated: _ = true
  } = e, A = (0, c.GV)(), {
    nodes: y,
    root_node_id: O,
    success_node_id: S,
    fail_node_id: T
  } = n, [N, w] = r.useState(O), [k, P] = r.useState(true), [C, E] = r.useState(true), [I, D] = r.useState([]), [M, R] = r.useState(true), [L, G] = r.useState(true);
  (0, s.Ay)(() => {
    (0, u.VE)()
  });
  let U = e => {
      var n, l, r;
      let {
        destination: i
      } = e, [, s] = i, c = y[s];
      if (true === c) return void d.A.increment({
        name: a.K.IN_APP_REPORT_NAVIGATE_TO_NONEXISTENT_NODE
      });
      if (c.elements.some(e => "skip" === e.type) && (null == (n = c.button) ? true : n.type) === "next") return U((l = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
              value: l,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = l
          })
        }
        return e
      }({}, e), r = r = {
        destination: ["", c.button.target]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e))
      }), l));
      if (D([...I, e]), null != c.key && (null == h || h(c.key)), P(true), E(true), t.name === m.t0.MESSAGE || t.name === m.t0.FIRST_DM) {
        let e = t.record.id;
        o.Ay.trackWithMetadata(x.HAw.IAR_NAVIGATE, {
          message_id: e,
          content_type: t.name,
          report_sub_type: c.report_type,
          current_node: y[N].id,
          next_node: c.id
        })
      }
      w(s)
    },
    B = async e => {
      var l;
      let r = _ ? await (0, b.zC)(n, t, [...I, e]) : await (0, b.bo)(n, t, [...I, e], j),
        a = null == r || null == (l = r.body) ? true : l.report_id;
      null != a && R(a), G(y[e.nodeRef].report_type), null == v || v(a)
    }, H = () => {
      var e, n;
      if (I.length < 1) return;
      let l = [...I],
        r = l.pop(),
        a = null != (e = null == r ? true : r.nodeRef) ? e : O;
      if (t.name === m.t0.MESSAGE || t.name === m.t0.FIRST_DM) {
        let e = t.record.id;
        o.Ay.trackWithMetadata(x.HAw.IAR_NAVIGATE, {
          message_id: e,
          content_type: t.name,
          report_sub_type: y[a].report_type,
          current_node: y[N].id,
          next_node: y[a].id
        })
      }
      P(null == r || null == (n = r.multiSelect) ? true : n.state), E(null == r ? true : r.textInput), w(a), D(l), null == h || h("..")
    }, V = r.useMemo(() => {
      let e = [],
        t = [];
      for (let a in y) {
        var n, l, r;
        let i = y[a];
        if (i.id !== S && i.id !== T && i.id !== O) {
          if (i.key.endsWith("_SUBMIT") || (null == (n = i.button) ? true : n.type) === "submit") {
            t.push(i);
            continue
          }
          if (e.push(i), (null == (l = i.button) ? true : l.type) === "next") {
            let t = null == (r = i.button) ? true : r.target,
              n = e.indexOf(y[t]);
            false !== n && (e.splice(n, 1), e.push(y[t]))
          }
        }
      }
      return [y[O], ...e, ...t, y[S], y[T]]
    }, [y, O, T, S]);
  return (0, l.jsx)(i.EOs, {
    "data-migration-pending": true,
    transitionState: f.transitionState,
    "aria-labelledby": A,
    parentComponent: "InAppReportModal",
    children: (0, l.jsx)(i.tN_, {
      width: 440,
      activeSlide: N,
      centered: false,
      children: V.map(e => (0, l.jsx)(i.q7S, {
        id: e.id,
        children: (0, l.jsx)("div", {
          className: g.B,
          children: (0, l.jsx)(p.A, {
            node: e,
            reportType: t,
            reportSubType: L,
            history: I,
            onModalClose: f.onClose,
            onSelectChild: U,
            onNavigateBack: H,
            multiSelect: k,
            textInput: C,
            successNodeId: S,
            failNodeId: T,
            onSubmit: B,
            reportId: M,
            nodeMap: y
          })
        })
      }, e.id))
    })
  })
}