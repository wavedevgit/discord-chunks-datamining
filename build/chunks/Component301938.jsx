/** Chunk was on 27978 **/
/** chunk id: 301938, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./415506.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk573261 = require("./573261.js"),
  Chunk720196 = require("./720196.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk710509 = require("./710509.js"),
  Chunk197571 = require("./197571.js");

function x(e) {
  let {
    setOriginalEmail: t,
    setSlide: l,
    ready: x,
    token: v
  } = e, [E, b] = i.useState(false), [j, I] = i.useState(null), [N, y] = i.useState(null), [O, S] = i.useState(""), C = i.useRef(null);
  return i.useEffect(() => {
    if (x) {
      var e;
      null == (e = C.current) || e.focus()
    }
  }, [x]), (0, r.jsxs)("div", {
    children: [(0, r.jsx)(u.Ee, {
      src: null == N ? n(26230) : n(935227),
      className: o()(_.marginBottom20, _.marginTop8)
    }), (0, r.jsx)(u.Dx, {
      children: g.intl.string(g.t["IfBQ5+"])
    }), null != N && "" !== N ? (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "text-danger",
      children: N
    }) : null, (0, r.jsxs)(u.gO, {
      className: o()(_.marginBottom20, _.marginTop20),
      children: [(0, r.jsx)(u.II, {
        name: "password",
        type: "password",
        label: g.intl.string(g.t["8dM4FB"]),
        setRef: C,
        className: _.marginBottom20,
        value: O,
        onChange: S,
        error: j,
        autoComplete: "new-password",
        maxLength: 72,
        placeholder: g.intl.string(g.t["yY/PXV"])
      }), (0, r.jsx)(u.zx, {
        className: _.marginTop8,
        onClick: () => {
          if (!E) {
            if (0 === O.length) {
              I(g.intl.string(g.t.R98xDw)), d.S.dispatch(p.CkL.WAVE_EMPHASIZE);
              return
            }
            return null != N && y(null), null != j && I(null), t(""), b(true), h.Z.post({
              url: p.ANM.ACCOUNT_REVERT,
              body: {
                token: v,
                password: O
              },
              trackedActionData: {
                event: s.NetworkActionNames.ACCOUNT_REVERT
              },
              rejectWithError: false
            }).then(e => {
              let {
                body: {
                  email: n
                }
              } = e;
              S(""), t(n), l(f.n.SUCCESS)
            }).catch(e => {
              if (e instanceof Error) y(g.intl.formatToPlainString(g.t.aTVNen, {
                statusPageURL: p.yXt.STATUS
              }));
              else {
                let t = new c.Z(e);
                t.hasFieldErrors() ? I(t.getAnyErrorMessage()) : y((function(e) {
                  switch (e) {
                    case p.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                      return g.intl.string(g.t["11zzGR"]);
                    case p.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                      return g.intl.string(g.t["6qmgaG"]);
                    case p.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                      return g.intl.string(g.t.bChnKi);
                    default:
                      return g.intl.format(g.t.aTVNen, {
                        statusPageURL: p.yXt.STATUS
                      })
                  }
                })(t.code).toString())
              }
              d.S.dispatch(p.CkL.WAVE_EMPHASIZE)
            }).finally(() => {
              b(false)
            })
          }
        },
        submitting: E,
        disabled: E,
        children: g.intl.string(g.t.ezv91d)
      })]
    }), (0, r.jsx)("div", {
      className: m.buttonContainer,
      children: (0, r.jsx)(u.zx, {
        color: u.zx.Colors.PRIMARY,
        onClick: () => {
          S(""), l(f.n.START)
        },
        children: g.intl.string(g.t.rzxnQ0)
      })
    })]
  })
}