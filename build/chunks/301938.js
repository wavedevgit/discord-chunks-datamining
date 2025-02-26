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
  g = n(981631),
  m = n(388032),
  _ = n(279178),
  f = n(455812);

function b(e) {
  let {
    setOriginalEmail: t,
    setSlide: o,
    ready: b,
    token: N
  } = e, [x, v] = i.useState(!1), [I, E] = i.useState(null), [O, j] = i.useState(null), [C, S] = i.useState(""), y = i.useRef(null);
  return i.useEffect(() => {
    if (b) {
      var e;
      null === (e = y.current) || void 0 === e || e.focus()
    }
  }, [b]), (0, r.jsxs)("div", {
    children: [(0, r.jsx)(u.Ee, {
      src: null == O ? n(26230) : n(935227),
      className: a()(f.marginBottom20, f.marginTop8)
    }), (0, r.jsx)(u.Dx, {
      children: m.NW.string(m.t["IfBQ5+"])
    }), null != O && "" !== O ? (0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "text-danger",
      children: O
    }) : null, (0, r.jsxs)(u.gO, {
      className: a()(f.marginBottom20, f.marginTop20),
      children: [(0, r.jsx)(u.II, {
        name: "password",
        type: "password",
        label: m.NW.string(m.t["8dM4FB"]),
        setRef: y,
        className: f.marginBottom20,
        value: C,
        onChange: S,
        error: I,
        autoComplete: "new-password",
        maxLength: 72,
        placeholder: m.NW.string(m.t["yY/PXV"])
      }), (0, r.jsx)(u.zx, {
        className: f.marginTop8,
        onClick: () => {
          if (!x) {
            if (0 === C.length) {
              E(m.NW.string(m.t.R98xDw)), d.S.dispatch(g.CkL.WAVE_EMPHASIZE);
              return
            }
            return null != O && j(null), null != I && E(null), t(""), v(!0), h.Z.post({
              url: g.ANM.ACCOUNT_REVERT,
              body: {
                token: N,
                password: C
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
              if (e instanceof Error) j(m.NW.formatToPlainString(m.t.aTVNen, {
                statusPageURL: g.yXt.STATUS
              }));
              else {
                let t = new c.Z(e);
                t.hasFieldErrors() ? E(t.getAnyErrorMessage()) : j((function(e) {
                  switch (e) {
                    case g.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                      return m.NW.string(m.t["11zzGR"]);
                    case g.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                      return m.NW.string(m.t["6qmgaG"]);
                    case g.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                      return m.NW.string(m.t.bChnKi);
                    default:
                      return m.NW.format(m.t.aTVNen, {
                        statusPageURL: g.yXt.STATUS
                      })
                  }
                })(t.code).toString())
              }
              d.S.dispatch(g.CkL.WAVE_EMPHASIZE)
            }).finally(() => {
              v(!1)
            })
          }
        },
        submitting: x,
        disabled: x,
        children: m.NW.string(m.t.ezv91d)
      })]
    }), (0, r.jsx)("div", {
      className: _.buttonContainer,
      children: (0, r.jsx)(u.zx, {
        color: u.zx.Colors.PRIMARY,
        onClick: () => {
          S(""), o(p.n.START)
        },
        children: m.NW.string(m.t.rzxnQ0)
      })
    })]
  })
}