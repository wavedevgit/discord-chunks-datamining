/** Chunk was on 51724 **/
n.d(t, {
  Z: () => x
}), n(47120), n(301563);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(570140),
  o = n(401430),
  c = n(155268),
  d = n(600164),
  u = n(313201),
  m = n(695103),
  p = n(388032),
  g = n(977426),
  h = n(802138);
let f = /^\d+$|^$/;

function x(e) {
  let {
    onClose: t,
    transitionState: n
  } = e, {
    authorizedApplicationId: x,
    authorizationError: b,
    authorizing: N
  } = (0, s.cj)([m.Z], () => ({
    authorizedApplicationId: m.Z.testModeApplicationId,
    authorizationError: m.Z.error,
    authorizing: m.Z.isFetchingAuthorization
  })), [_, E] = i.useState(null != x ? x : ""), [C, j] = i.useState("8080"), [O, v] = i.useState("localhost"), S = (0, u.Dt)(), T = f.test(_);
  async function I() {
    o.q$();
    let e = function(e, t, n) {
      if (null == e) return null;
      switch (e) {
        case "localhost":
          return "https://localhost:".concat(t);
        case "proxy":
          return (0, c.ZP)(n)
      }
    }(O, C, _);
    null != await o.Wt(_, e) && t()
  }
  i.useEffect(() => () => l.Z.wait(() => o.q$()), []);
  let y = null != x && x === _,
    A = y ? function() {
      o.mc(), E(""), v(null)
    } : I;
  return (0, r.jsxs)(a.Y0X, {
    "aria-labelledby": S,
    transitionState: n,
    children: [(0, r.jsxs)(a.xBx, {
      justify: d.Z.Justify.BETWEEN,
      separator: !1,
      children: [(0, r.jsx)(a.vwX, {
        id: S,
        tag: "h1",
        className: h.marginReset,
        children: p.NW.string(p.t.f8fzk5)
      }), (0, r.jsx)(a.olH, {
        onClick: t
      })]
    }), (0, r.jsxs)(a.hzk, {
      className: g.modalContent,
      children: [(0, r.jsx)(a.R94, {
        className: h.marginBottom20,
        type: a.R94.Types.DESCRIPTION,
        children: p.NW.string(p.t.a6Vilp)
      }), null == b ? null : (0, r.jsx)(a.kzN, {
        className: h.marginBottom20,
        children: b
      }), (0, r.jsx)("form", {
        onSubmit: e => {
          e.preventDefault(), A()
        },
        children: (0, r.jsxs)(d.Z, {
          direction: d.Z.Direction.VERTICAL,
          align: d.Z.Align.START,
          children: [(0, r.jsx)(a.xJW, {
            className: g.inputWrapper,
            title: p.NW.string(p.t.P6TzgI),
            required: !0,
            children: (0, r.jsx)(a.oil, {
              value: _,
              maxLength: 19,
              error: T ? null : p.NW.string(p.t.gPNgKC),
              onChange: function(e) {
                E(e)
              },
              disabled: N
            })
          }), (0, r.jsx)(a.xJW, {
            className: g.inputWrapper,
            title: p.NW.string(p.t["/GTqXF"]),
            children: (0, r.jsx)(a.q4e, {
              isDisabled: !T || "" === _,
              value: O,
              options: [{
                value: "localhost",
                label: p.NW.string(p.t["+Y9Y6u"]),
                key: "localhost"
              }, {
                value: "proxy",
                label: p.NW.string(p.t.uaksyc),
                key: "proxy"
              }],
              onChange: function(e) {
                v(e)
              },
              placeholder: "URL Origin Type"
            })
          }), "localhost" !== O ? null : (0, r.jsx)(a.xJW, {
            className: g.inputWrapper,
            title: p.NW.string(p.t.fF4zxs),
            required: !0,
            children: (0, r.jsx)(a.oil, {
              value: C,
              maxLength: 5,
              onChange: e => j(e),
              disabled: N
            })
          }), (0, r.jsx)(a.zxk, {
            submitting: N,
            type: "submit",
            disabled: !T || 0 === _.length || "localhost" === O && 0 === C.length,
            color: y ? a.zxk.Colors.RED : a.zxk.Colors.GREEN,
            children: y ? p.NW.string(p.t.d6TR3N) : p.NW.string(p.t.qwuK5O)
          })]
        })
      })]
    })]
  })
}