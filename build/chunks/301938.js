/** Chunk was on 27978 **/
n.d(t, {
  Z: () => b
}), n(47120), n(411104), n(773603);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(990547),
  l = n(481060),
  c = n(479531),
  u = n(388905),
  d = n(585483),
  p = n(573261),
  h = n(720196),
  g = n(981631),
  _ = n(388032),
  m = n(762056),
  f = n(802138);

function b(e) {
  let {
    setOriginalEmail: t,
    setSlide: o,
    ready: b,
    token: x
  } = e, [N, v] = i.useState(!1), [E, I] = i.useState(null), [j, S] = i.useState(null), [C, O] = i.useState(""), y = i.useRef(null);
  return i.useEffect(() => {
    if (b) {
      var e;
      null === (e = y.current) || void 0 === e || e.focus()
    }
  }, [b]), (0, r.jsxs)("div", {
    children: [(0, r.jsx)(u.Ee, {
      src: null == j ? n(26230) : n(935227),
      className: a()(f.marginBottom20, f.marginTop8)
    }), (0, r.jsx)(u.Dx, {
      children: _.NW.string(_.t["IfBQ5+"])
    }), null != j && "" !== j ? (0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "text-danger",
      children: j
    }) : null, (0, r.jsxs)(u.gO, {
      className: a()(f.marginBottom20, f.marginTop20),
      children: [(0, r.jsx)(u.II, {
        name: "password",
        type: "password",
        label: _.NW.string(_.t["8dM4FB"]),
        setRef: y,
        className: f.marginBottom20,
        value: C,
        onChange: O,
        error: E,
        autoComplete: "new-password",
        maxLength: 72,
        placeholder: _.NW.string(_.t["yY/PXV"])
      }), (0, r.jsx)(u.zx, {
        className: f.marginTop8,
        onClick: () => {
          if (!N) {
            if (0 === C.length) {
              I(_.NW.string(_.t.R98xDw)), d.S.dispatch(g.CkL.WAVE_EMPHASIZE);
              return
            }
            return null != j && S(null), null != E && I(null), t(""), v(!0), p.Z.post({
              url: g.ANM.ACCOUNT_REVERT,
              body: {
                token: x,
                password: C
              },
              trackedActionData: {
                event: s.NetworkActionNames.ACCOUNT_REVERT
              },
              rejectWithError: !1
            }).then(e => {
              let {
                body: {
                  email: n
                }
              } = e;
              O(""), t(n), o(h.n.SUCCESS)
            }).catch(e => {
              if (e instanceof Error) S(_.NW.formatToPlainString(_.t.aTVNen, {
                statusPageURL: g.yXt.STATUS
              }));
              else {
                let t = new c.Z(e);
                t.hasFieldErrors() ? I(t.getAnyErrorMessage()) : S((function(e) {
                  switch (e) {
                    case g.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                      return _.NW.string(_.t["11zzGR"]);
                    case g.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                      return _.NW.string(_.t["6qmgaG"]);
                    case g.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                      return _.NW.string(_.t.bChnKi);
                    default:
                      return _.NW.format(_.t.aTVNen, {
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
        submitting: N,
        disabled: N,
        children: _.NW.string(_.t.ezv91d)
      })]
    }), (0, r.jsx)("div", {
      className: m.buttonContainer,
      children: (0, r.jsx)(u.zx, {
        color: u.zx.Colors.PRIMARY,
        onClick: () => {
          O(""), o(h.n.START)
        },
        children: _.NW.string(_.t.rzxnQ0)
      })
    })]
  })
}