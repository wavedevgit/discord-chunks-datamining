/** Chunk was on 27978 **/
/** chunk id: 301938, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./415506.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
    token: b
  } = e, [v, E] = i.useState(false), [j, I] = i.useState(null), [y, O] = i.useState(null), [N, S] = i.useState(""), C = i.useRef(null);
  return i.useEffect(() => {
    if (x) {
      var e;
      null == (e = C.current) || e.focus()
    }
  }, [x]), (0, r.jsxs)("div", {
    children: [(0, r.jsx)(u.Ee, {
      src: null == y ? n(26230) : n(935227),
      className: a()(_.marginBottom20, _.marginTop8)
    }), (0, r.jsx)(u.Dx, {
      children: f.intl.string(f.t["IfBQ5+"])
    }), null != y && "" !== y ? (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-danger",
      children: y
    }) : null, (0, r.jsxs)(u.gO, {
      className: a()(_.marginBottom20, _.marginTop20),
      children: [(0, r.jsx)(u.II, {
        name: "password",
        type: "password",
        label: f.intl.string(f.t["8dM4FB"]),
        setRef: C,
        className: _.marginBottom20,
        value: N,
        onChange: S,
        error: j,
        autoComplete: "new-password",
        maxLength: 72,
        placeholder: f.intl.string(f.t["yY/PXV"])
      }), (0, r.jsx)(u.zx, {
        className: _.marginTop8,
        onClick: () => {
          if (!v) {
            if (0 === N.length) {
              I(f.intl.string(f.t.R98xDw)), d.S.dispatch(m.CkL.WAVE_EMPHASIZE);
              return
            }
            return null != y && O(null), null != j && I(null), t(""), E(true), h.Z.post({
              url: m.ANM.ACCOUNT_REVERT,
              body: {
                token: b,
                password: N
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
              S(""), t(n), l(p.n.SUCCESS)
            }).catch(e => {
              if (e instanceof Error) O(f.intl.formatToPlainString(f.t.aTVNen, {
                statusPageURL: m.yXt.STATUS
              }));
              else {
                let t = new c.Z(e);
                t.hasFieldErrors() ? I(t.getAnyErrorMessage()) : O((function(e) {
                  switch (e) {
                    case m.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                      return f.intl.string(f.t["11zzGR"]);
                    case m.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                      return f.intl.string(f.t["6qmgaG"]);
                    case m.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                      return f.intl.string(f.t.bChnKi);
                    default:
                      return f.intl.format(f.t.aTVNen, {
                        statusPageURL: m.yXt.STATUS
                      })
                  }
                })(t.code).toString())
              }
              d.S.dispatch(m.CkL.WAVE_EMPHASIZE)
            }).finally(() => {
              E(false)
            })
          }
        },
        submitting: v,
        disabled: v,
        children: f.intl.string(f.t.ezv91d)
      })]
    }), (0, r.jsx)("div", {
      className: g.buttonContainer,
      children: (0, r.jsx)(u.zx, {
        color: u.zx.Colors.PRIMARY,
        onClick: () => {
          S(""), l(p.n.START)
        },
        children: f.intl.string(f.t.rzxnQ0)
      })
    })]
  })
}