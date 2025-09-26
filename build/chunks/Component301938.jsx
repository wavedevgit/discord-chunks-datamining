/** Chunk was on 27978 **/
/** chunk id: 301938, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./415506.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
    token: E
  } = e, [v, b] = i.useState(false), [j, I] = i.useState(null), [N, O] = i.useState(null), [S, y] = i.useState(""), C = i.useRef(null);
  return i.useEffect(() => {
    if (x) {
      var e;
      null == (e = C.current) || e.focus()
    }
  }, [x]), (0, r.jsxs)("div", {
    children: [(0, r.jsx)(u.Ee, {
      src: null == N ? n(26230) : n(935227),
      className: s()(_.marginBottom20, _.marginTop8)
    }), (0, r.jsx)(u.Dx, {
      children: m.intl.string(m.t["IfBQ5+"])
    }), null != N && "" !== N ? (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "text-danger",
      children: N
    }) : null, (0, r.jsxs)(u.gO, {
      className: s()(_.marginBottom20, _.marginTop20),
      children: [(0, r.jsx)(u.II, {
        name: "password",
        type: "password",
        label: m.intl.string(m.t["8dM4FB"]),
        setRef: C,
        className: _.marginBottom20,
        value: S,
        onChange: y,
        error: j,
        autoComplete: "new-password",
        maxLength: 72,
        placeholder: m.intl.string(m.t["yY/PXV"])
      }), (0, r.jsx)(u.zx, {
        className: _.marginTop8,
        onClick: () => {
          if (!v) {
            if (0 === S.length) {
              I(m.intl.string(m.t.R98xDw)), d.S.dispatch(p.CkL.WAVE_EMPHASIZE);
              return
            }
            return null != N && O(null), null != j && I(null), t(""), b(true), h.Z.post({
              url: p.ANM.ACCOUNT_REVERT,
              body: {
                token: E,
                password: S
              },
              trackedActionData: {
                event: o.NetworkActionNames.ACCOUNT_REVERT
              },
              rejectWithError: false
            }).then(e => {
              let {
                body: {
                  email: n
                }
              } = e;
              y(""), t(n), l(g.n.SUCCESS)
            }).catch(e => {
              if (e instanceof Error) O(m.intl.formatToPlainString(m.t.aTVNen, {
                statusPageURL: p.yXt.STATUS
              }));
              else {
                let t = new c.Z(e);
                t.hasFieldErrors() ? I(t.getAnyErrorMessage()) : O((function(e) {
                  switch (e) {
                    case p.evJ.ACCOUNT_REVERT_INVALID_TOKEN:
                      return m.intl.string(m.t["11zzGR"]);
                    case p.evJ.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                      return m.intl.string(m.t["6qmgaG"]);
                    case p.evJ.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                      return m.intl.string(m.t.bChnKi);
                    default:
                      return m.intl.format(m.t.aTVNen, {
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
        submitting: v,
        disabled: v,
        children: m.intl.string(m.t.ezv91d)
      })]
    }), (0, r.jsx)("div", {
      className: f.buttonContainer,
      children: (0, r.jsx)(u.zx, {
        color: u.zx.Colors.PRIMARY,
        onClick: () => {
          y(""), l(g.n.START)
        },
        children: m.intl.string(m.t.rzxnQ0)
      })
    })]
  })
}