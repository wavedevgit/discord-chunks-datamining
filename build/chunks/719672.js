/** Chunk was on 93886 **/
n.d(t, {
  Z: () => _
}), n(47120);
var r = n(200651);
n(192379);
var a = n(913527),
  l = n.n(a),
  i = n(442837),
  o = n(704215),
  s = n(481060),
  c = n(713284),
  d = n(883904),
  u = n(211644),
  m = n(675478),
  h = n(681619),
  p = n(793272);
let x = e => {
    switch (e) {
      case c.D.DC_DISMISSED:
        return "DISMISS:";
      case c.D.DC_SHOWN:
        return "SHOW:";
      case c.D.DC_SHOW_REQUEST:
        return "REQUEST TO SHOW:";
      default:
        return "UNKNOWN TYPE:"
    }
  },
  f = [{
    key: "events",
    render(e) {
      let {
        event: t,
        dismissibleContent: n
      } = e;
      return "".concat(t, " ").concat(o.z[n])
    }
  }],
  b = [{
    key: "candidates",
    render(e) {
      let {
        dismissibleContent: t
      } = e;
      return "".concat(o.z[t])
    }
  }];

function _() {
  let e = (0, i.e7)([c.Z], () => c.Z.getDCFEvents()),
    t = (0, u.ZP)(e => e.candidates),
    n = (0, u.ZP)(e => e.lastWinnerTime),
    a = void 0 !== n ? l()(n).fromNow() : "n/a",
    o = e.map(e => {
      let {
        eventType: t,
        dismissibleContent: n
      } = e;
      return {
        key: x(t) + n.toString(),
        event: x(t),
        dismissibleContent: n
      }
    }),
    _ = Array.from(t.keys()).map(e => ({
      key: e.toString(),
      dismissibleContent: e
    }));
  return (0, r.jsxs)("div", {
    className: p.panelContainer,
    children: [(0, r.jsxs)("div", {
      className: p.buttonContainer,
      children: [(0, r.jsx)(s.zxk, {
        className: p.button,
        onClick: () => (0, d.EG)(),
        children: "Reset Daily Cap"
      }), (0, r.jsx)(s.zxk, {
        className: p.button,
        onClick: m.sr,
        children: "Clear All Dismissed Contents"
      }), (0, r.jsx)(s.zxk, {
        className: p.button,
        onClick: m.bE,
        children: "Check All Dismissed Contents"
      })]
    }), (0, r.jsx)("br", {}), (0, r.jsxs)("div", {
      className: p.info,
      children: ["Last winner time: ", a]
    }), (0, r.jsx)("br", {}), (0, r.jsx)("div", {
      className: p.candidatesTableContainer,
      children: (0, r.jsx)(h.Z, {
        className: p.candidatesTable,
        columns: b,
        data: _
      })
    }), (0, r.jsx)("br", {}), (0, r.jsx)(h.Z, {
      columns: f,
      data: o
    })]
  })
}