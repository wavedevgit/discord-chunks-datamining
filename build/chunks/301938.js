/** Chunk was on 27978 **/
n.d(t, {
  Z: () => b
}), n(47120), n(411104), n(773603);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  l = n(990547),
  s = n(481060),
  c = n(479531),
  u = n(388905),
  d = n(585483),
  h = n(573261),
  p = n(720196),
  f = n(981631),
  g = n(388032),
  _ = n(532923),
  m = n(467025);

function b(e) {
  let {
    setOriginalEmail: t,
    setSlide: o,
    ready: b,
    token: x
  } = e, [N, v] = i.useState(!1), [I, E] = i.useState(null), [j, C] = i.useState(null), [O, S] = i.useState(""), y = i.useRef(null);
  return i.useEffect(() => {
    if (b) {
      var e;
      null === (e = y.current) || void 0 === e || e.focus()
    }
  }, [b]), (0, r.jsxs)("div", {
    children: [(0, r.jsx)(u.Ee, {
      src: null == j ? n(26230) : n(935227),
      className: a()(m.marginBottom20, m.marginTop8)
    }), (0, r.jsx)(u.Dx, {
      children: g.NW.string(g.t["IfBQ5+"])
    }), null != j && "" !== j ? (0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "text-danger",
      children: j
    }) : null, (0, r.jsxs)(u.gO, {
      className: a()(m.marginBottom20, m.marginTop20),
      children: [(0, r.jsx)(u.II, {
        name: "password",
        type: "password",
        label: g.NW.string(g.t["8dM4FB"]),
        setRef: y,
        className: m.marginBottom20,
        value: O,
        onChange: S,
        error: I,
        autoComplete: "new-password",
        maxLength: 72,
        placeholder: g.NW.string(g.t["yY/PXV"])
      }), (0, r.jsx)(u.zx, {
        className: m.marginTop8,
        onClick: () => {
          if (!N) {
            if (0 === O.length) {
              E(g.NW.string(g.t.R98xDw)), d.S.dispatch(f.CkL.WAVE_EMPHASIZE);
              return
            }
            return null != j && C(null), null != I && E(null), t(""), v(!0), h.Z.post({
              url: f.ANM.ACCOUNT_REVERT,
              body: {
                token: x,
                password: O
              },
              trackedActionData: {
                event: l.NetworkActionNames.ACCOUNT_REVERT
              },
              rejectWithError: !1
            }).then(e => {
              let {
                body: {
                  email: n
                }
              } = e;
              S(""), t(n), o(p.n.SUCCESS)
            }).catch(e => {
              if (e instanceof Error) C(g.NW.formatToPlainString(g.t.aTVNen, {
                statusPageURL: f.yXt.STATUS
              }));
              else {
                let t = new c.Z(e);
                t.hasFieldErrors() ? E(t.getAnyErrorMessage()) : C((function(e) {
                  switch (e) {
                    case f.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                      return g.NW.string(g.t["11zzGR"]);
                    case f.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                      return g.NW.string(g.t["6qmgaG"]);
                    case f.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                      return g.NW.string(g.t.bChnKi);
                    default:
                      return g.NW.format(g.t.aTVNen, {
                        statusPageURL: f.yXt.STATUS
                      })
                  }
                })(t.code).toString())
              }
              d.S.dispatch(f.CkL.WAVE_EMPHASIZE)
            }).finally(() => {
              v(!1)
            })
          }
        },
        submitting: N,
        disabled: N,
        children: g.NW.string(g.t.ezv91d)
      })]
    }), (0, r.jsx)("div", {
      className: _.buttonContainer,
      children: (0, r.jsx)(u.zx, {
        color: u.zx.Colors.PRIMARY,
        onClick: () => {
          S(""), o(p.n.START)
        },
        children: g.NW.string(g.t.rzxnQ0)
      })
    })]
  })
}